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
<title>Planner 2</title>
</head>
<body>
	<div class="tab-section">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<h1>MARKETING REVIEW &amp; STRATEGY</h1>
			</div>
		</div>
		<div class="row">
			<h3>2014 MARKETING CAMPAIGN</h3>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input name="fields['campaign-malaysia-panpages']" id="malaysia-panpages-2014-marketing-campaign" type="checkbox" value="false">Malaysia PanPages</p>
				<p><input name="fields['campaign-google-adwords-search-mobile']" id="google-adWords-search-mobile-2014-marketing-campaign" type="checkbox" value="false">Google AdWords Search &amp; Mobile</p>
				<p><input name="fields['campaign-google-display-network']" id="google-display-network-2014-marketing-campaign" type="checkbox" value="false">Google Display Network</p>
				<p><input name="fields['campaign-yahoo-search']" id="yahoo-search-2014-marketing-campaign" type="checkbox" value="false">Yahoo! Search</p>
				<p><input name="fields['campaign-yahoo-display']" id="yahoo-display-2014-marketing-campaign" type="checkbox" value="false">Yahoo! Display</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input name="fields['campaign-youtube-ads']" id="youtube-ads-2014-marketing-campaign" type="checkbox" value="false">YouTube Ads</p>
				<p><input name="fields['campaign-facebook-ads']" id="facebook-ads-2014-marketing-campaign" type="checkbox" value="false">Facebook Ads</p>
				<p><input name="fields['campaign-pan-360']" id="pan-360-2014-marketing-campaign" type="checkbox" value="false">Pan 360°</p>
				<p><input name="fields['campaign-alibaba-com']" id="alibaba-com-2014-marketing-campaign" type="checkbox" value="false">Alibaba.com</p>
				<p><input name="fields['campaign-super-pages']" id="super-pages-2014-marketing-campaign" type="checkbox" value="false">Super Pages</p>
			</div>
		</div>
		<div class="row">
			<h3>2014 MARKETING CAMPAIGN RESULT OVERVIEW</h3>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<table style="width:100%">
					<tr>
						<td>2014 Advertising Investment</td>
						<td><input name="fields['2014-advertising-investment']" id="2014-advertising-investment" type="text">RM</td>		
					</tr>
					<tr>
						<td>Website Visits</td>
						<td><input name="fields['website-visits']" id="website-visits" type="text"></td>
					</tr>
					<tr>
						<td>Clicks On Ads</td>
						<td><input name="fields['clicks-on-ads']" id="clicks-on-ads" type="text"></td>	
					</tr>
					<tr>
						<td>Click Through Rate</td>
						<td><input name="fields['click-through-rate']" id="click-through-rate" type="text"></td>	
					</tr>
				</table>
			</div>
		</div>
		<div class="row">
			<h3>2015 ACTION PLAN FOR IMPROVEMENT</h3>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p><input name="fields['enhance-text-content']" id="enhance-text-content" type="checkbox" value="false">Enhance Text Content</p>
				<p><input name="fields['add-on-relevant-product-picture']" id="add-on-relevant-product-picture" type="checkbox" value="false">Add On Relevant Product Picture</p>
				<p><input name="fields['add-on-product-description']" id="add-on-product-description" type="checkbox" value="false">Add On Product Description</p>
				<p><input name="fields['include-product-price']" id="include-product-price" type="checkbox" value="false">Include Product Price</p>
				<p><input name="fields['include-product-specification']" id="include-product-specification" type="checkbox" value="false">Include Product Specification</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p><input name="fields['include-company-details']" id="include-company-details" type="checkbox" value="false">Include Company Details</p>
				<p><input name="fields['include-delivery-information']" id="include-delivery-information" type="checkbox" value="false">Include Delivery Information</p>
				<p><input name="fields['include-payment-options']" id="include-payment-options" type="checkbox" value="false">Include Payment Options</p>
				<p><input name="fields['frequently-your-website']" id="frequently-your-website" type="checkbox" value="false">Frequently Your Website</p>
				<p><input name="fields['timely-response-to-enquiry']" id="timely-response-to-enquiry" type="checkbox" value="false">Timely Response To Enquiry</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p><input name="fields['tracking-on-calls-walk-in']" id="tracking-on-calls-walk-in" type="checkbox" value="false">Tracking On Calls &amp; Walk In</p>
				<p><input name="fields['highlight-unique-selling-point']" id="highlight-unique-selling-point" type="checkbox" value="false">Highlight Unique Selling Point</p>
				<p><input name="fields['include-certification-for-better-credential']" id="include-certification-for-better-credential" type="checkbox" value="false">Include Certification For Better Credential</p>
				<p><input name="fields['enhance-product-picture-quality']" id="enhance-product-picture-quality" type="checkbox" value="false">Enhance Product Picture Quality</p>
				<p><input name="fields['plan-for-improvement-others']" id="others-2015-action-plan-for-improvement" type="checkbox" value="false">Others:<input name="fields['plan-for-improvement-others-text']" id="others-2015-action-plan-for-improvement-text" type="text"/></p>
			</div>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<form>
				<fieldset>
					<legend>Remarks:</legend>
					<textarea rows="5" style="width: 100%;" name="fields['remarks']" id="remarks"></textarea>
				</fieldset>
			</form>
		</div>
		<div class="row">
			<h2>2015 MARKETING STRATEGIC PLANNING</h2>
		</div>
		<div class="row">
			<table style="width:100%">
				<tr>
					<th>Objectives</th>
					<th>Examples</th>	
				</tr>
				<tr>
					<td><input name="fields['increase-website-traffic']" id="increase-website-traffic" type="checkbox" value="false">Increase Website Traffic</td>
					<td>
						<p>1. Show current offers/promotions</p>
						<p>2. Want People to better understand their business</p>
					</td>	
				</tr>
				<tr>
					<td><input name="fields['increase-brand-awareness']" id="increase-brand-awareness" type="checkbox" value="false">Increase Brand Awareness</td>
					<td>
						<p>1. Ensure your brand is always on top of mind</p>
						<p>2. Promote brand loyalty</p>
						<p>3. Want people to be aware of their company or brand</p>
					</td>	
				</tr>
				<tr>
					<td><input name="fields['increase-online-forms-submission']" id="increase-online-forms-submission" type="checkbox" value="false">Increase Online Forms Submission</td>
					<td>
						<p>1. Want to reach new customers</p>
						<p>2. Make reservation online</p>
						<p>3. Want people to send enquiry</p>
					</td>	
				</tr>
				<tr>
					<td><input name="fields['increase-store-visits']" id="increase-store-visits" type="checkbox" value="false">Increase Store Visits</td>
					<td>
						<p>1. Want people to walk in</p>
					</td>	
				</tr>
				<tr>
					<td><input name="fields['increase-phones-calls']" id="increase-phones-calls" type="checkbox" value="false">Increase Phones Calls</td>
					<td>
						<p>1. Want people to call directly</p>
					</td>	
				</tr>
				<tr>
					<td><input name="fields['increase-online-purchase']" id="increase-online-purchase" type="checkbox" value="false">Increase Online Purchase (Subject to website feasibility)</td>
					<td>
						<p>1. Want people to purchase directly from website</p>
					</td>	
				</tr>
				<tr>
					<td><input name="fields['retargeting-visitors']" id="retargeting-visitors" type="checkbox" value="false">Retargeting Visitors</td>
					<td>
						<p>1. Want to reach existing customers</p>
						<p>2. Want to generate repeat business from existing customers</p>
					</td>	
				</tr>
				<tr>
					<td><input name="fields['increase-geographical-coverage']" id="increase-geographical-coverage" type="checkbox" value="false">Increase Geographical Coverage</td>
					<td>
						<p>1. Want to expand your business to oversea countries</p>
					</td>	
				</tr>
			</table>
		</div>
		<div class="row">
			<h3>RECOMMENDED SOLUTIONS</h3>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input name="fields['solutions-malaysia-panpages']" id="malaysia-panpages-recommended-solutions" type="checkbox" value="false">Malaysia PanPages</p>
				<p><input name="fields['solutions-google-adwords-search-mobile']" id="google-adWords-search-mobile-recommended-solutions" type="checkbox" value="false">Google AdWords Search &amp; Mobile</p>
				<p><input name="fields['solutions-google-display-network']" id="google-display-network-recommended-solutions" type="checkbox" value="false">Google Display Network</p>
				<p><input name="fields['solutions-yahoo-search']" id="yahoo-search-recommended-solutions" type="checkbox" value="false">Yahoo! Search</p>
				<p><input name="fields['solutions-yahoo-display']" id="yahoo-display-recommended-solutions" type="checkbox" value="false">Yahoo! Display</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input name="fields['solutions-youtube-ads']" id="youtube-ads-recommended-solutions" type="checkbox" value="false">YouTube Ads</p>
				<p><input name="fields['solutions-facebook-ads']" id="facebook-ads-recommended-solutions" type="checkbox" value="false">Facebook Ads</p>
				<p><input name="fields['solutions-pan-360']" id="pan-360-recommended-solutions" type="checkbox" value="false">Pan 360°</p>
				<p><input name="fields['solutions-alibaba-com']" id="alibaba-com-recommended-solutions" type="checkbox" value="false">Alibaba.com</p>
				<p><input name="fields['solutions-super-pages']" id="super-pages-recommended-solutions" type="checkbox" value="false">Super Pages</p>
			</div>
		</div>
	</div>
</body>
</html>