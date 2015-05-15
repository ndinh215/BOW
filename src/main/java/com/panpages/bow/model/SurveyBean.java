package com.panpages.bow.model;

import java.util.List;

public class SurveyBean {
	private List<Field> fields;
	
	public SurveyBean(List<Field> fields) {
		this.setFields(fields);
	}

	public List<Field> getFields() {
		return fields;
	}

	public void setFields(List<Field> fields) {
		this.fields = fields;
	}
}
