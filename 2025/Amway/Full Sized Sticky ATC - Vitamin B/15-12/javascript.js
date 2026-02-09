function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-stickyATC')) {
        document.querySelector('body').classList.add('iv-stickyATC');

        document.querySelector('.iv-stickyATC .amw-sticky-add-to-cart__info .amw-sticky-add-to-cart__price-wrapper').after(document.querySelector('.iv-stickyATC .amw-sticky-add-to-cart__wrapper .amw-sticky-add-to-cart__rating-wrapper'));
        document.querySelector('.iv-stickyATC .amw-sticky-add-to-cart__info').after(document.querySelector('.iv-stickyATC .amw-sticky-add-to-cart__actions'));
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 992px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 991.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over