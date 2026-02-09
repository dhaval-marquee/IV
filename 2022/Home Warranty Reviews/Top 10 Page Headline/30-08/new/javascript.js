document.querySelector('h1').style.display = 'none';

var jqueryInterval = setInterval(function () {
    if (typeof $ != 'undefined') {
		clearInterval(jqueryInterval);

		$('body h1').html('The Best Home Warranty Companies In <span id="country">Your Area</span> For 2022');

		$.get('https://ipinfo.io', function (response) {
		    $('#country').html(response.region);
		}, 'jsonp');

		setTimeout(() => {
			document.querySelector('h1').style.display = 'block';
		}, 500);
    }
}, 100);