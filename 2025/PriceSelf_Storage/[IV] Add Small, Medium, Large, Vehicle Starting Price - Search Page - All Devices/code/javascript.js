function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-starting-price')) {
        document.querySelector('body').classList.add('iv-starting-price');

        const cards = document.querySelectorAll('#MainContent_LocationRepeater .pss-card-list');
        cards.forEach((card, index) => {
            const cardWrapper = card.querySelector('.pss-card-list__featureboxes-wrapper'); 

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
                WINE: winePrice
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

                const textEl = document.createElement('span');
                textEl.textContent = 'Starting at';

                const priceLabel = document.createElement('div');
                priceLabel.className = 'iv-label-price';
                const priceLabelText = document.createElement('strong');
                priceLabelText.textContent = `$${value}`;
                priceLabel.appendChild(priceLabelText);

                if (label === 'VEHICLE') {
                    const img = document.createElement('img');
                    img.src = 'https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/PriceSelfStorage/Car.png';
                    img.alt = 'Vehicle Storage Icon';
                    img.title = 'Vehicle Storage Icon';
                    img.setAttribute('aria-label', 'vehicle-storage-icon');
                    priceLabel.appendChild(img);
                }

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
            cardWrapper.prepend(container); 
        }); 
        
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