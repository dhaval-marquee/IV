function changeBtn() {
    if (!$('body').hasClass('dittoFirstStepIV')) {
        $('body').addClass('dittoFirstStepIV');
        
        // Put your test code here
        var dittoCheck = setInterval(function() {
            if($('#addToDitto-').length > 0) {
                clearInterval(dittoCheck);

                $('button[test-id="create-ditto-button"], #addToDitto-').click(function(e) {
                    setTimeout(() => {
                        $('#saveDittoScheduleForm #saveRecommendationDittoName').val($('nav .amw-breadcrumb__item.active').text());
                        $('#saveDittoScheduleForm button[test-id="create-button"]').text('Save DITTO™ Name');
                    }, 100);
                });
            }
        }, 1000);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        changeBtn();
    }
}, 100);