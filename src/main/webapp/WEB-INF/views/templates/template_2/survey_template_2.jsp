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
		<form:form method="POST" modelAttribute="surveyForm" action="survey_2.html">
			<h2>Survey Template 4</h2>
			<table>
				<tr>
					<td><input type="submit" value="OK" id="first-name" /></td>
				</tr>
				<tr>
					<td><label for="first-name">Proposed Keyword: </label></td>
					<td><input name="fields['proposed-keyword']" id="first-name" /></td>
				</tr>
				<tr>
					<td><label for="first-name">Proposed Keyword: </label></td>
					<td><input name="fields['proposed-keyword']" id="first-name" /></td>
				</tr>
				<tr>
					<td><label for="first-name">Proposed Keyword: </label></td>
					<td><input name="fields['proposed-keyword']" id="first-name" /></td>
				</tr>
			</table>
			<h2>Survey Template 1</h2>
			<input type="text" name="fields['option-a-malaysia-panpages']">
			<input type="text" name="fields['price-option-a-malaysia-panpages']">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Revenue Increased:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['revenue-increased']"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>No. Of Advertiser:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['no-of-advertiser']"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Average Revenue Per Advertiser (ARPA):</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['average-revenue-per-advertiser']"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Closing Rate:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['closing-rate']"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Leads Conversion Rate:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['leads-conversion-rate']"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Campaign Period:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['campaign-period']"></p>
				</div>
			</div>
				<tr>
					<td><input type="submit" value="OK" id="first-name" /></td>
				</tr>
		</form:form>
	</div>
</body>
</html>