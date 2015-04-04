package com.panpages.bow.controller;

import java.io.File;
import java.util.HashMap;
import java.util.List;

import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.panpages.bow.model.Survey;
import com.panpages.bow.model.SurveyTemplate;
import com.panpages.bow.service.ReportService;
import com.panpages.bow.service.SurveyService;

@Controller
@RequestMapping("/")
public class AppController {

	@Autowired ApplicationContext ctx;
	
	@Autowired
	SurveyService surveySvc;
	
	@Autowired
	ReportService reportSvc;
	
	private static final Logger logger = Logger.getLogger(AppController.class);

	@RequestMapping(value = { "/", "/index.html" }, method = RequestMethod.GET)
	public String home(ModelMap model) {
		return "index";
	}
	
	@RequestMapping(value = { "/templates.html" }, method = RequestMethod.GET)
	public String listTemplates(ModelMap model) {
		List<SurveyTemplate> surveyTemplates = surveySvc.findAllSurveyTemplates();
		model.addAttribute("templates", surveyTemplates);
		
		List<Survey> surveys = surveySvc.findAllSurveys();
		model.addAttribute("surveys", surveys);
		
		exportFile(surveys);
		
		return "templates";
	}
	
	public boolean exportFile(List<Survey> surveys) {

		String jasperFile = "C:/Users/NghiaDinh/report1.jrxml";
		String pdfFile = "G:/Project/Planner/Source/BOW/src/main/webapp/WEB-INF/storage/reports/bow.pdf";

		HashMap<String, Object> params = new HashMap<String, Object>();
		try {
			JasperDesign jasperDesign = JRXmlLoader.load(jasperFile);
			JasperReport jasperReport = JasperCompileManager.compileReport(jasperDesign);

			JasperPrint print = JasperFillManager.fillReport(jasperReport, params, new JRBeanCollectionDataSource(surveys));
			JasperExportManager.exportReportToPdfFile(print, pdfFile);

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return true;
	}
	
	@RequestMapping(value = { "/survey_{surveyId}.html" }, method = RequestMethod.GET)
	public String survey(@PathVariable int surveyId) {
		String templatePath = ctx.getEnvironment().getProperty("template_path");
		String prefixName = ctx.getEnvironment().getProperty("prefix_template_name");
		String prefixTemplateDirName = ctx.getEnvironment().getProperty("template_folder_name_prefix");
		String surveyDirName = String.format("%1$s%2$s", prefixTemplateDirName, surveyId);
		String surveyName = String.format("%1$s%2$s", prefixName, surveyId);
		String surveyPath = String.format("%1$s%2$s%3$s%4$s%5$s", templatePath, File.separator, surveyDirName, File.separator, surveyName);
		
		logger.info("Process the survey " + surveyName);
		return surveyPath;
	}
	
}
