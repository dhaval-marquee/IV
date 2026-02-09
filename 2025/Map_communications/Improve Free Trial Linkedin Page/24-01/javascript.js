function loadTestCode() {
    if (!jQuery('body').hasClass('linkedin_iv')) {
        jQuery('body').addClass('linkedin_iv');
        
        // Put your test code here
        jQuery('#content .trial-content').html(`<h2>Let Us Answer Your Calls for Free for 7 Days!</h2>
        <p>24/7 Professional Call Answering Services</p>
        <ul>
            <li>100% U.S. Based, Employee-Owned Company.</li>
            <li>Customizable Solutions Tailored to Your Business Needs.</li>
            <li>HITRUST Certified for Unmatched Security.</li>
        </ul>`);


        jQuery('#gform_17 ul.gform_fields li.gfield span.name_first label,#gform_19 ul.gform_fields li.gfield span.name_first label').text('First Name');
        jQuery('#gform_17 ul.gform_fields li.gfield span.name_last label,#gform_19 ul.gform_fields li.gfield span.name_last label').text('Last Name');

        jQuery('#gform_17 ul.gform_fields li.gfield span.name_first input, #gform_19 ul.gform_fields li.gfield span.name_first input').attr('placeholder', 'First Name');
        jQuery('#gform_17 ul.gform_fields li.gfield span.name_last input,#gform_19 ul.gform_fields li.gfield span.name_last input').attr('placeholder', 'Last Name');
        jQuery('#gform_17 ul.gform_fields li.gfield input#input_17_2 , #gform_19 ul.gform_fields li.gfield input#input_19_2').attr('placeholder', 'Last Name');
        jQuery('#gform_17 ul.gform_fields li.gfield .ginput_container_phone input , #gform_19 ul.gform_fields li.gfield .ginput_container_phone input').attr('placeholder', 'Phone Number');
        jQuery('#gform_17 ul.gform_fields li.gfield .ginput_container_email input ,#gform_19 ul.gform_fields li.gfield .ginput_container_email input').attr('placeholder', 'Email');
        jQuery('.trial-wrapper .trial-form > p').text('Credit card not required!');


        jQuery('#gform_17 #gform_submit_button_17, #gform_19 #gform_submit_button_19').attr('value', 'Submit Free Trial Request');
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
