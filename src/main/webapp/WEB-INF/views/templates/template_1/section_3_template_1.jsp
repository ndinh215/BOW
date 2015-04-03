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
	Section 3
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<h1>2015 INVESTMENT PLAN</h1>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<img src="<c:url value="/assets/images/panpages_logo.jpg" />" alt="" />
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<h3>PANPAGES ONLINE SDN BHD</h3>
				<h3>No. 1, Jalan OJS 11/8, Bandar Sunway,</h3>
				<h3>Petaling Jaya, 46150, Selangor, Malaysia</h3>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Advertiser:</p>
				<p>Address:</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<table style="width:100%">
					<tr>
						<th>Proposal Date:</th>
						<th></th> 
					</tr>
					<tr>
						<td>Valid Until:</td>
						<td></td> 
					</tr>
					<tr>
						<td>Proposed Amount:</td>
						<td></td> 
					</tr>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<input name="option-A" type="checkbox"/>Option A
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<input name="option-B" type="checkbox"/>Option B
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<table style="width:100%">
					<tr>
						<th>Products</th>
						<th>Price</th> 
					</tr>
					<tr>
						<td><input name="malaysia-panpages-option-A" type="checkbox"/>Malaysia PanPages</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="google-adWords-search-mobile-option-A" type="checkbox"/>Google AdWords Search &amp; Mobile</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="google-display-network-option-A" type="checkbox"/>Google Display Network</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="yahoo-search-option-A" type="checkbox"/>Yahoo! Search</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="yahoo-display-option-A" type="checkbox"/>Yahoo! Display</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="youtube-ads-option-A" type="checkbox"/>YouTube Ads</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="facebook-ads-option-A" type="checkbox"/>Facebook Ads</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="pan-360-option-A" type="checkbox"/>Pan 360°</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="alibaba-com-option-A" type="checkbox"/>Alibaba.com</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="super-pages-option-A" type="checkbox"/>Super Pages</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="others-option-A" type="checkbox"/>Others</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="subtotal-option-A" type="checkbox"/>Subtotal</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="6percent-gov-tax-option-A" type="checkbox"/>6% Gov. Tax</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="grand-total-option-A" type="checkbox"/>Grand Total</td>
						<td></td> 
					</tr>
				</table>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<table style="width:100%">
					<tr>
						<th>Products</th>
						<th>Price</th> 
					</tr>
					<tr>
						<td><input name="malaysia-panpages-option-B" type="checkbox"/>Malaysia PanPages</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="google-adWords-search-mobile-option-B" type="checkbox"/>Google AdWords Search &amp; Mobile</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="google-display-network-option-B" type="checkbox"/>Google Display Network</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="yahoo-search-option-B" type="checkbox"/>Yahoo! Search</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="yahoo-display-option-B" type="checkbox"/>Yahoo! Display</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="youtube-ads-option-B" type="checkbox"/>YouTube Ads</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="facebook-ads-option-B" type="checkbox"/>Facebook Ads</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="pan-360-option-B" type="checkbox"/>Pan 360°</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="alibaba-com-option-B" type="checkbox"/>Alibaba.com</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="super-pages-option-B" type="checkbox"/>Super Pages</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="others-option-B" type="checkbox"/>Others</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="subtotal-option-B" type="checkbox"/>Subtotal</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="6percent-gov-tax-option-B" type="checkbox"/>6% Gov. Tax</td>
						<td></td> 
					</tr>
					<tr>
						<td><input name="grand-total-option-B" type="checkbox"/>Grand Total</td>
						<td></td> 
					</tr>
				</table>
			</div>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<h3>Terms &amp; Conditions:-</h3>
			<p>1. The above mentioned proposal would be due on ___________________ (PanPages Online Sdn Bhd reserved the right on the rate changes after promotion due date).</p>
			<p>2. 50% payment shall be made upon sign confirmation date and the balance 50% payment shall be made within 60 days after sign confirmation date.</p>
			<p>3. The above advertiser listing page will be activated within 30 working days upon receiving complete product materials and minimum of 50% payment.</p>
			<p>4. Key Phrases or Classifications selected for guaranteed positions are based on a First Come First Serve basis upon receiving complete job sheet.</p>
		</div>
	</div>
	<hr>
</body>
</html>