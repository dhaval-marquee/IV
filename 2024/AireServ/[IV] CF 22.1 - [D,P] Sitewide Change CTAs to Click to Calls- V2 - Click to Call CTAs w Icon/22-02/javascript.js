var getButton = setInterval(() => {
	if(document.querySelectorAll('form .schedule-hero-btn').length > 0) {
		clearInterval(getButton);
		document.querySelector('form .schedule-hero-btn').setAttribute('value','Book an Appointment');
	}
}, 100);