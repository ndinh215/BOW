<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jstl/xml" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jstl/sql" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Proposed Keywords</title>
</head>
<body>
	<div class="tab-section">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h1>2015 INVESTMENT PLAN</h1>
			</div>
		</div>
		<form>
			<div class="row" style="text-align: left">
				<p id="mesage-error-section4"></p>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Keyword:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['keyword-input']" id="keyword-input" ></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Avg. Monthly Searches (exact match only):</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['avg-monthly-searches-input']" id="avg-monthly-searches-input"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Suggested bid:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['suggested-bid-input']" id="suggested-bid-input"> &nbsp; <input type="button" value="Add Keyword" id="add-new"></p>
				</div>
			</div>
		</form>
		<div class="row">
			<table  id="table-keyword" style="width: 100%;">
				<tr>
					<th>Keyword</th>
					<th>Avg. Monthly Searches (exact match only)</th>		
					<th>Suggested bid</th>
					<th></th>
				</tr>
			</table>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" style="padding: 0;margin:0;">
				<div class="summary">
					<p>Summary</p>
				</div>
				<table>
					<tr>
						<td>Total Est. Impressions (100% Share of Voice)</td>
						<td><input name="fields['total-est-impressions']" id="total-est-impressions" style="background-color: #f2dcdb;"/></td> 
					</tr>
					<tr>
						<td>Average Cost per Click</td>
						<td><input name="fields['average-cost-per-click']" id="average-cost-per-click" style="background-color: #f2dcdb;"/>$</td> 
					</tr>
					<tr>
						<td>Assumed CTR for Search</td>
						<td><input name="fields['assumed-ctr-for-search']" id="assumed-CTR-for-search" style="background-color: #ffff00;"/></td> 
					</tr>
					<tr>
						<td>Est. Clicks Assuming 3% CTR (100% Share of Voice)</td>
						<td><input name="fields['est-clicks-assuming']" id="est-clicks-assuming" style="background-color: #f2dcdb;"/></td> 
					</tr>
					<tr>
						<td>Est. Monthly Investment (100% Share of Voice)</td>
						<td><input name="fields['est-monthly-investment-100']" id="est-monthly-investment-100" style="background-color: #f2dcdb;"/>$</td> 
					</tr>
					<tr>
						<td>Est. Monthly Investment (50% Share of Voice)</td>
						<td><input name="fields['est-monthly-investment-50']" id="est-monthly-investment-50" style="background-color: #f2dcdb;"/>$</td> 
					</tr>
				</table>
			</div>
		</div>
	</div>
</body>
</html>