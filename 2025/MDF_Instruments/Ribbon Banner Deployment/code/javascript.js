function ribbonBannerIV() {
    if (!jQuery('body').hasClass('ribbon_banner_iv')) {
        
        jQuery('body').addClass('ribbon_banner_iv');

        // Put your test code here
        jQuery('.ribbon_banner_iv .announcement-bar .heading').html('LAST-MINUTE GIFT? SHOP OUR FAST-SHIPPING PICKS. ARRIVES BEFORE 12/25 OR YOU GET A $20 GIFT CARD. <a href="https://mdfinstruments.com/collections/the-mprints-collection">VIEW COLLECTION</a><button type="button" class="openModal">i</button>');
        jQuery('.ribbon_banner_iv').prepend(`<div class="mq_modal">
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <button type="button" class="mq_close"></button>
                    <div class="mq_modal_content">
                        <p>Offer valid for MDF® Mprint Stethoscopes.</p>
                        <p>UPS Expedited shipping must be manually selected and paid for at checkout. It will not appear as the default option. This timeframe applies only to customers within the Continental U.S. and Puerto Rico.</p>
                        <div class="mq_shipping">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1765885911/MDF_Instruments/ShippingMethodDesktop.png" alt="Shipping method" width="470" class="sm-max:hidden">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1765885914/MDF_Instruments/ShippingMethodMobile.png" alt="Shipping method" width="316" class="sm:hidden">
                        </div>
                    </div>
                </div>
            </div>
        </div>`);

        // Modal Open & Close
        jQuery('.ribbon_banner_iv .openModal').on('click', function(){
            jQuery('.ribbon_banner_iv .mq_modal').show();
            jQuery('.ribbon_banner_iv').addClass('mq_modal_open');
            setTimeout(() => {
                jQuery('.ribbon_banner_iv .mq_modal').addClass('open');
            }, 75);
        });

        jQuery('.ribbon_banner_iv .mq_close').on('click', function(){
            jQuery('.ribbon_banner_iv').removeClass('mq_modal_open');
            jQuery('.ribbon_banner_iv .mq_modal').removeClass('open');
            setTimeout(() => {
                jQuery('.ribbon_banner_iv .mq_modal').hide();
            }, 75);
        });
    }
}

document.addEventListener("DOMContentLoaded", function () { 
    ribbonBannerIV(); 
});