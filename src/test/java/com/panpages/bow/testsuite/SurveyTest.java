package com.panpages.bow.testsuite;

import com.panpages.bow.service.report.ReportService;
import com.panpages.bow.service.report.ReportServiceImpl;

import junit.framework.TestCase;

public class SurveyTest extends TestCase {

	public void testExportReport() throws Exception {
		ReportService reportSvc = new ReportServiceImpl();
		String outputUrl = reportSvc.exportReport(1, "pdf");
		
		assertEquals(null, outputUrl);
	}
	
}
