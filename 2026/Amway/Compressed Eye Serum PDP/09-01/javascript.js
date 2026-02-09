function loadTestCode() {
    if (!$('body').hasClass('iv_amw')) {
        $('body').addClass('iv_amw');

        var $container = $('.productDetailsPageRightPanelSlot-component').first();
        var $targetRow = $container.find('.row').eq(2);

        var $amwPanel = $('.amw-panel.amw-panel--with-border').first();
        if ($targetRow.length && $amwPanel.length) {
            $amwPanel.appendTo($targetRow);
            if (!$amwPanel.parent().hasClass('amw_wrapper')) {
                $amwPanel.wrap('<div class="amw_wrapper"></div>');
            }
        }
        
		jQuery('.yCmsComponent .col-xs-12 .xss-mt-16').appendTo('.amw_wrapper');
    }
}

var checkCondition = setInterval(function () {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
