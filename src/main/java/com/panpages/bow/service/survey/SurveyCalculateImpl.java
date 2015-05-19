package com.panpages.bow.service.survey;

import java.util.List;

import com.panpages.bow.model.Field;
import com.panpages.bow.model.Section;
import com.panpages.bow.model.Survey;
import com.panpages.bow.model.utils.SurveyUtils;
import com.panpages.bow.service.utils.StringUtils;

public class SurveyCalculateImpl implements SurveyCalculate {

	@Override
	public void calculateFields(Survey survey, SurveyService surveySvc) {
		if (survey == null || survey.getId() == -1) {
			return;
		}
		
		///////////////////// Count indexes /////////////////////
		// Average of bid (proposed-keyword[2])
		float averageCostPerClick = -1;
		
		// Total estimated impression
		float totalEstImpression = -1;
		
		Section proposedKeywordSection = SurveyUtils.findSectionWithSectionTemplateSlugName(SurveyFieldName.SECTION_KEYWORD_PLAN.getName(), survey.getSections());
		List<Field> keywordFields = SurveyUtils.findFieldsWithFieldTemplateSlugName(SurveyFieldName.FIELD_PROPOSED_KEYWORD.getName(), proposedKeywordSection.getFields());
		
		if (keywordFields == null || keywordFields.size() == 0) {
			return;
		}
		
		Float totalAverageSearch = (float) 0;
		Float totalAverageCost = (float) 0;
		int keywordCount = 0;
		for (Field keyword:keywordFields) {
			if (keywordCount++ == 0) {
				continue;
			}
			
			try {
				String[] valueItems = keyword.getValue().split(",");
				
				String estImpression = StringUtils.nullValue(valueItems[1], null);
				String costPerClick = StringUtils.nullValue(valueItems.length >= 3? valueItems[2] : "0", null);
				if (estImpression == null) {
					return;
				}
			
				Float estImpressionFloat = Float.parseFloat(estImpression.trim());
				Float costPerClickFloat = Float.parseFloat(costPerClick.trim());
				
				totalAverageSearch += estImpressionFloat;
				totalAverageCost += costPerClickFloat;
			} catch (Exception e) {
				e.printStackTrace();
				return;
			}
		}
		
		totalEstImpression = totalAverageSearch;
		averageCostPerClick = totalAverageCost == 0? 0 : totalAverageCost/keywordFields.size();
		
		// Campaign click through rate or 2% 
		float assumedCTR = (float) 0.02;
		Field CTRField = SurveyUtils.findFieldWithFieldTemplateSlugName(SurveyFieldName.FIELD_CAMPAIGN_CLICK_THROUGH_RATE.getName(), survey);
		if (CTRField != null) {
			try {
				Float floatValue = Float.parseFloat(CTRField.getValue());
				assumedCTR = floatValue;
			} catch (NumberFormatException e) {
				e.printStackTrace();
				return;
			}
		}
		
		
		// Estimated click on CTR
		float estClickOnCTR = -1;
		estClickOnCTR = totalEstImpression * assumedCTR;
		
		// Estimated monthly investment
		float estMonthlyInvestment = -1;
		estMonthlyInvestment = estClickOnCTR * averageCostPerClick;
		
		///////////////////// Save indexes ///////////////////////
		if (estMonthlyInvestment != -1) {
			surveySvc.addField(SurveyFieldName.FIELD_EST_MONTHLY_INVESTMENT.getName(), String.valueOf(estMonthlyInvestment), survey);
		}
		
		if (totalEstImpression != -1) {
			surveySvc.addField(SurveyFieldName.FIELD_TOTAL_EST_IMPRESSIONS.getName(), String.valueOf(totalEstImpression), survey);
		}
		
		if (estClickOnCTR != -1) {
			surveySvc.addField(SurveyFieldName.FIELD_EST_CLICKS_ON_CTR.getName(), String.valueOf(estClickOnCTR), survey);
		}
	}

}
