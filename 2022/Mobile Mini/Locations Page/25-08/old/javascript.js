console.log('console')
function IVTestCode() {
    if (!jQuery('body').hasClass('location_IV')) {
        jQuery('body').addClass('location_IV');

        var currentPage = window.location.pathname.substring(window.location.pathname.lastIndexOf('/') + 1)+'_IV';

        jQuery('body').addClass(currentPage);
        
        // Put your test code here

        function getElementByInnerText(searchText = '', tagName = 'a'){
            var Tags = document.querySelectorAll(tagName);
            var elementFound = [];
            for (var i = 0; i < Tags.length; i++) {
                if (Tags[i].innerHTML == searchText) {
                    elementFound.push(Tags[i]);
                }
            }
            return elementFound;
        }

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

        // jQuery('.list_items').each(function(){
        //     var mylist = jQuery(this);
        //     var listitems = mylist.children('li').get();
        //     listitems.sort(function(a, b) {
        //        return jQuery(a).text().toUpperCase().localeCompare(jQuery(b).text().toUpperCase());
        //     })
        //     jQuery.each(listitems, function(idx, itm) { mylist.append(itm); });
        // });

        jQuery('.location_IV .location-content h2, .location_IV .location-content .text-content p').each(function () {
            var SelectElement = jQuery(this);
            if (SelectElement.html().replace(/\s|&nbsp;/g, '').length == 0) {
                SelectElement.empty();
            }
        });


        // Set section at the first place
		jQuery('.list_items').each(function(){
		    jQuery(this).prevAll('h2').first().wrap("<div class='field__item all_content_iv'></div>");
		});
		var k=1,html="";
		jQuery(".all_content_iv").each(function(){
		   if(k>1){
               jQuery(".all_content_iv").first().append(jQuery(this).html());
		   } 
           jQuery(".all_content_iv").first().append(jQuery(this).nextAll('p').first());
           jQuery(".all_content_iv").first().append(jQuery(this).nextAll('ul').first());
		    k++;
		});
		
		var j = 0;
		jQuery(".all_content_iv").each(function(){
		  if(j > 0){
		  	jQuery(this).remove();
		  }
		  j++;
		});
		jQuery(".all_content_iv").closest(".field__items").prepend(jQuery(".all_content_iv"));

        var getText = getElementByInnerText('products', 'a');
        var getClassInterval = setInterval(function(){
            if(getText.length > 0){
                clearInterval(getClassInterval)
        
                console.log('Dhaval');

                getText.forEach(function(textElement){
                    textElement.parentNode.classList.add('product_section');
                });

                jQuery('.location_IV .location-content .product_section').prevAll('h2').first().addClass('product_title_iv');

                jQuery('.all_content_iv').after('<div class="product_wrapper_iv"></div>');
                jQuery(".product_wrapper_iv").prepend(jQuery(".product_title_iv").prev().nextUntil("hr").next());
                jQuery('.product_wrapper_iv').prepend(jQuery(".product_title_iv"));

                jQuery('.location_IV .location-content .product_section').before('<div class="location_offer_wrapper">\
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
        }, 10);


        if(jQuery('.location_IV .location-content .field__item .field--name-field-video-slide').length > 0) {
            jQuery('.location_IV .location-content .field__item .field--name-field-video-slide').parent().next().find('.text-content h2 ~ h2').first().nextAll('hr').first().before(jQuery('.location_IV .location-content .field__item .field--name-field-video-slide').parent()); // do not change position of this script (used for this page only: https://www.mobilemini.com/locations/az/phoenix-27th-ave)
        }

        jQuery('.list_items').empty();

        var austinCities = ['Gatesville','Fort Hood','Killeen','Harker Heights','Belton','Morgan’s Point Resort','Temple','Stampede','Moody','Bruceville-Eddy','Lorena','Hewitt','Woodway','Robinson','Riesel','Golinda','Chilton','Westphalia','Zabcikville','Rogers','Salado','Sparks','Holland','Prairie Dell','Jarrell','Florence','Ding Dong','Bertram','Marble Falls','Spicewood','Dripping Springs','Driftwood','Buda','Manchaca','Sunset Valley','West Lake Hills','Bee Cave','Lakeway','Hudson Bend','Lago Vista','Jonestown','Cedar Park','Leander','Liberty Hill','Serenada','Georgetown','Weir','Jonah','Granger','Circleville','Thorndale','Taylor','Hutto','Round Rock','Pfugerville','Coupland','Manor','Austin','Elgin','Sayersville','Bastrop','Cedar Creek','Mustang Ridge','Creedmoor','San Angelo','Waco','Kyle','San Marcos','Lockhart']

        var houstonCities = ['Bryan/College Station','Spring','Huntsville','Katy','Freeport','Humble','Webster','Baytown','Porter','Cypress','New Caney','Conroe','Dayton','Pearland','El Campo','Galveston','Wharton','Sugar Land','Sealy','Pasedena','Magnolia','The Woodlands','Montgomery County','League City','Livingston','Mont Belvieu','Bay City','La Porte','Lake Jackson','Brookshire','Alvin','Fulshear','Tomball','Houston']

        var orlandoCities = ['Altamonte Springs','Apopka','Clermont','Cocoa','Davenport','Daytona Beach','Deer Park','Deltona','Eustis','Haines City','Kissimmee','Leesburg','Maitland','Merritt Island','Mims','Mt. Dora','Ormond Beach','Rockledge','St. Cloud','Titusville','Winter Haven','Winter Park','The Villages','Windermere','Horizon West','Doctor Phillips','Belle Isle','Lake Buena Vista','Four Corners','Hunters','Lake Hart','Narcoossee','Magnolia Square','Poinciana','Orlando']

        var philadelphiaCities = ['Philadelphia','Oxford','Reading','Allentown','Scranton- Wilkes Barre','Hazelton','Tamaqua','Jim Thorpe','Lehighton','Palmerton','Blakeslee','Greentown','Tobyhanna','Mt Pocono','Tannersville','Stroudsburg','Pottsville','Schuylkill Haven','Hamburg','Kutztown','Nazareth','Easton','Quakertown','Doylestown','Lansdale','King of Prussia','Exton','Coatesville','West Chester','Lancaster','Quarryville','Langhorne','Bensalem','Wilmington','New Castle','Dover','Trenton','Cape May','Vineland','Cherry Hill','Levittown','Wayne','Atlantic City','Chester','Middletown','Ocean City','Wildwood','Bridgeton','Millville','Woodbine']

        var phoenixCities = ['Mesa','Scottsdale','Glendale','Maricopa','Peoria','Gilbert','Page','Avondale','Chandler','Flagstaff','Prescott','Queen Creek','Williams','Sedona','Show Low','Kingman','Surprise','Sun City','Waddell','Citrus Park','Litchfield Park','Goodyear','Tolleson','Liberty','Tempe','Paradise Valley','Fountain Hills','Wild Flower','Sun City West','Cave Creek','New River','Phoenix']

        var tucsonCities = ['Tucson','Marana','Vail','Benson','Sierra Vista','Wilcox','Douglas ','Nogales','Sells','Eloy','Casa Grande','Florence','Coolidge','Morenci','Miami','Patagonia','Fort Hauchuca','Green Valley','Sahuarita','Catalina Foothills','Oro Valley','Rio Rico','Red Rock','San Manuel','Sonoita','Elgin','Huachuca City','Bisbee','Tombstone']

        var knoxvilleCities = ['Knoxville','Kingsport','Maryville','Johnson City','Dalton','Crossville','Servierville','Morristown','Oak Ridge','Pigeon Forge','Jefferson City','Rogersville','Greeneville','Maynardville','Rocky Top','Andersonville','Luttrell','Corryton','Blaine','Clinton','Elza','Heiskell','Powell','Halls Crossroads','Karns','Amherst','Strawberry Plains','Asbury','New Hopewell','Boyds Creek','Kodak','Catlettsburg','Seymour','New Market','Talbott','Witt','White Pine','Flat Gap','Dandridge','Chestnut Hill']

        var dallasCities = ['Arlington','Dallas','Plano','Shreveport','Irving','Garland','McKinney','Grand Prairie','DeSoto','Mesquite','Grapevine','Frisco','Denton','Decatur','Weatherford','Waxahachie','Lake Worth','White Settlement','Forth Worth','Benbrook','Forest Hill','Haltom City','North Richland Hills','Saginaw','Keller','Southlake','Euless','Farmers Branch','University Park','Sunnyvale','Mesquite','Balch Springs','Hutchins','Seagoville','Duncanville','Cedar Hill','Mansfield']

        var tampaCities = ["Tampa","St. Petersburg","Lakeland","Clearwater","Sarasota","New Port Richey","Largo","Zephyrhills","Plant City","Spring Hill","Winter Haven","Palm Harbor","Brandon","Lake Wales","Lithia","Dade City","Hudson","Odessa","Citrus Park","Oldsmar","Town 'N' Country","Lutz","Crystal Springs","Thonotosassa","Seffner","Brandon","Riverview","Socrum","Gibsonia","Lakeland Highlands","Mulberry","Auburndale","Cypress Gardens"]

        var sanAntonioCities = ['San Antonio','San Marcos','Del Rio','Eagle Pass','Floresville','Karnes City','Gonzales','New Braunfels','Boerne','Seguin','Comfort','Kerrville','Pleasanton','Pearsall','Fredericksburg','Concan','Timberwood Park','Shavano Park','Castle Hills','Selma','Live Oak','Schertz','Converse','McQueeney','Geronimo','New Berlin','St. Hedwig','Adkins','Alamo Heights','Macdona','Von Ormy','Atascosa','Lytle','Somerset','Losoya','Elmendorf','Saspamco','Sandy Oaks','Leming']

        var atlantaCities = ['Atlanta','Marietta','Lawrenceville','Alpharetta','Cumming','Macon','Roswell','Decatur','Carrollton','Newnan','Griffin','Covington','Warner Robbins','Lithonia','Conyers','East Point','College Park','Forest Park','Morrow','Riverdale','Jonesboro','Stockbridge','Fayetteville','Tyrone','Peachtree City','Palmetto','Fairburn','Union City','Stone Mountain','Tucker','Brookhaven','Lithia Springs','Austell','Smyrna','Sandy Springs','Norcross','Duluth','Johns Creek','Roswell','Kennesaw','Woodstock','Cartersville','Holly Springs','Milton','Douglasville']


        for (var i = 0; i < austinCities.length; i++) {
            jQuery('.austin_IV .location-content .list_items.list_item_1').append('<li>' + austinCities[i] + '</li>');
        }
        for (var i = 0; i < houstonCities.length; i++) {
            jQuery('.houston_IV .location-content .list_items.list_item_1').append('<li>' + houstonCities[i] + '</li>');
        }
        for (var i = 0; i < orlandoCities.length; i++) {
            jQuery('.orlando_IV .location-content .list_items.list_item_1').append('<li>' + orlandoCities[i] + '</li>');
        }
        for (var i = 0; i < philadelphiaCities.length; i++) {
            jQuery('.philadelphia_IV .location-content .list_items.list_item_1').append('<li>' + philadelphiaCities[i] + '</li>');
        }
        for (var i = 0; i < phoenixCities.length; i++) {
            jQuery('.phoenix-27th-ave_IV .location-content .list_items.list_item_1').append('<li>' + phoenixCities[i] + '</li>');
        }
        for (var i = 0; i < tucsonCities.length; i++) {
            jQuery('.tucson_IV .location-content .list_items.list_item_1').append('<li>' + tucsonCities[i] + '</li>');
        }
        for (var i = 0; i < knoxvilleCities.length; i++) {
            jQuery('.knoxville_IV .location-content .list_items.list_item_1').append('<li>' + knoxvilleCities[i] + '</li>');
        }
        for (var i = 0; i < dallasCities.length; i++) {
            jQuery('.dallas_IV .location-content .list_items.list_item_1').append('<li>' + dallasCities[i] + '</li>');
        }
        for (var i = 0; i < tampaCities.length; i++) {
            jQuery('.tampa_IV .location-content .list_items.list_item_1').append('<li>' + tampaCities[i] + '</li>');
        }
        for (var i = 0; i < sanAntonioCities.length; i++) {
            jQuery('.san-antonio_IV .location-content .list_items.list_item_1').append('<li>' + sanAntonioCities[i] + '</li>');
        }
        for (var i = 0; i < atlantaCities.length; i++) {
            jQuery('.atlanta_IV .location-content .list_items.list_item_1').append('<li>' + atlantaCities[i] + '</li>');
        }
        
        jQuery('.list_items').each(function(){
            var mylist = jQuery(this);
            var listitems = mylist.children('li').get();
            listitems.sort(function(a, b) {
               return jQuery(a).text().toUpperCase().localeCompare(jQuery(b).text().toUpperCase());
            })
            jQuery.each(listitems, function(idx, itm) { mylist.append(itm); });
        });


        var totalItems = Math.ceil(jQuery('.list_items li').length / 6);
        if (totalItems < 4) totalItems = 4 ;
        jQuery('.location_IV .location-content .list_items').css('grid-template-rows','repeat('+totalItems+', auto)');


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