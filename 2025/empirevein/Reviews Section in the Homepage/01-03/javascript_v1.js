function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-review')) {
        document.querySelector('body').classList.add('iv-review');

        const sliderSection = `<div class="iv-slider-sec fireGoal">
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

                    if (window.matchMedia("(min-width: 992px)").matches) {
                        document.querySelector('.dv-home-boxes').insertAdjacentHTML('afterend', sliderSection);
                    } else {
                        document.querySelector('.dv-home-slider-wrapper').insertAdjacentHTML('afterend', sliderSection)
                    }
                    trackingScript();
                }
            }
        }, 500);
    }
}

function trackingScript() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    let hasRun = false; // Flag to ensure it runs only once
    
    function checkElement() {
        const element = document.querySelector(".fireGoal");
        if (element && isElementInViewport(element) && !hasRun) {
            hasRun = true; // Set flag to true to prevent multiple executions
            // Add the following snippet to trigger this event
            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
    
            VWO.event("reviewCarouselInView");
            window.removeEventListener("scroll", checkElement); // Remove event listener after execution
        }
    }
    
    // Attach scroll event listener
    window.addEventListener("scroll", checkElement);
    
    // Run check initially in case the element is already in view
    checkElement();
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);