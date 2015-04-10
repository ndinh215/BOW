<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>List Survey</title>
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
		<div id="header">
			<div class="logo">
				<a style="height: 70px;width: 250px;display: block; " href="index.html"></a>
			</div>
		</div>
		<div id="content">
			<p>Thank for your survey's submitting...</p>
			<p>Please click on <a href="<c:url value="${reportPath}" />"> this </a> to view your survey.</p>
		</div>
		
		<a href="<c:url value="${reportPath}" />">download</a>
		<div id ="footer">
			<p>Copyright Panpages © 2015 All Rights Reserved</p>
		</div>
	</div>
</body>
</html>
