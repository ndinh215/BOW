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
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-9 col-lg-9">
				<h1>MARKETING REVIEW &amp; STRATEGY</h1>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<img src="<c:url value="/assets/images/panpages_logo.jpg" />" alt="" />
			</div>
		</div>
		<div class="row">
			<h3>2014 MARKETING CAMPAIGN</h3>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input name="malaysia-panpages-2014-marketing-campaign" type="checkbox"/>Malaysia PanPages</p>
				<p><input name="google-adWords-search-mobile-2014-marketing-campaign" type="checkbox"/>Google AdWords Search &amp; Mobile</p>
				<p><input name="google-display-network-2014-marketing-campaign" type="checkbox"/>Google Display Network</p>
				<p><input name="yahoo-search-2014-marketing-campaign" type="checkbox"/>Yahoo! Search</p>
				<p><input name="yahoo-display-2014-marketing-campaign" type="checkbox"/>Yahoo! Display</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input name="youtube-ads-2014-marketing-campaign" type="checkbox"/>YouTube Ads</p>
				<p><input name="facebook-ads-2014-marketing-campaign" type="checkbox"/>Facebook Ads</p>
				<p><input name="pan-360-2014-marketing-campaign" type="checkbox"/>Pan 360�</p>
				<p><input name="alibaba-com-2014-marketing-campaign" type="checkbox"/>Alibaba.com</p>
				<p><input name="super-pages-2014-marketing-campaign" type="checkbox"/>Super Pages</p>
			</div>
		</div>
		<div class="row">
			<h3>2014 MARKETING CAMPAIGN RESULT OVERVIEW</h3>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<table style="width:100%">
					<tr>
						<td>2014 Advertising Investment</td>
						<td> </td>		
					</tr>
					<tr>
						<td>Website Visits</td>
						<td> </td>
					</tr>
					<tr>
						<td>Clicks On Ads</td>
						<td> </td>	
					</tr>
					<tr>
						<td>Click Through Rate</td>
						<td> </td>	
					</tr>
				</table>
			</div>
		</div>
		<div class="row">
			<h3>2015 ACTION PLAN FOR IMPROVEMENT</h3>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p><input name="enhance-text-content" type="checkbox"/>Enhance Text Content</p>
				<p><input name="add-on-relevant-product-picture" type="checkbox"/>Add On Relevant Product Picture</p>
				<p><input name="add-on-product-description" type="checkbox"/>Add On Product Description</p>
				<p><input name="include-product-price" type="checkbox"/>Include Product Price</p>
				<p><input name="include-product-specification" type="checkbox"/>Include Product Specification</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p><input name="include-company-details" type="checkbox"/>Include Company Details</p>
				<p><input name="include-delivery-information" type="checkbox"/>Include Delivery Information</p>
				<p><input name="include-payment-options" type="checkbox"/>Include Payment Options</p>
				<p><input name="frequently-your-website" type="checkbox"/>Frequently Your Website</p>
				<p><input name="timely-response-to-enquiry" type="checkbox"/>Timely Response To Enquiry</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<p><input name="tracking-on-calls-walk-in" type="checkbox"/>Tracking On Calls &amp; Walk In</p>
				<p><input name="highlight-unique-selling-point" type="checkbox"/>Highlight Unique Selling Point</p>
				<p><input name="include-certification-for-better-credential" type="checkbox"/>Include Certification For Better Credential</p>
				<p><input name="enhance-product-picture-quality" type="checkbox"/>Enhance Product Picture Quality</p>
				<p><input name="others-2015-action-plan-for-improvement" type="checkbox"/>Others:<input name="others-2015-action-plan-for-improvement-text" type="text"/></p>
			</div>
		</div>
		<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
			<form>
				<fieldset>
					<legend>Remarks:</legend>

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
					<td><input name="increase-website-traffic" type="checkbox"/>Increase Website Traffic</td>
					<td>
						<p>1. Show current offers/promotions</p>
						<p>2. Want People to better understand their business</p>
					</td>	
				</tr>
				<tr>
					<td><input name="increase-brand-awareness" type="checkbox"/>Increase Brand Awareness</td>
					<td>
						<p>1. Ensure your brand is always on top of mind</p>
						<p>2. Promote brand loyalty</p>
						<p>3. Want people to be aware of their company or brand</p>
					</td>	
				</tr>
				<tr>
					<td><input name="increase-online-forms-submission" type="checkbox"/>Increase Online Forms Submission</td>
					<td>
						<p>1. Want to reach new customers</p>
						<p>2. Make reservation online</p>
						<p>3. Want people to send enquiry</p>
					</td>	
				</tr>
				<tr>
					<td><input name="increase-store-visits" type="checkbox"/>Increase Store Visits</td>
					<td>
						<p>1. Want people to walk in</p>
					</td>	
				</tr>
				<tr>
					<td><input name="increase-phones-calls" type="checkbox"/>Increase Phones Calls</td>
					<td>
						<p>1. Want people to call directly</p>
					</td>	
				</tr>
				<tr>
					<td><input name="increase-online-purchase" type="checkbox"/>Increase Online Purchase (Subject to website feasibility)</td>
					<td>
						<p>1. Want people to purchase directly from website</p>
					</td>	
				</tr>
				<tr>
					<td><input name="retargeting-visitors" type="checkbox"/>Retargeting Visitors</td>
					<td>
						<p>1. Want to reach existing customers</p>
						<p>2. Want to generate repeat business from existing customers</p>
					</td>	
				</tr>
				<tr>
					<td><input name="increase-geographical-coverage" type="checkbox"/>Increase Geographical Coverage</td>
					<td>
						<p>1. Want to expand your business to oversea countries</p>
					</td>	
				</tr>
			</table>
		</div>
		<div class="row">
			<h3>RECOMMENDED SOLUTIONS</h3>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input name="malaysia-panpages-recommended-solutions" type="checkbox"/>Malaysia PanPages</p>
				<p><input name="google-adWords-search-mobile-recommended-solutions" type="checkbox"/>Google AdWords Search &amp; Mobile</p>
				<p><input name="google-display-network-recommended-solutions" type="checkbox"/>Google Display Network</p>
				<p><input name="yahoo-search-recommended-solutions" type="checkbox"/>Yahoo! Search</p>
				<p><input name="yahoo-display-recommended-solutions" type="checkbox"/>Yahoo! Display</p>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<p><input name="youtube-ads-recommended-solutions" type="checkbox"/>YouTube Ads</p>
				<p><input name="facebook-ads-recommended-solutions" type="checkbox"/>Facebook Ads</p>
				<p><input name="pan-360-recommended-solutions" type="checkbox"/>Pan 360�</p>
				<p><input name="alibaba-com-recommended-solutions" type="checkbox"/>Alibaba.com</p>
				<p><input name="super-pages-recommended-solutions" type="checkbox"/>Super Pages</p>
			</div>
		</div>
	</div>
</body>
</html>