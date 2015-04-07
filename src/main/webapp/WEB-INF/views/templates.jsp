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
			<th>Id</th>
			<th>Survey Name</th>
			<th>Description</th>
			<th>#</th>
		</tr>
		<c:forEach items="${templates}" var="template">
			<tr>
				<td>${template.id}</td>
				<td>${template.name}</td>
				<td>${template.desc}</td>
				<td><a href="<c:url value="survey_${template.id}.html"/>">Go to this Survey</a>
			</tr>
		</c:forEach>
	</table>
</body>
</html>