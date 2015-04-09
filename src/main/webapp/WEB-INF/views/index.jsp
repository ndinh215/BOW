<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jstl/xml" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jstl/fmt" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jstl/sql" %>
<html>
<head>
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
	<div id="container">
		<div id="header">
			<div class="logo">
				<a style="height: 70px;width: 250px;display: block; " href="#"></a>
			</div>
		</div>
		<div id="content">
			<img src="assets/images/content-home.jpg"/>
			<p>Swarm intelligence is always right. The market will tell you what they actually want and at what price. If you listen closely to the content in the internet, you can hear the world thinks.
We have one of the most comprehensive and accurate databases of business in South East Asia. We have a big team for data collection. From the data collect we format them into structured information that you can use. What, how and when you use the information will become the swarm intelligence.
Any buyer will consult the swarm intelligence before buying. Any seller will listen to the swarm intelligence before selling. The power is shifting to the hands of consumers.</p>
			<a href="templates.html"><img alt="Click to Join" src="assets/images/start-image.png"/></a>			
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