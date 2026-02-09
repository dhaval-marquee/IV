$(document).ready(function() {
    // Variant 2
	var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('TF_hero_section')) {
        bodyEle.classList.add('TF_hero_section');
		$('.TF_hero_section .cmp-carousel').eq(0).closest('.cmp-container').addClass('d-none').after('<div class="hero_section">\
			<div class="container-fluid container-lg">\
				<div class="px-2 px-md-4">\
					<h1>Are you experiencing <span>allergy symptoms?</span></h1>\
					<p>Our interactive tool guides you through a series of questions to assess symptoms.</p>\
					<a href="https://www.thermofisher.com/allergy/us/en/get-tested.html?wcmmode=disabled&skip_first_page=true" class="blue_cta v2_cta">Get Started</a>\
				</div>\
			</div>\
		</div>');
		$('.TF_hero_section #header #desktopGetTestedButton, .TF_hero_section #mobileHeader .btn-solid-primary button').before('<a href="https://www.thermofisher.com/allergy/us/en/get-tested.html?wcmmode=disabled&skip_first_page=true" class="blue_cta v2_cta">Get Started</a>');
	}
});