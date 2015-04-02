package com.panpages.bow.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name="Survey_Template")
public class SurveyTemplate {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SURVEY_ID", nullable = false)
	private int id;

	@Column(name = "NAME", nullable = false)
	private String name;
	
	@Column(name = "PATH", nullable = true)
	private String path;
	
	@Column(name = "DESC", nullable = false)
	private String desc;
	
	@Autowired
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(
			name = "Section_Survey_Relation_In_Template",
			joinColumns =  { @JoinColumn(name = "SURVEY_ID", referencedColumnName = "SURVEY_ID") }, 
			inverseJoinColumns = { @JoinColumn(name = "SECTION_ID", table = "Section_Template", referencedColumnName = "SECTION_ID") })
	private Set<SectionTemplate> sectionTemplates; 

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

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public Set<SectionTemplate> getSectionTemplates() {
		return sectionTemplates;
	}

	public void setSectionTemplates(Set<SectionTemplate> sectionTemplates) {
		this.sectionTemplates = sectionTemplates;
	}
}
