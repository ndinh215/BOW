<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>

	<link rel="stylesheet" href="<c:url value="/template_assets/template_1/assets/css/bootstrap.min_v3.3.4.css" />">

	<link rel="stylesheet" href="<c:url value="/template_assets/template_1/assets/css/bootstrap-theme.min_v3.3.4.css" />">

	<script src="<c:url value="/template_assets/template_1/assets/js/jquery.min_v2.1.3.js" />"></script>

	<script src="<c:url value="/template_assets/template_1/assets/js/bootstrap.min_v3.3.4.js" />"></script>
	
	<link href="<c:url value="/template_assets/template_1/assets/css/template_1.css" />" rel="stylesheet">
	
	<script src="<c:url value="/template_assets/template_1/assets/js/template_1.js" />"></script>
	
	<script src="<c:url value="/assets/js/jquery.mCustomScrollbar_v3.0.2 .js" />"></script>
	
	<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/jquery.mCustomScrollbar_v3.0.2.css" />" >

	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Survey template 1</title>
	<link rel="stylesheet" type="text/css" href="<c:url value="/assets/css/home.css" />" >
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
		<form:form method="POST" modelAttribute="surveyForm" action="survey_1.html">
			<div id="con">
				<section class="tabs">
					<input id="tab-1" type="radio" name="radio-set" class="tab-selector-1" checked="checked" />
					<label for="tab-1" class="tab-label-1">Planner 1</label>
			
					<input id="tab-2" type="radio" name="radio-set" class="tab-selector-2" />
					<label for="tab-2" class="tab-label-2">Planner 2</label>
			
					<input id="tab-3" type="radio" name="radio-set" class="tab-selector-3" />
					<label for="tab-3" class="tab-label-3">Planner 3</label>
				
					<input id="tab-4" type="radio" name="radio-set" class="tab-selector-4" />
					<label for="tab-4" class="tab-label-4">Proposed Keywords</label>
				
					<div class="clear-shadow"></div>
					
					<div class="row content">
						<div class="content-1">
							<jsp:include page="section_1_template_1.jsp"></jsp:include>
						</div>
						<div class="content-2">
							<jsp:include page="section_2_template_1.jsp"></jsp:include>
						</div>
						<div class="content-3">
							<jsp:include page="section_3_template_1.jsp"></jsp:include>
						</div>
						<div class="content-4">
							<jsp:include page="section_4_template_1.jsp"></jsp:include>
						</div>
					</div>
				</section>
			</div>
			<div id="sub"><input type ="submit" value ="Submit" ></div>
			</form:form>
		</div>
		<div id ="footer">
			<p>Copyright Panpages © 2015 All Rights Reserved</p>
		</div>
		
	</div>
</body>
</html>