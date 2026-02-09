var getTitle = setInterval(() => {
	if(document.querySelectorAll('h1.ct-headline').length > 0) {
		clearInterval(getTitle);

		document.querySelector('header .ct-link-text').innerHTML = 'Request a Consultation <br class="d-none"> or Just Learn More'; 
		document.querySelector('h1.ct-headline').innerHTML = 'Request a Free Consultation <br> or Just Learn More'; 
		document.querySelector('h1.ct-headline').style.textAlign = 'center';
	}
}, 100);