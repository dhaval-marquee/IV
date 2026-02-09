function getScrollbarWidth() {
	var div = jQuery('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
	jQuery('body').append(div);
	var w1 = jQuery('div', div).innerWidth();
	div.css('overflow-y', 'scroll');
	var w2 = jQuery('div', div).innerWidth();
	jQuery(div).remove();
	return (w1 - w2);
}

$.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function () {

	jQuery(window).on("resize", function () {

		var scrollWidth = getScrollbarWidth();
		var windowWidth = jQuery(window).width();
		windowWidthFull = windowWidth + scrollWidth;
	
	 
		if (windowWidthFull > 767) {
			$('#slide-thumbnails').slick({
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 1,
				arrows: true,
				prevArrow: '<span class="slick-prev"><img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663227429/macsales/Ministack%29STX_Product_Page_Test/slider-arrow.png" alt="Arrow Prev"></div>',
				nextArrow: '<span class="slick-next"><img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663227429/macsales/Ministack%29STX_Product_Page_Test/slider-arrow.png" alt="Arrow Next"></div>',
				responsive: [
					{
					breakpoint: 1025,
					settings: {
						slidesToShow: 3
					}
					},
					{
						breakpoint: 375,
						settings: {
						slidesToShow: 2
						}
					}
				]
			});
		} else {
			$('#slide-thumbnails').slick('unslick');

			setTimeout(() => {
				if($('#slide-thumbnails').hasClass('slick-initialized')) {
					$('#slide-thumbnails').slick('unslick');
				}
			}, 1500);
		}
	}).resize();
});