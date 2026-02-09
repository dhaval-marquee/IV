function loadTestCode() {
    if(!jQuery('body').hasClass('tabIv')) {
        jQuery('body').addClass('tabIv');
    
        jQuery('#productPageAccordion').before('<ul id="tabHeader"></ul>');

        jQuery('#productPageAccordion .amw-accordion__panel').each(function(index) {
            var tabTitle = jQuery(this).find('.amw-accordion__heading').html();
            jQuery('#tabHeader').append('<li>'+tabTitle+'</li>');
        });

        setTimeout(() => {
            jQuery('ul#tabHeader a[href="#detailsBody"]').click();
        }, 500);

        jQuery(document).on('click', 'ul#tabHeader a.amw-accordion__toggle-row', function(e) {
            e.preventDefault();
            jQuery('.amw-accordion__toggle-row').addClass('collapsed');
            jQuery(this).removeClass('collapsed');
            jQuery('.amw-accordion__collapse').removeClass('showIV');
            jQuery(jQuery(this).attr('href')).addClass('showIV');
        });
    }
}
var loadTest = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(loadTest);
        loadTestCode();
    } 
}, 100);