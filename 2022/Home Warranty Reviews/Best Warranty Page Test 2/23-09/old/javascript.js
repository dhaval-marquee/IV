function loadCode() {
		
	if (!$('body').hasClass('hwr_home')) {
		$('body').addClass('hwr_home');

		$('.hwr_home .company_list .company_top_block > .row > div:last-child form .input-group').remove();
		$('.hwr_home .company_list .company_top_block > .row > div:last-child form .btn_location').val('_v1');

		/* Choice Home Warranty */
		var home_list_arr = ['Offers free roof leak coverage', '90-Day parts guarantee and 30-day labor guarantee', 'Coverage without extra fee for homes up to 5000 sq. ft.', 'Free cancellation up 30 days'];
		var home_lists = '';
		for (i = 0; i < home_list_arr.length; i++) {
			home_lists += `<li>${home_list_arr[i]}</li>`;
		}
		$('#choice-home-warranty + .company_list .company_top_block ul').html(home_lists);

		$('.hwr_home #choice-home-warranty + .company_list .company_top_block > .row > div').first().append('<a class="hwr-review-link" href="https://www.homewarrantyreviews.com/companies/choice-home-warranty/">Read Our Choice Home Warranty Review</a>');

		/* American Home Shield */
		var american_list_arr = ['Offers generous coverage caps', 'Provides customizable options on deductibles', 'Covers undetectable pre-existing conditions', 'In the business for over 5 decades'];
		var american_lists = '';
		for (i = 0; i < american_list_arr.length; i++) {
			american_lists += `<li>${american_list_arr[i]}</li>`;
		}
		$('#american-home-shield + .company_list .company_top_block ul').html(american_lists);

		$('.hwr_home #american-home-shield + .company_list .company_top_block > .row > div').first().append('<a class="hwr-review-link" href="https://www.homewarrantyreviews.com/companies/american-home-shield-ahs/">Read Our American Home Shield Review</a>');

		/* ServicePlus Home Warranty */
		var serviceplus_list_arr = ['Service guarantee of 90 days', '24-7 Online customer portal', 'No limitations on claims', 'Reputation for customer service'];
		var serviceplus_lists = '';
		for (i = 0; i < serviceplus_list_arr.length; i++) {
			serviceplus_lists += `<li>${serviceplus_list_arr[i]}</li>`;
		}
		$('#service-plus-home-warranty + .company_list .company_top_block ul').html(serviceplus_lists);

		$('.hwr_home #service-plus-home-warranty + .company_list > .company_list_bottom > .company_top_block > .row > div').first().append('<a class="hwr-review-link" href="https://www.homewarrantyreviews.com/companies/service-plus-home-warranty/">Read Our Service Plus Review</a>');

		/* Select Home Warranty */
		var shw_list_arr = ['Offers coverage for mobile homes', 'Same-day response on service requests', 'Discounts for multi-year plans', '24-7 customer support'];
		var shw_lists = '';
		for (i = 0; i < shw_list_arr.length; i++) {
			shw_lists += `<li>${shw_list_arr[i]}</li>`;
		}
		$('#select-home-warranty + .company_list .company_top_block ul').html(shw_lists);

		$('.hwr_home #select-home-warranty + .company_list > .company_list_bottom > .company_top_block > .row > div').first().append('<a class="hwr-review-link" href="https://www.homewarrantyreviews.com/companies/select-home-warranty/">Read Our Select Home Warranty Review</a>');

		/* Liberty Home Guard */
		var liberty_list_arr = ['Workmanship grantee of 60 days', 'Provides extensive add-on coverage', 'Offers coverage without a maintenance record', 'Accredited with an A- BBB rating'];
		var liberty_lists = '';
		for (i = 0; i < liberty_list_arr.length; i++) {
			liberty_lists += `<li>${liberty_list_arr[i]}</li>`;
		}
		$('#Liberty-Home-Guard + .company_list .company_top_block ul').html(liberty_lists);

		$('.hwr_home #Liberty-Home-Guard + .company_list > .company_list_bottom > .company_top_block > .row > div').first().append('<a class="hwr-review-link" href="https://www.homewarrantyreviews.com/companies/liberty-home-guard/">Read Our Liberty Home Guard Warranty Review</a>');

		/* America’s Preferred Home Warranty */
		var aphw_list_arr = ['Pick your contractor', 'Perfect for Apartments or rental homes', 'Offers roof leak coverage', 'Multiple deductible options'];
		var aphw_lists = '';
		for (i = 0; i < aphw_list_arr.length; i++) {
			aphw_lists += `<li>${aphw_list_arr[i]}</li>`;
		}
		$('#aphw + .company_list .company_top_block ul').html(aphw_lists);

		$('.hwr_home #aphw + .company_list > .company_list_bottom > .company_top_block > .row > div').first().append('<a class="hwr-review-link" href="https://www.homewarrantyreviews.com/companies/aphw/">Read Our America’s Preferred Home Warranty Review</a>');

		/* HSA Home Warranty */
		var hsa_list_arr = ['Home inspection is not required', 'Basic plan includes major systems & appliances', 'Online customer support portal included', 'Code Violation coverage available'];
		var hsa_lists = '';
		for (i = 0; i < hsa_list_arr.length; i++) {
			hsa_lists += `<li>${hsa_list_arr[i]}</li>`;
		}
		$('#hsa + .company_list .company_top_block ul').html(hsa_lists);

		$('.hwr_home #hsa + .company_list > .company_list_bottom > .company_top_block > .row > div').first().append('<a class="hwr-review-link" href="https://www.homewarrantyreviews.com/companies/hsa-home-warranty/">Read Our HSA Home Warranty Review</a>');

		/* Home Warranty Of America */
		var hwa_list_arr = ['30 day money-back guarantee', 'Standard 13 month plans (extra one month coverage)', 'No home inspection required', 'No waiting period for real estate coverage'];
		var hwa_lists = '';
		for (i = 0; i < hwa_list_arr.length; i++) {
			hwa_lists += `<li>${hwa_list_arr[i]}</li>`;
		}
		$('#hwa + .company_list .company_top_block ul').html(hwa_lists);

		$('.hwr_home #hwa + .company_list > .company_list_bottom > .company_top_block > .row > div').first().append('<a class="hwr-review-link" href="https://www.homewarrantyreviews.com/companies/home-warranty-of-america/">Read Our Home Warranty of America Warranty Review</a>');

		/* First American Home Warranty */
		var fahw_list_arr = ['No home inspection required', 'Unlimited service calls over the year', 'Covers building & improper installation repairs', 'Real Estate professional specific plans available'];
		var fahw_lists = '';
		for (i = 0; i < fahw_list_arr.length; i++) {
			fahw_lists += `<li>${fahw_list_arr[i]}</li>`;
		}
		$('#fahw + .company_list .company_top_block ul').html(fahw_lists);

		$('.hwr_home #fahw + .company_list > .company_list_bottom > .company_top_block > .row > div').first().append('<a class="hwr-review-link" href="https://www.homewarrantyreviews.com/companies/first-american-home-warranty/">Read Our First American Home Warranty Review</a>');

		/* Cinch Home Services */
		var chs_list_arr = ['180 day workmanship guarantee', 'Provides free water sensor to detect leaks', 'Has a digital dashboard for customers', 'Over 40 years in business'];
		var chs_lists = '';
		for (i = 0; i < chs_list_arr.length; i++) {
			chs_lists += `<li>${chs_list_arr[i]}</li>`;
		}
		$('#cinch-home-service + .company_list .company_top_block ul').html(chs_lists);

		$('.hwr_home #cinch-home-service + .company_list > .company_list_bottom > .company_top_block > .row > div').first().append('<a class="hwr-review-link" href="https://www.homewarrantyreviews.com/companies/cinch-home-services/">Read Our Cinch Home Services Warranty Review</a>');


		$('.hwr_home .company_list .company_list_bottom form input[name="btn_location"]').each(function(){
			var getVal = $(this).attr('value');
			$(this).attr('value',getVal+'_V1');	

			console.log(getVal)
		});

	}
}

var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        loadCode();
    }
}, 100);