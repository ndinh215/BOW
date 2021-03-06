package com.panpages.bow.controller;

import java.io.File;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.panpages.bow.configuration.ConfigConstant;
import com.panpages.bow.service.report.ReportService;
import com.panpages.bow.service.survey.SurveyService;

@Controller
@RequestMapping("/")
public class ReportController {

	@Autowired ApplicationContext ctx;
	
	@Autowired
	SurveyService surveySvc;
	
	@Autowired
	ReportService reportSvc;
	
	private static final Logger logger = Logger.getLogger(ReportController.class);
	
	@RequestMapping(value = { "/view/{surveyId}/{outputId}_{outputType}.html" }, method = RequestMethod.GET)
	public String viewReport(@PathVariable int surveyId,
							 @PathVariable String outputId, 
							 @PathVariable String outputType, 
							 ModelMap model) {
		logger.info(String.format("View the survey %1$s with format %2$s", outputId, outputType));
		
		String reportBasePath = ctx.getEnvironment().getProperty(ConfigConstant.REPORT_OUTPUT_BASE_URL.getName());
		String reportPath = String.format("%1$s%2$s%3$s%4$s%5$s.%6$s", reportBasePath, File.separator, outputType, File.separator, outputId, outputType);
		model.addAttribute("surveyId", surveyId);
		model.addAttribute("reportPath", reportPath);
		
		return "view_report";
	}
	
	@RequestMapping(value = { "/preview/{surveyId}/{outputId}_{outputType}.html" }, method = RequestMethod.GET)
	public String previewReport(@PathVariable int surveyId,
								@PathVariable String outputId, 
								@PathVariable String outputType, 
								ModelMap model) {
		logger.info(String.format("View the survey %1$s with format %2$s", outputId, outputType));
		
		String reportBasePath = ctx.getEnvironment().getProperty(ConfigConstant.REPORT_OUTPUT_BASE_URL.getName());
		String reportPath = String.format("%1$s%2$s%3$s%4$s%5$s.%6$s", reportBasePath, File.separator, outputType, File.separator, outputId, outputType);
		model.addAttribute("surveyId", surveyId);
		model.addAttribute("reportPath", reportPath);
		model.addAttribute("isPreview", true);
		
		return "view_report";
	}
	
}
