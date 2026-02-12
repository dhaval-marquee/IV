function runIVTests() {
    if (!document.querySelector('body').classList.contains('iv-pdp-revamp')) {
        document.querySelector('body').classList.add('iv-pdp-revamp');

        // Open defult accordion on load
        let isDesktop = null;

        function handleAccordionClick() {
            const summaries = document.querySelectorAll('#product-extra-information details summary');
            const nowDesktop = window.innerWidth >= 768;
            if (isDesktop === nowDesktop) return;
            isDesktop = nowDesktop;

            summaries.forEach(function (summary) {
                const details = summary.parentElement;
                if (nowDesktop && !details.open) {
                    summary.click();
                }
                if (!nowDesktop && details.open) {
                    summary.click();
                }
            });
        }
        handleAccordionClick();
        window.addEventListener('load', handleAccordionClick);
        window.addEventListener('resize', handleAccordionClick);


        // Move Description Info as last child
        (() => {
            const container = document.querySelector('#product-extra-information');
            if (!container) return;

            const disclosures = Array.from(
                container.querySelectorAll('accordion-disclosure')
            );

            const descriptionAccordion = disclosures.find(disclosure => {
                const title = disclosure.querySelector(
                    '.accordion__toggle span:first-child'
                );
                return title && title.textContent.trim() === 'Description';
            });

            if (descriptionAccordion) {
                descriptionAccordion.classList.add('iv-description');
                container.appendChild(descriptionAccordion);
            }
        })();

        // Move Badge after price
        const badgeList = document.querySelector('.product-info .feature-badge-list');
        const priceBlock = document.querySelector('.product-info [data-block-id="price"]');

        if (badgeList && priceBlock) {
            const clonedBadgeList = badgeList.cloneNode(true);
            clonedBadgeList.classList.add('iv-feature-badge-list');
            priceBlock.insertAdjacentElement('afterend', clonedBadgeList);
        }

        const interval = setInterval(() => {
            const productInfo = document.querySelector('#product-extra-information');
            const fbtElement = document.querySelector('#rbr-container-element-fbt');

            if (!productInfo || !fbtElement) return;

            productInfo.after(fbtElement);
            clearInterval(interval);
        }, 1000);

        document.querySelector('div[data-block-type="buy-buttons"]').insertAdjacentHTML('afterend',`<a href="javascript:;" class="stethoscopeBtn">Bundle this stethoscope</a>`);

        // Scroll function on click
        document.querySelector('.stethoscopeBtn').addEventListener('click', function() {
            const formSection = document.querySelector('#rbr-container-element-fbt');
            if (formSection) {
                const headerHeight = document.querySelector('header').getBoundingClientRect().height; 
                const sectionTop = formSection.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        });

        // carousel for the thumbnail
         function loadCSS(href) {
            return new Promise(function (resolve) {
            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.onload = resolve;
            document.head.appendChild(link);
            });
        }

        function loadScript(src) {
            return new Promise(function (resolve) {
            var script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            document.body.appendChild(script);
            });
        }

        function initSlick() {

            var $thumbs = $('product-gallery-navigation');

            if (!$thumbs.length) return;

            if ($thumbs.hasClass('slick-initialized')) {
            $thumbs.slick('unslick');
            }

            $thumbs.slick({
                vertical: true,
                slidesToShow: 8,
                slidesToScroll: 1,
                infinite: false,
                arrows: true,
                dots: false,
                adaptiveHeight: false,
                prevArrow: '<button type="button" class="slick-prev">↑</button>',
                nextArrow: '<button type="button" class="slick-next">↓</button>',
                responsive: [
                    {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 6
                    }
                    },
                    {
                    breakpoint: 768,
                    settings: {
                        vertical: false,
                        slidesToShow: 4
                    }
                    }
                ]
            });

        }

        async function start() {
            await loadCSS("https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css");
            await loadCSS("https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css");

            await loadScript("https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js");

            setTimeout(initSlick, 100);
        }
        start();

    }
}

runIVTests();
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", runIVTests);
} else {
    runIVTests();
}