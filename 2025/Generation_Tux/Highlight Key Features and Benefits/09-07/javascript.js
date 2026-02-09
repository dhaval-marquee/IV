// Observer
function observerElm(target, callbackFn) {
    var config = {
        childList: true,
        attributes: true,
        subtree: true,
    };
    var callback = function(mutationsList, observer) {
        callbackFn(mutationsList, observer);
    };
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
}
function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-highlight')) {
        document.querySelector('body').classList.add('iv-highlight');

        var targetElement = document.body;
        observerElm(targetElement, function(mutationsList, observer) {
            updateCode();
        });

        function updateCode() {
            const path = window.location.pathname;
            const segments = path.split('/').filter(Boolean);
            if (segments[0] === 'collection' && segments.length === 3 && document.querySelector('.product-detail-page')) {
                const mainCotain = setInterval(() => {
                    if (document.querySelector('h1').closest('.col-span-12')) {
                        clearInterval(mainCotain)
                        document.querySelector('h1').closest('.col-span-12').classList.add('main-contain')

                        const reviewsHeading = document.querySelector('.main-contain h1').closest('.space-y-8');
                        const reviewsHeadingClonedSec = reviewsHeading.cloneNode(true);

                        const reviewCheck = reviewsHeading ?
                            `${reviewsHeadingClonedSec.innerHTML}` : '';


                        let productImg = document.querySelector('.image-num-1 picture');

                        if (!productImg) {
                            productImg = document.querySelector('#main-content > div:first-child picture');
                        }

                        const productImgClonedSec = productImg.cloneNode(true);


                        const productBtn = document.querySelector('.main-contain [role="button"]');
                        const productBtnHref = productBtn.href;
                        const productBtnName = productBtn.innerText;
                        const classes = [...productBtn.classList].join(' ');

                        const firtLinkTryOn = document.querySelector('a[class*="tracker-text-product_page-icon"]:first-child').href
                        const secondLinkTryOn = document.querySelector('a[class*="tracker-text-product_page-icon"]:nth-child(2)').href

                        const tryOnSvg = `<svg viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg" class="fill-current text-black"><title>Clothing Hanger</title><path fill-rule="evenodd" clip-rule="evenodd" d="M7.543 4l7.31 3.303.026.013c.17.088.43.222.648.405.226.19.473.488.473.907 0 .367-.074.737-.338 1.01-.271.28-.647.362-1.018.362H1.356c-.37 0-.747-.081-1.018-.361C.074 9.365 0 8.995 0 8.628c0-.42.248-.718.473-.907.218-.183.479-.317.648-.405l.015-.007L7.543 4zm.028 1.022L1.577 8.117a2.712 2.712 0 00-.489.297c-.129.108-.147.175-.147.214 0 .273.06.36.083.384.017.017.083.073.332.073h13.288c.248 0 .315-.056.332-.073.024-.024.083-.111.083-.384 0-.039-.018-.106-.147-.214a2.654 2.654 0 00-.478-.292l-6.863-3.1z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M6.391.424C6.674.118 7.067 0 7.5 0c.376 0 .753.127 1.04.41.293.29.46.708.46 1.215 0 .378-.088.684-.235.931-.144.243-.331.407-.494.525a4.053 4.053 0 01-.227.15l-.01.006c-.065.041-.112.07-.15.098a.707.707 0 00-.009.006V5h-.75V3.25c0-.331.237-.515.343-.591a3.38 3.38 0 01.2-.131c.066-.042.127-.08.186-.123a.97.97 0 00.28-.288.93.93 0 00.116-.492c0-.305-.095-.495-.215-.613a.75.75 0 00-.535-.2c-.317 0-.486.086-.579.186-.092.1-.171.284-.171.627H6c0-.469.108-.895.391-1.201z"></path></svg>`
                        const shippingSvg = `<svg viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg" class="fill-current text-black"><title>Truck</title><path fill-rule="evenodd" clip-rule="evenodd" d="M15 1H7v7h8V1zm1-1v9H6V0h10z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.414 5H1v3h5V3H4.414l-2 2zM4 2h3v7H0V4h2l2-2z"></path><path d="M5 11a2 2 0 100-4 2 2 0 000 4zM12 11a2 2 0 100-4 2 2 0 000 4z"></path></svg>`

                        const hanger = document.querySelector('[class*=tracker-text-product_page-icon_callout_hto]') ?
                            `<li><a href="${firtLinkTryOn}">${tryOnSvg} <span class="iv-key-text">hassle-free home try-on</span></a></li>` :
                            '';

                        const swatchImg = document.querySelector('.main-contain [data-testid="swatch"] img');
                        const swatchLi = swatchImg ?
                            `<li class="iv-swatches"><a href="${secondLinkTryOn}"><span class="iv-swatches-img"> <span class="iv-swatche-line"></span><span class="iv-swatch-img">${swatchImg.outerHTML}</span></span> <span class="iv-key-text">free swatches</span></a></li>` :
                            '';
                        const shipping = document.querySelector('[class*=tracker-text-product_page-icon_callout_ship]') ?
                            `<li class="iv-shiping">${shippingSvg} <span class="iv-key-text">free shipping</span></li>` :
                            '';
                        const highlightBottomBar = `
                            <div class="iv-highlight-bottom-bar">
                                <div class="iv-bottom-bar-container">
                                    <div class="iv-sec-left">
                                        <div class="iv-left-img">
                                            ${productImgClonedSec.outerHTML}
                                        </div>
                                        <div class="iv-hadingSec">
                                            ${reviewCheck}
                                            <div class="iv-redios">
                                                <div class="iv-redio-sec"></div>
                                                <div class="iv-redio-text"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="iv-sec-center">
                                        <ul class="iv-highlight-key">
                                            ${hanger}
                                            ${swatchLi}
                                            ${shipping}
                                        </ul>
                                    </div>
                                    <div class="iv-sec-right">
                                        <div class="iv-redios">
                                            <div class="iv-redio-sec"></div>
                                            <div class="iv-redio-text"></div>
                                        </div>
                                        <div class="iv-prod-btn">
                                            <a href="${productBtnHref}" class="${classes}">${productBtnName}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>`;

                        if (!document.querySelector('.iv-highlight-bottom-bar')) {
                            document.body.insertAdjacentHTML('beforebegin', highlightBottomBar);
                            if (document.querySelector('.iv-hadingSec > div:first-child')) {
                                if (document.querySelector('.iv-hadingSec > div:first-child').classList.contains('space-x-8')) {
                                    document.querySelector('.iv-hadingSec > div:first-child').classList.remove('space-x-8')
                                }
                                const reviewsElement = document.querySelector('.iv-hadingSec > div:first-child a:last-child');
                                const reviewsText = reviewsElement.innerText;
                                const reviewsNumber = parseInt(reviewsText.replace(/[^0-9]/g, ''), 10) || null;

                                if (reviewsNumber) {
                                    reviewsElement.innerText = reviewsNumber;
                                }
                            }

                            var targetElement = document.querySelector('.main-contain [role="button"]');
                            observerElm(targetElement, function(mutationsList, observer) {
                                const productBtn = document.querySelector('.main-contain [role="button"]');
                                const productBtnHref = productBtn.href;
                                const productBtnName = productBtn.innerText;
                                document.querySelector('.iv-sec-right a').href = productBtnHref;
                                document.querySelector('.iv-sec-right a').innerText = productBtnName;
                            });

                            document.querySelectorAll('[class*="tracker-cta-product_page-hero"]').forEach((heroCta) => {
                                const closestHero = heroCta.closest('.fixed');
                                if (closestHero) {
                                    closestHero.classList.add('iv-hide');
                                }
                            });

                            const productNameright = document.querySelector('.iv-hide').closest('.space-y-16');
                            if (productNameright && !document.querySelector('.iv-product-right')) {
                                productNameright.classList.add('iv-product-right');
                            }

                            // ------ redio section
                            // Redio section
                            const ivProductRight = document.querySelector('.iv-product-right');
                            const labels = ivProductRight.querySelectorAll('.main-contain label');
                            const ivRediosSections = document.querySelectorAll('.iv-redio-sec');
                            const ivSecRights = document.querySelectorAll('.iv-redio-text');

                            if (labels.length > 0 && ivRediosSections.length > 0) {

                                labels.forEach(label => {
                                    const itemsEnd = label.closest('.items-end') || label.parentNode.querySelector('.items-end');
                                    if (itemsEnd) {
                                        itemsEnd.classList.add('iv-radio-btn');
                                    }
                                    // Clone the label for each radio section
                                    ivRediosSections.forEach(ivRediosSection => {
                                        const duplicateLabel = label.cloneNode(true); // Create a new clone for each section
                                        ivRediosSection.appendChild(duplicateLabel);
                                    });
                                });

                                const pElements = document.querySelectorAll('.iv-radio-btn > p');

                                // Append text spans for each radio text section
                                pElements.forEach(p => {
                                    const span = document.createElement('span');
                                    span.textContent = p.textContent;
                                    ivSecRights.forEach(ivSecRight => {
                                        const spanClone = span.cloneNode(true); // Create a clone for each section
                                        ivSecRight.appendChild(spanClone);
                                    });
                                });
                                const elements = document.querySelectorAll('.iv-redio-sec label > span');

                                // Classes to check and remove
                                const classesToRemove = [
                                    'group-hover:border-gold-darker',
                                    'group-hover:bg-gold-lighter',
                                    'peer-focus:border-gold',
                                    'peer-focus:shadow-form-focus',
                                    'peer-disabled:cursor-not-allowed',
                                    'peer-disabled:border-transparent',
                                    'peer-disabled:bg-gray-lighter'
                                ];

                                elements.forEach(element => {
                                    classesToRemove.forEach(className => {
                                        if (element.classList.contains(className)) {
                                            element.classList.remove(className);
                                        }
                                    });
                                });

                                const firstRadios = document.querySelectorAll('.iv-redio-sec label:first-child input[type="radio"]');
                                const lastRadios = document.querySelectorAll('.iv-redio-sec label:last-child input[type="radio"]');

                                const firstTextSpans = document.querySelectorAll('.iv-redio-text span:first-child');
                                const lastTextSpans = document.querySelectorAll('.iv-redio-text span:last-child');

                                firstRadios.forEach((firstRadio, index) => {
                                    const lastRadio = lastRadios[index];
                                    const firstTextSpan = firstTextSpans[index];
                                    const lastTextSpan = lastTextSpans[index];
                                    const firstRadioBtn = document.querySelector('.main-contain .iv-radio-btn:first-child input[type="radio"]');
                                    const lastRadioBtn = document.querySelector('.main-contain .iv-radio-btn:last-child label input[type="radio"]');

                                    if (firstRadioBtn && lastRadioBtn) {
                                        firstRadioBtn.addEventListener('change', function() {
                                            firstRadio.click();
                                            firstRadio.checked = true;
                                        })
                                        lastRadioBtn.addEventListener('change', function() {
                                            lastRadio.click();
                                            lastRadio.checked = true;
                                        })
                                    }

                                    if (firstRadio && lastRadio) {
                                        firstRadio.addEventListener('change', function() {
                                            if (firstRadio.checked) {
                                                if (firstTextSpan) firstTextSpan.classList.add('iv-active');
                                                if (lastTextSpan) lastTextSpan.classList.remove('iv-active');
                                                if (lastRadio) lastRadio.checked = false;
                                                if (firstRadioBtn) firstRadioBtn.click();
                                                const hadingSecFirstRedioBtn = document.querySelector('.iv-hadingSec .iv-redio-sec label:first-child');
                                                if (hadingSecFirstRedioBtn) hadingSecFirstRedioBtn.click();
                                            }
                                        });

                                        lastRadio.addEventListener('change', function() {
                                            if (lastRadio.checked) {
                                                if (lastTextSpan) lastTextSpan.classList.add('iv-active');
                                                if (firstTextSpan) firstTextSpan.classList.remove('iv-active');
                                                if (firstRadio) firstRadio.checked = false;
                                                if (lastRadioBtn) lastRadioBtn.click();
                                                const hadingSecLastRedioBtn = document.querySelector('.iv-hadingSec .iv-redio-sec label:last-child');
                                                if (hadingSecLastRedioBtn) hadingSecLastRedioBtn.click();
                                            }
                                        });

                                        // Set default state for radios and spans
                                        firstRadio.checked = true;
                                        if (firstTextSpan) firstTextSpan.classList.add('iv-active');
                                        if (lastTextSpan) lastTextSpan.classList.remove('iv-active');
                                    }
                                });
                            } else {
                                if (document.querySelector('.iv-redios')) {
                                    document.querySelector('.iv-redios').classList.add('iv-no-redio')
                                }
                                const rentElements = document.querySelectorAll('.main-contain .iv-product-right .items-end p');
                                const redioSec = document.querySelector('.iv-redio-sec');
                                const redioText = document.querySelector('.iv-redio-text');

                                rentElements.forEach((p, index) => {
                                    const span = document.createElement('span');
                                    span.textContent = p.textContent;
                                    if (index === 0) {
                                        redioSec.appendChild(span);
                                    } else if (index === 1) {
                                        redioText.appendChild(span);
                                    }
                                });

                            }

                            function toggleHighlightBottomBar() {
                                const highlightBottomBar = document.querySelector('.iv-highlight-bottom-bar');

                                if (!highlightBottomBar) return;

                                if (window.scrollY > 200) {
                                    highlightBottomBar.classList.remove('iv-bar-hide');
                                    highlightBottomBar.classList.add('scroll');
                                } else {
                                    highlightBottomBar.classList.add('iv-bar-hide');
                                    highlightBottomBar.classList.remove('scroll');
                                }
                            }

                            // Add event listener for scroll
                            window.addEventListener('scroll', toggleHighlightBottomBar);

                            // Initialize on page load
                            toggleHighlightBottomBar();

                        }
                    }

                }, 500);
            } else {
                if (document.querySelector('.iv-highlight-bottom-bar')) {
                    document.querySelector('.iv-highlight-bottom-bar').remove();
                }
            }
        }
    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('.product-detail-page')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);