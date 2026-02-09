function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('home_hero_iv')) {
        bodyEle.classList.add('home_hero_iv');

        var getImage = setInterval(() => {
            if(document.querySelectorAll('.home_hero_iv .shoppable-image--section .shoppable-image__wrapper').length > 0) {
                clearInterval(getImage)
                document.querySelector('.home_hero_iv .shoppable-image--section .shoppable-image__wrapper').insertAdjacentHTML('beforeend', `<div class="shoppable-image__button">
                    <div class="shoppable-image__button-container">
                        <a class="button-primary pxu-lia-element mdc-ripple-surface mdc-ripple-upgraded" href="/collections/ev-chargers" style="--pxu-lia-inner-sequence: 1; animation-play-state: running;">Shop EV Chargers</a>
                        <a class="button-primary pxu-lia-element mdc-ripple-surface mdc-ripple-upgraded" href="/collections/ev-adapters" style="--pxu-lia-inner-sequence: 1; animation-play-state: running;">Shop EV Adapters</a>
                    </div>
                </div>`);
            }
        }, 100);
    }
}
loadTestCode();