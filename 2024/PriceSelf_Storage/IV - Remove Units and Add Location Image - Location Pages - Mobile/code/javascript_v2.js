function loadTestCode() {
    if (!document.querySelector('body').classList.contains('locationImage_iv')) {
        document.querySelector('body').classList.add('locationImage_iv');
        document.querySelector('body').classList.add('locationImage_v2');

        // Select phone numbers, image boxes, and lazy images
        const phoneNumbers = document.querySelectorAll('.locationImage_iv .pss-card-list__phone-number.pss-visible-mobile-only3');
        const imageBoxes = document.querySelectorAll('.locationImage_iv .pss-card-list__imagebox');
        const lazyImages = document.querySelectorAll('.locationImage_iv .pss-card-list__imagebox a img.lazy');

        // Use forEach to insert image boxes before phone numbers
        if (phoneNumbers.length === imageBoxes.length) {
            phoneNumbers.forEach((phoneNumber, index) => {
                phoneNumber.before(imageBoxes[index]);
            });
        }

        // Use forEach to update 'src' from 'data-src' for lazy images
        lazyImages.forEach((img) => {
            const dataSrc = img.getAttribute('data-src');
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