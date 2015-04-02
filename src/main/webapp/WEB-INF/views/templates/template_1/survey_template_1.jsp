<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
</head>
<body>
	Survey template 1
	<jsp:include page="section_1_template_1.jsp"></jsp:include>
	<jsp:include page="section_2_template_1.jsp"></jsp:include>
	<jsp:include page="section_3_template_1.jsp"></jsp:include>
	<jsp:include page="section_4_template_1.jsp"></jsp:include>
	<img src="<c:url value="/assets/images/panpages_logo.jpg" />" alt="" />
</body>
</html>