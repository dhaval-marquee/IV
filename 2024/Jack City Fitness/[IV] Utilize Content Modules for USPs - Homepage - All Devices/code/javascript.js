function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');


        jQuery('.homepage_iv #section-1 h1').after(`<h2><span style="font-weight: 400;">Welcome to </span><span style="font-weight: 400;">Jack City Fitness: Boise,
        Idaho</span><span style="font-weight: 400;">’s #1 Spot for Health and Sport&nbsp;</span></h2>
        <div class="slider-wraper">
            <div class="splide card-slider">
                <div class="splide__track">
                    <div class="splide__list cardes">
                        <div class="splide__slide">
                            <div class="card">
                                <div class="card-content">Can't decide between Boise gyms? We'll make it easy for you. Jack City Fitness is the
                                    area's only RESULTS-ORIENTED gym—and we have everything athletes need to crush all their goals. That's why
                                    we are one of the most famous gyms in Idaho. These include 24/7 access, custom workout plans, and the most
                                    exciting fitness classes Boise has to offer.
                                </div>
                                <div class="card-title">BOISE'S <span>BEST GYM</span></div>
                                <div class="card-icon">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/champion.png" alt="Trophy Icon">
                                </div>
                            </div>
                        </div>
                        <div class="splide__slide">
                            <div class="card">
                                <div class="card-content">Looking for clean and safe health clubs? As a small, local business, we take extra
                                    pride and care in ensuring the safety of all our beloved Partners. That means keeping our site sparkling
                                    clean and only employing the most qualified fitness coaches in Boise. We work hard to maintain that level.
                                    After all, our Partners deserve only the best.</div>
                                <div class="card-title">CLEAN <span>AND SAFE</span></div>
                                <div class="card-icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/true.png" alt="Clean Icon"></div>
                            </div>
                        </div>    
                        <div class="splide__slide">    
                            <div class="card">
                                <div class="card-content">Yes, there is! Unlike some other gyms in Boise, Jack City Fitness has a private car lot
                                    for Partners. That gives you plenty of space to park your car (or bike!)—even during busier hours. Just one
                                    more reason we have been consistently rated the best gym in Boise—and all of Idaho!</div>
                                <div class="card-title">PARKING <span>ALWAYS AVAILABLE</span></div>
                                <div class="card-icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/car.png" alt="Parking Icon"></div>
                            </div>
                        </div>    
                        <div class="splide__slide">    
                            <div class="card">
                                <div class="card-content">Become part of a vibrant community where members and staff encourage and support one
                                    another. Our positive atmosphere fosters accountability, making it easier for you to stay motivated and
                                    committed to your fitness journey, no matter where you are starting from.</div>
                                <div class="card-title">POSITIVE <span>ENVIRONMENT AND ACCOUNTABILITY</span></div>
                                <div class="card-icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/hand.png" alt="Positive Icon"></div>
                            </div>
                        </div>    
                        <div class="splide__slide">    
                            <div class="card">
                                <div class="card-content">Rejuvenate with our advanced hot and cold therapy options. Our infrared sauna helps
                                    relax and soothe your muscles, while our deliberate cold tub invigorates and promotes faster recovery. These
                                    therapies work together to enhance your overall well-being and performance.
                                </div>
                                <div class="card-title">HOT & COLD <span>THERAPY</span></div>
                                <div class="card-icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/sun.png" alt="Hot & Cold Therapy Icon"></div>
                            </div>
                        </div>    
                        <div class="splide__slide">    
                            <div class="card">
                                <div class="card-content">Our gym is open 24/7, allowing you the flexibility to work out whenever it fits your
                                    busy schedule. Whether you prefer early morning sessions, late-night workouts, or anything in between,
                                    you'll always have access to our state-of-the-art facilities and equipment.
                                </div>
                                <div class="card-title">24/7 <span>ACCESS</span></div>
                                <div class="card-icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/clock.png" alt="Access Icon"></div>
                            </div>
                        </div>    
                        <div class="splide__slide">    
                            <div class="card fitnescard">
                                <div class="card-content">
                                    <p>Each of our athletes enjoys a personalized and unique experience.</p>
                                    <ul>
                                        <li>Irreplaceable Community</li>
                                        <li>A Relaxed Environment</li>
                                        <li>Experienced Coaches</li>
                                        <li>The Latest Gym Equipment</li>
                                        <li>Innovative Fitness Technology</li>
                                        <li>Flexible Programming</li>
                                    </ul>
                                </div>
                                <div class="card-title"> </div>
                                <div class="card-title">FITNESS <span>FACILITY BUILT FOR YOU</span></div>
                                <div class="card-icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/finger.png" alt="Fitness Icon"></div>
                            </div>
                        </div>    
                        <div class="splide__slide">    
                            <div class="card trainingcard">
                                <div class="card-content">
                                    <p>We are proud to offer elite-level personal coaching and nutritional counseling; With
                                    your personal coach, you can expect:</p>
                                    <ul>
                                        <li>Accountability</li>
                                        <li>Education</li>
                                        <li>Safety</li>
                                        <li>Support</li>
                                        <li>Results!</li>
                                    </ul>
                                </div>
                                <div class="card-title">1-on-1 <span>PERSONAL TRAINING</span></div>
                                <div class="card-icon"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/success.png" alt="Training Icon"></div>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>         
        </div>`);

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
        var cardSliderInterval = setInterval(() => {
            if(window.Splide) {
                clearInterval(cardSliderInterval);

                var cardSlider = new Splide('.card-slider', {
                    type  : 'fade',
                    rewind: true,
                });


                document.body.onresize = function () {
                
                    // Load code just for mobile 
                    if (window.matchMedia("(max-width: 767.98px)").matches) {

                        setTimeout(function () {
                            cardSlider.mount();
                        });
                        window.addEventListener('resize', function(event) {
                            if (window.matchMedia("(min-width: 768px)").matches) {
                                if (jQuery('.card-slider.is-initialized').length > 0) {
                                    cardSlider.destroy(true);
                                }
                            }
                        }, true);
                    } else {
                        window.addEventListener('resize', function(event) {
                            if (window.matchMedia("(max-width: 767.98px)").matches) {
                                setTimeout(function () {
                                    cardSlider.mount();
                                });
                            }
                        }, true);
                    }
                    // Load code just for mobile over
                }
                window.dispatchEvent(new Event('resize'));
            }
        });


    }
}

var loadTest = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(loadTest);
        loadTestCode();
    } 
}, 100);
