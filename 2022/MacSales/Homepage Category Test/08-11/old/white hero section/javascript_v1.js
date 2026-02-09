function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homepage_test')) {
        bodyEle.classList.add('homepage_test');

        // Put your test code here
        $('h1.heading-visually-hidden').after(`<div class="hero_section hero-unit_dark memory-hero-unit_dark">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667553378/macsales/Homepage_Category_Test/devices_2x.png" alt="OWC Memory">
            <div class="container">
                <div class="hero-unit__content">
                    <h1 class="hero-unit__title">The Most Trusted Name in Apple Storage and Memory Since 1998</h1>
                    <div class="review_wrapper">
                        <a href="https://www.trustpilot.com/review/www.macsales.com?utm_medium=trustbox&amp;utm_source=Mini">
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1667543663/macsales/Homepage_Category_Test/Pilot_star_2x.png" alt="Pilot star">
                            <strong class="no-wrap" id="trust-score">4.7 / 5</strong> <span class="no-wrap">Based on 21,935 reviews</span>
                        </a>
                    </div>
            </div>
            </div>
        </div>`);
        }
    }
    
loadTestCode();