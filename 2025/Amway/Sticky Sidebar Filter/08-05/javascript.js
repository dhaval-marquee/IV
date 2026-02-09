function loadTestCode() {
    if (!$('body').hasClass('iv-sticky-filter')) {
        $('body').addClass('iv-sticky-filter');

        $('.amw-accordion__header-block').append('<p class="amw-text--small mb-0 mt-2">Click the <span class="icon-plus"></span> icon to expand the filter</p>');

        var $pagination = $('.amw-page-plp__pagination-wrapper-top');
        var originalOffsetTop = 0;

        function updatePaginationTop() {
            var headerHeight = $('.amw-header__wrapper').outerHeight();
            document.documentElement.style.setProperty('--sticky-header-height', headerHeight + 'px');
        }

        function handleStickyPagination() {
            var headerHeight = $('.amw-header__wrapper').outerHeight();
            var scrollTop = $(window).scrollTop();

            if (scrollTop >= originalOffsetTop - headerHeight) {
                $pagination.addClass('iv-amw-page-plp__pagination-wrapper-top--sticky');
                $('body').addClass('iv-has-sticky-pagination');
            } else {
                $pagination.removeClass('iv-amw-page-plp__pagination-wrapper-top--sticky');
                $('body').removeClass('iv-has-sticky-pagination');
            }
        }

        $(document).ready(function () {
            originalOffsetTop = $pagination.offset().top;
            updatePaginationTop();
            handleStickyPagination();

            $(window).on('scroll resize', function () {
                updatePaginationTop();
                handleStickyPagination();
            });
        });
    }
}

var checkCondition = setInterval(function () {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);