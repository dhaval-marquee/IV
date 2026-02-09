function loadTestCode() {
    if (!document.querySelector('body').classList.contains('service_banner')) {
        document.querySelector('body').classList.add('service_banner');
        
        // Put your test code here
        document.querySelector('.service_banner .primary-hero-banner').insertAdjacentHTML('afterend',`<section class="emergency-service">
            <div class="container">
                <div class="es-row">
                    <div class="emergency-service-details">
                        <img src="/us/en-us/brand/_assets/images/icon_assessment.svg" alt="help icon" width="78" height="78" loading="lazy">
                        <h3>Contact us for 24/7 Emergency Service</h3>
                    </div>
                    <div class="emergency-service-action">
                        <button class="services-btn secondary-btn" data-toggle="modal" data-target="#js-schedulerDialog" title="Request Appointment - opens in new tab-modal">Book an Appointment</button>
                        <p>or call<a class="services-call-link anchor_desktop_phone_number" title="phone number - opens in new tab-tel" href="tel:9012501649"><img src="/us/en-us/aire-serv/_assets/images/phone-red.svg" alt="phone icon" width="13" height="27"><span class="sr-only">Call phone number</span>(901) 250-1649</a></p>
                    </div>
                </div>
            </div>
        </section>`);
    }
}
loadTestCode();