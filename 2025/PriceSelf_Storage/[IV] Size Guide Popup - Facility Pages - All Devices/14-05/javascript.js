function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-guide-popup')) {
        document.querySelector('body').classList.add('iv-guide-popup');

        // Popup structure
        const popUp = `
        <div class="storage-guide-popup">
            <div class="storage-guide-popup-inner">
                <div class="storage-guide-popup-container">
                    <div class="storage-guide-popup-content">
                        <div class="storage-guide-popup-title">
                            <a class="storage-guide-popup-closed" href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 30 30" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26 6.083L6.16 26L4 23.917L23.84 4L26 6.083Z" fill="black"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.083L23.84 26L26 23.917L6.16 4L4 6.083Z" fill="black"/>
                                </svg>
                            </a>

                            <h6 class="iv-size-guide-heading">Storage Unit Size Guide</h6>
                            <div class="iv-closest-size">
                                <strong></strong> is the closest size guide to your selected size
                            </div>

                            <div class="iv-size-guide-box">
                                <div class="iv-size-img"></div>
                                <div class="iv-size-content">
                                    <div class="iv-size-description"></div>

                                    <div class="iv-pss-tabs">
                                        <span class="iv-pss-tab" data-tab="small">Small</span>
                                        <span class="iv-pss-tab" data-tab="medium">Medium</span>
                                        <span class="iv-pss-tab" data-tab="large">Large</span>
                                    </div>

                                    <div class="iv-pass-tabs-size-part">
                                        <div class="iv-pss-tabs-size" data-group="small">
                                            <span class="iv-pss-tab-size">Locker</span>
                                            <span class="iv-pss-tab-size">Small 5x5</span>
                                            <span class="iv-pss-tab-size">Small 5x10</span>
                                        </div>
                                        <div class="iv-pss-tabs-size" data-group="medium">
                                            <span class="iv-pss-tab-size">Medium 5x15</span>
                                            <span class="iv-pss-tab-size">Medium 10x10</span>
                                        </div>
                                        <div class="iv-pss-tabs-size" data-group="large">
                                            <span class="iv-pss-tab-size">Large 10x15</span>
                                            <span class="iv-pss-tab-size">Large 10x20</span>
                                            <span class="iv-pss-tab-size">Large 10x30</span>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        document.body.insertAdjacentHTML('afterbegin', popUp);

        const closeBtn = document.querySelector('.iv-guide-popup .storage-guide-popup-closed');
        closeBtn.addEventListener('click', () => {
            document.querySelector('.iv-guide-popup .storage-guide-popup').style.display = 'none';
        });

        const tabContents = document.querySelectorAll('.iv-pss-tabs-size');
        const tabs = document.querySelectorAll('.iv-pss-tab');
        const sizeTabs = document.querySelectorAll('.iv-pss-tab-size');
        const imgContainer = document.querySelector('.iv-size-img');
        const descriptionContainer = document.querySelector('.iv-size-description');

        // Descriptions and images  
        const contentData = {
            'Locker': {
                desc: 'Storage unit sizes vary with most providing around 25 sq ft worth of storage area. Storage lockers have a lower roof (approximately 3 ft high). They are the best fit for those looking to store sports equipment, boxes, books, etc.',
                img: 'https://www.priceselfstorage.com/images/size-guide-images/5x5.webp',
            },
            'Small 5x5': {
                desc: 'Our small 5x5 storage unit is roughly 25 square feet and is the size of a broom closet, ideal for seasonal clothes, sports gear, small furniture, and more. With an average ceiling height of 8 feet, you could fit 30 to 40 small boxes, along with your smaller household items. Ideal for downsizing or extra business storage, this size helps your items stay organized and accessible.',
                img: 'https://www.priceselfstorage.com/images/size-guide-images/5x5.webp',
            },
            'Small 5x10': {
                desc: 'Our 5x10 storage unit gives you roughly 50 square feet and enough room for a studio apartment’s worth of items. Ideal for storing a queen bed set, dresser, a few appliances, 40 – 50 medium sized boxes, or even a motorcycle. A great solution to help you clear your garage, backyard patio, or free room for your small business, this versatile unit keeps everything secure and accessible.',
                img: 'https://www.priceselfstorage.com/images/size-guide-images/5x10.webp',
            },
            'Medium 5x15': {
                desc: 'Our 5x15 and 7.5x10 units offer about 75 square feet, ideal for the contents of a one-bedroom apartment. Slightly narrower but deeper than a 10x10, a 5x15 is perfect for longer items or efficient stacking. Store a queen bed set, sofa, dining set, appliances or 60 - 80 medium sized boxes. It’s ideal for storing items between moves, during a remodel, or your small business inventory.',
                img: 'https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/PriceSelfStorage/5x15-new.jpg',
            },
            'Medium 10x10': {
                desc: 'Our 10x10 storage unit gives you roughly 100 square feet and is ideal for a small 1-to-2-bedroom apartment, or major home projects like remodeling. With an average of 8-foot-high ceilings you can easily store a king bed set, couch, dining set, major appliances, or up to 100 medium size boxes. A versatile solution if you’re moving, on deployment, or expanding your business.',
                img: 'https://www.priceselfstorage.com/images/size-guide-images/10x10.webp',
            },
            'Large 10x15': {
                desc: 'Our 10x15 storage unit provides you with 150 square feet and can comfortably store the contents of a 2-to-3-bedroom home or apartment. Easily fit large furniture sets, appliances, a sectional couch, multiple bedroom sets, dining sets, or 100 large size boxes or totes. A great solution for seasonal lawn decorations, patio furniture, home gym equipment or office furniture.',
                img: 'https://www.priceselfstorage.com/images/size-guide-images/10x15.webp',
            },
            'Large 10x20': {
                desc: 'Our 10x20 storage unit is roughly 200 square feet of space and is ideal for storing the contents of a 3-to-4-bedroom home. Comparable to a one-car garage with 8-foot ceilings, this unit can fit large furniture, major appliances, up to 200 medium boxes, or even a car, motorcycle, or small boat. Perfect for relocations, home renovations, or commercial storage when you need extra space and convenience.',
                img: 'https://www.priceselfstorage.com/images/size-guide-images/10x20.webp',
            },
            'Large 10x30': {
                desc: 'A 10x30 storage unit offers 300 square feet and about the size of a one-and-a-half-car garage. Store the contents of a 4-to-5-bedroom home or small business, including household sets, appliances, and up to 200 boxes. With an average 8-foot ceiling, this unit also fits vehicles like cars, trucks, boats, or SUVs. Ideal for commercial use, large seasonal items, outdoor gear, with room to spare.',
                img: 'https://www.priceselfstorage.com/images/size-guide-images/10x30.webp',
            }
        };

        // Closest size mapping
        const closestSizeMap = {
            "5 x 5 Small": "5x5",
            "5 x 6 Small": "5x5",
            "4 x 10 Small": "5x10",
            "5 x 10 Small": "5x10",
            "7.5 x 9 Small": "5x15",
            "5 x 15 Medium": "5x15",
            "7.5 x 10 Medium": "5x15",
            "10 x 10 Medium": "10x10",
            "10 x 15 Large": "10x15",
            "10 x 20 Large": "10x20",
            "10 x 24 Large": "10x20",
            "10 x 25 Large": "10x20",
            "10 x 25 Parking": "10x20",
            "10 x 26 Parking": "10x30",
            "10 x 30 Parking": "10x30",
            "10 x 35 Parking": "10x30",
        };

        // Show tab logic
        function showTab(tabName) {
            tabContents.forEach(el => el.style.display = 'none');
            tabs.forEach(tab => tab.classList.remove('active'));

            const group = document.querySelector(`.iv-pss-tabs-size[data-group="${tabName}"]`);
            const tab = document.querySelector(`.iv-pss-tab[data-tab="${tabName}"]`);
            if (group) {
                group.style.display = 'flex';
                const firstSizeTab = group.querySelector('.iv-pss-tab-size');
                if (firstSizeTab) {
                    firstSizeTab.click();
                }
            }
            if (tab) tab.classList.add('active');
        }

        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                showTab(tab.getAttribute('data-tab'));
            });
        });

        sizeTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const key = tab.textContent.trim();
                sizeTabs.forEach(st => st.classList.remove('active'));
                tab.classList.add('active');

                if (contentData[key]) {
                    descriptionContainer.innerHTML = `<p>${contentData[key].desc}</p>`;
                    imgContainer.innerHTML = `<img src="${contentData[key].img}" alt="${key}">`;
                } else {
                    descriptionContainer.innerHTML = `<p>No description available.</p>`;
                    imgContainer.innerHTML = '';
                }
            });
        });

        setTimeout(() => {
            showTab('small');
            const first = document.querySelector('.iv-pss-tabs-size[data-group="small"] .iv-pss-tab-size');
            if (first) first.click();
        }, 50);

        // Popup trigger and closest size logic
        const ivPopupTargets = document.querySelectorAll('.size-guide .pss-link, .size-guide-mobile');
        ivPopupTargets.forEach((popupBtn) => {
            popupBtn.setAttribute('href', 'javascript:;');

            popupBtn.addEventListener('click', () => {
                const popup = document.querySelector('.storage-guide-popup');
                if (popup) {
                    popup.style.display = 'block';
                    document.body.classList.add('iv-guide-popup-overflow');
                }

                const outputTarget = document.querySelector('.iv-closest-size strong');
                const closestSizeContainer = document.querySelector('.iv-closest-size');

                let matchedValue = 'N/A';
                let hasMatch = false;
                let sizeTextForTab = null;

                const unitItem = popupBtn.closest('.pss-unit-list__item, .pss-visible-mobile-only3');
                if (unitItem && unitItem?.classList.contains('pss-unit-list__item')) {
                    const sizeElementTab = unitItem.querySelector('.sizes');
                    if (sizeElementTab) {
                        const sizeSpans = sizeElementTab.querySelectorAll('span');
                        if (sizeSpans.length >= 2) {
                            const category = sizeSpans[0].innerText.trim(); 
                            const dimension = sizeSpans[1].innerText.trim();  
                            sizeTextForTab = `${dimension} ${category}`.toLowerCase(); 
                        } else {
                            sizeTextForTab = sizeElementTab.innerText.trim().toLowerCase();  
                        }
                    }
                } else if (unitItem && unitItem?.classList.contains('pss-visible-mobile-only3')) {
                    const titleElementTab = unitItem.querySelector('.pss-item-card-holder-left-title');
                    if (titleElementTab) {
                        sizeTextForTab = titleElementTab.innerText.trim().toLowerCase();
                    }
                }

                // Category fallback (small, medium, large)
                let categoryMatch = null;
                if (sizeTextForTab) {
                    const normalizedSizeText = sizeTextForTab.replace(/\s+/g, ' ').trim();

                    // Try exact match from map
                    for (const [key, value] of Object.entries(closestSizeMap)) {
                        const normalizedKey = key.toLowerCase();
                        if (normalizedSizeText === normalizedKey) {
                            matchedValue = value;
                            hasMatch = true;
                            break;
                        }
                    }

                    // If no match found, check for category keyword
                    if (!hasMatch) {
                        if (normalizedSizeText.includes('small')) categoryMatch = 'small';
                        else if (normalizedSizeText.includes('medium')) categoryMatch = 'medium';
                        else if (normalizedSizeText.includes('large')) categoryMatch = 'large';
                    }
                }

                if (outputTarget) {
                    outputTarget.textContent = matchedValue;
                    closestSizeContainer.style.display = hasMatch ? 'block' : 'none';
                }

                // Try to find matching tab group from matchedValue
                let foundTabGroup = null;
                const allTabGroups = document.querySelectorAll('.iv-pss-tabs-size[data-group]');
                allTabGroups.forEach(group => {
                    const sizeButtons = group.querySelectorAll('.iv-pss-tab-size');
                    sizeButtons.forEach(btn => {
                        if (btn.textContent.toLowerCase().includes(matchedValue.toLowerCase())) {
                            foundTabGroup = group.getAttribute('data-group');
                        }
                    });
                });

                // Fallback to category if exact size didn't match
                if (!foundTabGroup && categoryMatch) {
                    foundTabGroup = categoryMatch;
                }

                if (foundTabGroup) {
                    showTab(foundTabGroup);
                    setTimeout(() => {
                        const allMatching = document.querySelectorAll(`.iv-pss-tabs-size[data-group="${foundTabGroup}"] .iv-pss-tab-size`);
                        allMatching.forEach(btn => {
                            if (btn.textContent.toLowerCase().includes(matchedValue.toLowerCase())) {
                                btn.click();
                            }
                        });
                    }, 50);
                }
            });
        });

        // Close popup
        const ivGuidePopupClosed = document.querySelector('.iv-guide-popup .storage-guide-popup-closed');
        ivGuidePopupClosed.addEventListener('click', () => {
            document.querySelector('.iv-guide-popup .storage-guide-popup').style.display = 'none';
            document.body.classList.remove('iv-guide-popup-overflow');
        });
    }
}

const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 800);