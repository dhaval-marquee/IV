if (!$('body').hasClass('resort_iv')) {
    $('body').addClass('resort_iv');

    var currentPage = window.location.href.split('?')[0].split('#')[0];
    var contentPage = currentPage + 'accommodation/';

    $('.resort_iv .experiences-slider__wrapper').after('<div class="accommodation_iv"><div class="intro_iv"></div><div class="rd_index_iv"></div></div>');

    $('.accommodation_iv .intro_iv').load(contentPage + ' .intro', function(response, status, xhr) {
        if (status == "success") {
            console.log('content loaded');
        } else {
            console.error("Failed to load intro content.");
        }
    });

    $('.accommodation_iv .rd_index_iv').load(contentPage + ' .rd-index', function(response, status, xhr) {
        if (status == "success") {
            console.log('content loaded');
            clickEvent();
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
            });

            var getID = $(this).attr('data-tabs-target');
            var itemCount = $('#' + getID + ' .rd-index__item-wrap').length;

            var countSpan = $('.tabs-title a[data-tabs-target="' + getID + '"] span');
            countSpan.text(' (' + itemCount + ')');
        });
    }
}