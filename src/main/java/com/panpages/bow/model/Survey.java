package com.panpages.bow.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;
import javax.validation.constraints.Size;

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
	
	@OneToOne(fetch = FetchType.EAGER)
	@PrimaryKeyJoinColumn(name="SURVEY_TEMPLATE_ID", referencedColumnName="SURVEY_ID")
	private SurveyTemplate surveyTemplate; 
	
	@Size(min=3, max=50)
	@Column(name = "NAME", nullable = false)
	private String name;
	
	@Column(name = "DESC", nullable = true)
	private String desc;
	
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
	
	public Section findSectionWithSectionTemplateSlugName(String slugName) {
		if (slugName == null || slugName.trim().equals("") || sections.size() == 0) {
			return null;
		}
		
		for (Section section:sections) {
			SectionTemplate sectionTempl = section.getSectionTemplate();
			String templSlugName = sectionTempl.getSlugName();
			if (slugName.equalsIgnoreCase(templSlugName)) {
				return section;
			}
		}
		
		return null;
	}
	
}
