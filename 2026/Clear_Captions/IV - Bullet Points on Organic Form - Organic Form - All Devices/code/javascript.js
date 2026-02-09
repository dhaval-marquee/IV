function getStartedFunction() {
    if (!jQuery('body').hasClass('iv_list')) {
        jQuery('body').addClass('iv_list');

        if (jQuery('.iv-benefits-list').length === 0) {
            jQuery('.iv_list .fusion-text.fusion-text-1').first().append( `
                <ul class="iv-benefits-list">
                    <li>We’ll determine your <strong>eligibility</strong>.</li>
                    <li>We’ll set up a time for your <strong>free installation & training</strong>.</li>
                    <li>You’ll regain your <strong>independence</strong>.</li>
                </ul>
            `);
        }
    }
}

getStartedFunction();