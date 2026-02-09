$(document).ready(function() {
    // Variant 2
    $("body").addClass("TF-hero-section-v2");
	var TFGetTestedCTA = `<div class="btn-solid-primary btn-size-small ms-auto d-flex align-items-center order-1 order-xl-2 TF-GetTestedCTA"><a href="https://www.thermofisher.com/allergy/us/en/get-tested.html?wcmmode=disabled&skip_first_page=true" id="desktopGetTestedButton" class="btn m-0">Get Started</a></div>`;
	$('.TF-hero-section-v2 #header #desktopHeader #desktopGetTestedButton').parent('div').addClass('TF-GetTestedCTA')
	$('.TF-hero-section-v2 #header #desktopHeader .TF-GetTestedCTA').after(TFGetTestedCTA);	
	$('.TF-hero-section-v2 #header #desktopHeader .TF-GetTestedCTA > a').addClass('px-0');
	$('.TF-hero-section-v2 #header #desktopHeader .TF-GetTestedCTA:first').remove();
	$('.TF-hero-section-v2 .cmp-carousel .carouselWrapper .slick-slider .cmp-well:first-child .text h2:contains("Your Ally in"), .TF-hero-section-v2 .cmp-carousel .carouselWrapper .slick-slider .cmp-well:first-child .text h2:contains("We Know Allergies")').closest('.carouselWrapper').addClass('TF-heroSec').closest('.cmp-container-inner').removeClass('d-none d-md-block');
	$('.TF-hero-section-v2 .TF-heroSec .slick-slider').slick('unslick');
	$('.TF-hero-section-v2 .TF-heroSec .cmp-well:gt()').remove();	
	$('.TF-hero-section-v2 .TF-heroSec h2 span:eq(0)').text('Are you experiencing ')
	$('.TF-hero-section-v2 .TF-heroSec h2 span:eq(1)').text('allergy symptoms?')
	if(!$('.TF-hero-section-v2 .TF-heroSec .TF-GetTestedCTA').length > 0){
		$('.TF-hero-section-v2 .TF-heroSec h2').after(TFGetTestedCTA).addClass('mb-4');
	}
	var TFMobileGetTestedCTA = `<a href="https://www.thermofisher.com/allergy/us/en/get-tested.html?wcmmode=disabled&skip_first_page=true" class="btn w-100 m-0">Get Started</a>`;
	$('#header #mobileHeader button').parent('.btn-solid-primary').addClass('TF-M-TFGetTestedCTA')
	if(!$('#header #mobileHeader .TF-M-TFGetTestedCTA a.btn').length > 0){
		$('#header #mobileHeader .TF-M-TFGetTestedCTA').append(TFMobileGetTestedCTA)
	}
	$('.TF-hero-section-v2 #header #mobileHeader .TF-M-TFGetTestedCTA button').remove();
	if(!$('.TF-hero-section-v2 .TF-heroSec .TF-subHeading').length > 0) {
		$('.TF-hero-section-v2 .TF-heroSec .TF-GetTestedCTA').before('<p class="TF-subHeading">This interactive tool guides you through a series of questions to assess symptoms.</p>');
	}
});