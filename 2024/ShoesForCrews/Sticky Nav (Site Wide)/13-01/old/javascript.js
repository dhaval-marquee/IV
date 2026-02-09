var pageUrl = [
	'https://www.shoesforcrews.com/checkout'
];
function loadTestCode() {
	var page = window.location.href.split('?')[0].split('#')[0];
	if(pageUrl.indexOf(page) > -1) {
		document.querySelector('body').classList.add('checkout_iv');
	} else {
		document.querySelector('body').classList.remove('checkout_iv');
	}
	window.addEventListener('scroll', function() {
		var header = document.querySelector('header[class*=Header_header]');
		if (window.scrollY >= 50) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	});	
}
// Set Initial URL
var initialURL = window.location.href;
window.addEventListener('click', function(e){
	if(initialURL !== window.location.href){
		initialURL = window.location.href;
		loadTestCode();
	}
});
window.addEventListener('popstate', loadTestCode);
loadTestCode();
