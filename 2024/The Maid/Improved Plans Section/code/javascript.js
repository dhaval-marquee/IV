function loadTestCode() {
    if (!jQuery('body').hasClass('plans_iv')) {
        jQuery('body').addClass('plans_iv');

        jQuery('#plans-section .hasCore .plans-table-wrapper').eq(1).before(`<div class="plans-header desktop-only">
            <h2>Cleaning Plans To Fit Your Life</h2>
        </div>`);
        jQuery('#mobile-plans-wrapper .header > .plans-table').before(`<div class="plans-header mobile-only">
            <h2>Cleaning Plans To Fit Your Life</h2>
        </div>`);

        jQuery('#plans-section .hasCore tr.fr7 + tr td button span').each(function(index) {
            if (index >= 0 && index <= 5) {
                jQuery(this).text('a Quote');
            }
        });
        
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);