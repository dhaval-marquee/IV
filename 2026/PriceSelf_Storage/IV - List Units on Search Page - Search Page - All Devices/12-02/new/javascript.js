function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-starting-price')) {
        document.querySelector('body').classList.add('iv-starting-price');

        // Phone Number get
        var phoneEls = document.querySelectorAll('.pss-card-list__featureboxes .pss-card-list__phone-number');
        var subtitleEls = document.querySelectorAll('.pss-card-list__subtitle');

        subtitleEls.forEach((subtitle, index) => {
            var phoneEl = phoneEls[index];
            if (!phoneEl) return;

            var match = phoneEl.textContent.match(/\d{3}-\d{3}-\d{4}/);
            var phoneNumber = match ? match[0] : '';

            subtitle.insertAdjacentHTML('afterend',`<div class="unitsBoxNumber">
                <div class="imgWrapper">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1768907435/PriceSelfStorage/phone-icon.svg" alt="Phone icon">
                </div>
                <div class="phoneNumberText"><a href="tel:${phoneNumber}">${phoneNumber}</a></div>
            </div>`);
        });

        // rating Review Wrapper 
        document.querySelectorAll('[id^="divRat_"]').forEach(rating => {
            const title = rating.closest('.pss-card-list__title');
            const review = title?.querySelector('.pss-rating__review');
            if (!review) return;

            const wrapper = document.createElement('div');
            wrapper.className = 'ratingReviewWrapper';

            rating.before(wrapper);
            wrapper.append(rating, review);
        });
    
        const cards = document.querySelectorAll('#MainContent_LocationRepeater .pss-card-list');
        cards.forEach((card, index) => {
            const cardWrapper = card.querySelector('.pss-card-list__top-wrapper'); 

            if (!cardWrapper) return;
            if (cardWrapper.querySelector('.iv-price-section')) return; 

            const unitDiv = document.querySelector(`#MainContent_LocationRepeater_unitsStartingPrice_${index}`);
            const vehicleDiv = document.querySelector(`#MainContent_LocationRepeater_vehicleStorage_${index}`);
            const wineDiv = document.querySelector(`#MainContent_LocationRepeater_wineStorage_${index}`);
            if (!unitDiv && !vehicleDiv && !wineDiv) return;
            
            let cityKey = '';
            const inputExample = unitDiv?.querySelector('input[id^="small_"]');
            if (inputExample) {
                cityKey = inputExample.id.replace(/^small_/, '');
            }

            const getValue = (container, id) => {
                const input = container?.querySelector(`#${id}`);
                return input && !isNaN(parseFloat(input.value)) ? parseFloat(input.value).toFixed(0) : null;
            };

            // VEHICLE 
            let vehiclePrice = null;
            if (vehicleDiv) {
                const vehicleInputs = vehicleDiv.querySelectorAll('input[id^="vehicle_"]');
                let lowest = Infinity;
                vehicleInputs.forEach(input => {
                    const val = parseFloat(input?.value);
                    if (!isNaN(val) && val < lowest) lowest = val;
                });
                if (lowest !== Infinity) vehiclePrice = lowest.toFixed(0);
            }

            // WINE 
            let winePrice = null;
            if (wineDiv) {
                const wineInputs = wineDiv.querySelectorAll('input[id^="wine_"]');
                let lowest = Infinity;
                wineInputs.forEach(input => {
                    const val = parseFloat(input?.value);
                    if (!isNaN(val) && val < lowest) lowest = val;
                });
                if (lowest !== Infinity) winePrice = lowest.toFixed(0);
            }

            const prices = {
                SMALL: cityKey ? getValue(unitDiv, `small_${cityKey}`) : null,
                MEDIUM: cityKey ? getValue(unitDiv, `medium_${cityKey}`) : null,
                LARGE: cityKey ? getValue(unitDiv, `large_${cityKey}`) : null,
                VEHICLE: vehiclePrice,
                WINE: winePrice,
                ViewAll: 'View All'
            };

            if (!Object.values(prices).some(Boolean)) return;

            let minPrice = Infinity;
            let minKey = '';
            const desktopWrapper = document.createElement('a');
            desktopWrapper.href = card.querySelector('.pss-button.viewAll').getAttribute('href');
            desktopWrapper.className = 'iv-price';

            Object.entries(prices).forEach(([label, value]) => {
                if (!value) return;
                if (parseFloat(value) < minPrice) {
                    minPrice = parseFloat(value);
                    minKey = label.toLowerCase();
                }

                const row = document.createElement('div');
                row.className = `iv-price-row iv-price-${label.toLowerCase()}`;
                row.setAttribute('aria-label', `${label.charAt(0).toUpperCase()}${label.slice(1).toLowerCase()} storage starting at $${value}`);

                const labelEl = document.createElement('strong');
                labelEl.textContent = label;

                const sizeMap = {
                    SMALL: '5x5',
                    MEDIUM: '10x10',
                    LARGE: '10x20',
                    VEHICLE: '10x20'
                };

                const textEl = document.createElement('span');
                textEl.className = 'iv-product-size';
                textEl.textContent = sizeMap[label];


                const priceLabel = document.createElement('div');
                priceLabel.className = 'iv-label-price';
                const priceLabelText = document.createElement('div');
                priceLabelText.innerHTML = `<span>$${value}</span>/mo`;
                priceLabel.appendChild(priceLabelText);

                row.appendChild(labelEl);
                row.appendChild(textEl);
                row.appendChild(priceLabel);
                desktopWrapper.appendChild(row);
            }); 

            const container = document.createElement('div');
            container.className = 'iv-price-section';
            container.setAttribute('role', 'region');
            container.setAttribute('aria-label', 'Storage Price Section');

            container.appendChild(desktopWrapper);
            cardWrapper.after(container); 
            container.insertAdjacentHTML('afterbegin', `<h2 class="startingAt">Starting at:</h2>`);
            
        });  

        document.addEventListener('click', e => {
            if (e.target && e.target.closest('.iv-price-section') && e.target.querySelector('.iv-product-size') && e.target.querySelector('.iv-price-row strong')) {

                const selectedUnitSize = e.target.querySelector('.iv-product-size')?.textContent.toLowerCase().replace(/\s+/g, '');
                let selectedUnitType = e.target.querySelector('.iv-price-row strong')?.textContent.toLowerCase().replace(/\s+/g, '');

                if(selectedUnitType == 'vehicle') {
                    selectedUnitType = 'parking';
                }

                sessionStorage.setItem('ivSelectedUnitSize', selectedUnitSize);
                sessionStorage.setItem('ivSelectedUnitType', selectedUnitType);
            }
        });
        
        // Get session storage on page
        const selectedUnitSize = sessionStorage.getItem('ivSelectedUnitSize');
        const selectedUnitType = sessionStorage.getItem('ivSelectedUnitType');

        function UnitTypeAndSizeDesktop() {
            // UnitType and Size checkItem for Desktop
            var checkItem = setInterval(() => {
                if(document.querySelectorAll('.pss-unit-list__item__row').length) {
                    clearInterval(checkItem);
    
                    setTimeout(() => {
                        if (selectedUnitSize && selectedUnitType) {
                            for (const row of document.querySelectorAll('.pss-unit-list__item__row')) {
                                const sizeEl = row.querySelector('.sizes > span + span');
                                if (!sizeEl) continue;
    
                                const sizeText = sizeEl.textContent.toLowerCase().replace(/\s+/g, '');
                                const typeText = row.querySelector('.sizes > span').textContent.toLowerCase().replace(/\s+/g, '');
                                
                                if (sizeText == selectedUnitSize && typeText == selectedUnitType) {
                                    row.classList.add('iv-unit-matched');
                                    row.querySelector('.expand-collapse-link')?.click();
                                    break; // ✅ loop stops
                                } else {
                                    console.log('No match found for row:');
                                }
                                    
                            }
                        }
                    }, 600);
                }
            }, 200);
        }

        function UnitTypeAndSizeMobile() {
            // UnitType and Size checkItem for Mobile
            var checkItem = setInterval(() => {
                if (document.querySelectorAll('#repDataMobile_0 .pss-unit-list__container').length) {
                    clearInterval(checkItem);
    
                    setTimeout(() => {
                        if (selectedUnitSize && selectedUnitType) {
                            for (const row of document.querySelectorAll('#repDataMobile_0 .pss-unit-list__container')) {
                                const titleEl = row.querySelector('.pss-item-card-holder-left-title');
                                if (!titleEl) continue;
    
                                // ✅ SIZE (5x5 / 10x10 / 10x20)
                                const sizeMatch = titleEl.textContent.toLowerCase().match(/\d+\s*x\s*\d+/);
                                const sizeText = sizeMatch ? sizeMatch[0].replace(/\s+/g, '') : '';
    
                                // ✅ TYPE (small / medium / large)
                                const typeText = titleEl.textContent
                                    .toLowerCase()
                                    .replace(/\d+\s*x\s*\d+/g, '')
                                    .trim();
    
                                if (sizeText === selectedUnitSize && typeText === selectedUnitType) {
                                    // scroll to the matched row
                                    row.classList.add('pssUnitList_active');
                                    row.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                    break; // stop loop
                                }
                            }
                        }
                    }, 500);
                }
            }, 100);
        }

        document.addEventListener('click', (e) => {
            if (e.target.closest('.iv-price-row.iv-price-viewall')) {
                document.querySelector('.pss-card-list__featureboxes a[aria-label="View all units at this location"]').click();
            }
        });

        function runCode() {
            var ivInterval = setInterval(() => {
                const priceBoxes = document.querySelectorAll('.iv-price-section');
                const viewAllBtns = document.querySelectorAll(
                    '.iv-starting-price #MainContent_LocationRepeater .pss-visible-mobile-only3 .viewAll'
                );

                if (!priceBoxes.length || !viewAllBtns.length) return;

                clearInterval(ivInterval);

                priceBoxes.forEach((box, index) => {
                    if (viewAllBtns[index]) {
                    box.insertAdjacentElement('afterend', viewAllBtns[index]);
                    }
                });
                var ivImgInterval = setInterval(() => {
                const imgs = document.querySelectorAll('.pss-card-list__imagebox a img');

                if (!imgs.length) return;

                clearInterval(ivImgInterval);

                imgs.forEach(img => {
                    const src = img.getAttribute('src');

                    if (src && !img.getAttribute('data-src')) {
                    img.setAttribute('data-src', src);
                    }
                });

            }, 100);


            }, 100);

            document.querySelectorAll('img[id^="img_"][data-src]').forEach(img => {
                img.src = img.getAttribute('data-src');
                img.classList.remove('lazy'); // optional
            });
        }

        function searchBar() {
            // Map 
            var searchbarInterval = setInterval(() => {
                if(document.querySelectorAll('#map .gm-style iframe').length > 0) {
                    clearInterval(searchbarInterval);
                    document.querySelector('#map .gm-style iframe').before(document.querySelector('h1 + .pss-search-form'));
                }
            }, 100);
        }

        function FacilityPagesMobileCodeRun() {
            // Add back button inside each item card
            const intervalItem = setInterval(() => {
                const itemCards = document.querySelectorAll('.pss-unit-list__container .pss-unit-list__item-card');
                if (itemCards.length) {
                    itemCards.forEach(card => {
                        if (!card.querySelector('.back-to-listing')) {
                            clearInterval(intervalItem);
                            card.insertAdjacentHTML('afterbegin', `
                                <a class="back-to-listing" href="javascript:;" style="display:none;">
                                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1765002343/PriceSelfStorage/back-arrow.png" 
                                        style="vertical-align: middle; margin-right: 5px;" />Back to listing
                                </a>
                            `);
                        }
                    });
                }
            }, 500);
    
            // Main title
            const intervalTitle = setInterval(() => {
                const titleElement = document.querySelector('.pss-facility__h1-holder h1');
                const targetContainers = document.querySelectorAll('.pss-item-card-holder-right');
                if (titleElement && targetContainers.length) {
                    const titleItem = titleElement.innerText;
                    targetContainers.forEach(container => {
                        if (!container.querySelector('h3')) {
                            container.insertAdjacentHTML('afterbegin', `<h3 class="iv-title-item">${titleItem}</h3>`);
                        }
                    });
                    clearInterval(intervalTitle);
                }
            }, 500);
    
            // SELECT BUTTON CLICK
            document.addEventListener("click", function (e) {
                const btn = e.target.closest(".pss-item-card-holder-right .pss-item-card-right-button > a");
                if (btn) {
                    const clickedItem = btn.closest("#repDataMobile_0 > div");
                    const isActive = clickedItem.classList.contains("active-item");
    
                    const allItems = document.querySelectorAll("#repDataMobile_0 > div");
                    const extraSections = document.querySelectorAll(`
                        #MainContent_pnlNearbyLocations,
                        .pss-facility-faq-holder,
                        .pss-facility__features,
                        .pss-facility__video-tour,
                        .pss-facility__areas-served,
                        .pss-facility__reviews,
                        .pss-item-card-banner-box,
                        .pss-item-card-holder .pss-item-card-holder-left-title,
                        .pss-item-card-holder .pss-item-card-holder-left-items,
                        .pss-filters-sort.pss-unit-list--filters-mobile,
                        .pss-unit-list__sorting-filters-container-mobile,
                        .pss-notification-fee-banner,
                        .pss-unit-list > #MainContent_Panel1 > div.font-regular-medium:first-child,
                        .pss-facility__renting-online-holder,
                        .pss-facility__content-holder-mobile,
                        .pss-facility__main-title,
                        .iv-storage-box,
                        .pss-breadcrumb, 
                        #MainContent_PromoBannerControl_pnlPromo
                    `);
    
                    if (!isActive) {
                        // FIRST CLICK > hide others
                        allItems.forEach(item => item.style.display = item === clickedItem ? "" : "none");
                        extraSections.forEach(section => section && (section.style.display = "none"));
                        document.body.classList.add("iv-accordion-mobile");
                        document.body.classList.add("iv-active-item");
                        clickedItem.classList.add("active-item");
    
                        // Show back button
                        const backBtn = clickedItem.querySelector(".back-to-listing");
                        if (backBtn) backBtn.style.display = "block";
                    } else {
                        // SECOND CLICK > revert everything
                        allItems.forEach(item => item.style.display = "");
                        extraSections.forEach(section => section && (section.style.display = ""));
                        document.body.classList.remove("iv-accordion-mobile");
                        document.body.classList.remove("iv-active-item");
                        clickedItem.classList.remove("active-item");
    
                        // Hide back button
                        const backBtn = clickedItem.querySelector(".back-to-listing");
                        if (backBtn) backBtn.style.display = "none";
                    }
    
                    // window.scrollTo({ top: 0, behavior: 'instant' });
    
                    const promoElements = document.querySelectorAll(
                        '.pss-unit-list__item-mobile .pss-promo-title span'
                    );
                    const targetContainers = document.querySelectorAll(
                        '.pss-left-right-boxes-in-collapse .pss-unit-list__collapse-container-left-side-form'
                    );
    
                    if (promoElements.length && targetContainers.length) {
                        promoElements.forEach((promoEl, index) => {
                            const targetContainer = targetContainers[index];
    
                            if (targetContainer && !targetContainer.querySelector('.iv-pss-promo-title')) {
                                const promoTitle = promoEl.innerText;
    
                                targetContainer.insertAdjacentHTML(
                                    'afterbegin',
                                    `<div class="iv-pss-promo-title"><span>${promoTitle}</span></div>`
                                );
                            }
                        });
                    }
    
                    /* Insert button text only once */
                    const rightSideDivs = document.querySelectorAll(
                        '.iv-active-item .pss-unit-list__collapse-container-right-side-form > div'
                    );
    
                    if (rightSideDivs[1] && !document.querySelector('.unitsButtonText')) {
                        rightSideDivs[1].insertAdjacentHTML(
                            // 'afterend',
                            // `<div class="unitsButtonText">Hold this unit FOR FREE</div>`
                        );
                    }
    
                    return;
                }
    
                // BACK BUTTON CLICK > trigger SELECT button click
                const backBtn = e.target.closest(".back-to-listing");
                if (backBtn) {
                    const clickedItem = backBtn.closest("#repDataMobile_0 > div");
                    const selectBtn = clickedItem.querySelector(".pss-item-card-holder-right .pss-item-card-right-button > a");
                    if (selectBtn) selectBtn.click();
                    return;
                }
            });
            // ======= ADA issue fix =======
            (function () {
                const setIframeTitle = (iframe, index) => {
                    if (
                        iframe.hasAttribute('aria-hidden') ||
                        iframe.getAttribute('tabindex') === '-1'
                    ) {
                        iframe.setAttribute('title', 'empty');
                        return;
                    }
    
                    if (iframe.hasAttribute('title')) return;
    
                    const src = iframe.getAttribute('src') || '';
    
                    let title = 'Embedded content';
    
                    if (src.includes('google')) title = 'Google service content';
                    else if (src.includes('map')) title = 'Location map';
                    else if (src.includes('chat')) title = 'Customer support chat';
                    else if (src.includes('youtube')) title = 'Video player';
                    else if (src.includes('facebook') || src.includes('instagram'))
                        title = 'Social media content';
    
                    iframe.setAttribute('title', title);
                };
    
                const processIframes = () => {
                    document.querySelectorAll('iframe').forEach(setIframeTitle);
                };
    
                processIframes();
    
                const observer = new MutationObserver(() => {
                    processIframes();
                });
    
                observer.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                });
            })();
        }

        document.querySelectorAll('.iv-price .iv-price-viewall strong').forEach(el => {
            el.textContent = 'View All';
        });

        // Load code for Desktop and Mobile 
        if (window.matchMedia("(min-width: 1200px)").matches) {
            searchBar();
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(max-width: 1199.98px)").matches) {
                    location.reload();
                }
            }, true);
        } else {
            if (window.matchMedia("(max-width: 767.98px)").matches) {
                runCode();
                FacilityPagesMobileCodeRun();
                UnitTypeAndSizeMobile();
            }
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(min-width: 768px)").matches) {
                    location.reload();
                }
            }, true);
        }
        // Load code for Desktop and Mobile 

        // Load code just for Mobile 
        if (window.matchMedia("(min-width: 768px)").matches) {

            UnitTypeAndSizeDesktop();

            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(max-width: 767.98px)").matches) {
                    location.reload();
                }
            }, true);
        } else {
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(min-width: 1025px)").matches) {
                    location.reload();
                }
            }, true);
        }
        // Load code just for Mobile over
    }
}

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

const interval = setInterval(() => {
    const target = document.querySelector('body');
    if (target) {
        clearInterval(interval);
        loadTestCode();
        observerElm(target, () => loadTestCode());
    }
}, 100);