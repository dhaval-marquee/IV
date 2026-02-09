function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('page_enhancements')) {
        bodyEle.classList.add('page_enhancements');
        
        // Put your test code here
        $('.page_enhancements main').parent().addClass('data_validation');
        $('.data_validation main h2').html('Get started for free. No credit card required.<sup>†</sup> includes:');
        $('.data_validation main ul').html(`
            <li>14 day access (extension available)</li>
            <li>2000 free address, email and phone data validations</li>
            <li>Performance and reporting dashboard</li>
            <li>Interactive tutorials for easy onboarding</li>
            <li>Personalized support from our expert team</li>
        `);

        $('#dv-first-name').attr('placeholder','Enter your first name');
        $('#dv-last-name').attr('placeholder','Enter your last name');
        $('#dv-email').attr('placeholder','Enter your business email');
        $('#dv-company-name').attr('placeholder','Enter your company name');

        $('.page_enhancements .data_validation main').append($('.dv-free-trial-registration-container-note'));
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over
