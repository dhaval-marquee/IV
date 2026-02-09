function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-price-bar')) {
        document.querySelector('body').classList.add('iv-sticky-price-bar');

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

            const ivStickyBar = `<div class="mb-4 flex w-full justify-center flex-wrap items-center gap-x-4 rounded-lg p-4 font-light text-neutral-11 iv-price-bar">
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
            </div>`;

            if (!document.querySelector('.iv-price-bar')) {
                document.body.insertAdjacentHTML('beforeend', ivStickyBar);

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
        }

    }
}
// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 2000);