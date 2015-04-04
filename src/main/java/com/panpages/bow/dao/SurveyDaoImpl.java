package com.panpages.bow.dao;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Repository;

import com.panpages.bow.configuration.HibernateConfiguration;
import com.panpages.bow.model.Survey;
import com.panpages.bow.model.SurveyTemplate;

@Repository("surveyDao")
public class SurveyDaoImpl extends AbstractDao implements SurveyDao{
	@Autowired 
	ApplicationContext ctx;
	
	public void saveSurvey(Survey survey) {
		persist(survey);
	}

	@SuppressWarnings("unchecked")
	public List<Survey> findAllSurveys() {
		Session session = HibernateConfiguration.getSessionFactory().getObject().openSession();
		session.beginTransaction();
		Criteria criteria = getSession().createCriteria(Survey.class);
		List<Survey> surveys = (List<Survey>) criteria.list();
		session.getTransaction().commit();
		
		return surveys;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<SurveyTemplate> findAllSurveyTemplates() {
		Session session = HibernateConfiguration.getSessionFactory().getObject().openSession();
		session.beginTransaction();
		Criteria criteria = getSession().createCriteria(SurveyTemplate.class);
		List<SurveyTemplate> templates = (List<SurveyTemplate>) criteria.list();
		session.getTransaction().commit();
		
		return templates;
	}
	
}
