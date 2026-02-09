function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('home_hero_iv')) {
        bodyEle.classList.add('home_hero_iv');

        var getCTA = setInterval(() => {
            if(document.querySelectorAll('.home_hero_iv .slider--has-video').length > 0) {
                clearInterval(getCTA)
                document.querySelector('.home_hero_iv .slider--has-video').insertAdjacentHTML('beforeend', `<div class="slider__cta">
                    <button type="button" class="cta white-outline">View Resorts</button>
                    <br />
                    <span class="slider__arrow-down"></span>
                </div>`);

                var spacingAtTop = 95;
                var btnScrollDown = document.querySelectorAll('.slider__cta .cta');

                btnScrollDown.forEach(function(cta) {
                    cta.addEventListener('click', function(e) {
                        e.preventDefault();
                        var resortsSliderWrapper = document.querySelector('.resorts-slider__wrapper');
                        var offsetTop = resortsSliderWrapper.offsetTop - spacingAtTop;

                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    });
                });

            }
        }, 100);
    }
}
loadTestCode();