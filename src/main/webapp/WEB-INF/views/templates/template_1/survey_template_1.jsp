<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>

<link rel="stylesheet"
	href="<c:url value="/template_assets/template_1/assets/css/bootstrap.min_v3.3.4.css" />">

<link rel="stylesheet"
	href="<c:url value="/template_assets/template_1/assets/css/bootstrap-theme.min_v3.3.4.css" />">

<script
	src="<c:url value="/template_assets/template_1/assets/js/jquery.min_v2.1.3.js" />"></script>

<script
	src="<c:url value="/template_assets/template_1/assets/js/bootstrap.min_v3.3.4.js" />"></script>

<script
	src="<c:url value="/template_assets/template_1/assets/js/template_1.js" />"></script>

<script
	src="<c:url value="/assets/js/jquery.mCustomScrollbar_v3.0.2 .js" />"></script>

<link rel="stylesheet" type="text/css"
	href="<c:url value="/assets/css/jquery.mCustomScrollbar_v3.0.2.css" />">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/template_assets/template_1/assets/css/template_1.css" />">

<link rel="stylesheet"
	href="<c:url value="/template_assets/template_1/assets/css/jquery-ui_v1.11.4.css" />">
<script
	src="<c:url value="/template_assets/template_1/assets/js/jquery-ui_v1.11.4.js" />"></script>

<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>SURVEY TEMPLATE 1</title>
</head>
<body>
	<div class="container"
		style="background: none; padding-top: 0; top: 0; padding: 0;">
		<div id="header">
			<img src="assets/images/header.png" />
			<div id="menu"></div>
		</div>
	</div>
	<div class="container" id="main-content">
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
		<form:form method="POST" modelAttribute="surveyForm"
			action="survey_1.html">
			<div>
				<div id="tabs">
					<ul>
						<li><a href="#planner-1" class="survey-tab"><span>Planner 1</span></a></li>
						<li><a href="#planner-2" class="survey-tab"><span>Planner 2</span></a></li>
						<li><a href="#planner-3" class="survey-tab"><span>Planner 3</span></a></li>
						<li><a href="#proposed-keywords" class="survey-tab"><span>Proposed
									Keywords</span></a></li>
					</ul>
					<div id="planner-1">
						<jsp:include page="section_1_template_1.jsp"></jsp:include>
					</div>
					<div id="planner-2">
						<jsp:include page="section_2_template_1.jsp"></jsp:include>
					</div>
					<div id="planner-3">
						<jsp:include page="section_3_template_1.jsp"></jsp:include>
					</div>
					<div id="proposed-keywords">
						<jsp:include page="section_4_template_1.jsp"></jsp:include>
					</div>
				</div>
				<div id="submit-div">
					<input type="submit" value="SUBMIT" id="subit-form">
					<input type="hidden">
				</div>
			</div>
		</form:form>
	</div>
	<div style="clear: both;"></div>
	<div id="footer">
		<p>Copyright <strong>Panpages</strong> � 2015 All Rights Reserved</p>
	</div>
	<script>
		$("#tabs").tabs();
	</script>
</body>
</html>