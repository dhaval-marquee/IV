function loadTestCode() {
    if (!$('body').hasClass('iv-cta')) {
        $('body').addClass('iv-cta');

        var $button = $(".iv-cta .top-buttons > .orange-btn, .iv-cta .m-buttons a.orange-btn, .iv-cta .mm-menu .mm-navbar + .orange-btn");
        if ($button.length) {
            $button.text("Request More Info");
        }

        var $submitButton = $(".iv-cta.page-template-page-free-trial-template #gform_submit_button_22");
        if ($submitButton.length) {
            $submitButton.val("Request More Information");
        }
    }
}

loadTestCode();