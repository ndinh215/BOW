package com.panpages.bow.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.panpages.bow.model.Survey;
import com.panpages.bow.service.SurveyService;

@Controller
@RequestMapping("/")
public class AppController {

	@Autowired
	SurveyService service;

	@RequestMapping(value = { "/", "/list" }, method = RequestMethod.GET)
	public String listSurveys(ModelMap model) {

		List<Survey> surveys = service.findAllSurveys();
		model.addAttribute("surveys", surveys);
		return "surveys";
	}
	
}
