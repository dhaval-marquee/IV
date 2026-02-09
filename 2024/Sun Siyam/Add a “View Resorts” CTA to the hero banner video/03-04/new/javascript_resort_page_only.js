function loadTestCode() {
    if (!document.querySelector('body').classList.contains('hero_cta_iv')) {
        document.querySelector('body').classList.add('hero_cta_iv');

        var getCTA = setInterval(() => {
            if(document.querySelectorAll('.hero_cta_iv .slider--has-video').length > 0) {
                clearInterval(getCTA)
                document.querySelector('.hero_cta_iv .slider--has-video').insertAdjacentHTML('beforeend', `<div class="slider__cta">
                    <button type="button" class="cta white-outline resorts_cta" style="display: none">View Resorts</button>
                    <button type="button" class="cta white-outline experiences_cta">View Experiences</button>
                    <br />
                    <span class="slider__arrow-down"></span>
                </div>`);

                var spacingAtTop = 95;
                function scrollToWrapper(wrapperClass) {
                    return function(e) {
                        e.preventDefault();
                        var offsetTop = $(wrapperClass).first().offset().top - spacingAtTop;
                        $('html, body').animate({
                            scrollTop: offsetTop
                        }, 'smooth');
                    };
                }

                $('.slider__cta .resorts_cta').click(scrollToWrapper('#mainContent > .intro'));
                $('.slider__cta .experiences_cta').click(scrollToWrapper('.experiences-slider__wrapper'));

            }
        }, 100);
    }
}
loadTestCode();