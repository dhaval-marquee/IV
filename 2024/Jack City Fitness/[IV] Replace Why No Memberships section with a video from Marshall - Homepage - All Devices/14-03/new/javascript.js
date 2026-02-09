var getTitle = setInterval(() => {
	if(typeof jQuery !='undefined' && $('#section-2').length > 0) {
		clearInterval(getTitle);
		$('#section-2').prev().removeClass('purple-bg');
		$('#section-2').prev().find('h3').parent().removeAttr('style').html('<iframe class="video_iv" src="https://www.youtube.com/embed/Dg49_AtZUiU" frameborder="0" allowfullscreen="allowfullscreen"></iframe>');
	}
}, 100);