package com.panpages.bow.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@Table(name="Survey")
public class Survey {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SURVEY_ID", nullable = false)
	private int id;

	@Column(name = "SURVEY_TEMPLATE_ID", nullable = false)
	private int surveyTemplateId;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="SURVEY_TEMPLATE_ID", insertable=false, updatable=false)
	private SurveyTemplate surveyTemplate; 
	
	@Column(name = "NAME", nullable = false)
	private String name;
	
	@Column(name = "[DESC]", nullable = true)
	private String desc;
	
	@Column(name = "STATUS", nullable = true)
	private String status;
	
	@Column(name = "STORAGE_NAME", nullable = false)
	private String storageName;
	
	@Column(name = "FULFILLED_DATE", nullable = true)
	private String fulfilledDate;
	
	@ManyToMany()
	@LazyCollection(LazyCollectionOption.FALSE)
	@JoinTable(
			name = "Section_Survey_Relation",
			joinColumns =  { @JoinColumn(name = "SURVEY_ID", referencedColumnName = "SURVEY_ID") }, 
			inverseJoinColumns = { @JoinColumn(name = "SECTION_ID", table = "Section", referencedColumnName = "SECTION_ID") })
	private List<Section> sections; 

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public List<Section> getSections() {
		return sections;
	}

	public void setSections(List<Section> sections) {
		this.sections = sections;
	}

	public SurveyTemplate getSurveyTemplate() {
		return surveyTemplate;
	}

	public void setSurveyTemplate(SurveyTemplate surveyTemplate) {
		this.surveyTemplate = surveyTemplate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getStorageName() {
		return storageName;
	}

	public void setStorageName(String storageName) {
		this.storageName = storageName;
	}

	public int getSurveyTemplateId() {
		return surveyTemplateId;
	}

	public void setSurveyTemplateId(int surveyTemplateId) {
		this.surveyTemplateId = surveyTemplateId;
	}

	public String getFulfilledDate() {
		return fulfilledDate;
	}

	public void setFulfilledDate(String fulfilledDate) {
		this.fulfilledDate = fulfilledDate;
	}
	
}
