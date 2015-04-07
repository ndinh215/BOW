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
				<h1>2015 ADVERTISING PLANNER</h1>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<img src="<c:url value="/assets/images/panpages_logo.jpg" />" alt="" />
			</div>
		</div>
		<form action="section1" method="get">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Revenue Increased:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="revenue-increased-input"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>No. Of Advertiser:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="no-of-advertiser-input"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Average Revenue Per Advertiser (ARPA):</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="arpa-input"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Closing Rate:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="closing-rate-input"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Leads Conversion Rate:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="leads-conversion-rate-input"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Campaign Period:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="campaign-period-input"></p>
				</div>
			</div>
		</form>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Revenue Increased:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="revenue-increased-output"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>ARPA:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="arpa-output"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>New Advertisers:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="new-advertisers-output"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Closing Rate:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="closing-rate-output"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Leads:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="leads-output"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Leads Conversion Rate:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="leads-conversion-rate-output"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Traffic Required:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="traffic-required-output"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Monthly Traffic:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="monthly-traffic-output"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Avg. Cost Per Click:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="avg-cost-per-click-output"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Estimated Monthly Budget:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="estimated-monthly-budget-output"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Total Campaign Budget:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="total-campaign-budget-output"></p>
			</div>
		</div>
		<div class="row">
			<h3>GEOGRAPHICAL COVERAGE</h3>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input name="nationwide" type="checkbox"/>Nationwide</p>
				<p><input name="kuala-lumpur" type="checkbox"/>Kuala Lumpur</p>
				<p><input name="klang-valley" type="checkbox"/>Klang Valley</p>
				<p><input name="perlis" type="checkbox"/>Perlis</p>
				<p><input name="kedah" type="checkbox"/>Kedah</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input name="kelantan" type="checkbox"/>Kelantan</p>
				<p><input name="penang" type="checkbox"/>Penang</p>
				<p><input name="perak" type="checkbox"/>Perak</p>
				<p><input name="terengganu" type="checkbox"/>Terengganu</p>
				<p><input name="pahang" type="checkbox"/>Pahang</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input name="negeri-sembilan" type="checkbox"/>Negeri Sembilan</p>
				<p><input name="melaka" type="checkbox"/>Melaka</p>
				<p><input name="johor" type="checkbox"/>Johor</p>
				<p><input name="sabah" type="checkbox"/>Sabah</p>
				<p><input name="sarawak" type="checkbox"/>Sarawak</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p>Other Countries:</p>
				<p><input name="thailand" type="checkbox"/>Thailand</p>
				<p><input name="singapore" type="checkbox"/>Singapore</p>
				<p><input name="indonesia" type="checkbox"/>Indonesia</p>
				<p><input name="others-countries" type="checkbox"/>Others:<input type="text" name="others-countries-text"></p>
			</div>
		</div>
		<div class="row">
			<h3>TARGETED AUDIENCE</h3>
		</div>
		<div class="row">
			<h4>Profession:</h4>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input name="accounting-finance" type="checkbox"/>Accounting/Finance</p>
				<p><input name="admin-HR" type="checkbox"/>Admin/HR</p>
				<p><input name="arts-communication" type="checkbox"/>Arts/Communication</p>
				<p><input name="building-construction" type="checkbox"/>Building/Construction</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input name="computer-IT" type="checkbox"/>Computer/IT</p>
				<p><input name="education-training" type="checkbox"/>Education/Training</p>
				<p><input name="engineering" type="checkbox"/>Engineering</p>
				<p><input name="healthcare" type="checkbox"/>Healthcare</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input name="hotel-restaurant" type="checkbox"/>Hotel/Restaurant</p>
				<p><input name="manufacturing" type="checkbox"/>Manufacturing</p>
				<p><input name="sales-marketing" type="checkbox"/>Sales/Marketing</p>
				<p><input name="science" type="checkbox"/>Science</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input name="services" type="checkbox"/>Services</p>
				<p><input name="others-targeted-audience" type="checkbox"/>Others:<input type="text" name="others-targeted-audience-text"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<h4>Preferred Language:</h4>
				<p><input name="english" type="checkbox"/>English</p>
				<p><input name="malay" type="checkbox"/>Malay</p>
				<p><input name="chinese" type="checkbox"/>Chinese</p>
				<p><input name="tamil" type="checkbox"/>Tamil</p>
				<p><input name="others-preferred-language" type="checkbox"/>Others:<input type="text" name="others-preferred-language-text"></p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<h4>Age:</h4>
				<p><input name="18-29-age" type="checkbox"/>18 - 29</p>
				<p><input name="30-49-age" type="checkbox"/>30 - 49</p>
				<p><input name="50-64-age" type="checkbox"/>50 - 64</p>
				<p><input name="others-age" type="checkbox"/>Others:<input type="text" name="others-age-text"></p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<h4>Gender:</h4>
				<p><input name="male" type="checkbox"/>Male</p>
				<p><input name="female" type="checkbox"/>Female</p>
			</div>
		</div>
	</div>
</body>
</html>