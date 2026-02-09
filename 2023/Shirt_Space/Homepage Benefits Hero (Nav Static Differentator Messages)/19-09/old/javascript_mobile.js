function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('header_iv')) {
        bodyEle.classList.add('header_iv');

        var header = document.querySelector('.header_iv #master > header');
        window.addEventListener('scroll', function() {
            if (window.scrollY >= 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
}

if (window.matchMedia("(max-width: 799.98px)").matches) {
    loadTestCode();
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 800px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 799.98px)").matches) {
            location.reload();
        }
    }, true);
}