function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('actual_Pricing')) {
        bodyEle.classList.add('actual_Pricing');
       
        jQuery('.pricing-left-col .widget_sow-headline:first-child h3').text('Pay For Only What You Need.');
        jQuery('.pricing-left-col .widget_text').text("Our simple pricing model let's you pay-as-you without any surprise fees or flat monthly rates.");
    }
}
loadTestCode();