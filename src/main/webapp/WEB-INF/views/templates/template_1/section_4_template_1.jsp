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
<title>Insert title here</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
				<h1>2015 INVESTMENT PLAN</h1>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<img src="<c:url value="/assets/images/panpages_logo.jpg" />" alt="" />
			</div>
		</div>
		<form>
			<div class="row">
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
					<p><input type="text" name="fields['suggested-bid-input']" id="suggested-bid-input"></p>
				</div>
			</div>
			<div class="row">
				<input type="button" value="Add" id="add-new">
			</div>
		</form>
		<div class="row">
			<table  id="table-keyword">
				<tr>
					<th>Keyword</th>
					<th>Avg. Monthly Searches (exact match only)</th>		
					<th>Suggested bid</th>
					<th></th>
				</tr>
			</table>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<table>
					<tr>
						<td>Total Est. Impressions (100% Share of Voice)</td>
						<td><input name="fields['total-est-impressions']" id="total-est-impressions"/></td> 
					</tr>
					<tr>
						<td>Average Cost per Click</td>
						<td>$<input name="fields['average-cost-per-click']" id="average-cost-per-click"/></td> 
					</tr>
					<tr>
						<td>Assumed CTR for Search</td>
						<td><input name="fields['assumed-CTR-for-search']" id="assumed-CTR-for-search"/></td> 
					</tr>
					<tr>
						<td>Est. Clicks Assuming 3% CTR (100% Share of Voice)</td>
						<td><input name="fields['est-clicks-assuming']" id="est-clicks-assuming"/></td> 
					</tr>
					<tr>
						<td>Est. Monthly Investment (100% Share of Voice)</td>
						<td>$<input name="fields['est-monthly-investment-100']" id="est-monthly-investment-100"/></td> 
					</tr>
					<tr>
						<td>Est. Monthly Investment (50% Share of Voice)</td>
						<td>$<input name="fields['est-monthly-investment-50']" id="est-monthly-investment-50"/></td> 
					</tr>
				</table>
			</div>
		</div>
	</div>
</body>
</html>