function loadTestCode() {
    if (!$('body').hasClass('text_change')) {
        $('body').addClass('text_change');
        
        // Put your test code here
        $('.icon-limited-q').each(function(){
            var offerTextTag = $(this).siblings().find('.product-item__special');
            var offerText = offerTextTag.text();
            var digits = offerText.match(/\d+/);

            if (digits) {
                var extractedDigit = parseInt(digits[0], 10);
                // console.log(extractedDigit);

                if(digits < 3) {
                    // console.log(offerText);
                } else {
                    // console.log(offerText);
                    offerTextTag.remove();
                    $(this).remove();
                }
            } else {
                // console.log("No digit found in the text.");
            }
        });


        $('.doorbuster-icon, .icon-new-price').each(function(){
            var busterTag = $(this).siblings().find('.product-item__special');
            var busterTagText = busterTag.find('a').detach();

            var digitText = busterTag.text();
            var checkDigit = digitText.match(/\d+/);
            if (checkDigit) {
                var extractedDigit = parseInt(checkDigit[0], 10);
                // console.log(extractedDigit);

                if(checkDigit < 3) {
                    busterTag.prepend(busterTagText);
                } else {
                    busterTag.html(busterTagText);
                }
            } else {
                // console.log("No digit found in the text.");
            }
        });


    }
}
loadTestCode();