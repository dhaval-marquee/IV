$(document).ready(function() {
    // Variant 1
	var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('TF_hero_section')) {
        bodyEle.classList.add('TF_hero_section');

		$('.TF_hero_section .cmp-carousel').eq(0).closest('.cmp-container').addClass('d-none').after('<div class="hero_section">\
			<div class="container-fluid container-lg">\
				<div class="px-2 px-md-4">\
					<h1>Ready to Schedule an <span>Allergy Test?</span></h1>\
					<a href="https://www.thermofisher.com/allergy/us/en/blood-testing-allergies/how-to-get-an-allergy-test.html" class="blue_cta v1_cta">Get Started</a>\
				</div>\
			</div>\
		</div>');
		$('.TF_hero_section #header #desktopGetTestedButton, .TF_hero_section #mobileHeader .btn-solid-primary button').before('<a href="https://www.thermofisher.com/allergy/us/en/blood-testing-allergies/how-to-get-an-allergy-test.html" class="blue_cta v1_cta">Get Started</a>');
	}
});