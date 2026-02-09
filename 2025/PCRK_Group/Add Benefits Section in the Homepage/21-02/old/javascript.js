function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-benefits')) {
        document.querySelector('body').classList.add('iv-benefits');

        const head = document.head;

        const slickThemeCSS = document.createElement('link');
        slickThemeCSS.rel = 'stylesheet';
        slickThemeCSS.type = 'text/css';
        slickThemeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css';
        head.appendChild(slickThemeCSS);

        const slickJS = document.createElement('script');
        slickJS.type = 'text/javascript';
        slickJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js';
        head.appendChild(slickJS);

        const ivBenefits = [{
                'img': 'https://res.cloudinary.com/ignite-visibility/image/upload/v1738819887/PCRK-Group/benefits-img-1.png',
                'hading': 'Medical',
                'subText': 'We offer a variety of medical & RX plans for individuals and family members.'
            },
            {
                'img': 'https://res.cloudinary.com/ignite-visibility/image/upload/v1738819888/PCRK-Group/benefits-img-2.png',
                'hading': 'Dental',
                'subText': 'We offer a variety of dental plans for individuals and family members.'
            },
            {
                'img': 'https://res.cloudinary.com/ignite-visibility/image/upload/v1738819888/PCRK-Group/benefits-img-3.png',
                'hading': 'Vision',
                'subText': 'We offer a vision plans for individuals and family members.'
            },
            {
                'img': 'https://res.cloudinary.com/ignite-visibility/image/upload/v1738819888/PCRK-Group/benefits-img-4.png',
                'hading': 'Disability & Life',
                'subText': 'We offer Short Term Disability (STD) benefits along with Voluntary Life and D&D insurance for full-time employees.'
            },
            {
                'img': 'https://res.cloudinary.com/ignite-visibility/image/upload/v1738819888/PCRK-Group/benefits-img-5.png',
                'hading': 'Employee Assistance Program (EAP)',
                'subText': 'PCRK understands you & your family might experience personal or work related challenges. '
            },
            {
                'img': 'https://res.cloudinary.com/ignite-visibility/image/upload/v1738819888/PCRK-Group/benefits-img-6.png',
                'hading': 'Supplemental Health',
                'subText': 'Critical illness, hospital, and accident coverage is offered on a voluntary basis.'
            },
            {
                'img': 'https://res.cloudinary.com/ignite-visibility/image/upload/v1738819887/PCRK-Group/benefits-img-7.png',
                'hading': 'Paid Time Off (PTO)',
                'subText': 'We support you maintaining a healthy work/life balance by providing all team members with PTO.'
            },
        ];

        const ivBenefitSection = `<section class="iv-benefit-section gb-container wave bg-light section alignfull">
            <div class="gb-inside-container iv-container">
                <div class="iv-section-hading">
                    <h2 class="iv-benefit-hading">Why Work With Us?</h2>
                    <p class="iv-benefit-subtext">We offer comprehensive coverage in Medical, Vision & Dental Insurance. </p>
                </div>
                <div class="iv-benefit-items">
                </div>
                <div class="iv-view-open-cta custom-button">
                    <a class="iv-view-open-btn" target="_blank" href="https://apply.workable.com/pcrk-group/?lng=en">View Open Positions </a>
                </div>
            </div>
        </section>`;

        if (!document.querySelector('.iv-benefit-section')) {
            document.querySelectorAll('h2').forEach(function(allH2) {
                if (allH2.innerText === "Who Is PCRK Group?") {
                    allH2.closest('section').insertAdjacentHTML('afterend', ivBenefitSection);
            
                    ivBenefits.forEach(benefit => {
                        const ivDiv = document.createElement('div');
                        ivDiv.classList.add('iv-benefit-item');
                        ivDiv.innerHTML = `
                            <div class="iv-svg">
                                <img src="${benefit.img}" alt="" />
                            </div>
                            <h3 class="iv-heading">${benefit.hading}</h3>
                            <p class="iv-subtext">${benefit.subText}</p>
                        `;
                        document.querySelector('.iv-benefit-items').appendChild(ivDiv);
                    });
                    document.querySelector('.iv-benefit-section').classList.add('fireGoal');
                    trackingScript();
                }
            });
        }

        // Wait for Slick Slider to be loaded and initialize it
        slickJS.onload = function() {
            $(document).ready(function() {
                function initializeSlider() {
                    if ($(window).width() < 768) {
                        if (!$('.iv-benefit-items').hasClass('slick-initialized')) {
                            $('.iv-benefit-items').slick({
                                infinite: true,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: true,
                                adaptiveHeight: true,
                                arrows: true,
                                prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="298" height="512" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M285.77 441c16.24 16.17 16.32 42.46.15 58.7-16.16 16.24-42.45 16.32-58.69.16l-215-214.47c-16.24-16.16-16.32-42.45-.15-58.69L227.23 12.08c16.24-16.17 42.53-16.09 58.69.15 16.17 16.24 16.09 42.54-.15 58.7l-185.5 185.04L285.77 441z"></path></svg></button>',
                                nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="298" height="512" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 298 511.93"><path fill-rule="nonzero" d="M70.77 499.85c-16.24 16.17-42.53 16.09-58.69-.15-16.17-16.25-16.09-42.54.15-58.7l185.5-185.03L12.23 70.93c-16.24-16.16-16.32-42.45-.15-58.7 16.16-16.24 42.45-16.32 58.69-.15l215.15 214.61c16.17 16.25 16.09 42.54-.15 58.7l-215 214.46z"></path></svg></button>',
                            });
                        }
                        $('.iv-benefit-items').removeClass('desktop-layout');
                    } else {
                        if ($('.iv-benefit-items').hasClass('slick-initialized')) {
                            $('.iv-benefit-items').slick('unslick');
                        }
                        $('.iv-benefit-items').addClass('desktop-layout');
                    }
                }

                initializeSlider();

                $(window).resize(function() {
                    initializeSlider();
                });
            });
        };
    }
}
function trackingScript() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top <= 0; // Fires when the element reaches the top of the viewport
    }
    
    function checkElement() {
        const element = document.querySelector(".fireGoal");
        if (element && isElementInViewport(element)) {
            // Add the following snippet to trigger this event
            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
    
            VWO.event("benefitsSectionInHomepage");
            window.removeEventListener("scroll", checkElement); // Remove event listener after execution
        }
    }
    // Attach scroll event listener
    window.addEventListener("scroll", checkElement);
    
    // Run check initially in case the element is already in view
    checkElement();
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
