function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('unsure_test')) {
        bodyEle.classList.add('unsure_test');

       $('.unsure_test .input ul[role="checkbox"] li').after('<li class="hs-form-checkbox" role="checkbox"><label for="product_interest4-371aa449-7058-494c-bf50-577c66f3d6ec" class="hs-form-checkbox-display"><input id="product_interest4-371aa449-7058-494c-bf50-577c66f3d6ec" class="hs-input" type="checkbox" name="product_interest" value="SocialCRM"><span>hello</span></label></li>');

    }
}

loadTestCode();