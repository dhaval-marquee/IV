function headerButton() {
    if (!$('body').hasClass('sticky_header_iv')) {
        $('body').addClass('sticky_header_iv');
        $('.avl-header__button').text('Get a Quick Quote').addClass('header-button-iv');
    }
}

function runCode() {
var checkCondition = setInterval(function () {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        headerButton();
    }
}, 100);
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    runCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over