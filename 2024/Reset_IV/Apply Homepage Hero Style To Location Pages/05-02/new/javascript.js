function loadTestCode() {
    if(!jQuery('body').hasClass('location_iv')) {
        jQuery('body').addClass('location_iv');
        
        jQuery('.location_iv .reset-btn-group a:first-child').addClass('btn-dark btn-large').removeClass('btn-light');
        jQuery('.location_iv .reset-btn-group a:last-child').addClass('btn-dark btn-large').removeClass('btn-light');


    }
}
loadTestCode();
