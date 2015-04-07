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
	Survey template 2
	<div class="container">
		<form:form method="POST" modelAttribute="surveyForm" action="survey_2.html">
			<table>
				<tr>
					<td><label for="first-name">First name: </label> </td>
					<td><input name="fields['first-name']" id="first-name"/></td>
			    </tr>
			    <tr>
					<td><label for="last-name">Last name: </label> </td>
					<td><input type="checkbox" name="fields['last-name']" id="last-name"/></td>
			    </tr>
				<tr>
					<td colspan="3"><input type="submit" value="Register"/></td>
				</tr>
			</table>
		</form:form>
	</div>
</body>
</html>