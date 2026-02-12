function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-revamp-homepage')) {
        document.querySelector('body').classList.add('iv-revamp-homepage');

        // CatchMaster Title Tag
        document.querySelectorAll('head > title')[0].textContent= 'Pest Control Products | Effective Rodent, Insect & Bug Control Solutions';

        // Header Section
        [{
            selector: 'nav.header__inline-menu ul.list-menu',
            isMobile: false,
            bestSellersId: 'HeaderMenu-best-sellers',
            blogId: 'HeaderMenu-blog',
            linkClass: 'header__menu-item list-menu__item link link--text focus-inset'
        },
        {
            selector: '.menu-drawer__inner-container nav > ul.menu-drawer__menu',
            isMobile: true,
            bestSellersId: 'HeaderDrawer-best-sellers',
            blogId: 'HeaderDrawer-blog',
            linkClass: 'menu-drawer__menu-item list-menu__item link link--text focus-inset'
        }
        ].forEach(menu => {
            const nav = document.querySelector(menu.selector);
            if (!nav) return;

            [...nav.children].forEach(li => {
                const label = li.querySelector('summary')?.textContent.trim();
                li.style.display = (label === 'Shop' || label === 'Support') ? '' : 'none';
            });

            const addItem = (after, id, text, href) => {
                after?.insertAdjacentHTML('afterend', `
                <li>
                    <a id="${id}" href="${href}" class="${menu.linkClass}">
                        <span>${text}</span>
                    </a>
                </li>
                `);
            };

            const findItem = txt => [...nav.children].find(li =>
                li.querySelector('summary')?.textContent.trim() === txt
            );

            addItem(findItem('Shop'), menu.bestSellersId, 'Best Sellers', '/pages/best-seller');
            addItem(findItem('Support'), menu.blogId, 'Blog', '/blogs/news');
        });

        // Hero Section
        if(!document.querySelector('.iv-hero-sec')){
            document.querySelector('#MainContent').insertAdjacentHTML('afterbegin', `<h1 class="iv-main-title">Welcome to Catchmaster! <br/> The Leader in Glue-Based Pest Control</h1><div class="iv-hero-sec-new iv-hero-desktop">
                <div class="page-width iv-container">
                    <div class="iv-hero-sec-new-inner">
                        <a class="iv-hero-sec-new-inner-first" href="https://www.catchmaster.com/collections/cold-weather-glue-traps">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770269663/Catchmaster/RevampHomepageLayout/FebPROMOBannerDes.png" alt="Hero img" />
                        </a>
                        <a class="iv-hero-sec-new-inner-sec" href="https://www.catchmaster.com/products/catchmaster-cockroach-trap-with-powerful-food-based-bait-glue-traps-10-pk?_pos=1&_sid=d065783d9&_ss=r">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1763383371/Catchmaster/RevampHomepageLayout/Homepage_Hero_bannerDesktop1.png" alt="Hero img" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="iv-hero-sec-new iv-hero-mobile">
                <div class="page-width iv-container">
                    <div class="iv-hero-sec-new-inner">
                        <a class="iv-hero-sec-new-inner-first" href="https://www.catchmaster.com/collections/cold-weather-glue-traps">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770269118/Catchmaster/RevampHomepageLayout/FebPROMOBannerM.png" alt="Hero img" />
                        </a>
                        <a class="iv-hero-sec-new-inner-sec" href="https://www.catchmaster.com/products/catchmaster-cockroach-trap-with-powerful-food-based-bait-glue-traps-10-pk?_pos=1&_sid=d065783d9&_ss=r">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1763383370/Catchmaster/RevampHomepageLayout/Homepage_Hero_bannerMobile.png" alt="Hero img" />
                        </a>
                    </div>
                </div>
            </div>
        `);
        }

        // KEEP YOUR FAMILY SAFE FROM PESTS THIS FALL
        document.querySelectorAll('.tabs-slider-heading h2').forEach(h2 => {
            h2.textContent = h2.textContent.toLowerCase();
            h2.textContent = 'Start the Year Protecting Your Family';
        });
        document.querySelectorAll('.tabs-slider-heading p').forEach(p => {
            p.textContent = 'Choose one of our best-selling glue trap…';
        });

        $(document).ready(function() {
            function setEqualHeight($slider) {
                // Run only on desktop
                if ($(window).width() > 1024) {
                    let maxHeight = 0;
                    $slider.find('.slick-slide').each(function() {
                        let slideHeight = $(this).outerHeight();
                        if (slideHeight > maxHeight) {
                            maxHeight = slideHeight;
                        }
                    });
                    $slider.find('.slick-slide').css('height', maxHeight + 'px');
                } else {
                    // Reset height on mobile
                    $slider.find('.slick-slide').css('height', '');
                }
            }

            function initSlider($wrapper) {
                if ($wrapper.hasClass('slick-initialized')) {
                    $wrapper.slick('unslick');
                }

                if (!$wrapper.hasClass('slick-initialized')) {
                    $wrapper.slick({
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        arrows: false,
                        autoplay: false,
                        autoplaySpeed: 2000,
                        infinite: true,
                        dots: true,
                        responsive: [
                            {
                                breakpoint: 1440,
                                settings: {
                                    slidesToShow: 4,
                                }
                            },
                            {
                                breakpoint: 1023,
                                settings: {
                                    slidesToShow: 3,
                                }
                            },
                            {
                                breakpoint: 749.98,
                                settings: {
                                    slidesToShow: 2,
                                }
                            }
                        ]
                    });

                    // Equal height only for desktop
                    $wrapper.on('setPosition', function() {
                        setEqualHeight($wrapper);
                    });
                }
            }

            let $firstTab = $(".tabs-slider-product-slider:not(.hidden) .product-slider-wrapper");
            initSlider($firstTab);

            $('.tabs-slider-product-tabs li').on('click', function() {
                var tabId = $(this).data('tab');
                $('.product-slider-wrapper').each(function() {
                    if ($(this).hasClass('slick-initialized')) {
                        $(this).slick('unslick');
                    }
                });

                var $selectedSlider = $('#' + tabId).find('.product-slider-wrapper');
                initSlider($selectedSlider);
            });

            // Recheck on resize
            $(window).on('resize', function() {
                $('.product-slider-wrapper.slick-initialized').each(function() {
                    setEqualHeight($(this));
                });
            });
        });

        // Rodent stopping power
        const rodentSec = `<div class="iv-arrivals iv-arrivals-desktop">
            <div class="page-width iv-container">
                <div class="iv-arrivals-inner">
                    <a class="iv-arrivals-inner-first" href="https://www.catchmaster.com/collections/new-arrivals">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1763383371/Catchmaster/RevampHomepageLayout/Homepage_BTF_sectionbannerDesktop.png" alt="Hero img" />
                    </a>
                </div>
            </div>
        </div>

        <div class="iv-arrivals iv-arrivals-mobile">
            <div class="page-width iv-container">
                <div class="iv-arrivals-inner">
                    <a class="iv-arrivals-inner-first" href="https://www.catchmaster.com/collections/new-arrivals">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1763383370/Catchmaster/RevampHomepageLayout/Homepage_BTF_sectionbannerMobile.png" alt="Hero img" />
                    </a>
                </div>
            </div>
        </div>
        `;

        const tabsSlider = document.querySelector('.tabs-slider-product-Carousel');
        if (tabsSlider) {
            const closestDiv = tabsSlider.closest('div');
            if (closestDiv) {
                closestDiv.insertAdjacentHTML('afterend', rodentSec);
            }
        }

        var addTextInterval = setInterval(function(){
            if(document.querySelectorAll('div:has(.tabs-slider-product-Carousel)').length > 0){
                clearInterval(addTextInterval);
                document.querySelector('div:has(.tabs-slider-product-Carousel)').insertAdjacentHTML('afterend',`<section class="pest-solutions">
                    <div class="container page-width">
                        <h2 class="title">Mastering Pest Control Solutions</h2>
                        <p class="subtitle">Professional Excellence for every Home and Business</p>
                        <div class="itemsSolutions">
                            <div class="item">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1763583492/Catchmaster/RevampHomepageLayout/CM-Pest_Solution-1.png" alt="CATCHMASTER GLUE: PEST-STOPPING POWER">
                                <div class="itemContent">
                                    <h3>CATCHMASTER GLUE: PEST-STOPPING POWER</h3>
                                    <p>We engineer pest-specific glue formulations with calibrated tack, viscosity, and holding strength to target the pests you face. Our non-toxic glue traps work indoors or outdoors, remain effective across seasons, and are easy to place and monitor. You get clean, reliable, pest stopping power that completes the job effectively.</p>
                                </div>
                            </div>
                            <div class="item">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1763583491/Catchmaster/RevampHomepageLayout/CM-Pest_Solution-2.png" alt="TRUSTED BY PROFESSIONALS">
                                <div class="itemContent">
                                    <h3>TRUSTED BY PROFESSIONALS</h3>
                                    <p>Pest management professionals rely on Catchmaster because our products are rigorously field tested and rooted in science based solutions. From lab validation to real world trials, we design for consistent results and clear application guidance. This supports an IPM approach that reduces callbacks and builds confidence for both pros and homeowners.</p>
                                </div>
                            </div>
                            <div class="item">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1760697111/Catchmaster/RevampHomepageLayout/pest-solutions1.png" alt="PESTICIDE-FREE">
                                <div class="itemContent">
                                    <h3>PESTICIDE-FREE</h3>
                                    <p>Choose protection that is non toxic and pesticide free. Our mechanical, glue based devices capture pests without sprays, vapors, or harsh residues, which makes them a safe choice for homes with pets and children when used as directed. Low odor and easy to deploy, they provide powerful and responsible control for kitchens, playrooms, offices, and more.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="why-choose-catchmaster">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1760707264/Catchmaster/RevampHomepageLayout/catchmasterLogo.svg" alt="Catchmaster Logo Icon" class="catchmasterlogo">
                    <div class="container page-width">
                        <h2 class="title">Why Choose Our Pest Control Products?</h2>
                        <p class="subtitle">Whether you need to trap ants or rats, Catchmaster has the right pest control solutions for the job. From our professional-strength glue traps to our heavy-duty Vector blue light traps, we can keep your home, business, or commercial space free from flying insects, crawling pests, or dangerous rodents.</p>
                        <div class="features">
                            <div class="feature-card">
                                <div class="feature-card-icon">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1760703172/Catchmaster/RevampHomepageLayout/Award.svg" alt="Award Icon">
                                </div>
                                <div class="feature-card-content">
                                    <h3>Time-Honored &amp; Tested</h3>
                                    <p>When it comes to effective bug control products, Catchmaster is known for its industry-leading and innovative solutions. For over 70 years, pest control professionals and homeowners alike have turned to us for reliable products that keep their homes and businesses safe and pest-free.</p>
                                </div>
                            </div>
                            <div class="feature-cardWrapper">
                                <div class="feature-card feature-card-middle">
                                    <div class="feature-card-icon">
                                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1760703172/Catchmaster/RevampHomepageLayout/Flag.svg" alt="Flag Icon">
                                    </div>
                                    <div class="feature-card-content">
                                        <h3>Customer-Centric and Educational</h3>
                                        <p>We make the time to ensure that our customers are fully educated on why they’re experiencing pest problems, how to use our traps to stop the infestation, and how to prevent it from happening again. We’re here to help during every step of your pest control fight!</p>
                                    </div>
                                </div>
                                <div class="feature-card feature-card-middle">
                                    <div class="feature-card-icon">
                                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1760703171/Catchmaster/RevampHomepageLayout/Crosshair.svg" alt="Crosshair Icon">
                                    </div>
                                    <div class="feature-card-content">
                                        <h3>Value and Mission Focused</h3>
                                        <p>Our GLUE Co. values influence everything from manufacturing to marketing. You can always trust Catchmaster to go Beyond Expectations, Laugh, Be Unstoppable, Energized, and Ownership-thinking. We aim to create pest control products that prioritize safety and reliability.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="feature-card">
                                <div class="feature-card-icon">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1760703172/Catchmaster/RevampHomepageLayout/Thumbs_up.svg" alt="Thumbs up Icon">
                                </div>
                                <div class="feature-card-content">
                                    <h3>Customer Satisfaction Guaranteed</h3>
                                    <p>We don’t just walk the walk. We talk the talk. Catchmaster stands behind our products and quality controls. If you are ever unsatisfied with your Catchmaster pest control products, we will replace them or provide a refund for your purchase within 60 days of purchase. That’s the <a href="/pages/satisfaction-guarantee"> Catchmaster 60-Day Satisfaction Guarantee</a>. Terms and conditions may apply. See the link for more information.</p>
                                </div>
                            </div>
                        </div>
                        <a class="iv-button-rounded" href="/collections/shop">SHOP ALL</a>
                    </div>
                </section>`);
            }
        },500);
    }
}

loadTestCode();