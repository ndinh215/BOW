<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>View report</title>
<style type="text/css">
	html {
	   height: 100%;
	}
	
	body {
	   margin: 0;
	   padding: 0;
	   height: 100%;
	}
</style>
</head>
<body>
	<iframe height="100%" width="100%" src="<c:url value="${reportPath}" />"></iframe>
</body>
</html>