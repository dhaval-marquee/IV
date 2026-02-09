function loadTestCode() {
    if(!jQuery('body').hasClass('cartFeatureIcon')) {
        jQuery('body').addClass('cartFeatureIcon');
    
        jQuery('.AddToCart-AddToCartAction').parent().addClass('cartWrapper').append(jQuery('#detailsBody .amw-page-pdp__tab-details ul').clone());
    }
}
var loadTest = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(loadTest);
        loadTestCode();
    } 
}, 100);