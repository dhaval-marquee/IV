$(document).ready(function () {
    function logoslider() {
        if ($(window).width() <= 767) {
            $('.logos').slick({
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1,
                cssEase: 'linear',
            });
        } else {
            if($(".logos.slick-initialized").length > 0){
                $('.logos').slick('destroy');
            }
        }
    }
    logoslider();

    var waitForFinalEvent = (function () {
		var timers = {};
		return function (callback, ms, uniqueId) {
			if (!uniqueId) {
				uniqueId = "Don't call this twice without a uniqueId";
			}
			if (timers[uniqueId]) {
				clearTimeout (timers[uniqueId]);
			}
			timers[uniqueId] = setTimeout(callback, ms);
		};
	})();
	
	$(window).resize(function () {
		waitForFinalEvent(function(){
			logoslider();
		}, 500);
	});

    $('.testimonial-slider').slick({
        dots: false,
        arrow: true,
        autoplay: true,
        autoplaySpeed: 8000,
        infinite: true,
        speed: 500,
        cssEase: 'linear'
    });

    $('#g1-preheader__switch').click(function () {
        $('#g1-preheader-widget-area').toggle('slow');
    });

    $('.iv-free-demo').click(function () {
        $('.iv-modal').addClass('open');
    });

    $(document).on('click', '.iv-modal-overlay', function () {
        $('.iv-modal').removeClass('open');
    })

    $('#g1-secondary-nav-switch').click(function () {
        $('#g1-secondary-nav-menu').toggleClass('active-dropdown');
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll <= 100) {
            $("#g1-back-to-top").hide();
        } else {
            $("#g1-back-to-top").show();
        };
    });

    $('#g1-back-to-top').click(function () {
        $('body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('#g1-preheader-bar #g1-preheader__switch')[1].remove();
    $("#g1-preheader-bar .iv-free-demo").prependTo("#g1-preheader-bar");

    $('.g1-nav-item__switch').click(function (e) {
        e.preventDefault();
        if ($(this).closest('li').hasClass('g1-nav-item--collapsed')) {
            $(this).closest('li').addClass('g1-nav-item--expanded').removeClass('g1-nav-item--collapsed');
        } else if (!$(this).closest('li').hasClass('g1-nav-item--collapsed')) {
            $(this).closest('li').addClass('g1-nav-item--collapsed').removeClass('g1-nav-item--expanded');
        }
    });

    $.getScript('//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', function(){
        $('.testimonial-slider').slick({
            dots: false,
            arrow: true,
            autoplay: true,
            autoplaySpeed: 8000,
            infinite: true,
            speed: 500,
            cssEase: 'linear'
        });
    });
    

    $('body.iv_home').css('visibility', 'visible');
});
