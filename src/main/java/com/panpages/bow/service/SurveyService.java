package com.panpages.bow.service;

import java.util.List;

import com.panpages.bow.model.Survey;

public interface SurveyService {
	
	void saveSurvey(Survey survey);
	List<Survey> findAllSurveys(); 
	
}
