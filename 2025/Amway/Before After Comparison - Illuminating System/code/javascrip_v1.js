function beforeAfter() {
    if (!document.body.classList.contains('before_after_illuminating_slider')) {
        document.body.classList.add('before_after_illuminating_slider');

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
            <div class="amw-gallery-carousel__img-container js-carousel-item iv-new-1" data-index="6">
                <div class="amw-gallery-carousel__img-wrapper">
                    <div class="amw-gallery-carousel__img-container js-carousel-item before-after-item" data-zoom="true" data-zoom-url="/medias/126219V-en-US-1800px-05?context=bWFzdGVyfGltYWdlc3wyOTQzMzAyfGltYWdlL3BuZ3xzeXMtbWFzdGVyL2ltYWdlcy9oNWMvaGY1LzEwMTM1NjcwMjkyNTEwLzEyNjIxOVYtZW4tVVMtMTgwMHB4LTA1fDFlMmU4MzU4NzgyYjU0NTI1YzY5MGRmZDc4MDk4YjIwNDg3NmFjZWJhYWU2YjZiZGU5ZTUzNTI0MDExYzY0ZjY" style="width: 100%; display: inline-block;">
                        <a aria-label="Click to open zoom modal Artistry Labs™ Illuminating System" class="amw-gallery-carousel__img-wrapper d-flex align-items-center" href="#" role="img" tabindex="0">
                        <img class="amw-gallery-carousel__img js-carousel-img" alt="Artistry Labs™ Illuminating System" src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/amway/BeforeAfterComparison/Compared_img.jpg">
                        </a>
                    </div>
                </div>
            </div>
            `;

            secondarySlider.forEach((secSlider, index) => {
                if (secSlider && !secSlider.querySelector('.iv-new-1') && !secSlider.querySelector('.iv-new-2')) {
                    secSlider.insertAdjacentHTML('beforeend', beforeAfterHTML);
                }

                if (primarySlider && !primarySlider.querySelector('.iv-new-1') && !primarySlider.querySelector('.iv-new-2')) {
                    primarySlider.insertAdjacentHTML('beforeend', beforeAfterHTML);
                }

                const modalSlider = document.querySelector('.iziModal-content .js-zoom-image-gallery-container .amw-gallery-carousel__inner');
                if (modalSlider && !modalSlider.querySelector('.iv-new-1') && !modalSlider.querySelector('.iv-new-2')) {
                    modalSlider.insertAdjacentHTML('beforeend', beforeAfterHTML);
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
                        breakpoint: 1024,
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
