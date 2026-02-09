function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_Test')) {
        bodyEle.classList.add('hero_Test');
        
        jQuery(".elementor.elementor-89920 section").each(function (index) {
            jQuery(this).addClass("section" + index);
        });
        jQuery('.elementor.elementor-89920 section.section0').after(`<section class="hero_section">
            <div class="container">
                <div class="hero_inner">
                    <div class="only_mob">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1669295103/Persona_Labs/Homepage_Hero_Test/hero_big_2x.png" alt="Hero Background">
                    </div>
                    <div class="text_wrap">
                        <h1>Take Control of Your Health </h1>
                        <p>Skip the wait. Get fast, accurate and affordable blood tests, so you can get back to what matters most.</p>
                        <a href="https://www.personalabs.com/shop/" class="elementor-button elementor-slide-button elementor-size-sm btn">Shop All Blood Tests</a>
                        <div class="review_wrap">
                            <a href="javascript:void(0)">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1669292399/Persona_Labs/Homepage_Hero_Test/4-5-star_2x.png" alt="4-5 star">
                                <span class="reviews"><strong>4.5/5</strong><span>(1075 reviews)</span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>   
         </section>`);

    }
}
loadTestCode();