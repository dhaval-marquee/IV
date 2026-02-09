function loadTestCode() {
    // Body class
    const tagClass = 'hero-newfeature';
    var bodyEle = document.querySelector('body');

    if (!bodyEle.classList.contains(tagClass)) {
        bodyEle.classList.add(tagClass);
        document.querySelector('img[src*="/HomeHero3b.jpg"]').closest('div').classList.add('hero-control');

        // Header Text (NEW!)
        const headerFeatuerMenu = '<div class="new_featuer_menu">New!</div>'
        document.querySelector('#menu-header-menu li#menu-item-224 > a').insertAdjacentHTML('afterbegin', headerFeatuerMenu);

        // Hero Section
        const heroCarousel = `<div class="splide wp-block-cover alignfull hero-carousel">
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide">
                        <div class="hero-feature">
                            <div class="container">
                                <div class="hero-feature-inner">
                                    <div class="hero-feature-left">
                                        <div class="hero-feature-headding">
                                            <h1><b>NEW!</b> SUN Collision Repair Packages</h1>
                                            <span>Automate the blueprint process to support insurance claims and estimates</span>
                                        </div>
                                        <ul class="hero-feature-list">
                                            <li>Significantly reduces the time to research and blueprint your repairs</li>
                                            <li>Includes OEM procedures + repair information in one package</li>
                                            <li>Helps increase accuracy of your estimates and limits liability</li>
                                            <li>Provides documented support for insurance claims</li>
                                            <li>Improves efficiency, productivity and profitability</li>
                                        </ul>
                                        <div class="hero-feature-cta">
                                            <a class="yellow-btn" href="/demo-request/"><span>Request a Free Demo</span></a>
                                            <a  class="whitew-btn" href="/features/"><span>Learn More</span></a>
                                        </div>
                                    </div>
                                    <div class="hero-feature-right">
                                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Suncollision/Dashboard-img.png" alt="Hero feature image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="splide__slide">
                        <div class="wp-block-cover alignfull hero-information">
                            <span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span>
                            <img width="1920" height="480" class="wp-block-cover__image-background wp-image-4117" alt="" src="/wp-content/uploads/2022/11/HomeHero3b.jpg"
                                style="object-position:50% 50%" data-object-fit="cover" data-object-position="50% 50%"
                                srcset="/wp-content/uploads/2022/11/HomeHero3b.jpg 1920w, /wp-content/uploads/2022/11/HomeHero3b-300x75.jpg 300w, /wp-content/uploads/2022/11/HomeHero3b-1024x256.jpg 1024w, /wp-content/uploads/2022/11/HomeHero3b-768x192.jpg 768w, /wp-content/uploads/2022/11/HomeHero3b-1536x384.jpg 1536w"
                                sizes="(max-width: 1920px) 100vw, 1920px">
                            <div class="wp-block-cover__inner-container">
                                <p class="has-text-align-center has-large-font-size"></p>
                                <div class="heroleft desktoponly">
                                    <h1>Complete Collision Repair Information</h1>
                                    <span class="herotext">Comprehensive, accurate collision<br>and mechanical data in a single lookup</span>
                                    <a href="/demo-request/"><span class="yellowbtn">Request a Free Demo</span></a>
                                </div>
                                <span class="mobileonly"><a href="/demo-request/"><span class="yellowbtn" style="width: 100%;">Request a Free Demo</span></a></span>
                            </div>
                        </div>
                        <div style="background-color:#e50019;padding-bottom:10%;padding-top:10%" class="wp-block-genesis-blocks-gb-container alignfull mobileonly gb-block-container">
                            <div class="gb-container-inside">
                                <div class="gb-container-content" style="max-width:1536px">
                                    <section id="mobiletext" class="mobileonly">
                                        <div class="row">
                                            <div class="heroleft">
                                                <h1>Complete Collision Repair Information</h1>
                                                <span class="herotext">Comprehensive, accurate collision and mechanical data in a single lookup</span>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>`
        
        if(!document.querySelector('.hero-feature')){
            document.querySelector('.hero-control').insertAdjacentHTML('afterend', heroCarousel);
        }
        
        var splideCss = document.createElement("link");
        splideCss.href = "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css";
        splideCss.rel = "stylesheet";
        splideCss.type = "text/css";
        document.head.appendChild(splideCss);
        var splideJS = document.createElement('script');
        splideJS.type = 'text/javascript';
        splideJS.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
        splideJS.onload = function () {
            new Splide('.splide', {
                type: 'slide',
                cover: true,
                autoplay: true,
                autoHeight: true
            }).mount();
        };
        document.head.appendChild(splideJS);
    }
}
loadTestCode();