if (!jQuery('body').hasClass('maid_mobile_iv')) {
    jQuery('body').addClass('maid_mobile_iv');

    // Add phone field dynamically
    jQuery('.maid_mobile_iv #gform_9 #field_9_4').before(`<div id="field_14_4" class="gfield gfield--type-phone gfield--input-type-phone gfield--width-half gfield_contains_required field_sublabel_below gfield--no-description field_description_below hidden_label field_validation_below gfield_visibility_visible" data-js-reload="field_14_4">
        <label class="gfield_label gform-field-label" for="input_14_4">Phone</label>
        <div class="ginput_container ginput_container_phone">
            <input name="input_4" id="input_14_4" type="tel" value="" class="large" placeholder="Phone" aria-required="false" aria-invalid="false">
        </div>
    </div>`);

    // Store phone value in session storage on button click
    var i = 0;
    var getModal;
    jQuery(document).on('click', '#gform_submit_button_9', function() {
        console.log('clickeddddd');
        var phoneValue = jQuery('#input_14_4').val();
        console.log('entered value ===' + phoneValue);
        getModal = setInterval(() => {
            console.log('runnninggggggggggggggggg');
                if(jQuery('#input_14_4').length > 0) {
                    jQuery('#input_14_4').val(phoneValue);
                    setTimeout(() => {
                        clearInterval(getModal);
                    }, 5000);
                }

                if(i == 150) {
                    clearInterval(getModal);
                }
                i++
        }, 100);
    });
}