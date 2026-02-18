function addSlickAssetsToHead(callback) {
    const head = document.head;

    ['https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css',
     'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'
    ].forEach(href => {
        const l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = href;
        head.appendChild(l);
    });

    const jq = document.createElement('script');
    jq.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
    jq.onload = () => {
        const slick = document.createElement('script');
        slick.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
        slick.onload = callback;
        head.appendChild(slick);
    };
    head.appendChild(jq);
}

function initializeSlider() {
    $('.iv-slides').on('init', function(event, slick){
        $(this).trigger('afterChange', [slick, 0]);
    });

    $('.iv-slides').on('afterChange', function(event, slick, currentSlide){
    const $slider = $(this);

    $slider.find('.iv-arrow.left').toggle(currentSlide !== 0);
    $slider.find('.iv-arrow.right').toggle(currentSlide !== slick.slideCount - slick.options.slidesToShow);
    });
    
    $('#ivHeroSlider .iv-slides').slick({
        dots: true,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        prevArrow: `<button class="iv-arrow left" aria-label="Previous Slide"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 24 24"><path d="M18 4 L10 12 L18 20" stroke="currentColor" stroke-width="2" fill="none" ></path></svg></button>`,
        nextArrow: `<button class="iv-arrow right" aria-label="Next Slide"><svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 24 24"><path d="M8 4L16 12L8 20" stroke="currentColor" stroke-width="2" fill="none" ></path></svg></button>`,
        customPaging: function (slider, i) {
            return '<button class="iv-dot" data-slide="' + i + '"></button>';
        }
    });
}

function loadTestCode() {
    if (!document.body.classList.contains('iv-revamp-hero')) {
        document.body.classList.add('iv-revamp-hero');

        const ivHeroSlider = `
        <div class="iv-hero-slider" id="ivHeroSlider">
            <div class="iv-slider-container">
                <div class="iv-slides">
                    <div class="iv-slide">
                        <div class="iv-slide-1"></div>
                    </div>
                    <div class="iv-slide">
                        <div class="iv-slide-2">
                            <div class="iv-slide-2-wrapper"> 
                                <div class="iv-slider2-content">
                                    <div class="iv-slide2-banner-buttons">    
                                        <a href="javascript:void(0)" class="button orange-background uppercase fancybox iv-hero-slide2-btn">Try For Free</a> 
                                        <span class="iv-credit-requird">No credit card required</span>
                                    </div>
                                    <h2 class="h2 orange capitalize">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <span>Over 630 Local 5-Star Reviews</span>
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        const freeFitness = document.querySelector('#free-fitness-consultation');
        if (freeFitness && !document.querySelector('#ivHeroSlider')) {
            freeFitness.insertAdjacentHTML('beforebegin', ivHeroSlider);
        }

        // Move ivSlide1
        const ivSlide1 = document.querySelector('section.banner-module');
        const slidesContainer = document.querySelector('.iv-slide-1');

        if (ivSlide1 && slidesContainer) {
            slidesContainer.appendChild(ivSlide1);

            const container = ivSlide1.querySelector('.fourteen-hundred');
            if (container && !document.querySelector('.hero_right') && !document.querySelector('.hero_left')) {
                const heroLeft = document.createElement('div');
                heroLeft.className = 'hero_left';

                const heroRight = document.createElement('div');
                heroRight.className = 'hero_right';

                const headings = container.querySelectorAll('h2');
                const bannerButtons = container.querySelectorAll('.banner-buttons');

                headings.forEach(h2 => heroLeft.appendChild(h2));
                bannerButtons.forEach(btn => heroLeft.appendChild(btn));

                heroRight.innerHTML = `<iframe src="https://www.youtube.com/embed/Dg49_AtZUiU" frameborder="0" allowfullscreen></iframe>`;
                container.appendChild(heroLeft);
                container.appendChild(heroRight);
            }
        }

        const triggerBtn = document.querySelector('.iv-hero-slide2-btn');
        const targetBtn = document.querySelector('header [href="#try-for-free"]');

        if (triggerBtn && targetBtn) {
            triggerBtn.addEventListener('click', (e) => { 
                if (targetBtn) { 
                    targetBtn.click();
                } 
            });
        }

        // Load Slick assets and initialize the slider
        addSlickAssetsToHead(initializeSlider);

    }
}
loadTestCode();
