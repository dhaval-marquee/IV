if(!$('body').hasClass('heroSection')) {
	$('body').addClass('heroSection');
	$('.heroSection .prod-hero__content .prod-hero__block p').html('<span class="text-highlight">Shared Storage Solution for</span> Post&nbsp;Production&nbsp;Teams')
	$('.heroSection .prod-hero__content .prod-hero__block-copy').after(`<ul class="prod-hero__block prod-hero__block-list">
		<li><span class="text-highlight">+</span>Purpose Built for Video Editors</li>
		<li><span class="text-highlight">+</span>No IT Knowledge Required</li>
		<li><span class="text-highlight">+</span>Guided Installation Included</li>
		<li><span class="text-highlight">+</span>Designed for Redundancy and Performance</li>
	</ul>
	<a href="#how-to-buy" class="block__margin-top-medium owc-button owc-cta-button block__button block__button-large animate-scroll">Request a Specialist</a>`);
		$('.prod-hero__content').children().wrapAll('<div class="wrap-content">');
		$('.heroSection .prod-hero .prod-hero__content .wrap-content .prod-hero__block .prod-hero__image-container').closest('.prod-hero__block').addClass('HerobgImg');
		$('.prod-hero__content').append($('.heroSection .prod-hero .prod-hero__content .wrap-content .prod-hero__block.HerobgImg'));
	var $Interval = setInterval(function () {
		if($('.heroSection .hs-form-private .form-columns-1 [id*="label-message"] > span')) {
			console.log('etetet', $('.heroSection .hs-form-private .form-columns-1 [id*="label-message"] > span'));
			clearInterval($Interval);
			$('.heroSection .hs-form-private .form-columns-1 [id*="label-message"] > span').text('Requirements and Estimated Number of Users');
			$('.heroSection .jellyfish-contact-form .hs-form-private input[type=submit]').attr('value', 'Request a Specialist')
		}
	},500);
}