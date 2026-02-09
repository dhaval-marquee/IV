function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-location-dropdown')) {
        document.querySelector('body').classList.add('iv-location-dropdown');
        document.querySelector('.iv-location-dropdown .pss-facility__main-title .pss-facility__main-title-header').style.display = "flex";
        const ratingElement = document.querySelector(".iv-location-dropdown .pss-rating.pss-invisible-mobile-only");
        const titleElement = document.querySelector(".iv-location-dropdown .pss-facility__main-title .pss-facility__main-title-header #MainContent_lblFacilityName");

        if (ratingElement && titleElement) {
            titleElement.parentNode.insertBefore(ratingElement, titleElement.nextSibling);
        }

        function fixDropdownADA() {
            const trigger = document.querySelector('.pss-facility__main-title .pss-facility__main-dropdown-holder');
            const dropdownId = 'MainContent_dtNearByLocations';
            const dropdown = document.getElementById(dropdownId);

            if (trigger && dropdown) { 
                trigger.removeAttribute('role'); 
                trigger.setAttribute('tabindex', '0');
                trigger.setAttribute('aria-controls', dropdownId);
                trigger.setAttribute('aria-expanded', 'false');

                trigger.addEventListener('click', function (e) {
                    e.preventDefault();
                    toggleDropdown();
                });

                trigger.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        // e.preventDefault();
                        toggleDropdown();
                    }
                }); 

                function toggleDropdown() {
                    const isOpen = trigger.getAttribute('aria-expanded') === 'true';
                    trigger.setAttribute('aria-expanded', String(!isOpen));
                    dropdown.hidden = isOpen;
                    dropdown.classList.toggle('hide', isOpen);
                }
            }
        }
        fixDropdownADA();
        
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
