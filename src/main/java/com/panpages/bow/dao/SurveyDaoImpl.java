package com.panpages.bow.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Repository;

import com.panpages.bow.configuration.HibernateConfiguration;
import com.panpages.bow.model.Field;
import com.panpages.bow.model.FieldAndSectionRelation;
import com.panpages.bow.model.FieldTemplate;
import com.panpages.bow.model.Section;
import com.panpages.bow.model.SectionAndSurveyRelation;
import com.panpages.bow.model.SectionTemplate;
import com.panpages.bow.model.Survey;
import com.panpages.bow.model.SurveyForm;
import com.panpages.bow.model.SurveyTemplate;
import com.panpages.bow.service.survey.SurveyStatus;
import com.panpages.bow.service.utils.StringUtils;

@Repository("surveyDao")
public class SurveyDaoImpl extends AbstractDao implements SurveyDao{
	@Autowired 
	ApplicationContext ctx;
	
	public void saveSurvey(Survey survey) {
		if (survey.getId() != 0) {
			getSession().update(survey);
			return;
		}
		
		persist(survey);
	}

	@SuppressWarnings("unchecked")
	public List<Survey> findAllSurveys() {
		Criteria criteria = getSession().createCriteria(Survey.class);
		List<Survey> surveys = (List<Survey>) criteria.list();
		
		return surveys;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<SurveyTemplate> findAllSurveyTemplates() {
		Criteria criteria = getSession().createCriteria(SurveyTemplate.class);
		List<SurveyTemplate> templates = (List<SurveyTemplate>) criteria.list();
		
		return templates;
	}

	@SuppressWarnings("unchecked")
	@Override
	public Survey findSurveyWithId(int surveyId) {
		Criteria criteria = getSession().createCriteria(Survey.class);
		criteria.add(Restrictions.eq("id", surveyId));
		List<Survey> surveys = (List<Survey>) criteria.list();
		
		return surveys != null && surveys.size() > 0? surveys.get(0) : null;
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public FieldTemplate findFieldTemplateWithSlugName(String slugName) {
		Query query = getSession().createQuery("from FieldTemplate as f where f.slugName = :slug_name");
		query.setString("slug_name", slugName);
		List<FieldTemplate> result = query.list();
		
		return result != null && result.size() > 0? result.get(0) : null;
	}

	@Override
	public void saveField(Field field) {
		persist(field);
	}

	@Override
	public int saveSurveyForm(int templateId, SurveyForm form) {
		Session session = HibernateConfiguration.getSessionFactory().getObject().openSession();
		Transaction tx = null; 
		Survey survey = null;
		
	    try {
	    	// Start transaction
	        tx = session.beginTransaction();
	        
	        // Get survey template
	        SurveyTemplate surveyTemplate = findSurveyTemplateWithId(templateId);
	        
	        if (surveyTemplate == null) {
	        	return -1;
	        }
	        
			Map<String, Object> fields = form.getFields();
			
			// Create new survey
		    survey = new Survey();
			survey.setSurveyTemplateId(templateId);
			survey.setName(surveyTemplate.getName());
			survey.setStatus(SurveyStatus.PENDING.getValue());
			survey.setSurveyTemplate(surveyTemplate);
			
			saveSurvey(survey);
			
			// Create sections belonging to this survey
			List<SectionTemplate> sectionTemplates = surveyTemplate.getSectionTemplates();
			List<Section> sections = new ArrayList<Section>();
			for (int i = 0; sectionTemplates != null && sectionTemplates.size() > i; i++) {
				SectionTemplate sectionTemplate = sectionTemplates.get(i);
				
				Section section = new Section();
				section.setSectionTemplateId(sectionTemplate.getId());
				section.setName(sectionTemplate.getName());
				section.setSectionTemplate(sectionTemplate);
				
				saveSection(section);
				sections.add(section);
				
				// Create section and survey relation
				SectionAndSurveyRelation relation = new SectionAndSurveyRelation();
				relation.setSectionId(section.getId());
				relation.setSurveyId(survey.getId());
				
				saveSectionAndSurveyRelation(relation);
			}
			
			// Add fields to these sections
			for (String fieldName : fields.keySet()) {
				Object fieldValue = fields.get(fieldName);
				
				FieldTemplate fieldTemplate = findFieldTemplateWithSlugName(fieldName);
				if (fieldTemplate == null) {
					continue;
				}
				
				SectionTemplate sectionTemplate = findSectionTemplateContainingFieldTemplate(fieldTemplate.getId());
				Section parentSection = null;
				for (Section section : sections) {
					if (section.getSectionTemplateId() == sectionTemplate.getId()) {
						parentSection = section;
						break;
					}
				}
				
				if (fieldValue instanceof String) {
					// Add new field
					Field field = new Field();
					field.setFieldTemplateId(fieldTemplate.getId());
					field.setName(fieldTemplate.getName());
					field.setValue(StringUtils.nullValue(fieldValue, ""));
					field.setFieldTemplate(fieldTemplate);
					
					saveField(field);
					
					// Create field and section relation
					FieldAndSectionRelation relation = new FieldAndSectionRelation();
					relation.setFieldId(field.getId());
					relation.setSectionId(parentSection.getId());
					
					saveFieldAndSectionRelation(relation);
				}
				
				if (fieldValue instanceof String[]) {
					for (String fieldValueItem : (String[])fieldValue) {
						// Add new field
						Field field = new Field();
						field.setFieldTemplateId(fieldTemplate.getId());
						field.setName(fieldTemplate.getName());
						field.setValue(StringUtils.nullValue(fieldValueItem, ""));
						field.setFieldTemplate(fieldTemplate);
						
						saveField(field);
						
						// Create field and section relation
						FieldAndSectionRelation relation = new FieldAndSectionRelation();
						relation.setFieldId(field.getId());
						relation.setSectionId(parentSection.getId());
					}
				}
			}
			
			// Commit transaction
			tx.commit();
	      } catch (HibernateException e) {
	          if (tx != null) {
	        	  tx.rollback();
	          }
	          e.printStackTrace(); 
	          survey = null;
	       }finally {
	          session.close(); 
	     }
		
		return survey == null? -1 : survey.getId();
	}

	@SuppressWarnings("unchecked")
	public SectionTemplate findSectionTemplateContainingFieldTemplate(int fieldId) {
		Query query = getSession().createQuery("from SectionTemplate as s where exists (from s.fieldTemplates as f where f.id = :field_id)");
		query.setInteger("field_id", fieldId);
		List<SectionTemplate> result = query.list();
		
		return result != null && result.size() > 0? result.get(0) : null;
	}

	public void saveFieldAndSectionRelation(FieldAndSectionRelation relation) {
		persist(relation);
	}

	@Override
	public void saveSectionAndSurveyRelation(SectionAndSurveyRelation relation) {
		persist(relation);
	}

	@Override
	public void saveSection(Section section) {
		persist(section);
	}

	@Override
	public List<SectionTemplate> findSectionTemplatesBelongToSurveyTemplate(int templateId) {
		SurveyTemplate surveyTemplate = findSurveyTemplateWithId(templateId);
		
		return surveyTemplate == null? null : surveyTemplate.getSectionTemplates();
	}

	@SuppressWarnings("unchecked")
	@Override
	public SurveyTemplate findSurveyTemplateWithId(int templateId) {
		Query query = getSession().createQuery("from SurveyTemplate as s where s.id = :survey_id");
		query.setInteger("survey_id", templateId);
		List<SurveyTemplate> result = query.list();
		
		return result != null && result.size() > 0? result.get(0) : null;
	}
	
}
