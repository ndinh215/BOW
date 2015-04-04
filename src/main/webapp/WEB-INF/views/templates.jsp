<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Surveys Templates</title>
</head>
<body>
	<h2>List of Templates</h2>	
	<table>
		<tr>
			<th>Id</th><th>Survey Name</th><th>Description</th>
		</tr>
		<c:forEach items="${templates}" var="template">
			<tr>
				<td>${template.id}</td>
				<td>${template.name}</td>
				<td>${template.desc}</td>
			</tr>
			<c:forEach items="${template.sectionTemplates}" var="section">
				<tr>
					<td colspan="2">Section</td>
					<td>${section.name}</td>
				</tr>
				<c:forEach items="${section.fieldTemplates}" var="fieldTemplate">
					<tr>
						<td colspan="2">Field</td>
						<td>${fieldTemplate.name}</td>
					</tr>
				</c:forEach>
			</c:forEach>
		</c:forEach>
	</table>
	
	<h2>List of Surveys</h2>	
	<table>
		<tr>
			<th>Id</th><th>Survey Name</th><th>Description</th>
		</tr>
		<c:forEach items="${surveys}" var="survey">
			<tr>
				<td>${survey.id}</td>
				<td>${survey.name}</td>
				<td>${survey.desc}</td>
			</tr>
			<c:forEach items="${survey.sections}" var="section">
				<tr>
					<td colspan="2">Section</td>
					<td>${section.name}</td>
				</tr>
				<c:forEach items="${section.fields}" var="field">
					<tr>
						<td colspan="2">Field</td>
						<td>${field.name}</td>
						<td>${field.value}</td>
					</tr>
				</c:forEach>
			</c:forEach>
		</c:forEach>
	</table>
</body>
</html>