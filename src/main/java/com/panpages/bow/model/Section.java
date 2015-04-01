package com.panpages.bow.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Section")
public class Section {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SECTION_ID", nullable = false)
	private int id;

	@Column(name = "SECTION_TEMPLATE_ID", nullable = false)
	private int sectionTemplateId;
	
	@Column(name = "NAME", nullable = false)
	private String name;
	
	@Column(name = "PATH", nullable = true)
	private String path;
	
	@Column(name = "DESC", nullable = false)
	private String desc;

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

	public int getSectionTemplateId() {
		return sectionTemplateId;
	}

	public void setSectionTemplateId(int sectionTemplateId) {
		this.sectionTemplateId = sectionTemplateId;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
}
