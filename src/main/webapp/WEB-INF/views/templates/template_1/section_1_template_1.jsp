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
	Section 1
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<h1>2015 ADVERTISING PLANNER</h1>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<img src="<c:url value="/assets/images/panpages_logo.jpg" />" alt="" />
			</div>
		</div>
		<form action="section1" method="get">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p>Revenue Increased:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input type="text" name="revenue-increased"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p>No. Of Advertiser:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input type="text" name="no-of-advertiser"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p>Average Revenue Per Advertiser (ARPA):</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input type="text" name="arpa"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p>Closing Rate:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input type="text" name="closing-rate"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p>Leads Conversion Rate:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input type="text" name="leads-conversion-rate"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p>Campaign Period:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input type="text" name="campaign-period"></p>
				</div>
			</div>
		</form>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Revenue Increased</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>ARPA</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>New Advertisers</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Closing Rate</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Leads</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Leads Conversion Rate</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Traffic Required</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Monthly Traffic</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Avg. Cost Per Click</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Estimated Monthly Budget</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Total Campaign Budget</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			</div>
		</div>
		<div class="row">
			<h2>GEOGRAPHICAL COVERAGE</h2>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="nationwide" type="checkbox"/>Nationwide
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="kuala-lumpur" type="checkbox"/>Kuala Lumpur
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="klang-valley" type="checkbox"/>Klang Valley
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="perlis" type="checkbox"/>Perlis
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="kedah" type="checkbox"/>Kedah
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="kelantan" type="checkbox"/>Kelantan
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="penang" type="checkbox"/>Penang
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="perak" type="checkbox"/>Perak
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="terengganu" type="checkbox"/>Terengganu
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="pahang" type="checkbox"/>Pahang
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="negeri-sembilan" type="checkbox"/>Negeri Sembilan
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="melaka" type="checkbox"/>Melaka
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="johor" type="checkbox"/>Johor
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="sabah" type="checkbox"/>Sabah
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="sarawak" type="checkbox"/>Sarawak
		</div>
		<div class="row">
			<h3>Other Countries:</h3>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="thailand" type="checkbox"/>Thailand
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="singapore" type="checkbox"/>Singapore
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="indonesia" type="checkbox"/>Indonesia
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="others-countries" type="checkbox"/>Others:
		</div>
		<div class="row">
			<h2>TARGETED AUDIENCE</h2>
		</div>
		<div class="row">
			<h3>Profession:</h3>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="accounting-finance" type="checkbox"/>Accounting/Finance
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="admin-HR" type="checkbox"/>Admin/HR
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="arts-communication" type="checkbox"/>Arts/Communication
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="building-construction" type="checkbox"/>Building/Construction
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="computer-IT" type="checkbox"/>Computer/IT
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="education-training" type="checkbox"/>Education/Training
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="engineering" type="checkbox"/>Engineering
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="healthcare" type="checkbox"/>Healthcare
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="hotel-restaurant" type="checkbox"/>Hotel/Restaurant
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="manufacturing" type="checkbox"/>Manufacturing
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="sales-marketing" type="checkbox"/>Sales/Marketing
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="science" type="checkbox"/>Science
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="services" type="checkbox"/>Services
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="others-targeted-audience" type="checkbox"/>Others:
		</div>
		<div class="row">
			<h3>Preferred Language:</h3>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="english" type="checkbox"/>English
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="malay" type="checkbox"/>Malay
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="chinese" type="checkbox"/>Chinese
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="tamil" type="checkbox"/>Tamil
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="others-preferred-language" type="checkbox"/>Others:
		</div>
		<div class="row">
			<h3>Age:</h3>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="18-29-age" type="checkbox"/>18 - 29
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="30-49-age" type="checkbox"/>30 - 49
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="50-64-age" type="checkbox"/>50 - 64
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="others-age" type="checkbox"/>Others:
		</div>
		<div class="row">
			<h3>Gender:</h3>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="male" type="checkbox"/>Male
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="female" type="checkbox"/>Female
		</div>
	</div>
	<hr>
</body>
</html>