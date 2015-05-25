package com.panpages.bow.service.survey;

import java.io.File;
import java.util.Map;

import com.panpages.bow.model.Survey;

public interface SurveyCalculate {
	
	public void calculateFields(Survey survey, SurveyService surveySvc);
	public String calculateField(String fieldName, File fieldsFile, Map<String, Object> map);
	
}
