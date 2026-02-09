function loadTestCode() {
    if (!jQuery('body').hasClass('iv-how-it-work')) {
        jQuery('body').addClass('iv-how-it-work');
        
        // Put your test code here
        jQuery('section#content').after(`<div class="iv-container" id="HowItWorks">
                <div class="how-it-work-main">
                    <h2 class="how-it-work-title">How it <em class="title-italic">works</em></h2>
                    <p class="how-it-work-desc">Getting started is simple! In just four easy steps, you'll be on your way to clearer, more confident conversations with the people who matter most.</p>
                    <ul class="how-it-work-items">
                        <li class="how-it-work-box">
                            <img src="https://clearcaptions.com/wp-content/uploads/2023/11/Accountability.svg" alt="Fill the form now">
                            <h3 class="fusion-title-heading"><p>1. Fill the form now</p></h3>
                            <p class="work-box-text">Choose what works best for you - fill out our simple online form or call to speak with a friendly specialist who will guide you through enrollment.</p>
                        </li>
                        <li class="how-it-work-box">
                            <img src="https://clearcaptions.com/wp-content/uploads/2023/10/icon-person-wave.svg" alt="Determine your eligibility">
                            <h3 class="fusion-title-heading"><p>2. Determine your <em class="title-italic"><br> eligibility</em></p></h3>
                            <p class="work-box-text">ClearCaptions verifies your eligibility for our service based on hearing loss, U.S. residency, and internet access through a few simple questions.</p>
                        </li>
                        <li class="how-it-work-box">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1736233199/ClearCaptions/Training.svg" alt="Receive training free installation">
                            <h3 class="fusion-title-heading"><p>3. Receive training & <em class="title-italic"><br> free installation</em></p></h3>
                            <p class="work-box-text">Relax while an expert installs your new phone at no cost, then receive personalized training until you feel completely confident using the captioning service.</p>
                        </li>
                        <li class="how-it-work-box">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1736750331/ClearCaptions/icon-phone.png" alt="Enjoy communicating independently once again">
                            <h3 class="fusion-title-heading"><p>4. Enjoy communicating <em class="title-italic"><br> independently once again</em></p></h3>
                            <p class="work-box-text">Reconnect with confidence- enjoy clear, real-time captions that let you communicate easily and stay connected with loved ones.</p>
                        </li>
                    </ul>
                </div>
        </div>`);

        // Append additional HTML after loading content
        jQuery('#HowItWorks h3.fusion-title-heading p').eq(0).append(`<em class="title-italic"><br> or call <span class="for-desktop"></span><span class="for-mobile"></span></em>`);

        var i = 0;
        var getNumberInterval = setInterval(function() {
            var numberDesktop  = jQuery('header .header-nav-call-now span').text();
            var numberMobile = jQuery('header .header-nav-mobile-menu-phone a').text();

            console.log('Desktop phone number is ' + numberDesktop);
            console.log('Mobile phone number is ' + numberMobile);
            if (numberDesktop) {
                jQuery(".for-desktop").text(numberDesktop);
            } 
            if(numberMobile) {
                jQuery(".for-mobile").text(numberMobile);
            }
            if (i == 5) {
                clearInterval(getNumberInterval);
            }
            i++;
        }, 1000);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
