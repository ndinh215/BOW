<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jstl/xml" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jstl/sql" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Home</title>
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/jquery.mCustomScrollbar_v3.0.2.css" />" >
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/jquery.fancybox_v2.1.5.css" />" >
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/bootstrap.min_v3.2.css" />" >
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/home.css" />" >
<script src="<c:url value="/assets/js/jquery_v1.8.2.js" />"></script>
<script src="<c:url value="/assets/js/bootstrap.min_v3.2.0.js" />"></script>
<script src="<c:url value="/assets/js/jquery.fancybox_v2.1.5.js" />"></script>
<script src="<c:url value="/assets/js/jquery.mCustomScrollbar_v3.0.2 .js" />"></script>
<script src="<c:url value="/assets/js/home.js" />"></script>
</head>
<body>
	<div class="container" style="background:none;  padding-top: 0;  top: 0;  padding: 0;">
		<div id="header">
			<img src="assets/images/header.png"/>
			<div id="menu"></div>
		</div>
	</div>
	<div class ="container" id ="main-content">
		<div id="content">
			<h3>ABOUT PANPAGES</h3>
			<p>PanPages Berhad (formerly known as CBSA Berhad), is a listed company specializing in the areas of Search and Advertising (SA) and Information Technology (IT). PanPages SA segment comprises online local business platforms, print directories and content licensing. From the strengths of its technology platforms and large database across South East Asia, PanPages provide B2B multi-platform medias search solutions. Customers can choose to advertise online on different platform such as Google AdWords, Facebook, Youtube, PanPages and even reach out to world traders through Alibaba.com. Malaysia. 
On the other hand, PanPages IT business segment is responsible for RFID Solutions, e-Security solutions e-Procurement solutions, could computing and infrastructure solutions. PanPages is listed on the Main Market of Bursa Malaysia. A listed company in Malaysia must adhere to strict regulations in corporate governance and transparency based on international standards.
In PanPages, we pride ourselves of developing excellent technology and search solutions by passionate people. We have the market coverage throughout South East Asia with offices in major cities.</p>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" style="padding:0">
				<div id ="home-about-image" >
					<a href="assets/images/google-adword.png" class="fancybox" rel="group" title="Google Adword" data-fancybox-group="gallery">
						<img src="assets/images/google-adword.png"/>
					</a>							
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" style="padding:0">
				<div id ="home-about-image" >
					<a href="assets/images/facebook-ads.png" class="fancybox" rel="group" title="Facebook Ads" data-fancybox-group="gallery">
						<img src="assets/images/facebook-ads.png"/>
					</a>							
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4" style="padding:0">
				<div id ="home-about-image" >
					<a href="assets/images/instant-web.png" class="fancybox" rel="group" title="Instant Website" data-fancybox-group="gallery">
						<img src="assets/images/instant-web.png"/>
					</a>							
				</div>
			</div>
			<p>PanPages Berhad (formerly known as CBSA Berhad), is a listed company specializing in the areas of Search and Advertising (SA) and Information Technology (IT). PanPages SA segment comprises online local business platforms, print directories and content licensing. From the strengths of its technology platforms and large database across South East Asia, PanPages provide B2B multi-platform medias search solutions. Customers can choose to advertise online on different platform such as Google AdWords, Facebook, Youtube, PanPages and even reach out to world traders through Alibaba.com. Malaysia. 
On the other hand, PanPages IT business segment is responsible for RFID Solutions, e-Security solutions e-Procurement solutions, could computing and infrastructure solutions. PanPages is listed on the Main Market of Bursa Malaysia. A listed company in Malaysia must adhere to strict regulations in corporate governance and transparency based on international standards.
In PanPages, we pride ourselves of developing excellent technology and search solutions by passionate people. We have the market coverage throughout South East Asia with offices in major cities.</p>
			
			<a href="templates.html"><img alt="Click to Join" src="assets/images/start-image.png"/></a>			
		</div>
	</div>
	<div id ="footer">
		<p>Copyright Panpages &copy; 2015 All Rights Reserved</p>
	</div>
<script type="text/javascript">
$(window).load(function(){
     $("#content").mCustomScrollbar();
});
</script>
<script type="text/javascript">
 $(document).ready(function() {
  $(".fancybox").fancybox({
  "type": "image"
});
 });
</script>

</body>
</html>