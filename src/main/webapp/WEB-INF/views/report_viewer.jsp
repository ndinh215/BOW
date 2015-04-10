<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>View Report</title>
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
		var iframe = $("#pdf-viewer-iframe")[0];

	   
	        var ifTitle = iframe.contentDocument.title;
	        if ( ifTitle.indexOf("404")>=0 ) {
		        location.reload();
	        }
	});
</script>
</head>
<body>
	<div id="container">
		<div id = "icon">
		</div>
		<div id="header">
			<div class="logo">
				<a href="#"></a>
			</div>
			<div id="menu"></div>
		</div>
		<div id="content">
			<a href="<c:url value="${reportPath}" />"><img alt="Click to Join" src="assets/images/view-report.png"/></a>
		</div>
	</div>
	<div id ="footer">
		<p>Copyright Panpages &copy; 2015 All Rights Reserved</p>
	</div>
</body>
</html>

