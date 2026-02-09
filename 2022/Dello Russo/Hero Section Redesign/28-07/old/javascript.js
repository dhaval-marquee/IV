document.body.classList.add('iv_dello_home');

var appointmentHtml = '<a class="hero-appointment-link" href="/lasik-center/appointment/">Schedule Your Appointment Now</a>';
var rateHtml = '<div class="rated">'+
	'<div class="rated-title fusion-no-large-visibility"><b>Our Patients Love Us!</b></div>'+
	'<div class="rated-star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><b>4.9</b></div>'+
	'<div class="rated-text">based on 1,830 local reviews</div>'+
'</div>';

document.querySelector('.iv_dello_home .fusion-builder-row-2 .imageframe-1').classList.add('fusion-no-small-visibility');
document.querySelector('.iv_dello_home .fusion-builder-row-2 .fusion-row').insertAdjacentHTML('beforebegin',
'<div class="hero-block">'+
	'<div class="hero-wrap">'+
		'<h2 class="hero-title">Create a Clearer Future</h2>'+
		'<h4 class="hero-subtitle-desktop"><b>Save 20%</b> on Lasik services and free yourself from glasses and contacts once and for all.</h4>'+
		'<h4 class="hero-subtitle-desktop">Get an additional <b>$400 off</b> when you schedule today!</h4>'+
		'<h4 class="hero-subtitle-mobile">Save 20% on Lasik and get an additional $400 off when you schedule today!</h4>'+
		'<div class="hero-appointment fusion-no-small-visibility fusion-no-medium-visibility">'+ appointmentHtml + rateHtml +'</div>'+
	'</div>'+
'</div>'+
'<div class="as-seen-block fusion-no-small-visibility fusion-no-medium-visibility"></div>'+
'<div class="fusion-no-large-visibility pum-alignment-center">'+appointmentHtml+'</div>'+
'<div class="fusion-no-large-visibility">'+rateHtml+'</div>');
var asSeenBlock = document.querySelector('.iv_dello_home .as-seen-block');
asSeenBlock.appendChild(document.querySelector('.iv_dello_home .fusion-builder-row-3 .custom_h5'));
asSeenBlock.appendChild(document.querySelector('.iv_dello_home .fusion-builder-row-3 .as_Seen_div'));
var hideSection = document.querySelector('.iv_dello_home .fusion-builder-row-3');
hideSection.classList.add('fusion-no-large-visibility');
hideSection.classList.add('fusion-no-medium-visibility');
document.querySelector('.iv_dello_home .fusion-builder-row-4').classList.add('fusion-no-small-visibility');

setTimeout(function(){
	document.body.click();
}, 2000);