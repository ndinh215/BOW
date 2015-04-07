package com.panpages.bow.model.utils;

import java.util.ArrayList;
import java.util.List;

import com.panpages.bow.model.Field;
import com.panpages.bow.model.FieldTemplate;
import com.panpages.bow.model.Section;
import com.panpages.bow.model.SectionTemplate;

public class SurveyUtils {
	
	public static Section findSectionWithSectionTemplateSlugName(String slugName, List<Section> sectionSet) {
		if (slugName == null || slugName.trim().equals("") || sectionSet.size() == 0) {
			return null;
		}
		
		for (Section section:sectionSet) {
			SectionTemplate sectionTempl = section.getSectionTemplate();
			String templSlugName = sectionTempl.getSlugName();
			if (slugName.equalsIgnoreCase(templSlugName)) {
				return section;
			}
		}
		
		return null;
	}
	
	public static Field findFieldWithFieldTemplateSlugName(String slugName, List<Field> fields) {
		if (slugName == null || slugName.trim().equals("") || fields.size() == 0) {
			return null;
		}
		
		for (Field field:fields) {
			FieldTemplate fieldTempl = field.getFieldTemplate();
			String templSlugName = fieldTempl.getSlugName();
			if (slugName.equalsIgnoreCase(templSlugName)) {
				return field;
			}
		}
		
		return null;
	}
	
	public static List<Field> findFieldsWithFieldTemplateSlugName(String slugName, List<Field> fields) {
		if (slugName == null || slugName.trim().equals("") || fields.size() == 0) {
			return null;
		}
		
		List<Field> resultFields = new ArrayList<Field>();
		for (Field field:fields) {
			FieldTemplate fieldTempl = field.getFieldTemplate();
			String templSlugName = fieldTempl.getSlugName();
			if (slugName.equalsIgnoreCase(templSlugName)) {
				resultFields.add(field);
			}
		}
		
		return resultFields;
	}
	
}
