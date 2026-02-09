setTimeout(() => {
	jQuery('.hero-section .inside').css('display','block');
}, 3000);


jQuery.get('https://ipinfo.io', function (response) {

	jQuery('.hero-section .inside').html('Fast and Easy Mobile IV therapy when you need it, where you need it');

	if(response && response.region != undefined) {
		jQuery('.hero-section .inside').html('Fast and Easy Mobile IV therapy in the <span id="cityName" style="color: #fff">'+response.region+'</span> area');
	}
	

	jQuery('.hero-section .inside').attr('style','color: #000;font-weight: bold;font-family: "Patua One",Helvetica,Arial,sans-serif;font-size: 28px;line-height: normal;letter-spacing: 1px;display: block');

}, 'jsonp');