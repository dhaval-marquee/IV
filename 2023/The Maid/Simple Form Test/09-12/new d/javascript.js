document.querySelector('body').classList.add('formTest_iv');

function reArrangeFields() {
    $('#field_14_1').before($('#field_14_30')); // one time service field.
    $('#input_14_1').append($('#field_14_3')); // Email ID field.
    $('#field_14_9').after($('#field_14_35')); // Zip code field.
    $('#field_14_35').after($('#field_14_4')); // Phone number field.
    $('#input_14_38 option[value="3"]').removeAttr('selected');

    // Check mark placement
    $('.gform_page_footer #gform_submit_button_14').closest('.gform_page_footer').after($('#choice_14_22_1').closest('fieldset'));
    $('.gform_page_footer #gform_submit_button_14').closest('.gform_page_footer').after($('#choice_14_24_1').closest('fieldset'));
    $('#choice_14_22_1').prop('checked', true);
    $('#choice_14_24_1').prop('checked', true);
}

reArrangeFields();

var intervalId;
document.addEventListener('click', function(e) {
    console.log('working 1');
    if (e.target && e.target == document.querySelector('input#gform_submit_button_14')) {
        console.log('working 2');
        function myFunction() {
            clearInterval(intervalId);
            console.log('runnniigggggg');
            reArrangeFields();
        }
        var intervalId = setInterval(myFunction, 1);
        setTimeout(function() {
            console.log('stopeedddddd');
            clearInterval(intervalId);
        }, 5000);
    }
});