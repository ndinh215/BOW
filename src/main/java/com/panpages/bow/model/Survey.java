package com.panpages.bow.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

@Entity
@Table(name="Survey")
public class Survey {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int survey_id;

	@Size(min=3, max=50)
	@Column(name = "NAME", nullable = false)
	private String name;

	public int getId() {
		return survey_id;
	}

	public void setId(int id) {
		this.survey_id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
