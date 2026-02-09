function loadTestCode() {
    if (!jQuery('body').hasClass('awards_iv')) {
        jQuery('body').addClass('awards_iv');
        
        // Put your test code here        
        jQuery(".awards_iv #ajax-content-wrap .main-content .row > div").each(function (index) {
            jQuery(this).addClass("section" + index);
        });
        
        jQuery('.section0').after(jQuery('.awards_iv .section4'));
        jQuery('.section4').after(jQuery('.awards_iv .section5'));
        jQuery('.section5').after(jQuery('.awards_iv .section6'));
        jQuery('#features').before(jQuery('.awards_iv .section7'));

        jQuery('.section7 > div').eq(1).after(`<div class="btn-wrap">
            <a href="https://book.tutoring.k12.com/">
                <span class="menu-title-text">Find a Tutor</span>
            </a>
        </div>`);

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);