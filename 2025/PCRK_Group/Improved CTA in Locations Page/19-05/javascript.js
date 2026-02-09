function loadTestCode() {
    if (!jQuery('body').hasClass('iv-LocationsPage')) {
        jQuery('body').addClass('iv-LocationsPage');
        
        // Put your test code here

        jQuery("#section-hero + section .locations-directory .location-wrap a.btn-website").each(function () {
            jQuery(this).wrap('<div class="btn_wrapper"></div>');
        });

        jQuery('#section-hero + section .locations-directory .location-wrap a.btn-website').each(function () {
            jQuery(this).after('<a class="btn-website" href="https://apply.workable.com/pcrk-group/?lng=en" target="_blank">Open Positions</a>');
        });


    }
}
loadTestCode();