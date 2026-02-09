function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homewarrantyreviews_test')) {
        bodyEle.classList.add('homewarrantyreviews_test');


	var newElement = document.createElement('p');
    newElement.className = "customer_comments";
    newElement.innerHTML = '446 Customer Comments & Reviews - <a href="#reviews_wrap">see all comments</a>';
    document.querySelector('.single_company_block h1').after(newElement);

	document.querySelector('section p a[href="https://www.homewarrantyreviews.com/"]').parentNode.parentNode.classList.add('methodology');
	document.querySelector('.company_list_block_new').parentNode.classList.add('interested_wrapper');
	document.querySelector('#review_block_new').parentNode.classList.add('review_block_new_wrapper');

		
	// FAQ section
	document.querySelector('#FAQs').parentNode.classList.add('faq_wrapper');

	document.querySelector('.homewarrantyreviews_test .faq_wrapper #FAQs h2').innerHTML = 'FAQs'

	document.querySelectorAll('.faq_wrapper .guide_block > div:first-child').forEach(function(eachItem) {
		eachItem.classList.add('faq_que');
		eachItem.classList.remove('d-flex');
		var getHTML = eachItem.innerHTML
		newHTML = "<div class='d-flex'>" + getHTML + "</div>";
		eachItem.innerHTML = newHTML;
	});

	let question = document.querySelectorAll(".guide_block > div:first-child");
	question.forEach((qsitem) => {
		qsitem.addEventListener("click", function (e) {
		question.forEach((item) => {
			item != qsitem && item.parentNode.classList.remove("active");
		});
		this.parentNode.classList.toggle("active");
		});
	});



	document.querySelector('#coverage+.section_block div.row').classList.add('faq_wrapper');
	document.querySelectorAll('#coverage+.section_block .faq_wrapper div> p:first-child').forEach(function(eachItem1) {
		eachItem1.classList.add('faq_que');
	});

	document.querySelectorAll('#coverage+.section_block .faq_wrapper div > ul').forEach(function(eachItem1) {
		eachItem1.classList.add('ans');
	});
	let question1 = document.querySelectorAll("#coverage+.section_block .faq_wrapper div> p:first-child");
	question1.forEach((qsitem) => {
		qsitem.addEventListener("click", function (e) {
		question1.forEach((item) => {
			item != qsitem && item.parentNode.classList.remove("active");
		});
		this.parentNode.classList.toggle("active");
		});
	});
	// FAQ section over



	var newElement = document.createElement('div');
	newElement.className = "reviews_wrap";
	newElement.id = "reviews_wrap";
	newElement.innerHTML = `<h2>Lowes Appliance Extended Warranty User Reviews</h2>
	<div class="unit_wrapper">
		<span>1.5</span>
		<div claas="wrapper_img">
			<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1673008751/HomeWarrantyReviews/Lowes%20Test/ratingstartsprite_2x.png">
			<a href="#">446 Reviews</a>
		</div>
	</div>`;
	document.querySelector('.review_block_new_wrapper').before(newElement);

	document.querySelector('#review_block_new').after(document.querySelector('.review_box'));

	var newElement = document.createElement('div');
	newElement.className = "free_quote text-center";
	newElement.innerHTML = `<a href="#">Ready to get started? Get protected with your free quote</a>
	<div class="text-center mx-4 mx-md-5 mx-xl-5 mx-lg-0 mt-3 mb-2">
		<button type="submit" class="Cta_btn btn d-inline-flex w-100" id="get-free" onclick="validateform('0','TOP-NAV-HEADER','','')"> Get Free Quote
			<img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow">
		</button>
	</div>
	<a href="#">no credit card required</a>`;
	document.querySelector('.homewarrantyreviews_test .reviews_wrap').before(newElement);



	var newElement = document.createElement('div');
	newElement.className = "free_quote text-center";
	newElement.innerHTML = `<a href="#">Ready to get started? Get protected with your free quote</a>
	<div class="text-center mx-4 mx-md-5 mx-xl-5 mx-lg-0 mt-3 mb-2">
		<button type="submit" class="Cta_btn btn d-inline-flex w-100" id="get-free" onclick="validateform('0','TOP-NAV-HEADER','','')"> Get Free Quote
			<img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow">
		</button>
	</div>
	<a href="#">no credit card required</a>`;
	document.querySelector('.homewarrantyreviews_test .review_box').after(newElement);


    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

	loadTestCode();

	window.addEventListener('resize', function(event) {
		if (window.matchMedia("(min-width: 768px)").matches) {
			location.reload();
		}
	}, true);
} else {
	window.addEventListener('resize', function(event) {
		if (window.matchMedia("(max-width: 767.98px)").matches) {
			location.reload();
		}
	}, true);
}
// Load code just for mobile over