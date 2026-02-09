function loadTestCode() {
    if (!document.querySelector('body').classList.contains('contactInfoIV')) {
        document.querySelector('body').classList.add('contactInfoIV');
        
        // Put your test code here
        document.querySelectorAll('.pss-reserve__promo-box')[0].classList.add('offerBanner');
        document.querySelector('.pss-reserve-leftbox').prepend(document.querySelector('.offerBanner'));
        // document.querySelector('.offerBanner').insertAdjacentHTML('beforeBegin', `
        //     <h2 class="reserveTitle">Reserve This</h2>
        //     <h5 class="reserveSubTitle">Lock in today's deal by completing your agreement</h5>
        // `);
        document.querySelector('.pss-reserve-leftbox').prepend(document.querySelector('.pss-steps'));

        const promoBoxContainer = document.querySelector('.offerBanner .pss-vertical-middle .pss-reserve__promo-box-container2');
        if (promoBoxContainer) {
            promoBoxContainer.innerHTML = promoBoxContainer.innerHTML.replace(/%/g, '');
        }

        // Change Date format
        const moveDate = document.querySelector('#txtDateMoveDateControl');
        if (moveDate && moveDate.getAttribute('value') !== '') {
            const originalDateString = moveDate.value;
            const [month, day, year] = originalDateString.split('/');
            const dateObject = new Date(year, month - 1, day);
            const monthNames = [
                "January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
            ];
            const formattedDate = `${monthNames[dateObject.getMonth()]} ${dateObject.getDate()}, ${dateObject.getFullYear()}`;

            console.log(formattedDate);
            document.querySelector('.reserveTitle').textContent =  "You\'ve reserved this for " + formattedDate;
        }

        var productTitle = document.querySelector('.mobile-unit-title span').textContent;
        const productSize = document.querySelector('.pss-reserve__promo .pss-reserve__unit-quick-info .pss-reserve__unit-quick-info-row2 span:first-child').textContent;
        const productAvailability = document.querySelector('.pss-reserve__promo .pss-reserve__unit-quick-info .pss-reserve__unit-quick-info-row4 span').textContent;
        var finalPrice = document.querySelector('.pss-reserve__promo .pss-reserve__unit-quick-info .pss-reserve__unit-quick-info-row2 span:last-child').textContent;
        var finalPrice = finalPrice.replace(/.00/g, '');

        document.querySelector('.contactInfoIV .pss-reserve-reservation-details').insertAdjacentHTML('beforebegin', `
            <div class="productDetailsBox">
                <div class="productImgWrapper">
                    <img src="https://www.priceselfstorage.com/upload/images/photogallery/desk-Price%20Self%20Storage%20-%20Norco%20-%20Drone%2006.webp" alt="Product Image" width="100%">
                </div>
                <div class="productDetails">
                    <div class="productDetailLeft">
                        <h4 class="productTitle">${productTitle}</h4>
                        <span class="productUnitText">Unit Details</span>
                        <div class="productSize">${productSize}</div>
                        <div class="productAvailability">${productAvailability}</div>
                    </div>
                    <div class="productDetailRight">
                        <span class="productDetailPrice">${finalPrice}</span>
                        <span class="productPriceText"></span>
                    </div>
                </div>
            </div>
        `);

        document.querySelector('.productPriceText').append(document.querySelector('.pss-reserve__promo .pss-reserve__unit-quick-info .pss-reserve__unit-quick-info-row1 span:last-child'));

        // Fit text if text is more than container width
        function fitText(container) {
            const text = container.querySelector('.productDetailPrice');
            let fontSize = parseInt(window.getComputedStyle(text).fontSize);
        
            while (text.scrollWidth > container.offsetWidth && fontSize > 10) { // Reduce until it fits or a min size
                fontSize--;
                text.style.fontSize = fontSize + 'px';
            }
        }

        window.addEventListener('resize', function() { // Adjust on resize
            const containers = document.querySelectorAll('.productDetailRight');
            containers.forEach(container => fitText(container));
        });
        dispatchEvent(new Event('resize')); // Trigger once on load


    
        var pageName = window.location.href.split('/')[5];
        var locationUrl = '//www.priceselfstorage.com/' + pageName + '/';
        jQuery('.contactInfoIV .productDetailsBox h4.productTitle').after('<div class="address-wrapper"></div>');
        jQuery('.address-wrapper').load(locationUrl + ' .pss-facility__content-address .pss-link span');


        
        function onlyMobileCode() {
            document.querySelector('.contactInfoIV .offerBanner').after(document.querySelector('.contactInfoIV .productDetailsBox'));
        }

        // Load code just for mobile 
        if (window.matchMedia("(max-width: 767.98px)").matches) {

            onlyMobileCode();

            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(min-width: 768px)").matches) {
                    location.reload();
                }
            }, true);
        } else {
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(max-width: 767.98px)").matches) {
                    location.reload();
                }
            }, true);
        }
        // Load code just for mobile over

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0 && 
        document.querySelectorAll('.estimated-cost').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);