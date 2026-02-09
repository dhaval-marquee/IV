function loadTestCode() {
    if (!document.querySelector('body').classList.contains('locationImage_iv')) {
        document.querySelector('body').classList.add('locationImage_iv');
        
        // Select all phone number and image box elements
        const phoneNumbers = document.querySelectorAll('.locationImage_iv .pss-card-list__phone-number.pss-visible-mobile-only3');
        const imageBoxes = document.querySelectorAll('.locationImage_iv .pss-card-list__imagebox');

        // Ensure both NodeLists have the same length to avoid mismatches
        if (phoneNumbers.length === imageBoxes.length) {
            phoneNumbers.forEach((phoneNumber, index) => {
                phoneNumber.before(imageBoxes[index]);
            });
        }

        // Select all img elements with class 'lazy' inside .locationImage_iv .pss-card-list__imagebox
        const lazyImages = document.querySelectorAll('.locationImage_iv .pss-card-list__imagebox a img.lazy');

        // Iterate over each img element
        lazyImages.forEach(function(img) {
            // Get the value of the data-src attribute
            const dataSrc = img.getAttribute('data-src');
            
            // If data-src exists, set it as the src
            if (dataSrc) {
                img.setAttribute('src', dataSrc);
            }
        });
        
        // Update all CTAs to link to individual location pages
        const ctaButtons = document.querySelectorAll('.pss-card-list__bottom-actions a.viewAll');
        const links = document.querySelectorAll('.pss-card-list__subtitle a.pss-visible-mobile-only');

        // Ensure both NodeLists have the same length to avoid mismatches
        if (ctaButtons.length === links.length) {
            ctaButtons.forEach(function(cta, index) {
                // Get the href of the corresponding link
                const hrefValue = links[index].href;
                // Set the href for the corresponding CTA
                cta.setAttribute('href', hrefValue);
            });
        }

        
        // only v1 add
        document.querySelectorAll('.viewAll').forEach(function(item) {
            item.setAttribute('href', item.closest('.pss-card-list').querySelector('.pss-card-list__contentbox .pss-card-list__titlebox a').getAttribute('href'));
            item.removeAttribute('onclick');
            item.removeAttribute('id');
        });
        // only v1 add
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