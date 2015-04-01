package com.panpages.bow.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Field")
public class Field {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "FIELD_ID", nullable = false)
	private int id;
	
	@Column(name = "FIELD_TEMPLATE_ID", nullable = false)
	private int fieldTemplateId;

	@Column(name = "VALUE", nullable = false)
	private String value;
	
	@Column(name = "DESC", nullable = false)
	private String desc;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}
}
