function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-security-banner')) {
        document.querySelector('body').classList.add('iv-security-banner');
    
        const rentalListSection = document.querySelector('.iv-security-banner #unitsSection .rental-list > div');

        if (rentalListSection){
            const children = rentalListSection.children;

            if (children.length >= 3) {
                const secondChild = children[1];
                const thirdChild = children[2];
                
                const ivBannerContent = `<div class="iv-security-banner-section iv-security-banner-section-v3">
                        <div class="iv-security-banner-inner">
                            <div class="iv-banner-img">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1743506109/Store-IT/v3-banner-img-new.png" alt="Security banner image">
                            </div>
                            <div class="iv-banner-content">
                                <span class="iv-banner-label-main"> <span class="iv-banner-label">Stor-It Self Storage</span></span>
                                <h6 class="iv-banner-heading">Electronic keypad entry, surveillance cameras, well-lit hallways & aisles, and free padlock.</h6>
                                <p class="iv-banner-desc">At Stor-It, we take securing your belongings seriously.</p>
                            </div>  
                        </div>
                </div>`;
                
                if (!document.querySelector('.iv-security-banner-section')) {
                    secondChild.insertAdjacentHTML('afterend', ivBannerContent);
                    thirdChild.insertAdjacentHTML('afterend', ivBannerContent);
                }
            }
        }
    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);