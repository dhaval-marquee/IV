function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('productPage')) {
        bodyEle.classList.add('productPage');
        
        // Put your test code here
        $('#pagecontent +div >.sixteen.columns').after($('.ig-custom--template h1.product_name'));
        $('.productPage .selector-wrapper').after($('.ig-custom--template .product-quantity-box.purchase-details__quantity'));
        $('.product_gallery_nav.product_gallery_nav--bottom-slider .gallery-cell img').before('<div class="dot"></div>');

        $('.productPage .select').before($('.productPage .select>label').addClass('Flavor'));

        var getText =  $(".productPage .selector-wrapper .single-option-selector option").filter(":selected").text();
        $('.productPage label.Flavor').html(getText);

     
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over