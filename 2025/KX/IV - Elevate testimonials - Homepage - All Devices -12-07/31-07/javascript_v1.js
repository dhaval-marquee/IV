function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-homepage')) {
        document.querySelector('body').classList.add('iv-homepage');
        document.querySelector('body').classList.add('iv-homepage-v1');

        document.querySelector('main section.tabbed-content-block').insertAdjacentHTML('afterend', `<div class="company-review"><div class="company-review-wrapper">
            <div class="top-slider">
                <div class="splide splideTop">
                    <div class="splide__track">
                        <ul class="splide__list">
                            <li class="splide__slide">
                                <div class="testimonial_card testimonial_card1">
                                    <div class="testimonial_content">
                                        <div class="testimonial_text">
                                            <p>“Through our partnership with KX, we’re now harnessing data across the business more efficiently, proving our clients with a more seamless experience, superior pricing, products, and customer service.”</p>
                                        </div>
                                        <div class="testimonial_author">
                                            <h3 class="author_name">Nikos Tsoskounoglou</h3>
                                            <span class="author_title">Co-Head Quantitative Trading, ADSS</span>
                                        </div>
                                        <a target="_blank" href="https://kx.com/customer-stories/adss-leverages-kx-real-time-data-platform-to-accelerate-its-transformational-growth-strategy/">Read Case Study 
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M11.5731 5L16.6673 10M16.6673 10L11.5731 15M16.6673 10H3.33398" stroke="#ffcb22" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="testimonial_card testimonial_card2">
                                    <div class="testimonial_content">
                                        <div class="testimonial_text">
                                            <p>“The launch of kdb Insights is great timing for us. We're expanding as a business, intently focusing on how we can provide Edge to our clients by launching new products, features, and services.”</p>
                                        </div>
                                        <div class="testimonial_author">
                                            <h3 class="author_name">Simon Turner</h3>
                                            <span class="author_title">Chief Information Officer, Axi</span>
                                        </div>
                                        <a target="_blank" href="https://kx.com/customer-stories/axi-delivers-markets-observability-using-kdb-insights-on-azure/">Read Case Study 
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M11.5731 5L16.6673 10M16.6673 10L11.5731 15M16.6673 10H3.33398" stroke="#ffcb22" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="testimonial_card testimonial_card3">
                                    <div class="testimonial_content">
                                        <div class="testimonial_text">
                                            <p>“KX enables Utilismart MDM to ingest data from various utility systems, smart metering and smart device and then the ability integrate all this data”</p>
                                        </div>
                                        <div class="testimonial_author">
                                            <h3 class="author_name">Miroslav Karlicic</h3>
                                            <span class="author_title">VP, Business Development and Innovation</span>
                                        </div>
                                        <a target="_blank" href="https://kx.com/customer-stories/utilismart-converts-utility-data-to-decisions-in-real-time-with-kx/">Read Case Study 
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M11.5731 5L16.6673 10M16.6673 10L11.5731 15M16.6673 10H3.33398" stroke="#ffcb22" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div> 
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="testimonial_card testimonial_card4">
                                    <div class="testimonial_content">
                                        <div class="testimonial_text">
                                            <p>“With KX, we’re not just generating insights—we’re acting on them in real time, with humans in the loop and full transparency.”</p>
                                        </div>
                                        <div class="testimonial_author">
                                            <h3 class="author_name">Tony Braund</h3>
                                            <span class="author_title">Exchange Architect, Paddy Power</span>
                                        </div>
                                        <a target="_blank" href="https://kx.com/customer-stories/paddy-power-why-kx-technology/">Read Case Study 
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M11.5731 5L16.6673 10M16.6673 10L11.5731 15M16.6673 10H3.33398" stroke="#ffcb22" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="testimonial_card testimonial_card5">
                                    <div class="testimonial_content">
                                        <div class="testimonial_text">
                                            <p>“Stifel turned to KX, the maker of kdb+, the world’s fastest time series database and real-time analytics engine to strengthen its market intelligence and trade execution impact.”</p>
                                        </div>
                                        <div class="testimonial_author">
                                            <h3 class="author_name">John Spensieri</h3>
                                            <span class="author_title">Managing Director, Head of U.S. Equity Trading</span>
                                        </div>
                                        <a target="_blank" href="https://kx.com/customer-stories/stifel-financial-corp-leverages-kdb-for-enhanced-trading-analytics/">Read Case Study 
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M11.5731 5L16.6673 10M16.6673 10L11.5731 15M16.6673 10H3.33398" stroke="#ffcb22" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div>   
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="testimonial_card testimonial_card5">
                                    <div class="testimonial_content">
                                        <div class="testimonial_text">
                                            <p>“By choosing KX over competitors such as Timescale and MongoDB, Bank of America realized millions of dollars in value across their entire organization, achieving ROI within 12-18 months of deploying KX on-premises.”</p>
                                        </div>
                                        <a target="_blank" href="https://app.userevidence.com/assets/8727SYFZ">Read Case Study 
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M11.5731 5L16.6673 10M16.6673 10L11.5731 15M16.6673 10H3.33398" stroke="#ffcb22" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div> 
                                </div>
                            </li>
                            <li class="splide__slide">
                                <div class="testimonial_card testimonial_card5">
                                    <div class="testimonial_content">
                                        <div class="testimonial_text">
                                            <p>“KX was selected to build and manage a next-generation market analytics platform designed to assess, investigate and explain potential market abuse cases.”</p>
                                        </div>
                                        <a target="_blank" href="https://kx.com/customer-stories/manages-security-market-regulations-across-canada/">Read Case Study 
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M11.5731 5L16.6673 10M16.6673 10L11.5731 15M16.6673 10H3.33398" stroke="#ffcb22" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span>
                                        </a>
                                    </div> 
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
            <div class="bottom-sliderWrapper">
                <div class="bottom-slider timer-slider-nav">
                    <section class="splide splidebottom">
                        <div class="splide__track">
                            <div class="splide__list">
                                <div class="splide__slide is-active">
                                    <div class="child first-child">
                                        <div>
                                            <span class="line"></span>    
                                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1752307986/KX/testimonialsHomepage/ADSS.webp" alt="ADSS Logo" class="default" width="100">
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="child">
                                        <div>
                                            <span class="line"></span>    
                                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1752307987/KX/testimonialsHomepage/AXI.webp" alt="AXI Logo" class="default" width="80">
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="child">
                                        <div>
                                            <span class="line"></span>    
                                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1752307987/KX/testimonialsHomepage/Utilismart.webp" alt="Utilismart Logo" class="default" width="100">
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide">
                                    <div class="child">
                                        <div>
                                            <span class="line"></span>    
                                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1753504283/KX/testimonialsHomepage/PaddyPower.png" alt="Paddy Power Logo" class="default" width="100">
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide last-child">
                                    <div class="child">
                                        <div>
                                            <span class="line"></span>    
                                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1752307986/KX/testimonialsHomepage/Stifel.jpg" alt="Stifel Logo" class="default" width="100">
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide last-child">
                                    <div class="child">
                                        <div>
                                            <span class="line"></span>    
                                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1752307986/KX/testimonialsHomepage/Bank_of_America.png" alt="Bank of America Logo" class="default" width="100">
                                        </div>
                                    </div>
                                </div>
                                <div class="splide__slide last-child">
                                    <div class="child">
                                        <div>
                                            <span class="line"></span>    
                                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1752307987/KX/testimonialsHomepage/CSA.png" alt="CSA Logo" class="default" width="100">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>  
                </div>
            </div> 
        </div></div>`);

        // Load CSS
        var cssId = 'splide-theme-CSS';
        if (!document.getElementById(cssId)) {
            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');
            link.id   = cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css';
            head.appendChild(link);
        }
        // Load JS
        var jsId = 'splide-script';
        if (!document.getElementById(jsId)) {
            var scriptTag = document.createElement('script');
            scriptTag.src = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js";
            scriptTag.id = jsId;
            document.head.appendChild(scriptTag);
            window.splideJsLoaded = true;
        }

        // Initialize slider
        var clientLogoSlider = setInterval(() => {
        if(window.Splide) {
            clearInterval(clientLogoSlider);

            var splideBottom = new Splide('.splideTop', {
                type: 'loop',
                perPage: 1,
                autoplay: true,
                speed: 700,
                interval: 5000,
                arrows: false,
                pagination: false,
                autoHeight: true,
                pauseOnHover: false,
                pauseOnFocus: false,
                gap: '55px',
                focus: 'center',
            });

            var splideTop = new Splide('.splidebottom', {
                rewind: true,
                isNavigation: true,
                focus: 'center',
                autoplay: true,
                speed: 700,
                interval: 5000,
                pagination: false,
                perPage: 5,
                arrows: false,
                pauseOnHover: false,
                pauseOnFocus: false,
                
            });

            // Pause auto slide on click
            splideTop.on('click', function () {
                var Autoplay1 = splideTop.Components.Autoplay;
                var Autoplay2 = splideBottom.Components.Autoplay;
                Autoplay1.pause();
                Autoplay2.pause();
                document.querySelector('.bottom-slider').classList.remove('auto-slide-active');
            });

            setTimeout(function () {
                splideTop.mount();
                splideBottom.mount();
                splideBottom.sync(splideTop);

                document.querySelector('.bottom-slider').classList.add('auto-slide-active');
            }, 500);
            window.dispatchEvent(new Event('resize'));
        }
        });
    }
}
var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);