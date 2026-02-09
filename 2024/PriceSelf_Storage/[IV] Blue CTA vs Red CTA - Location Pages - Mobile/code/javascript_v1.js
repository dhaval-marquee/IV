function loadTestCode() {
    if (!document.querySelector('body').classList.contains('img_iv')) {
        document.querySelector('body').classList.add('img_iv');

        document.querySelectorAll('.img_iv .pss-card-list__imagebox a img.lazy').forEach((img) => {
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
                img.setAttribute('src', dataSrc);
            }
        });
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

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
