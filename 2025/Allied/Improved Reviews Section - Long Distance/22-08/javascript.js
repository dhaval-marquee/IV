function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-instantQuote')) {
        document.querySelector('body').classList.add('iv-instantQuote');

        jQuery('div.long-distance__hero').after(jQuery('div.slider-testimonials '));
        // Insert buttons after each testimonial paragraph
        document.querySelectorAll('.testimonial p').forEach(function (p) {
            p.insertAdjacentHTML('afterend', `
                <div class="ReadMoreLessButton">
                    <a href="javascript:;" class="readMore">Read more</a>
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
        // Run after DOM is ready
        $(function () {
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
                    slidesToShow: 3,
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
                    responsive: [
                        {
                        breakpoint: 1024,
                            settings: { slidesToShow: 2, slidesToScroll: 1 }
                            },
                        {
                        breakpoint: 768,
                            settings: { slidesToShow: 1, slidesToScroll: 1 }
                        }
                    ]
                });
            });
        });

        
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);