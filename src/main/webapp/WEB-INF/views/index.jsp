<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jstl/xml" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jstl/sql" %>
<html>
<head>
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/jquery.fancybox.css" />" >
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/jquery.mCustomScrollbar.css" />" >
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/bootstrap.css" />" >
<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/home.css" />" >
<script src="<c:url value="/assets/js/jquery-1.8.2.min.js" />"></script>
<script src="<c:url value="/assets/js/bootstrap.min.js" />"></script>
<script src="<c:url value="/assets/js/jquery.fancybox.js" />"></script>
<script src="<c:url value="/assets/js/jquery.mCustomScrollbar.js" />"></script>
<script src="<c:url value="/assets/js/home.js" />"></script>
</head>
<body>
	<div id="container">
		<div id="header">
			<div class="logo"></div>
		</div>
		<div id="content">
			<a id="start" href="templates.html">START</a>
			
		</div>
		<div id ="footer">
			<p>Copyright Panpages © 2015 All Rights Reserved</p>
		</div>
	</div>
	<script type="text/javascript">
	 $(window).load(function(){
	     $("#content").mCustomScrollbar();
	 });
	</script>
</body>
</html>