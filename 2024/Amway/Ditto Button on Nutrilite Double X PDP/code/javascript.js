function loadTestCode() {
    if (!$('body').hasClass('dittoBtn')) {
        $('body').addClass('dittoBtn');
        
        // Put your test code here
        $('#addToDitto- span.amw-button__inner').text('Get hassle-free refills shipped to you with DITTO™!');
        $('.dittoBtn .amw-loyalty-banner__right-section img').before('<img class="amw-loyalty-banner__logo-image amw-loyalty-banner__logo-image--fixed-width" alt="Amperks logo" src="/_ui/responsive/theme-lynx/images/AmPerks_Logo.png" data-loaded="true"></img>');

        var dittoCheck = setInterval(function() {
            if($('#addToDitto-').length > 0) {
                clearInterval(dittoCheck);

                $('button[data-id="add-to-ditto"]').click(function(e) {
                    setTimeout(() => {
                        if($('.js-existing-ditto-list').hasClass('show') && $('.js-loader').hasClass('hidden') && !$('button[data-id="add-to-ditto"] ~ div .js-add-new-first-ditto').hasClass('d-none')) {
                            e.preventDefault();
                            console.log('open');
                            $('button[data-id="add-to-ditto"] ~ div .js-add-new-first-ditto').click();
                        }
                    }, 2000);
                });
            }
        }, 1000);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);