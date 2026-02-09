function runCode() {
    $('.amw-gallery-carousel .slick-initialized').slick('unslick');
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