<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Step 1</title>
</head>
<body>
	<div class="step1 row">	
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h1>Tell us about you.</h1>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
			</div>
			<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
				<p>Consultant Name</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input type="text" name="fields['consultant-name']" id="consultant-name"></p>
				<p id="consultant-name-error"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
			</div>
			<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
				<p>Email Address</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input type="text" name="fields['consultant-email-address']" id="email-address"></p>
				<p id="email-address-error"></p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
			</div>
			<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
				<p>Mobile Number</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input type="text" name="fields['consultant-mobile-number']" id="mobile-number"></p>
				<p id="mobile-number-error"></p>
			</div>
		</div>
	</div>
</body>
</html>