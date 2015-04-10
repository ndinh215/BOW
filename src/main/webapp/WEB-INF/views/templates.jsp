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
				<c:forEach items="${templates}" var="template">
					<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div id ="survey-image" >
							<a><img src="assets/images/survey_1.png"/></a>
						</div>
						<div id = "survey-name">
							<a href="<c:url value="survey_${template.id}.html"/>">${template.name}</a>
						</div>
					</div>
				</c:forEach>
					<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
						<div id ="survey-image" >
							<a><img src="assets/images/survey_2.png"/></a>							
						</div>
						<div id = "survey-name">
							<a href="survey_2.html">Survey DEMO</a>
						</div>
					</div>
		</div>
	</div>
	<div id ="footer">
		<p>Copyright Panpages © 2015 All Rights Reserved</p>
	</div>
</body>
</html>