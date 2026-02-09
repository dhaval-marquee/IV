function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-review')) {
        document.querySelector('body').classList.add('iv-review');

        const sliderSection = `<div class="iv-slider-sec">
            <div class="iv-container container text-center">
                <h2 class="h1 mb-4 mb-lg-5">What Our Patients Are Saying</h2>
                <div class="elfsight-app-b239c9d1-1966-487c-88f1-8c90386bfeb7 iv-slider text-start" data-elfsight-app-lazy></div>
                <div class="d-none d-md-block">
                    <a href="/book-online/" class="btn btn-primary mt-4 mt-lg-5 book-free-btn">Book a Free Consult or Just Learn More</a>
                </div>
                <div class="d-md-none">
                    <a href="/book-online/" class="btn btn-primary mt-4 mt-lg-5 book-free-btn">Book a Free Consult</a>
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