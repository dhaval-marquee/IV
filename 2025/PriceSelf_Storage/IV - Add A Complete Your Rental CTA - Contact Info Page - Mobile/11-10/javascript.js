function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-complete-your-rental')) {
        document.querySelector('body').classList.add('iv-complete-your-rental');

        const stepsMobile = document.querySelector('.pss-steps-mobile');
        if (stepsMobile) {
            stepsMobile.insertAdjacentHTML('afterend', `
                <div class="iv-complete-your-rental-sec">
                    <a href="javascript:void()" class="iv-complete-your-rental-CTA"> Click Here To Complete Your Rental</a>
                </div>`);
        }

        document.addEventListener('click', function(e) {
            if (e.target && e.target.classList.contains('iv-complete-your-rental-CTA')) {
                const targetSection = document.querySelector('.pss-reserve-contentbox #txtAddressContactInfo');
                if (targetSection) {
                    const elementTop = targetSection.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({
                        top: elementTop - 10,
                        behavior: 'smooth'
                    });
                }
            }
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