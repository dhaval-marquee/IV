function loadTestCode() {
    if (!jQuery('body').hasClass('maid_iv')) {
        jQuery('body').addClass('maid_iv');

        // Add phone field dynamically
        function phoneField() {
            if(jQuery('#field_9_5').length == 0 ) {
                jQuery('.maid_iv #gform_9 #field_9_4').before(`<div id="field_9_5" class="gfield gfield--type-phone gfield--input-type-phone gfield--width-half gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible" data-js-reload="field_9_5">
                    <label class="gfield_label gform-field-label" for="input_9_5">Phone</label>
                    <div class="ginput_container ginput_container_phone">
                        <input name="input_4" id="input_9_5" type="tel" value="" class="large" placeholder="" aria-required="false" aria-invalid="false" />
                    </div>
                </div>`);
            }
        }
        phoneField();

        // Store phone value in session storage on button click
        var i = 0;
        var getModal;
        jQuery(document).on('click', '#gform_submit_button_9', function() {
            console.log('clicked');
            var phoneValue = jQuery('#input_9_5').val();
            console.log('entered value ===' + phoneValue);
            getModal = setInterval(() => {
                console.log('runnning');
                if(jQuery('#input_9_5').length > 0 && jQuery('#input_9_5').val() != '') {
                    jQuery('#input_14_4').val(phoneValue);
                    setTimeout(() => {
                        clearInterval(getModal);
                    }, 5000);
                } else {
                    if(jQuery('#input_9_5').length == 0) {
                        clearInterval(getModal);
                        phoneField();
                    }
                }

                if(i == 150) {
                    clearInterval(getModal);
                }
                i++
            }, 100);
        });

        jQuery('#location-hero p.location-header-title').text('Get a Quick No-Obligation Quote!');
        function addLabel() {
            jQuery('.location-header input#gform_submit_button_9').attr('value', 'REQUEST A NO-OBLIGATION QUOTE');
        }
        addLabel();

        var changeBtnText;
        jQuery(document).on('click', function (e) {
            if (e.target.classList.contains('gform_button')) {
                clearInterval(changeBtnText);
                changeLabel = setInterval(() => {
                    addLabel();
                }, 100);
            }
        });
    }
}

var checkCondition = setInterval(function() {
    console.log('test 29 working');
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        console.log('test 29 test run');
        loadTestCode();
    }
}, 100);