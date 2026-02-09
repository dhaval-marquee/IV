function loadTestCode() {
    document.querySelector('body').classList.add('sticky_bar_iv');
    
    document.querySelectorAll('strong').forEach((strong) => {
        if (strong.innerText == "Sessions:") {
            strong.closest('.w-full').classList.add('iv-price-bar-full')
        }
    })

    if (document.querySelector('.iv-price-bar-full')) {
        const firstTime = document.querySelector('.iv-price-bar-full .inline-flex:first-child span:first-child').innerText;
        const firstPrice = document.querySelector('.iv-price-bar-full .inline-flex:first-child span:last-child').innerText;
        const secondTime = document.querySelector('.iv-price-bar-full .inline-flex:last-child span:first-child').innerText;
        const secondPrice = document.querySelector('.iv-price-bar-full .inline-flex:last-child span:last-child').innerText;

        const ivStickyBar = `<div class="iv-price-bar-main"><div class="mb-4 flex w-full justify-center flex-wrap items-center gap-x-4 rounded-lg p-4 font-light text-neutral-11 iv-price-bar">
            <strong class="font-bold text-foreground">Sessions:</strong>
            <div class="flex flex-wrap gap-x-4">
                <div class="inline-flex gap-x-3 items-center">
                    <span>${firstTime}</span>
                    <span>${firstPrice}</span>
                </div>
                <div class="inline-flex gap-x-3 items-center">
                    <span>${secondTime}</span>
                    <span>${secondPrice}</span>
                </div>
            </div>
        </div></div>`;

        if (!document.querySelector('.iv-price-bar')) {
            
            if(document.querySelectorAll('.iv-price-bar-main').length == 0){
                document.body.insertAdjacentHTML('beforeend', ivStickyBar);
            }

            if(!document.querySelector('.iv-grid-headibg')){
                document.querySelector('h2').closest('div').classList.add('iv-grid-headibg');
            }

            function isElementVisible(element) {
                if (!element) return false;
                const heading = document.querySelector('.iv-grid-headibg').offsetHeight;
                const rect = element.getBoundingClientRect();
                return rect.top < window.innerHeight && rect.bottom > heading;
            }

            function togglePriceBar() {
                const fullPriceBar = document.querySelector('.iv-price-bar-full');
                const priceBar = document.querySelector('.iv-price-bar');

                if (priceBar) {
                    if (isElementVisible(fullPriceBar)) {
                        priceBar.style.display = 'none';
                    } else {
                        priceBar.style.display = 'flex';
                    }
                }
            }

            function adjustPriceBar() {
                const header = document.querySelector('header > div');
                const priceBar = document.querySelector('.iv-price-bar');

                if (header && priceBar) {
                    const headerHeight = header.offsetHeight;
                    priceBar.style.top = `${headerHeight}px`;
                }
            }

            togglePriceBar();
            adjustPriceBar();
            window.addEventListener('load', () => {
                adjustPriceBar();
                togglePriceBar();
            });
            window.addEventListener('resize', () => {
                adjustPriceBar();
                togglePriceBar();
            });
            window.addEventListener('scroll', () => {
                togglePriceBar();
                adjustPriceBar();
            });
            
        }

        let buttons = document.querySelectorAll(".filter-accordion button");
        if(buttons){
            buttons.forEach((button, index) => {
                button.click();
            });
        }

        document.querySelectorAll('section header').forEach((head) => {
            if (head.innerText === 'Filters' && !document.querySelector('.iv-sidebar-filtter')) {
                head.closest('section').classList.add('iv-sidebar-filtter');
            }
        });

        const ivAvailabilityDay = document.querySelectorAll('.sticky_bar_iv section #filter-form section div button[type="button"].peer');

        if (ivAvailabilityDay) {
            ivAvailabilityDay.forEach((days) => {
                days.closest('div').classList.add('iv-availability-day');
            })
        }
        
        const ivmMobFilter = document.querySelector('.sticky_bar_iv section div button[aria-label="Open Filters"]');
        if (ivmMobFilter) {
            ivmMobFilter.parentElement.classList.add('iv-mob-filter-section');
        }

        const ivMobFilterinner = `<div class="iv-mob-filter-inner">
                                        <span class="iv-mob-filter-text">Filters</span>
                                </div>`;

        if (ivmMobFilter && !document.querySelector('.iv-mob-filter-inner')) {
            ivmMobFilter.insertAdjacentHTML('beforebegin', ivMobFilterinner);
            var newDiv = document.querySelector('.iv-mob-filter-inner');
            newDiv.appendChild(ivmMobFilter);
        }

        var section = document.querySelector('.iv-mob-filter-section');
        var stickyOffset = section.offsetTop;

        window.onscroll = function() {
            if (window.pageYOffset > stickyOffset) {
                section.classList.add('sticky');
            } else {
                section.classList.remove('sticky');
            }
        };


        let styleTag = document.createElement("style");
        styleTag.innerHTML = `
            
            
            @media (min-width: 768px) {
                .sticky_bar_iv .iv-price-bar-main{
                    display: none;
                }
                .sticky_bar_iv .iv-mob-filter-text{
                    display: none;
                }
            }

            @media (max-width:767px) {
                .iv-sidebar-filtter {
                    position: sticky;
                    top: 100px;
                    height: 100%;
                }
                .sticky_bar_iv section #filter-form .filter-accordion,
                .sticky_bar_iv section #filter-form section{
                    padding: 5px 16px;
                }
                .sticky_bar_iv section #filter-form > label {
                    padding-bottom: 5px;
                }
                .iv-availability-day {
                    margin: 4px 10px 4px 0;
                }
                
                    
                .iv-price-bar {
                    position: fixed;
                    max-width: 100%;
                    z-index: 99;
                    width: 100%;
                    background: #00176e;
                    color: #fff;
                    border-radius: 0;
                    margin: 0;
                    box-shadow: 0px 10px 20px #00000052;
                    padding: 12px;
                    display: none; /* Initially hidden */
                }
                .iv-price-bar strong {
                    color: #fff;
                    font-weight: 500;
                }

                .iv-price-bar-full{
                    background-color: #00176e;
                    justify-content: center;
                    color: #fff;
                }
                .iv-price-bar-full strong{
                    color: #fff;
                }

                .iv-price-bar {
                    padding: 10px;
                }

                .iv-price-bar-full, .iv-price-bar {
                    gap: 10px;
                    flex-wrap: nowrap;
                }
                .iv-price-bar-full > div, .iv-price-bar > div {
                    flex-wrap: nowrap;
                    gap: 10px;
                }
                .iv-price-bar strong, .iv-price-bar-full strong {
                    font-size: 14px;
                    font-weight: 500;
                }
                .iv-price-bar span, .iv-price-bar-full > div{
                    font-size: 14px;
                    font-weight: 200;
                }
                .iv-price-bar-full > div > div , .iv-price-bar > div > div {
                    gap: 5px;
                }

                .iv-mob-filter-text {
                    font-size: 13px;
                    display: inline-block;
                    color: #001e6a;
                }
                .sticky_bar_iv section div h2 span {
                    font-weight: 400;
                    font-size: 13px;
                    text-align: center;
                    display: inline-block;
                }
                .iv-mob-filter-inner{
                    width: min-content;
                    text-align: center;
                }
                .iv-mob-filter-inner button {
                    padding: 5px 13px;
                    min-height: auto !important;
                }
                .sticky_bar_iv section div button[aria-label="Sort By"] {
                    width: 180px;
                }
                .iv-mob-filter-section.sticky {
                    position: fixed;
                    top: 106px;
                    left: 0;
                    width: 100%;
                    z-index: 1000;
                    background-color: #fff;
                    box-shadow: 0px 2px 7px rgba(0, 0, 0, .1);
                    padding: 5px 20px;
                }
            }
        `;
        document.head.appendChild(styleTag);
    }
}

// Check condition and initialize the code
function isBaseUrlMatch() {
    const currentUrl = window.location.origin + window.location.pathname;
    const baseUrl = 'https://book.tutoring.k12.com';

    return currentUrl.replace(/\/$/, '') === baseUrl.replace(/\/$/, '');
}

function onLocationChange() {
    if (isBaseUrlMatch()) {
        
        const checkCondition = setInterval(() => {
            if (document.querySelector('body')) {
                clearInterval(checkCondition);
                loadTestCode();
            }
        }, 2500);

    } else {

        const priceBar = document.querySelector('.iv-price-bar-main');
        if (priceBar) {
            priceBar.remove()
        }

    }
}

function overrideHistoryMethod(method) {
    const original = history[method];
    history[method] = function (...args) {
        const result = original.apply(this, args);
        window.dispatchEvent(new Event('locationchange'));
        return result;
    };
}

overrideHistoryMethod('pushState');
overrideHistoryMethod('replaceState');

window.addEventListener('popstate', onLocationChange);
window.addEventListener('locationchange', onLocationChange);

document.addEventListener('DOMContentLoaded', onLocationChange);

onLocationChange();