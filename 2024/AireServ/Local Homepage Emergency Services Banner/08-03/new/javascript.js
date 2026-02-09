function loadTestCode() {
    if (!document.querySelector('body').classList.contains('service_banner')) {
        document.querySelector('body').classList.add('service_banner');
        
        // Put your test code here
        var numberText = document.querySelectorAll('.header-classic .anchor_desktop_phone_number')[0].getAttribute('href');
        numberText = numberText.replace(/[^0-9]/g, ''); // Remove non-numeric characters
        var numberTextBeautify = '(' + numberText.substring(0, 3) + ') ' + numberText.substring(3, 6) + '-' + numberText.substring(6); // Format as (901) 250-1649

        // Add new section code
        document.querySelector('.service_banner .primary-hero-banner').insertAdjacentHTML('afterend',`<section class="emergency-service">
            <div class="container">
                <div class="es-row">
                    <div class="emergency-service-details">
                        <img src="/us/en-us/brand/_assets/images/icon_assessment.svg" alt="help icon" width="78" height="78" loading="lazy">
                        <h3>Contact us for 24/7 Emergency Service</h3>
                    </div>
                    <div class="emergency-service-action">
                        <button class="services-btn secondary-btn" data-toggle="modal" data-target="#js-schedulerDialog" title="Request Appointment - opens in new tab-modal">Book an Appointment</button>
                        <p>or call<a class="services-call-link anchor_desktop_phone_number" title="phone number - opens in new tab-tel" href="tel:`+numberText+`"><img src="/us/en-us/aire-serv/_assets/images/phone-red.svg" alt="phone icon" width="13" height="27"><span class="sr-only">Call phone number</span><span id="dynamicNumber">(901) 250-1649</span></a></p>
                    </div>
                </div>
            </div>
        </section>`);

        document.querySelector('#dynamicNumber').textContent = numberTextBeautify;
    }
}
loadTestCode();