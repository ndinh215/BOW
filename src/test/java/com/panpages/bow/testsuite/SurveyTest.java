package com.panpages.bow.testsuite; 

import com.panpages.bow.service.ReportServiceImpl;

import junit.framework.TestCase;

public class SurveyTest extends TestCase {
	
	public void testExportReport() throws Exception {
		ReportServiceImpl reportSvc = new ReportServiceImpl();
		String outputUrl = reportSvc.exportReport(1, "pdf");
		assertEquals("Test string", outputUrl);
	}

}
