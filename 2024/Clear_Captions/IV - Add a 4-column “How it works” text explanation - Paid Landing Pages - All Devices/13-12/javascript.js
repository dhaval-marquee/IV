function loadTestCode() {
    if (!jQuery('body').hasClass('iv-how-it-work')) {
        jQuery('body').addClass('iv-how-it-work');
        
            // Put your test code here
            jQuery('#form').after(`<div class="iv-container" id="HowItWorks">
                    <div class="how-it-work-main">
                        <h2 class="how-it-work-title">How it <em class="title-italic">works</em></h2>
                        <p class="how-it-work-desc">Getting started is simple! In just four easy steps, you'll be on your way to clearer, more confident conversations with the people who matter most.</p>
                        <ul class="how-it-work-items">
                            <li class="how-it-work-box">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733551898/ClearCaptions/DeterminEligibility.png" alt="Determine your eligibility">
                                <h3 class="fusion-title-heading"><p>1. Determine your <em class="title-italic"><br> eligibility</em></p></h3>
                                <p class="work-box-text">ClearCaptions verifies your eligibility for our service based on hearing loss, U.S. residency, and internet access through a few simple questions.</p>
                            </li>
                            <li class="how-it-work-box">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733551898/ClearCaptions/ourForm.png" alt="Determine your eligibility">
                                <h3 class="fusion-title-heading"><p>2.  Complete our form </p></h3>
                                <p class="work-box-text">Choose what works best for you - fill out our simple online form or call to speak with a friendly specialist who will guide you through enrollment.</p>
                            </li>
                            <li class="how-it-work-box">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733551898/ClearCaptions/Receivetraining.png" alt="Determine your eligibility">
                                <h3 class="fusion-title-heading"><p>3. Receive training & <em class="title-italic"><br> free installation</em></p></h3>
                                <p class="work-box-text">Relax while an expert installs your new phone at no cost, then receive personalized training until you feel completely confident using the captioning service.</p>
                            </li>
                            <li class="how-it-work-box">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733551898/ClearCaptions/communicating.png" alt="Determine your eligibility">
                                <h3 class="fusion-title-heading"><p>4. Enjoy communicating <em class="title-italic"><br> independently once again</em></p></h3>
                                <p class="work-box-text">Reconnect with confidence- enjoy clear, real-time captions that let you communicate easily and stay connected with loved ones.</p>
                            </li>
                        </ul>
                    </div>
            </div>`);

            // Append additional HTML after loading content
            jQuery('#HowItWorks h3.fusion-title-heading p').eq(1).append(`<em class="title-italic"><br> or call <span class="for-desktop"></span></em>`);

            var i = 0;
            var getNumberInterval = setInterval(function() {
            const currentPageURL = window.location.href.split('?')[0]; // Remove query parameters
            // Define a mapping of page URLs to their corresponding selectors for the phone number
            const pageConfig = {
                'https://clearcaptions.com/lp-google-blue/': '.fusion-container-anchor .fusion-title-3 h4.fusion-title-heading',
                'https://clearcaptions.com/google/': '.fusion-container-anchor .fusion-title-3 h4.fusion-title-heading',
                'https://clearcaptions.com/google-brand-home-page/': '.content-container .phone-link'
            };

            // Check if the current page URL matches any in the configuration
            if (pageConfig[currentPageURL]) {
                const phoneSelector = pageConfig[currentPageURL];
                const heroPhoneNumber = document.querySelector(phoneSelector);
                const fullTextTitle = heroPhoneNumber ? heroPhoneNumber.innerText : '';
                const phoneNumber = fullTextTitle.match(/\d{3}-\d{3}-\d{4}/)?.[0];

                const targetParagraphs = document.querySelectorAll('#HowItWorks h3.fusion-title-heading p');
                if (targetParagraphs.length > 1 && phoneNumber) {
                    jQuery(".for-desktop").text(phoneNumber);
                }
            }
            if (i == 5) {
                clearInterval(getNumberInterval);
            }i++;
        }, 1000);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
