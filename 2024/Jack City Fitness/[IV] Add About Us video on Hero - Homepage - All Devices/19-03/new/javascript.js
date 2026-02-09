var getTitle = setInterval(() => {
	if(typeof jQuery !='undefined' && $('.home-page > section:first-child > .inner .fourteen-hundred').length > 0) {
		clearInterval(getTitle);
		$('.home-page > section:first-child > .inner .fourteen-hundred').wrapInner('<div class="hero_left"></div>');
		$('.hero_left').after('<div class="hero_right"></div>');
		$('.hero_right').append('<iframe src="https://www.youtube.com/embed/Dg49_AtZUiU" frameborder="0" allowfullscreen="allowfullscreen"></iframe>');
	}
}, 100);