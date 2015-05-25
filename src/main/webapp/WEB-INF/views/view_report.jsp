<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<title>
	<c:choose> 
	  <c:when test="${isPreview == true}">
			PREVIEW YOUR RESULT
	  </c:when>
	  <c:otherwise>		
	  		VIEW YOUR RESULT
	  </c:otherwise>
	</c:choose>
</title>
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
<script type="text/javascript">
	$( document).ready(function() {
		
	});
</script>
</head>
<body>
	<div class="container" id="main-content">
		<div id="header">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 logo">
				<a href="<c:url value="/index.html" />"><img class="img-responsive" src="assets/images/logo.jpg" /></a>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 main-menu">
				 <span class="menu-item"><a href="index.html">HOME</a></span>
				 &frasl;
				 <span class="menu-item"><a href="templates.html">SURVEYS</a></span>
				 &frasl; 
				 <span class="menu-item"><a href="http://about.panpages.com/">ABOUT</a></span>
			</div>
		</div>
		<div class="separator"></div>
		<div id="content" style="padding-top: 30px;">
			<c:if test="${isPreview == true}"> <h3>PREVIEW YOUR SURVEY RESULT</h3> </c:if>
			<c:choose> 
			  <c:when test="${isPreview == true}">
			    <div id="pdf">
				  <object width="100%" height="500" type="application/pdf" data="<c:url value="${reportPath}" />?#zoom=100&scrollbar=1&toolbar=1&navpanes=1" id="pdf_content">
				    <p>Sorry, your PDF cannot be displayed.</p>
				  </object>
				</div>
				<div class="right-float-buttons">
					<form action="/submit/${surveyId}.html">
				    	<button class="btn red-white-button" onclick="window.history.back();">EDIT</button> &nbsp;
				    	<button class="btn red-white-button" onclick="">SUBMIT</button>
				    	<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />
			    	</form>
			    </div>
			  </c:when>
			  <c:otherwise>
			  	<a href="<c:url value="${reportPath}" />"><img class="img-responsive"  alt="Click to Join" src="assets/images/submit-thank.png"/></a>			
			  </c:otherwise>
			</c:choose>
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

