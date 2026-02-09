function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homewarrantyreviews_test')) {
        bodyEle.classList.add('homewarrantyreviews_test');
        	
		var divs = document.querySelectorAll('.homewarrantyreviews_test .new_profile_page > section');
		for (var i = 0; i < divs.length; i++) {
			divs[i].classList.add('section_'+i);
		}  
		// section move
		document.querySelector('.homewarrantyreviews_test .new_profile_page .jump_link_list').before(document.querySelector('.homewarrantyreviews_test .section_1'));
		document.querySelector('.homewarrantyreviews_test .rating_block_new_profile').before(document.querySelector('.homewarrantyreviews_test .section_0'));
		var rows = document.querySelectorAll('.homewarrantyreviews_test .section_0 > .row');
		for (var i = 0; i < rows.length; i++) {
			rows[i].classList.add('row_'+i);
		}  
		var cols = document.querySelectorAll('.homewarrantyreviews_test .row_1 > div');
		for (var i = 0; i < cols.length; i++) {
			cols[i].classList.add('col_'+i);
		}

		var emailElam = document.querySelector('.homewarrantyreviews_test .col_0');
		emailElam.classList.remove('col-lg-7');
		emailElam.classList.remove('col-md-6');
		emailElam.classList.add('col-md-12');

		var rowonecol = document.querySelectorAll('.homewarrantyreviews_test .col_0 > div');
		for (var i = 0; i < rowonecol.length; i++) {
			rowonecol[i].classList.add('rowonecol_'+i);
		}
		var subtitle = document.querySelectorAll('.homewarrantyreviews_test .section_2  p');
		for (var i = 0; i < subtitle.length; i++) {
			subtitle[i].classList.add('subtitle_'+i);
		}

		document.querySelector('.homewarrantyreviews_test .new_profile_page .jump_link_list').before(document.querySelector('.homewarrantyreviews_test #OurVerdict'));
		document.querySelector('.homewarrantyreviews_test #OurVerdict').after(document.querySelector('.homewarrantyreviews_test p.subtitle_14'));
		document.querySelector('.homewarrantyreviews_test p.subtitle_14').after(document.querySelector('.homewarrantyreviews_test p.subtitle_15'));

		// Wrap Function
		function wrap(el, wrapper, elmClass) {
			wrapper.className = elmClass;
			el.parentNode.insertBefore(wrapper, el);
			wrapper.appendChild(el);
		}

		if (document.querySelector('.homewarrantyreviews_test .jump_link_list')) wrap(document.querySelector('.homewarrantyreviews_test .jump_link_list'), document.createElement('div'), 'jump_link_list_box');
		document.querySelector('.homewarrantyreviews_test .jump_link_list').after(document.querySelector('.homewarrantyreviews_test .rowonecol_2'));
		if (document.querySelector('.homewarrantyreviews_test .rowonecol_2')) wrap(document.querySelector('.homewarrantyreviews_test .rowonecol_2'), document.createElement('div'), 'new_premium_list_box');
		if (document.querySelector('.homewarrantyreviews_test .new_premium_list_box')) wrap(document.querySelector('.homewarrantyreviews_test .new_premium_list_box'), document.createElement('div'), 'new_premium_rigth_box');

		document.querySelector('.homewarrantyreviews_test .new_premium_list_box').after(document.querySelector('.homewarrantyreviews_test .section_1'));
		document.querySelector('.homewarrantyreviews_test .new_profile_page .rating_block_new_profile').after(document.querySelector('.homewarrantyreviews_test .new_profile_page .ahs_block_prons ul'));
		var rating = document.querySelectorAll('.rating_block_new_profile div');
		for (var i = 0; i < rating.length; i++) {
			rating[i].classList.add('rating_'+i);
		}

		document.querySelector('.homewarrantyreviews_test .new_premium_rigth_box ul').after(document.querySelector('.homewarrantyreviews_test .rating_20'));

		var emailElamm = document.querySelector('.homewarrantyreviews_test .rating_10');
		emailElamm.classList.remove('ml-xl-5');
		emailElamm.classList.remove('pl-md-5');

		//rigth box Choice Home Warranty
		var elemDiv = document.createElement('div');
		elemDiv.classList.add('company_info');
		document.body.appendChild(elemDiv);
		
		document.querySelector('.company_info').insertAdjacentHTML(
			'afterbegin',
			`<div class="text-center">
			<img src="https://www.homewarrantyreviews.com/wp-content/uploads/Lowes_Appliance_Extended_Warranty.jpg" alt=" Choice Home Warranty" width="150" height="100" class="h-auto">
			<p class="company_name">Choice Home Warranty</p>
			<img width="20" height="20" decoding="async" loading="lazy" class="h-auto hwr_star" alt="hwc-logo" src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/star_images/fourhalf_star.svg">
		 </div>
		 <div>
			<div class="horizontal_dotted_line"><span class="premium_content">Customer Reviews</span><span class="dot"></span><span class="premium_val">439</span></div>
			<div class="horizontal_dotted_line"><span class="premium_content">Premium</span><span class="dot"></span><span class="premium_val">$5-$350</span></div>
			<div class="horizontal_dotted_line"><span class="premium_content">Service Fee</span><span class="dot"></span><span class="premium_val">$0</span></div>
			<div class="horizontal_dotted_line"><span class="premium_content">Limit</span><span class="dot"></span><span class="premium_val">Upto item value</span></div>
		   <!--  <div class="horizontal_dotted_line"><span class="premium_content">Activation</span><span class="dot"></span><span class="premium_val">30 Days</span></div> -->
							   <div class="horizontal_dotted_line"><span class="premium_content">Activation</span><span class="dot"></span><span class="premium_val">0 Days</span></div>
						   <div class="horizontal_dotted_line"><span class="premium_content">Cancellation Fee</span><span class="dot"></span><span class="premium_val">Prorated</span></div>
			<div class="text-center mx-4 mx-md-5 mx-xl-5 mx-lg-0 mt-3">
		    <button type="submit" class="Cta_btn btn d-inline-flex w-100" id="get-free">
				  Get Free Quote<img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow" decoding="async" loading="lazy">
			   </button>
			
						   </div>
			<div class=" write_review_block_new"><a href="https://www.homewarrantyreviews.com/consumer-reviews/?cid=NjM0NA==">Write A Review</a></div>
		 </div>`      
		)
		
		var addBeforeThis = document.querySelectorAll('.homewarrantyreviews_test .sidebar_form')[0];
		addBeforeThis.appendChild(elemDiv);

		var section = document.querySelectorAll('.homewarrantyreviews_test .section_2 div');
		for (var i = 0; i < section.length; i++) {
			section[i].classList.add('box_'+i);
		}

		var emailEl = document.querySelector('.homewarrantyreviews_test .box_1');
		emailEl.classList.remove('col-xl-9');
		var emailEl = document.querySelector('.homewarrantyreviews_test .box_70');
		emailEl.classList.remove('col-xl-3');

		if (document.querySelector('.jump_link_list_box .jump_link_list')) wrap(document.querySelector('.jump_link_list_box .jump_link_list'), document.createElement('div'), 'jump_list_left_box');
        
		var serviceEl = document.querySelector('.homewarrantyreviews_test .rating_8');
		serviceEl.classList.remove('col-md-7');

        //Lowe’s btn click
		document.getElementById("get-free").onclick = function () {
			location.href = "https://www.homewarrantyreviews.com/home-warranty-price-estimate/";
		};

        // FAQ section to expand
		let question = document.querySelectorAll(".new_profile_page .guide_block div:first-child");
		question.forEach((qsitem) => {
			qsitem.addEventListener("click", function (e) {
			  //   store the .answer div containing the answer
			  question.forEach((item) => {
				//   remove class "active" except for the currently clicked item
				item != qsitem && item.parentNode.classList.remove("active");
			  });
			  //then toggle the "active" class of clicked item's parent ".qna"
			  this.parentNode.classList.toggle("active");
			});
		});

        // comparison chart
		var comparison = document.createElement('tr');
		comparison.classList.add('comparison');
		document.body.appendChild(comparison);

		document.querySelector('.comparison').insertAdjacentHTML(
			'afterbegin',
			`<td>Lowe’s</td>
			<td>$5 - $350 </td>
			<td>No Deductible </td>
			<td>50</td>
			<td>-</td>
			<td>Not Accredited</td>
			<td><form action="https://www.homewarrantyreviews.com/home-warranty-price-estimate/" method="POST"> <input type="hidden" name="company_name" value="Choice Home Warranty"> <input type="hidden" name="company_id" class="company_id" value="186"> <input type="hidden" name="quote_company_id" class="quote_company_id" value=""> <input type="hidden" name="quote_origin" value=""> <input type="hidden" name="referer_page" value="/companies/choice-home-warranty/"> <input type="hidden" name="offers_quote" value=""> <input type="hidden" name="btn_location" class="btn_location" value="PROFILE_PAGE"> <input type="hidden" name="post_management_id" value="5695790018"> <input type="hidden" name="max_deliveries" value="1"> <input type="hidden" name="domain" value="www.homewarrantyreviews.com"> <input type="hidden" name="path" value="www.homewarrantyreviews.com/companies/choice-home-warranty/"> <input type="hidden" name="url" value="/companies/choice-home-warranty/"> <button class="btn comapre_get_quotE_btn">Get quote </button> </form></td>`      
		);
		var addBeforeThiscomparison = document.querySelectorAll('.hwr_comparison_table tbody')[0];
		addBeforeThiscomparison.appendChild(comparison);

		// Rating box header 
		var reElyy = document.querySelector('.review_rating');
		getreview = reElyy.innerText.replace('Reviews', "");

		var rating = document.createElement('div');
		rating.classList.add('rating_box');
		document.body.appendChild(rating);
		document.querySelector('.rating_box').insertAdjacentHTML(
			'afterbegin',
			`<div class="rating_container d-flex">
			   <div class="rating_left_box"><p>HomeWarrantyReviews.com Rating</p></div>
			   <div class="rating_right_box"><img width="20" height="20" decoding="async" loading="lazy" class="h-auto hwr_star" alt="hwc-logo" src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/star_images/fourhalf_star.svg"></div>
			</div>
			<div class="reviews_box"><p><span class="one"></span>Customer Comments & Reviews - <a href="#reviews_section">see all comments</a></p></div>`      
		);
		var addBeforeThiscomparison = document.querySelectorAll('.box_5')[0];
		addBeforeThiscomparison.appendChild(rating);

		// document.querySelector('.homewarrantyreviews_test .reviews_box p').after(document.querySelector('.new_profile_page .right_rate_block .review_rating'));
        // Dynamically list
		document.querySelector('span.one').innerText = getreview
		// New section added below 
		var service = document.createElement('table');
		service.classList.add('service_box');
		document.body.appendChild(service);
		document.querySelector('.service_box').insertAdjacentHTML(
			'afterbegin',
			`<tbody class="">
				<tr>
				<td>ApplianceReplacementif Unable to Repair</td>
				<td>yes</td>
				</tr>
				<tr>
				<td>Hauling/Recycling of ld Model</td>
				<td>yes</td>
				</tr>
				<tr>
				<td>Repair Appliance Not Bought in Store</td>
				<td>No</td>
				</tr>
				<tr>
				<td>Technician CallOut'Fee</td>
				<td>Free unless the repsicenot covered by the manufacturers warranty or Lowe's Protection lan</td>
				</tr>
			</tbody>`      
		);

		document.querySelector('.covered_table_block').after(document.querySelector('.service_box'));

		// Plan Benefits 
		var Plan = document.createElement('div');
		Plan.classList.add('Plan_box');
		document.body.appendChild(Plan);
		document.querySelector('.Plan_box').insertAdjacentHTML(
			'afterbegin',
			`<h2>Plan Benefits</h2>
			<ul>
			  <li>100% functional parts and labor coverage</li>
			  <li>up to $250 food spoilage protection per incident (CA -- per year) from day one</li>
			  <li>Rental reimbursement from day one on 4-year plans</li>
			  <li>Fast, reliable repairs provided by authorized technicians</li>
			  <li>Covers re-installation costs</li>
			  <li>Power surge protection from day one</li>
			</ul>`      
		);
		document.querySelector('.homewarrantyreviews_test .service_box').after(document.querySelector('.homewarrantyreviews_test .Plan_box'));
        
		//text update
		document.querySelector('.homewarrantyreviews_test .subtitle_23').innerText = "*ea. pricing for each appliance";
		
        //Pros Cons section move

		// document.querySelector('.homewarrantyreviews_test .box_110').before(document.querySelector('.homewarrantyreviews_test .box_35'));
		
		var Pros = document.createElement('ul');
		Pros.classList.add('Pros_box');
		document.body.appendChild(Pros);
		document.querySelector('.Pros_box').insertAdjacentHTML(
			'afterbegin',
			`<li>Offers repair and replacement services</li>
			  <li>Provides power surge protection</li>
			  <li>Offers exclusive reward programs</li>
			  <li>Covers one item per plan</li>
			  <li>Accepts a one-time fee</li>
			  <li>Offers multi-year coverage</li>
			  <li>Doesn't charge a deductible</li>
			  <li>Doesn't require a waiting period</li>`      
		);
		var addBeforePros = document.querySelectorAll('.box_36')[0];
		addBeforePros.appendChild(Pros);

		var covered = document.querySelectorAll('.new_profile_page .covered_table_block');
		for (var i = 0; i < covered.length; i++) {
			covered[i].classList.add('table_'+i);
		}

		document.querySelector('.table_2').after(document.querySelector('.homewarrantyreviews_test .box_35'));

    }
}

loadTestCode();