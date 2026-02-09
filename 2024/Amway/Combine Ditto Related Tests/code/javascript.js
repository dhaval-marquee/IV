function loadTestCode() {
    if (!$('body').hasClass('dittoBtn')) {
        $('body').addClass('dittoBtn');
        
        // Put your test code here
        $('#addToDitto- span.amw-button__inner').text('Get hassle-free refills shipped to you with DITTO™!');
        $('.dittoBtn .amw-loyalty-banner__right-section img').before('<img class="amw-loyalty-banner__logo-image amw-loyalty-banner__logo-image--fixed-width" alt="Amperks logo" src="/_ui/responsive/theme-lynx/images/AmPerks_Logo.png" data-loaded="true"></img>');

        var dittoCheck1 = setInterval(function() {
            if($('#addToDitto-').length > 0) {
                clearInterval(dittoCheck1);

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

    if (!$('body').hasClass('dittoFirstStepIV')) {
        $('body').addClass('dittoFirstStepIV');
        
        // Put your test code here
        var dittoCheck2 = setInterval(function() {
            if($('#addToDitto-').length > 0) {
                clearInterval(dittoCheck2);

                $('button[test-id="create-ditto-button"], #addToDitto-').click(function(e) {
                    setTimeout(() => {
                        $('#saveDittoScheduleForm #saveRecommendationDittoName').val($('nav .amw-breadcrumb__item.active').text());
                        $('#saveDittoScheduleForm button[test-id="create-button"]').text('Save DITTO™ Name');
                    }, 100);
                });
            }
        }, 1000);
    }

    if (!$('body').hasClass('dittoSecondStepIV')) {
        $('body').addClass('dittoSecondStepIV');
        
        // Put your test code here
        var buttonText = 'Setup Hassle-Free Auto Refills with DITTO™';
        var dittoCheck3 = setInterval(function() {
            if($('#addToDitto-').length > 0) {
                clearInterval(dittoCheck3);

                $('#addToDitto-, button[test-id="create-ditto-button"], button[test-id="add-to-ditto-button"], button[test-id="create-button"]').click(function(e) {
                    console.log('button clicked');

                    var i = 0;
                    var changeText = setInterval(() => {
                        $('#addToOneDittoRecommendationSingleProductsModal button').eq(0).text(buttonText);
                        $('#addToOneDittoMultRecommendationProductsModal button.js-go-to-ditto').text(buttonText);
                        i++;
                        if(i == 30) {
                            clearInterval(changeText);
                        }
                    }, 100);
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