$(window).bind("load", function() {
	$("#form-sections div").first().css("width", "100%");

	// Add buttons to formpaginate
	var previewBtn = '<button type="button" id="previewBtn" style="display: none; float: right;" onclick="previewSurvey();" class="btn red-white-button">VIEW MY PROPOSAL</button>';
	var submitBtn = '<button type="submit" id="submitBtn" style="display: none; float: right; margin-left: 3px;" onclick="submitSurvey();" class="btn red-white-button">SUBMIT</button>';
	
	$(".formpaginate").append(submitBtn);
	$(".formpaginate").append(previewBtn);

	if (myform.currentsection == 9) {
		$("#previewBtn").css("display", "inline");
		$("#submitBtn").css("display", "inline");
		$(".formpaginate .status").css("display", "none");
		$(".formpaginate .next").css("display", "none");
	}
});

function previewSurvey() {
	$('#surveyForm').attr('action', 'survey_1.html?preview');
	$('#surveyForm').submit();
	
	$("#management-fee-option-a").prop( "disabled", false );
	$("#subtotal-option-a").prop( "disabled", false );
	$("#gov-tax-option-a").prop( "disabled", false );
	$("#grand-total-option-a").prop( "disabled", false );
	
	$("#management-fee-option-b").prop( "disabled", false );
	$("#subtotal-option-b").prop( "disabled", false );
	$("#gov-tax-option-b").prop( "disabled", false );
	$("#grand-total-option-b").prop( "disabled", false );
}

function submitSurvey() {
	$('#surveyForm').attr('action', 'survey_1.html?submit');
	$('#surveyForm').submit();

	$("#management-fee-option-a").prop( "disabled", false );
	$("#subtotal-option-a").prop( "disabled", false );
	$("#gov-tax-option-a").prop( "disabled", false );
	$("#grand-total-option-a").prop( "disabled", false );
	
	$("#management-fee-option-b").prop( "disabled", false );
	$("#subtotal-option-b").prop( "disabled", false );
	$("#gov-tax-option-b").prop( "disabled", false );
	$("#grand-total-option-b").prop( "disabled", false );
}

var myform = null, fileUpload = null;

$(document ).ready(function() {
	$('.survey-tip').tooltip({html: true, placement: 'bottom'});
	
    fileUpload = $('#file-upload').fileupload({
        url: "calculate_field_1/total-campaign-budget.html",
        dataType: 'json',
        autoUpload: false,
        acceptFileTypes: /(\.|\/)(text|csv)$/i,
        maxFileSize: 5000000, // 5 MB
        done: function (e, data) {
        	var status = data.response().result['status'];
        	if (status == 'success') {
        		var totalCampaignBudget = parseFloat(data.response().result['total-campaign-budget']).toFixed(2);
        		// Set total campaign budget value
        		$('#Calculation-Code-L-OptionA').text(totalCampaignBudget);
        		$('#Calculation-Code-L-OptionB').text(parseFloat(totalCampaignBudget*0.75).toFixed(2));
        		// Set uploaded file name
        		var uploadedFileName = data.response().result['uploaded-file-name'];
        		$('#uploaded-file-name').val(uploadedFileName);
        	}
        },
		progressall: function (e, data) {
	        var progress = parseInt(data.loaded / data.total * 100, 10);
	        $('#progress .progress-bar').css('width', progress + '%');
	    }
    }).on('fileuploadadd', function (e, data) {
    	var isValidFile = false;
    	
    	// Set progress to 0%
    	$('#progress .progress-bar-success').css("width", "0");
    	
    	// Reset uploaded file name
    	$('#file-name').text('');
    	$('#file-name-uploaded').val('');
    	// Set filename label
    	$('#file-name').text(data.originalFiles[0].name);
    	$('#file-name-uploaded').val(data.originalFiles[0].name);
    	
    	// Analyze extension
    	var extension = data.originalFiles[0].name.split('.').pop().toLowerCase();						
		
		if((extension != "csv") && (extension != "txt")) {
			$('#file-upload').focus();
			alert("Only accept '.csv','.txt' formats are allowed.");
			$('#file-name').text("");
			
			isValidFile = false;
		} else if (extension == "csv"){
			isValidFile = true;
		} else if (extension == "txt"){
			isValidFile = true;
		}
    	
		if (isValidFile) {
			data.submit();
			return;
		} 
		
		data.abort();
    }).on('fileuploaddone', function (e, data) {
    	$('#upload-error').text("");    	
    }).on('fileuploadfail', function (e, data) {
    	$('#upload-error').text("Sorry, upload the file failed!");
    	$('#uploaded-file-name').val('');
    }).prop('disabled', !$.support.fileInput).parent().addClass($.support.fileInput ? undefined : 'disabled');
	
	myform = new formtowizard({
		formid: 'surveyForm',
		persistsection: false,
		revealfx: ['slide', 500],
		
		onpagechangestart:function($, i, $fieldset, rawi) {
			if(rawi == "next"){
				var validated = true;
				var fieldset = $fieldset.get(0); 
				var allels = fieldset.getElementsByTagName("*"); 
				for (var i=0; i<allels.length; i++){
					if (allels[i].type == "text" || allels[i].type == "checkbox" || allels[i].type == "file" || allels[i].tagName=="TEXTAREA"){
												
						/*  STEP 1 */
						if((allels[i].getAttribute('id')) == "consultant-name"){ 
							if (allels[i].value == ""){
								$("#consultant-name-error").text("Please fill in Consultant Name field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								$("#consultant-name-error").text("");
								var consultantName = $('#consultant-name').val();
							}
						}
						else if((allels[i].getAttribute('id')) == "email-address"){ 
							if (allels[i].value == ""){
								$("#email-address-error").text("Please fill in Email Address field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								var email = $("#email-address").val(),
								intRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
								if((!intRegex.test(email)))
								{
									$("#email-address-error").text("Invalid Email Address!");
									allels[i].focus();
									validated = false;
									break; 
								}
								else{
									$("#email-address-error").text("");
									var mobileNumber = $('#email-address').val();
								}
							}
						}
						else if((allels[i].getAttribute('id')) == "mobile-number"){
							if (allels[i].value == ""){
								$("#mobile-number-error").text("Please fill in Mobile Number field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								var phone = $("#mobile-number").val(),
								intRegex = /^[0-9-+]+$/;
								if((phone.length < 6) || (!intRegex.test(phone)))
								{
									$("#mobile-number-error").text("Please specify a valid phone number!");
									allels[i].focus();
									validated = false;
									break; 
								}
								else{
									$("#mobile-number-error").text("");
									var mobileNumber = $('#mobile-number').val();
								}
							}
						}
						
						// STEP 2 
						else if((allels[i].getAttribute('id')) == "company-name"){
							if (allels[i].value == ""){
								$("#company-name-error").text("Please fill in Company Name field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								$("#company-name-error").text("");
								var consultantName = $('#company-name').val();
							}
						}
						else if((allels[i].getAttribute('id')) == "listing-id"){
							if (allels[i].value == ""){
								$("#listing-id-error").text("Please fill in Listing ID field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								$("#listing-id-error").text("");
								var consultantName = $('#listing-id').val();
							}
						}
						else if((allels[i].getAttribute('id')) == "company-address"){
							if (allels[i].value == ""){
								$("#company-address-error").text("Please fill in Company Address field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								$("#company-address-error").text("");
								var consultantName = $('#company-address').val();
							}
						}
						else if((allels[i].getAttribute('id')) == "company-pic"){
							if (allels[i].value == ""){
								$("#company-pic-error").text("Please fill in Company PIC field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								$("#company-pic-error").text("");
								var consultantName = $('#company-pic').val();
							}
						}
						// STEP 3 
						else if((allels[i].getAttribute('id')) == "step-3-panpages"){
							if(($("#step-3-panpages").is(':checked')) == true){
								$("#step31").remove();
								$('#step-3-panpages').val("true");
								$( "#step-3" ).append( '<input type="hidden" id="step31"'+' name="fields['+"'advertising-solution-subscribed'"+']"'+' value="panpages">');
							} else{
								$('#step-3-panpages').val("false");
								$("#step31").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "step-3-google-adwords-search-mobile"){						
							if(($("#step-3-google-adwords-search-mobile").is(':checked')) == true){
								$("#step32").remove();
								$('#step-3-google-adwords-search-mobile').val("true");
								$( "#step-3" ).append( '<input type="hidden" id="step32"'+' name="fields['+"'advertising-solution-subscribed'"+']"'+' value="google-adWords-search-mobile">');
							} else{
								$('#step-3-google-adwords-search-mobile').val("false");
								$("#step32").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "step-3-google-display-network"){						
							if(($("#step-3-google-display-network").is(':checked')) == true){
								$("#step33").remove();
								$('#step-3-google-display-network').val("true");
								$( "#step-3" ).append( '<input type="hidden" id="step33"'+' name="fields['+"'advertising-solution-subscribed'"+']"'+' value="google-display-network">');
							} else{
								$('#step-3-google-display-network').val("false");
								$("#step33").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "step-3-yahoo-search"){	
							$("#step34").remove();					
							if(($("#step-3-yahoo-search").is(':checked')) == true){
								$('#step-3-yahoo-search').val("true");
								$( "#step-3" ).append( '<input type="hidden" id="step34"'+' name="fields['+"'advertising-solution-subscribed'"+']"'+' value="yahoo-search">');
							} else{
								$('#step-3-yahoo-search').val("false");
								$("#step34").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "step-3-yahoo-display"){						
							if(($("#step-3-yahoo-display").is(':checked')) == true){
								$("#step35").remove();
								$('#step-3-yahoo-display').val("true");
								$( "#step-3" ).append( '<input type="hidden" id="step35"'+' name="fields['+"'advertising-solution-subscribed'"+']"'+' value="yahoo-display">');
							} else{
								$('#step-3-yahoo-display').val("false");
								$("#step35").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "step-3-youtube-ads"){						
							if(($("#step-3-youtube-ads").is(':checked')) == true){
								$("#step36").remove();
								$('#step-3-youtube-ads').val("true");
								$( "#step-3" ).append( '<input type="hidden" id="step36"'+' name="fields['+"'advertising-solution-subscribed'"+']"'+' value="youtube-ads">');
							} else{
								$('#step-3-youtube-ads').val("false");
								$("#step36").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "step-3-facebook-ads"){
							$("#step37").remove();						
							if(($("#step-3-facebook-ads").is(':checked')) == true){
								$('#step-3-facebook-ads').val("true");
								$( "#step-3" ).append( '<input type="hidden" id="step37"'+' name="fields['+"'advertising-solution-subscribed'"+']"'+' value="facebook-ads">');
							} else{
								$('#step-3-facebook-ads').val("false");
								$("#step37").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "step-3-pan-360"){						
							if(($("#step-3-pan-360").is(':checked')) == true){
								$("#step38").remove();
								$('#step-3-pan-360').val("true");
								$( "#step-3" ).append( '<input type="hidden" id="step38"'+' name="fields['+"'advertising-solution-subscribed'"+']"'+' value="pan-360">');
							} else{
								$('#step-3-pan-360').val("false");
								$("#step38").remove();
							} 
						}
						else if((allels[i].getAttribute('id')) == "step-3-alibaba-com"){						
							if(($("#step-3-alibaba-com").is(':checked')) == true){
								$("#step39").remove();
								$('#step-3-alibaba-com').val("true");
								$( "#step-3" ).append( '<input type="hidden" id="step39"'+' name="fields['+"'advertising-solution-subscribed'"+']"'+' value="alibaba-com">');
							} else{
								$('#step-3-alibaba-com').val("false");
								$("#step39").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "step-3-super-pages"){						
							if(($("#step-3-super-pages").is(':checked')) == true){
								$("#step310").remove();
								$('#step-3-super-pages').val("true");
								$( "#step-3" ).append( '<input type="hidden" id="step310"'+' name="fields['+"'advertising-solution-subscribed'"+']"'+' value="super-pages">');
							} else{
								$('#step-3-super-pages').val("false");
								$("#step310").remove();
							}  
						}
						else if((allels[i].getAttribute('id')) == "previous-contract-value"){
							if (allels[i].value == ""){
								$("#previous-contract-value-error").text("Please fill in Previous Contract Value field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								var previousContractvalue = $("#previous-contract-value").val(),
								numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
								if(!numberRegex.test(previousContractvalue))
								{
									$("#previous-contract-value-error").text("Please specify a number in Previous Contract Value field!");
									allels[i].focus();
									validated = false;
									break; 
								}
								else{
									$("#previous-contract-value-error").text("");
									$("#previous-contract-value").val(previousContractvalue);
								}
							}
						}
						else if((allels[i].getAttribute('id')) == "website-visit"){
							if (allels[i].value == ""){
								validated = true;
								var websiteVisit = 0;
								$("#website-visit").val(websiteVisit);
							} else{
								var websiteVisit = $("#website-visit").val(),
								numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
								if(!numberRegex.test(websiteVisit))
								{
									$("#website-visit-error").text("Please specify a number in Website Visit field!");
									allels[i].focus();
									validated = false;
									break; 
								}
								else{
									$("#website-visit-error").text("");
									var websiteVisit = $('#website-visit').val();
									$("#website-visit").val(websiteVisit);
								}
							}
						}
						else if((allels[i].getAttribute('id')) == "campaign-click-through-rate"){
							if (allels[i].value == ""){
								validated = true;
								var campaignClickthroughrate = 2;
								$("#campaign-click-through-rate").val(campaignClickthroughrate);
							} else{
								var campaignClickthroughrate = $("#campaign-click-through-rate").val(),
								numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
								if(!numberRegex.test(campaignClickthroughrate))
								{
									$("#campaign-click-through-rate-error").text("Please specify a number in Campaign Click Through Rate field!");
									allels[i].focus();
									validated = false;
									break; 
								}
								else{
									$("#campaign-click-through-rate-error").text("");
									$("#campaign-click-through-rate").val(campaignClickthroughrate);
								}
							}
						}
						
						
						// STEP 4 
						else if((allels[i].getAttribute('id')) == "improve-website-content"){
							if(($("#improve-website-content").is(':checked')) == true){
								$('#improve-website-content').val("true");
							} else{
								$('#improve-website-content').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "add-on-relevant-product-pictures"){
							if(($("#add-on-relevant-product-pictures").is(':checked')) == true){
								$('#add-on-relevant-product-pictures').val("true");
							} else{
								$('#add-on-relevant-product-pictures').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "add-on-product-description"){
							if(($("#add-on-product-description").is(':checked')) == true){
								$('#add-on-product-description').val("true");
							} else{
								$('#add-on-product-description').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "include-product-price"){
							if(($("#include-product-price").is(':checked')) == true){
								$('#include-product-price').val("true");
							} else{
								$('#include-product-price').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "include-product-specification"){
							if(($("#include-product-specification").is(':checked')) == true){
								$('#include-product-specification').val("true");
							} else{
								$('#include-product-specification').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "include-company-details"){
							if(($("#include-company-details").is(':checked')) == true){
								$('#include-company-details').val("true");
							} else{
								$('#include-company-details').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "highlight-unique-selling-point"){
							if(($("#highlight-unique-selling-point").is(':checked')) == true){
								$('#highlight-unique-selling-point').val("true");
							} else{
								$('#highlight-unique-selling-point').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "include-certification-for-better-credential"){
							if(($("#include-certification-for-better-credential").is(':checked')) == true){
								$('#include-certification-for-better-credential').val("true");
							} else{
								$('#include-certification-for-better-credential').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "enhance-website-picture-quality"){
							if(($("#enhance-website-picture-quality").is(':checked')) == true){
								$('#enhance-website-picture-quality').val("true");
							} else{
								$('#enhance-website-picture-quality').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "improve-website-maintenance"){
							if(($("#improve-website-maintenance").is(':checked')) == true){
								$('#improve-website-maintenance').val("true");
							} else{
								$('#improve-website-maintenance').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "frequently-update-your-website"){
							if(($("#frequently-update-your-website").is(':checked')) == true){
								$('#frequently-update-your-website').val("true");
							} else{
								$('#frequently-update-your-website').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "timely-response-to-enquiry"){
							if(($("#timely-response-to-enquiry").is(':checked')) == true){
								$('#timely-response-to-enquiry').val("true");
							} else{
								$('#timely-response-to-enquiry').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "monitor-effectiveness"){
							if(($("#monitor-effectiveness").is(':checked')) == true){
								$('#monitor-effectiveness').val("true");
							} else{
								$('#monitor-effectiveness').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "tracking-on-calls-wall-in"){
							if(($("#tracking-on-calls-wall-in").is(':checked')) == true){
								$('#tracking-on-calls-wall-in').val("true");
							} else{
								$('#tracking-on-calls-wall-in').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "improve-brand-awareness"){
							if(($("#improve-brand-awareness").is(':checked')) == true){
								$('#improve-brand-awareness').val("true");
							} else{
								$('#improve-brand-awareness').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "explore-display-network"){
							if(($("#explore-display-network").is(':checked')) == true){
								$('#explore-display-network').val("true");
							} else{
								$('#explore-display-network').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "enhance-visibility"){
							if(($("#enhance-visibility").is(':checked')) == true){
								$('#enhance-visibility').val("true");
							} else{
								$('#enhance-visibility').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "extend-your-marketing-plan-for-longer-visibility"){
							if(($("#extend-your-marketing-plan-for-longer-visibility").is(':checked')) == true){
								$('#extend-your-marketing-plan-for-longer-visibility').val("true");
							} else{
								$('#extend-your-marketing-plan-for-longer-visibility').val("false");
							}	
						}
						else if((allels[i].getAttribute('id')) == "any-additional-comments"){	
							if (allels[i].value == ""){
								var anyAdditionalcomments = '';
								$("#any-additional-comments").val(anyAdditionalcomments);
								validated = true;
								break; 
							} else{
								$("#any-additional-comments-error").text("");
								var anyAdditionalcomments = $("#any-additional-comments").val();
							}
						}
						
						// STEP 5 
						else if((allels[i].getAttribute('id')) == "step-5-a"){	
							if (allels[i].value == ""){
								$("#step-5-a-error").text("Please fill out this field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								var A = $("#step-5-a").val(),
								numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
								if(!numberRegex.test(A))
								{
									$("#step-5-a-error").text("Please fill specify a number in the field!");
									allels[i].focus();
									validated = false;
									break; 
								}
								else{
									$("#step-5-a-error").text("");
									$("#step-5-a").val(A);
								}
							}
						}
						else if((allels[i].getAttribute('id')) == "step-5-b"){	
							if (allels[i].value == ""){
								$("#step-5-b-error").text("Please fill out this field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								var B = $("#step-5-b").val(),
								numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
								if(!numberRegex.test(B))
								{
									$("#step-5-b-error").text("Please fill specify a number in the field!");
									allels[i].focus();
									validated = false;
									break; 
								}
								else{
									$("#step-5-b-error").text("");
									$("#step-5-b").val(B);
								}
							}
						}
						else if((allels[i].getAttribute('id')) == "step-5-d"){	
							if (allels[i].value == ""){
								$("#step-5-d-error").text("Please fill out this field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								var D = $("#step-5-d").val(),
								numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
								if(!numberRegex.test(D))
								{
									$("#step-5-d-error").text("Please fill specify a number in the field!");
									allels[i].focus();
									validated = false;
									break; 
								}
								else{
									$("#step-5-d-error").text("");
									$("#step-5-d").val(D);
								}
							}
						}
						else if((allels[i].getAttribute('id')) == "step-5-h"){	
							if (allels[i].value == ""){
								$("#step-5-h-error").text("Please fill out this field!");
								allels[i].focus();
								validated = false;
								break; 
							} else{
								var H = $("#step-5-h").val(),
								numberRegex = /^[+-]?\d+(\.\d+)?([eE][+-]?\d+)?$/;
								if(!numberRegex.test(H))
								{
									$("#step-5-h-error").text("Please fill specify a number in the field!");
									allels[i].focus();
									validated = false;
									break; 
								}
								else{
									$("#step-5-h-error").text(""); 
									$("#step-5-h").val(H);
								}
							}
						}
						
						// STEP6 
						else if((allels[i].getAttribute('id')) == "malaysia"){
							if(($("#malaysia").is(':checked')) == true){
								$("#1").remove();
								$('#malaysia').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="1"'+' name="fields['+"'geographical-area'"+']"'+' value="Malaysia">');
							} else{
								$('#malaysia').val("false");
								$("#1").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "all-malaysia"){
							if(($("#all-malaysia").is(':checked')) == true){
								$("#2").remove();
								$("#3").remove();
								$("#4").remove();
								$("#5").remove();
								$("#6").remove();
								$("#7").remove();
								$("#8").remove();
								$("#9").remove();
								$("#10").remove();
								$("#11").remove();
								$("#12").remove();
								$("#13").remove();
								$("#14").remove();			
								$("#15").remove();
								$('#all-malaysia').val("true");
								$('#kuala-lumpur').val("true");
								$('#selangor').val("true");
								$('#kedah').val("true");
								$('#penang').val("true");
								$('#ipoh').val("true");
								$('#perlis').val("true");
								$('#pahang').val("true");
								$('#kelantan').val("true");
								$('#terengganu').val("true");
								$('#negeri-sembilan').val("true");
								$('#melaka').val("true");
								$('#johor').val("true");
								$('#sabah').val("true");
								$('#sarawak').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="2"'+' name="fields['+"'geographical-area'"+']"'+' value="Kuala Lumpur">');
								$( "#step-6" ).append( '<input type="hidden" id="3"'+' name="fields['+"'geographical-area'"+']"'+' value="Selangor">');
								$( "#step-6" ).append( '<input type="hidden" id="4"'+' name="fields['+"'geographical-area'"+']"'+' value="Kedah">');
								$( "#step-6" ).append( '<input type="hidden" id="5"'+' name="fields['+"'geographical-area'"+']"'+' value="Penang">');
								$( "#step-6" ).append( '<input type="hidden" id="6"'+' name="fields['+"'geographical-area'"+']"'+' value="Ipoh">');
								$( "#step-6" ).append( '<input type="hidden" id="7"'+' name="fields['+"'geographical-area'"+']"'+' value="Perlis">');
								$( "#step-6" ).append( '<input type="hidden" id="8"'+' name="fields['+"'geographical-area'"+']"'+' value="Pahang">');
								$( "#step-6" ).append( '<input type="hidden" id="9"'+' name="fields['+"'geographical-area'"+']"'+' value="Pelantan">');
								$( "#step-6" ).append( '<input type="hidden" id="10"'+' name="fields['+"'geographical-area'"+']"'+' value="Terengganu">');
								$( "#step-6" ).append( '<input type="hidden" id="11"'+' name="fields['+"'geographical-area'"+']"'+' value="Negeri Sembilan">');
								$( "#step-6" ).append( '<input type="hidden" id="12"'+' name="fields['+"'geographical-area'"+']"'+' value="Melaka">');
								$( "#step-6" ).append( '<input type="hidden" id="13"'+' name="fields['+"'geographical-area'"+']"'+' value="Johor">');
								$( "#step-6" ).append( '<input type="hidden" id="14"'+' name="fields['+"'geographical-area'"+']"'+' value="Sabah">');
								$( "#step-6" ).append( '<input type="hidden" id="15"'+' name="fields['+"'geographical-area'"+']"'+' value="Sarawak">');
							} else{
								$('#all-malaysia').val("false");
								$('#kuala-lumpur').val("false");
								$('#selangor').val("false");
								$('#kedah').val("false");
								$('#penang').val("false");
								$('#ipoh').val("false");
								$('#perlis').val("false");
								$('#pahang').val("false");
								$('#kelantan').val("false");
								$('#terengganu').val("false");
								$('#negeri-sembilan').val("false");
								$('#melaka').val("false");
								$('#johor').val("false");
								$('#sabah').val("false");
								$('#sarawak').val("false");
								$("#2").remove();
								$("#3").remove();
								$("#4").remove();
								$("#5").remove();
								$("#6").remove();
								$("#7").remove();
								$("#8").remove();
								$("#9").remove();
								$("#10").remove();
								$("#11").remove();
								$("#12").remove();
								$("#13").remove();
								$("#14").remove();			
								$("#15").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "kuala-lumpur"){
							if(($("#kuala-lumpur").is(':checked')) == true){
								$("#2").remove();
								$('#kuala-lumpur').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="2"'+' name="fields['+"'geographical-area'"+']"'+' value="Kuala Lumpur">');
							} else{
								$('#all-malaysia').val("false");
								$('#kuala-lumpur').val("false");
								$("#2").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "selangor"){
							if(($("#selangor").is(':checked')) == true){
								$("#3").remove();
								$('#selangor').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="3"'+' name="fields['+"'geographical-area'"+']"'+' value="Selangor">');
							} else{
								$('#all-malaysia').val("false");
								$('#selangor').val("false");
								$("#3").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "kedah"){
							if(($("#kedah").is(':checked')) == true){
								$("#4").remove();
								$('#kedah').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="4"'+' name="fields['+"'geographical-area'"+']"'+' value="Kedah">');
							} else{
								$('#all-malaysia').val("false");
								$('#kedah').val("false");
								$("#4").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "penang"){
							if(($("#penang").is(':checked')) == true){
								$("#5").remove();
								$('#penang').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="5"'+' name="fields['+"'geographical-area'"+']"'+' value="Penang">');
							} else{
								$('#all-malaysia').val("false");
								$('#penang').val("false");
								$("#5").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "ipoh"){
							if(($("#ipoh").is(':checked')) == true){
								$("#6").remove();
								$('#ipoh').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="6"'+' name="fields['+"'geographical-area'"+']"'+' value="Ipoh">');
							} else{
								$('#all-malaysia').val("false");
								$('#ipoh').val("false");
								$("#6").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "perlis"){
							if(($("#perlis").is(':checked')) == true){
								$("#7").remove();
								$('#perlis').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="7"'+' name="fields['+"'geographical-area'"+']"'+' value="Perlis">');
							} else{
								$('#all-malaysia').val("false");
								$('#perlis').val("false");
								$("#7").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "pahang"){
							if(($("#pahang").is(':checked')) == true){
								$("#8").remove();
								$('#pahang').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="8"'+' name="fields['+"'geographical-area'"+']"'+' value="Pahang">');
							} else{
								$('#all-malaysia').val("false");
								$('#pahang').val("false");
								$("#8").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "kelantan"){
							if(($("#kelantan").is(':checked')) == true){
								$("#9").remove();
								$('#kelantan').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="9"'+' name="fields['+"'geographical-area'"+']"'+' value="Pelantan">');
							} else{
								$('#all-malaysia').val("false");
								$('#kelantan').val("false");
								$("#9").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "terengganu"){
							if(($("#terengganu").is(':checked')) == true){
								$("#10").remove();
								$('#terengganu').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="10"'+' name="fields['+"'geographical-area'"+']"'+' value="Terengganu">');
							} else{
								$('#all-malaysia').val("false");
								$('#terengganu').val("false");
								$("#10").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "negeri-sembilan"){
							if(($("#negeri-sembilan").is(':checked')) == true){
								$("#11").remove();
								$('#negeri-sembilan').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="11"'+' name="fields['+"'geographical-area'"+']"'+' value="Negeri Sembilan">');
							} else{
								$('#all-malaysia').val("false");
								$('#negeri-sembilan').val("false");
								$("#11").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "melaka"){
							if(($("#melaka").is(':checked')) == true){
								$("#12").remove();
								$('#melaka').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="12"'+' name="fields['+"'geographical-area'"+']"'+' value="Melaka">');
							} else{
								$('#all-malaysia').val("false");
								$('#melaka').val("false");
								$("#12").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "johor"){
							if(($("#johor").is(':checked')) == true){
								$("#13").remove();
								$('#johor').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="13"'+' name="fields['+"'geographical-area'"+']"'+' value="Johor">');
							} else{
								$('#all-malaysia').val("false");
								$('#johor').val("false");
								$("#13").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "sabah"){
							if(($("#sabah").is(':checked')) == true){
								$("#14").remove();
								$('#sabah').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="14"'+' name="fields['+"'geographical-area'"+']"'+' value="Sabah">');
							} else{
								$('#all-malaysia').val("false");
								$('#sabah').val("false");
								$("#14").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "sarawak"){
							if(($("#sarawak").is(':checked')) == true){
								$("#15").remove();
								$('#sarawak').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="15"'+' name="fields['+"'geographical-area'"+']"'+' value="Sarawak">');
							} else{
								$('#all-malaysia').val("false");
								$('#sarawak').val("false");
								$("#15").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "thailand"){
							if(($("#thailand").is(':checked')) == true){
								$("#16").remove();
								$('#thailand').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="16"'+' name="fields['+"'geographical-area'"+']"'+' value="Thailand">');
							} else{
								$('#thailand').val("false");
								$("#16").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "singapore"){
							if(($("#singapore").is(':checked')) == true){
								$("#17").remove();
								$('#singapore').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="17"'+' name="fields['+"'geographical-area'"+']"'+' value="Singapore">');
							} else{
								$('#singapore').val("false");
								$("#17").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "indonesia"){
							if(($("#indonesia").is(':checked')) == true){
								$("#18").remove();
								$('#indonesia').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="18"'+' name="fields['+"'geographical-area'"+']"'+' value="Indonesia">');
							} else{
								$('#indonesia').val("false");
								$("#18").remove();
							}
						}
						//
						else if((allels[i].getAttribute('id')) == "accounting"){
							if(($("#accounting").is(':checked')) == true){
								$("#19").remove();
								$('#accounting').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="19"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Accounting">');
							} else{
								$('#accounting').val("false");
								$("#19").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "agriculture"){
							if(($("#agriculture").is(':checked')) == true){
								$("#20").remove();
								$('#agriculture').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="20"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Agriculture">');
							} else{
								$('#agriculture').val("false");
								$("#20").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "advertising"){
							if(($("#advertising").is(':checked')) == true){
								$("#21").remove();
								$('#advertising').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="21"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Advertising">');
							} else{
								$('#advertising').val("false");
								$("#21").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "apparel-accessories"){
							if(($("#apparel-accessories").is(':checked')) == true){
								$("#22").remove();
								$('#apparel-accessories').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="22"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Apparel & Accessories">');
							} else{
								$('#apparel-accessories').val("false");
								$("#22").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "automotive"){
							if(($("#automotive").is(':checked')) == true){
								$("#23").remove();
								$('#automotive').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="23"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Automotive">');
							} else{
								$('#automotive').val("false");
								$("#23").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "banking"){
							if(($("#banking").is(':checked')) == true){
								$("#24").remove();
								$('#banking').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="24"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Banking">');
							} else{
								$('#banking').val("false");
								$("#24").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "broadcasting"){
							if(($("#broadcasting").is(':checked')) == true){
								$("#25").remove();
								$('#broadcasting').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="25"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Broadcasting">');
							} else{
								$('#broadcasting').val("false");
								$("#25").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "brokerage"){
							if(($("#brokerage").is(':checked')) == true){
								$("#26").remove();
								$('#brokerage').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="26"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Brokerage">');
							} else{
								$('#brokerage').val("false");
								$("#26").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "biotecnology"){
							if(($("#biotecnology").is(':checked')) == true){
								$("#27").remove();
								$('#biotecnology').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="27"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Biotecnology">');
							} else{
								$('#biotecnology').val("false");
								$("#27").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "cargo-handling"){
							if(($("#cargo-handling").is(':checked')) == true){
								$("#28").remove();
								$('#cargo-handling').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="28"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Cargo Handling">');
							} else{
								$('#cargo-handling').val("false");
								$("#28").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "chemical"){
							if(($("#chemical").is(':checked')) == true){
								$("#29").remove();
								$('#chemical').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="29"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Chemical">');
							} else{
								$('#chemical').val("false");
								$("#29").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "computer"){
							if(($("#computer").is(':checked')) == true){
								$("#30").remove();
								$('#computer').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="30"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Computer">');
							} else{
								$('#computer').val("false");
								$("#30").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "consulting"){
							if(($("#consulting").is(':checked')) == true){
								$("#31").remove();
								$('#consulting').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="31"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Consulting">');
							} else{
								$('#consulting').val("false");
								$("#31").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "consumer-products"){
							if(($("#consumer-products").is(':checked')) == true){
								$("#32").remove();
								$('#consumer-products').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="32"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Consumer Products">');
							} else{
								$('#consumer-products').val("false");
								$("#32").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "cosmetics"){
							if(($("#cosmetics").is(':checked')) == true){
								$("#33").remove();
								$('#cosmetics').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="33"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Cosmetics">');
							} else{
								$('#cosmetics').val("false");
								$("#33").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "department-stores"){
							if(($("#department-stores").is(':checked')) == true){
								$("#34").remove();
								$('#department-stores').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="34"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Department Stores">');
							} else{
								$('#department-stores').val("false");
								$("#34").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "education"){
							if(($("#education").is(':checked')) == true){
								$("#35").remove();
								$('#education').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="35"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Education">');
							} else{
								$('#education').val("false");
								$("#35").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "electronics"){
							if(($("#electronics").is(':checked')) == true){
								$("#36").remove();
								$('#electronics').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="36"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Electronics">');
							} else{
								$('#electronics').val("false");
								$("#36").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "entertainment-leisure"){
							if(($("#entertainment-leisure").is(':checked')) == true){
								$("#37").remove();
								$('#entertainment-leisure').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="37"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Entertainment & Leisure">');
							} else{
								$('#entertainment-leisure').val("false");
								$("#37").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "financial"){
							if(($("#financial").is(':checked')) == true){
								$("#38").remove();
								$('#financial').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="38"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Financial">');
							} else{
								$('#financial').val("false");
								$("#38").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "food-beverage-tobacco"){
							if(($("#food-beverage-tobacco").is(':checked')) == true){
								$("#39").remove();
								$('#food-beverage-tobacco').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="39"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Food Beverage & Tobacco">');
							} else{
								$('#food-beverage-tobacco').val("false");
								$("#39").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "healthcare"){
							if(($("#healthcare").is(':checked')) == true){
								$("#40").remove();
								$('#healthcare').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="40"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Healthcare">');
							} else{
								$('#healthcare').val("false");
								$("#40").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "manufacturing"){
							if(($("#manufacturing").is(':checked')) == true){
								$("#41").remove();
								$('#manufacturing').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="41"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Manufacturing">');
							} else{
								$('#manufacturing').val("false");
								$("#41").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "real-estate"){
							if(($("#real-estate").is(':checked')) == true){
								$("#42").remove();
								$('#real-estate').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="42"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Real Estate">');
							} else{
								$('#real-estate').val("false");
								$("#42").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "retail-wholesale"){
							if(($("#retail-wholesale").is(':checked')) == true){
								$("#43").remove();
								$('#retail-wholesale').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="43"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Retail& Wholesale">');
							} else{
								$('#retail-wholesale').val("false");
								$("#43").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "service"){
							if(($("#service").is(':checked')) == true){
								$("#44").remove();
								$('#service').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="44"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Service">');
							} else{
								$('#service').val("false");
								$("#44").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "telecommunications"){
							if(($("#telecommunications").is(':checked')) == true){
								$("#45").remove();
								$('#telecommunications').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="45"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Selecommunications">');
							} else{
								$('#telecommunications').val("false");
								$("#45").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "building-construction"){
							if(($("#building-construction").is(':checked')) == true){
								$("#46").remove();
								$('#building-construction').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="46"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Building & Construction">');
							} else{
								$('#building-construction').val("false");
								$("#46").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "hotel-restaurant"){
							if(($("#hotel-restaurant").is(':checked')) == true){
								$("#47").remove();
								$('#hotel-restaurant').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="47"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Hotel Restaurant">');
							} else{
								$('#hotel-restaurant').val("false");
								$("#47").remove();
							}
						}
						//
						else if((allels[i].getAttribute('id')) == "english"){
							if(($("#english").is(':checked')) == true){
								$("#48").remove();
								$('#english').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="48"'+' name="fields['+"'language-advertiser-target'"+']"'+' value="English">');
							} else{
								$('#english').val("false");
								$("#48").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "malay"){
							if(($("#malay").is(':checked')) == true){
								$("#49").remove();
								$('#malay').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="49"'+' name="fields['+"'language-advertiser-target'"+']"'+' value="Malay">');
							} else{
								$('#malay').val("false");
								$("#49").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "chinese"){
							if(($("#chinese").is(':checked')) == true){
								$("#50").remove();
								$('#chinese').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="50"'+' name="fields['+"'language-advertiser-target'"+']"'+' value="Chinese">');
							} else{
								$('#chinese').val("false");
								$("#50").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "tamil"){
							if(($("#tamil").is(':checked')) == true){
								$("#51").remove();
								$('#tamil').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="51"'+' name="fields['+"'language-advertiser-target'"+']"'+' value="Tamil">');
							} else{
								$('#tamil').val("false");
								$("#51").remove();
							}
						}
						//
						else if((allels[i].getAttribute('id')) == "age-18-29"){
							if(($("#age-18-29").is(':checked')) == true){
								$("#52").remove();
								$('#age-18-29').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="52"'+' name="fields['+"'age-advertiser-target'"+']"'+' value="18-29">');
							} else{
								$('#age-18-29').val("false");
								$("#52").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "age-30-49"){
							if(($("#age-30-49").is(':checked')) == true){
								$("#53").remove();
								$('#age-30-49').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="53"'+' name="fields['+"'age-advertiser-target'"+']"'+' value="30-49">');
							} else{
								$('#age-30-49').val("false");
								$("#53").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "age-50-64"){
							if(($("#age-50-64").is(':checked')) == true){
								$("#54").remove();
								$('#age-50-64').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="54"'+' name="fields['+"'age-advertiser-target'"+']"'+' value="50-64">');
							} else{
								$('#age-50-64').val("false");
								$("#54").remove();
							}
						}
						//
						else if((allels[i].getAttribute('id')) == "male"){
							if(($("#male").is(':checked')) == true){
								$("#55").remove();
								$('#male').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="55"'+' name="fields['+"'gender-advertiser-target'"+']"'+' value="Male">');
							} else{
								$('#male').val("false");
								$("#55").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "female"){
							if(($("#female").is(':checked')) == true){
								$("#56").remove();
								$('#female').val("true");
								$( "#step-6" ).append( '<input type="hidden" id="56"'+' name="fields['+"'gender-advertiser-target'"+']"'+' value="Female">');
							} else{
								$('#female').val("false");
								$("#56").remove();
							}
						}
						//
						else if((allels[i].getAttribute('id')) == "others-geographical-text"){
							$("#111").remove();
							if (allels[i].value == ""){
								validated = true;
								var othersGeographicaltext = '';
								$("#others-geographical-text").val(othersGeographicaltext);
								$("#111").remove();
							} else{
								var othersGeographicaltext = $("#others-geographical-text").val();
								$( "#step-6" ).append( '<input type="hidden" id="111"'+' name="fields['+"'geographical-area'"+']"'+' value="'+othersGeographicaltext+'">');
							}
						}
						else if((allels[i].getAttribute('id')) == "others-profession-text"){
							$("#222").remove();
							if (allels[i].value == ""){
								validated = true;
								var othersProfessiontext = '';
								$("#others-profession-text").val(othersProfessiontext);
								$("#222").remove();
							} else{
								var othersProfessiontext = $("#others-profession-text").val();
								$( "#step-6" ).append( '<input type="hidden" id="222"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="'+othersProfessiontext+'">');
							}
						}
						else if((allels[i].getAttribute('id')) == "others-languages-text"){
							$("#333").remove();
							if (allels[i].value == ""){
								validated = true;
								var othersLanguagestext = '';
								$("#others-languages-text").val(othersLanguagestext);
								$("#333").remove();
							} else{
								var othersLanguagestext = $("#others-languages-text").val();
								$( "#step-6" ).append( '<input type="hidden" id="333"'+' name="fields['+"'language-advertiser-target'"+']"'+' value="'+othersLanguagestext+'">');
							}
						}
						else if((allels[i].getAttribute('id')) == "others-age-text"){
							$("#444").remove();
							if (allels[i].value == ""){
								validated = true;
								var othersAgetext = '';
								$("#others-age-text").val(othersAgetext);
								$("#444").remove();
							} else{
								var age = $("#others-age-text").val();
								var othersAgetext = $("#others-age-text").val(),
								intRegex = /^[0-9-+]+$/;
								if(!intRegex.test(othersAgetext))
								{
									$("#others-age-text-error").text("Please specify a number in Others Age field!");
									allels[i].focus();
									validated = false;
									break; 
								}
								else{
									$("#others-age-text-error").text("");
									var othersAgetext = $('#others-age-text').val();
									$( "#step-6" ).append( '<input type="hidden" id="444"'+' name="fields['+"'age-advertiser-target'"+']"'+' value="'+othersAgetext+'">');
								}
							}
						}
						
						// STEP 7
						else if((allels[i].getAttribute('id')) == "increase-website-traffic"){
							if(($("#increase-website-traffic").is(':checked')) == true){
								$("#step71").remove();
								$('#increase-website-traffic').val("true");
								$( "#step-7" ).append( '<input type="hidden" id="step71"'+' name="fields['+"'advertising-objective'"+']"'+' value="increase-website-traffic">');
							} else{
								$('#increase-website-traffic').val("false");
								$("#step71").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "increase-brand-awareness"){
							if(($("#increase-brand-awareness").is(':checked')) == true){
								$("#step72").remove();
								$('#increase-brand-awareness').val("true");
								$( "#step-7" ).append( '<input type="hidden" id="step72"'+' name="fields['+"'advertising-objective'"+']"'+' value="increase-brand-awareness">');
							} else{
								$('#increase-brand-awareness').val("false");
								$("#step72").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "increase-online-enquiry-submission"){
							if(($("#increase-online-enquiry-submission").is(':checked')) == true){
								$("#step73").remove();
								$('#increase-online-enquiry-submission').val("true");
								$( "#step-7" ).append( '<input type="hidden" id="step73"'+' name="fields['+"'advertising-objective'"+']"'+' value="increase-online-enquiry-submission">');
							} else{
								$('#increase-online-enquiry-submission').val("false");
								$("#step73").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "increase-store-visits"){
							if(($("#increase-store-visits").is(':checked')) == true){
								$("#step74").remove();
								$('#increase-store-visits').val("true");
								$( "#step-7" ).append( '<input type="hidden" id="step74"'+' name="fields['+"'advertising-objective'"+']"'+' value="increase-store-visits">');
							} else{
								$('#increase-store-visits').val("false");
								$("#step74").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "increase-phone-calls"){
							if(($("#increase-phone-calls").is(':checked')) == true){
								$("#step75").remove();
								$('#increase-phone-calls').val("true");
								$( "#step-7" ).append( '<input type="hidden" id="step75"'+' name="fields['+"'advertising-objective'"+']"'+' value="increase-phone-calls">');
							} else{
								$('#increase-phone-calls').val("false");
								$("#step75").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "increase-online-purchase"){
							if(($("#increase-online-purchase").is(':checked')) == true){
								$("#step76").remove();
								$('#increase-online-purchase').val("true");
								$( "#step-7" ).append( '<input type="hidden" id="step76"'+' name="fields['+"'advertising-objective'"+']"'+' value="increase-online-purchase">');
							} else{
								$('#increase-online-purchase').val("false");
								$("#step76").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "retargeting-visitors"){
							if(($("#retargeting-visitors").is(':checked')) == true){
								$("#step77").remove();
								$('#retargeting-visitors').val("true");
								$( "#step-7" ).append( '<input type="hidden" id="step77"'+' name="fields['+"'advertising-objective'"+']"'+' value="retargeting-visitors">');
							} else{
								$('#retargeting-visitors').val("false");
								$("#step77").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "increase-geographical-coverage"){
							if(($("#increase-geographical-coverage").is(':checked')) == true){
								$("#step78").remove();
								$('#increase-geographical-coverage').val("true");
								$( "#step-7" ).append( '<input type="hidden" id="step78"'+' name="fields['+"'advertising-objective'"+']"'+' value="increase-geographical-coverage">');
							} else{
								$('#increase-geographical-coverage').val("false");
								$("#step78").remove();
							}		
						}
						
						// STEP 8 
						else if((allels[i].getAttribute('id')) == "step-8-panpages"){
							if(($("#step-8-panpages").is(':checked')) == true){
								$("#step81").remove();
								$('#step-8-panpages').val("true");
								$( "#step-8" ).append( '<input type="hidden" id="step81"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="panpages">');
							} else{
								$('#step-8-panpages').val("false");
								$("#step81").remove();
							}		
						}
						else if((allels[i].getAttribute('id')) == "step-8-google-adwords-search-mobile"){
							if(($("#step-8-google-adwords-search-mobile").is(':checked')) == true){
								$("#step82").remove();
								$('#step-8-google-adwords-search-mobile').val("true");
								$( "#step-8" ).append( '<input type="hidden" id="step82"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="google-adWords-search-mobile">');
							} else{
								$('#step-8-google-adwords-search-mobile').val("false");
								$("#step82").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "step-8-google-display-network"){
							if(($("#step-8-google-display-network").is(':checked')) == true){
								$("#step83").remove();
								$('#step-8-google-display-network').val("true");
								$( "#step-8" ).append( '<input type="hidden" id="step83"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="google-display-network">');
							} else{
								$('#step-8-google-display-network').val("false");
								$("#step83").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "step-8-yahoo-search"){
							if(($("#step-8-yahoo-search").is(':checked')) == true){
								$("#step84").remove();
								$('#step-8-yahoo-search').val("true");
								$( "#step-8" ).append( '<input type="hidden" id="step84"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="yahoo-search">');
							} else{
								$('#step-8-yahoo-search').val("false");
								$("#step84").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "step-8-yahoo-display"){
							if(($("#step-8-yahoo-display").is(':checked')) == true){
								$("#step85").remove();
								$('#step-8-yahoo-display').val("true");
								$( "#step-8" ).append( '<input type="hidden" id="step85"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="yahoo-display">');
							} else{
								$('#step-8-yahoo-display').val("false");
								$("#step85").remove();
							}	
						}
						else if((allels[i].getAttribute('id')) == "step-8-youtube-ads"){
							if(($("#step-8-youtube-ads").is(':checked')) == true){
								$("#step86").remove();
								$('#step-8-youtube-ads').val("true");
								$( "#step-8" ).append( '<input type="hidden" id="step86"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="youtube-ads">');
							} else{
								$('#step-8-youtube-ads').val("false");
								$("#step86").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "step-8-facebook-ads"){
							if(($("#step-8-facebook-ads").is(':checked')) == true){
								$("#step87").remove();
								$('#step-8-facebook-ads').val("true");
								$( "#step-8" ).append( '<input type="hidden" id="step87"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="facebook-ads">');
							} else{
								$('#step-8-facebook-ads').val("false");
								$("#step87").remove();
							}
						}
						else if((allels[i].getAttribute('id')) == "step-8-pan-360"){
							if(($("#step-8-pan-360").is(':checked')) == true){
								$("#step88").remove();
								$('#step-8-pan-360').val("true");
								$( "#step-8" ).append( '<input type="hidden" id="step88"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="pan-360">');
							} else{
								$('#step-8-pan-360').val("false");
								$("#step88").remove();
							}  
						}
						else if((allels[i].getAttribute('id')) == "step-8-alibaba-com"){
							if(($("#step-8-alibaba-com").is(':checked')) == true){
								$("#step89").remove();
								$('#step-8-alibaba-com').val("true");
								$( "#step-8" ).append( '<input type="hidden" id="step89"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="alibaba-com">');
							} else{
								$('#step-8-alibaba-com').val("false");
								$("#step89").remove();
							}	 
						}
						else if((allels[i].getAttribute('id')) == "step-8-super-pages"){
							if(($("#step-8-super-pages").is(':checked')) == true){
								$("#step810").remove();
								$('#step-8-super-pages').val("true");
								$( "#step-8" ).append( '<input type="hidden" id="step810"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="super-pages">');
							} else{
								$('#step-8-super-pages').val("false");
								$("#step810").remove();
							}    
						}
						
						// STEP 9
						else if((allels[i].getAttribute('id')) == "file-upload"){
							if ($('#uploaded-file-name').val().length == 0) {
								alert("Please, input a keywords file!");
								allels[i].focus();
								validated = false;
								break; 
							}
						}
						/* STEP 10 */
						else if((allels[i].getAttribute('id')) == "option-a"){
							if(($("#option-a").is(':checked')) == true){
								$('#option-a').val("true");							
							} else{
								$('#option-a').val("false");
							} 
						}
						else if((allels[i].getAttribute('id')) == "option-b"){
							if(($("#option-b").is(':checked')) == true){
								$('#option-b').val("true");
							} else{
								$('#option-b').val("false");
							}  
						}
						
					} //end outer if
				}
				
			}
			
			// Hidden or visible preview or submit button
			$("#previewBtn").css("display", rawi == "next" && myform.currentsection + 1 == 9? "inline" : "none");
			$("#submitBtn").css("display", rawi == "next" && myform.currentsection + 1 == 9? "inline" : "none");
			$(".formpaginate .status").css("display", rawi == "next" && myform.currentsection + 1 == 9? "none" : "inline");
			$(".formpaginate .next").css("display", rawi == "next" && myform.currentsection + 1 == 9? "none" : "inline");
			
			return validated;
		}
	});
	
	/* STEP 4 */
	$("#add-on-relevant-product-pictures").prop( "disabled", true );
	$("#add-on-product-description").prop( "disabled", true );
	$("#include-product-price").prop( "disabled", true );
	$("#include-product-specification").prop( "disabled", true );
	$("#include-company-details").prop( "disabled", true );
	$("#highlight-unique-selling-point").prop( "disabled", true );
	$("#include-certification-for-better-credential").prop( "disabled", true );
	$("#enhance-website-picture-quality").prop( "disabled", true );
	
	
	if(($("#improve-website-content").is(':checked')) == true){
		$("#add-on-relevant-product-pictures").prop( "disabled", false );
		$("#add-on-product-description").prop( "disabled", false );
		$("#include-product-price").prop( "disabled", false );
		$("#include-product-specification").prop( "disabled", false );
		$("#include-company-details").prop( "disabled", false );
		$("#highlight-unique-selling-point").prop( "disabled", false );
		$("#include-certification-for-better-credential").prop( "disabled", false );
		$("#enhance-website-picture-quality").prop( "disabled", false );
	} else {
		$("#add-on-relevant-product-pictures").prop( "disabled", true );
		$("#add-on-product-description").prop( "disabled", true );
		$("#include-product-price").prop( "disabled", true );
		$("#include-product-specification").prop( "disabled", true );
		$("#include-company-details").prop( "disabled", true );
		$("#highlight-unique-selling-point").prop( "disabled", true );
		$("#include-certification-for-better-credential").prop( "disabled", true );
		$("#enhance-website-picture-quality").prop( "disabled", true );
	}
	
	$("#improve-website-content").click(function() {
		$('#improve-website-content').val(this.checked);
		if(($("#improve-website-content").is(':checked')) == true){
			$("#add-on-relevant-product-pictures").click(function() {
				$('#add-on-relevant-product-pictures').val(this.checked);
			});
			$("#add-on-relevant-product-pictures").attr("disabled", false);
			
			//
			$("#add-on-product-description").click(function() {
				$('#add-on-product-description').val(this.checked);
			});
			$("#add-on-product-description").attr("disabled", false);
			
			//
			$("#include-product-price").click(function() {
				$('#include-product-price').val(this.checked);
			});
			$("#include-product-price").attr("disabled", false);
			
			//
			$("#include-product-specification").click(function() {
				$('#include-product-specification').val(this.checked);
			});
			$("#include-product-specification").attr("disabled", false);

			//
			$("#include-company-details").click(function() {
				$('#include-company-details').val(this.checked);
			});
			$("#include-company-details").attr("disabled", false);

			//
			$("#highlight-unique-selling-point").click(function() {
				$('#highlight-unique-selling-point').val(this.checked);
			});
			$("#highlight-unique-selling-point").attr("disabled", false);
			
			//
			$("#include-certification-for-better-credential").click(function() {
				$('#include-certification-for-better-credential').val(this.checked);
			});
			$("#include-certification-for-better-credential").attr("disabled", false);

			//
			$("#enhance-website-picture-quality").click(function() {
				$('#enhance-website-picture-quality').val(this.checked);
			});
			$("#enhance-website-picture-quality").attr("disabled", false);
			
		} else{
			$('#add-on-relevant-product-pictures').each(function() 
			{ 
				$(this).prop('checked', false); 
				$('#add-on-relevant-product-pictures').val("false");
				$("#add-on-relevant-product-pictures").attr("disabled", true);
			});
			
			//
			$('#add-on-product-description').each(function() 
			{ 
				$(this).prop('checked', false); 
				$('#add-on-product-description').val("false");
				$("#add-on-product-description").attr("disabled", true);
			});
			
			//
			$('#include-product-price').each(function() 
			{ 
				$(this).prop('checked', false); 
				$('#include-product-price').val("false");
				$("#include-product-price").attr("disabled", true);
			});
			
			//
			$('#include-product-specification').each(function() 
			{ 
				$(this).prop('checked', false); 
				$('#include-product-specification').val("false");
				$("#include-product-specification").attr("disabled", true);
			});

			//
			$('#include-company-details').each(function() 
			{ 
				$(this).prop('checked', false); 
				$('#include-company-details').val("false");
				$("#include-company-details").attr("disabled", true);
			});

			//
			$('#highlight-unique-selling-point').each(function() 
			{ 
				$(this).prop('checked', false); 
				$('#highlight-unique-selling-point').val("false");
				$("#highlight-unique-selling-point").attr("disabled", true);
			});

			//
			$('#include-certification-for-better-credential').each(function() 
			{ 
				$(this).prop('checked', false); 
				$('#include-certification-for-better-credential').val("false");
				$("#include-certification-for-better-credential").attr("disabled", true);
			});

			//
			$('#enhance-website-picture-quality').each(function() 
			{ 
				$(this).prop('checked', false); 
				$('#enhance-website-picture-quality').val("false");
				$("#enhance-website-picture-quality").attr("disabled", true);
			});
						
		}   
	});
	
	$("#frequently-update-your-website").prop( "disabled", true );
	$("#timely-response-to-enquiry").prop( "disabled", true );
	
	if(($("#improve-website-maintenance").is(':checked')) == true){
		$("#frequently-update-your-website").prop( "disabled", false );
		$("#timely-response-to-enquiry").prop( "disabled", false );
	} else {
		$("#frequently-update-your-website").prop( "disabled", true );
		$("#timely-response-to-enquiry").prop( "disabled", true );
	}
	
	$("#improve-website-maintenance").click(function() {
		$('#improve-website-maintenance').val(this.checked);
		if(($("#improve-website-maintenance").is(':checked')) == true){
			$("#frequently-update-your-website").click(function() {
				$('#frequently-update-your-website').val(this.checked);
			});
			$("#frequently-update-your-website").attr("disabled", false);
			
			//
			$("#timely-response-to-enquiry").click(function() {
				$('#timely-response-to-enquiry').val(this.checked);
			});
			$("#timely-response-to-enquiry").attr("disabled", false);
			
		} else{
			$('#frequently-update-your-website').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#frequently-update-your-website').val("false");
			    $("#frequently-update-your-website").attr("disabled", true);
			});
			
			//
			$('#timely-response-to-enquiry').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#timely-response-to-enquiry').val("false");
			    $("#timely-response-to-enquiry").attr("disabled", true);
			});
		}
	});
	
	$("#tracking-on-calls-wall-in").prop( "disabled", true );
	
	if(($("#monitor-effectiveness").is(':checked')) == true){
		$("#tracking-on-calls-wall-in").prop( "disabled", false );
	} else {
		$("#tracking-on-calls-wall-in").prop( "disabled", true );
	}
	
	$("#monitor-effectiveness").click(function() {
		$('#monitor-effectiveness').val(this.checked);
		if(($("#monitor-effectiveness").is(':checked')) == true){
			$("#tracking-on-calls-wall-in").click(function() {
				$('#tracking-on-calls-wall-in').val(this.checked);
			});
			$("#tracking-on-calls-wall-in").attr("disabled", false);
			
		} else{
			$('#tracking-on-calls-wall-in').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#tracking-on-calls-wall-in').val("false");
			    $("#tracking-on-calls-wall-in").attr("disabled", true);
			});
			
		}
	});
	
	$("#explore-display-network").prop( "disabled", true );
	
	if(($("#improve-brand-awareness").is(':checked')) == true){
		$("#explore-display-network").prop( "disabled", false );
	} else {
		$("#explore-display-network").prop( "disabled", true );
	}
	
	$("#improve-brand-awareness").click(function() {
		$('#improve-brand-awareness').val(this.checked);
		if(($("#improve-brand-awareness").is(':checked')) == true){
			$("#explore-display-network").click(function() {
				$('#explore-display-network').val(this.checked);
			});
			$("#explore-display-network").attr("disabled", false);
			
		} else{
			$('#explore-display-network').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#explore-display-network').val("false");
			    $("#explore-display-network").attr("disabled", true);
			});
			
		}
	});
	
	$("#extend-your-marketing-plan-for-longer-visibility").prop( "disabled", true );
	
	if(($("#enhance-visibility").is(':checked')) == true){
		$("#extend-your-marketing-plan-for-longer-visibility").prop( "disabled", false );
	} else {
		$("#extend-your-marketing-plan-for-longer-visibility").prop( "disabled", true );
	}
	
	$("#enhance-visibility").click(function() {
		$('#enhance-visibility').val(this.checked);
		if(($("#enhance-visibility").is(':checked')) == true){
			$("#extend-your-marketing-plan-for-longer-visibility").click(function() {
				$('#extend-your-marketing-plan-for-longer-visibility').val(this.checked);
			});
			$("#extend-your-marketing-plan-for-longer-visibility").attr("disabled", false);
			
		} else{
			$('#extend-your-marketing-plan-for-longer-visibility').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#extend-your-marketing-plan-for-longer-visibility').val("false");
			    $("#extend-your-marketing-plan-for-longer-visibility").attr("disabled", true);
			});
			
		}
	});
	
	/* STEP 6 */
	$("#all-malaysia").prop( "disabled", true );
	$("#kuala-lumpur").prop( "disabled", true );
	$("#selangor").prop( "disabled", true );
	$("#kedah").prop( "disabled", true );
	$("#penang").prop( "disabled", true );
	$("#ipoh").prop( "disabled", true );
	$("#perlis").prop( "disabled", true );
	$("#pahang").prop( "disabled", true );
	$("#kelantan").prop( "disabled", true );
	$("#terengganu").prop( "disabled", true );
	$("#negeri-sembilan").prop( "disabled", true );
	$("#melaka").prop( "disabled", true );
	$("#johor").prop( "disabled", true );
	$("#sabah").prop( "disabled", true );
	$("#sarawak").prop( "disabled", true );
	
	if(($("#malaysia").is(':checked')) == true){
		$("#all-malaysia").prop( "disabled", false );
		$("#kuala-lumpur").prop( "disabled", false );
		$("#selangor").prop( "disabled", false );
		$("#kedah").prop( "disabled", false );
		$("#penang").prop( "disabled", false );
		$("#ipoh").prop( "disabled", false );
		$("#perlis").prop( "disabled", false );
		$("#pahang").prop( "disabled", false );
		$("#kelantan").prop( "disabled", false );
		$("#terengganu").prop( "disabled", false );
		$("#negeri-sembilan").prop( "disabled", false );
		$("#melaka").prop( "disabled", false );
		$("#johor").prop( "disabled", false );
		$("#sabah").prop( "disabled", false );
		$("#sarawak").prop( "disabled", false );
	} else {
		$("#all-malaysia").prop( "disabled", true );
		$("#kuala-lumpur").prop( "disabled", true );
		$("#selangor").prop( "disabled", true );
		$("#kedah").prop( "disabled", true );
		$("#penang").prop( "disabled", true );
		$("#ipoh").prop( "disabled", true );
		$("#perlis").prop( "disabled", true );
		$("#pahang").prop( "disabled", true );
		$("#kelantan").prop( "disabled", true );
		$("#terengganu").prop( "disabled", true );
		$("#negeri-sembilan").prop( "disabled", true );
		$("#melaka").prop( "disabled", true );
		$("#johor").prop( "disabled", true );
		$("#sabah").prop( "disabled", true );
		$("#sarawak").prop( "disabled", true );

	}
	
	$("#all-malaysia").click(function() {
		$('#all-malaysia').val(this.checked);
		if(this.checked == true){
			$('#all-malaysia').val("true");
			$('#kuala-lumpur').val("true");
			$('#kuala-lumpur').prop('checked', true); 
			
			$('#selangor').val("true");
			$('#selangor').prop('checked', true); 
			
			$('#kedah').val("true");
			$('#kedah').prop('checked', true); 
			
			$('#penang').val("true");
			$('#penang').prop('checked', true); 
			
			$('#ipoh').val("true");
			$('#ipoh').prop('checked', true); 
			
			$('#perlis').val("true");
			$('#perlis').prop('checked', true); 
			
			$('#pahang').val("true");
			$('#pahang').prop('checked', true); 
			
			$('#kelantan').val("true");
			$('#kelantan').prop('checked', true); 
			
			$('#terengganu').val("true");
			$('#terengganu').prop('checked', true); 
			
			$('#negeri-sembilan').val("true");
			$('#negeri-sembilan').prop('checked', true); 
			
			$('#melaka').val("true");
			$('#melaka').prop('checked', true); 
			
			$('#johor').val("true");
			$('#johor').prop('checked', true); 
			
			$('#sabah').val("true");
			$('#sabah').prop('checked', true); 
			
			$('#sarawak').val("true");
			$('#sarawak').prop('checked', true); 
			
			$( "#step-6" ).append( '<input type="hidden" id="2"'+' name="fields['+"'geographical-area'"+']"'+' value="Kuala Lumpur">');
			$( "#step-6" ).append( '<input type="hidden" id="3"'+' name="fields['+"'geographical-area'"+']"'+' value="Selangor">');
			$( "#step-6" ).append( '<input type="hidden" id="4"'+' name="fields['+"'geographical-area'"+']"'+' value="Kedah">');
			$( "#step-6" ).append( '<input type="hidden" id="5"'+' name="fields['+"'geographical-area'"+']"'+' value="Penang">');
			$( "#step-6" ).append( '<input type="hidden" id="6"'+' name="fields['+"'geographical-area'"+']"'+' value="Ipoh">');
			$( "#step-6" ).append( '<input type="hidden" id="7"'+' name="fields['+"'geographical-area'"+']"'+' value="Perlis">');
			$( "#step-6" ).append( '<input type="hidden" id="8"'+' name="fields['+"'geographical-area'"+']"'+' value="Pahang">');
			$( "#step-6" ).append( '<input type="hidden" id="9"'+' name="fields['+"'geographical-area'"+']"'+' value="Pelantan">');
			$( "#step-6" ).append( '<input type="hidden" id="10"'+' name="fields['+"'geographical-area'"+']"'+' value="Terengganu">');
			$( "#step-6" ).append( '<input type="hidden" id="11"'+' name="fields['+"'geographical-area'"+']"'+' value="Negeri Sembilan">');
			$( "#step-6" ).append( '<input type="hidden" id="12"'+' name="fields['+"'geographical-area'"+']"'+' value="Melaka">');
			$( "#step-6" ).append( '<input type="hidden" id="13"'+' name="fields['+"'geographical-area'"+']"'+' value="Johor">');
			$( "#step-6" ).append( '<input type="hidden" id="14"'+' name="fields['+"'geographical-area'"+']"'+' value="Sabah">');
			$( "#step-6" ).append( '<input type="hidden" id="15"'+' name="fields['+"'geographical-area'"+']"'+' value="Sarawak">');
		} else{
			$('#all-malaysia').val("false");
			$('#kuala-lumpur').val("false");
			$('#kuala-lumpur').prop('checked', false); 
			
			$('#selangor').val("false");
			$('#selangor').prop('checked', false); 
			
			$('#kedah').val("false");
			$('#kedah').prop('checked', false); 
			
			$('#penang').val("false");
			$('#penang').prop('checked', false); 
			
			$('#ipoh').val("false");
			$('#ipoh').prop('checked', false); 
			
			$('#perlis').val("false");
			$('#perlis').prop('checked', false); 
			
			$('#pahang').val("false");
			$('#pahang').prop('checked', false); 
			
			$('#kelantan').val("false");
			$('#kelantan').prop('checked', false); 
			
			$('#terengganu').val("false");
			$('#terengganu').prop('checked', false); 
			
			$('#negeri-sembilan').val("false");
			$('#negeri-sembilan').prop('checked', false); 
			
			$('#melaka').val("false");
			$('#melaka').prop('checked', false); 
			
			$('#johor').val("false");
			$('#johor').prop('checked', false); 
			
			$('#sabah').val("false");
			$('#sabah').prop('checked', false); 
			
			$('#sarawak').val("false");
			$('#sarawak').prop('checked', false); 
			
			$("#2").remove();
			$("#3").remove();
			$("#4").remove();
			$("#5").remove();
			$("#6").remove();
			$("#7").remove();
			$("#8").remove();
			$("#9").remove();
			$("#10").remove();
			$("#11").remove();
			$("#12").remove();
			$("#13").remove();
			$("#14").remove();			
			$("#15").remove();
		}	
	});
	
	$("#kuala-lumpur").click(function() {
		$('#kuala-lumpur').val(this.checked);
		if(this.checked == true){
			$('#kuala-lumpur').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="2"'+' name="fields['+"'geographical-area'"+']"'+' value="Kuala Lumpur">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#kuala-lumpur').val("false");
			$("#2").remove();
		}	
	});
	
	$("#selangor").click(function() {
		$('#selangor').val(this.checked);
		if(this.checked == true){
			$('#selangor').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="3"'+' name="fields['+"'geographical-area'"+']"'+' value="Selangor">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#selangor').val("false");
			$("#3").remove();
		}
	});
	
	$("#kedah").click(function() {
		$('#kedah').val(this.checked);
		if(this.checked == true){
			$('#kedah').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="4"'+' name="fields['+"'geographical-area'"+']"'+' value="Kedah">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#kedah').val("false");
			$("#4").remove();
		}
	});
	
	$("#penang").click(function() {
		$('#penang').val(this.checked);
		if(this.checked == true){
			$('#penang').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="5"'+' name="fields['+"'geographical-area'"+']"'+' value="Penang">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#penang').val("false");
			$("#5").remove();
		}
	});
	
	$("#ipoh").click(function() {
		$('#ipoh').val(this.checked);
		if(this.checked == true){
			$('#ipoh').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="6"'+' name="fields['+"'geographical-area'"+']"'+' value="Ipoh">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#ipoh').val("false");
			$("#6").remove();
		}
	});
	
	$("#perlis").click(function() {
		$('#perlis').val(this.checked);
		if(this.checked == true){
			$('#perlis').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="7"'+' name="fields['+"'geographical-area'"+']"'+' value="Perlis">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#perlis').val("false");
			$("#7").remove();
		}
	});
	
	$("#pahang").click(function() {
		$('#pahang').val(this.checked);
		if(this.checked == true){
			$('#pahang').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="8"'+' name="fields['+"'geographical-area'"+']"'+' value="Pahang">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#pahang').val("false");
			$("#8").remove();
		}
	});
	
	$("#kelantan").click(function() {
		$('#kelantan').val(this.checked);
		if(this.checked == true){
			$('#kelantan').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="9"'+' name="fields['+"'geographical-area'"+']"'+' value="Pelantan">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#kelantan').val("false");
			$("#9").remove();
		}
	});
	
	$("#terengganu").click(function() {
		$('#terengganu').val(this.checked);
		if(this.checked == true){
			$('#terengganu').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="10"'+' name="fields['+"'geographical-area'"+']"'+' value="Terengganu">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#terengganu').val("false");
			$("#10").remove();
		}
	});
	
	$("#negeri-sembilan").click(function() {
		$('#negeri-sembilan').val(this.checked);
		if(this.checked == true){
			$('#negeri-sembilan').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="11"'+' name="fields['+"'geographical-area'"+']"'+' value="Negeri Sembilan">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#negeri-sembilan').val("false");
			$("#11").remove();
		}
	});
	
	$("#melaka").click(function() {
		$('#melaka').val(this.checked);
		if(this.checked == true){
			$('#melaka').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="12"'+' name="fields['+"'geographical-area'"+']"'+' value="Melaka">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#melaka').val("false");
			$("#12").remove();
		}
	});
	
	$("#johor").click(function() {
		$('#johor').val(this.checked);
		if(this.checked == true){
			$('#johor').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="13"'+' name="fields['+"'geographical-area'"+']"'+' value="Johor">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#johor').val("false");
			$("#13").remove();
		}
	});
	
	$("#sabah").click(function() {
		$('#sabah').val(this.checked);
		if(this.checked == true){
			$('#sabah').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="14"'+' name="fields['+"'geographical-area'"+']"'+' value="Sabah">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#sabah').val("false");
			$("#14").remove();
		}
	});
	
	$("#sarawak").click(function() {
		$('#sarawak').val(this.checked);
		if(this.checked == true){
			$('#sarawak').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="15"'+' name="fields['+"'geographical-area'"+']"'+' value="Sarawak">');
			
			if( (($("#kuala-lumpur").is(':checked')) == true) && (($('#selangor').is(':checked')) == true) && (($('#kedah').is(':checked')) == true) 
				&& (($('#penang').is(':checked')) == true) && (($('#ipoh').is(':checked')) == true) && (($('#perlis').is(':checked')) == true)
				&& (($('#pahang').is(':checked')) == true) && (($('#kelantan').is(':checked')) == true) && (($('#terengganu').is(':checked')) == true)
				&& (($('#negeri-sembilan').is(':checked')) == true) && (($('#melaka').is(':checked')) == true) && (($('#johor').is(':checked')) == true)
				&& (($('#sabah').is(':checked')) == true) && (($('#sarawak').is(':checked')) == true)){
				$('#all-malaysia').val("true");
				$('#all-malaysia').prop('checked', true); 
			}
	
		} else{
			$('#all-malaysia').val("false");			
			$('#all-malaysia').prop('checked', false); 
			
			$('#sarawak').val("false");
			$("#15").remove();
		}
	});
	
	$("#malaysia").click(function() {
		$('#malaysia').val(this.checked);
		if(this.checked == true){
			$('#malaysia').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="1"'+' name="fields['+"'geographical-area'"+']"'+' value="Malaysia">');
			
			$("#all-malaysia").attr("disabled", false);
			
			$("#kuala-lumpur").attr("disabled", false);
			
			$("#selangor").attr("disabled", false);
			
			$("#kedah").attr("disabled", false);
			
			$("#penang").attr("disabled", false);
			
			$("#ipoh").attr("disabled", false);
			
			$("#perlis").attr("disabled", false);
			
			$("#pahang").attr("disabled", false);
			
			$("#kelantan").attr("disabled", false);
			
			$("#terengganu").attr("disabled", false);
			
			$("#negeri-sembilan").attr("disabled", false);
			
			$("#melaka").attr("disabled", false);
			
			$("#johor").attr("disabled", false);
			
			$("#sabah").attr("disabled", false);
			
			$("#sarawak").attr("disabled", false);
		} else{
			$('#malaysia').val("false");
			$("#1").remove();
			$("#2").remove();
			$("#3").remove();
			$("#4").remove();
			$("#5").remove();
			$("#6").remove();
			$("#7").remove();
			$("#8").remove();
			$("#9").remove();
			$("#10").remove();
			$("#11").remove();
			$("#12").remove();
			$("#13").remove();
			$("#14").remove();
			$("#15").remove();
			
			$('#all-malaysia').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#all-malaysia').val("false");
			    $("#all-malaysia").attr("disabled", true);
			});
			
			$('#kuala-lumpur').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#kuala-lumpur').val("false");
			    $("#kuala-lumpur").attr("disabled", true);
			});
			
			
			$('#selangor').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#selangor').val("false");
			    $("#selangor").attr("disabled", true);
			});
			
			
			$('#kedah').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#kedah').val("false");
			    $("#kedah").attr("disabled", true);
			});
			
			
			$('#penang').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#penang').val("false");
			    $("#penang").attr("disabled", true);
			});
			
			
			$('#ipoh').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#ipoh').val("false");
			    $("#ipoh").attr("disabled", true);
			});
			
			
			$('#perlis').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#perlis').val("false");
			    $("#perlis").attr("disabled", true);
			});
			
			
			$('#pahang').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#pahang').val("false");
			    $("#pahang").attr("disabled", true);
			});
			
			
			$('#kelantan').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#kelantan').val("false");
			    $("#kelantan").attr("disabled", true);
			});
			
			
			$('#terengganu').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#terengganu').val("false");
			    $("#terengganu").attr("disabled", true);
			});
			
			
			$('#negeri-sembilan').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#negeri-sembilan').val("false");
			    $("#negeri-sembilan").attr("disabled", true);
			});
			
			
			$('#melaka').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#melaka').val("false");
			    $("#melaka").attr("disabled", true);
			});
			
			
			$('#johor').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#johor').val("false");
			    $("#johor").attr("disabled", true);
			});
			
			
			$('#sabah').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#sabah').val("false");
			    $("#sabah").attr("disabled", true);
			});
			
			
			$('#sarawak').each(function() 
			{ 
			    $(this).prop('checked', false); 
			    $('#sarawak').val("false");
			    $("#sarawak").attr("disabled", true);
			});
		}
	});
	$("#thailand").click(function(){
		$('#thailand').val(this.checked);
		if(this.checked == true){
			$('#thailand').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="16"'+' name="fields['+"'geographical-area'"+']"'+' value="Thailand">');
		} else{
			$('#thailand').val("false");
			$("#16").remove();
		}	
	     
	});
	$("#singapore").click(function(){
		$('#singapore').val(this.checked);
		if(this.checked == true){
			$('#singapore').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="17"'+' name="fields['+"'geographical-area'"+']"'+' value="Singapore">');
		} else{
			$('#singapore').val("false");
			$("#17").remove();
		}	
	     
	});
	$("#indonesia").click(function(){
		$('#indonesia').val(this.checked);
		if(this.checked == true){
			$('#indonesia').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="18"'+' name="fields['+"'geographical-area'"+']"'+' value="Indonesia">');
		} else{
			$('#indonesia').val("false");
			$("#18").remove();
		}
	     
	});
	
	
	$("#accounting").click(function(){
		$('#accounting').val(this.checked);
		if(this.checked == true){
			$('#accounting').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="19"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Accounting">');
		} else{
			$('#accounting').val("false");
			$("#19").remove();
		}
	     
	});
	$("#agriculture").click(function(){
		$('#agriculture').val(this.checked);
		if(this.checked == true){
			$('#agriculture').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="20"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Agriculture">');
		} else{
			$('#agriculture').val("false");
			$("#20").remove();
		}
	     
	});
	$("#advertising").click(function(){
		$('#advertising').val(this.checked);
		if(this.checked == true){
			$('#advertising').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="21"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Advertising">');
		} else{
			$('#advertising').val("false");
			$("#21").remove();
		}
	     
	});
	$("#apparel-accessories").click(function(){
		$('#apparel-accessories').val(this.checked);
		if(this.checked == true){
			$('#apparel-accessories').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="22"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Apparel & Accessories">');
		} else{
			$('#apparel-accessories').val("false");
			$("#22").remove();
		}
	     
	});
	$("#automotive").click(function(){
		$('#automotive').val(this.checked);
		if(this.checked == true){
			$('#automotive').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="23"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Automotive">');
		} else{
			$('#automotive').val("false");
			$("#23").remove();
		}
	     
	});
	$("#banking").click(function(){
		$('#banking').val(this.checked);
		if(this.checked == true){
			$('#banking').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="24"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Banking">');
		} else{
			$('#banking').val("false");
			$("#24").remove();
		}
	     
	});
	$("#broadcasting").click(function(){
		$('#broadcasting').val(this.checked);
		if(this.checked == true){
			$('#broadcasting').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="25"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Broadcasting">');
		} else{
			$('#broadcasting').val("false");
			$("#25").remove();
		}
	     
	});
	$("#brokerage").click(function(){
		$('#brokerage').val(this.checked);
		if(this.checked == true){
			$('#brokerage').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="26"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Brokerage">');
		} else{
			$('#brokerage').val("false");
			$("#26").remove();
		}
	     
	});
	$("#biotecnology").click(function(){
		$('#biotecnology').val(this.checked);
		if(this.checked == true){
			$('#biotecnology').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="27"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Biotecnology">');
		} else{
			$('#biotecnology').val("false");
			$("#27").remove();
		}
	     
	});
	$("#cargo-handling").click(function(){
		$('#cargo-handling').val(this.checked);
		if(this.checked == true){
			$('#cargo-handling').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="28"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Cargo Handling">');
		} else{
			$('#cargo-handling').val("false");
			$("#28").remove();
		}
	     
	});
	$("#chemical").click(function(){
		$('#chemical').val(this.checked);
		if(this.checked == true){
			$('#chemical').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="29"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Chemical">');
		} else{
			$('#chemical').val("false");
			$("#29").remove();
		}
	     
	});
	$("#computer").click(function(){
		$('#computer').val(this.checked);
		if(this.checked == true){
			$('#computer').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="30"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Computer">');
		} else{
			$('#computer').val("false");
			$("#30").remove();
		}
	     
	});
	$("#consulting").click(function(){
		$('#consulting').val(this.checked);
		if(this.checked == true){
			$('#consulting').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="31"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Consulting">');
		} else{
			$('#consulting').val("false");
			$("#31").remove();
		}
	     
	});
	$("#consumer-products").click(function(){
		$('#consumer-products').val(this.checked);
		if(this.checked == true){
			$('#consumer-products').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="32"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Consumer Products">');
		} else{
			$('#consumer-products').val("false");
			$("#32").remove();
		}
	     
	});
	$("#cosmetics").click(function(){
		$('#cosmetics').val(this.checked);
		if(this.checked == true){
			$('#cosmetics').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="33"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Cosmetics">');
		} else{
			$('#cosmetics').val("false");
			$("#33").remove();
		}
	     
	});
	$("#department-stores").click(function(){
		$('#department-stores').val(this.checked);
		if(this.checked == true){
			$('#department-stores').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="34"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Department Stores">');
		} else{
			$('#department-stores').val("false");
			$("#34").remove();
		}
	     
	});
	$("#education").click(function(){
		$('#education').val(this.checked);
		if(this.checked == true){
			$('#education').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="35"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Education">');
		} else{
			$('#education').val("false");
			$("#35").remove();
		}
	     
	});
	$("#electronics").click(function(){
		$('#electronics').val(this.checked);
		if(this.checked == true){
			$('#electronics').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="36"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Electronics">');
		} else{
			$('#electronics').val("false");
			$("#36").remove();
		}
	     
	});
	$("#entertainment-leisure").click(function(){
		$('#entertainment-leisure').val(this.checked);
		if(this.checked == true){
			$('#entertainment-leisure').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="37"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Entertainment & Leisure">');
		} else{
			$('#entertainment-leisure').val("false");
			$("#37").remove();
		}
	     
	});
	$("#financial").click(function(){
		$('#financial').val(this.checked);
		if(this.checked == true){
			$('#financial').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="38"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Financial">');
		} else{
			$('#financial').val("false");
			$("#38").remove();
		}
	     
	});
	$("#food-beverage-tobacco").click(function(){
		$('#food-beverage-tobacco').val(this.checked);
		if(this.checked == true){
			$('#food-beverage-tobacco').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="39"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Food Beverage & Tobacco">');
		} else{
			$('#food-beverage-tobacco').val("false");
			$("#39").remove();
		}
	     
	});
	$("#healthcare").click(function(){
		$('#healthcare').val(this.checked);
		if(this.checked == true){
			$('#healthcare').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="40"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Healthcare">');
		} else{
			$('#healthcare').val("false");
			$("#40").remove();
		}
	     
	});
	$("#manufacturing").click(function(){
		$('#manufacturing').val(this.checked);
		if(this.checked == true){
			$('#manufacturing').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="41"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Manufacturing">');
		} else{
			$('#manufacturing').val("false");
			$("#41").remove();
		}
	     
	});
	$("#real-estate").click(function(){
		$('#real-estate').val(this.checked);
		if(this.checked == true){
			$('#real-estate').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="42"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Real Estate">');
		} else{
			$('#real-estate').val("false");
			$("#42").remove();
		}
	     
	});
	$("#retail-wholesale").click(function(){
		$('#retail-wholesale').val(this.checked);
		if(this.checked == true){
			$('#retail-wholesale').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="43"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Retail& Wholesale">');
		} else{
			$('#retail-wholesale').val("false");
			$("#43").remove();
		}
	     
	});
	$("#service").click(function(){
		$('#service').val(this.checked);
		if(this.checked == true){
			$('#service').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="44"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Service">');
		} else{
			$('#service').val("false");
			$("#44").remove();
		}
	     
	});
	$("#telecommunications").click(function(){
		$('#telecommunications').val(this.checked);
		if(this.checked == true){
			$('#telecommunications').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="45"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Selecommunications">');
		} else{
			$('#telecommunications').val("false");
			$("#45").remove();
		}
	     
	});
	$("#building-construction").click(function(){
		$('#building-construction').val(this.checked);
		if(this.checked == true){
			$('#building-construction').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="46"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Building & Construction">');
		} else{
			$('#building-construction').val("false");
			$("#46").remove();
		}
	     
	});
	$("#hotel-restaurant").click(function(){
		$('#hotel-restaurant').val(this.checked);
		if(this.checked == true){
			$('#hotel-restaurant').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="47"'+' name="fields['+"'profession-advertiser-target'"+']"'+' value="Hotel Restaurant">');
		} else{
			$('#hotel-restaurant').val("false");
			$("#47").remove();
		}
	     
	});
	
	
	$("#english").click(function(){
		$('#english').val(this.checked);
		if(this.checked == true){
			$('#english').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="48"'+' name="fields['+"'language-advertiser-target'"+']"'+' value="English">');
		} else{
			$('#english').val("false");
			$("#48").remove();
		}
	     
	});
	$("#malay").click(function(){
		$('#malay').val(this.checked);
		if(this.checked == true){
			$('#malay').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="49"'+' name="fields['+"'language-advertiser-target'"+']"'+' value="Malay">');
		} else{
			$('#malay').val("false");
			$("#49").remove();
		}
	     
	});
	$("#chinese").click(function(){
		$('#chinese').val(this.checked);
		if(this.checked == true){
			$('#chinese').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="50"'+' name="fields['+"'language-advertiser-target'"+']"'+' value="Chinese">');
		} else{
			$('#chinese').val("false");
			$("#50").remove();
		}
	     
	});
	$("#tamil").click(function(){
		$('#tamil').val(this.checked);
		if(this.checked == true){
			$('#tamil').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="51"'+' name="fields['+"'language-advertiser-target'"+']"'+' value="Tamil">');
		} else{
			$('#tamil').val("false");
			$("#51").remove();
		}
	     
	});
	
	
	$("#age-18-29").click(function(){
		$('#age-18-29').val(this.checked);
		if(this.checked == true){
			$('#age-18-29').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="52"'+' name="fields['+"'age-advertiser-target'"+']"'+' value="18-29">');
		} else{
			$('#age-18-29').val("false");
			$("#52").remove();
		}
	     
	});
	$("#age-30-49").click(function(){
		$('#age-30-49').val(this.checked);
		if(this.checked == true){
			$('#age-30-49').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="53"'+' name="fields['+"'age-advertiser-target'"+']"'+' value="30-49">');
		} else{
			$('#age-30-49').val("false");
			$("#53").remove();
		}
	     
	});
	$("#age-50-64").click(function(){
		$('#age-50-64').val(this.checked);
		if(this.checked == true){
			$('#age-50-64').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="54"'+' name="fields['+"'age-advertiser-target'"+']"'+' value="50-64">');
		} else{
			$('#age-50-64').val("false");
			$("#54").remove();
		}
	     
	});
	
	
	$("#male").click(function(){
		$('#male').val(this.checked);
		if(this.checked == true){
			$('#male').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="55"'+' name="fields['+"'gender-advertiser-target'"+']"'+' value="Male">');
		} else{
			$('#male').val("false");
			$("#55").remove();
		}
	     
	});
	$("#female").click(function(){
		$('#female').val(this.checked);
		if(this.checked == true){
			$('#female').val("true");
			$( "#step-6" ).append( '<input type="hidden" id="56"'+' name="fields['+"'gender-advertiser-target'"+']"'+' value="Female">');
		} else{
			$('#female').val("false");
			$("#56").remove();
		}
	     
	});
	
	/* STEP 8 */
	$("#step-8-panpages").click(function(){
		$('#step-8-panpages').val(this.checked);
		if(this.checked == true){
			$('#step-8-panpages').val("true");
			$( "#step-8" ).append( '<input type="hidden" id="step81"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="panpages">');
		} else{
			$('#step-8-panpages').val("false");
			$("#step81").remove();
		}			     
	});
	$("#step-8-google-adwords-search-mobile").click(function(){
		$('#step-8-google-adwords-search-mobile').val(this.checked);
		if(this.checked == true){
			$('#step-8-google-adwords-search-mobile').val("true");
			$( "#step-8" ).append( '<input type="hidden" id="step82"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="google-adWords-search-mobile">');
		} else{
			$('#step-8-google-adwords-search-mobile').val("false");
			$("#step82").remove();
		}
	});
	$("#step-8-google-display-network").click(function(){
		$('#step-8-google-display-network').val(this.checked);
		if(this.checked == true){
			$('#step-8-google-display-network').val("true");
			$( "#step-8" ).append( '<input type="hidden" id="step83"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="google-display-network">');
		} else{
			$('#step-8-google-display-network').val("false");
			$("#step83").remove();
		}
	});
	$("#step-8-yahoo-search").click(function(){
		$('#step-8-yahoo-search').val(this.checked);
		if(this.checked == true){
			$('#step-8-yahoo-search').val("true");
			$( "#step-8" ).append( '<input type="hidden" id="step84"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="yahoo-search">');
		} else{
			$('#step-8-yahoo-search').val("false");
			$("#step84").remove();
		}
	});
	$("#step-8-yahoo-display").click(function(){
		$('#step-8-yahoo-display').val(this.checked);
		if(this.checked == true){
			$('#step-8-yahoo-display').val("true");
			$( "#step-8" ).append( '<input type="hidden" id="step85"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="yahoo-display">');
		} else{
			$('#step-8-yahoo-display').val("false");
			$("#step85").remove();
		}
	});
	$("#step-8-youtube-ads").click(function(){
		$('#step-8-youtube-ads').val(this.checked);
		if(this.checked == true){
			$('#step-8-youtube-ads').val("true");
			$( "#step-8" ).append( '<input type="hidden" id="step86"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="youtube-ads">');
		} else{
			$('#step-8-youtube-ads').val("false");
			$("#step86").remove();
		}
	});
	$("#step-8-facebook-ads").click(function(){
		$('#step-8-facebook-ads').val(this.checked);
		if(this.checked == true){
			$('#step-8-facebook-ads').val("true");
			$( "#step-8" ).append( '<input type="hidden" id="step87"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="facebook-ads">');
		} else{
			$('#step-8-facebook-ads').val("false");
			$("#step87").remove();
		}
	});
	$("#step-8-pan-360").click(function(){
		$('#step-8-pan-360').val(this.checked);
		if(this.checked == true){
			$('#step-8-pan-360').val("true");
			$( "#step-8" ).append( '<input type="hidden" id="step88"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="pan-360">');
		} else{
			$('#step-8-pan-360').val("false");
			$("#step88").remove();
		}  
	});
	$("#step-8-alibaba-com").click(function(){
		$('#step-8-alibaba-com').val(this.checked);
		if(this.checked == true){
			$('#step-8-alibaba-com').val("true");
			$( "#step-8" ).append( '<input type="hidden" id="step89"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="alibaba-com">');
		} else{
			$('#step-8-alibaba-com').val("false");
			$("#step89").remove();
		}	     
	});
	$("#step-8-super-pages").click(function(){
		$('#step-8-super-pages').val(this.checked);
		if(this.checked == true){
			$('#step-8-super-pages').val("true");
			$( "#step-8" ).append( '<input type="hidden" id="step810"'+' name="fields['+"'advertising-solution-recommend'"+']"'+' value="super-pages">');
		} else{
			$('#step-8-super-pages').val("false");
			$("#step810").remove();
		}     
	});
	
	/* STEP 10 */
	/* Option A */
	function step10A() {
		//Option A
		var panpagesOptionA = '';
		var googleSearchMobileOptionA = '';
		var facebookAdsOptionA = '';
		var alibabaComOptionA = ''; 
		var googleDisplayNetworkOptionA = '';
		var yahooSearchOptionA = '';
		var yahooDisplayOptionA = '';
		var youtubeAdsOptionA = '';
		var facebookMarketingOptionA = '';
		var pan360OptionA = '';
		var superPagesOptionA = '';
		var otherOptionA = '';
		
		var tempt2 = 0;
		var	tempt6 = 0;
		var	tempt7 = 0;
		var	tempt8 = 0;
		var	tempt9 = 0;
		var	tempt3 = 0;
		
		var managementFeeOptionA = 0;
		var subtotalOptionA = 0;
		var govtaxOptionA = 0;
		var grandtotalOptionA = 0;
		
		var panpagesOptionAtest = $('#panpages-option-a-input').val();
		if ($.isEmptyObject(panpagesOptionAtest)) {
			$('#panpages-option-a-input').val(panpagesOptionA);
		} else {
			tempt1 = parseInt(panpagesOptionAtest);
			
			if(!$.isNumeric(tempt1)){
				$("#panpages-option-a-input").focus();
				$("#panpages-option-a-input").val('');
			}else {
				$('#panpages-option-a-input').val(tempt1);
				subtotalOptionA += tempt1;
				govtaxOptionA = subtotalOptionA * 6 / 100;
				grandtotalOptionA = subtotalOptionA + govtaxOptionA;
			}
		}
		
		var alibabaComOptionAtest = $('#alibaba-com-option-a-input').val();
		if ($.isEmptyObject(alibabaComOptionAtest)) {
			$('#alibaba-com-option-a-input').val(alibabaComOptionA);
		} else {
			tempt4 = parseInt(alibabaComOptionAtest);
			
			if(!$.isNumeric(tempt4)){
				$("#alibaba-com-option-a-input").focus();
				$("#alibaba-com-option-a-input").val('');
			}else {
				$('#alibaba-com-option-a-input').val(tempt4);
				subtotalOptionA += tempt4;
				govtaxOptionA = subtotalOptionA * 6 / 100;
				grandtotalOptionA = subtotalOptionA + govtaxOptionA;
				
			}
		}
		
		
				var googleSearchMobileOptionAtest = $('#google-search-mobile-option-a-input').val();
		var googleDisplayNetworkOptionAtest = $('#google-display-network-option-a-input').val();
		var yahooSearchOptionAtest = $('#yahoo-search-option-a-input').val();
		var yahooDisplayOptionAtest = $('#yahoo-display-option-a-input').val();
		var youtubeAdsOptionAtest = $('#youtube-ads-option-a-input').val();
		var facebookAdsOptionAtest = $('#facebook-ads-option-a-input').val();
		
		if ($.isEmptyObject(googleSearchMobileOptionAtest))  {
			$('#google-search-mobile-option-a-input').val(googleSearchMobileOptionA);
			tempt2 = 0;
		} else {
			if(!$.isNumeric(googleSearchMobileOptionAtest)){
				$("#google-search-mobile-option-a-input").focus();
				$("#google-search-mobile-option-a-input").val('');
			} else {
				tempt2 = parseInt(googleSearchMobileOptionAtest);
				$('#google-search-mobile-option-a-input').val(googleSearchMobileOptionAtest);
			}
		}
		
		if ($.isEmptyObject(googleDisplayNetworkOptionAtest)) {
			$('#google-display-network-option-a-input').val(googleDisplayNetworkOptionA);
			tempt6 = 0;
		} else {
			if(!$.isNumeric(googleDisplayNetworkOptionAtest)){
				$("#google-display-network-option-a-input").focus();
				$("#google-display-network-option-a-input").val('');
			} else {
				tempt6 = parseInt(googleDisplayNetworkOptionAtest);
				$('#google-display-network-option-a-input').val(tempt6);
			}
		}
		
		if ($.isEmptyObject(yahooSearchOptionAtest)) {
			$('#yahoo-search-option-a-input').val(yahooSearchOptionA);
			tempt7 = 0;
		} else {
			if(!$.isNumeric(yahooSearchOptionAtest)){
				$("#yahoo-search-option-a-input").focus();
				$("#yahoo-search-option-a-input").val('');
			} else {
				tempt7 = parseInt(yahooSearchOptionAtest);
				$('#yahoo-search-option-a-input').val(tempt7);
			}
		}
		
		if ($.isEmptyObject(yahooDisplayOptionAtest)) {
			$('#yahoo-display-option-a-input').val(yahooDisplayOptionA);
			tempt8 = 0;
		} else {
			if(!$.isNumeric(yahooDisplayOptionAtest)){
				$("#yahoo-display-option-a-input").focus();
				$("#yahoo-display-option-a-input").val('');
			} else {
				tempt8 = parseInt(yahooDisplayOptionAtest);
				$('#yahoo-display-option-a-input').val(tempt8);
			}
		}
		
		if ($.isEmptyObject(youtubeAdsOptionAtest)) {
			$('#youtube-ads-option-a-input').val(youtubeAdsOptionA);
			tempt9 = 0;
		} else {
			if(!$.isNumeric(youtubeAdsOptionAtest)){
				$("#youtube-ads-option-a-input").focus();
				$("#youtube-ads-option-a-input").val('');
			} else {
				tempt9 = parseInt(youtubeAdsOptionAtest);
				$('#youtube-ads-option-a-input').val(tempt9);
			}
		}
		
		if ($.isEmptyObject(facebookAdsOptionAtest)) {
			$('#facebook-ads-option-a-input').val(facebookAdsOptionA);
			tempt3 = 0;
		} else {
			if(!$.isNumeric(facebookAdsOptionAtest)){
				$("#facebook-ads-option-a-input").focus();
				$("#facebook-ads-option-a-input").val('');
			} else {
				tempt3 = parseInt(facebookAdsOptionAtest);
				$('#facebook-ads-option-a-input').val(tempt3);
			}
		}
		
		var temptsum = tempt2 + tempt3 + tempt6 + tempt7 + tempt8 + tempt9;
		managementFeeOptionA = ((temptsum * 1.3) - temptsum).toFixed(2);
		subtotalOptionA += temptsum;
		govtaxOptionA = subtotalOptionA * 6 / 100;
		grandtotalOptionA = subtotalOptionA + govtaxOptionA;
		
		var facebookMarketingOptionAtest = $('#facebook-marketing-option-a-input').val();
		if ($.isEmptyObject(facebookMarketingOptionAtest)) {
			$('#facebook-marketing-option-a-input').val(facebookMarketingOptionA);
		} else {
			tempt10 = parseInt(facebookMarketingOptionAtest);
			
			if(!$.isNumeric(tempt10)){
				$("#facebook-marketing-option-a-input").focus();
				$("#facebook-marketing-option-a-input").val('');
			}else {
				$('#facebook-marketing-option-a-input').val(tempt10);
				subtotalOptionA += tempt10;
				govtaxOptionA = subtotalOptionA * 6 / 100;
				grandtotalOptionA = subtotalOptionA + govtaxOptionA;
				
			}
		}
		
		var pan360OptionAtest = $('#pan-360-option-a-input').val();
		if ($.isEmptyObject(pan360OptionAtest)) {
			$('#pan-360-option-a-input').val(pan360OptionA);
		} else {
			tempt11 = parseInt(pan360OptionAtest);
			
			if(!$.isNumeric(tempt11)){
				$("#pan-360-option-a-input").focus();
				$("#pan-360-option-a-input").val('');
			}else {
				$('#pan-360-option-a-input').val(tempt11);
				subtotalOptionA += tempt11;
				govtaxOptionA = subtotalOptionA * 6 / 100;
				grandtotalOptionA = subtotalOptionA + govtaxOptionA;
				
			}
		}
		
		var superPagesOptionAtest = $('#super-pages-option-a-input').val();
		if ($.isEmptyObject(superPagesOptionAtest)) {
			$('#super-pages-option-a-input').val(superPagesOptionA);
		} else {
			tempt12 = parseInt(superPagesOptionAtest);
			
			if(!$.isNumeric(tempt12)){
				$("#super-pages-option-a-input").focus();
				$("#super-pages-option-a-input").val('');
			}else {
				$('#super-pages-option-a-input').val(tempt12);
				subtotalOptionA += tempt12;
				govtaxOptionA = subtotalOptionA * 6 / 100;
				grandtotalOptionA = subtotalOptionA + govtaxOptionA;
				
			}
		}
		
		var otherOptionAtest = $('#others-option-A-input').val();
		if ($.isEmptyObject(otherOptionAtest)) {
			$('#others-option-A-input').val(otherOptionA);
		} else {
			tempt13 = parseInt(otherOptionAtest);
			
			if(!$.isNumeric(tempt13)){
				$("#others-option-A-input").focus();
				$("#others-option-A-input").val('');
			}else {
				$('#others-option-A-input').val(tempt13);
				subtotalOptionA += tempt13;
				govtaxOptionA = subtotalOptionA * 6 / 100;
				grandtotalOptionA = subtotalOptionA + govtaxOptionA;
				
			}
		}
		
		$('#management-fee-option-a').val(managementFeeOptionA);
		$('#subtotal-option-a').val(subtotalOptionA);
		$('#gov-tax-option-a').val(govtaxOptionA);
		$('#grand-total-option-a').val(grandtotalOptionA);
	}
	
	$("#panpages-option-a-input").prop( "disabled", true );
	$("#google-search-mobile-option-a-input").prop( "disabled", true );
	$("#google-display-network-option-a-input").prop( "disabled", true );
	$("#yahoo-search-option-a-input").prop( "disabled", true );
	$("#yahoo-display-option-a-input").prop( "disabled", true );
	$("#youtube-ads-option-a-input").prop( "disabled", true );
	$("#facebook-ads-option-a-input").prop( "disabled", true );
	$("#facebook-marketing-option-a-input").prop( "disabled", true );
	$("#pan-360-option-a-input").prop( "disabled", true );
	$("#alibaba-com-option-a-input").prop( "disabled", true );
	$("#super-pages-option-a-input").prop( "disabled", true );
	$("#others-option-A-input").prop( "disabled", true );
	
	$("#management-fee-option-a").prop( "disabled", true );
	$("#subtotal-option-a").prop( "disabled", true );
	$("#gov-tax-option-a").prop( "disabled", true );
	$("#grand-total-option-a").prop( "disabled", true );
	
	if(($("#option-a").is(':checked')) == true){
		$('#option-a').val("true");
		$("#panpages-option-a-input").prop( "disabled", false );
		$("#google-search-mobile-option-a-input").prop( "disabled", false );
		$("#google-display-network-option-a-input").prop( "disabled", false );
		$("#yahoo-search-option-a-input").prop( "disabled", false );
		$("#yahoo-display-option-a-input").prop( "disabled", false );
		$("#youtube-ads-option-a-input").prop( "disabled", false );
		$("#facebook-ads-option-a-input").prop( "disabled", false );
		$("#facebook-marketing-option-a-input").prop( "disabled", false );
		$("#pan-360-option-a-input").prop( "disabled", false );
		$("#alibaba-com-option-a-input").prop( "disabled", false );
		$("#super-pages-option-a-input").prop( "disabled", false );
		$("#others-option-A-input").prop( "disabled", false );
		
		$("#management-fee-option-a").prop( "disabled", true );
		$("#subtotal-option-a").prop( "disabled", true );
		$("#gov-tax-option-a").prop( "disabled", true );
		$("#grand-total-option-a").prop( "disabled", true );
	} else{
		$('#option-a').val("false");
		$("#panpages-option-a-input").prop( "disabled", true );
		$("#google-search-mobile-option-a-input").prop( "disabled", true );
		$("#google-display-network-option-a-input").prop( "disabled", true );
		$("#yahoo-search-option-a-input").prop( "disabled", true );
		$("#yahoo-display-option-a-input").prop( "disabled", true );
		$("#youtube-ads-option-a-input").prop( "disabled", true );
		$("#facebook-ads-option-a-input").prop( "disabled", true );
		$("#facebook-marketing-option-a-input").prop( "disabled", true );
		$("#pan-360-option-a-input").prop( "disabled", true );
		$("#alibaba-com-option-a-input").prop( "disabled", true );
		$("#super-pages-option-a-input").prop( "disabled", true );
		$("#others-option-A-input").prop( "disabled", true );
		
		$("#management-fee-option-a").prop( "disabled", true );
		$("#subtotal-option-a").prop( "disabled", true );
		$("#gov-tax-option-a").prop( "disabled", true );
		$("#grand-total-option-a").prop( "disabled", true );
	} 
	
	$("#option-a").click(function(){
		if(($("#option-a").is(':checked')) == true){
			$('#option-a').val("true");
			$("#panpages-option-a-input").prop( "disabled", false );
			$("#google-search-mobile-option-a-input").prop( "disabled", false );
			$("#google-display-network-option-a-input").prop( "disabled", false );
			$("#yahoo-search-option-a-input").prop( "disabled", false );
			$("#yahoo-display-option-a-input").prop( "disabled", false );
			$("#youtube-ads-option-a-input").prop( "disabled", false );
			$("#facebook-ads-option-a-input").prop( "disabled", false );
			$("#facebook-marketing-option-a-input").prop( "disabled", false );
			$("#pan-360-option-a-input").prop( "disabled", false );
			$("#alibaba-com-option-a-input").prop( "disabled", false );
			$("#super-pages-option-a-input").prop( "disabled", false );
			$("#others-option-A-input").prop( "disabled", false );
			
			$("#management-fee-option-a").prop( "disabled", true );
			$("#subtotal-option-a").prop( "disabled", true );
			$("#gov-tax-option-a").prop( "disabled", true );
			$("#grand-total-option-a").prop( "disabled", true );
		} else{
			$('#option-a').val("false");
			$("#panpages-option-a-input").prop( "disabled", true );
			$("#google-search-mobile-option-a-input").prop( "disabled", true );
			$("#google-display-network-option-a-input").prop( "disabled", true );
			$("#yahoo-search-option-a-input").prop( "disabled", true );
			$("#yahoo-display-option-a-input").prop( "disabled", true );
			$("#youtube-ads-option-a-input").prop( "disabled", true );
			$("#facebook-ads-option-a-input").prop( "disabled", true );
			$("#facebook-marketing-option-a-input").prop( "disabled", true );
			$("#pan-360-option-a-input").prop( "disabled", true );
			$("#alibaba-com-option-a-input").prop( "disabled", true );
			$("#super-pages-option-a-input").prop( "disabled", true );
			$("#others-option-A-input").prop( "disabled", true );
			
			$("#management-fee-option-a").prop( "disabled", true );
			$("#subtotal-option-a").prop( "disabled", true );
			$("#gov-tax-option-a").prop( "disabled", true );
			$("#grand-total-option-a").prop( "disabled", true );
		} 
	});
	$( "#panpages-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#google-search-mobile-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#google-display-network-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#yahoo-search-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#yahoo-display-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#youtube-ads-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#facebook-ads-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#facebook-marketing-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#pan-360-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#alibaba-com-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#super-pages-option-a-input" ).blur(function() {
		step10A();
				
	});
	$( "#others-option-A-input" ).blur(function() {
		step10A();
				
	});
	
	/*Option B*/
	function step10B() {
		//Option B
		var panpagesOptionB = '';
		var googleSearchMobileOptionB = '';
		var facebookAdsOptionB = '';
		var alibabaComOptionB = ''; 
		var googleDisplayNetworkOptionB = '';
		var yahooSearchOptionB = '';
		var yahooDisplayOptionB = '';
		var youtubeAdsOptionB = '';
		var facebookMarketingOptionB = '';
		var pan360OptionB = '';
		var superPagesOptionB = '';
		var otherOptionB = '';
		
		var tempt2 = 0;
		var tempt3 = 0;
		var tempt6 = 0;
		var tempt7 = 0;
		var tempt8 = 0;
		var tempt9 = 0;
		
		var managementFeeOptionB = 0;
		var subtotalOptionB = 0;
		var govtaxOptionB = 0;
		var grandtotalOptionB = 0;
		
		var panpagesOptionBtest = $('#panpages-option-b-input').val();
		if ($.isEmptyObject(panpagesOptionBtest)) {
			$('#panpages-option-b-input').val(panpagesOptionB);
		} else {
			tempt1 = parseInt(panpagesOptionBtest);
			
			if(!$.isNumeric(tempt1)){
				$("#panpages-option-b-input").focus();
				$("#panpages-option-b-input").val('');
			}else {
				$('#panpages-option-b-input').val(tempt1);
				subtotalOptionB += tempt1;
				govtaxOptionB = subtotalOptionB * 6 / 100;
				grandtotalOptionB = subtotalOptionB + govtaxOptionB;
			}
		}
		
		var alibabaComOptionBtest = $('#alibaba-com-option-b-input').val();
		if ($.isEmptyObject(alibabaComOptionBtest)) {
			$('#alibaba-com-option-b-input').val(alibabaComOptionB);
		} else {
			tempt4 = parseInt(alibabaComOptionBtest);
			
			if(!$.isNumeric(tempt4)){
				$("#alibaba-com-option-b-input").focus();
				$("#alibaba-com-option-b-input").val('');
			}else {
				$('#alibaba-com-option-b-input').val(tempt4);
				subtotalOptionB += tempt4;
				govtaxOptionB = subtotalOptionB * 6 / 100;
				grandtotalOptionB = subtotalOptionB + govtaxOptionB;
				
			}
		}
		
		
		var googleSearchMobileOptionBtest = $('#google-search-mobile-option-b-input').val();
		var googleDisplayNetworkOptionBtest = $('#google-display-network-option-b-input').val();
		var yahooSearchOptionBtest = $('#yahoo-search-option-b-input').val();
		var yahooDisplayOptionBtest = $('#yahoo-display-option-b-input').val();
		var youtubeAdsOptionBtest = $('#youtube-ads-option-b-input').val();
		var facebookAdsOptionBtest = $('#facebook-ads-option-b-input').val();
		
		if ($.isEmptyObject(googleSearchMobileOptionBtest))  {
			$('#google-search-mobile-option-b-input').val(googleSearchMobileOptionB);
			tempt2 = 0;
		} else {
			if(!$.isNumeric(googleSearchMobileOptionBtest)){
				$("#google-search-mobile-option-b-input").focus();
				$("#google-search-mobile-option-b-input").val('');
			} else {
				tempt2 = parseInt(googleSearchMobileOptionBtest);
				$('#google-search-mobile-option-b-input').val(googleSearchMobileOptionBtest);
			}
		}
		
		if ($.isEmptyObject(googleDisplayNetworkOptionBtest)) {
			$('#google-display-network-option-b-input').val(googleDisplayNetworkOptionB);
			tempt6 = 0;
		} else {
			if(!$.isNumeric(googleDisplayNetworkOptionBtest)){
				$("#google-display-network-option-b-input").focus();
				$("#google-display-network-option-b-input").val('');
			} else {
				tempt6 = parseInt(googleDisplayNetworkOptionBtest);
				$('#google-display-network-option-b-input').val(tempt6);
			}
		}
		
		if ($.isEmptyObject(yahooSearchOptionBtest)) {
			$('#yahoo-search-option-b-input').val(yahooSearchOptionB);
			tempt7 = 0;
		} else {
			if(!$.isNumeric(yahooSearchOptionBtest)){
				$("#yahoo-search-option-b-input").focus();
				$("#yahoo-search-option-b-input").val('');
			} else {
				tempt7 = parseInt(yahooSearchOptionBtest);
				$('#yahoo-search-option-b-input').val(tempt7);
			}
		}
		
		if ($.isEmptyObject(yahooDisplayOptionBtest)) {
			$('#yahoo-display-option-b-input').val(yahooDisplayOptionB);
			tempt8 = 0;
		} else {
			if(!$.isNumeric(yahooDisplayOptionBtest)){
				$("#yahoo-display-option-b-input").focus();
				$("#yahoo-display-option-b-input").val('');
			} else {
				tempt8 = parseInt(yahooDisplayOptionBtest);
				$('#yahoo-display-option-b-input').val(tempt8);
			}
		}
		
		if ($.isEmptyObject(youtubeAdsOptionBtest)) {
			$('#youtube-ads-option-b-input').val(youtubeAdsOptionB);
			tempt9 = 0;
		} else {
			if(!$.isNumeric(youtubeAdsOptionBtest)){
				$("#youtube-ads-option-b-input").focus();
				$("#youtube-ads-option-b-input").val('');
			} else {
				tempt9 = parseInt(youtubeAdsOptionBtest);
				$('#youtube-ads-option-b-input').val(tempt9);
			}
		}
		
		if ($.isEmptyObject(facebookAdsOptionBtest)) {
			$('#facebook-ads-option-b-input').val(facebookAdsOptionB);
			tempt3 = 0;
		} else {
			if(!$.isNumeric(facebookAdsOptionBtest)){
				$("#facebook-ads-option-b-input").focus();
				$("#facebook-ads-option-b-input").val('');
			} else {
				tempt3 = parseInt(facebookAdsOptionBtest);
				$('#facebook-ads-option-b-input').val(tempt3);
			}
		}
		
		var temptsum = tempt2 + tempt3 + tempt6 + tempt7 + tempt8 + tempt9;
		managementFeeOptionB = ((temptsum * 1.3) - temptsum).toFixed(2);
		subtotalOptionB += temptsum;
		govtaxOptionB = subtotalOptionB * 6 / 100;
		grandtotalOptionB = subtotalOptionB + govtaxOptionB;
		
		var facebookMarketingOptionBtest = $('#facebook-marketing-option-b-input').val();
		if ($.isEmptyObject(facebookMarketingOptionBtest)) {
			$('#facebook-marketing-option-b-input').val(facebookMarketingOptionB);
		} else {
			tempt10 = parseInt(facebookMarketingOptionBtest);
			
			if(!$.isNumeric(tempt10)){
				$("#facebook-marketing-option-b-input").focus();
				$("#facebook-marketing-option-b-input").val('');
			}else {
				$('#facebook-marketing-option-b-input').val(tempt10);
				subtotalOptionB += tempt10;
				govtaxOptionB = subtotalOptionB * 6 / 100;
				grandtotalOptionB = subtotalOptionB + govtaxOptionB;
				
			}
		}
		
		var pan360OptionBtest = $('#pan-360-option-b-input').val();
		if ($.isEmptyObject(pan360OptionBtest)) {
			$('#pan-360-option-b-input').val(pan360OptionB);
		} else {
			tempt11 = parseInt(pan360OptionBtest);
			
			if(!$.isNumeric(tempt11)){
				$("#pan-360-option-b-input").focus();
				$("#pan-360-option-b-input").val('');
			}else {
				$('#pan-360-option-b-input').val(tempt11);
				subtotalOptionB += tempt11;
				govtaxOptionB = subtotalOptionB * 6 / 100;
				grandtotalOptionB = subtotalOptionB + govtaxOptionB;
				
			}
		}
		
		var superPagesOptionBtest = $('#super-pages-option-b-input').val();
		if ($.isEmptyObject(superPagesOptionBtest)) {
			$('#super-pages-option-b-input').val(superPagesOptionB);
		} else {
			tempt12 = parseInt(superPagesOptionBtest);
			
			if(!$.isNumeric(tempt12)){
				$("#super-pages-option-b-input").focus();
				$("#super-pages-option-b-input").val('');
			}else {
				$('#super-pages-option-b-input').val(tempt12);
				subtotalOptionB += tempt12;
				govtaxOptionB = subtotalOptionB * 6 / 100;
				grandtotalOptionB = subtotalOptionB + govtaxOptionB;
				
			}
		}
		
		var otherOptionBtest = $('#others-option-b-input').val();
		if ($.isEmptyObject(otherOptionBtest)) {
			$('#others-option-b-input').val(otherOptionB);
		} else {
			tempt13 = parseInt(otherOptionBtest);
			
			if(!$.isNumeric(tempt13)){
				$("#others-option-b-input").focus();
				$("#others-option-b-input").val('');
			}else {
				$('#others-option-b-input').val(tempt13);
				subtotalOptionB += tempt13;
				govtaxOptionB = subtotalOptionB * 6 / 100;
				grandtotalOptionB = subtotalOptionB + govtaxOptionB;
				
			}
		}
		
		$('#management-fee-option-b').val(managementFeeOptionB);
		$('#subtotal-option-b').val(subtotalOptionB);
		$('#gov-tax-option-b').val(govtaxOptionB);
		$('#grand-total-option-b').val(grandtotalOptionB);
	}
	
	$("#panpages-option-b-input").prop( "disabled", true );
	$("#google-search-mobile-option-b-input").prop( "disabled", true );
	$("#google-display-network-option-b-input").prop( "disabled", true );
	$("#yahoo-search-option-b-input").prop( "disabled", true );
	$("#yahoo-display-option-b-input").prop( "disabled", true );
	$("#youtube-ads-option-b-input").prop( "disabled", true );
	$("#facebook-ads-option-b-input").prop( "disabled", true );
	$("#facebook-marketing-option-b-input").prop( "disabled", true );
	$("#pan-360-option-b-input").prop( "disabled", true );
	$("#alibaba-com-option-b-input").prop( "disabled", true );
	$("#super-pages-option-b-input").prop( "disabled", true );
	$("#others-option-b-input").prop( "disabled", true );
	
	$("#management-fee-option-b").prop( "disabled", true );
	$("#subtotal-option-b").prop( "disabled", true );
	$("#gov-tax-option-b").prop( "disabled", true );
	$("#grand-total-option-b").prop( "disabled", true );
	
	if(($("#option-b").is(':checked')) == true){
		$('#option-b').val("true");
		$("#panpages-option-b-input").prop( "disabled", false );
		$("#google-search-mobile-option-b-input").prop( "disabled", false );
		$("#google-display-network-option-b-input").prop( "disabled", false );
		$("#yahoo-search-option-b-input").prop( "disabled", false );
		$("#yahoo-display-option-b-input").prop( "disabled", false );
		$("#youtube-ads-option-b-input").prop( "disabled", false );
		$("#facebook-ads-option-b-input").prop( "disabled", false );
		$("#facebook-marketing-option-b-input").prop( "disabled", false );
		$("#pan-360-option-b-input").prop( "disabled", false );
		$("#alibaba-com-option-b-input").prop( "disabled", false );
		$("#super-pages-option-b-input").prop( "disabled", false );
		$("#others-option-b-input").prop( "disabled", false );
		
		$("#management-fee-option-b").prop( "disabled", true );
		$("#subtotal-option-b").prop( "disabled", true );
		$("#gov-tax-option-b").prop( "disabled", true );
		$("#grand-total-option-b").prop( "disabled", true );
	} else{
		$('#option-b').val("false");
		$("#panpages-option-b-input").prop( "disabled", true );
		$("#google-search-mobile-option-b-input").prop( "disabled", true );
		$("#google-display-network-option-b-input").prop( "disabled", true );
		$("#yahoo-search-option-b-input").prop( "disabled", true );
		$("#yahoo-display-option-b-input").prop( "disabled", true );
		$("#youtube-ads-option-b-input").prop( "disabled", true );
		$("#facebook-ads-option-b-input").prop( "disabled", true );
		$("#facebook-marketing-option-b-input").prop( "disabled", true );
		$("#pan-360-option-b-input").prop( "disabled", true );
		$("#alibaba-com-option-b-input").prop( "disabled", true );
		$("#super-pages-option-b-input").prop( "disabled", true );
		$("#others-option-b-input").prop( "disabled", true );
		
		$("#management-fee-option-b").prop( "disabled", true );
		$("#subtotal-option-b").prop( "disabled", true );
		$("#gov-tax-option-b").prop( "disabled", true );
		$("#grand-total-option-b").prop( "disabled", true );
	} 
	
	$("#option-b").click(function(){
		$('#option-b').val(this.checked);
		if(($("#option-b").is(':checked')) == true){
			$('#option-b').val("true");
			$("#panpages-option-b-input").prop( "disabled", false );
			$("#google-search-mobile-option-b-input").prop( "disabled", false );
			$("#google-display-network-option-b-input").prop( "disabled", false );
			$("#yahoo-search-option-b-input").prop( "disabled", false );
			$("#yahoo-display-option-b-input").prop( "disabled", false );
			$("#youtube-ads-option-b-input").prop( "disabled", false );
			$("#facebook-ads-option-b-input").prop( "disabled", false );
			$("#facebook-marketing-option-b-input").prop( "disabled", false );
			$("#pan-360-option-b-input").prop( "disabled", false );
			$("#alibaba-com-option-b-input").prop( "disabled", false );
			$("#super-pages-option-b-input").prop( "disabled", false );
			$("#others-option-b-input").prop( "disabled", false );
			
			$("#management-fee-option-b").prop( "disabled", true );
			$("#subtotal-option-b").prop( "disabled", true );
			$("#gov-tax-option-b").prop( "disabled", true );
			$("#grand-total-option-b").prop( "disabled", true );
		} else{
			$('#option-b').val("false");
			$("#panpages-option-b-input").prop( "disabled", true );
			$("#google-search-mobile-option-b-input").prop( "disabled", true );
			$("#google-display-network-option-b-input").prop( "disabled", true );
			$("#yahoo-search-option-b-input").prop( "disabled", true );
			$("#yahoo-display-option-b-input").prop( "disabled", true );
			$("#youtube-ads-option-b-input").prop( "disabled", true );
			$("#facebook-ads-option-b-input").prop( "disabled", true );
			$("#facebook-marketing-option-b-input").prop( "disabled", true );
			$("#pan-360-option-b-input").prop( "disabled", true );
			$("#alibaba-com-option-b-input").prop( "disabled", true );
			$("#super-pages-option-b-input").prop( "disabled", true );
			$("#others-option-b-input").prop( "disabled", true );
			
			$("#management-fee-option-b").prop( "disabled", true );
			$("#subtotal-option-b").prop( "disabled", true );
			$("#gov-tax-option-b").prop( "disabled", true );
			$("#grand-total-option-b").prop( "disabled", true );
		} 
	});
	$( "#panpages-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#google-search-mobile-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#google-display-network-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#yahoo-search-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#yahoo-display-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#youtube-ads-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#facebook-ads-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#facebook-marketing-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#pan-360-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#alibaba-com-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#super-pages-option-b-input" ).blur(function() {
		step10B();
				
	});
	$( "#others-option-b-input" ).blur(function() {
		step10B();
				
	});
	
});