function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homepage_test')) {
        bodyEle.classList.add('homepage_test');

        // Put your test code here
        $('h1.heading-visually-hidden').after(`<div class="hero_section hero-unit_dark memory-hero-unit_dark">
        <picture>
            <source srcset="
                    https://media.owcnow.com/image/upload/h_184,c_fill,f_auto,q_auto/used-macs-header-mobile 1x,
                    https://media.owcnow.com/image/upload/h_184,c_fill,f_auto,q_auto,dpr_2.0/used-macs-header-mobile 2x,
                    https://media.owcnow.com/image/upload/h_184,c_fill,f_auto,q_auto,dpr_2.0/used-macs-header-mobile 3x,
                    " media="(max-width: 767px)">
            <img class="hero-unit__img cld-responsive"
                data-src="https://media.owcnow.com/image/upload/f_auto,q_auto,dpr_auto/used-macs" alt="OWC Memory"
                src="https://media.owcnow.com/image/upload/f_auto,q_auto,dpr_1.0/used-macs">
        </picture>
   <div class="container">
        <div class="hero-unit__content">
                <h1 class="hero-unit__title">The Most Trusted Name in Apple Storage and Memory Since 1998</h1>
                <a href="https://www.trustpilot.com/review/www.macsales.com?utm_medium=trustbox&utm_source=Mini">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667543663/macsales/Homepage_Category_Test/Pilot_star_2x.png"
                        alt="Pilot star">
                    <strong id="trust-score">4.7 / 5</strong> <span>Based on 21,935 reviews</span>
                </a>
            </div>
        </div>
</div>`);
        }
    }
    
    loadTestCode();