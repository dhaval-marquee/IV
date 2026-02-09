console.log('console')
function IVTestCode() {
    if (!jQuery('body').hasClass('location_IV')) {
        jQuery('body').addClass('location_IV');
        
        // Put your test code here


        jQuery('.location_IV .page_content .block-system-main-block .detail_page__leftContainer').parent().addClass('content_wrapper').removeClass('clearfix');
        jQuery('.location_IV .content_wrapper .detail_page__leftContainer').removeClass('col-md-8 no_padding');
        jQuery('.location_IV .content_wrapper .detail_page__rightContainer').removeClass('col-md-4 no_paddingg');
        jQuery('.location_IV .content_wrapper .location-main-block .paragraph_link:not(:last-of-type)').wrap('<div class="call_wrapper"></div>');
        jQuery('.location_IV .geolocation-map-wrapper').after(jQuery('.page_content .detail_page__leftContainer p.address'));
        jQuery('.location_IV .content_wrapper .location-main-block .field--type-geolocation .address').wrap('<div class="address_time_wrapper"></div>');
        jQuery('.location_IV .content_wrapper .address_time_wrapper').append(jQuery('.field--name-field-hours-of-operation').parent().removeClass('col-md-6 no_padding').addClass('hours_operation_wrapper'));
        jQuery('.location_IV .content_wrapper .location-main-block .field--type-geolocation').after(jQuery('.locations-right-block'));
        jQuery('.location_IV .address_time_wrapper').after('<div class="hero_button_wrapper">\
            <a href="javascript:;" id="reserveNow" class="button button_orange">Reserve Now</a>\
            <a href="javascript:;" id="requestQuote" class="button button_tile">Request Quote</a>\
        </div>');
        jQuery('.location_IV .location-content .table-wrap').before('<ul class="list_items"></ul>');
        jQuery('.location_IV .text-content table td ul').each(function(){
            var listItems = jQuery(this).find('li');
            jQuery(this).closest('.table-wrap').siblings('.list_items').append(listItems)
        });

        var mylist = jQuery('.list_items');
        var listitems = mylist.children('li').get();
        listitems.sort(function(a, b) {
           return jQuery(a).text().toUpperCase().localeCompare(jQuery(b).text().toUpperCase());
        })
        jQuery.each(listitems, function(idx, itm) { mylist.append(itm); });


        // var count = parseInt(jQuery('.location_IV .location-content .list_items li').length/4);
        // if(count > 6) {
        //     console.log('dhaval');
        //     jQuery('.location_IV .location-content .list_items').css('grid-template-rows','repeat('+(count-2)+', auto)');
        // }













        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}

function initCode() {
    var jQisLoaded = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQisLoaded);
            IVTestCode();
        } else {
            // DOM: Create the script element
            var jsElm = document.createElement("script");
            // set the type attribute
            jsElm.type = "application/javascript";
            // make the script element load file
            jsElm.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
            // finally insert the element to the body element in order to load the script
            document.body.appendChild(jsElm);
            clearInterval(jQisLoaded);
            var jqueryInterval = setInterval(function () {
                if (typeof jQuery != 'undefined') {
                    clearInterval(jqueryInterval);
                    IVTestCode();
                }
            }, 100);
        }
    }, 100);
}


// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    initCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over
