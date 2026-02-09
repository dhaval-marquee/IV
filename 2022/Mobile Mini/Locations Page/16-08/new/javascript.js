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
            <a href="javascript:;" class="button button_iv button_orange reserveNow">Reserve Now</a>\
            <a href="javascript:;" id="requestQuote" class="button button_iv button_tile">Request Quote</a>\
        </div>');


        var i = 1;
        jQuery('.location-content .table-wrap').each(function(){
            var tableWrap = jQuery(this);
            tableWrap.before('<ul class="list_items list_item_'+i+'"></ul>');
            tableWrap.find('td ul').each(function(){
                var listItems = jQuery(this).find('li');
                jQuery(this).closest('.table-wrap').siblings('.list_item_'+i).append(listItems)
            });
            i++;
        });

        if (jQuery('.list_item_1').length > 0) {
            jQuery('.list_item_1').after('<div class="location_offer_wrapper">\
                <h2>Available at This Location</h2>\
                <div class="product_wrapper">\
                    <div class="product_item">\
                        <div class="product_img">\
                            <img src="https://www.mobilemini.com/sites/default/files/styles/product_selector_thumbnail_350x218_/public/standard-storage-container-hero-870x543.jpg" width="350" height="218" alt="standard-storage-container-hero">\
                        </div>\
                        <div class="product_content">\
                            <h3>Storage Containers</h3>\
                            <p>Whether you need secure on-site storage for valuable inventory or equipment and materials on the job site, Mobile Mini has the right solution for you.</p>\
                            <div class="link_wrapper">\
                                <a href="javascript:;" class="button button_iv button_orange reserveNow">Reserve Now</a>\
                                <a href="https://www.mobilemini.com/ground-level-offices/standard-width-ground-level-offices">Learn More</a>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="product_item">\
                        <div class="product_img">\
                            <img src="https://www.mobilemini.com/sites/default/files/styles/product_selector_thumbnail_350x218_/public/standard-storage-container-hero-870x543.jpg" width="350" height="218" alt="standard-storage-container-hero">\
                        </div>\
                        <div class="product_content">\
                            <h3>Ground Level Mobile Offices</h3>\
                            <p>We have secure solutions for every demand. Ground mounted installation creates an instant office space solution. Contact us today and let us get you into your next office trailer rental.</p>\
                            <div class="link_wrapper">\
                                <a href="javascript:;" class="button button_iv button_orange reserveNow">Reserve Now</a>\
                                <a href="https://www.mobilemini.com/portable-storage/standard-width-containers">Learn More</a>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>');
        }


        jQuery('.list_items').each(function(){
            var mylist = jQuery(this);
            var listitems = mylist.children('li').get();
            listitems.sort(function(a, b) {
               return jQuery(a).text().toUpperCase().localeCompare(jQuery(b).text().toUpperCase());
            })
            jQuery.each(listitems, function(idx, itm) { mylist.append(itm); });
        });

        jQuery('.location_IV .location-content h2').each(function () {
            var SelectElement = jQuery(this);
            if (SelectElement.html().replace(/\s|&nbsp;/g, '').length == 0) {
                SelectElement.empty();
            }
        });


        // Set section at the first place
		jQuery('.list_items').each(function(){
		    jQuery(this).prevAll('h2').first().wrap("<div class='field__item all-content'></div>");
		});
		var k=1,html="";
		jQuery(".all-content").each(function(){
		   if(k>1){
		       html += jQuery(this).html();
		   } 
		   html += "<p>"+jQuery(this).nextAll('p').first().html()+"</p>";
		   jQuery(this).nextAll('p').first().remove();
		    html += '<ul class="list_items">'+jQuery(this).nextAll('ul').first().html()+'</ul>';
		    jQuery(this).nextAll('ul').first().remove();
		    k++;
		});
		jQuery(".all-content").first().append(html);
		var j = 0;
		jQuery(".all-content").each(function(){
		  if(j > 0){
		  	jQuery(this).remove();
		  }
		  j++;
		});
		jQuery(".all-content").closest(".field__items").prepend(jQuery(".all-content"));
        

        document.getElementsByTagName("body")[0].style.visibility = "visible";




        jQuery(document).on('click', '.reserveNow', function(){
            console.log('dhaval');
            jQuery('.reserve-now-container .js-reserve-now-tab').trigger('click');
        });

        jQuery(document).on('click', '#requestQuote', function(){
            jQuery('#get-a-quote-fly-out').trigger('click');
        });
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
