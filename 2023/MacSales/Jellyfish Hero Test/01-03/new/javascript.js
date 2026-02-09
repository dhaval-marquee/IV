$(document).ready(function () {
	$('body').addClass('heroSection');
	$('.heroSection .prod-hero__content .prod-hero__block p').html('<span class="text-highlight">Network Solution for</span> Business')
	$('.heroSection .prod-hero__content .prod-hero__block-copy').after(`<ul class="prod-hero__block prod-hero__block-list">
		<li><span class="text-highlight">+</span>Secure Remote Access</li>
		<li><span class="text-highlight">+</span>Scalable and Future Proof</li>
		<li><span class="text-highlight">+</span>No IT Knowledge Required</li>
		<li><span class="text-highlight">+</span>Free Guided Installation</li>
	</ul>
	<a href="#how-to-buy" class="block__margin-top-medium owc-button owc-cta-button block__button block__button-large animate-scroll">Get Started</a>`);
	 $('.prod-hero__content').children().wrapAll('<div class="wrap-content">');
	 $('.heroSection .prod-hero .prod-hero__content .wrap-content .prod-hero__block .prod-hero__image-container').closest('.prod-hero__block').addClass('HerobgImg');
	 $('.prod-hero__content').append($('.heroSection .prod-hero .prod-hero__content .wrap-content .prod-hero__block.HerobgImg'));
});