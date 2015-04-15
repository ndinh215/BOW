<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jstl/xml" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jstl/sql" %>
<html>
<head>
<!-- <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1"> -->
<!-- <title>Planner 1</title> -->
<%-- <script src="<c:url value="/template_assets/template_1/assets/js/jquery.min_v2.1.3.js" />"></script> --%>
<%-- <script src="<c:url value="/template_assets/template_1/assets/js/template_1.js" />"></script> --%>
<%-- <script src="<c:url value="/assets/js/jquery.mCustomScrollbar_v3.0.2 .js" />"></script> --%>
<%-- <link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/jquery.mCustomScrollbar_v3.0.2.css" />" > --%>
</head>
<body>
	<div class="tab-section" style ="text-align: left">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h1 class="title-tab">2015 ADVERTISING PLANNER</h1>
			</div>
		</div>
			<div class="row section-1">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Revenue Increased (*):</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['revenue-increased']" id="revenue-increased-input" style="background-color: #ffff00;"></p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p id="revenue-increased-input-error"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>No. Of Advertiser:</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['no-of-advertiser']" id="no-of-advertiser-input" style="background-color: #f2dcdb;"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Average Revenue Per Advertiser (ARPA) (*):</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['average-revenue-per-advertiser']" id="arpa-input" style="background-color: #ffff00;"></p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p id="arpa-input-error"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Closing Rate (*):</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['closing-rate']" id="closing-rate-input" style="background-color: #ffff00;"></p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p id="closing-rate-input-error"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Leads Conversion Rate (*):</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['leads-conversion-rate']" id="leads-conversion-rate-input" style="background-color: #ffff00;"></p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p id="leads-conversion-rate-input-error"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					<p>Campaign Period (*):</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
					<p><input type="text" name="fields['campaign-period']" id="campaign-period-input" style="background-color: #ffff00;"></p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p id="campaign-period-input-error"></p>
				</div>
			</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Revenue Increased:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['revenue-increased']" id="revenue-increased-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>ARPA:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['average-revenue-per-advertiser']" id="arpa-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>New Advertisers:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['no-of-advertiser']" id="new-advertisers-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Closing Rate:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['closing-rate']" id="closing-rate-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Leads:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['leads']" id="leads-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Leads Conversion Rate:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['leads-conversion-rate']" id="leads-conversion-rate-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Traffic Required:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['traffic-required']" id="traffic-required-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Monthly Traffic:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['monthly-traffic']" id="monthly-traffic-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Avg. Cost Per Click:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['avg-cost-per-click']" id="avg-cost-per-click-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Estimated Monthly Budget:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['estimated-monthly-budget']" id="estimated-monthly-budget-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p>Total Campaign Budget:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
				<p><input type="text" name="fields['total-campaign-budget']" id="total-campaign-budget-output" style="background-color: #f2dcdb;"></p>
			</div>
		</div>
		<div class="row">
			<h3>GEOGRAPHICAL COVERAGE</h3>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input type="checkbox" name="fields['nationwide']" id="nationwide" value="false">Nationwide</p>
				<p><input type="checkbox" name="fields['kuala-lumpur']" id="kuala-lumpur" value="false">Kuala Lumpur</p>
				<p><input type="checkbox" name="fields['klang-valley']" id="klang-valley" value="false">Klang Valley</p>
				<p><input type="checkbox" name="fields['perlis']" id="perlis" value="false"/>Perlis</p>
				<p><input type="checkbox" name="fields['kedah']" id="kedah" value="false">Kedah</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input type="checkbox" name="fields['kelantan']" id="kelantan" value="false">Kelantan</p>
				<p><input type="checkbox" name="fields['penang']" id="penang" value="false">Penang</p>
				<p><input type="checkbox" name="fields['perak']" id="perak" value="false">Perak</p>
				<p><input type="checkbox" name="fields['terengganu']" id="terengganu" value="false">Terengganu</p>
				<p><input type="checkbox" name="fields['pahang']" id="pahang" value="false">Pahang</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input type="checkbox" name="fields['negeri-sembilan']" id="negeri-sembilan" value="false">Negeri Sembilan</p>
				<p><input type="checkbox" name="fields['melaka']" id="melaka" value="false">Melaka</p>
				<p><input type="checkbox" name="fields['johor']" id="johor" value="false">Johor</p>
				<p><input type="checkbox" name="fields['sabah']" id="sabah" value="false">Sabah</p>
				<p><input type="checkbox" name="fields['sarawak']" id="sarawak" value="false">Sarawak</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p>Other Countries:</p>
				<p><input type="checkbox" name="fields['thailand']" id="thailand" value="false">Thailand</p>
				<p><input type="checkbox" name="fields['singapore']" id="singapore" value="false">Singapore</p>
				<p><input type="checkbox" name="fields['indonesia']" id="indonesia" value="false">Indonesia</p>
				<p><input type="checkbox" name="fields['geo-others']" id="others-countries" value="false">Others:<input type="text" name="fields['geo-others-text']" id="others-countries-text"></p>
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
				<p><input type="checkbox" name="fields['accounting-finance']" id="accounting-finance" value="false">Accounting/Finance</p>
				<p><input type="checkbox" name="fields['admin-hr']" id="admin-HR" value="false">Admin/HR</p>
				<p><input type="checkbox" name="fields['arts-communication']" id="arts-communication" value="false">Arts/Communication</p>
				<p><input type="checkbox" name="fields['building-construction']" id="building-construction" value="false">Building/Construction</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input type="checkbox" name="fields['computer-it']" id="computer-IT" value="false">Computer/IT</p>
				<p><input type="checkbox" name="fields['education-training']" id="education-training" value="false">Education/Training</p>
				<p><input type="checkbox" name="fields['engineering']" id="engineering" value="false">Engineering</p>
				<p><input type="checkbox" name="fields['healthcare']" id="healthcare" value="false">Healthcare</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input type="checkbox" name="fields['hotel-restaurant']" id="hotel-restaurant" value="false">Hotel/Restaurant</p>
				<p><input type="checkbox" name="fields['manufacturing']" id="manufacturing" value="false">Manufacturing</p>
				<p><input type="checkbox" name="fields['sales-marketing']" id="sales-marketing" value="false">Sales/Marketing</p>
				<p><input type="checkbox" name="fields['science']" id="science" value="false">Science</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<p><input type="checkbox" name="fields['services']" id="services" value="false">Services</p>
				<p><input type="checkbox" name="fields['target-other']" id="others-targeted-audience" value="false">Others:<input type="text" name="fields['target-other-text']" id="others-targeted-audience-text"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<h4>Preferred Language:</h4>
				<p><input type="checkbox" name="fields['lang-english']" id="english" value="false">English</p>
				<p><input type="checkbox" name="fields['lang-malay']" id="malay" value="false">Malay</p>
				<p><input type="checkbox" name="fields['lang-chinese']" id="chinese" value="false">Chinese</p>
				<p><input type="checkbox" name="fields['lang-tamil']" id="tamil" value="false">Tamil</p>
				<p><input type="checkbox" name="fields['lang-others']" id="others-preferred-language" value="false">Others:<input type="text" name="fields['lang-others-text']" id="others-preferred-language-text"></p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<h4>Age:</h4>
				<p><input type="checkbox" name="fields['age-18-29']" id="18-29-age" value="false">18 - 29</p>
				<p><input type="checkbox" name="fields['age-30-49']" id="30-49-age" value="false">30 - 49</p>
				<p><input type="checkbox" name="fields['age-50-64']" id="50-64-age" value="false">50 - 64</p>
				<p><input type="checkbox" name="fields['age-others']" id="others-age" value="false">Others:<input type="text" name="fields['age-others-text']" id="others-age-text"></p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<h4>Gender:</h4>
				<p><input type="checkbox" name="fields['male']" id="male" value="false">Male</p>
				<p><input type="checkbox" name="fields['female']" id="female" value="false">Female</p>
			</div>
		</div>
	</div>
</body>
</html>