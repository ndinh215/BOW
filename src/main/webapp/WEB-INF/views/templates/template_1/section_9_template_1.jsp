<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Step 9</title>
<script type="text/javascript">
$(function() {
	$('#file-upload').change(function(e) {
		
	});
}); 
</script>
</head>
<body>
	<div class="step9 row">
		<div class="col-xs-12 col-sm-12 col-md-2 col-lg-2"></div>	
		<div class="col-xs-12 col-sm-12 col-md-10 col-lg-10">
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<h1>Please upload your proposed keyword(s) list.</h1>
				</div>
			</div>
			<div class="row">
				<div class="file-section col-xs-12 col-sm-12 col-md-11 col-lg-12">
					<span class="btn btn-success fileinput-button">
				        <span>Choose File...</span>
						<input name="fields['proposed-keyword']" id="file-upload" type="file">
						<input name="fields['uploaded-file-name']" id="uploaded-file-name" type="hidden">
					</span>
					<label id="file-name"></label>
					<input id="file-name-uploaded" type="hidden">
					<label id="upload-error"></label>
				</div>
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<div id="progress" class="progress">
				        <div class="progress-bar progress-bar-success"></div>
				    </div>
				</div>
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
					<p style="color: #FD0000;">NOTE: Only accept .csv, .txt format file.</p>
					<p>The <span style="font-weight:bold;">THREE</span> required columns are as below:</p>
					<p>1. Keyword</p>
					<p>2. Average Monthly Search (exact match only)</p>
					<p>3. Suggested Bid (Currency in<span style="font-weight: bold;"> Ringgit Malaysia ONLY</span>)</p>
				</div>
			</div>
		</div>
	</div>
</body>
</html>