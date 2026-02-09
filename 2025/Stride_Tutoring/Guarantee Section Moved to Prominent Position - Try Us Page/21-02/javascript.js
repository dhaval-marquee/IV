function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-try-us')) {
        document.querySelector('body').classList.add('iv-try-us');

        // Get page URL's
        const url = window.location.href;

        // Desktop and Mobile pages
        const sectionClass = [{
                keywords: ["When You Commit to Us, We Commit to ", "Your Satisfaction, Guaranteed"],
                titleClass: 'iv-guarantee-title',
                contentClass: 'iv-guarantee-content',
                buttonClass: 'iv-guarantee-button'
            },
            {
                keywords: ["See Why Parents and Students ", "Why Families "],
                titleClass: 'iv-review-title',
                contentClass: 'iv-review-content',
                buttonClass: 'iv-review-button'
            }
        ];

        sectionClass.forEach(({
            keywords,
            titleClass,
            contentClass,
            buttonClass
        }) => {
            document.querySelectorAll('h2').forEach(h2 => {
                if (keywords.some(keyword => h2.textContent.trim().includes(keyword))) {
                    const closestRow = h2.closest('.wpb_row');
                    if (closestRow) {
                        closestRow.classList.add(titleClass);

                        let content = closestRow.nextElementSibling;
                        if (content) content.classList.add(contentClass);

                        let button = content?.nextElementSibling;
                        if (button) button.classList.add(buttonClass);
                    }
                }
            });
        });

        const reviewButton = document.querySelector('.iv-review-button');
        const guaranteeTitle = document.querySelector('.iv-guarantee-title');
        const guaranteeContent = document.querySelector('.iv-guarantee-content');

        if (reviewButton && guaranteeTitle && guaranteeContent) {
            reviewButton.insertAdjacentElement('afterend', guaranteeTitle);
            guaranteeTitle.insertAdjacentElement('afterend', guaranteeContent);
        }


        // Mobile page only
        if (url.includes('https://tutoring.k12.com/try-us-mobile/')) {

            const waitForMain = setInterval(() => {
                if (document.querySelector('.main-content .row')) {
                    clearInterval(waitForMain);

                    const sectionClassM = [{
                            keyword: "Meet Our Tutors",
                            className: "iv-meet-section"
                        },
                        {
                            keyword: "FAQs",
                            className: "iv-FAQs-section"
                        },
                    ];

                    document.querySelectorAll('h2').forEach(h2 => {
                        sectionClassM.forEach(({
                            keyword,
                            className
                        }) => {

                            if (h2.textContent.trim().includes(keyword)) {

                                const closestRow = h2.closest('.wpb_row');

                                if (closestRow) {

                                    closestRow.classList.add(className);
                                }
                            }
                        });
                    });

                    const faqSection = document.querySelector('.iv-FAQs-section');
                    const meetSection = document.querySelector('.iv-meet-section');

                    if (faqSection && meetSection) {
                        faqSection.insertAdjacentElement('afterend', meetSection);
                    }

                    if (meetSection && reviewButton) {
                        const clonedButton = reviewButton.cloneNode(true);
                        meetSection.insertAdjacentElement('afterend', clonedButton);
                    }

                    const newReviewbox = `<div class="iv-custom-review vc_col-sm-6 vc_col-xs-12 wpb_column column_container vc_column_container col padding-2-percent top_margin_tablet_15px top_margin_phone_15px inherit_tablet inherit_phone instance-10" data-using-bg="true" data-border-radius="10px" data-shadow="medium_depth" data-padding-pos="all" data-has-bg-color="true" data-bg-color="#f2f2f2" data-bg-opacity="1" data-animation="" data-delay="0" bis_skin_checked="1">
                        <div class="vc_column-inner" bis_skin_checked="1"><div class="column-bg-overlay-wrap column-bg-layer" data-bg-animation="none" bis_skin_checked="1"><div class="column-bg-overlay" style="opacity: 1; background-color: #f2f2f2;" bis_skin_checked="1"></div></div>
                            <div class="wpb_wrapper" bis_skin_checked="1">
                                <blockquote class="nectar_single_testimonial" data-color="default" data-style="small_modern"><div class="inner" data-custom-color="true" style="color: #000000;" bis_skin_checked="1"> <p><span class="open-quote">”</span>Melinda helped my 10th grade son with his Algebra & test. He would have utterly falled without her. She was great. Highly recommend</p><div data-shadow="true" class="image-icon image-icon-custom">VG</div><span class="wrap"><span>Verified Guardian</span></span></div></blockquote>
                            </div> 
                        </div>
                    </div>`;

                    const reviewCurrunt = document.querySelector('.iv-review-content .row_col_wrap_12 .vc_col-sm-6:last-child')
                    if (reviewCurrunt) {
                        reviewCurrunt.insertAdjacentHTML('beforebegin', newReviewbox);
                    }

                }
            }, 500);

        }else{
            const waitForNew = setInterval(() => {
                if (document.querySelector('.iv-review-button .nectar-cta .link_text .text')) {
                    clearInterval(waitForNew)
                    document.querySelector('.iv-review-button .nectar-cta .link_text').href ="https://book.tutoring.k12.com/?_gl=1*igvcgj*_gcl_au*NTU3MjEyMTA2LjE3MzY0MTM1ODM.*_ga*MTQ1OTcwODI1OS4xNzM2NDEzNTg0*_ga_1ME1S0PRBE*MTczODA2MTU4OC4yMS4xLjE3MzgwNjI0NzEuMzEuMC4w";
                    document.querySelector('.iv-review-button .nectar-cta[data-color="white"]').setAttribute('data-color', 'extra-color-gradient-1');
                    document.querySelector('.iv-review-button .nectar-cta .link_text .text').innerHTML = `<span class="char" style="animation-delay: 0s;">C</span><span class="char" style="animation-delay: 0.015s;">h</span><span class="char" style="animation-delay: 0.03s;">e</span><span class="char" style="animation-delay: 0.045s;">c</span><span class="char" style="animation-delay: 0.06s;">k</span> <span class="char" style="animation-delay: 0.075s;">O</span><span class="char" style="animation-delay: 0.09s;">u</span><span class="char" style="animation-delay: 0.105s;">t</span> <span class="char" style="animation-delay: 0.12s;">O</span><span class="char" style="animation-delay: 0.135s;">u</span><span class="char" style="animation-delay: 0.15s;">r</span> <span class="char" style="animation-delay: 0.165s;">T</span><span class="char" style="animation-delay: 0.18s;">u</span><span class="char" style="animation-delay: 0.195s;">t</span><span class="char" style="animation-delay: 0.21s;">o</span><span class="char" style="animation-delay: 0.225s;">r</span><span class="char" style="animation-delay: 0.24s;">s</span>`
                }
            }, 500)
        }
        // Custom review slider slider
        function loadSlickAssets(callback) {
            // Add CSS files
            const slickCSS = document.createElement('link');
            slickCSS.rel = 'stylesheet';
            slickCSS.type = 'text/css';
            slickCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.css';
            document.head.appendChild(slickCSS);

            const slickThemeCSS = document.createElement('link');
            slickThemeCSS.rel = 'stylesheet';
            slickThemeCSS.type = 'text/css';
            slickThemeCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick-theme.css';
            document.head.appendChild(slickThemeCSS);

            // Add jQuery script
            const jQueryScript = document.createElement('script');
            jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
            jQueryScript.onload = () => {
                // Add Slick script after jQuery is loaded
                const slickScript = document.createElement('script');
                slickScript.src = 'https://cdn.jsdelivr.net/npm/slick-carousel/slick/slick.min.js';
                slickScript.onload = callback; // Initialize the slider after all scripts are loaded
                document.body.appendChild(slickScript);
            };
            document.body.appendChild(jQueryScript);
        }
        const sliderData = [{
                reviewText: 'Melinda helped my 10th grade son with his Algebra II test.  He would have utterly failed without her.  She was great.  Highly recommend',
                reviewUser: 'DA',
                reviewUsername: 'Doug A',
            },
            {
                reviewText: 'My daughter improved a lot. I am so thankful we found such a great tutor',
                reviewUser: 'AA',
                reviewUsername: 'Anna A',
            },
            {
                reviewText: 'David is excellent! He gets right into the work. He does a nice job explaining steps of a problem. ',
                reviewUser: 'C',
                reviewUsername: 'Chris',
            },
            {
                reviewText: 'My son loves working with Danielle! He gives her an A+! She is working on reading comprehension with him.',
                reviewUser: 'G',
                reviewUsername: 'Guardian',
            },
            {
                reviewText: 'Very friendly and helpful. My son enjoyed his session and would love reoccurring sessions. He now feels more confident in his math.',
                reviewUser: 'A',
                reviewUsername: 'Anonymous',
            },
            {
                reviewText: 'He took the time to get to know about my child and she already felt more comfortable and a little less shy after their first session.',
                reviewUser: 'G',
                reviewUsername: 'Guardian',
            },
            {
                reviewText: 'She is great with my son and takes the time to teach him in a way he can learn. He has been with her for two months once a week and his grades have improved. ',
                reviewUser: 'CC',
                reviewUsername: 'Chantal C',
            },
            {
                reviewText: 'So fun and engaging! My daughter had a great session reviewing fractions.',
                reviewUser: 'J',
                reviewUsername: 'Julia',
            },
            {
                reviewText: 'I am in school online as well,  today I got caught up with my schooling. I just looked at the time and realized we missed the session.  I apologize so very very much. ',
                reviewUser: 'U',
                reviewUsername: 'Undefined',
            },
            {
                reviewText: 'My son is having a great time with Ms. May L. She is very thorough and provides worksheets for my child to work on. We will continue working with her. ',
                reviewUser: 'U',
                reviewUsername: 'Undefined',
            },
            {
                reviewText: 'She was great and had awesome communication during the tutoring session.',
                reviewUser: 'G',
                reviewUsername: 'Guardian',
            },
            {
                reviewText: "Eve is great! After only 2 sessions, my son has learned a lot. She makes learning fun and he can't wait for his next session. Thanks Eve.",
                reviewUser: 'MM',
                reviewUsername: 'Michele M',
            },
            {
                reviewText: "Thank you helping my son understand more about his advance science topics.",
                reviewUser: 'A',
                reviewUsername: 'Anonymous',
            },
            {
                reviewText: "Tory is the best! She really finds ways to connect with the student and makes the session fun and laid back. She knows how to keep students engaged and on task!",
                reviewUser: 'SS',
                reviewUsername: 'Saundra S',
            },
            {
                reviewText: "Has been so helpful, I can see the difference in my child’s confidence around reading. Has provided great feedback & given tools for us to use at home.",
                reviewUser: 'CH',
                reviewUsername: 'Cherrelle H',
            },
            {
                reviewText: "My son loves her and is very interested.  Stays focused and really loves his time with this teacher.",
                reviewUser: 'PT',
                reviewUsername: 'Paul T',
            },
            {
                reviewText: "Fantastic and patient with my son.",
                reviewUser: 'KN',
                reviewUsername: 'Kevin N',
            },
            {
                reviewText: "Thank you for your help in ELA 7, Mr. Brian! My son was thrilled to see that your availability aligns perfectly with his tutoring schedule.",
                reviewUser: 'MG',
                reviewUsername: 'Mary G',
            },
            {
                reviewText: "I think the tutor is doing an amazing job. My daughter really enjoys her sessions.",
                reviewUser: 'U',
                reviewUsername: 'Undefined',
            },
        ]
        const nextSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#ffffff" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 511.95 511.95" xml:space="preserve" stroke="#ffffff" stroke-width="25.597450000000002">

            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>

            <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M386.235,248.308L140.902,2.975c-4.267-4.053-10.987-3.947-15.04,0.213c-3.947,4.16-3.947,10.667,0,14.827l237.76,237.76 l-237.76,237.867c-4.267,4.053-4.373,10.88-0.213,15.04c4.053,4.267,10.88,4.373,15.04,0.213c0.107-0.107,0.213-0.213,0.213-0.213 l245.333-245.333C390.395,259.188,390.395,252.468,386.235,248.308z"></path> </g> </g> </g>

            </svg>`;

        const prevSvg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#fff" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 511.641 511.641" xml:space="preserve" stroke="#fff" stroke-width="25.582050000000002">

            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>

            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>

            <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M148.32,255.76L386.08,18c4.053-4.267,3.947-10.987-0.213-15.04c-4.16-3.947-10.667-3.947-14.827,0L125.707,248.293 c-4.16,4.16-4.16,10.88,0,15.04L371.04,508.667c4.267,4.053,10.987,3.947,15.04-0.213c3.947-4.16,3.947-10.667,0-14.827 L148.32,255.76z"></path> </g> </g> </g>

            </svg>`

        loadSlickAssets(() => {
            // Build the slider HTML
            const sliderContainer = $('<div class="review-slider"></div>');
            sliderData.forEach(item => {
                const slide = `
                    <div class="slide">
                        <div class="card">
                            <span class="open-quote">”</span>
                            <div class="review-info">
                                <p class="review-text">${item.reviewText}</p>
                                <div class="review-user">
                                    <span class="user-avatar">${item.reviewUser}</span>
                                    <span class="username">${item.reviewUsername}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                sliderContainer.append(slide);
            });

            // Append the slider to the target section
            $('.iv-review-content .left').append(sliderContainer);

            // Initialize Slick Slider
            $('.review-slider').slick({
                dots: true,
                arrows: true,
                slide: '.slide',
                slidesToShow: 3,
                adaptiveHeight: true,
                nextArrow: `<button type="button" class="slick-next">${nextSvg}</button>`,
                prevArrow: `<button type="button" class="slick-prev">${prevSvg}</button>`,
                appendArrows: $('.iv-review-content .left'),
                appendDots: $('.iv-review-content .left'),
                responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });

        });
        document.querySelector('.iv-review-title').classList.add('fireGoal');
        trackingScript();
    }
}
function trackingScript() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 56; // Fires when the element reaches the top of the viewport
    }
    
    function checkElement() {
        const element = document.querySelector(".fireGoal");
        if (element && isElementInViewport(element)) {
            console.log('goal fired');
            // Add the following snippet to trigger this event
            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
    
            VWO.event("guaranteeSectionMoved");
            window.removeEventListener("scroll", checkElement); // Remove event listener after execution
        }
    }
    // Attach scroll event listener
    window.addEventListener("scroll", checkElement);
    
    // Run check initially in case the element is already in view
    checkElement();
}
// Check condition and initialize the code
const checkNewCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkNewCondition);
        loadTestCode();
    }
}, 500);