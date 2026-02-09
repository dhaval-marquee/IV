if (!$('body').hasClass('iv_mcc_home')) {
    $('body').addClass('iv_mcc_home');

    $('.iv_mcc_home .top-wrapper .top-banner-content h1').text('Custom Answering Solutions for Businesses of Every Size');
    $('.iv_mcc_home .top-wrapper .top-banner-content a').text('Get a 7-day Free Trial');
    $('.iv_mcc_home .top-wrapper .top-banner-content a').wrap('<div class="btn-wrap"></div>');
    $('.iv_mcc_home .top-wrapper .top-banner-content h3').remove();
    $('.iv_mcc_home .top-wrapper .top-banner-content .cf').remove();
    $('.iv_mcc_home .top-wrapper .top-banner-content h1').after('<ul class="hero-list">'+
        '<li>100% U.S. Based</li>'+
        '<li>Available 24/7</li>'+
        '<li>Custom Scripting</li>'+
        '</ul>');
    $('.iv_mcc_home .top-wrapper .top-banner-content ul').addClass('fadeInDown animated').css({ "animation-delay": "0.2s", "animation-name": "fadeInDown", "margin": "0" });

    $('.iv_mcc_home .two-column-section .circle').closest('.two-column-section').prev().before($('.iv_mcc_home .two-column-section .circle').closest('.two-column-section'));


    var Title = $('.iv_mcc_home .top-wrapper + .top-section > h2');
    var SubTitle = $('.iv_mcc_home .top-wrapper + .top-section > p');
    $('.iv_mcc_home #two-column-sections').eq(0).before('<br><div id="movedContent" class="text-center" style="padding-left: 15px;padding-right: 15px;"></div><br>');
    $('.iv_mcc_home #movedContent').append(Title)
    $('.iv_mcc_home #movedContent').append(SubTitle)
    
    function updateData() {
    	if ($(window).width() < 768) {
            var scroll = $(window).scrollTop();
            var headerhight = $('.header').height();
            var btnheight = $('.iv_mcc_home .top-wrapper .top-banner-content a').innerHeight();
            var btndistance = $(".iv_mcc_home .top-wrapper .top-banner-content a").offset().top
            if (scroll >= btndistance + btnheight - headerhight) {
                $('.iv_mcc_home .header > #inner-header .top-buttons a.orange-btn').show(300);
            } else {
                $('.iv_mcc_home .header > #inner-header .top-buttons a.orange-btn').hide(300);
            }
        };
    }

    var waitForFinalEvent = (function () {
        var timers = {};
        return function (callback, ms, uniqueId) {
            if (!uniqueId) {
                uniqueId = "Don't call this twice without a uniqueId";
            };
            if (timers[uniqueId]) {
                clearTimeout(timers[uniqueId]);
            };
            timers[uniqueId] = setTimeout(callback, ms);
        };
    })();

    $(window).resize(function () {
        waitForFinalEvent(function () {
            updateData();
        }, 500);
    });
    $(window).on('scroll', function () {
        updateData();
    });
    
    $('body.iv_mcc_home').css('visibility', 'visible');
};