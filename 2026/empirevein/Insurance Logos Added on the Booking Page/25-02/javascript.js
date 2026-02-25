function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-insurance-logos')) {
        document.querySelector('body').classList.add('iv-insurance-logos');

        const insuranceLogos = [
            {
                src: "https://res.cloudinary.com/ignite-visibility/image/upload/v1770816865/empirevein/InsuranceLogosBookingPage/aetnaLogo.png",
                width: 509,
                height: 99
            },
            {
                src: "https://res.cloudinary.com/ignite-visibility/image/upload/v1770816864/empirevein/InsuranceLogosBookingPage/healthnetLogo.png",
                width: 326,
                height: 155
            },
            {
                src: "https://res.cloudinary.com/ignite-visibility/image/upload/v1770816863/empirevein/InsuranceLogosBookingPage/AnthemBlue_CrossLogo.png",
                width: 299,
                height: 168
            },
            {
                src: "https://res.cloudinary.com/ignite-visibility/image/upload/v1772005235/empirevein/InsuranceLogosBookingPage/iehpIcon.png",
                width: 200,
                height: 62
            },
            {
                src: "https://res.cloudinary.com/ignite-visibility/image/upload/v1770816860/empirevein/InsuranceLogosBookingPage/CignaLogo.png",
                width: 200,
                height: 87
            },
            {
                src: "https://res.cloudinary.com/ignite-visibility/image/upload/v1772005235/empirevein/InsuranceLogosBookingPage/medicareIcon.png",
                width: 200,
                height: 59
            },
            {
                src: "https://res.cloudinary.com/ignite-visibility/image/upload/v1772005235/empirevein/InsuranceLogosBookingPage/OptumIcon.png",
                width: 331,
                height: 152
            },
            {
                src: "https://res.cloudinary.com/ignite-visibility/image/upload/v1770816867/empirevein/InsuranceLogosBookingPage/TricareLogo.png",
                width: 317,
                height: 159
            },
            {
                src: "https://res.cloudinary.com/ignite-visibility/image/upload/v1772005234/empirevein/InsuranceLogosBookingPage/KPicon.png",
                width: 358,
                height: 141
            }
        ];

        const logoListHTML = insuranceLogos
        .map(logo => `<li><img  src="${logo.src}"  width="${logo.width}"  height="${logo.height}" loading="lazy" decoding="async" fetchpriority="low" alt=""></li>`).join("");

        const titalInsurance = `
            <h2 class="iv-title-insurance">We Accept Most Insurance Plans</h2>
            <p class="iv-subtitle-insurance">Get the care you need without worrying about unexpected costs.</p>

            <div class="iv-logos-insurance">
                <ul>
                    ${logoListHTML}
                </ul>
            </div>

        <p class="iv-body-text">and many more!</p>`;
        document.querySelector('.iv-insurance-logos .kt-inside-inner-col .wp-block-list + p').insertAdjacentHTML('afterend', titalInsurance);
        
        const button = document.querySelector('form .form-submit-button.submit-button');
        function updateButtonText() {
            if (!button) return;

            if (window.matchMedia("(min-width: 768px)").matches) {
                button.innerHTML = 'Book a Free Consult or Just Learn&nbsp;More';
            } else {
                button.innerHTML = 'Book a Free Consultation';
            }
        }
        // Run on page load
        updateButtonText();
        // Run on resize (without reload)
        window.addEventListener('resize', updateButtonText);
    }
}

loadTestCode();