$( document ).ready(function() {
	/* Section1 */
	function calculateSection1() {
		var revenueIncreased = $("#revenue-increased-input").val();
		if(!$.isNumeric(revenueIncreased))
		{
			$("#revenue-increased-input-error").text("Please input a number in Revenue Increased field!");
			$("#revenue-increased-input").focus();
			return;
		}
		else{
			$("#revenue-increased-input-error").text("");
		}
		$("#revenue-increased-output").val(revenueIncreased);
		// 
		var ARPA = $("#arpa-input").val();
		if(!$.isNumeric(ARPA))
		{
			$("#arpa-input-error").text("Please input a number in Revenue Increased field!");
			$("#arpa-input").focus();
			return;
		}
		else{
			$("#arpa-input-error").text("");
		}
		
		$("#arpa-output").val(ARPA);
		
		var newAdvertisers = Math.round(revenueIncreased/ARPA);
		$("#new-advertisers-output").val(newAdvertisers);
		$("#no-of-advertiser-input").val(newAdvertisers);
		
		var closingRate = $("#closing-rate-input").val(); 
		if(!$.isNumeric(parseInt(closingRate.split("%"))))
		{
			$("#closing-rate-input-error").text("Please input a number in Revenue Increased field!");
			$("#closing-rate-input").focus();
			return;
		}
		else{
			$("#closing-rate-input-error").text("");
		}
		$("#closing-rate-output").val(closingRate); 
		var closingRateoutput = parseInt(closingRate.split("%"));
		
		var leadsConversionRate = $("#leads-conversion-rate-input").val();
		if(!$.isNumeric(parseInt(leadsConversionRate.split("%"))))
		{
			$("#leads-conversion-rate-input-error").text("Please input a number in Revenue Increased field!");
			$("#leads-conversion-rate-input").focus();
			return;
		}
		else{
			$("#leads-conversion-rate-input-error").text("");
		}
		$("#leads-conversion-rate-output").val(leadsConversionRate); 
		var leadsConversionrateoutput = parseInt(leadsConversionRate.split("%"));
		
		var campaignPeriod = $("#campaign-period-input").val();
		if(!$.isNumeric(campaignPeriod))
		{
			$("#campaign-period-input-error").text("Please input a number in Revenue Increased field!");
			$("#campaign-period-input").focus();
			return;
		}
		else{
			$("#campaign-period-input-error").text("");
		}
		
		var Leaders =(newAdvertisers/(closingRateoutput/100)).toFixed(0);
		$("#leads-output").val(Leaders);
		
		var trafficRequired =(Leaders/(leadsConversionrateoutput/100)).toFixed(0);
		$("#traffic-required-output").val(trafficRequired);
		
		var monthlyTraffic =(trafficRequired/campaignPeriod).toFixed(2);
		$("#monthly-traffic-output").val(monthlyTraffic);
		
		var avgCostperclick = 4.17;
		$("#avg-cost-per-click-output").val(avgCostperclick);
		
		var estimatedMonthlybudget = (monthlyTraffic * avgCostperclick).toFixed(2);
		$("#estimated-monthly-budget-output").val(estimatedMonthlybudget);
		
		var totalCampaignbudget = (estimatedMonthlybudget * campaignPeriod).toFixed(2);
		$("#total-campaign-budget-output").val(totalCampaignbudget);
		
    }
	
	$( "#revenue-increased-input" ).blur(function() {
		calculateSection1();
				
	        });
	
	$( "#arpa-input" ).blur(function() {
		calculateSection1();
				
	        });
	
	$( "#closing-rate-input" ).blur(function() {
		calculateSection1();
				
	        });
	
	$( "#leads-conversion-rate-input" ).blur(function() {
		calculateSection1();
				
	        });
	
	$( "#campaign-period-input" ).blur(function() {
		calculateSection1();
				
	        });
	
	$("#nationwide").click(function(){
		$('#nationwide').val(this.checked);
	     
	  });
	
	$("#kuala-lumpur").click(function(){
		$('#kuala-lumpur').val(this.checked);
	     
	  });
	
	$("#klang-valley").click(function(){
		$('#klang-valley').val(this.checked);
	     
	  });
	
	$("#perlis").click(function(){
		$('#perlis').val(this.checked);
	     
	  });
	
	$("#kedah").click(function(){
		$('#kedah').val(this.checked);
	     
	  });
	
	$("#kelantan").click(function(){
		$('#kelantan').val(this.checked);
	     
	  });
	
	$("#penang").click(function(){
		$('#penang').val(this.checked);
	     
	  });
	
	$("#perak").click(function(){
		$('#perak').val(this.checked);
	     
	  });
	
	$("#terengganu").click(function(){
		$('#terengganu').val(this.checked);
	     
	  });
	
	$("#pahang").click(function(){
		$('#pahang').val(this.checked);
	     
	  });
	
	$("#negeri-sembilan").click(function(){
		$('#negeri-sembilan').val(this.checked);
	     
	  });
	
	$("#melaka").click(function(){
		$('#melaka').val(this.checked);
	     
	  });
	
	$("#johor").click(function(){
		$('#johor').val(this.checked);
	     
	  });
	
	$("#sarawak").click(function(){
		$('#sarawak').val(this.checked);
	     
	  });
	
	$("#thailand").click(function(){
		$('#thailand').val(this.checked);
	     
	  });
	
	$("#singapore").click(function(){
		$('#singapore').val(this.checked);
	     
	  });
	
	$("#indonesia").click(function(){
		$('#indonesia').val(this.checked);
	     
	  });
	
	$("#others-countries").click(function(){
		$('#others-countries').val(this.checked);
		var othersCountriestext = $("#others-countries-text").val();
		$('#others-countries-text').val(othersCountriestext); 
		
	  });
	
	$("#accounting-finance").click(function(){
		$('#accounting-finance').val(this.checked);
	     
	  });
	
	$("#admin-HR").click(function(){
		$('#admin-HR').val(this.checked);
	     
	  });
	
	$("#arts-communication").click(function(){
		$('#arts-communication').val(this.checked);
	     
	  });
	
	$("#building-construction").click(function(){
		$('#building-construction').val(this.checked);
	     
	  });
	
	$("#computer-IT").click(function(){
		$('#computer-IT').val(this.checked);
	     
	  });
	
	$("#education-training").click(function(){
		$('#education-training').val(this.checked);
	     
	  });
	
	$("#engineering").click(function(){
		$('#engineering').val(this.checked);
	     
	  });
	
	$("#healthcare").click(function(){
		$('#healthcare').val(this.checked);
	     
	  });
	
	$("#hotel-restaurant").click(function(){
		$('#hotel-restaurant').val(this.checked);
	     
	  });
	
	$("#manufacturing").click(function(){
		$('#manufacturing').val(this.checked);
	     
	  });
	
	$("#sales-marketing").click(function(){
		$('#sales-marketing').val(this.checked);
	     
	  });
	
	$("#science").click(function(){
		$('#science').val(this.checked);
	     
	  });
	
	$("#services").click(function(){
		$('#services').val(this.checked);
	     
	  });
	
	$("#others-targeted-audience").click(function(){
		$('#others-targeted-audience').val(this.checked);
		var othersTargetedaudiencetext = $("#others-targeted-audience-text").val();
		$('#others-targeted-audience-text').val(othersTargetedaudiencetext); 
		
	  });
	
	$("#english").click(function(){
		$('#english').val(this.checked);
	     
	  });
	
	$("#malay").click(function(){
		$('#malay').val(this.checked);
	     
	  });
	
	$("#chinese").click(function(){
		$('#chinese').val(this.checked);
	     
	  });
	
	$("#tamil").click(function(){
		$('#tamil').val(this.checked);
	     
	  });
	
	$("#others-preferred-language").click(function(){
		$('#others-preferred-language').val(this.checked);
		var othersPreferredlanguagetext = $("#others-preferred-language-text").val();
		$('#others-preferred-language-text').val(othersPreferredlanguagetext); 
		
	  });
	
	$("#18-29-age").click(function(){
		$('#18-29-age').val(this.checked);
	     
	  });
	
	$("#30-49-age").click(function(){
		$('#30-49-age').val(this.checked);
	     
	  });
	
	$("#50-64-age").click(function(){
		$('#50-64-age').val(this.checked);
	     
	  });
	
	$("#others-age").click(function(){
		$('#others-age').val(this.checked);
		var othersAgetext = $("#others-age-text").val();
		$('#others-age-text').val(othersAgetext); 
		
	  });
	
	$("#male").click(function(){
		$('#male').val(this.checked);
	     
	  });
	
	$("#female").click(function(){
		$('#female').val(this.checked);
	     
	  });
	
	/* Section2 */
	$("#malaysia-panpages-2014-marketing-campaign").click(function(){
		$('#malaysia-panpages-2014-marketing-campaign').val(this.checked);
	     
	  });
	
	$("#google-adWords-search-mobile-2014-marketing-campaign").click(function(){
		$('#google-adWords-search-mobile-2014-marketing-campaign').val(this.checked);
	     
	  });
	
	$("#google-display-network-2014-marketing-campaign").click(function(){
		$('#google-display-network-2014-marketing-campaign').val(this.checked);
	     
	  });
	
	$("#yahoo-search-2014-marketing-campaign").click(function(){
		$('#yahoo-search-2014-marketing-campaign').val(this.checked);
	     
	  });
	
	$("#yahoo-display-2014-marketing-campaign").click(function(){
		$('#yahoo-display-2014-marketing-campaign').val(this.checked);
	     
	  });
	
	$("#youtube-ads-2014-marketing-campaign").click(function(){
		$('#youtube-ads-2014-marketing-campaign').val(this.checked);
	     
	  });
	
	$("#facebook-ads-2014-marketing-campaign").click(function(){
		$('#facebook-ads-2014-marketing-campaign').val(this.checked);
	     
	  });
	
	$("#pan-360-2014-marketing-campaign").click(function(){
		$('#pan-360-2014-marketing-campaign').val(this.checked);
	     
	  });
	
	$("#alibaba-com-2014-marketing-campaign").click(function(){
		$('#alibaba-com-2014-marketing-campaign').val(this.checked);
	     
	  });
	
	$("#super-pages-2014-marketing-campaign").click(function(){
		$('#super-pages-2014-marketing-campaign').val(this.checked);
	     
	  });
	
	function calculateSection2() {
		var advertising2014investment = $("#2014-advertising-investment").val();
		$("#2014-advertising-investment").val(advertising2014investment);
		
		var websiteVisits = $("#website-visits").val();
		$("#website-visits").val(websiteVisits);
		
		var clicksOnads = $("#clicks-on-ads").val();
		$("#clicks-on-ads").val(clicksOnads);
		
		var clickThroughrate = $("#click-through-rate").val();
		$("#click-through-rate").val(clickThroughrate);
		
		var remarks = $("#remarks").val();
		$("#remarks").val(remarks);
    }
	
	$( "#2014-advertising-investment" ).blur(function() {
		calculateSection2();
			
	        });
	
	$( "#website-visits" ).blur(function() {
		calculateSection2();
				
	        });
	
	$( "#clicks-on-ads" ).blur(function() {
		calculateSection2();
				
	        });
	
	$( "#click-through-rate" ).blur(function() {
		calculateSection2();
				
	        });
	
	$("#enhance-text-content").click(function(){
		$('#enhance-text-content').val(this.checked);
	     
	  });
	
	$("#add-on-relevant-product-picture").click(function(){
		$('#add-on-relevant-product-picture').val(this.checked);
	     
	  });
	
	$("#add-on-product-description").click(function(){
		$('#add-on-product-description').val(this.checked);
	     
	  });
	
	$("#include-product-price").click(function(){
		$('#include-product-price').val(this.checked);
	     
	  });
	
	$("#include-product-specification").click(function(){
		$('#include-product-specification').val(this.checked);
	     
	  });
	
	$("#include-company-details").click(function(){
		$('#include-company-details').val(this.checked);
	     
	  });
	
	$("#include-delivery-information").click(function(){
		$('#include-delivery-information').val(this.checked);
	     
	  });
	
	$("#include-payment-options").click(function(){
		$('#include-payment-options').val(this.checked);
	     
	  });
	
	$("#frequently-your-website").click(function(){
		$('#frequently-your-website').val(this.checked);
	     
	  });
	
	$("#timely-response-to-enquiry").click(function(){
		$('#timely-response-to-enquiry').val(this.checked);
	     
	  });
	
	$("#tracking-on-calls-walk-in").click(function(){
		$('#tracking-on-calls-walk-in').val(this.checked);
	     
	  });
	
	$("#highlight-unique-selling-point").click(function(){
		$('#highlight-unique-selling-point').val(this.checked);
	     
	  });
	
	$("#include-certification-for-better-credential").click(function(){
		$('#include-certification-for-better-credential').val(this.checked);
	     
	  });
	
	$("#enhance-product-picture-quality").click(function(){
		$('#enhance-product-picture-quality').val(this.checked);
	     
	  });
	
	$("#others-2015-action-plan-for-improvement").click(function(){
		$('#others-2015-action-plan-for-improvement').val(this.checked);
		var others2015actionplanforimprovementtext = $("#others-2015-action-plan-for-improvement-text").val();
		$("#others-2015-action-plan-for-improvement-text").val(others2015actionplanforimprovementtext);
	  });
	
	$( "#remarks" ).blur(function() {
		calculateSection2();
				
	        });
	
	$("#increase-website-traffic").click(function(){
		$('#increase-website-traffic').val(this.checked);
	     
	  });
	
	$("#increase-brand-awareness").click(function(){
		$('#increase-brand-awareness').val(this.checked);
	     
	  });
	
	$("#increase-online-forms-submission").click(function(){
		$('#increase-online-forms-submission').val(this.checked);
	     
	  });
	
	$("#increase-store-visits").click(function(){
		$('#increase-store-visits').val(this.checked);
	     
	  });
	
	$("#increase-phones-calls").click(function(){
		$('#increase-phones-calls').val(this.checked);
	     
	  });
	
	$("#increase-online-purchase").click(function(){
		$('#increase-online-purchase').val(this.checked);
	     
	  });
	
	$("#retargeting-visitors").click(function(){
		$('#retargeting-visitors').val(this.checked);
	     
	  });
	
	$("#increase-geographical-coverage").click(function(){
		$('#increase-geographical-coverage').val(this.checked);
	     
	  });
	
	$("#malaysia-panpages-recommended-solutions").click(function(){
		$('#malaysia-panpages-recommended-solutions').val(this.checked);
	     
	  });
	
	$("#google-adWords-search-mobile-recommended-solutions").click(function(){
		$('#google-adWords-search-mobile-recommended-solutions').val(this.checked);
	     
	  });
	
	$("#google-display-network-recommended-solutions").click(function(){
		$('#google-display-network-recommended-solutions').val(this.checked);
	     
	  });
	
	$("#yahoo-search-recommended-solutions").click(function(){
		$('#yahoo-search-recommended-solutions').val(this.checked);
	     
	  });
	
	$("#yahoo-display-recommended-solutions").click(function(){
		$('#yahoo-display-recommended-solutions').val(this.checked);
	     
	  });
	
	$("#youtube-ads-recommended-solutions").click(function(){
		$('#youtube-ads-recommended-solutions').val(this.checked);
	     
	  });
	
	$("#facebook-ads-recommended-solutions").click(function(){
		$('#facebook-ads-recommended-solutions').val(this.checked);
	     
	  });
	
	$("#pan-360-recommended-solutions").click(function(){
		$('#pan-360-recommended-solutions').val(this.checked);
	     
	  });
	
	$("#alibaba-com-recommended-solutions").click(function(){
		$('#alibaba-com-recommended-solutions').val(this.checked);
	     
	  });
	
	$("#super-pages-recommended-solutions").click(function(){
		$('#super-pages-recommended-solutions').val(this.checked);
	     
	  });
		
	/* Section3 */	
	function calculateSection3(){
		
		var advertiserText = $('#advertiser-text').val();
		$('#advertiser-text').val(advertiserText); 
		
		var advertiserText = $('#address-text').val();
		$('#address-text').val(advertiserText); 
		
		var advertiserText = $('#proposal-date').val();
		$('#proposal-date').val(advertiserText); 
		
		var advertiserText = $('#valid-until').val();
		$('#valid-until').val(advertiserText); 
		
		var advertiserText = $('#proposed-amount').val();
		$('#proposed-amount').val(advertiserText); 
		
		var malaysiaPanpagesOptionAInput = 0;
		var googleAdWordsSearchMobileOptionAInput = 0;
		var googleDisplayNetworkOptionAInput = 0;
		var yahooSearchOptionAInput = 0;
		var yahooDisplayOptionAInput = 0;
		var youtubeAdsOptionAInput = 0;
		var facebookAdsOptionAInput = 0;
		var pan360optionAInput = 0;
		var alibabaComOptionAInput = 0; 
		var superPagesOptionAInput = 0;
		var othersOptionAInput = 0;
		var subtotalOptionAInput = 0;
		var govtaxOptionAinput = 0;
		var grandtotalOptionAinput = 0;
		
		if($('#malaysia-panpages-option-A').is(':checked')){
			var malaysiaPanpagesOptionAInputtest = $('#malaysia-panpages-option-A-input').val();
			if (($.isEmptyObject(malaysiaPanpagesOptionAInputtest)) || (!$.isNumeric(malaysiaPanpagesOptionAInputtest))) {
				malaysiaPanpagesOptionAInput = malaysiaPanpagesOptionAInputtest;
				if (!$.isNumeric(malaysiaPanpagesOptionAInputtest)) {
					$("#malaysia-panpages-option-A-input").focus();
					$("#malaysia-panpages-option-A-input").val('');
				}
			} else {
				malaysiaPanpagesOptionAInput = $('#malaysia-panpages-option-A-input').val();
			}
			
		}
		else{
			malaysiaPanpagesOptionAInput = 0;
		}
		
		if($('#google-adWords-search-mobile-option-A').is(':checked')){
			var googleAdWordsSearchMobileOptionAInputtest = $('#google-adWords-search-mobile-option-A-input').val();
			if (($.isEmptyObject(googleAdWordsSearchMobileOptionAInputtest)) || (!$.isNumeric(googleAdWordsSearchMobileOptionAInputtest))) {
				googleAdWordsSearchMobileOptionAInput = 0;
				if (!$.isNumeric(googleAdWordsSearchMobileOptionAInputtest)) {
					$("#google-adWords-search-mobile-option-A-input").focus();
					$("#google-adWords-search-mobile-option-A-input").val('');
				}
			} else {
				googleAdWordsSearchMobileOptionAInput = $('#google-adWords-search-mobile-option-A-input').val();
			}
		}
		else{
			googleAdWordsSearchMobileOptionAInput = 0;
		}
		
		if($('#google-display-network-option-A').is(':checked')){
			var googleDisplayNetworkOptionAInputtest = $('#google-display-network-option-A-input').val();
			if (($.isEmptyObject(googleDisplayNetworkOptionAInputtest)) || (!$.isNumeric(googleDisplayNetworkOptionAInputtest))) {
				googleDisplayNetworkOptionAInput = 0;
				if (!$.isNumeric(googleDisplayNetworkOptionAInputtest)) {
					$("#google-display-network-option-A-input").focus();
					$("#google-display-network-option-A-input").val('');
				}
			} else {
				googleDisplayNetworkOptionAInput = $('#google-display-network-option-A-input').val();
			}
		}
		else{
			googleDisplayNetworkOptionAInput = 0;
		}
		
		if($('#yahoo-search-option-A').is(':checked')){
			var yahooSearchOptionAInputtest = $('#yahoo-search-option-A-input').val();
			if (($.isEmptyObject(yahooSearchOptionAInputtest)) || (!$.isNumeric(yahooSearchOptionAInputtest))) {
				yahooSearchOptionAInput = 0;
				if (!$.isNumeric(yahooSearchOptionAInputtest)) {
					$("#yahoo-search-option-A-input").focus();
					$("#yahoo-search-option-A-input").val('');
				}
			} else {
				yahooSearchOptionAInput = $('#yahoo-search-option-A-input').val();
			}
		}
		else{
			yahooSearchOptionAInput = 0;
		}
		
		if($('#yahoo-display-option-A').is(':checked')){
			var yahooDisplayOptionAInputtest = $('#yahoo-display-option-A-input').val();
			if (($.isEmptyObject(yahooDisplayOptionAInputtest)) || (!$.isNumeric(yahooDisplayOptionAInputtest))) {
				yahooDisplayOptionAInput = 0;
				if (!$.isNumeric(yahooDisplayOptionAInputtest)) {
					$("#yahoo-display-option-A-input").focus();
					$("#yahoo-display-option-A-input").val('');
				}
			} else {
				yahooDisplayOptionAInput = $('#yahoo-display-option-A-input').val();
			}
		}
		else{
			yahooDisplayOptionAInput = 0;
		}
		
		if($('#youtube-ads-option-A').is(':checked')){
			var youtubeAdsOptionAInputtest = $('#youtube-ads-option-A-input').val();
			if (($.isEmptyObject(youtubeAdsOptionAInputtest)) || (!$.isNumeric(youtubeAdsOptionAInputtest))) {
				youtubeAdsOptionAInput = 0;
				if (!$.isNumeric(youtubeAdsOptionAInputtest)) {
					$("#youtube-ads-option-A-input").focus();
					$("#youtube-ads-option-A-input").val('');
				}
			} else {
				youtubeAdsOptionAInput = $('#youtube-ads-option-A-input').val();
			}
		}
		else{
			youtubeAdsOptionAInput = 0;
		}
		
		if($('#facebook-ads-option-A').is(':checked')){
			var facebookAdsOptionAInputtest = $('#facebook-ads-option-A-input').val();
			if (($.isEmptyObject(facebookAdsOptionAInputtest)) || (!$.isNumeric(facebookAdsOptionAInputtest))) {
				facebookAdsOptionAInput = 0;
				if (!$.isNumeric(facebookAdsOptionAInputtest)) {
					$("#facebook-ads-option-A-input").focus();
					$("#facebook-ads-option-A-input").val('');
				}
			} else {
				facebookAdsOptionAInput = $('#facebook-ads-option-A-input').val();
			}
		}
		else{
			facebookAdsOptionAInput = 0;
		}
		
		if($('#pan-360-option-A').is(':checked')){
			var pan360optionAInputtest = $('#pan-360-option-A-input').val();
			if (($.isEmptyObject(pan360optionAInputtest)) || (!$.isNumeric(pan360optionAInputtest))) {
				pan360optionAInput = 0;
				if (!$.isNumeric(pan360optionAInputtest)) {
					$("#pan-360-option-A-input").focus();
					$("#pan-360-option-A-input").val('');
				}
			} else {
				pan360optionAInput = $('#pan-360-option-A-input').val();
			}
		}
		else{
			pan360optionAInput = 0;
		}
		
		if($('#alibaba-com-option-A').is(':checked')){
			var alibabaComOptionAInputtest = $('#alibaba-com-option-A-input').val();
			if (($.isEmptyObject(alibabaComOptionAInputtest)) || (!$.isNumeric(alibabaComOptionAInputtest))) {
				alibabaComOptionAInput = 0;
				if (!$.isNumeric(alibabaComOptionAInputtest)) {
					$("#alibaba-com-option-A-input").focus();
					$("#alibaba-com-option-A-input").val('');
				}
			} else {
				alibabaComOptionAInput = $('#alibaba-com-option-A-input').val();
			}
		}
		else{
			alibabaComOptionAInput = 0;
		}
		
		if($('#super-pages-option-A').is(':checked')){
			var superPagesOptionAInputtest = $('#super-pages-option-A-input').val();
			if (($.isEmptyObject(superPagesOptionAInputtest)) || (!$.isNumeric(superPagesOptionAInputtest))) {
				superPagesOptionAInput = 0;
				if (!$.isNumeric(superPagesOptionAInputtest)) {
					$("#super-pages-option-A-input").focus();
					$("#super-pages-option-A-input").val('');
				}
			} else {
				superPagesOptionAInput = $('#super-pages-option-A-input').val();
			}
		}
		else{
			superPagesOptionAInput = 0;
		}
		
		if($('#others-option-A').is(':checked')){
			var othersOptionAInputtest = $('#others-option-A-input').val();
			if (($.isEmptyObject(othersOptionAInputtest)) || (!$.isNumeric(othersOptionAInputtest))) {
				othersOptionAInput = 0;
				if (!$.isNumeric(othersOptionAInputtest)) {
					$("#others-option-A-input").focus();
					$("#others-option-A-input").val('');
				}
			} else {
				othersOptionAInput = $('#others-option-A-input').val();
			}
		}
		else{
			othersOptionAInput = 0;
		}
		
		subtotalOptionAInput = parseInt(malaysiaPanpagesOptionAInput) + parseInt(googleAdWordsSearchMobileOptionAInput) +
		parseInt(googleDisplayNetworkOptionAInput) + parseInt(yahooSearchOptionAInput) + parseInt(yahooDisplayOptionAInput) +
		parseInt(youtubeAdsOptionAInput) + parseInt(facebookAdsOptionAInput) + parseInt(pan360optionAInput) +
		parseInt(alibabaComOptionAInput) + parseInt(superPagesOptionAInput) + parseInt(othersOptionAInput);
		
		$('#subtotal-option-A-input').val(subtotalOptionAInput);
		
		govtaxOptionAinput = subtotalOptionAInput * 6 / 100;
		$('#gov-tax-option-A-input').val(govtaxOptionAinput);
		
		grandtotalOptionAinput = subtotalOptionAInput + govtaxOptionAinput;
		$('#grand-total-option-A-input').val(grandtotalOptionAinput);
		
		var malaysiaPanpagesOptionBInput = 0;
		var googleAdWordsSearchMobileOptionBInput = 0;
		var googleDisplayNetworkOptionBInput = 0;
		var yahooSearchOptionBInput = 0;
		var yahooDisplayOptionBInput = 0;
		var youtubeAdsOptionBInput = 0;
		var facebookAdsOptionBInput = 0;
		var pan360optionBInput = 0;
		var alibabaComOptionBInput = 0; 
		var superPagesOptionBInput = 0;
		var othersOptionBInput = 0;
		var subtotalOptionBInput = 0;
		var govtaxOptionBinput = 0;
		var grandtotalOptionBinput = 0;
		
		if($('#malaysia-panpages-option-B').is(':checked')){
			var malaysiaPanpagesOptionBInputtest = $('#malaysia-panpages-option-B-input').val();
			if (($.isEmptyObject(malaysiaPanpagesOptionBInputtest)) || (!$.isNumeric(malaysiaPanpagesOptionBInputtest))) {
				malaysiaPanpagesOptionBInput = 0;
				if (!$.isNumeric(malaysiaPanpagesOptionBInputtest)) {
					$("#malaysia-panpages-option-B-input").focus();
					$("#malaysia-panpages-option-B-input").val('');
				}
			} else {
				malaysiaPanpagesOptionBInput = $('#malaysia-panpages-option-B-input').val();
			}
			
		}
		else{
			malaysiaPanpagesOptionBInput = 0;
		}
		
		if($('#google-adWords-search-mobile-option-B').is(':checked')){
			var googleAdWordsSearchMobileOptionBInputtest = $('#google-adWords-search-mobile-option-B-input').val();
			if (($.isEmptyObject(googleAdWordsSearchMobileOptionBInputtest)) || (!$.isNumeric(googleAdWordsSearchMobileOptionBInputtest))) {
				googleAdWordsSearchMobileOptionBInput = 0;
				if (!$.isNumeric(googleAdWordsSearchMobileOptionBInputtest)) {
					$("#google-adWords-search-mobile-option-B-input").focus();
					$("#google-adWords-search-mobile-option-B-input").val('');
				}
			} else {
				googleAdWordsSearchMobileOptionBInput = $('#google-adWords-search-mobile-option-B-input').val();
			}
		}
		else{
			googleAdWordsSearchMobileOptionBInput = 0;
		}
		
		if($('#google-display-network-option-B').is(':checked')){
			var googleDisplayNetworkOptionBInputtest = $('#google-display-network-option-B-input').val();
			if (($.isEmptyObject(googleDisplayNetworkOptionBInputtest)) || (!$.isNumeric(googleDisplayNetworkOptionBInputtest))) {
				googleDisplayNetworkOptionBInput = 0;
				if (!$.isNumeric(googleDisplayNetworkOptionBInputtest)) {
					$("#google-display-network-option-B-input").focus();
					$("#google-display-network-option-B-input").val('');
				}
			} else {
				googleDisplayNetworkOptionBInput = $('#google-display-network-option-B-input').val();
			}
		}
		else{
			googleDisplayNetworkOptionBInput = 0;
		}
		
		if($('#yahoo-search-option-B').is(':checked')){
			var yahooSearchOptionBInputtest = $('#yahoo-search-option-B-input').val();
			if (($.isEmptyObject(yahooSearchOptionBInputtest)) || (!$.isNumeric(yahooSearchOptionBInputtest))) {
				yahooSearchOptionBInput = 0;
				if (!$.isNumeric(yahooSearchOptionBInputtest)) {
					$("#yahoo-search-option-B-input").focus();
					$("#yahoo-search-option-B-input").val('');
				}
			} else {
				yahooSearchOptionBInput = $('#yahoo-search-option-B-input').val();
			}
		}
		else{
			yahooSearchOptionBInput = 0;
		}
		
		if($('#yahoo-display-option-B').is(':checked')){
			var yahooDisplayOptionBInputtest = $('#yahoo-display-option-B-input').val();
			if (($.isEmptyObject(yahooDisplayOptionBInputtest)) || (!$.isNumeric(yahooDisplayOptionBInputtest))) {
				yahooDisplayOptionBInput = 0;
				if (!$.isNumeric(yahooDisplayOptionBInputtest)) {
					$("#yahoo-display-option-B-input").focus();
					$("#yahoo-display-option-B-input").val('');
				}
			} else {
				yahooDisplayOptionBInput = $('#yahoo-display-option-B-input').val();
			}
		}
		else{
			yahooDisplayOptionBInput = 0;
		}
		
		if($('#youtube-ads-option-B').is(':checked')){
			var youtubeAdsOptionBInputtest = $('#youtube-ads-option-B-input').val();
			if (($.isEmptyObject(youtubeAdsOptionBInputtest)) || (!$.isNumeric(youtubeAdsOptionBInputtest))) {
				youtubeAdsOptionBInput = 0;
				if (!$.isNumeric(youtubeAdsOptionBInputtest)) {
					$("#youtube-ads-option-B-input").focus();
					$("#youtube-ads-option-B-input").val('');
				}
			} else {
				youtubeAdsOptionBInput = $('#youtube-ads-option-B-input').val();
			}
		}
		else{
			youtubeAdsOptionBInput = 0;
		}
		
		if($('#facebook-ads-option-B').is(':checked')){
			var facebookAdsOptionBInputtest = $('#facebook-ads-option-B-input').val();
			if (($.isEmptyObject(facebookAdsOptionBInputtest)) || (!$.isNumeric(facebookAdsOptionBInputtest))) {
				facebookAdsOptionBInput = 0;
				if (!$.isNumeric(facebookAdsOptionBInputtest)) {
					$("#facebook-ads-option-B-input").focus();
					$("#facebook-ads-option-B-input").val('');
				}
			} else {
				facebookAdsOptionBInput = $('#facebook-ads-option-B-input').val();
			}
		}
		else{
			facebookAdsOptionBInput = 0;
		}
		
		if($('#pan-360-option-B').is(':checked')){
			var pan360OptionBInputtest = $('#pan-360-option-B-input').val();
			if (($.isEmptyObject(pan360OptionBInputtest)) || (!$.isNumeric(pan360OptionBInputtest))) {
				pan360OptionBInput = 0;
				if (!$.isNumeric(pan360OptionBInputtest)) {
					$("#pan-360-option-B-input").focus();
					$("#pan-360-option-B-input").val('');
				}
			} else {
				pan360OptionBInput = $('#pan-360-option-B-input').val();
			}
		}
		else{
			pan360OptionBInput = 0;
		}
		
		if($('#alibaba-com-option-B').is(':checked')){
			var alibabaComOptionBInputtest = $('#alibaba-com-option-B-input').val();
			if (($.isEmptyObject(alibabaComOptionBInputtest)) || (!$.isNumeric(alibabaComOptionBInputtest))) {
				alibabaComOptionBInput = 0;
				if (!$.isNumeric(alibabaComOptionBInputtest)) {
					$("#alibaba-com-option-B-input").focus();
					$("#alibaba-com-option-B-input").val('');
				}
			} else {
				alibabaComOptionBInput = $('#alibaba-com-option-B-input').val();
			}
		}
		else{
			alibabaComOptionBInput = 0;
		}
		
		if($('#super-pages-option-B').is(':checked')){
			var superPagesOptionBInputtest = $('#super-pages-option-B-input').val();
			if (($.isEmptyObject(superPagesOptionBInputtest)) || (!$.isNumeric(superPagesOptionBInputtest))) {
				superPagesOptionBInput = 0;
				if (!$.isNumeric(superPagesOptionBInputtest)) {
					$("#super-pages-option-B-input").focus();
					$("#super-pages-option-B-input").val('');
				}
			} else {
				superPagesOptionBInput = $('#super-pages-option-B-input').val();
			}
		}
		else{
			superPagesOptionBInput = 0;
		}
		
		if($('#others-option-B').is(':checked')){
			var othersOptionBInputtest = $('#others-option-B-input').val();
			if (($.isEmptyObject(othersOptionBInputtest)) || (!$.isNumeric(othersOptionBInputtest))) {
				othersOptionBInput = 0;
				if (!$.isNumeric(othersOptionBInputtest)) {
					$("#others-option-B-input").focus();
					$("#others-option-B-input").val('');
				}
			} else {
				othersOptionBInput = $('#others-option-B-input').val();
			}
		}
		else{
			othersOptionBInput = 0;
		}
		
		subtotalOptionBInput = parseInt(malaysiaPanpagesOptionBInput) + parseInt(googleAdWordsSearchMobileOptionBInput) +
		parseInt(googleDisplayNetworkOptionBInput) + parseInt(yahooSearchOptionBInput) + parseInt(yahooDisplayOptionBInput) +
		parseInt(youtubeAdsOptionBInput) + parseInt(facebookAdsOptionBInput) + parseInt(pan360optionBInput) +
		parseInt(alibabaComOptionBInput) + parseInt(superPagesOptionBInput) + parseInt(othersOptionBInput);
		
		$('#subtotal-option-B-input').val(subtotalOptionBInput);
		
		govtaxOptionBinput = subtotalOptionBInput * 6 / 100;
		$('#gov-tax-option-B-input').val(govtaxOptionBinput);
		
		grandtotalOptionBinput = subtotalOptionBInput + govtaxOptionBinput;
		$('#grand-total-option-B-input').val(grandtotalOptionBinput);
		
		var termsConditionstext = $("#terms-conditions-text").val();
		$("#terms-conditions-text").val(termsConditionstext);
	}
	
	$( "#advertiser-text" ).blur(function() {
		calculateSection3();
				
    });
	
	$( "#address-text" ).blur(function() {
		calculateSection3();
				
    });
	
	$( "#proposal-date" ).blur(function() {
		calculateSection3();
				
    });
	
	$( "#valid-until" ).blur(function() {
		calculateSection3();
				
    });
	
	$( "#proposed-amount" ).blur(function() {
		calculateSection3();
				
    });
	
	$("#option-A").click(function(){
		if(this.checked){
			calculateSection3();
		}
		else{
			var subtotalOptionAInput = 0;
			$('#subtotal-option-A-input').val(subtotalOptionAInput);
			
			var govtaxOptionAinput = 0;
			$('#gov-tax-option-A-input').val(govtaxOptionAinput);
		}
	  });
	
	$("#malaysia-panpages-option-A").click(function(){
		
			calculateSection3();
		if(!$('#option-A').is(':checked')){
			
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);			
		}
	     
	  });
	
	$("#google-adWords-search-mobile-option-A").click(function(){
		
			calculateSection3();
		
			if(!$('#option-A').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);
			
		} 
	  });
	
	$("#google-display-network-option-A").click(function(){
		
			calculateSection3();
		
			if(!$('#option-A').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);
			
		}
	  });
	
	$("#yahoo-search-option-A").click(function(){
		
			calculateSection3();
			if(!$('#option-A').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);
				
			}
	     
	  });
	
	$("#yahoo-display-option-A").click(function(){
		
			calculateSection3();
			if(!$('#option-A').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);
				
			}
	     
	  });
	
	$("#youtube-ads-option-A").click(function(){
		
			calculateSection3();
			if(!$('#option-A').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#facebook-ads-option-A").click(function(){
		
			calculateSection3();
			if(!$('#option-A').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#pan-360-option-A").click(function(){
		
			calculateSection3();
			if(!$('#option-A').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#alibaba-com-option-A").click(function(){
		
			calculateSection3();
			if(!$('#option-A').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#super-pages-option-A").click(function(){
		
			calculateSection3();
			if(!$('#option-A').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#others-option-A").click(function(){
		
			calculateSection3();
			if(!$('#option-A').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-A-input').val(notCheck);
				
				$('#gov-tax-option-A-input').val(notCheck);
				
				$('#grand-total-option-A-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#option-B").click(function(){
		if(this.checked){
			calculateSection3();
		}
		else{
			var notCheck = 0;
			$('#subtotal-option-B-input').val(notCheck);
			
			$('#gov-tax-option-B-input').val(notCheck);
			
			$('#grand-total-option-B-input').val(notCheck);
		}
	  });
	
	$("#malaysia-panpages-option-B").click(function(){
		
			calculateSection3();
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
	     
	  });
	
	$("#google-adWords-search-mobile-option-B").click(function(){
		
			calculateSection3();
		
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
	  });
	
	$("#google-display-network-option-B").click(function(){
		
			calculateSection3();
		
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
	  });
	
	$("#yahoo-search-option-B").click(function(){
		
			calculateSection3();
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
	     
	  });
	
	$("#yahoo-display-option-B").click(function(){
		
			calculateSection3();
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
	     
	  });
	
	$("#youtube-ads-option-B").click(function(){
		
			calculateSection3();
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#facebook-ads-option-B").click(function(){
		
			calculateSection3();
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#pan-360-option-B").click(function(){
		
			calculateSection3();
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#alibaba-com-option-B").click(function(){
		
			calculateSection3();
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#super-pages-option-B").click(function(){
		
			calculateSection3();
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
		
	     
	  });
	
	$("#others-option-B").click(function(){
		
			calculateSection3();
			if(!$('#option-B').is(':checked')){
				
				var notCheck = 0;
				$('#subtotal-option-B-input').val(notCheck);
				
				$('#gov-tax-option-B-input').val(notCheck);
				
				$('#grand-total-option-B-input').val(notCheck);
				
			}
		
	     
	  });
	
	$( "#terms-conditions-text" ).blur(function() {
		calculateSection3();
				
	        });
	
	$("#malaysia-panpages-option-A-input").blur(function() {
		calculateSection3();
		
	});
	$("#google-adWords-search-mobile-option-A-input").blur(function() {
		calculateSection3();
		
	});
	$("#google-display-network-option-A-input").blur(function() {
		calculateSection3();
		
	});
	$("#yahoo-search-option-A-input").blur(function() {
		calculateSection3();
		
	});
	$("#yahoo-display-option-A-input").blur(function() {
		calculateSection3();
		
	});
	$("#youtube-ads-option-A-input").blur(function() {
		calculateSection3();
		
	});
	$("#facebook-ads-option-A-input").blur(function() {
		calculateSection3();
		
	});
	$("#pan-360-option-A-input").blur(function() {
		calculateSection3();
		
	});
	$("#alibaba-com-option-A-input").blur(function() {
		calculateSection3();
		
	});
	$("#super-pages-option-A-input").blur(function() {
		calculateSection3();
		
	});
	$("#others-option-A-input").blur(function() {
		calculateSection3();
		
	});
	
	$("#malaysia-panpages-option-B-input").blur(function() {
		calculateSection3();
		
	});
	$("#google-adWords-search-mobile-option-B-input").blur(function() {
		calculateSection3();
		
	});
	$("#google-display-network-option-B-input").blur(function() {
		calculateSection3();
		
	});
	$("#yahoo-search-option-B-input").blur(function() {
		calculateSection3();
		
	});
	$("#yahoo-display-option-B-input").blur(function() {
		calculateSection3();
		
	});
	$("#youtube-ads-option-B-input").blur(function() {
		calculateSection3();
		
	});
	$("#facebook-ads-option-B-input").blur(function() {
		calculateSection3();
		
	});
	$("#pan-360-option-B-input").blur(function() {
		calculateSection3();
		
	});
	$("#alibaba-com-option-B-input").blur(function() {
		calculateSection3();
		
	});
	$("#super-pages-option-B-input").blur(function() {
		calculateSection3();
		
	});
	$("#others-option-B-input").blur(function() {
		calculateSection3();
		
	});
	
	/* Section4 */
	$("#add-new").click( function()
	{
		var keywordInput = $("#keyword-input").val();
		
		var avgMonthlysearchesinput = $("#avg-monthly-searches-input").val();
		
		var suggestedBidinput = $("#suggested-bid-input").val();
		
		if(($.isEmptyObject(keywordInput)) || (!$.isNumeric(avgMonthlysearchesinput)) || (!$.isNumeric(suggestedBidinput)))
		{
			if ($.isEmptyObject(keywordInput)) {
				$("#keyword-input").focus();
			} else if (!$.isNumeric(avgMonthlysearchesinput)){
				$("#avg-monthly-searches-input").focus();
				$("#avg-monthly-searches-input").val('');
			} else{
				$("#suggested-bid-input").focus();
				$("#avg-monthly-searches-input").val('');
			}
			return;
		}	
		
		
				
		if(typeof $("#" + keywordInput).val() === "undefined"){
			$('#table-keyword').last().append('<tr><td id="'+keywordInput+'">'+keywordInput+'</td><td id="'+keywordInput+'Col2">'+avgMonthlysearchesinput+'</td><td id="'+keywordInput+'Col3">'+suggestedBidinput+'</td><td><input type="button" value="Delete" class="deleteRowButton"></td></tr>');
			$('#table-keyword').last().append('<hidden'+' id="keyword['+keywordInput+']" name="fields['+keywordInput+']" value="'+keywordInput+','+avgMonthlysearchesinput+','+suggestedBidinput+'"></hidden>');
		}
		else{
			$("#mesage-error-section4").text("This keyword's already existed!");
		}
		
		
		 var rowCount = 0;
		 var sumAvgMonthly  = 0;
		 var sumSuggestedBid = 0;
		 var averageCostperclick = 0;
		 var estClicksassuming = 0;
		 var avgCostperclick = 0;
		 var estMonthlyinvestment100 = 0;
		 var estMonthlyinvestment50 = 0;
		
			
		$('#table-keyword > tbody  >tr').each(function() {
			 if (!this.rowIndex) return; // skip first row
		
			sumAvgMonthly = sumAvgMonthly + parseInt(this.cells[1].innerHTML);
			sumSuggestedBid = sumSuggestedBid + parseFloat(this.cells[2].innerHTML);
			rowCount = parseInt(rowCount) + 1;
			averageCostperclick = (sumSuggestedBid / rowCount).toFixed(2);
		});
		
		$("#total-est-impressions").val(sumAvgMonthly);
		
		$("#average-cost-per-click").val(averageCostperclick);
		
		function calculateSection4()
	    {
			
			var totalEst = $("#total-est-impressions").val();
			
			var assumedCTRforsearchInput = $("#assumed-CTR-for-search").val();
			if ($.isEmptyObject(assumedCTRforsearchInput)) {
				estClicksassuming = "-";
				estMonthlyinvestment100 = "-";
				estMonthlyinvestment50 = "-";
			} else {
				var assumedCTRforsearchOutput = parseInt(assumedCTRforsearchInput.split("%"));
				
				estClicksassuming = totalEst * assumedCTRforsearchOutput / 100;
				
				$("#est-clicks-assuming").val(estClicksassuming);
				
				avgCostperclick = $("#average-cost-per-click").val();
				
				estMonthlyinvestment100 = (avgCostperclick * estClicksassuming).toFixed(2);
				
				$("#est-monthly-investment-100").val(estMonthlyinvestment100);
				
				estMonthlyinvestment50 = (estMonthlyinvestment100 / 2).toFixed(2);
				
				$("#est-monthly-investment-50").val(estMonthlyinvestment50);
			}
			
		    
		}
		
		$("#keyword-input").val('');
		
		$("#avg-monthly-searches-input").val('');
		
		$("#suggested-bid-input").val('');
		
		$('.deleteRowButton').click(DeleteRow);
		
		
		function DeleteRow()
	    {
	      $(this).parents('tr').first().remove();
	      
			var rowCount1 = 0;
			var sumAvgMonthly1  = 0;
			var sumSuggestedBid1 = 0;
			var averageCostperclick1 = 0;
			
				
			$('#table-keyword > tbody  >tr').each(function() {
				 if (!this.rowIndex) return; // skip first row
			
				sumAvgMonthly1 = sumAvgMonthly1 + parseInt(this.cells[1].innerHTML);
				sumSuggestedBid1 = sumSuggestedBid1 + parseFloat(this.cells[2].innerHTML);
				rowCount1 = parseInt(rowCount1) + 1;
				averageCostperclick1 = sumSuggestedBid / rowCount;
			});
			
			$("#total-est-impressions").val(sumAvgMonthly1);
			
			$("#average-cost-per-click").val(averageCostperclick1);
			calculateSection4();
	    }
		
		$( "#assumed-CTR-for-search" ).blur(function() {
			calculateSection4();
					
		        });
		$("#add-new").blur(function() {
			calculateSection4();
			
        });
	});
});