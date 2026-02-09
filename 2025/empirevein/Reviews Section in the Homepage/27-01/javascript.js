function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-review')) {
        document.querySelector('body').classList.add('iv-review');


        const script = document.createElement('script');

        script.src = '<script src="https://static.elfsight.com/platform/platform.js" async></script>';

        script.type = 'text/javascript';

        document.head.appendChild(script)

        const sliderSection = `<div class="iv-slider-sec">
            <div class="iv-container container">
                <div class="iv-slider-heading">
                    <h2 class="text-center">What Our Patients Are Saying</h2>
                    <div class="elfsight-app-b239c9d1-1966-487c-88f1-8c90386bfeb7 iv-slider" data-elfsight-app-lazy></div>
                </div>        
            </div>
        </div>`;

        const homebox = setInterval(() => {
            if (document.querySelector('.dv-home-boxes') && document.querySelector('.dv-home-slider-wrapper')) {
                if (!document.querySelector('.iv-slider-sec')) {
                    clearInterval(homebox)
                    document.querySelector('.dv-home-slider-wrapper').insertAdjacentHTML('afterend', sliderSection)
                    document.querySelector('.dv-home-boxes').insertAdjacentHTML('afterend', sliderSection)
                }
            }
        }, 500);
    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);