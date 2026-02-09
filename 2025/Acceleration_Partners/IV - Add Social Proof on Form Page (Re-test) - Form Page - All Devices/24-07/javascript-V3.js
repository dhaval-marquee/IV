function loadTestCode() {
    if (!jQuery('body').hasClass('formIV')) {
        jQuery('body').addClass('formIV');

        // Put your test code here
        jQuery('.cta-sm-section .row .content').addClass('rightContent').removeClass('content').unwrap().before(`<div class="leftContent">
            <h6 class="eyeBroText">Request more information</h6>
            <h3 class="pageTitle">` + jQuery('section.cta-sm-section h3').html() + `</h3>
            <div class="testimonialLogoWrapper">
                <h6>Results-driven organizations trust Acceleration Partners for their biggest marketing&nbsp;campaigns</h6>
                <div class="testimonialLogoWrap">
                    <img src="https://www.accelerationpartners.com/wp-content/uploads/2023/07/saje-logo_400x151.svg" alt="">
                    <img src="https://www.accelerationpartners.com/wp-content/uploads/2023/07/target-logo.svg" alt="">
                    <img src="https://www.accelerationpartners.com/wp-content/uploads/2023/07/sorel-logo.jpg" alt="">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1723701305/Acceleration_Partners/add-social-proof/TheHomeDepot.png" alt="">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1723701943/Acceleration_Partners/add-social-proof/Amazon_Music.jpg" alt="">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1723701943/Acceleration_Partners/add-social-proof/BurBerry.jpg" alt="">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1723701304/Acceleration_Partners/add-social-proof/TikTok.png" alt="">
                    <img src="https://www.accelerationpartners.com/wp-content/uploads/2023/07/scrubs-beyond-logo.svg" alt="">
                    <img src="https://www.accelerationpartners.com/wp-content/uploads/2023/07/renogy-logo.svg" alt="">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1723701304/Acceleration_Partners/add-social-proof/AG1.png" alt="">
                </div>
            </div>
        </div>`);

        jQuery('.cta-sm-section').after(`<section class="logoSection">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h5>A verified industry leader in scaling partnership campaigns</h5>
                        <ul class="clientLogoWrap">
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944130/Acceleration_Partners/add-social-proof/Partnership-awards.png" alt="">
                                </div>
                                <p>
                                    <strong>US Partnership Awards</strong>
                                    <i>Best Affiliate & Partner Marketing Agency - Large</i> <br> 2024
                                </p>
                            </li>
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944130/Acceleration_Partners/add-social-proof/Global-performance-logo.png" alt="">
                                </div>
                                <p>
                                    <strong>GPMA</strong>
                                    <i>Best Agency</i> <br> 2022, 2021, 2020, 2019, 2018, 2017
                                </p>
                            </li>
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944131/Acceleration_Partners/add-social-proof/Performance-awards.png" alt="">
                                </div>
                                <p>
                                    <strong>PMA</strong>
                                    <i>Best Affiliate or Partnership Marketing Agency</i> <br> 2023, 2022, 2021
                                </p>
                            </li>
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944131/Acceleration_Partners/add-social-proof/Performance-awards.png" alt="">
                                </div>
                                <p>
                                    <strong>Inc. Magazine</strong>
                                    <i>Best Team in Performance Marketing - AP Client Services Team</i> <br> 2023, 2020
                                </p>
                            </li>
                            <li>
                                <div class="imgWrapper">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1722944130/Acceleration_Partners/add-social-proof/Global-Influencer.png" alt="">
                                </div>
                            </li>
                        </ul>    
                    </div>
                </div>
            </div>
        </section>`);

        // Slick Slide
        jQuery.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function() {
            jQuery('.testimonialWrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                dots: true,
                arrows: false
            });
        });

        jQuery(window).on("resize", function() {
            if (window.matchMedia("(min-width: 1025px)").matches) {
                jQuery('.leftContent').after(jQuery('.rightContent'));
            } else {
                jQuery('.heroList').after(jQuery('.rightContent'));
            }
        }).resize();

        let autoScrollInstance = null;
        let originalImagesHTML = "";

        function initAutoScrollLogos() {
            const wrap = document.querySelector(".testimonialLogoWrap");
            if (!wrap) return;

            if (!originalImagesHTML) {
                originalImagesHTML = wrap.innerHTML;
            }

            if (autoScrollInstance && autoScrollInstance.cleanup) {
                autoScrollInstance.cleanup();
            }

            if (window.innerWidth <= 1023.98) {
                wrap.innerHTML = originalImagesHTML;

                wrap.innerHTML += wrap.innerHTML;

                let scrollPos = 0;
                let speed = 1;
                let isPaused = false;
                let rafId = null;

                const scrollLoop = () => {
                    if (!isPaused) {
                        scrollPos += speed;
                        wrap.scrollLeft = scrollPos;

                        if (scrollPos >= wrap.scrollWidth / 2) {
                            scrollPos = 0;
                        }
                    }
                    rafId = requestAnimationFrame(scrollLoop);
                };

                function handlePause() {
                    isPaused = true;
                    wrap.classList.add("hover-enabled");
                }

                function handleResume() {
                    isPaused = false;
                    wrap.classList.remove("hover-enabled");
                }

                wrap.addEventListener("mouseenter", handlePause);
                wrap.addEventListener("mouseleave", handleResume);
                scrollLoop();

                autoScrollInstance = {
                    cleanup: () => {
                        cancelAnimationFrame(rafId);
                        wrap.removeEventListener("mouseenter", handlePause);
                        wrap.removeEventListener("mouseleave", handleResume);
                        wrap.scrollLeft = 0;
                        isPaused = false;
                    },
                };
            } else {
                wrap.innerHTML = originalImagesHTML;
            }
        }
        initAutoScrollLogos();
        window.addEventListener("resize", initAutoScrollLogos);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);