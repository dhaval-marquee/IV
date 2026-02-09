function changeBtn() {
    if (!$('body').hasClass('dittoSecondStepIV')) {
        $('body').addClass('dittoSecondStepIV');
        
        // Put your test code here
        var buttonText = 'Setup Hassle-Free Auto Refills with DITTO™';
        var dittoCheck = setInterval(function() {
            if($('#addToDitto-').length > 0) {
                clearInterval(dittoCheck);

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
        changeBtn();
    }
}, 100);