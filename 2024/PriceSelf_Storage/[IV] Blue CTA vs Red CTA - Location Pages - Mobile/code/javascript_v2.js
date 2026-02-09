function loadTestCodeV2() {
    if (!document.querySelector('body').classList.contains('img_iv')) {
        document.querySelector('body').classList.add('img_iv');

        document.querySelectorAll('.img_iv .pss-card-list__imagebox a img.lazy').forEach((img) => {
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
                img.setAttribute('src', dataSrc);
            }
        });
        document.querySelectorAll('.pss-card-list__contentbox > .pss-card-list__right-buttons-box .pss-button.red').forEach((button) => {
            button.classList.remove('red');
        });
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCodeV2();

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
