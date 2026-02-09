function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('pdisplay_test')) {
        bodyEle.classList.add('pdisplay_test');
        
        // Put your test code here
        $('.pdisplay_test #mainTop .container').wrapInner('<div class="content_left"></div>');
        $('.pdisplay_test #mainTop .container .marquee-text-content').append('<a href="javascript:;" id="scrollToForm">Connect With Us</a>');

        $('.pdisplay_test #main .columnBoxes .container').prepend("<h2>Best-in-class Hospital & Health System solution that can be used across your entire organization</h2>");
        $('.pdisplay_test #main .columnBoxes .container .row').html(`<div class="col-12 col-md-6 col-lg-3 column-content">
            <div class="column-content-box h-100 d-flex flex-column column-content-box--dark content-bg-box">
                <div class="box-top px-3 pt-2">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1668510217/Experian/PDisplay_Landing_Page/_sign.png" alt="Revenue Cycle">
                    <h3 class="h4 text-dark-blue mt-2 mb-1">Revenue Cycle</h3>
                </div>
                <div class="box-body flex-grow-1 px-md-10 px-xl-20 px-xxl-35 pt-3 pb-20">
                    <ul class="bullet-dots">
                        <li>Patient access solutions</li>
                        <li>Collections optimization</li>
                        <li>Claims management</li>
                        <li>Audit payers</li>
                        <li>RCM analytics</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 column-content">
            <div class="column-content-box h-100 d-flex flex-column column-content-box--dark content-bg-box">
                <div class="box-top px-3 pt-2">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1668510217/Experian/PDisplay_Landing_Page/Group.png" alt="Patient Engagement">
                    <h3 class="h4 text-dark-blue mt-2 mb-1">Patient Engagement</h3>
                </div>
                <div class="box-body flex-grow-1 px-md-10 px-xl-20 px-xxl-35 pt-3 pb-20">
                    <ul class="bullet-dots">
                        <li>Automated scheduling</li>
                        <li>Patient intake</li>
                        <li>Patient estimates</li>
                        <li>Payment solutions</li>
                        <li>Marketing data</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 column-content">
            <div class="column-content-box h-100 d-flex flex-column column-content-box--dark content-bg-box">
                <div class="box-top px-3 pt-2">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1668510217/Experian/PDisplay_Landing_Page/Shield.png" alt="Identity Management">
                    <h3 class="h4 text-dark-blue mt-2 mb-1">Identity Management</h3>
                </div>
                <div class="box-body flex-grow-1 px-md-10 px-xl-20 px-xxl-35 pt-3 pb-20">
                    <ul class="bullet-dots">
                        <li>Unique patient identifiers</li>
                        <li>Patient portal security</li>
                        <li>Data verification</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 column-content">
            <div class="column-content-box h-100 d-flex flex-column column-content-box--dark content-bg-box">
                <div class="box-top px-3 pt-2">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1668510217/Experian/PDisplay_Landing_Page/Stethoscope.png" alt="Care Management">
                <h3 class="h4 text-dark-blue mt-2 mb-1">Care Management</h3>
                </div>
                <div class="box-body flex-grow-1 px-md-10 px-xl-20 px-xxl-35 pt-3 pb-20">
                    <ul class="bullet-dots">
                        <li>Care coordination</li>
                        <li>Member utilization management</li>
                        <li>Social determinants of health</li>
                    </ul>
                </div>
            </div>
        </div>`);



        $("#scrollToForm").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".form-renderer").offset().top
            }, 100);
        });
    }
}

if (window.matchMedia("(min-width: 992px)").matches) {

    var jQisLoaded = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQisLoaded);
            loadTestCode();
        } 
    }, 100);

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 991.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            location.reload();
        }
    }, true);
}