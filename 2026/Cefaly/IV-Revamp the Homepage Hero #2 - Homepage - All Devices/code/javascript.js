function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-Homepage')) {
        document.querySelector('body').classList.add('iv-Homepage');

        document.querySelector('.iv-Homepage main .hero.hero-slider-single').insertAdjacentHTML('afterend',`<div class="heroSection hero hero-slider-single">
            <div class="hero-slide animated-hero has-mob-bg has-tab-bg" style="background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1768288723/Cefaly/PrimarySecondaryCTAsHero/HomeHeroPageD.jpg);">
                <div class="tablet-bg-container" style="background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1768288723/Cefaly/PrimarySecondaryCTAsHero/HomeHeroPageT.jpg);" aria-hidden="true"></div>
                <div class="mobile-bg-container" style="background-image: url(https://res.cloudinary.com/ignite-visibility/image/upload/v1768301735/Cefaly/PrimarySecondaryCTAsHero/HomeHeroPageM2.jpg);" aria-hidden="true"></div>
            </div>
            <div class="heroContent content">
                <p>discover <br>the power of</p>
                <h1><span>Neuromodulation</span> therapy<br/> for migraine</h1>
                <div class="cta-wrapper heroButtons">
                    <a href="https://www.cefaly.com/products" class="shopNowBtn">Shop Now</a>
                    <a href="https://www.cefaly.com/how-it-works" class="learnMoreBtn">LEARN MORE</a>
                </div>
                <p class="subHeadline">Clinically proven to relieve and prevent migraine symptoms</p>
            </div>
        </div>`);
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);