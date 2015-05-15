<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/assets/css/jquery.mCustomScrollbar_v3.0.2.css" />">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/assets/css/jquery.fancybox_v2.1.5.css" />">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/assets/css/bootstrap.min_v3.2.css" />">
<link rel="stylesheet" type="text/css"
	href="<c:url value="/assets/css/home.css" />">
<script src="<c:url value="/assets/js/jquery_v1.8.2.js" />"></script>
<script src="<c:url value="/assets/js/bootstrap.min_v3.2.0.js" />"></script>
<script src="<c:url value="/assets/js/jquery.fancybox_v2.1.5.js" />"></script>
<script
	src="<c:url value="/assets/js/jquery.mCustomScrollbar_v3.0.2 .js" />"></script>
<script src="<c:url value="/assets/js/home.js" />"></script>
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
<link rel="stylesheet" type="text/css"
	href="<c:url value="/template_assets/template_1/assets/css/template_1.css" />">
<link rel="stylesheet"
	href="<c:url value="/template_assets/template_1/assets/css/jquery-ui_v1.11.4.css" />">
<script
	src="<c:url value="/template_assets/template_1/assets/js/jquery-ui_v1.11.4.js" />"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<link rel="stylesheet" type="text/css"
	href="<c:url value="/template_assets/template_1/assets/css/formwizard.css" />">
<script
	src="<c:url value="/template_assets/template_1/assets/js/formwizard.js" />"></script>
<title>SURVEY TEMPLATE 1</title>
</head>
<body>
	<div class="container" id="main-content">
		<div id="header">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 logo">
				<a href="<c:url value="/index.html" />"><img class="img-responsive" src="assets/images/logo.jpg" /></a>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 main-menu">
				 <span class="menu-item"><a href="index.html">HOME</a></span>
				 |
				 <span class="menu-item"><a href="templates.html">SURVEYS</a></span>
				 | 
				 <span class="menu-item"><a href="http://about.panpages.com/">ABOUT</a></span>
			</div>
		</div>
		<div class="separator"></div>
		<div id="content">
			<form:form method="POST" modelAttribute="surveyForm"  enctype="multipart/form-data"
				action="survey_1.html?submit"  id="surveyForm">
				<div id="form-sections">
					<fieldset class="sectionwrap">
						<jsp:include page="section_1_template_1.jsp"></jsp:include>
					</fieldset>
					<fieldset class="sectionwrap">
						<jsp:include page="section_2_template_1.jsp"></jsp:include>
					</fieldset>
					<fieldset class="sectionwrap">
						<jsp:include page="section_3_template_1.jsp"></jsp:include>
					</fieldset>
					<fieldset class="sectionwrap">
						<jsp:include page="section_4_template_1.jsp"></jsp:include>
					</fieldset>
					<fieldset class="sectionwrap">
						<jsp:include page="section_5_template_1.jsp"></jsp:include>
					</fieldset>
					<fieldset class="sectionwrap">
						<jsp:include page="section_6_template_1.jsp"></jsp:include>
					</fieldset>
					<fieldset class="sectionwrap">
						<jsp:include page="section_7_template_1.jsp"></jsp:include>
					</fieldset>
					<fieldset class="sectionwrap">
						<jsp:include page="section_8_template_1.jsp"></jsp:include>
					</fieldset>
					<fieldset class="sectionwrap">
						<jsp:include page="section_9_template_1.jsp"></jsp:include>
					</fieldset>
					<fieldset class="sectionwrap">
						<jsp:include page="section_10_template_1.jsp"></jsp:include>
					</fieldset>
				</div>
				<div class="row">
					<button type="button" class="btn btn-view">View My Proposal</button>
					<button type="submit" class="btn btn-submit">Submit</button>
				</div>
			</form:form>
		</div>
	</div>
	
	<div id="footer">
		<p>Copyright <strong>Panpages</strong> &copy; 2015 All Rights Reserved</p>
	</div>
	
	<script>
		$(window).bind("load", function() {
			$("#form-sections div").first().css("width", "100%");
		});
	</script>
</body>
</html>