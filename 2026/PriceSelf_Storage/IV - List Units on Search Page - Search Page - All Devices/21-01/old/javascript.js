function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-accordion-mobile')) {
        document.querySelector('body').classList.add('iv-accordion-mobile');

        // SELECT BUTTON CLICK
        // document.addEventListener("click", function (e) {
        //     const btn = e.target.closest(".pss-item-card-holder-right .pss-item-card-right-button > a");
        //     if (btn) {
        //         const clickedItem = btn.closest("#repDataMobile_0 > div");
        //         const isActive = clickedItem.classList.contains("active-item");

        //         const allItems = document.querySelectorAll("#repDataMobile_0 > div");
        //         const extraSections = document.querySelectorAll(`
        //             #MainContent_pnlNearbyLocations,
        //             .pss-facility-faq-holder,
        //             .pss-facility__features,
        //             .pss-facility__video-tour,
        //             .pss-facility__areas-served,
        //             .pss-facility__reviews,
        //             .pss-item-card-banner-box,
        //             .pss-item-card-holder .pss-item-card-holder-left-title,
        //             .pss-item-card-holder .pss-item-card-holder-left-items,
        //             .pss-filters-sort.pss-unit-list--filters-mobile,
        //             .pss-unit-list__sorting-filters-container-mobile,
        //             .pss-notification-fee-banner,
        //             .pss-unit-list > #MainContent_Panel1 > div.font-regular-medium:first-child,
        //             .pss-facility__renting-online-holder,
        //             .pss-facility__content-holder-mobile,
        //             .pss-facility__main-title,
        //             .iv-storage-box,
        //             .pss-breadcrumb, 
        //             #MainContent_PromoBannerControl_pnlPromo
        //         `);

        //         if (!isActive) {
        //             // FIRST CLICK > hide others
        //             allItems.forEach(item => item.style.display = item === clickedItem ? "" : "none");
        //             extraSections.forEach(section => section && (section.style.display = "none"));
        //             document.body.classList.add("iv-active-item");
        //             clickedItem.classList.add("active-item");

        //             // Show back button
        //             const backBtn = clickedItem.querySelector(".back-to-listing");
        //             if (backBtn) backBtn.style.display = "block";
        //         } else {
        //             // SECOND CLICK > revert everything
        //             allItems.forEach(item => item.style.display = "");
        //             extraSections.forEach(section => section && (section.style.display = ""));
        //             document.body.classList.remove("iv-active-item");
        //             clickedItem.classList.remove("active-item");

        //             // Hide back button
        //             const backBtn = clickedItem.querySelector(".back-to-listing");
        //             if (backBtn) backBtn.style.display = "none";
        //         }

        //         window.scrollTo({ top: 0, behavior: 'instant' });

        //         const promoElements = document.querySelectorAll(
        //             '.pss-unit-list__item-mobile .pss-promo-title span'
        //         );
        //         const targetContainers = document.querySelectorAll(
        //             '.pss-left-right-boxes-in-collapse .pss-unit-list__collapse-container-left-side-form'
        //         );

        //         if (promoElements.length && targetContainers.length) {
        //             promoElements.forEach((promoEl, index) => {
        //                 const targetContainer = targetContainers[index];

        //                 if (targetContainer && !targetContainer.querySelector('.iv-pss-promo-title')) {
        //                     const promoTitle = promoEl.innerText;

        //                     targetContainer.insertAdjacentHTML(
        //                         'afterbegin',
        //                         `<div class="iv-pss-promo-title"><span>${promoTitle}</span></div>`
        //                     );
        //                 }
        //             });
        //         }

        //         /* Insert button text only once */
        //         const rightSideDivs = document.querySelectorAll(
        //             '.iv-active-item .pss-unit-list__collapse-container-right-side-form > div'
        //         );

        //         if (rightSideDivs[1] && !document.querySelector('.unitsButtonText')) {
        //             rightSideDivs[1].insertAdjacentHTML(
        //                 // 'afterend',
        //                 // `<div class="unitsButtonText">Hold this unit FOR FREE</div>`
        //             );
        //         }

        //         return;
        //     }

        //     // BACK BUTTON CLICK > trigger SELECT button click
        //     const backBtn = e.target.closest(".back-to-listing");
        //     if (backBtn) {
        //         const clickedItem = backBtn.closest("#repDataMobile_0 > div");
        //         const selectBtn = clickedItem.querySelector(".pss-item-card-holder-right .pss-item-card-right-button > a");
        //         if (selectBtn) selectBtn.click();
        //         return;
        //     }
        //     // document.querySelectorAll('.iv-active-item .pss-unit-list__collapse-container-right-side-form > div')[1].insertAdjacentHTML('afterend', `<div class="unitsButtonText">Hold this unit FOR FREE</div>`);
        // });

        // const container = document.getElementById('MainContent_LocationRepeater_unitsStartingPrice_0');

        // const inputs = container.querySelectorAll('input');
        // inputs.forEach(input => {
        //     const price = input.value;
        //     input.value = `$${price}<span>/mo<span>`;
        //     input.setAttribute('type', 'text');
        //     input.setAttribute('readonly', 'true');

        //     // wrapper
        //     const wrapper = document.createElement('div');
        //     wrapper.className = 'input-wrapper';

        //     input.parentNode.insertBefore(wrapper, input);
        //     wrapper.appendChild(input);
        // });

        // var inputSmall = document.getElementById('small_Azusa');
        // var priceSmall = inputSmall.value;
        // console.log(`${priceSmall}`);

        // var inputMedium = document.getElementById('medium_Azusa');
        // var priceMedium = inputMedium.value;
        // console.log(`${priceMedium}`);

        // var inputLarge = document.getElementById('large_Azusa');
        // var priceLarge = inputLarge.value;
        // console.log(`${priceLarge}`);

        // var inputVehicle = document.getElementById('vehicle_Azusa');
        // var priceVehicle = inputVehicle.value;
        // console.log(`${priceVehicle}`);

    // const getPrice = id => document.getElementById(id)?.value;

    // const priceSmall   = getPrice('small_Azusa');
    // const priceMedium  = getPrice('medium_Azusa');
    // const priceLarge   = getPrice('large_Azusa');
    // const priceVehicle = getPrice('vehicle_Azusa');

    // const priceSmallBlvd   = getPrice('small_National_Blvd');
    // const priceMediumBlvd  = getPrice('medium_National_Blvd');
    // const priceLargeBlvd   = getPrice('large_National_Blvd');
    // const priceVehicleBlvd   = getPrice('vehicle_National_Blvd');
    
    // const priceSmallBlvd1   = getPrice('small_National_Blvd');
    // const priceMediumBlvd2  = getPrice('medium_National_Blvd');
    // const priceLargeBlvd3  = getPrice('large_National_Blvd');
    // const priceVehicleBlvd4   = getPrice('vehicle_National_Blvd');
    

    // console.log(priceSmall, priceMedium, priceLarge, priceVehicle);

    // let unitsBoxPhoneNumber = '';

    // document
    // .querySelectorAll('.pss-card-list__phone-number')
    // .forEach((el, index) => {
    //     if (index === 0) {
    //     const match = el.textContent.match(/\d{3}-\d{3}-\d{4}/);
    //     unitsBoxPhoneNumber = match ? match[0] : '';
    //     console.log(unitsBoxPhoneNumber);
    //     }
    // });

        
    // let unitsBOX1 = [
    //     { size: 'Small', dim: '5x5', price: priceSmall },
    //     { size: 'Medium', dim: '10x10', price: priceMedium },
    //     { size: 'Large', dim: '10x20', price: priceLarge },
    //     { size: 'Vehicle', dim: '10x20', price: priceVehicle },
    // ];
    // let unitsBOX2 = [
    //     { size: 'Small', dim: '5x5', price: priceSmallBlvd },
    //     { size: 'Medium', dim: '10x10', price: priceMediumBlvd },
    //     { size: 'Large', dim: '10x20', price: priceLargeBlvd },
    //     { size: 'Vehicle', dim: '10x20', price: priceVehicleBlvd }
    // ];

    // let unitsBOX3 = [
    //     { size: 'Small', dim: '5x5', price: priceSmallBlvd1 },
    //     { size: 'Medium', dim: '10x10', price: priceMediumBlvd2 },
    //     { size: 'Large', dim: '10x20', price: priceLargeBlvd3 },
    //     { size: 'Vehicle', dim: '10x20', price: priceVehicleBlvd4 }
    // ];


    // const elements = document.querySelectorAll(
    // '#MainContent_LocationRepeater span .pss-card-list__subtitle'
    // );

    // elements.forEach(el => {

    //     let html = `<div class="unitsBoxNumber">
    //         <div class="imgWrapper">
    //             <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1768907435/PriceSelfStorage/phone-icon.svg" alt="Phone icon">
    //         </div>
    //         <div class="phoneNumberText">${unitsBoxPhoneNumber}</div>
    //     </div><div class="unitsBoxWrapper">`;

    //     units.forEach(unit => {
    //         html += `
    //         <div class="unitsBox">
    //             <div class="size">${unit.size}</div>
    //             <div class="dim">${unit.dim}</div>
    //             <div class="price">$${unit.price}<span>/mo</span></div>
    //         </div>
    //         `;
    //     });
    //     html += `</div>`;
    //     el.insertAdjacentHTML('afterend', html);
    // });


    /* ===============================
    PRICE GETTER FUNCTION
    ================================ */
    const getPrice = id => document.getElementById(id)?.value || '';

    /* ===============================
    PRICES BY LOCATION
    ================================ */
    const unitsByLocation = [
        [
            { size: 'Small', dim: '5x5',  price: getPrice('small_Azusa') },
            { size: 'Medium', dim: '10x10', price: getPrice('medium_Azusa') },
            { size: 'Large', dim: '10x20', price: getPrice('large_Azusa') },
            { size: 'Vehicle', dim: '10x20', price: getPrice('vehicle_Azusa') }
        ],
        [
            { size: 'Small', dim: '5x5',  price: getPrice('small_National_Blvd') },
            { size: 'Medium', dim: '10x10', price: getPrice('medium_National_Blvd') },
            { size: 'Large', dim: '10x20', price: getPrice('large_National_Blvd') },
            { size: 'Vehicle', dim: '10x20', price: getPrice('vehicle_National_Blvd') }
        ],
        [
            { size: 'Small', dim: '5x5',  price: getPrice('small_Norco') },
            { size: 'Medium', dim: '10x10', price: getPrice('medium_Norco') },
            { size: 'Large', dim: '10x20', price: getPrice('large_Norco') },
            { size: 'Vehicle', dim: '10x20', price: getPrice('vehicle_Norco') }
        ],
        [
            { size: 'Small', dim: '5x5',  price: getPrice('small_Pacific_Beach') },
            { size: 'Medium', dim: '10x10', price: getPrice('medium_Pacific_Beach') },
            { size: 'Large', dim: '10x20', price: getPrice('large_Pacific_Beach') },
            { size: 'Vehicle', dim: '10x20', price: getPrice('vehicle_Pacific_Beach') }
        ],
        [
            { size: 'Small', dim: '5x5',  price: getPrice('small_Pacific_Beach') },
            { size: 'Medium', dim: '10x10', price: getPrice('medium_Pacific_Beach') },
            { size: 'Large', dim: '10x20', price: getPrice('large_Pacific_Beach') },
            { size: 'Vehicle', dim: '10x20', price: getPrice('vehicle_Pacific_Beach') }
        ]
    ];

    /* ===============================
    PHONE NUMBER FETCH (FOREACH)
    ================================ */
    let unitsBoxPhoneNumber = '';

    document
    .querySelectorAll('.pss-card-list__phone-number')
    .forEach((el, index) => {
        if (index === 0) {
        const match = el.textContent.match(/\d{3}-\d{3}-\d{4}/);
        unitsBoxPhoneNumber = match ? match[0] : '';
        }
    });

    /* ===============================
    HTML INJECTION
    ================================ */
    const elements = document.querySelectorAll(
    '#MainContent_LocationRepeater span .pss-card-list__subtitle'
    );

    elements.forEach((el, index) => {

    const units = unitsByLocation[index];
    if (!units) return;

    let html = `
        <div class="unitsBoxNumber">
        <div class="imgWrapper">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1768907435/PriceSelfStorage/phone-icon.svg" alt="Phone icon">
        </div>
        <div class="phoneNumberText">${unitsBoxPhoneNumber}</div>
        </div>

        <div class="unitsBoxWrapper">
    `;

    units.forEach(unit => {
        if (!unit.price) return;

        html += `
        <div class="unitsBox">
            <div class="size">${unit.size}</div>
            <div class="dim">${unit.dim}</div>
            <div class="price">$${unit.price}<span>/mo</span></div>
        </div>
        `;
    });

    html += `</div>`;

    el.insertAdjacentHTML('afterend', html);
    });

    }
}

loadTestCode();