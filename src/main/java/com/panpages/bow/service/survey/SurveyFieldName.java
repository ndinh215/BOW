package com.panpages.bow.service.survey;

public enum SurveyFieldName {
	
	FIELD_EST_MONTHLY_INVESTMENT("est-monthly-investment"),
	FIELD_TOTAL_EST_IMPRESSIONS("total-est-impressions"),
	FIELD_EST_CLICKS_ON_CTR("est-clicks-on-ctr"), 
	FIELD_CAMPAIGN_CLICK_THROUGH_RATE("campaign-click-through-rate"),
	FIELD_PROPOSED_KEYWORD("proposed-keyword"),
	
	SECTION_KEYWORD_PLAN("section-9");
	
	private String name;
	
	SurveyFieldName(String value) {
		this.name = value;
	}

	public String getName() {
		return name;
	}
			
}
