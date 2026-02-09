function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-accordion-mobile')) {
        document.querySelector('body').classList.add('iv-accordion-mobile');

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
<<<<<<< HEAD
                                    style="vertical-align: middle; margin-right: 5px;" />
                                Back to listing
=======
                                    style="vertical-align: middle; margin-right: 5px;" />Back to listing
>>>>>>> 83caf7c21d0482c37108696e13aaafa6fb8cb90f
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
                    document.body.classList.add("iv-active-item");
                    clickedItem.classList.add("active-item");

                    // Show back button
                    const backBtn = clickedItem.querySelector(".back-to-listing");
                    if (backBtn) backBtn.style.display = "block";
                } else {
                    // SECOND CLICK > revert everything
                    allItems.forEach(item => item.style.display = "");
                    extraSections.forEach(section => section && (section.style.display = ""));
                    document.body.classList.remove("iv-active-item");
                    clickedItem.classList.remove("active-item");

                    // Hide back button
                    const backBtn = clickedItem.querySelector(".back-to-listing");
                    if (backBtn) backBtn.style.display = "none";
                }

                window.scrollTo({ top: 0, behavior: 'instant' });

                // Promo title
                // const promoElements = document.querySelectorAll('.pss-unit-list__item-mobile .pss-promo-title span');
                // const targetContainers = document.querySelectorAll('.pss-left-right-boxes-in-collapse .pss-unit-list__collapse-container-left-side-form');

                // if (promoElements.length && targetContainers.length) {
                //     promoElements.forEach((promoEl, index) => {
                //         const targetContainer = targetContainers[index];
                //         if (targetContainer && !targetContainer.querySelector('.iv-pss-promo-title')) {
                //             const promoTitle = promoEl.innerText;
                //             targetContainer.insertAdjacentHTML('afterbegin', `<div class="iv-pss-promo-title"><span>${promoTitle}</span></div>`);
                            
                //             document.querySelectorAll('.iv-active-item .pss-unit-list__collapse-container-right-side-form > div')[1].insertAdjacentHTML('afterend', `<div class="unitsButtonText">Hold this unit FOR FREE</div>`);
                //         }
                //     });
                // }
                
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
                    'afterend',
                    `<div class="unitsButtonText">Hold this unit FOR FREE</div>`
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
            // document.querySelectorAll('.iv-active-item .pss-unit-list__collapse-container-right-side-form > div')[1].insertAdjacentHTML('afterend', `<div class="unitsButtonText">Hold this unit FOR FREE</div>`);
        });
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

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
