function reviewIV() {
    if (!jQuery('body').hasClass('review_iv')) {
        jQuery('body').addClass('review_iv');

        var getClassInterval = setInterval(function () {
            var $form = jQuery('.free-quote.lmp-form');

            if ($form.length && !$form.parent().hasClass('free-quote-wrapper')) {
                clearInterval(getClassInterval);

                $form.wrap('<div class="free-quote-wrapper"></div>');
                // $form.wrapInner('<div class="free-quote_inner"></div>');
            }
        }, 500);
        
        // Load slick CSS
        jQuery('head').append(
            '<link rel="stylesheet" href="https://www.allied.com/ResourcePackages/Allied/assets/long-distance_dist/js/vendor/slick.css" type="text/css" />'
        );

        var contentPage = "https://www.allied.com/household-moving-company/long-distance-moving";
        $.get(contentPage, function (data) {
            var clonedContent = $(data).find('.slider-testimonials');
            if (clonedContent.length) {
                // Insert AFTER .free-quote.lmp-form
                $('.free-quote-wrapper .lmp-form').after('<div class="js-slider fireGoal"></div>');
                $('.js-slider').append(clonedContent);

                console.log('Content inserted after .free-quote.lmp-form');

                // Now load Slick JS
                $.getScript(
                    "https://www.allied.com/ResourcePackages/Allied/assets/long-distance_dist/js/vendor/slick.js",
                    function () {
                        console.log('Slick script loaded successfully.');
                        initSliders();
                    }
                );

            } else {
                console.error('Section not found in the page.');
            }
        });

        // Slider Init Function
        function initSliders() {
            document.querySelectorAll('.testimonial p').forEach(function (p) {
                p.insertAdjacentHTML('afterend', `
                    <div class="ReadMoreLessButton">
                        <a href="javascript:;" class="readMore">Read more...</a>
                        <a href="javascript:;" class="readLess d-none">Read Less</a>
                    </div>
                `);
            });

            // Toggle logic (scoped to clicked testimonial)
            document.addEventListener("click", function (e) {
                if (e.target.classList.contains("readMore")) {
                    e.preventDefault();
                    let wrapper = e.target.closest('.testimonial');
                    e.target.classList.add("d-none");
                    wrapper.classList.add('testimonialItem');
                    wrapper.querySelector(".readLess").classList.remove("d-none");
                }

                if (e.target.classList.contains("readLess")) {
                    e.preventDefault();
                    let wrapper = e.target.closest('.testimonial');
                    e.target.classList.add("d-none"); // hide current readLess
                    wrapper.classList.remove('testimonialItem');
                    wrapper.querySelector(".readMore").classList.remove("d-none");
                }
            });

            $('.slider__slides').each(function () {
                var $slider = $(this);
                // Destroy if already initialized (prevents double-init)
                if ($slider.hasClass('slick-initialized')) {
                $slider.slick('unslick');
                }
                // Initialize
                $slider.slick({
                    speed: 300,
                    arrows: true,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow:
                        `<button type="button" class="slick-arrow slick-prev" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="transparent" style="
                            fill: transparent;
                        "></rect>
                        <path d="M15 18 L9 12 L15 6" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg></button>`,
                    nextArrow:
                        `<button type="button" class="slick-arrow slick-next" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="transparent"></rect>
                            <path d="M9 6 L15 12 L9 18" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>`,
                    });
                });

            // jQuery('.review_iv .slider-testimonials .shell .slider__clip').after(`<a class="testimonials_btn iv-testimonials-hidden iv-sticky-footer-" href="javascript:;">Get A Free Quote</a>`);

            // scroll to the top of the page when the sticky footer is clicked
            document.addEventListener("click", function (e) {
                if (e.target.classList.contains("testimonials_btn")) {
                    e.preventDefault();
                    
                    const formContainer = document.querySelector(".free-quote-inner");
                    if (formContainer) {
                        const offset = formContainer.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').getBoundingClientRect().height - 20;
                        window.scrollTo({
                            top: offset,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        }

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
                return (
                    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 200
                );
        }

        let hasRun = false; // Flag to ensure it runs only once

        function checkElement() {
            const element = document.querySelector(".fireGoal");
            if (element && isElementInViewport(element) && !hasRun) {
                hasRun = true; // Set flag to true to prevent multiple executions
                // Add the following snippet to trigger this event
                window.VWO = window.VWO || [];
                VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};

                VWO.event("reviewsSectionViewport");
                window.removeEventListener("scroll", checkElement); // Remove event listener after execution
            }
        }

        // Attach scroll event listener
        window.addEventListener("scroll", checkElement);

        // Run check initially in case the element is already in view
        checkElement();

    }
}

reviewIV();