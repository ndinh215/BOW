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
<title>Planner 3</title>
</head>
<body>
	<div class="tab-section">
		<div class="row" style="text-align: left">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h1>2015 INVESTMENT PLAN</h1>
			</div>
		</div>
		<div class="row">
			<p>PANPAGES ONLINE SDN BHD</p>
			<p>No. 1, Jalan OJS 11/8, Bandar Sunway,</p>
			<p>Petaling Jaya, 46150, Selangor, Malaysia</p>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p>Advertiser:<input name="fields['advertiser']" id="advertiser-text" type="text"/></p>
				<p id="advertiser-text-error"></p>
				<p>Address:&nbsp;&nbsp;&nbsp;<input name="fields['address']" id="address-text" type="text"/></p>
				<p id="address-text-error"></p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<table style="width:100%">
					<tr>
						<th>Proposal Date:</th>
						<th><input name="fields['proposal-date']" id="proposal-date" type="text"><p id="proposal-date-error"></p></th> 
					</tr>
					<tr>
						<td>Valid Until:</td>
						<td><input name="fields['valid-until']" id="valid-until" type="text"><p id="valid-until-error"></p></td> 
					</tr>
					<tr>
						<td>Proposed Amount:</td>
						<td><input name="fields['proposed-amount']" id="proposed-amount" type="text"><p id="proposed-amount-error"></p></td> 
					</tr>
				</table>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<div class="row">
					<p><input name="fields['option-a']" id="option-A" type="checkbox"/>Option A</p>
				</div>
				<div class="row">
					<table style="width:100%">
						<tr>
							<th>Products</th>
							<th>Price</th> 
						</tr>
						<tr>
							<td><input name="fields['option-a-malaysia-panpages']" id="malaysia-panpages-option-A" type="checkbox"/>Malaysia PanPages</td>
							<td>RM<input name="fields['malaysia-panpages-option-a-input']" id="malaysia-panpages-option-A-input" type="text"></td> 
						</tr>
						<tr>
							<td><input name="fields['option-a-google-adwords-search-mobile']" id="google-adWords-search-mobile-option-A" type="checkbox"/>Google AdWords Search &amp; Mobile</td>
							<td>RM<input name="fields['google-adWords-search-mobile-option-a-input']" id="google-adWords-search-mobile-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-google-display-network']" id="google-display-network-option-A" type="checkbox"/>Google Display Network</td>
							<td>RM<input name="fields['google-display-network-option-a-input']" id="google-display-network-option-A-input" type="text"></td> 
						</tr>
						<tr>
							<td><input name="fields['option-a-yahoo-search']" id="yahoo-search-option-A" type="checkbox"/>Yahoo! Search</td>
							<td>RM<input name="fields['yahoo-search-option-a-input']" id="yahoo-search-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-yahoo-display']" id="yahoo-display-option-A" type="checkbox"/>Yahoo! Display</td>
							<td>RM<input name="fields['yahoo-display-option-a-input']" id="yahoo-display-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-youtube-ads']" id="youtube-ads-option-A" type="checkbox"/>YouTube Ads</td>
							<td>RM<input name="fields['youtube-ads-option-a-input']" id="youtube-ads-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-facebook-ads']" id="facebook-ads-option-A" type="checkbox"/>Facebook Ads</td>
							<td>RM<input name="fields['facebook-ads-option-a-input']" id="facebook-ads-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-pan-360']" id="pan-360-option-A" type="checkbox"/>Pan 360°</td>
							<td>RM<input name="fields['pan-360-option-a-input']" id="pan-360-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-alibaba-com']" id="alibaba-com-option-A" type="checkbox"/>Alibaba.com</td>
							<td>RM<input name="fields['alibaba-com-option-a-input']" id="alibaba-com-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-super-pages']" id="super-pages-option-A" type="checkbox"/>Super Pages</td>
							<td>RM<input name="fields['super-pages-option-a-input']" id="super-pages-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-others']" id="others-option-A" type="checkbox"/>Others</td>
							<td>RM<input name="fields['others-option-a-input']" id="others-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td>Subtotal</td>
							<td>RM<input name="fields['subtotal-option-a-input']" id="subtotal-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td>6% Gov. Tax</td>
							<td>RM<input name="fields['gov-tax-option-a-input']" id="gov-tax-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td>Grand Total</td>
							<td>RM<input name="fields['grand-total-option-a-input']" id="grand-total-option-A-input" type="text"></td>
						</tr>
					</table>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<div class="row">
					<p><input name="fields['option-b']" id="option-B" type="checkbox"/>Option B</p>
				</div>
				<div class="row">
					<table style="width:100%">
						<tr>
							<th>Products</th>
							<th>Price</th> 
						</tr>
						<tr>
							<td><input name="fields['option-b-malaysia-panpages']" id="malaysia-panpages-option-B" type="checkbox"/>Malaysia PanPages</td>
							<td>RM<input name="fields['malaysia-panpages-option-b-input']" id="malaysia-panpages-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-google-adwords-search-mobile']" id="google-adWords-search-mobile-option-B" type="checkbox"/>Google AdWords Search &amp; Mobile</td>
							<td>RM<input name="fields['google-adWords-search-mobile-option-b-input']" id="google-adWords-search-mobile-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-google-display-network']" id="google-display-network-option-B" type="checkbox"/>Google Display Network</td>
							<td>RM<input name="fields['google-display-network-option-b-input']" id="google-display-network-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-yahoo-search']" id="yahoo-search-option-B" type="checkbox"/>Yahoo! Search</td>
							<td>RM<input name="fields['yahoo-search-option-b-input']" id="yahoo-search-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-yahoo-display']" id="yahoo-display-option-B" type="checkbox"/>Yahoo! Display</td>
							<td>RM<input name="fields['yahoo-display-option-b-input']" id="yahoo-display-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-youtube-ads']" id="youtube-ads-option-B" type="checkbox"/>YouTube Ads</td>
							<td>RM<input name="fields['youtube-ads-option-b-input']" id="youtube-ads-option-B-input" type="text"></td> 
						</tr>
						<tr>
							<td><input name="fields['option-b-facebook-ads']" id="facebook-ads-option-B" type="checkbox"/>Facebook Ads</td>
							<td>RM<input name="fields['facebook-ads-option-b-input']" id="facebook-ads-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-pan-360']" id="pan-360-option-B" type="checkbox"/>Pan 360°</td>
							<td>RM<input name="fields['pan-360-option-b-input']" id="pan-360-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-alibaba-com']" id="alibaba-com-option-B" type="checkbox"/>Alibaba.com</td>
							<td>RM<input name="fields['alibaba-com-option-b-input']" id="alibaba-com-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-super-pages']" id="super-pages-option-B" type="checkbox"/>Super Pages</td>
							<td>RM<input name="fields['super-pages-option-b-input']" id="super-pages-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-others']" id="others-option-B" type="checkbox"/>Others</td>
							<td>RM<input name="fields['others-option-b-input']" id="others-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td>Subtotal</td>
							<td>RM<input name="fields['subtotal-option-b-input']" id="subtotal-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td>6% Gov. Tax</td>
							<td>RM<input name="fields['gov-tax-option-b-input']" id="gov-tax-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td>Grand Total</td>
							<td>RM<input name="fields['grand-total-option-b-input']" id="grand-total-option-B-input" type="text"></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h3>Terms &amp; Conditions:</h3>
				<p>1. The above mentioned proposal would be due on <input name="fields['terms-conditions']" id="terms-conditions-text" type="text"/>(PanPages Online Sdn Bhd reserved the right on the rate changes after promotion due date).</p>
				<p id="terms-conditions-text-error"></p>
				<p>2. 50% payment shall be made upon sign confirmation date and the balance 50% payment shall be made within 60 days after sign confirmation date.</p>
				<p>3. The above advertiser listing page will be activated within 30 working days upon receiving complete product materials and minimum of 50% payment.</p>
				<p>4. Key Phrases or Classifications selected for guaranteed positions are based on a First Come First Serve basis upon receiving complete job sheet.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h3>TRADITIONAL MEDIA COST &amp; REACH</h3>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<fieldset>
					<legend>RM - Multi-Channel Marketing</legend>
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
							<p>Duration:</p>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
							<p><input type="text" name="fields['duration']" id="duration"></p>
							<p id="duration-error"></p>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
							<p>Coverage:</p>
						</div>
						<div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
							<p><input type="text" name="fields['coverage']" id="coverage"></p>
							<p id="coverage-error"></p>
						</div>
					</div>
				</fieldset>
			</div>
		</div>
	</div>
</body>
</html>