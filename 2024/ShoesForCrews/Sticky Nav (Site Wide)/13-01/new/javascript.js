function loadTestCode() {
	window.addEventListener('scroll', function() {
		var header = document.querySelector('header[class*=Header_header]');
		if (window.scrollY >= 50) {
			header.classList.add('sticky');
		} else {
			header.classList.remove('sticky');
		}
	});	
}

loadTestCode();