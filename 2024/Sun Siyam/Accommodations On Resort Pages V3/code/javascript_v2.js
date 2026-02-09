
function runCode() {
        
    $('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
    if (!$('body').hasClass('resort_iv')) {
        $('body').addClass('resort_iv');

        $('.slider__cta').length > 0 ? $('.slider__cta .experiences_cta').after('<button type="button" class="cta white-outline" id="scrollToAccommodations" style="margin-left: 5px;">View Accommodations</button>') : '';

        if ($('.resort_iv .intro .orange-solid').length > 0) {
            $('.resort_iv .intro .orange-solid').before('<a class="cta orange-solid" href="javascript:;" id="scrollToAccommodations">View Accommodations</a>');
        }

        var currentPage = window.location.href.split('?')[0].split('#')[0];
        var contentPage = currentPage + 'accommodation/';
        $('.resort_iv .experiences-slider__wrapper').after('<div class="accommodation_iv"><div class="intro_iv"></div><div class="rd_index_iv" id="rd_index_iv"></div></div>');
        $('.accommodation_iv .intro_iv').load(contentPage + ' .intro', function(response, status, xhr) {
            if (status == "success") {
                console.log('Title loaded');
            } else {
                console.error("Failed to load intro content.");
            }
        });
        $('.accommodation_iv .rd_index_iv').load(contentPage + ' .rd-index', function(response, status, xhr) {
            if (status == "success") {
                $('.rd-index .tabs-content .tabs-panel').wrapInner('<div class="slider_iv"></div>');
                clickEvent();
                $('.rd-index__item-wrap').each(function(){
                    var item = $(this);
                    var readMoreLink = 'https://www.sunsiyam.com'+item.find('.rd-index__item-cta .cta-wrapper a.cta.orange-outline').attr('href');
                    item.wrap('<div></div>');
                    var imgLink = item.find('.rd-index__item-thumbnail img').closest('a').attr('href');
                    item.find('.rd-index__item').before('<img src="'+imgLink+'">');
                    item.find('.rd-index__item-title').after('<div class="resortText"></div><div class="resortFeatures"></div>');
                    item.find('.resortText').load(readMoreLink + ' .detail-content__main p', function() {});
                    item.find('.resortFeatures').load(readMoreLink + ' .detail-content__sidebar', function() {});
                });
                $.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {
                        var countTabs = setInterval(() => {
                            if($('.slider_iv').length > 0 && ($('.show-for-medium .tabs-title').length == $('.slider_iv').length)) {
                                clearInterval(countTabs);
                                    $('.slider_iv').slick({
                                        autoplay: false,
                                        arrows: true,
                                        buttons: false,
                                        infinite: true,
                                        dots: false,
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                    });
                            }
                        }, 100);
                    });
            } else {
                console.error("Failed to load RD Index content.");
            }
        });
        function clickEvent() {
            $('.tabs-title a').each(function() {
                $(this).on('click', function(event) {
                    event.preventDefault();
                    var targetId = $(this).attr('data-tabs-target');
                    $('.tabs-title a').each(function() {
                        $(this).parent().removeClass('is-active');
                        $(this).attr('aria-selected', 'false').attr('tabindex', '-1');
                    });
                    $(this).parent().addClass('is-active');
                    $(this).attr('aria-selected', 'true').attr('tabindex', '0');
                    $('.tabs-panel').removeClass('is-active');
                    $('#' + targetId).addClass('is-active');
                    $('.slider_iv.slick-initialized').each(function() {
                        $(this).slick("unslick");
                    });
                    $('.slider_iv').each(function() {
                        $(this).slick({
                            autoplay: false,
                            arrows: true,
                            buttons: false,
                            infinite: true,
                            dots: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        });
                    });
                });
                var getID = $(this).attr('data-tabs-target');
                var itemCount = $('#' + getID + ' .rd-index__item-wrap').length;
                var countSpan = $('.tabs-title a[data-tabs-target="' + getID + '"] span');
                countSpan.text(' (' + itemCount + ')');
            });
        }

        $(document).on('click', '#scrollToAccommodations', function() {
            $('html, body').animate({
                scrollTop: $('#rd_index_iv').offset().top - $('header').outerHeight() - 50
            }, 1000);
        });
    }

}

var checkExist = setInterval(function() {
    if (typeof jQuery != 'undefined') {
        clearInterval(checkExist);
        runCode();
    }
}, 100);