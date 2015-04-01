package com.panpages.bow.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

@Service("reportService")
public class ReportServiceImpl implements ReportService {
	@Autowired ApplicationContext ctx;

	@Override
	public String exportReport(int surveyId, String format) {
		//String templatePath = ctx.getEnvironment().getProperty("report_template_path");
		
		return null;
	}

}
