function loadTestCode() {
    if (!document.body.classList.contains('bulletPoints_iv')) {
        document.body.classList.add('bulletPoints_iv');

        // Review Script
        const script = document.createElement('script');
        script.src = "https://amplify.review-alerts.com/widget-init.js";
        script.type = "text/javascript";
        document.body.appendChild(script);

        // Update #hero-section-left content
        const heroSectionLeft = document.querySelector('#hero-section-left .section-background');
        if (heroSectionLeft) {
            heroSectionLeft.innerHTML = `
                <h1>Your Home, Spotless and Stress-Free – Guaranteed!</h1>
                <ul>
                    <li>Eco-Friendly Products Safe for Kids and Pets</li>
                    <li>Thorough 22-Step Cleaning Process for a Deep Clean Every&nbsp;Time</li>
                    <li>Flexible Scheduling with a 100% Satisfaction Guarantee</li>
                </ul>
                <div class="hero-review">
                    <div class="amplify-widget" data-token="MTQ2MzM6aXYtazFaakVxRGFSdk53YTUxZUdXNmNBX2lV" data-widget-id="14633" data-widget-type="star_snapshot"></div>
                </div>
                <a id="hero-quote" data-toggle="modal" class="button tmiglobal-franchise-getAQuote1data-target reformatted" data-target="#quoteModal">Get a quote</a>
            `;
        }

        // Update #hero-section-right content
        const heroSectionRight = document.querySelector('#hero-section-right');
        if (heroSectionRight) {
            heroSectionRight.innerHTML = `
                <h1 class="iv-hero-title">See Why Our Customers Love Us!</h1>
                <div class="amplify-widget" data-token="MTQ2MzQ6aXYtazFaakVxRGFSdk53YTUxZUdXNmNBX2lV" data-widget-id="14634" data-widget-type="teaser"></div>
            `;
        }
    }
}

function runCode() {
    const checkCondition = setInterval(() => {
        // Wait for the elements
        if (typeof window.jQuery !== 'undefined' && document.querySelector('#hero-section-left .section-background') && document.querySelector('#hero-section-right')) {
            clearInterval(checkCondition);
            loadTestCode();
        }
    }, 500);
}

// Load code just for mobile
if (window.matchMedia("(max-width: 767.98px)").matches) {
    runCode();

    window.addEventListener('resize', function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function () {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}