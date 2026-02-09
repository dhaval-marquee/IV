var CityList = ['Phoenix','Tucson','Tempe','Scottsdale','Glendale','Mesa','Peoria','Chandler','Goodyear','Litchfield Park','Surprise','Gilbert','Ahwatukee','Flagstaff','Sedona','Buckeye','Avondale','Cave Creek','Queen Creek','Sun City','Paradise Valley','Sun City West','Chino Valley ','Anthem ','Fountain Hills','Carefree','Laveen','Prescott','Cottonwood','San Tan Valley','Casa Adobes','Maricopa','Casa Grande','Catalina Foothills','Marana','Oro Valley','Coolidge','Flowing Wells','The Garden District','Boca Raton','Palm Beach Gardens','Boynton Beach','Fort Lauderdale','Pompano Beach','West Palm Beach','Jupiter','Port St. Lucie','Fort Pierce','Vero Beach','Sebastian','Pembroke Pines','Sunrise','Hollywood','Miramar','Coral Springs','Plantation','Weston','Deerfield Beach','Davie','Tamarac','Coconut Creek','Miami','Miami Beach','Doral','Pinecrest','Key Biscayne','Aventura','Sunny Isles Beach','Tampa','Clearwater','St. Petersburg','Brandon','Riverview','Largo','Dunedin','Ocean Ridge','Lantana','Delray Beach','Highland Beach','Kings Point','Aberdeen','Bradenton','Palmetto','Apollo Beach','Oakland Park','Lake Worth'];

setTimeout(() => {
	jQuery('.hero-section .inside').css('display','block');
}, 3000);


jQuery.get('https://ipinfo.io', function (response) {
	// jQuery('#cityName').html(response.city);
	if(CityList.indexOf(response.city) > -1) {
		jQuery('.hero-section .inside').html('Fast and Easy Mobile IV therapy in the <span id="cityName" style="color: #fff">'+response.city+'</span> area');
	} else {
		jQuery('.hero-section .inside').html('Fast and Easy Mobile IV therapy when you need it, where you need it');
	}

	jQuery('.hero-section .inside').attr('style','color: #000;font-weight: bold;font-family: "Patua One",Helvetica,Arial,sans-serif;font-size: 28px;line-height: normal;letter-spacing: 1px;display: block');

}, 'jsonp');