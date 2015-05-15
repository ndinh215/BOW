<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Step 10</title>
</head>
<body>
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<h1>Please adjust the recommended budget accordingly.</h1>
		</div>
	</div>
	<div class="row">
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			<div class="row">
				<p><input name="fields['option-a']" id="option-a" type="checkbox" value="false">Option A <span style="font-weight: bold;">(Recommended)</span></p>
			</div>
			<div class="row">
				<table style="width:100%">
					<tr>
						<th>Channel</th>
						<th>Price</th> 
					</tr>
					<tr>
						<td>PanPages</td>
						<td>RM <input name="fields['panpages-option-a-input']" id="panpages-option-a-input" type="text" style="width: 85%;"></td> 
					</tr>
					<tr>
						<td>Google Search &amp; Mobile</td>
						<td>RM <input name="fields['google-search-mobile-option-a-input']" id="google-search-mobile-option-a-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Google Display Network</td>
						<td>RM <input name="fields['google-display-network-option-a-input']" id="google-display-network-option-a-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Yahoo! Search</td>
						<td>RM <input name="fields['yahoo-search-option-a-input']" id="yahoo-search-option-a-input" type="text" style="width: 85%;"></td>
					</tr>						
					<tr>
						<td>Yahoo!Display</td>
						<td>RM <input name="fields['yahoo-display-option-a-input']" id="yahoo-display-option-a-input" type="text" style="width: 85%;"></td>
					</tr>					
					<tr>
						<td>YouTube Ads</td>
						<td>RM <input name="fields['youtube-ads-option-a-input']" id="youtube-ads-option-a-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Facebook Ads</td>
						<td>RM <input name="fields['facebook-ads-option-a-input']" id="facebook-ads-option-a-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Facebook Marketing</td>
						<td>RM <input name="fields['facebook-marketing-option-a-input']" id="facebook-marketing-option-a-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Pan 360�</td>
						<td>RM <input name="fields['pan-360-option-a-input']" id="pan-360-option-a-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Alibaba.com</td>
						<td>RM <input name="fields['alibaba-com-option-a-input']" id="alibaba-com-option-a-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Super Pages</td>
						<td>RM <input name="fields['super-pages-option-a-input']" id="super-pages-option-a-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Others</td>
						<td>RM<input name="fields['others-option-a-input']" id="others-option-A-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td style="text-align: right;">Management Fee</td>
						<td>RM <input name="fields['management-fee-option-a']" id="management-fee-option-a" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td style="text-align: right;">Subtotal</td>
						<td>RM <input name="fields['subtotal-option-a']" id="subtotal-option-a" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td style="text-align: right;">6% Gov. Tax</td>
						<td>RM <input name="fields['gov-tax-option-a']" id="gov-tax-option-a" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td style="text-align: right;">Grand Total</td>
						<td>RM <input name="fields['grand-total-option-a']" id="grand-total-option-a" type="text" style="width: 85%;"></td>
					</tr>
				</table>
				<p>Suggested advertising budget for your advertiser is <span id="Calculation-Code-L-OptionA"></span></p>
			</div>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
			<div class="row">
				<p><input name="fields['option-b']" id="option-b" type="checkbox" value="false">Option B <span style="font-weight: bold;">(Recommended)</span></p>
			</div>
			<div class="row">
				<table style="width:100%">
					<tr>
						<th>Channel</th>
						<th>Price</th> 
					</tr>
					<tr>
						<td>PanPages</td>
						<td>RM <input name="fields['panpages-option-b-input']" id="panpages-option-b-input" type="text" style="width: 85%;"></td> 
					</tr>
					<tr>
						<td>Google Search &amp; Mobile</td>
						<td>RM <input name="fields['google-search-mobile-option-b-input']" id="google-search-mobile-option-b-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Google Display Network</td>
						<td>RM <input name="fields['google-display-network-option-b-input']" id="google-display-network-option-b-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Yahoo! Search</td>
						<td>RM <input name="fields['yahoo-search-option-b-input']" id="yahoo-search-option-b-input" type="text" style="width: 85%;"></td>
					</tr>						
					<tr>
						<td>Yahoo!Display</td>
						<td>RM <input name="fields['yahoo-display-option-b-input']" id="yahoo-display-option-b-input" type="text" style="width: 85%;"></td>
					</tr>					
					<tr>
						<td>YouTube Ads</td>
						<td>RM <input name="fields['youtube-ads-option-b-input']" id="youtube-ads-option-b-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Facebook Ads</td>
						<td>RM <input name="fields['facebook-ads-option-b-input']" id="facebook-ads-option-b-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Facebook Marketing</td>
						<td>RM <input name="fields['facebook-marketing-option-b-input']" id="facebook-marketing-option-b-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Pan 360�</td>
						<td>RM <input name="fields['pan-360-option-b-input']" id="pan-360-option-b-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Alibaba.com</td>
						<td>RM <input name="fields['alibaba-com-option-b-input']" id="alibaba-com-option-b-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Super Pages</td>
						<td>RM <input name="fields['super-pages-option-b-input']" id="super-pages-option-b-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td>Others</td>
						<td>RM<input name="fields['others-option-b-input']" id="others-option-b-input" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td style="text-align: right;">Management Fee</td>
						<td>RM <input name="fields['management-fee-option-b']" id="management-fee-option-b" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td style="text-align: right;">Subtotal</td>
						<td>RM <input name="fields['subtotal-option-b']" id="subtotal-option-b" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td style="text-align: right;">6% Gov. Tax</td>
						<td>RM <input name="fields['gov-tax-option-b']" id="gov-tax-option-b" type="text" style="width: 85%;"></td>
					</tr>
					<tr>
						<td style="text-align: right;">Grand Total</td>
						<td>RM <input name="fields['grand-total-option-b']" id="grand-total-option-b" type="text" style="width: 85%;"></td>
					</tr>
				</table>
				<p>Suggested advertising budget for your advertiser is <span id="Calculation-Code-L-OptionB"></span></p>
			</div>
		</div>
	</div>
	<div class="row">
		<input type="hidden" name="fields['revenue-increased']" id="revenue-increased">
		<input type="hidden" name="fields['average-revenue-perCustomer']" id="average-revenue-perCustomer">
		<input type="hidden" name="fields['new-advertiser']" id="new-advertiser">
		<input type="hidden" name="fields['enquiry-rate']" id="enquiry-rate">
		<input type="hidden" name="fields['leads']" id="leads">
		<input type="hidden" name="fields['leads-conversion-rate']" id="leads-conversion-rate">
		<input type="hidden" name="fields['traffic-clicks-required']" id="traffic-clicks-required">
		<input type="hidden" name="fields['campaign-period']" id="campaign-period">
		<input type="hidden" name="fields['monthly-traffic-clicks']" id="monthly-traffic-clicks">
		<input type="hidden" name="fields['average-costPer-click']" id="average-costPer-click">
		<input type="hidden" name="fields['estimated-monthly-budget']" id="estimated-monthly-budget">
		<input type="hidden" name="fields['total-campaign-budget']" id="total-campaign-budget">
		<input type="hidden" name="fields['total-estimate-impression']" id="total-estimate-impression">
		<input type="hidden" name="fields['assumed-ctr-for-search']" id="assumed-ctr-for-search">
		<input type="hidden" name="fields['estimatedClicks-based-on-ctr']" id="estimatedClicks-based-on-ctr">
		<input type="hidden" name="fields['estimated-monthly-investment-100']" id="estimated-monthly-investment-100">
		<input type="hidden" name="fields['estimated-monthly-investment-50']" id="estimated-monthly-investment-50">
	</div>
</body>
</html>