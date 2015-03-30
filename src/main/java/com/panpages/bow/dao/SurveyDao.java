package com.panpages.bow.dao;

import java.util.List;

import com.panpages.bow.model.Survey;

public interface SurveyDao {

	void saveSurvey(Survey survey);
	List<Survey> findAllSurveys();
	
}
