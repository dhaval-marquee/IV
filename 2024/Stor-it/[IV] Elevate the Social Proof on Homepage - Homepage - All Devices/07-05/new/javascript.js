var getLogo = setInterval(() => {
    if($('.client-logos').length > 0 && $('#section-1').length > 0) {
        clearInterval(getLogo);

        $('#section-1').before($('.client-logos').eq(0).parent());

        $('.client-logos .fourteen-hundred').wrapInner(`<div class="splide">
            <div class="splide__track">
                <div class="splide__list"></div>
            </div>
        </div>`);
        $('.client-logos .fourteen-hundred').prepend($('.client-logos h3'));


        var imagesProcessed = 0;
        $('.client-logos .splide__list img').each(function(){
            $(this).wrap('<div class="splide__slide"></div>');
            imagesProcessed++;
            if(imagesProcessed === $('.client-logos .splide__list img').length) {
                setTimeout(() => {
                    initializeSlider();
                }, 100);
            }
        });

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

        function initializeSlider() {
            var LogoSlider = setInterval(() => {
                if(window.Splide) {
                    clearInterval(LogoSlider);

                    var integrationLogo = new Splide('.client-logos .splide', {
                        type: 'loop',
                        perPage  : 7,
                        arrows: true,
                        pagination: false,
                        autoplay: false,
                        gap: '50px',
                        breakpoints: {
                            1199: {
                                perPage: 5,
                        
                            },
                            1024: {
                                perPage: 3,
                        
                            },
                            767: {
                                perPage: 2,
                            },
                            575: {
                                perPage: 1,
                            }
                        },
                    });

                    setTimeout(function () {
                        integrationLogo.mount();
                    });

                    document.body.onresize = function () {
                        integrationLogo.destroy(true);
                        integrationLogo.mount();
                    }
                    window.dispatchEvent(new Event('resize'));
                }
            });
        }
    }
}, 100);