function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-internet')) {
        document.querySelector('body').classList.add('iv-internet');

        var pFusionText = document.querySelector('.fusion-container-anchor .fusion-text p');
        if(window.location.href.split('?')[0].split('#')[0] == "https://clearcaptions.com/lp-google-blue/") {
            var dotTag = document.createElement('span');
            dotTag.textContent = '.';
            pFusionText.appendChild(dotTag);
        }
        var strongTag = document.createElement('strong');
        strongTag.textContent = ' Internet is required.';
        pFusionText.appendChild(strongTag);

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);