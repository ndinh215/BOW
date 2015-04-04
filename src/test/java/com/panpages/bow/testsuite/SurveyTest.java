package com.panpages.bow.testsuite;

import java.sql.DriverManager;
import java.util.HashMap;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.design.JasperDesign;
import net.sf.jasperreports.engine.xml.JRXmlLoader;

import com.mysql.jdbc.Connection;
import com.panpages.bow.service.ReportServiceImpl;

import junit.framework.TestCase;

public class SurveyTest extends TestCase {

	public void testExportReport() throws Exception {
		ReportServiceImpl reportSvc = new ReportServiceImpl();
		exportFile();
		String outputUrl = reportSvc.exportReport(1, "pdf");
		assertEquals("Test string", outputUrl);
	}

	private static Connection getConnection() {
		Connection connection = null;
		try {
			Class.forName("org.gjt.mm.mysql.Driver").newInstance();
			connection = (Connection) DriverManager.getConnection("jdbc:mysql://localhost:3306/bow", "root", "");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return connection;
	}

	public boolean exportFile() {

		Connection connection = null;
		String jasperFile = "C:/Users/NghiaDinh/report1.jrxml";
		String pdfFile = "G:/Project/Planner/Source/BOW/src/main/webapp/WEB-INF/storage/reports/bow.pdf";

		HashMap<String, Object> params = new HashMap<String, Object>();
		
		params.put("pFieldId", 1); 
		try {
			connection = getConnection();
			
			JasperDesign jasperDesign = JRXmlLoader.load(jasperFile);
			JasperReport jasperReport = JasperCompileManager.compileReport(jasperDesign);

			JasperPrint print = JasperFillManager.fillReport(jasperReport, params, connection);
			JasperExportManager.exportReportToPdfFile(print, pdfFile);

		} catch (Exception e) {
			e.printStackTrace();
			return false;
		}
		
		return true;
	}

}
