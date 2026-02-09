function loadTestCode() {
    const body = document.body;
    if (!body) return;

    // Mark page once
    if (!body.classList.contains('iv-register')) {
        body.classList.add('iv-register');
    }

    // ---- STYLE (no :has used) ----
    if (!document.getElementById('iv-style')) {
        const styleTag = document.createElement('style');
        styleTag.id = 'iv-style';
        styleTag.textContent = `
        .iv-register :focus-visible {
            outline: none;
        }
        .iv-register .mainHeading {
            color: var(--primary-7);
        }
        .iv-register .highlightedText {
            position: relative;
        }
        .iv-register .highlightedText svg {
            width: 100%;
            height: 30%;
            top: auto;
            bottom: -17%;
            position: absolute;
            left: 0;
            z-index: 0;
            clip-path: inset(0 100% 0 0);
            animation: reveal 1.3s ease-in-out 0.3s forwards;
        }
        @keyframes reveal {
            0% {
                clip-path: inset(0 100% 0 0);
            }
            100% {
                clip-path: inset(0 0 0 0);
            }
        }
        .iv-register main form button[type="submit"]:not([disabled]) {
            font-size: 0;
        }
        .iv-register main form button[type="submit"]:not([disabled])::before {
            content: 'Get Your Free Tutoring Hour!';
            font-size: var(--font-size-lg);
        }
        /* Tutors Section */
        .iv-register .tutorsSection {
            padding-top: 70px;
            padding-bottom: 70px;
        }
        .iv-register .tutorsSection h2 {
            color: var(--primary-7);
            letter-spacing: normal;
            margin-bottom: 46px;
        }
        .iv-register .card {
            box-shadow: 0 5px 10px rgba(0, 0, 0, .1);
            padding: 0 22px 40px;
            height: 100%;
        }
        .iv-register .card .card-icon {
            margin: 0 auto;
            max-width: 250px;
            width: 100%;
        }
        .iv-register .card h3 {
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;
            margin: 5px 0;
        }
        .iv-register .card h3 + p {
            font-size: 14px;
            margin-bottom: 20px;
        }
        .iv-register .starRatingWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            font-size: 14px;
            margin-bottom: 14px;
        }
        .iv-register .starRatingWrapper .stars__icon {
            color: #ffea2f;
            font-size: 24px;
            letter-spacing: -2px;
        }
        .iv-register .splide__pagination__page {
            background: #7FA4EF;
            margin: 5px;
            height: 12px;
            width: 12px;
        }
        .iv-register .splide__pagination__page.is-active {
            background: var(--primary-7);
            transform: none;
        }
        @media(max-width: 1023.98px) {
            .iv-register .splide__track {
                margin-bottom: 1rem;
            }
            .iv-register .splide__pagination {
                bottom: -2rem;
            }
        }
        @media(min-width: 768px) {
            .iv-register .splide {
                margin: -10px;
            }
            .iv-register .splide__track {
                padding: 10px !important;
            }
            .iv-register .card p:last-child {
                font-size: 18px;
                line-height: 1.6;
            }
        }
        @media(max-width: 767.98px) {
            .iv-register .tutorsSection h2 {
                line-height: normal;
                margin-bottom: 30px;
                padding-left: 0;
                padding-right: 0;
            }
            .iv-register .slider-wrapper {
                padding-left: 0;
                padding-right: 0;
            }
            .iv-register .splide__track {
                padding: 2rem !important;
            }
            .iv-register .splide {
                margin: -2rem;
            }
            .iv-register .splide__list {
                padding-right: 1rem !important;
            }
            .iv-register .card h3 + p {
                margin-bottom: 14px;
            }
            .iv-register .starRatingWrapper {
                flex-direction: column;
                gap: 0;
            }
            .iv-register .splide__pagination {
                bottom: -1rem;
            }
        }
        /* Guarantee Section */
        .iv-register .guaranteeSection {
            font-size: 14px;
            line-height: 1.7;
            padding-top: 55px;
            padding-bottom: 55px;
        }
        .iv-register .guaranteeHeading h2 {
            line-height: 1.4;
            letter-spacing: normal;
            margin-bottom: 28px;
        }
        .iv-register .text-pink {
            color: #FD6F8E;
        }
        .iv-register .text-green {
            color: var(--green-5);
        }
        .iv-register .text-yellow {
            color: #EFAE06;
        }
        @media(min-width: 768px) {
            .iv-register .guaranteeHeading .sticky {
                top: calc(var(--header-height-desktop-sticky) + 50px);
            }
            .iv-register .guaranteeHeading p {
                margin-top: 130px;
                max-width: 480px;
            }
        }
        @media(max-width: 767.98px) {
            .iv-register .guaranteeItem h3 {
                line-height: 1.1;
            }
        }
        /* Review Section */
        .iv-register .reviewSection {
            padding-top: 95px;
            padding-bottom: 45px;
        }
        .iv-register .reviewSection h2 {
            color: var(--primary-7);
            letter-spacing: normal;
            margin-bottom: 6px;
        }
        @media(max-width: 1023.98px) {
            .iv-register .reviewSection {
                padding-top: 75px;
            }
        }
        @media(min-width: 768px) {
            .iv-register .reviewSection .CarouselWidget-prefix .CarouselWidget {
                --base-maxwidth: 767px;
                --medium-star-size: 32px;
                --header-heading-font-size: 26px;
                --header-heading-line-height: 1.6;
                --header-subheading-font-size: 18px;
                --header-subheading-line-height: 1.5;
                --item-padding: 2.5em;
                --item-border-radius: 8px;
                --body-text-line-height: 1.7;
                --scroll-button-icon-size: 24px;
                --badge-icon-font-size: 20px;
                --badge-text-font-size: 13px;
                --author-font-size: 18px;
                --x-small-star-size: 24px;
            }
            .iv-register .reviewSection .CarouselWidget-prefix .CarouselWidget .cssVar-header__subheading .cssVar-subheading__number {
                font-weight: bold;
            }
            .iv-register .reviewSection .CarouselWidget-prefix .u-marginBottom--xxs {
                padding-bottom: 3px;
            }
            .iv-register .reviewSection .CarouselWidget-prefix .R-ReviewsioLogo--sm {
                width: 135px;
            }
            .iv-register .reviewSection .CarouselWidget-prefix .R-TextBody--xxxs,
            .iv-register .reviewSection .CarouselWidget-prefix .R-TextBody--xxxxs {
                font-size: 13px;
            }
            .iv-register .reviewSection .CarouselWidget-prefix .R-TextBody--xxxxs {
                margin-bottom: 0 !important;
            }
            .iv-register .reviewSection .CarouselWidget-prefix .CarouselWidget__list > .u-textRight--all {
                display: none;
            }
        }
        @media(max-width: 767.98px) {
            .iv-register .reviewSection {
                padding-top: 45px;
                padding-bottom: 20px;
            }
            .iv-register .reviewSection h2 {
                padding: 0 16px;
                margin-bottom: 20px;
            }
            .iv-register .reviewSection .CarouselWidget-prefix .CarouselWidget {
                --base-maxwidth: 640px;
            }
        }
        /* Ready Section */
        .iv-register .readySection {
            padding-top: 95px;
            padding-bottom: 95px;
        }
        .iv-register .readyContent h2 {
            letter-spacing: normal;
            margin-bottom: 50px;
        }
        .iv-register .readyContent p {
            line-height: 1.3333333;
            margin-bottom: 6px;
        }
        @media(min-width: 1024px) {
            .iv-register .readyContent {
                padding: 50px;
            }
        }
        @media(max-width: 1023.98px) {
            .iv-register .readySection {
                padding-top: 75px;
                padding-bottom: 75px;
            }
            .iv-register .readyContent h2 {
                margin-bottom: 10px;
            }
            .iv-register .readyContent p {
                font-size: 20px;
                line-height: 1.7;
            }
        }
        @media(min-width: 768px) {
            .iv-register .readyContent {
                flex: 1;
            }
            .iv-register .readyResultsBtn {
                max-width: 360px;
                width: 100%;
            }
        }
        @media(max-width: 767.98px) {
            .iv-register .readySection {
                padding-top: 55px;
                padding-bottom: 55px;
            }
        }
        `;
        (document.head || body).appendChild(styleTag);
    }

    // ---- DOM wiring (no :has used) ----
    const mainPlan = document.querySelector('main');
    if (!mainPlan) return;

    // Heading
    if (mainPlan.querySelectorAll('.mainHeading').length == 0) {
        const mainHeading = mainPlan.querySelectorAll('h2')[0];
        mainHeading.classList.add('hidden');
        mainHeading.insertAdjacentHTML('afterend','<h2 class="px-4 text-center text-4xl font-bold leading-9 md:p-0 mainHeading">Get a<span class="inline-block ml-2 mb-2 max-w-fit -rotate-6 rounded-[0.6rem] border-4 border-primary-9 bg-accent-4 px-2 py-1 uppercase text-primary-9 md:mx-2.5 md:my-0 md:text-2xl">FREE</span><br class="block md:hidden">Hour of Tutoring!</h2>');
    }

    // Number 2 bullet
    if (mainPlan.querySelectorAll('.bulletList').length == 0) {
        const bulletList = mainPlan.querySelectorAll('ol li:nth-child(2) > div')[1];
        bulletList.classList.add('hidden');
        bulletList.insertAdjacentHTML('afterend','<div class="space-y-[6px] bulletList"><h3 class="text-lg font-bold leading-[26px]">Get a <span class="highlightedText">FREE<svg viewBox="-400 -55 730 60" preserveAspectRatio="none"><path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#ef6100" pathLength="1" stroke-width="20" fill="none"></path></svg></span> 1 hour session</h3><p class="text-md">Try us out and see progress from the very first session</p></div>');
    }

    // Tutors Section
    if (mainPlan.querySelectorAll('.tutorsSection').length == 0) {
        mainPlan.insertAdjacentHTML('beforeend',`<section class="tutorsSection bg-primary-1">
            <div class="px-8 mx-auto max-w-7xl">
                <h2 class="text-3xl font-bold leading-9 px-2">Meet Our <br class="block md:hidden">Featured Tutors</h2>
                <div class="slider-wrapper px-2">
                    <div class="splide card-slider">
                        <div class="splide__track">
                            <div class="splide__list">
                                <div class="splide__slide">
                                    <div class="card bg-white rounded-2xl text-center">
                                        <div class="card-icon"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/StrideTutoring/RegistrationPage/DerekA.png" alt="Derek A"></div>
                                        <h3>Derek A.</h3>
                                        <p>English, Math, and Science Tutor</p>
                                        <div class="starRatingWrapper">
                                            <div aria-hidden="true" class="R-RatingStars__stars">
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                            </div>
                                            <div class="star-rating__content">(19 reviews)</div>
                                        </div>
                                        <p><em>“My teaching philosophy is that everyone can learn in various ways. I believe in making education fun and relatable using real world examples to be college and career ready.”</em></p>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="card bg-white rounded-2xl text-center">
                                        <div class="card-icon"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/StrideTutoring/RegistrationPage/MayL.png" alt="May L"></div>
                                        <h3>May L.</h3>
                                        <p>Test Prep, Math, and Science Tutor</p>
                                        <div class="starRatingWrapper">
                                            <div aria-hidden="true" class="R-RatingStars__stars">
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                            </div>
                                            <div class="star-rating__content">(89 reviews)</div>
                                        </div>
                                        <p><em>“I have found great work in teaching students from all backgrounds and abilities and enjoy doing it. My approach to teaching is purpose driven, being firm but kind, and patient.”</em></p>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="card bg-white rounded-2xl text-center">
                                        <div class="card-icon"><img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/StrideTutoring/RegistrationPage/PamV.png" alt="Pam V"></div>
                                        <h3>Pam V.</h3>
                                        <p>Math, Business, and Personal Finance Tutor</p>
                                        <div class="starRatingWrapper">
                                            <div aria-hidden="true" class="R-RatingStars__stars">
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                                <i class="stars__icon ricon-percentage-star--100"></i>
                                            </div>
                                            <div class="star-rating__content">(71 reviews)</div>
                                        </div>
                                        <p><em>“I love tutoring math because I want to share my passion for the subject with students. Math may seem intimidating at times, but I believe it’s a fascinating puzzle waiting to be solved.”</em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>`);

        const splideCss = document.createElement('link');
        splideCss.rel = 'stylesheet';
        splideCss.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css';

        document.head.appendChild(splideCss);

        const splideJs = document.createElement('script');
        splideJs.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js';
        splideJs.onload = function () {
            if (typeof Splide !== 'undefined') {
                var cardSlider = new Splide('.card-slider', {
                    perPage: 3,
                    pagination: false,
                    arrows: false,
                    autoplay: false,
                    drag: false,
                    type: 'slide',
                    gap: '32px',
                    breakpoints: {
                        1023: {
                            perPage: 2,
                            pagination: true,
                            drag: true,
                            speed: 1000
                        },
                        767: {
                            perPage: 1,
                            gap: '26px'
                        }
                    }
                });
                cardSlider.mount();
            }
        };

        body.appendChild(splideJs);
    }

    // Guarantee Section
    if (mainPlan.querySelectorAll('.guaranteeSection').length == 0) {
        mainPlan.insertAdjacentHTML('beforeend',`<section class="guaranteeSection bg-primary-7">
            <div class="flex flex-col md:flex-row gap-6 lg:gap-16 px-8 mx-auto max-w-7xl">
                <div class="guaranteeHeading md:w-1/2 text-background md:py-2 md:px-4">
                    <div class="sticky">
                        <h2 class="text-3xl font-bold">We will improve your child’s performance.</h2>
                        <h2 class="text-3xl font-bold">We <span class="highlightedText">guarantee<svg viewBox="-400 -55 730 60" preserveAspectRatio="none"><path style="animation-duration: 1.8s;" d="m -383.25 -6 c 55.25 -22 130.75 -33.5 293.25 -38 c 54.5 -0.5 195 -2.5 401 15" stroke="#FFEA2F" pathLength="1" stroke-width="20" fill="none"></path></svg></span> it.</h2>
                        <p>We stand behind every session because we believe in our tutors and your child’s potential. When you choose K12 Tutoring, you can feel confident knowing we’ve got you covered from day one.</p>
                    </div>
                </div>
                <div class="guaranteeContent md:w-1/2 flex flex-col gap-5 md:px-4">
                    <div class="guaranteeItem bg-white rounded-2xl p-6 md:py-8">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/StrideTutoring/RegistrationPage/Pink-heart.png" alt="Pink Heart">
                        <h3 class="font-bold text-pink text-[24px] leading-9 mt-8 mb-4">Love Your Tutor Guarantee</h3>
                        <p>If your child doesn’t click with their tutor, we’ll find a better match. No stress. No awkwardness. Just the right fit.</p>
                    </div>
                    <div class="guaranteeItem bg-white rounded-2xl p-6 md:py-8">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/StrideTutoring/RegistrationPage/Flower-Green.png" alt="Flower Green">
                        <h3 class="font-bold text-green text-[24px] leading-9 mt-8 mb-4">Progress You Can See</h3>
                        <p>Our tutoring is designed to drive meaningful improvement, whether that’s stronger grades, deeper understanding, or growing confidence in the classroom.</p>
                    </div>
                    <div class="guaranteeItem bg-white rounded-2xl p-6 md:py-8">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/StrideTutoring/RegistrationPage/YellowRight-icon.png" alt="Yellow Right">
                        <h3 class="font-bold text-yellow text-[24px] leading-9 mt-8 mb-4">Try It Risk-Free</h3>
                        <p>Start with a free tutoring session and see the difference for yourself before committing.</p>
                    </div>
                </div>
            </div>
        </section>`);
    }

    // Reviews Section
    if (mainPlan.querySelectorAll('.reviewSection').length == 0) {
        mainPlan.insertAdjacentHTML('beforeend',`<section class="reviewSection bg-green-1">
            <div class="md:px-4 mx-auto max-w-4xl">
                <h2 class="text-center text-3xl font-bold leading-9">Loved by Parents Nationwide</h2>
                <div id="reviewsio-carousel-widget"></div>
            </div>
        </section>`);

        const carousel = document.createElement('link');
        carousel.rel = 'stylesheet';
        carousel.href = 'https://assets.reviews.io/css/widgets/carousel-widget.css?_t=2024112115';

        const reviews = document.createElement('link');
        reviews.rel = 'stylesheet';
        reviews.href = 'https://assets.reviews.io/iconfont/reviewsio-icons/style.css?_t=2024112115';

        document.head.appendChild(carousel);
        document.head.appendChild(reviews);

        const script = document.createElement('script');
        script.src = 'https://widget.reviews.io/carousel-inline-iframeless/dist.js?_t=2024112115';
        script.onload = function () {

            if (typeof carouselInlineWidget !== 'undefined') {
                new carouselInlineWidget('reviewsio-carousel-widget', {
                    /*Your REVIEWS.io account ID:*/
                    store: 'stride-learning',
                    sku: '',
                    lang: 'en',
                    carousel_type: 'default',
                    styles_carousel: 'CarouselWidget--sideHeader--withcards',

                    /*Widget settings:*/
                    options: {
                        general: {
                            /*What reviews should the widget display? Available options: company, product, third_party. You can choose one type or multiple separated by comma.*/
                            review_type: 'company, product, third_party',
                            /*Minimum number of reviews required for widget to be displayed*/
                            min_reviews: '1',
                            /*Maximum number of reviews to include in the carousel widget.*/
                            max_reviews: '20',
                            address_format: 'CITY, COUNTRY',
                            /*Carousel auto-scrolling speed. 3000 = 3 seconds. If you want to disable auto-scroll, set this value to false.*/
                            enable_auto_scroll: 10000,
                        },
                        header: {
                            /*Show overall rating stars*/
                            enable_overall_stars: true,
                            rating_decimal_places: 2,
                        },
                        reviews: {
                            /*Show customer name*/
                            enable_customer_name: true,
                            /*Show customer location*/
                            enable_customer_location: true,
                            /*Show "verified review" badge*/
                            enable_verified_badge: true,
                            /*Show "verified subscriber" badge*/
                            enable_subscriber_badge: true,
                            /*Show "I recommend this product" badge (Only for product reviews)*/
                            enable_recommends_badge: true,
                            /*Show photos attached to reviews*/
                            enable_photos: false,
                            /*Show videos attached to reviews*/
                            enable_videos: true,
                            /*Show when review was written*/
                            enable_review_date: true,
                            /*Hide reviews written by the same customer (This may occur when customer reviews multiple products)*/
                            disable_same_customer: true,
                            /*Minimum star rating*/
                            min_review_percent: 4,
                            /*Show 3rd party review source*/
                            third_party_source: true,
                            /*Hide reviews without comments (still shows if review has a photo)*/
                            hide_empty_reviews: true,
                            /*Show product name*/
                            enable_product_name: true,
                            /*Show only reviews which have specific tags (multiple semicolon separated tags allowed i.e tag1;tag2)*/
                            tags: "",
                            /*Show branch, only one input*/
                            branch: "",
                            enable_branch_name: false,
                        },
                        popups: {
                            /*Make review items clickable (When they are clicked, a popup appears with more information about a customer and review)*/
                            enable_review_popups: false,
                            /*Show "was this review helpful" buttons*/
                            enable_helpful_buttons: false,
                            /*Show how many times review was upvoted as helpful*/
                            enable_helpful_count: false,
                            /*Show share buttons*/
                            enable_share_buttons: false,
                        },
                    },
                    translations: {
                        verified_customer: "Verified Customer",
                    },
                    styles: {
                        /*Base font size is a reference size for all text elements. When base value gets changed, all TextHeading and TexBody elements get proportionally adjusted.*/
                        '--base-font-size': '16px',
                        '--base-maxwidth':'100%',

                        /*Logo styles:*/
                        '--reviewsio-logo-style':'var(--logo-inverted)',

                        /*Star styles:*/
                        '--common-star-color':'#ffca00',
                        '--common-star-disabled-color':'#ffffff',
                        '--medium-star-size':' 22px',
                        '--small-star-size':'19px', /*Modal*/
                        '--x-small-star-size':'16px',
                        '--x-small-star-display':'inline-flex',

                        /*Header styles:*/
                        '--header-order':'1',
                        '--header-width':'220px',
                        '--header-bg-start-color':'var(--primary-7)',
                        '--header-bg-end-color':'#',
                        '--header-gradient-direction':'var(--primary-7)',
                        '--header-padding':'1.5em',
                        '--header-border-width':'0px',
                        '--header-border-color':'rgba(0,0,0,0.1)',
                        '--header-border-radius':'8px',
                        '--header-shadow-size':'0px',
                        '--header-shadow-color':'#',

                        /*Header content styles:*/
                        '--header-star-color':'#ffca00',
                        '--header-disabled-star-color':'inherit',
                        '--header-heading-text-color':'#ffffff',
                        '--header-heading-font-size':'inherit',
                        '--header-heading-font-weight':'inherit',
                        '--header-heading-line-height':'inherit',
                        '--header-heading-text-transform':'inherit',
                        '--header-subheading-text-color':'#ffffff',
                        '--header-subheading-font-size':'inherit',
                        '--header-subheading-font-weight':'300',
                        '--header-subheading-line-height':'inherit',
                        '--header-subheading-text-transform':'inherit',

                        /*Review item styles:*/
                        '--item-maximum-columns':'5',/*Must be 3 or larger*/
                        '--item-background-start-color':'#ffffff',
                        '--item-background-end-color':'#ffffff',
                        '--item-gradient-direction':'',
                        '--item-padding':'1em',
                        '--item-border-width':'0px',
                        '--item-border-color':'rgba(0,0,0,0.1)',
                        '--item-border-radius':'0px',
                        '--item-shadow-size':'10px',
                        '--item-shadow-color':'#',

                        /*Heading styles:*/
                        '--heading-text-color':'#0E1311',
                        '--heading-text-font-weight':'700',
                        '--heading-text-font-family':' inherit',
                        '--heading-text-line-height':' 1.4',
                        '--heading-text-letter-spacing':'0',
                        '--heading-text-transform':'none',

                        /*Body text styles:*/
                        '--body-text-color':'#0E1311',
                        '--body-text-font-weight':'300',
                        '--body-text-font-family':' inherit',
                        '--body-text-line-height':'1.3',
                        '--body-text-letter-spacing':'0px',
                        '--body-text-transform':'inherit',

                        /*Scroll button styles:*/
                        '--scroll-button-icon-color':'#0E1311',
                        '--scroll-button-icon-size':'30px',
                        '--scroll-button-bg-color':'#',

                        '--scroll-button-border-width':'0px',
                        '--scroll-button-border-color':'rgba(0,0,0,0.1)',

                        '--scroll-button-border-radius':'60px',
                        '--scroll-button-shadow-size':'0px',
                        '--scroll-button-shadow-color':'#',
                        '--scroll-button-horizontal-position':'3px',
                        '--scroll-button-vertical-position':'0px',

                        /*Badge styles:*/
                        '--badge-icon-color':'#00794B',
                        '--badge-icon-font-size':'15px',
                        '--badge-text-color':'#0E1311',
                        '--badge-text-font-size':'inherit',
                        '--badge-text-letter-spacing':'inherit',
                        '--badge-text-transform':'inherit',

                        /*Author styles:*/
                        '--author-font-size':'inherit',
                        '--author-font-weight':'inherit',
                        '--author-text-transform':'inherit',

                        /*Product photo or review photo styles:*/
                        '--photo-video-thumbnail-size':'60px',
                        '--photo-video-thumbnail-border-radius':'0px',

                        /*Popup styles:*/
                        '--popup-backdrop-color':'rgba(0,0,0,0.75)',
                        '--popup-color':'#ffffff',
                        '--popup-star-color':'inherit',
                        '--popup-disabled-star-color':'inherit',
                        '--popup-heading-text-color':'inherit',
                        '--popup-body-text-color':'inherit',
                        '--popup-badge-icon-color':'inherit',
                        '--popup-badge-icon-font-size':'19px',
                        '--popup-badge-text-color':'inherit',
                        '--popup-badge-text-font-size':'14px',
                        '--popup-border-width':'0px',
                        '--popup-border-color':'rgba(0,0,0,0.1)',
                        '--popup-border-radius':'0px',
                        '--popup-shadow-size':'0px',
                        '--popup-shadow-color':'rgba(0,0,0,0.1)',
                        '--popup-icon-color':'#0E1311',

                        /*Tooltip styles:*/
                        '--tooltip-bg-color':'#0E1311',
                        '--tooltip-text-color':'#ffffff',
                    },
                });
            }
        };

        body.appendChild(script);
    }

    // Ready Section
    if (mainPlan.querySelectorAll('.readySection').length == 0) {
        mainPlan.insertAdjacentHTML('beforeend',`<section class="readySection mx-auto max-w-7xl text-foreground px-8">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="readyContent">
                    <h2 class="text-3xl font-bold leading-9">Ready to See Results?</h2>
                    <p class="text-[24px]">Your first session is on us. Find your child's perfect tutor and start growing today.</p>
                    <button class="readyResultsBtn inline-flex select-none items-center justify-center ring-inset transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 md:whitespace-nowrap bg-accent-4 text-primary-6 hover:bg-neutral-0 hover:ring-primary-6 min-h-[62px] px-8 text-lg hover:ring-2 font-bold rounded-full mt-6" type="button">Get Your Free Tutoring Hour!</button>
                </div>
                <div class="readyImage">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/StrideTutoring/RegistrationPage/ReadySeeResults.png" alt="Ready See Results image">
                </div>
            </div>
        </section>`);

        document.addEventListener('click', function (e) {
            if (e.target.classList.contains('readyResultsBtn')) {
                e.preventDefault();
                const formContainer = document.querySelectorAll('main section')[0];
                if (formContainer) {
                    const offset = formContainer.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').getBoundingClientRect().height - 20;
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                } else {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    document.addEventListener('click', function (btn) {
        if (btn.target && btn.target.matches('button[type="submit"]')) {
            const waitButtonLoader = setInterval(() => {
                if (!btn.target.disabled) {
                    clearInterval(waitButtonLoader);
                    const form = btn.target.closest('form');
                    var sameEmailText = document.querySelector('section[aria-relevant="additions text"] div div');
                    if (form && form.querySelectorAll('li.text-orange-5').length > 0) {
                        console.log('IV Has Error');
                        return;
                    }
                    setTimeout(() => {
                        if(sameEmailText) {
                            if(sameEmailText.innerText === 'A user with that email is already registered. Please go to login or use another email.') {
                                console.log('IV Has repeat email error');
                            }
                        } else {
                            // event code should be here
                            console.log('IV No Error');
                            // Add the following snippet to trigger this event
                            window.VWO = window.VWO || [];
                            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};

                            VWO.event("createAccountCtaSubmission");
                        }
                    }, 1000);
                }
            }, 100);
        }
    });
}

function runObserver() {
    const bodySelector = 'body';
    function waitForElement(bodySelector, timeout = 10000) {
        return new Promise((resolve, reject) => {
            const element = document.querySelector(bodySelector);
            if (element) {
                resolve(element);
                return;
            }

            const interval = setInterval(() => {
                const element = document.querySelector(bodySelector);
                if (element) {
                    clearInterval(interval);
                    resolve(element);
                }
            }, 100);

            setTimeout(() => {
                clearInterval(interval);
                reject(new Error(`Element not found: ${bodySelector}`));
            }, timeout);
        });
    }

    function executeTest() {
        waitForElement(bodySelector)
            .then((element) => {
                if (element) {
                    loadTestCode();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const observer = new MutationObserver(function (mutations) {
        executeTest();
    });
    const config = {
        subtree: true,
        childList: true
    };
    observer.observe(document, config);
}
runObserver();

var i = 0;
var checkIntervalForObserver = setInterval(() => {
    if(document.querySelector('body') && !document.querySelector('body').classList.contains('iv-register')) {
        setTimeout(() => {
            runObserver();
        }, 10);
        i++;
        if(i > 10000) {
            clearInterval(checkIntervalForObserver);
        }
    }
}, 10);