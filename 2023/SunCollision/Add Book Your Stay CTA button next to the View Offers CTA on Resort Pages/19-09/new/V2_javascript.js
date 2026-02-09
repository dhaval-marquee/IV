function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('resort_iv')) {
        bodyEle.classList.add('resort_iv');

        var ctaInterval = setInterval(function() {
            var ctaElements = document.querySelectorAll('.resort_iv .intro .cta');

            if (ctaElements.length > 0) {
                clearInterval(ctaInterval);

                ctaElements.forEach(function(ctaElement) {
                    var parentElement = ctaElement.parentElement;
                    parentElement.classList.add('grid-x', 'align-center');
                    parentElement.style.columnGap = '15px';
                    parentElement.style.rowGap = '10px';
                });

                var bookCTA = document.querySelector('.resort_iv .intro .cta');
                bookCTA.insertAdjacentHTML('afterend', '<a class="cta orange-outline wide" href="#" data-toggle="booking">book your stay</a>');
            }
        }, 100);
    }
}

loadTestCode();