function beforeAfter() {
    if (!document.body.classList.contains('before_after_demo_slider')) {
        document.body.classList.add('before_after_demo_slider');

        // unslick sliders
        const secondarySlider = document.querySelectorAll('.amw-gallery-carousel--secondary .amw-gallery-carousel__inner');
        const primarySlider = document.querySelector('.amw-gallery-carousel--primary .amw-gallery-carousel__inner');

        if (window.jQuery) {
            secondarySlider.forEach(slider => {
                if (slider.classList.contains('slick-initialized')) {
                    window.jQuery(slider).slick('unslick');
                }
            });

            if (primarySlider && primarySlider.classList.contains('slick-initialized')) {
                window.jQuery(primarySlider).slick('unslick');
            }


            // Added new slider
            const beforeAfterHTML = `
                <div class="amw-gallery-carousel__img-container js-carousel-item iv-new-1" data-index="5">
                    <div class="clear amw-content-component amw-content-component--extended before-after-section">
                        <div class="before-after-wrapper">
                            <div class="before-after-item">
                                <a href="#" role="button">
                                    <div class="image-container">
                                        <img class="image-after slider-image"
                                            src="https://www.amway.com/medias/art-01-dpb-VitCHA3After-m.jpg?context=bWFzdGVyfHJvb3R8MjMyODQ3fGltYWdlL2pwZWd8aDJhL2g3OS85NDE4NTMzOTk0NTI2LmpwZ3w4MTRiNWM3MTNlNWFkMWNhMzljMDkyMjM1ZDYxZmRjMGZiMWMyNDViOTBlODE5NDk3ODU0ZTI4YjFkMjE0M2Ey"
                                            alt="black and white" />
                                        <img class="image-before slider-image"
                                            src="https://www.amway.com/medias/art-01-dpb-VitCHA3Before-m.jpg?context=bWFzdGVyfHJvb3R8MjIwNDkzfGltYWdlL2pwZWd8aDhkL2g2OC85NDE4NTMzOTI4OTkwLmpwZ3w4ZDcyMzNhYTVlZmM2ZWMyNTY2NTEwOGJlN2M0MWNjMDRjMjFlMjFkYjgyZmZmMGY0ZjIxZTJhMjkzMTBlN2Zl"
                                            alt="color photo" />
                                    </div>
                                </a>
                                <input type="range" min="0" max="100" value="50" aria-label="Percentage of before photo shown"
                                    class="slider" />
                                <div class="slider-line" aria-hidden="true"></div>
                                <div class="slider-button" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                        viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="16"></line>
                                        <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="16"></line>
                                        <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="16"></polyline>
                                        <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="16"></line>
                                        <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="16"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="amw-gallery-carousel__img-container js-carousel-item iv-new-2" data-index="6">
                    <div class="clear amw-content-component amw-content-component--extended before-after-section">
                        <div class="before-after-wrapper">
                            <div class="before-after-item">
                                <a href="#" role="button">
                                    <div class="image-container">
                                        <img class="image-after slider-image"
                                            src="https://www.amway.com/medias/art-00-dpb-VitCHA3Before-m.jpg?context=bWFzdGVyfHJvb3R8NTc0OTY4fGltYWdlL2pwZWd8aDA4L2hjNy85NDE4NTM0MDYwMDYyLmpwZ3xkMDExMzYyODM4NDA5YjA3ZTAxZjNlNTZhNWFjZWU4NDU4MzY3N2Y1ODgzMTQxZTM0MTFkMDBjNzQ1ZWRjYjM3"
                                            alt="black and white" />
                                        <img class="image-before slider-image"
                                            src="https://www.amway.com/medias/art-00-dpb-VitCHA3After-m.jpg?context=bWFzdGVyfHJvb3R8NTY2Mjg5fGltYWdlL2pwZWd8aDI4L2gzOC85NDE4NTM0MTI1NTk4LmpwZ3xmY2QzMDY4NTA2YTA0ZTljOTJiZGEzMTA1ZGMyNjFhZmQzNzdhYjAwMmEzNTI3NGRhMmM4NWVjZjcwYzI3ZTNk"
                                            alt="color photo" />
                                    </div>
                                </a>
                                <input type="range" min="0" max="100" value="50" aria-label="Percentage of before photo shown"
                                    class="slider" />
                                <div class="slider-line" aria-hidden="true"></div>
                                <div class="slider-button" aria-hidden="true">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                        viewBox="0 0 256 256">
                                        <rect width="256" height="256" fill="none"></rect>
                                        <line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="16"></line>
                                        <line x1="96" y1="128" x2="16" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="16"></line>
                                        <polyline points="48 160 16 128 48 96" fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="16"></polyline>
                                        <line x1="160" y1="128" x2="240" y2="128" fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="16"></line>
                                        <polyline points="208 96 240 128 208 160" fill="none" stroke="currentColor" stroke-linecap="round"
                                            stroke-linejoin="round" stroke-width="16"></polyline>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            secondarySlider.forEach((secSlider, index) => {
                if (secSlider && !secSlider.querySelector('.iv-new-1') && !secSlider.querySelector('.iv-new-2')) {
                    secSlider.insertAdjacentHTML('beforeend', beforeAfterHTML);
                    document.querySelector('.js-image-gallery-component .amw-gallery-carousel__icons-control + div > div:nth-child(2)').style.display = 'none';
                }

                if (primarySlider && !primarySlider.querySelector('.iv-new-1') && !primarySlider.querySelector('.iv-new-2')) {
                    primarySlider.insertAdjacentHTML('beforeend', beforeAfterHTML);
                    document.querySelector('.js-image-gallery-component .amw-gallery-carousel__icons-control + div > div:nth-child(2)').style.display = 'none';
                }

                const modalSlider = document.querySelector('.iziModal-content .js-zoom-image-gallery-container .amw-gallery-carousel__inner');
                if (modalSlider && !modalSlider.querySelector('.iv-new-1') && !modalSlider.querySelector('.iv-new-2')) {
                    modalSlider.insertAdjacentHTML('beforeend', beforeAfterHTML);
                    document.querySelector('.js-image-gallery-component .amw-gallery-carousel__icons-control + div > div:nth-child(2)').style.display = 'none';
                }
            });
                        

            document.querySelectorAll('.before-after-item').forEach(container => {
                const slider = container.querySelector('.slider');
                if (slider) {
                    slider.addEventListener('input', (e) => {
                        container.style.setProperty('--position', `${e.target.value}%`);
                    });
                }
            });

            // Initialize Secondary Slider
            secondarySlider.forEach(slider => {
                window.jQuery(slider).slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    vertical: true,
                    centerMode: false,
                    variableWidth: false,
                    infinite: false,
                    swipe: false,
                    responsive: [{
                        breakpoint: 1024, // ≤ 1023px
                        settings: {
                            slidesToShow: 4,
                            vertical: false,
                            arrows: true,
                            centerMode: false,
                            variableWidth: false,
                        }
                    }]
                });
            });

            // Initialize Primary Slider
            window.jQuery(primarySlider).slick({
                slidesToShow: 1,
                arrows: false,
                dots: true,
                adaptiveHeight: true
            });
            

            // Manually bind custom arrow buttons
            secondarySlider.forEach((secSlider, index) => {
                const primSlider = primarySlider; 

                window.jQuery(secSlider).on('click', '.js-carousel-item', function () {
                    const slideIndex = window.jQuery(this).index();
                    window.jQuery(primSlider).slick('slickGoTo', slideIndex);
                });

                const prevArrow = document.querySelectorAll('.amw-gallery-carousel__icons-control .prev-icon')[index];
                const nextArrow = document.querySelectorAll('.amw-gallery-carousel__icons-control .next-icon')[index];

                if (prevArrow) {
                    prevArrow.addEventListener('click', () => {
                        window.jQuery(secSlider).slick('slickPrev');
                    });
                }

                if (nextArrow) {
                    nextArrow.addEventListener('click', () => {
                        window.jQuery(secSlider).slick('slickNext');
                    });
                }
            });

            // Active slides
            const links = document.querySelectorAll('.amw-gallery-carousel--secondary .amw-gallery-carousel__inner .before-after-item a');
            const imgWrappers = document.querySelectorAll('.amw-gallery-carousel--secondary .amw-gallery-carousel__inner .amw-gallery-carousel__img-wrapper');

            links.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    document.querySelectorAll('.amw-gallery-carousel--secondary .amw-gallery-carousel__inner .before-after-item')
                        .forEach(el => el.classList.remove('active'));

                    this.closest('.before-after-item').classList.add('active');
                });
            });
            imgWrappers.forEach(wrapper => {
                wrapper.addEventListener('click', function () {
                    document.querySelectorAll('.amw-gallery-carousel--secondary .amw-gallery-carousel__inner .before-after-item')
                        .forEach(el => el.classList.remove('active'));
                });
            });

            // Popup
            function unslickPopupSlider() {
                const popupSlider = document.querySelector('.iziModal-content .js-zoom-image-gallery-container .amw-gallery-carousel__inner');

                if (popupSlider && popupSlider.classList.contains('slick-initialized')) {
                    window.jQuery(popupSlider).slick('unslick');
                }
            }

            function initPopupSlider() {
                const popupSlider = document.querySelector('.iziModal-content .js-zoom-image-gallery-container .amw-gallery-carousel__inner');

                if (popupSlider && !popupSlider.classList.contains('slick-initialized')) {
                    window.jQuery(popupSlider).slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        dots: true,
                        infinite: false,
                        swipe: false,
                        prevArrow: '<button class="prev-icon image-prev-icon amw-link__icon icon-chevron-left slick-arrow" aria-label="previous" type="button"></button>',
                        nextArrow: '<button class="next-icon image-next-icon amw-link__icon icon-chevron-right slick-arrow" aria-label="next" type="button"></button>'
                    });
                }
            }

            const primarySliderPopup = document.querySelectorAll('.amw-gallery-carousel--primary .amw-gallery-carousel__img-container');
            if (primarySliderPopup.length) {
                primarySliderPopup.forEach(ip => {
                    ip.addEventListener('click', () => {
                        setTimeout(() => {
                            unslickPopupSlider();
                            initPopupSlider();
                        }, 1000);
                    });
                });
            }

        }
    }
}

beforeAfter();
