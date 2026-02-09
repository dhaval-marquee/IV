function loadTestCode() {
    if (!jQuery('body').hasClass('maid_iv')) {
        jQuery('body').addClass('maid_iv');

        jQuery('#location-hero p.location-header-title').text("Get a Quick No-Obligation Quote!");

        function addLabel() {
            jQuery('.location-header input#gform_submit_button_9').attr('value', 'REQUEST A NO-OBLIGATION QUOTE');
            var label = jQuery('.location-header form .gfield_label').eq(3);
            label.html(label.html().replace('Email Address', 'Email'));
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
loadTestCode();