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


    }
}

loadTestCode();

