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
				<p>Address:<input name="fields['address']" id="address-text" type="text"/></p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<table style="width:100%">
					<tr>
						<th>Proposal Date:</th>
						<th><input name="fields['proposal-date']" id="proposal-date" type="text"></th> 
					</tr>
					<tr>
						<td>Valid Until:</td>
						<td><input name="fields['valid-until']" id="valid-until" type="text"></td> 
					</tr>
					<tr>
						<td>Proposed Amount:</td>
						<td><input name="fields['proposed-amount']" id="proposed-amount" type="text"></td> 
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
							<td>RM<input name="fields['malaysia-panpages-option-A-input']" id="malaysia-panpages-option-A-input" type="text"></td> 
						</tr>
						<tr>
							<td><input name="fields['option-a-google-adwords-search-mobile']" id="google-adWords-search-mobile-option-A" type="checkbox"/>Google AdWords Search &amp; Mobile</td>
							<td>RM<input name="fields['google-adWords-search-mobile-option-A-input']" id="google-adWords-search-mobile-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-google-display-network']" id="google-display-network-option-A" type="checkbox"/>Google Display Network</td>
							<td>RM<input name="fields['google-display-network-option-A-input']" id="google-display-network-option-A-input" type="text"></td> 
						</tr>
						<tr>
							<td><input name="fields['option-a-yahoo-search']" id="yahoo-search-option-A" type="checkbox"/>Yahoo! Search</td>
							<td>RM<input name="fields['yahoo-search-option-A-input']" id="yahoo-search-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-yahoo-display']" id="yahoo-display-option-A" type="checkbox"/>Yahoo! Display</td>
							<td>RM<input name="fields['yahoo-display-option-A-input']" id="yahoo-display-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-youtube-ads']" id="youtube-ads-option-A" type="checkbox"/>YouTube Ads</td>
							<td>RM<input name="fields['youtube-ads-option-A-input']" id="youtube-ads-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-facebook-ads']" id="facebook-ads-option-A" type="checkbox"/>Facebook Ads</td>
							<td>RM<input name="fields['facebook-ads-option-A-input']" id="facebook-ads-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-pan-360']" id="pan-360-option-A" type="checkbox"/>Pan 360°</td>
							<td>RM<input name="fields['pan-360-option-A-input']" id="pan-360-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-alibaba-com']" id="alibaba-com-option-A" type="checkbox"/>Alibaba.com</td>
							<td>RM<input name="fields['alibaba-com-option-A-input']" id="alibaba-com-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-super-pages']" id="super-pages-option-A" type="checkbox"/>Super Pages</td>
							<td>RM<input name="fields['super-pages-option-A-input']" id="super-pages-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-a-others']" id="others-option-A" type="checkbox"/>Others</td>
							<td>RM<input name="fields['others-option-A-input']" id="others-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td>Subtotal</td>
							<td>RM<input name="fields['subtotal-option-A-input']" id="subtotal-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td>6% Gov. Tax</td>
							<td>RM<input name="fields['gov-tax-option-A-input']" id="gov-tax-option-A-input" type="text"></td>
						</tr>
						<tr>
							<td>Grand Total</td>
							<td>RM<input name="fields['grand-total-option-A-input']" id="grand-total-option-A-input" type="text"></td>
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
							<td>RM<input name="fields['malaysia-panpages-option-B-input']" id="malaysia-panpages-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-google-adwords-search-mobile']" id="google-adWords-search-mobile-option-B" type="checkbox"/>Google AdWords Search &amp; Mobile</td>
							<td>RM<input name="fields['google-adWords-search-mobile-option-B-input']" id="google-adWords-search-mobile-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-google-display-network']" id="google-display-network-option-B" type="checkbox"/>Google Display Network</td>
							<td>RM<input name="fields['google-display-network-option-B-input']" id="google-display-network-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-yahoo-search']" id="yahoo-search-option-B" type="checkbox"/>Yahoo! Search</td>
							<td>RM<input name="fields['yahoo-search-option-B-input']" id="yahoo-search-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-yahoo-display']" id="yahoo-display-option-B" type="checkbox"/>Yahoo! Display</td>
							<td>RM<input name="fields['yahoo-display-option-B-input']" id="yahoo-display-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-youtube-ads']" id="youtube-ads-option-B" type="checkbox"/>YouTube Ads</td>
							<td>RM<input name="fields['youtube-ads-option-B-input']" id="youtube-ads-option-B-input" type="text"></td> 
						</tr>
						<tr>
							<td><input name="fields['option-b-facebook-ads']" id="facebook-ads-option-B" type="checkbox"/>Facebook Ads</td>
							<td>RM<input name="fields['facebook-ads-option-B-input']" id="facebook-ads-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-pan-360']" id="pan-360-option-B" type="checkbox"/>Pan 360°</td>
							<td>RM<input name="fields['pan-360-option-B-input']" id="pan-360-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-alibaba-com']" id="alibaba-com-option-B" type="checkbox"/>Alibaba.com</td>
							<td>RM<input name="fields['alibaba-com-option-B-input']" id="alibaba-com-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-super-pages']" id="super-pages-option-B" type="checkbox"/>Super Pages</td>
							<td>RM<input name="fields['super-pages-option-B-input']" id="super-pages-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td><input name="fields['option-b-others']" id="others-option-B" type="checkbox"/>Others</td>
							<td>RM<input name="fields['others-option-B-input']" id="others-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td>Subtotal</td>
							<td>RM<input name="fields['subtotal-option-B-input']" id="subtotal-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td>6% Gov. Tax</td>
							<td>RM<input name="fields['gov-tax-option-B-input']" id="gov-tax-option-B-input" type="text"></td>
						</tr>
						<tr>
							<td>Grand Total</td>
							<td>RM<input name="fields['grand-total-option-B-input']" id="grand-total-option-B-input" type="text"></td>
						</tr>
					</table>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h3>Terms &amp; Conditions:</h3>
				<p>1. The above mentioned proposal would be due on <input name="fields['terms-conditions']" id="terms-conditions-text" type="text"/> (PanPages Online Sdn Bhd reserved the right on the rate changes after promotion due date).</p>
				<p>2. 50% payment shall be made upon sign confirmation date and the balance 50% payment shall be made within 60 days after sign confirmation date.</p>
				<p>3. The above advertiser listing page will be activated within 30 working days upon receiving complete product materials and minimum of 50% payment.</p>
				<p>4. Key Phrases or Classifications selected for guaranteed positions are based on a First Come First Serve basis upon receiving complete job sheet.</p>
			</div>
		</div>
	</div>
</body>
</html>