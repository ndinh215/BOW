<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Step 3</title>
</head>
<body>
	<div class="step3 row">
		<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>	
		<div class="col-xs-12 col-sm-12 col-md-11 col-lg-11">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h1>Which advertising solution(s) your advertiser subscribed currently/in the past?</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1">
				</div>
				<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
					<p><input id="step-3-panpages" type="checkbox" value="false"> PanPages</p>
					<p><input id="step-3-google-adwords-search-mobile" type="checkbox" value="false"> Google AdWords Search &amp; Mobile</p>
					<p><input id="step-3-google-display-network" type="checkbox" value="false"> Google Display Network</p>
					<p><input id="step-3-yahoo-search" type="checkbox" value="false"> Yahoo! Search</p>
					<p><input id="step-3-yahoo-display" type="checkbox" value="false"> Yahoo! Display</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input id="step-3-youtube-ads" type="checkbox" value="false"> YouTube Ads</p>
					<p><input id="step-3-facebook-ads" type="checkbox" value="false"> Facebook Ads</p>
					<p><input id="step-3-pan-360" type="checkbox" value="false"> Pan 360°</p>
					<p><input id="step-3-alibaba-com" type="checkbox" value="false"> Alibaba.com</p>
					<p><input id="step-3-super-pages" type="checkbox" value="false"> Super Pages</p>
				</div>
				<div id="step-3" class="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h1>What is the result of your advertiser current/past advertising plan?</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1">
				</div>
				<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<p>Previous Contract Value</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p class="currency"><span class="currencyinput">RM <input type="text" name="fields['previous-contract-value']" id="previous-contract-value"></span></p>
					<p id="previous-contract-value-error"></p>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1">
				</div>
				<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<p>Website Visit</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p><input type="text" name="fields['website-visit']" id="website-visit"></p>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<p id="website-visit-error"></p>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
						<p style="text-align: right;">NOTE: Leave it blank if not applicable.</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-1 col-lg-1">
				</div>
				<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<p>Campaign Click Through Rate</p>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
					<p class="currency1"><span class="currencyinput1"><input type="text" name="fields['campaign-click-through-rate']" id="campaign-click-through-rate"> %</span></p>
				</div>
				<div class="row">
					<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
						<p id="campaign-click-through-rate-error"></p>
					</div>
					<div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
						<p style="text-align: right;">NOTE: Leave it blank if not applicable.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>
</html>