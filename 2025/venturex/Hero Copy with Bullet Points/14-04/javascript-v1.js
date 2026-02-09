function loadTestCode() {
    if (!jQuery('body').hasClass('heroBullet-iv')) {
        jQuery('body').addClass('heroBullet-iv');


        document.querySelector('.heroBullet-iv section.oxy-video-background h1').textContent = "Modern Coworking Spaces With No Long-Term Commitment";
        document.querySelectorAll('body h2#headline-7-19 + div + div > div > div')[0].innerHTML = document.querySelectorAll('body h2#headline-7-19 + div + div > div > div')[0].innerHTML.replace('location:', ' location:');

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
