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
            const desktopWrapper = document.createElement('div');
            desktopWrapper.className = 'iv-price-desktop';

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
        });  

        document.addEventListener('click', e => {
            if (e.target && e.target.querySelector('.iv-product-size')) {
                sessionStorage.setItem('ivSelectedUnit', e.target.querySelector('.iv-product-size').textContent);
                

                const row = e.target.closest('.iv-price-row:not(.iv-price-viewall)');
                if (!row) return;
                const card = row.closest('.pss-card-list');
                const facilityLink = card?.querySelector('.pss-button.viewAll')?.getAttribute('href');
                if (!facilityLink) return;
                window.location.href = facilityLink;
            }
        });
        
        document.addEventListener('click', (e) => {
            if (e.target.closest('.iv-price-row.iv-price-viewall')) {
                document.querySelector('.pss-card-list__featureboxes a[aria-label="View all units at this location"]').click();
            }
        });

        const selectedUnit = sessionStorage.getItem('ivSelectedUnit');
        console.log(selectedUnit);

        var checkItem = setInterval(() => {
            if(document.querySelectorAll('.pss-unit-list__item__row').length) {
                clearInterval(checkItem);

                setTimeout(() => {
                    if (selectedUnit) {
                        for (const row of document.querySelectorAll('.pss-unit-list__item__row')) {
                            const sizeEl = row.querySelector('.sizes > span + span');
                            if (!sizeEl) continue;

                            const sizeText = sizeEl.textContent
                                .toLowerCase()
                                .replace(/\s+/g, '');

                            if (sizeText === selectedUnit) {
                                row.classList.add('iv-unit-matched');
                                row.querySelector('.expand-collapse-link')?.click();
                                break; // ✅ loop stops
                            }
                        }
                    }
                }, 500);
            }
        }, 100);
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
