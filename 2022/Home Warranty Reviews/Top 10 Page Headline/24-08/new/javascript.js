document.querySelector('h1').style.display = 'none';

// DOM: Create the script element
var jsElm = document.createElement("script");
// set the type attribute
jsElm.type = "application/javascript";
// make the script element load file
jsElm.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
// finally insert the element to the body element in order to load the script
document.body.appendChild(jsElm);

var jqueryInterval = setInterval(function () {
    if (typeof $ != 'undefined') {
		clearInterval(jqueryInterval);

		if ($('body h1').length > 0 && $('#country').length == 0) {
			$('.top_10_block h1').html(function() {
			    return $(this).html().replace('For', 'In <span id="country">Your Area</span> For');
			});
		}
		
		$.get('https://ipinfo.io', function (response) {
		    $('#country').html(response.region);
		}, 'jsonp');

		setTimeout(() => {
			document.querySelector('h1').style.display = 'block';
		}, 500);
    }
}, 100);