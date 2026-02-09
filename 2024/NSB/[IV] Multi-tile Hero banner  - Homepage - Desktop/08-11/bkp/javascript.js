function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-hero')) {
        document.querySelector('body').classList.add('iv-hero');

        if (!document.querySelector('.iv-hero-main')) {
            const heroMain = `<div class="iv-hero-main"></div>`;
            document.querySelector('.featured-section').insertAdjacentHTML('beforebegin', heroMain);
        }

        const heroMainElement = document.querySelector('.iv-hero-main');
        const featuredSection = document.querySelector('.featured-section');
        if (heroMainElement && featuredSection && !heroMainElement.contains(featuredSection)) {
            heroMainElement.appendChild(featuredSection);
            if (!document.querySelector('.iv-hero-right')) {
                const heroRight = `<div class="iv-hero-right">
                    <div class="hero-right hero-right-top">
                        <h3>Most Popular Topics</h3>
                        <p>Your topic is unique, luckily we've got you covered.</p>
                        <a href="/topics/" class="iv-button iv-button-red-bg">See most popular topics</a>
                    </div>
                    <div class="hero-right hero-right-bottom">
                        <div class="hero-sliders">
                            <div style="background-image: url('//res.cloudinary.com/ignite-visibility/image/upload/f_auto/NSB/large-George_S.png');" class="hero-right hero-slider">
                                <div class="content-inner">
                                    <span>Trending speakers</span>
                                    <h3>George Stroumboulopoulos</h3>
                                    <p>On the art of listening, creating space, and building connections</p>
                                    <a href="/speakers/george-stroumboulopoulos/" class="iv-button iv-button-red-border">Learn more</a>
                                </div>
                            </div>
                            <div style="background-image: url('//res.cloudinary.com/ignite-visibility/image/upload/f_auto/NSB/large-Brynn_Winegard.png');" class="hero-right hero-slider">
                                <div class="content-inner">
                                    <span>Trending speakers</span>
                                    <h3>Brynn Winegard</h3>
                                    <p>Buliding better business-brains</p>
                                    <a href="/speakers/brynn-winegard/" class="iv-button iv-button-red-border">Learn more</a>
                                </div>
                            </div>
                            <div style="background-image: url('//res.cloudinary.com/ignite-visibility/image/upload/f_auto/NSB/howto-stream.jpg');" class="hero-right hero-slider content-white" data-bg="black">
                                <div class="content-inner">
                                    <span>Trending speakers</span>
                                    <h3>David Frum</h3>
                                    <p>Leading Author, journalist & Commentator on Global Affairs</p>
                                    <a href="/speakers/david-frum/" class="iv-button iv-button-red-border">Learn more</a>
                                </div>
                            </div>
                            <div style="background-image: url('//res.cloudinary.com/ignite-visibility/image/upload/f_auto/NSB/largeAmie-Sara.jpg');background-position: center right -50px;" class="hero-right hero-slider">
                                <div class="content-inner">
                                    <span>Trending speakers</span>
                                    <h3>Amie Archibald-Varley & Sara Fung</h3>
                                    <p>Healthcare Leaders: Hosts of The Gritty Nurse Podcast & Co-Authors of <i>The Wisdom of Nurses</i></p>
                                    <a href="/speakers/sara-fung/" class="iv-button iv-button-red-border">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
                featuredSection.insertAdjacentHTML('afterend', heroRight);
            }
        }

        const keywordInput = document.querySelector('.featured-form-right input[name="keyword"]');
        if (keywordInput) {
            keywordInput.placeholder = "Enter a topic, keyword, or speaker...";
        }

        document.querySelector('head').insertAdjacentHTML('afterbegin', `<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>`)
        
        function loadScript(url) {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = url;
                script.onload = () => resolve();
                script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
                document.head.appendChild(script);
            });
        }
        
        loadScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js")
            .then(() => {
                $('.hero-sliders').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false,
                    autoplay: false,
                    nextArrow: '<div class="next"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" fill="none" viewBox="0 0 20 35"><path fill="#000" fill-rule="evenodd" d="M13.155 18.948c.8-.8.8-2.096 0-2.896L.6 3.497C-.2 2.697-.2 1.4.6.6c.8-.8 2.097-.8 2.897 0l15.452 15.452c.8.8.8 2.096 0 2.896L3.497 34.4c-.8.8-2.097.8-2.897 0-.8-.8-.8-2.097 0-2.897l12.555-12.555z" clip-rule="evenodd"/></svg></div>',
                    prevArrow: '<div class="prev"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="25" fill="none" viewBox="0 0 20 35"><path fill="#000" fill-rule="evenodd" d="M6.394 18.948c-.8-.8-.8-2.096 0-2.896L18.948 3.497c.8-.8.8-2.097 0-2.897-.8-.8-2.096-.8-2.896 0L.6 16.052c-.8.8-.8 2.096 0 2.896L16.052 34.4c.8.8 2.096.8 2.896 0 .8-.8.8-2.097 0-2.897L6.394 18.948z" clip-rule="evenodd"/></svg></div>',
                });
            })
            .catch(error => {
                console.error(error);
            });

        function setHeroSlidersHeight() {
            const heroSliders = document.querySelector('.hero-sliders');
            if (heroSliders) {
                const height = heroSliders.offsetHeight;

                document.querySelectorAll('.hero-slider').forEach(slider => {
                    slider.style.height = `${height}px`;
                });
            }
        }

        window.addEventListener('load', setHeroSlidersHeight);
        window.addEventListener('resize', setHeroSlidersHeight);
        
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);