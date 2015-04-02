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
		Criteria criteria = getSession().createCriteria(Survey.class);
		return (List<Survey>) criteria.list();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<SurveyTemplate> findAllSurveyTemplates() {
		//SessionFactory sessionFac = new Configuration().configure().buildSessionFactory();
		 
		Session session = HibernateConfiguration.getSessionFactory().getObject().openSession();

		session.beginTransaction();
		Criteria criteria = session.createCriteria(SurveyTemplate.class);
		
		session.getTransaction().commit();
		return (List<SurveyTemplate>) criteria.list();
	}
	
}
