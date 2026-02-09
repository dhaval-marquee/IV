function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('resizingTest')) {
        bodyEle.classList.add('resizingTest');
        
        // Put your test code here
        $('.product-info-col').parent().addClass('product-info-col-wrapper').css('background','#005a8f').css('padding-top','0');
        $('.m-spec__value').eq(0).closest('.m-specs').parent().addClass('m-spec__value-wrapper').css('padding-top','48px !important').css('background','#004b77');
        $('.product-info-col').parent().after($('.m-spec__value').eq(0).closest('.m-specs').parent());

    }
}
loadTestCode();