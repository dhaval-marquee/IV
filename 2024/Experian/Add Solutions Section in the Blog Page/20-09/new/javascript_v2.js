function loadTestCode() {
    if (!jQuery('body').hasClass('blog_iv')) {
        jQuery('body').addClass('blog_iv');
		if(jQuery('.newAdded').length == 0) {
			jQuery('.spotlightBlock div[data-analytics="spotlight-block"]').prepend(`<div class="exp-solid-bg--gray text-break py-20 px-15 mb-20 rounded newAdded">
				<h2 class="h3">We have solutions for every stage of the patient journey.</h2>
				<ul class="p-0 mt-3 mb-4" style="list-style: none;">
					<li class="my-2">Revenue Cycle Management</li>
					<li class="my-2">Patient Engagement</li>
					<li class="my-2">Data and Analytics</li>
					<li class="my-2">Regulatory Solutions</li>
				</ul>
				<a href="https://www.experian.com/healthcare/#contact" class="btn btn-exp-dark-blue mt-5 mb-5">Request Demo</a>
			</div>`);
		}
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);