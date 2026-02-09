function loadTestCode() {
    if(!jQuery('body').hasClass('location_iv')) {
        jQuery('body').addClass('location_iv');

        document.querySelectorAll('.template-index .main_container > div')[1].after(document.querySelectorAll('.template-index .main_container > div')[9]);

        jQuery("").html(`<div class="btn-wrapper">
            <a href="https://resetiv.com/pages/packages" class="btn btn-banner2">
                <span>View Drip Packages</span>
            </a>          
        </div>`);


        
    }
}
loadTestCode();
