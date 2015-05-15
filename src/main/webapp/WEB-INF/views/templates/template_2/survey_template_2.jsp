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
		<form:form method="POST" modelAttribute="surveyForm" enctype="multipart/form-data" action="survey_2.html?submit">
			<table>
				
				<tr>
					<td>language-advertiser-target<input name="fields['language-advertiser-target]" type="text"/></td>
				</tr>
				<tr>
					<td>language-advertiser-target<input name="fields['language-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>language-advertiser-target<input name="fields['language-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>language-advertiser-target<input name="fields['language-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>language-advertiser-target<input name="fields['language-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>geographical<input name="fields['geographical-area']" type="text"/></td>
				</tr>
				<tr>
					<td>geographical<input name="fields['geographical-area']" type="text"/></td>
				</tr>
				<tr>
					<td>geographical<input name="fields['geographical-area']" type="text"/></td>
				</tr>
				<tr>
					<td>geographical<input name="fields['geographical-area']" type="text"/></td>
				</tr>
				<tr>
					<td>geographical<input name="fields['geographical-area']" type="text"/></td>
				</tr>
				
				
				
				<tr>
					<td>profession-advertiser-target<input name="fields['profession-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>profession-advertiser-target<input name="fields['profession-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>profession-advertiser-target<input name="fields['profession-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>profession-advertiser-target<input name="fields['profession-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>profession-advertiser-target<input name="fields['profession-advertiser-target']" type="text"/></td>
				</tr>
				
				<tr>
					<td>age-advertiser-target<input name="fields['age-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>age-advertiser-target<input name="fields['age-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>age-advertiser-target<input name="fields['age-advertiser-target']" type="text"/></td>
				</tr>
				
				
				<tr>
					<td>gender-advertiser-target<input name="fields['gender-advertiser-target']" type="text"/></td>
				</tr>
				<tr>
					<td>gender-advertiser-target<input name="fields['gender-advertiser-target']" type="text"/></td>
				</tr>
				
				<tr>
					<td>geographical<input name="fields['proposed-keyword']" type="text"/></td>
				</tr>
				<tr>
					<td>geographical<input name="fields['proposed-keyword']" type="text"/></td>
				</tr>
				<tr>
					<td>geographical<input name="fields['proposed-keyword']" type="text"/></td>
				</tr>
				<tr>
					<td>geographical<input name="fields['proposed-keyword']" type="text"/></td>
				</tr>
				<tr>
					<td>geographical<input name="fields['proposed-keyword']" type="text"/></td>
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