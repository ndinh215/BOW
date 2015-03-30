package com.panpages.bow.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.springframework.stereotype.Repository;

import com.panpages.bow.model.Survey;

@Repository("surveyDao")
public class SurveyDaoImpl extends AbstractDao implements SurveyDao{

	public void saveSurvey(Survey survey) {
		persist(survey);
	}

	@SuppressWarnings("unchecked")
	public List<Survey> findAllSurveys() {
		Criteria criteria = getSession().createCriteria(Survey.class);
		return (List<Survey>) criteria.list();
	}
	
}
