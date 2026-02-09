function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homewarrantyreviews_test')) {
        bodyEle.classList.add('homewarrantyreviews_test');

		document.querySelector('.new_profile_page > section:first-child').classList.add('hero_section');
		document.querySelectorAll('.hero_section img[alt="Lowe’s Appliance Extended Warranty"]')[0].parentNode.remove();

		document.querySelector('.homewarrantyreviews_test .jump_link_list').after(document.querySelector('.new_profile_page h1'))
		document.querySelector('.new_profile_page h1').insertAdjacentHTML('afterend',`<div class="reviews_box"><p><span class="one reviewNumber"></span>Customer Comments & Reviews - <a href="#reviews_section">see all comments</a></p></div>`);

		document.querySelector('.right_side_block .covered_table_block:first-of-type tbody tr:last-child').insertAdjacentHTML('afterend',`
		<tr>
			<td>Appliance Replacement if Unable to Repair</td>
			<td>yes</td>
		</tr>
		<tr>
			<td>Hauling / Recycling of Old Model</td>
			<td>yes</td>
		</tr>
		<tr>
			<td>Repair Appliance Not Bought in Store</td>
			<td>No</td>
		</tr>
		<tr>
			<td>Technician Call Out Fee</td>
			<td>Free unless the repair is not covered by the manufacturer's warranty or Lowe's Protection Plan.</td>
		</tr>`);

		document.querySelector('#Prices').insertAdjacentHTML('beforebegin',`<h2>Plan Benefits</h2>
		<ul>
			<li>100% functional parts and labor coverage</li>
			<li>up to $250 food spoilage protection per incident (CA -- per year) from day one</li>
			<li>Rental reimbursement from day one on 4-year plans</li>
			<li>Fast, reliable repairs provided by authorized technicians</li>
			<li>Covers re-installation costs</li>
			<li>Power surge protection from day one</li>
		</ul>`);

		// Add table row
		document.querySelector('.hwr_comparison_table table tbody tr:last-child').insertAdjacentHTML('afterend',`<tr>
			<td>Lowe’s</td>
			<td>$5 - $350 </td>
			<td>No Deductible </td>
			<td>50</td>
			<td>-</td>
			<td>Not Accredited</td>
			<td>
				<form action="https://www.homewarrantyreviews.com/home-warranty-price-estimate/" method="POST">
					<input type="hidden" name="company_name" value="Choice Home Warranty">
					<input type="hidden" name="company_id" class="company_id" value="186">
					<input type="hidden" name="quote_company_id" class="quote_company_id" value="">
					<input type="hidden" name="quote_origin" value="">
					<input type="hidden" name="referer_page" value="/companies/choice-home-warranty/">
					<input type="hidden" name="offers_quote" value="">
					<input type="hidden" name="btn_location" class="btn_location" value="PROFILE_PAGE">
					<input type="hidden" name="post_management_id" value="5695790018">
					<input type="hidden" name="max_deliveries" value="1">
					<input type="hidden" name="domain" value="www.homewarrantyreviews.com">
					<input type="hidden" name="path" value="www.homewarrantyreviews.com/companies/choice-home-warranty/">
					<input type="hidden" name="url" value="/companies/choice-home-warranty/">
					<button class="btn comapre_get_quotE_btn">Get quote </button>
				</form>
			</td>
		</tr>`);

		document.querySelector('.homewarrantyreviews_test .new_profile_page .list_content_profile:first-child').classList.add('pros_iv');
		document.querySelector('.homewarrantyreviews_test .new_profile_page .list_content_profile:last-child').classList.add('cons_iv')

		document.querySelector('.homewarrantyreviews_test .pros_iv').parentElement.classList.add('mt-5')
		document.querySelector('.homewarrantyreviews_test .pros_iv ul').innerHTML = `<li>Offers repair and replacement services</li>
		<li>Provides power surge protection</li>
		<li>Offers exclusive reward programs</li>
		<li>Covers one item per plan</li>
		<li>Accepts a one-time fee</li>
		<li>Offers multi-year coverage</li>
		<li>Doesn't charge a deductible</li>
		<li>Doesn't require a waiting period</li>`;

		// FAQ section
		document.querySelector('#FAQs').parentNode.classList.add('faq_wrapper');
		document.querySelectorAll('.faq_wrapper .guide_block > div:first-child').forEach(function(eachItem) {
			eachItem.classList.add('faq_que');
			eachItem.classList.remove('d-flex');
			var getHTML = eachItem.innerHTML
			newHTML = "<div class='d-flex'>" + getHTML + "</div>";
			eachItem.innerHTML = newHTML;
		});

		let question = document.querySelectorAll(".new_profile_page .guide_block > div:first-child");
		question.forEach((qsitem) => {
			qsitem.addEventListener("click", function (e) {
			question.forEach((item) => {
				item != qsitem && item.parentNode.classList.remove("active");
			});
			this.parentNode.classList.toggle("active");
			});
		});
		
		// FAQ section over

		// Move form before FAQ
		var getHTML = document.querySelector('.new_profile_page .sidebar_form').innerHTML;
			newHTML = "<div class='mobile_form_wrapper form_block_profile sidebar_form'>" + getHTML + "</div>";
			document.querySelector('.new_profile_page .sidebar_form').innerHTML = newHTML;
		document.querySelector('.faq_wrapper').before(document.querySelector('.mobile_form_wrapper'));


		document.querySelector('.mobile_form_wrapper').before(document.querySelectorAll('.hero_section .list_content_profile')[0].parentNode);
		document.querySelectorAll('#reviews_section h2')[0].textContent = "Lowe's Appliance Extended Warranty User Reviews";
		document.querySelectorAll('#reviews_section h2')[0].parentNode.parentNode.after(document.querySelectorAll('.rating_block_new_profile')[0]);
		document.querySelectorAll('.rating_block_new_profile')[0].classList.add('new_profile_page');
		document.querySelectorAll('.rating_block_new_profile .col-md-7')[0].classList.add('col-md-9');
		document.querySelectorAll('.rating_block_new_profile .col-md-9')[0].classList.remove('col-md-7');
		document.querySelectorAll('.rating_block_new_profile img[alt="review icon"]')[0].parentNode.parentNode.parentNode.remove();

		var checkStickyBar = setInterval(function() {
			if(document.querySelectorAll('.new_profile_page .sidebar_form').length > 0) {
				clearInterval(checkStickyBar);
				document.querySelector('.new_profile_page .sidebar_form').classList.add('right_sticky_bar');
				document.querySelector('.right_sticky_bar').parentElement.classList.remove('col-xl-3');
				document.querySelector('.right_sticky_bar').parentElement.previousElementSibling.classList.remove('col-xl-9');

				document.querySelector('.right_sticky_bar').innerHTML = `
				<div class="company_info">
					<div class="text-center">
						<img src="https://www.homewarrantyreviews.com/wp-content/uploads/Lowes_Appliance_Extended_Warranty.jpg" alt=" Choice Home Warranty" width="150" height="100" class="h-auto">
						<p class="company_name">Lowe's Protection Plan</p>
						<img width="20" height="20" decoding="async" loading="lazy" class="h-auto hwr_star" alt="hwc-logo" src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/star_images/fourhalf_star.svg">
					</div>
					<div>
						<div class="horizontal_dotted_line">
							<span class="premium_content">Customer Reviews</span>
							<span class="dot"></span>
							<span class="premium_val reviewNumber">439</span>
						</div>
						<div class="horizontal_dotted_line">
							<span class="premium_content">Premium</span>
							<span class="dot"></span>
							<span class="premium_val">$5-$350</span>
						</div>
						<div class="horizontal_dotted_line">
							<span class="premium_content">Service Fee</span>
							<span class="dot"></span>
							<span class="premium_val">$0</span>
						</div>
						<div class="horizontal_dotted_line">
							<span class="premium_content">Limit</span>
							<span class="dot"></span>
							<span class="premium_val">Upto item value</span>
						</div>
						<div class="horizontal_dotted_line">
							<span class="premium_content">Activation</span>
							<span class="dot"></span>
							<span class="premium_val">0 Days</span>
						</div>
						<div class="horizontal_dotted_line">
							<span class="premium_content">Cancellation Fee</span>
							<span class="dot"></span>
							<span class="premium_val">Prorated</span>
						</div>
						<div class="text-center mx-4 mx-md-5 mx-xl-5 mx-lg-0 mt-3">
							<button type="submit" class="Cta_btn btn d-inline-flex w-100" id="get-free" onclick="validateform('0','TOP-NAV-HEADER','','')"> Get Free Quote<img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow" decoding="async" loading="lazy">
							</button>
						</div>
						<div class=" write_review_block_new">
							<a href="https://www.homewarrantyreviews.com/consumer-reviews/?cid=NjM0NA==">Write A Review</a>
						</div>
					</div>
				</div>`;
				
				var reElyy = document.querySelector('.review_rating');
				getreview = reElyy.innerText.replace('Reviews', "");
				document.querySelectorAll('.reviewNumber').forEach(function(rating) {
					rating.innerText = getreview
				});
			}
		}, 100);
    }
}

loadTestCode();