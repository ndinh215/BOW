package com.panpages.bow.dao;

import java.util.List;

import com.panpages.bow.model.Survey;
import com.panpages.bow.model.SurveyTemplate;

public interface SurveyDao {

	void saveSurvey(Survey survey);
	List<Survey> findAllSurveys();
	List<SurveyTemplate> findAllSurveyTemplates();
	
}
