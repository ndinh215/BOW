<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jstl/xml" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jstl/sql" %>
<html>
<head>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	Section 1
	<img src="<c:url value="/assets/images/panpages_logo.jpg" />" alt="" />
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
					<p><input type="text" name="revenueIncreased"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p>No. Of Advertiser:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input type="text" name="noofAdvertiser"></p>
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
					<p><input type="text" name="closingRate"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p>Leads Conversion Rate:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input type="text" name="leadsConversionrate"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p>Campaign Period:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input type="text" name="campaignPeriod"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p><input type="submit" value="OK" name="okButton"></p>
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
			<input name="html" type="checkbox" value="html"/>Nationwide
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Kuala Lumpur
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Klang Valley
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Perlis
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Kedah
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Kelantan
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Penang
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Perak
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Terengganu
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Pahang
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Negeri Sembilan
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Melaka
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Johor
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Sabah
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Sarawak
		</div>
		<div class="row">
			<h3>Other Countries:</h3>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Thailand
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Singapore
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Indonesia
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Others:
		</div>
		<div class="row">
			<h2>TARGETED AUDIENCE</h2>
		</div>
		<div class="row">
			<h3>Profession:</h3>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Accounting/Finance
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Admin/HR
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Arts/Communication
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Building/Construction
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Computer/IT
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Education/Training
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Engineering
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Healthcare
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Hotel/Restaurant
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Manufacturing
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Sales/Marketing
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Science
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Services
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Others:
		</div>
		<div class="row">
			<h3>Preferred Language:</h3>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>English
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Malay
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Chinese
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Tamil
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Others:
		</div>
		<div class="row">
			<h3>Age:</h3>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>18 - 29
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>30 - 49
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>50 - 64
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Others:
		</div>
		<div class="row">
			<h3>Gender:</h3>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Male
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<input name="html" type="checkbox" value="html"/>Female
		</div>
	</div>
</body>
</html>