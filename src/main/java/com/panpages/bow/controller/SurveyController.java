package com.panpages.bow.controller;

import java.io.File;
import java.util.List;

import javax.validation.Valid;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.panpages.bow.configuration.ConfigConstant;
import com.panpages.bow.model.Survey;
import com.panpages.bow.model.SurveyForm;
import com.panpages.bow.model.SurveyTemplate;
import com.panpages.bow.service.report.ReportService;
import com.panpages.bow.service.report.ReportType;
import com.panpages.bow.service.survey.SurveyService;
import com.panpages.bow.service.survey.SurveyStatus;

@Controller
@RequestMapping("/")
public class SurveyController {

	@Autowired ApplicationContext ctx;
	
	@Autowired
	SurveyService surveySvc;
	
	@Autowired
	ReportService reportSvc;
	
	private static final Logger logger = Logger.getLogger(SurveyController.class);

	@RequestMapping(value = { "/", "/index.html" }, method = RequestMethod.GET)
	public String home(ModelMap model) {
		return "index";
	}
	
	@RequestMapping(value = { "/templates.html" }, method = RequestMethod.GET)
	public String listTemplates(ModelMap model) {
		List<SurveyTemplate> surveyTemplates = surveySvc.findAllSurveyTemplates();
		model.addAttribute("templates", surveyTemplates);
		
		return "templates";
	}
	
	@RequestMapping(value = { "/survey_{surveyTemplateId}.html" }, method = RequestMethod.GET)
	public String showSurvey(@PathVariable int surveyTemplateId) {
		String templatePath = ctx.getEnvironment().getProperty(ConfigConstant.TEMPLATE_PATH.getName());
		String prefixName = ctx.getEnvironment().getProperty(ConfigConstant.PREFIX_TEMPLATE_NAME.getName());
		String prefixTemplateDirName = ctx.getEnvironment().getProperty(ConfigConstant.TEMPLATE_FOLDER_NAME_PREFIX.getName());
		String surveyDirName = String.format("%1$s%2$s", prefixTemplateDirName, surveyTemplateId);
		String surveyName = String.format("%1$s%2$s", prefixName, surveyTemplateId);
		String surveyPath = String.format("%1$s%2$s%3$s%4$s%5$s", templatePath, File.separator, surveyDirName, File.separator, surveyName);
		
		logger.info("Process the survey " + surveyName);
		return surveyPath;
	}
	
	@RequestMapping(value = { "/survey_{surveyTemplateId}.html" }, method = RequestMethod.POST)
	public String saveSurvey(@PathVariable int surveyTemplateId, 
							 @Valid SurveyForm form, 
							 BindingResult result, 
							 ModelMap model) {
		
		surveyTemplateId = 1;
		int surveyId = surveySvc.saveSurveyForm(surveyTemplateId, form);
		
		// Redirect to error page with surveyId -1
		if (surveyId == -1) {
			return "redirect:/error.html";
		}
		
		// Export survey
		Survey survey = surveySvc.findSurveyWithId(surveyId);
		//survey.setSurveyTemplate(surveySvc.findSurveyTemplateWithId(surveyTemplateId));
		String reportName = reportSvc.exportReport(survey, ReportType.PDF.getName());
		String reportViewPath = String.format("%1$s_%2$s_%3$s.html", "/view", reportName, ReportType.PDF.getName());
		
		// Update status and storage name
		survey.setStatus(SurveyStatus.COMPLETED.getValue());
		survey.setStorageName(reportName);
		surveySvc.saveSurvey(survey);
		
		return "redirect:" + reportViewPath;
	}
	
	@RequestMapping(value = { "/error.html" }, method = RequestMethod.GET)
	public String showError(ModelMap model) {
		return "error";
	}
}
