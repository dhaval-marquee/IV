function loadTestCode() {
    if (!document.body.classList.contains('iv-popup')) {
        document.body.classList.add('iv-popup');

        let locationPath = window.location.href;

        let contactNumber = '';

        // For Phone number 
        let headings = document.querySelectorAll('.iv-popup h4.fusion-title-heading');
        if (headings.length > 1) {
            let text = headings[1].textContent;
            let match = text.match(/\d{3}-\d{3}-\d{4}/);
            
            if (match) {
                contactNumber = match[0];

                let targetElement = document.querySelector('.fusion-body .fusion-title.fusion-title-size-four');
                if (targetElement) {
                    targetElement.insertAdjacentHTML('afterend', `
                        <div class="hero-number">
                            <div class="number-wrapper">
                                <p>Call: <a href="tel:${contactNumber}"><span>${contactNumber}</span></a></p>
                            </div>
                        </div>
                    `);
                }
            }
        }

        // Buttons
        var DesktopButtons = `
            <div class="iv-buttons">
                <a href="javascript:void(0)" class="iv-button iv-popup-button iv-button-orange">Get My Phone</a>
                <a href="tel:${contactNumber}" class="iv-button iv-button-white">Call Now</a>
            </div>`;

        var mobileButtons = `
        <div class="iv-buttons">
            <a href="tel:${contactNumber}" class="iv-button iv-button-orange">Call Now: ${contactNumber}</a>
            <a href="javascript:void(0)" class="iv-button iv-popup-button iv-button-white">Get My Phone</a>
        </div>`;

        var heading = document.querySelector('.landing-header .fusion-text');
        if (heading) {
            if (window.matchMedia("(max-width: 640.98px)").matches) {
                heading.insertAdjacentHTML('afterend', mobileButtons);
            } else {
                heading.insertAdjacentHTML('afterend', DesktopButtons);
            }
        

            // Image move on right side 
            const heroImages = document.querySelector('.landing-header > div > .fusion-image-element');
            const rightPhone = document.querySelector('.hero-number')
            if(heroImages && rightPhone){
                rightPhone.appendChild(heroImages);
        }


        // Popup
        const popUp = `<div class="iv-form-popup">
            <div class="iv-form-popup-inner">
                <div class="iv-form-popup-container">
                    <div class="iv-form-popup-content">
                        <div class="iv-form-popup-title">
                            <a class="iv-form-popup-closed" href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26 6.083L6.16 26L4 23.917L23.84 4L26 6.083Z" fill="black"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6.083L23.84 26L26 23.917L6.16 4L4 6.083Z" fill="black"></path>
                                </svg>
                            </a>
                        </div>
                        <div class="iv-form-popup-form"></div>
                    </div>
                </div>
            </div>
        </div>`;
        
        if (!document.querySelector('.iv-form-popup')) {
            document.body.insertAdjacentHTML('afterbegin', popUp);
        }

        let referralWrapper = document.querySelector('.hero-number + .form-referral_wrapper');
        let popupForm = document.querySelector('.iv-form-popup-form');

        if (referralWrapper && popupForm) {
            popupForm.appendChild(referralWrapper);
        }
        
        document.querySelector('.iv-form-popup-form .gform_wrapper .gform_heading').insertAdjacentHTML('beforebegin',`<h4 class="fusion-title-heading title-heading-left fusion-responsive-typography-calculated">Get Your<br> Phone Today</h4>`);



        let submitButton = document.querySelector('.gform_footer .gform_button[type="submit"]');
        if (submitButton) {
            submitButton.value = "Get My Phone";
        }

        document.addEventListener('click', function (event) {
            if (event.target.classList.contains('iv-popup-button')) {
                document.querySelector('.iv-form-popup').style.display = 'block';
                document.body.classList.add('iv-popup-open');
            } else if (event.target.closest('.iv-form-popup-closed')) {
                document.querySelector('.iv-form-popup').style.display = 'none';
                document.body.classList.remove('iv-popup-open');
            }
        });

        if(locationPath.startsWith('https://clearcaptions.com/')){ 
            document.addEventListener('click', function (event) {
                if (event.target.classList.contains('iv-popup-button')) {
                    sessionStorage.setItem("popupClick", "popupOpen");

                } else if (event.target.closest('.iv-form-popup-closed')) {
                    sessionStorage.removeItem("popupClick");
                }
            });

            let popupData = sessionStorage.getItem("popupClick");
            if(popupData){
                document.querySelector('.iv-popup-button').click();
            }
        }
        }
    }
}

let checkCondition = setInterval(function () {
    if (document.body) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
