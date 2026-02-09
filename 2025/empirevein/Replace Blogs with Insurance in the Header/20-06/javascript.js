function loadTestCode() {
    if (!jQuery('body').hasClass('iv_nav')) {
        jQuery('body').addClass('iv_nav');

        // Domain URL
        var pathParts = window.location.pathname.split('/');
        var langSlug = pathParts[1] ? '/' + pathParts[1] : '';
        var baseURL = window.location.origin + langSlug;

        // Update Blog to Insurance nav
        jQuery('.iv_nav .nav-item-107 > a').each(function () {
            jQuery(this).text('Insurance').attr('href', baseURL + '/patient-center/insurances-we-accept/').addClass('insurance-menu');
        });

        // Append Blog link to Footer nav
        var footerCheck = setInterval(function () {
            var $footerNav = jQuery('.iv_nav footer nav > ul');
            if ($footerNav.length) {
                $footerNav.append(`
                    <li class="wp-block-navigation-item wp-block-navigation-link" style="font-size: 16px;">
                        <a class="wp-block-navigation-item__content" href="${baseURL}/blogs/">
                            <span class="wp-block-navigation-item__label">Blog</span>
                        </a>
                    </li>
                `);
                clearInterval(footerCheck);
            }
        }, 100);
    }
}

// Wait until jQuery and body are available, then call loadTestCode
var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition); 
        loadTestCode(); 
    }
}, 100);