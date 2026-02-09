function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('jellyfish_iv')) {
        bodyEle.classList.add('jellyfish_iv');
        
        // Put your test code here
		document.querySelectorAll('.prod-hero__content .prod-hero__block')[2].remove();
		document.querySelector('.prod-hero').insertAdjacentHTML('afterend',`<div class="heroSection">
			<div class="container page-header-hero__grid-hero">
				<div class="page-header-hero__container"
					style="text-align: left; align-items: flex-start; justify-content: flex-end; gap: 10px;">
					<div class="page-header-hero__logo-wrapper">
						<img src="https://media.owcnow.com/image/upload/jellyfish-logo-solo-color-white.svg" alt="">
						<img src="https://media.owcnow.com/image/upload/jellyfish-nameplate.png" alt="">
					</div>
					<div class="page-header-hero__sub-title jellyfish">
						<h1>We are the leaders in post-production workflow.</h1>
					</div>
					<div class="page-header-hero__cta-wrapper btnWrapper">
						<a id="buildYours" class="button__jellyfish-white page-header-hero__cta" href="/solutions/jellyfish/builder" aria-label="Build Yours We are the leaders in post-production workflow.">Build Yours
						</a>
						<a id="learnMore" class="button__jellyfish-white page-header-hero__cta" href="#why"
							aria-label="Learn More We are the leaders in post-production workflow.">Learn More
						</a>
					</div>
				</div>
			</div>
		</div>`);
		document.querySelector('picture img[alt="OWC Jellyfish Logo"]').parentNode.parentNode.parentNode.parentNode.parentNode.id = 'jellyfishOWC';
		
		document.querySelector('.btnWrapper').before(document.querySelector('.prod-hero .prod-hero__block-copy'));

		$(document).ready(function () {

            function scrollToSection(target, offset) {
                $('html, body').animate({
                    scrollTop: $(target).offset().top - offset
                }, 1500);
            }

            $("#learnMore").click(function (e) {
                e.preventDefault();
                scrollToSection("#jellyfishOWC", 0);
            });

            $("#buildYours").click(function (e) {
                e.preventDefault();
                scrollToSection("#how-to-buy", 56);
            });

        });
	
    }
}
loadTestCode();
