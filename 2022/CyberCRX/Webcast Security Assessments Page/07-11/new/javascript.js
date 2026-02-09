function IVTestCode() {
    if (!$('body').hasClass('cybergrx_iv')) {
        $('body').addClass('cybergrx_iv');

        // Put your test code here
        $('.cybergrx_iv .img-canvas').before($('.cybergrx_iv .box-f-landing'));
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner h2').html('<strong>Live Webcast: </strong><span>Security Assessments:</span> Waste of Time or Worth It?');
        $('.cybergrx_iv .mod-banner.mod-banner-l .content-banner').append(`<p>We’re in Q4– it’s game on. SaaS providers and vendors are cranking up the sales volume in anticipation of finishing the year strong, while customer risk and procurement teams are working overtime to handle the influx of evaluation requests.</p>
        <p>The reality is third-party security assessments take hours to complete and many more to analyze. And, when you consider that an assessment is self-attested information subject to human error and unintentional oversight, should organizations be making risk management decisions based on questionnaire data?</p>
        <p>Join us as we debate the question, <b>are security assessments worth it or a waste of time</b> in a live webcast. Join via Zoom or watch on LinkedIn Live– and participate throughout the conversation with your comments.</p>
        <div class="speakers_section">
            <h3><strong>Speakers</strong></h3>
            <ul>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667591304/CyberGRX/Webcast_Security_Assessments_Page/David_Wilson.png" alt="David Wilson">
                    <h4><strong>David Wilson</strong></h4>
                    <p>Director, Compliance Assurance ACI Worldwide</p>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667591303/CyberGRX/Webcast_Security_Assessments_Page/Denise_Flory_2.png" alt="Denise Flory">
                    <h4><strong>Denise Flory</strong></h4>
                    <p>Director, Cybersecurity Risk Verizon</p>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667591303/CyberGRX/Webcast_Security_Assessments_Page/Peter_Finter.png" alt="Peter Finter">
                    <h4><strong>Peter Finter</strong></h4>
                    <p>Moderator, CyberGRX</p>
                </li>
            </ul>
        </div>`);
        $('.cybergrx_iv .form-hubspot .headline-f-l p').html('<b>Fill out the form below to join the webcast</b>')
    }
}

// Load code just for desktop 
if (window.matchMedia("(min-width: 992px)").matches) {

    IVTestCode();

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
// Load code just for desktop over