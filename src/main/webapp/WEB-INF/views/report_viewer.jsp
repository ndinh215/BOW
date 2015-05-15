<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>SURVEY RESULT</title>
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/jquery.mCustomScrollbar_v3.0.2.css" />" >
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/jquery.fancybox_v2.1.5.css" />" >
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/bootstrap.min_v3.2.css" />" >
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/home.css" />" >
<script src="<c:url value="/assets/js/jquery_v1.8.2.js" />"></script>
<script src="<c:url value="/assets/js/bootstrap.min_v3.2.0.js" />"></script>
<script src="<c:url value="/assets/js/jquery.fancybox_v2.1.5.js" />"></script>
<script src="<c:url value="/assets/js/jquery.mCustomScrollbar_v3.0.2 .js" />"></script>
<script src="<c:url value="/assets/js/home.js" />"></script>
<script type="text/javascript">
	$( document).ready(function() {
		
	});
</script>
</head>
<body>
	<div class="container" style="background:none;  padding-top: 0;  top: 0;  padding: 0;">
		<div id="header">
			<img src="assets/images/header.png"/>
			<div id="menu"></div>
		</div>
	</div>
	<div class ="container" id ="main-content">
		<div id="main-menu">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="padding: 0">
				&nbsp;</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6" style="padding: 0">
				<a href="index.html"> <span class="menu-item">HOME</span>
				</a> | <a href="templates.html"> <span class="menu-item">SURVEYS</span>
				</a> | <a href="index.html"> <span class="menu-item">ABOUT</span>
				</a>
			</div>
		</div>
		<div id="content" style="padding-top: 30px;">
			<a href="<c:url value="${reportPath}" />"><img alt="Click to Join" src="assets/images/view-report.png"/></a>
		</div>
	</div>
	<div id ="footer">
		<p>Copyright <strong>Panpages</strong> &copy; 2015 All Rights Reserved</p>
	</div>
		<script type="text/javascript">
	$(window).load(function(){
	     $("#content").mCustomScrollbar();
	});
	</script>
</body>
</html>

