function loadTestCode() {
    if (!jQuery('body').hasClass('iv-MenuItem')) {
        jQuery('body').addClass('iv-MenuItem');

        // Update Blog to Insurance nav
        jQuery('.iv-MenuItem li.menu-insurance').each(function () {
            jQuery(this).before(`
                <li class="menu-locations iv-menu-locations menu-item menu-item-type-post_type menu-item-object-page nav-item">
                    <a href="https://empirevein.com/en/locations/" class="nav-link">Locations</a>
                </li>
            `);
        });

        jQuery('#bootscore-navbar > li > a').eq(0).text('Get a FREE Consult or Learn More')
    }
}

// Wait until jQuery and body are available, then call loadTestCode
var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition); 
        loadTestCode(); 
    }
}, 100);