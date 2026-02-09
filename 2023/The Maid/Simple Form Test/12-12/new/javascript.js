$('body').addClass('formTest_iv');
$('#quoteModal').addClass('popUpModal_iv');

function reArrangeFields() {
    $('#field_14_1').before($('#field_14_30')); // one time service field.
    $('#input_14_1').append($('#field_14_3')); // Email ID field.
    $('#field_14_9').after($('#field_14_35')); // Zip code field.
    $('#field_14_35').after($('#field_14_4')); // Phone number field.
    $('#input_14_38 option[value="3"]').removeAttr('selected');

    // Check mark placement
    $('.gform_page_footer #gform_submit_button_14').closest('.gform_page_footer').after($('#choice_14_22_1').closest('fieldset'));
    $('.gform_page_footer #gform_submit_button_14').closest('.gform_page_footer').after($('#choice_14_24_1').closest('fieldset'));

    var checkmark = setInterval(() => {
        if($('#choice_14_22_1').length && $('#choice_14_24_1')) {
            clearInterval(checkmark);
            setTimeout(function() {
                $('#choice_14_22_1').prop('checked', true);
                $('#choice_14_24_1').prop('checked', true);
            }, 2000);
        }
    }, 100);
}

reArrangeFields();

document.addEventListener('click', function(e) {
    if (e.target && e.target == document.querySelector('input#gform_submit_button_14')) {
        var reArrangeInterval = setInterval(() => {
            console.log('runnniigggggg');
            reArrangeFields();

            if($('#gform_page_14_1 #field_14_30').length > 0) {
                setTimeout(() => {
                    clearInterval(reArrangeInterval);
                }, 2000);
            }
        }, 1);
    }
});