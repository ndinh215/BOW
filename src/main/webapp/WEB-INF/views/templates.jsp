<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>List Survey</title>
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
			<table>
				<tr>
					<th>Id</th>
					<th>Survey Name</th>
					<th>Description</th>
					<th>#</th>
				</tr>
				<c:forEach items="${templates}" var="template">
					<tr>
						<td>${template.id}</td>
						<td>${template.name}</td>
						<td>${template.desc}</td>
						<td><a href="<c:url value="survey_${template.id}.html"/>">Go to this Survey</a>
					</tr>
				</c:forEach>
			</table>
		</div>
	</div>
</body>
</html>