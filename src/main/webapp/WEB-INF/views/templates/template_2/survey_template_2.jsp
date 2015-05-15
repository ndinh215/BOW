<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<style>
.error {
	color: #ff0000;
}
</style>
</head>
<body>
	<div class="container">
		<form:form method="POST" modelAttribute="surveyForm" enctype="multipart/form-data" action="survey_2.html">
			<table>
				<tr>
					<td><label for="consultant-name">Consultant name: </label></td>
					<td><input name="fields['consultant-name']" type="text"/></td>
				</tr>
				<tr>
					<td><label for="consultant-email-address">Consultant email: </label></td>
					<td><input name="fields['consultant-email-address']" type="text"/></td>
				</tr>
				<tr>
					<td><label for="advertiser-company-name">Advertiser company name: </label></td>
					<td><input name="fields['advertiser-company-name']" type="text"/></td>
				</tr>
				<tr>
					<td><label for="proposed-keyword">Proposed Keyword: </label></td>
					<td><input name="fields['proposed-keyword']" type="file"/></td>
				</tr>
				<tr>
					<td><input type="submit" value="OK" /></td>
				</tr>
			</table>
			<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
		</form:form>
	</div>
</body>
</html>