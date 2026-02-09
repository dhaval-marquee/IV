function loadTestCode() {
    if (!jQuery('body').hasClass('pdp_iv')) {
        jQuery('body').addClass('pdp_iv');

        // Put your test code here
        var thumbNailImageSelector = '/medias/127019V-en-US-150px-01';
        var imagePathSelector = '/medias/127019V-en-US-690px-01';
        var zoomImagePathSelector = '/medias/127019V-en-US-1800px-01';

        var thumbNailImage = 'https://res.cloudinary.com/ignite-visibility/image/upload/v1726743154/amway/Defying-Serum.png';
        var imagePath = 'https://res.cloudinary.com/ignite-visibility/image/upload/v1726743154/amway/Defying-Serum.png';

        // Replace the images at all locations
        var i = 0;
        var replaceImages = setInterval(function() {
            jQuery(`.amw-gallery-carousel__inner a img[src*="${thumbNailImageSelector}"]`).attr('data-lazy',thumbNailImage).attr('src',thumbNailImage);
            jQuery(`.amw-gallery-carousel--primary .amw-gallery-carousel__inner img[src*="${imagePathSelector}"]`).attr('src',imagePath);

            if(i === 5){
                clearInterval(replaceImages);
            }
            i++
        }, 1000);

        document.addEventListener('click', function(e) {
            if(e.target && e.target.className.includes('amw-gallery-carousel__img')) {
                if(jQuery(`img[src*="${zoomImagePathSelector}`).length){
                    jQuery(`img[src*="${zoomImagePathSelector}`).attr('src',imagePath);
                }
            }
        });

        // Put your test code here
        jQuery('.js-product-wrapper').after(`<div class="amw-page-pdp__tab-details">
            <ul class="d-flex amw-page-pdp__icon-container xss-pl-0 flex-wrap">
                <li class="d-flex amw-page-pdp__icon-container-inner">
                    <img alt="Dermatologist Tested" class="js-lozad" src="/medias/DermatologistTested.svg?context=bWFzdGVyfHJvb3R8NTY3OHxpbWFnZS9zdmcreG1sfGgwNi9oMTMvOTMxMTk2NTQ0NjE3NC5zdmd8MjIwMTQwMDdmZTM2Y2JmNzY5MTcxZjYyMzM3MzhjYjVkNzk0MmQxZDNkMjdiZGZkNDBhM2Q3ODE4OTk3YTMwOQ" height="60">
                    <span class="amw-page-pdp__icon-title">Dermatologist Tested</span>
                </li>
                <li class="d-flex amw-page-pdp__icon-container-inner">
                    <img alt="Suitable for Sensitive Skin" class="js-lozad" src="/medias/SuitableForSensitiveSkin.svg?context=bWFzdGVyfHJvb3R8NzQ1NXxpbWFnZS9zdmcreG1sfGg2ZC9oM2EvOTMxMTk2ODMyOTc1OC5zdmd8NmRlODE1OWYzNjdiMWJjM2RmZDVjYTA4N2QyOWYwYjE1ZThlZWE5MDI3NmE5YzdjNGYwMDMwNjBhNTA5YmZkNw" height="60">
                    <span class="amw-page-pdp__icon-title">Suitable for Sensitive Skin</span>
                </li>
                <li class="d-flex amw-page-pdp__icon-container-inner">
                    <img alt="Non-Comedogenic" class="js-lozad" src="/medias/NonComedegenic.svg?context=bWFzdGVyfHJvb3R8MTgyOHxpbWFnZS9zdmcreG1sfGhjYy9oNjMvOTMxMTk2Njg4Nzk2Ni5zdmd8NDlmMDU4M2NjNjk4NzJhNTY0ZDA0YTY1ZjFhNDIzYmUyMjQ5MGU5MmIzNDdlMWM0NGYwYTFkNmQ4NTQ1NWVhMA" height="60">
                    <span class="amw-page-pdp__icon-title">Non-Comedogenic</span>
                </li>
            </ul>
        </div>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);