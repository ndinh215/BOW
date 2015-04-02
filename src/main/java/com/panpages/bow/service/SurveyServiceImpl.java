package com.panpages.bow.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.panpages.bow.dao.SurveyDao;
import com.panpages.bow.model.Survey;
import com.panpages.bow.model.SurveyTemplate;

@Service("surveyService")
@Transactional
public class SurveyServiceImpl implements SurveyService{

	@Autowired
	private SurveyDao dao;
	
	public void saveSurvey(Survey survey) {
		dao.saveSurvey(survey);
	}

	public List<Survey> findAllSurveys() {
		return dao.findAllSurveys();
	}

	@Override
	public List<SurveyTemplate> findAllSurveyTemplates() {
		return dao.findAllSurveyTemplates();
	}

}
