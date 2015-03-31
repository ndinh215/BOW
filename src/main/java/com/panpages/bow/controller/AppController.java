package com.panpages.bow.controller;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

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

	@RequestMapping(value = { "/", "/index.html" }, method = RequestMethod.GET)
	public String home(ModelMap model) {
		return "index";
	}
	
	@RequestMapping(value = { "/templates.html" }, method = RequestMethod.GET)
	public String listTemplates(ModelMap model) {
		return "templates";
	}
	
	@RequestMapping(value = { "/survey/{surveyId}" }, method = RequestMethod.GET)
	public String survey(@PathVariable int surveyId) {
		String templatePath = ctx.getEnvironment().getProperty("template_path");
		String prefixName = ctx.getEnvironment().getProperty("prefix_template_name");
		String surveyName = String.format("%1$s%2$s", prefixName, surveyId);
		String surveyPath = String.format("%1$s%2$s%3$s", templatePath, File.separator, surveyName);
				
		return surveyPath;
	}
	
}
