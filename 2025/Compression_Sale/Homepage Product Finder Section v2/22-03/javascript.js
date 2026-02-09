function loadTestCode() {
    // console.log(!document.querySelector('body').classList.contains('iv-product-finder'),'---------------->')
    // if (!document.querySelector('body').classList.contains('iv-product-finder')) {
    document.querySelector('body').classList.add('iv-product-finder');
    document.querySelectorAll('.iv-product-finder .html--section .add-black h2 span').forEach(function(text) {
        if (text.innerText.trim() === 'BROWSE OUR CLEARANCE SECTION AND SEE WHAT\'S ON SALE!') {
            text.closest('section').style.display = 'none';
        }
    });
    const productFinder = document.querySelector('.iv-product-finder #productfinder');
    const highlightSection = document.querySelector('.iv-product-finder .highlights-banners--section');

    if (productFinder && highlightSection) {
        productFinder.style.display = 'block';
        highlightSection.after(productFinder);
    }
    if (document.querySelector('.iv-product-finder #shopify-section-static-highlights-banners + .animated-modal')) {
        document.querySelector('.iv-product-finder #shopify-section-static-highlights-banners + .animated-modal').classList.add('fireGoal');
    }
    if (document.querySelector('.iv-product-finder .footer-part input')) {
        document.querySelector('.iv-product-finder .footer-part input').classList.add('iv-finder-button');
    }
    

    // Step for finder
    const ivProgresBar = `<div class="progress-container">
                            <div class="progress-line"></div>
                            <div class="progress-indicator" id="progressIndicator"></div>

                            <div class="step-wrapper">
                                <div class="step active" data-step="1"></div>
                                <span class="step-label">GENDER</span>
                            </div>
                            <div class="step-wrapper">
                                <div class="step" data-step="2"></div>
                                <span class="step-label">COMPRESSION</span>
                            </div>
                            <div class="step-wrapper">
                                <div class="step" data-step="3"></div>
                                <span class="step-label">STYLE</span>
                            </div>
                            <div class="step-wrapper">
                                <div class="step" data-step="4"></div>
                                <span class="step-label">TYPE</span>
                            </div>
                        </div>`;

    const ivButtons = `<a href="javascript:;" class="iv-back iv-button">BACK</a>
                            <a href="javascript:;" class="iv-next iv-button">NEXT</a>
                            <a href="javascript:void(0)" class="iv-submit iv-button">FIND PRODUCTS</a>`;
    const checkFooterPart = setInterval(() => {
        if (document.querySelector('.footer-part') && document.querySelector('.holder')) {
            clearInterval(checkFooterPart);
            document.querySelector('.holder').insertAdjacentHTML('afterbegin', ivProgresBar)
            document.querySelector('.footer-part').insertAdjacentHTML('beforeend', ivButtons);

            const steps = document.querySelectorAll('.step-box');
            const progressSteps = document.querySelectorAll('.step');
            const progressIndicator = document.getElementById('progressIndicator');
            const nextBtn = document.querySelector('.iv-next');
            const backBtn = document.querySelector('.iv-back');
            const submitBtn = document.querySelector('.iv-submit');

            let currentStep = 0;

            function updateSteps() {
                steps.forEach((step, index) => {
                    step.classList.toggle('active', index === currentStep);
                });

                progressSteps.forEach((step, index) => {
                    step.classList.toggle('active', index <= currentStep);
                });

                // Update progress bar width
                const progressWidth = (currentStep / (steps.length - 1)) * 100;
                progressIndicator.style.width = `${progressWidth}%`;

                backBtn.style.display = currentStep > 0 ? 'inline-block' : 'none';
                nextBtn.style.display = currentStep < steps.length - 1 ? 'inline-block' : 'none';
                submitBtn.style.display = currentStep === steps.length - 1 ? 'inline-block' : 'none';
            }

            nextBtn.addEventListener('click', () => {
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    updateSteps();
                }
            });

            backBtn.addEventListener('click', () => {
                if (currentStep > 0) {
                    currentStep--;
                    updateSteps();
                }
            });

            submitBtn.addEventListener('click', () => {
                if (document.querySelector('.iv-product-finder .iv-finder-button')) {
                    document.querySelector('.iv-product-finder .iv-finder-button').click();
                }
            })
            updateSteps();
            // End - Step for finder
        }
    }, 500);

    var highlightsBanners = document.querySelector("#shopify-section-static-highlights-banners");

    if (highlightsBanners && productFinder) {
        productFinder.parentNode.insertBefore(highlightsBanners, productFinder.nextSibling);
    }

    setTimeout(() => {
        trackingScript();
    }, 2000);

    let sliderRight = document.querySelector(".slider-right");
    let richTextSection = document.querySelector(".rich-text--section");

    if (sliderRight && richTextSection) {
        richTextSection.parentNode.insertBefore(sliderRight, richTextSection);
    }

    var waitForFinder = setInterval(() => {
        let productFinderPopup = document.querySelector('.videoEnable .video-content-wrapper a[data-src="#productfinder"]');
        if (productFinderPopup) {
            clearInterval(waitForFinder);
            productFinderPopup.removeAttribute("data-src");
            productFinderPopup.removeAttribute("data-fancybox");
            productFinderPopup.removeAttribute("data-animation-duration");
        }
    }, 300);

    let button = document.querySelector('.videoEnable .video-content-wrapper .sonar-emitter a');
    let targetSection = document.querySelector('.promo-form');

    if (button && targetSection) {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    }

    function setVideoMinHeight() {
        const videoWrapper = document.querySelector('.video-content-wrapper .container-fluid');
        const videoElement = document.querySelector('.iv-product-finder .slider-content .videoEnable video');
        if (videoWrapper && videoElement) {
            let height = videoWrapper.clientHeight + 60;
            videoElement.style.minHeight = height + 'px';
            let maxHeight = videoWrapper.clientHeight + 60;
            videoElement.style.maxHeight = maxHeight + 'px';
        }
    }
    
    setVideoMinHeight();
    window.addEventListener('resize', setVideoMinHeight);

}
// }

function trackingScript() {
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        let threshold;
        if (window.innerWidth > 1024) {
            threshold = 86;
        } else {
            threshold = 0;
        }
        return rect.top <= threshold;
    }

    function checkElement() {
        const element = document.querySelector(".fireGoal");
        if (element && isElementInViewport(element)) {

            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function() {
                VWO.push(["event"].concat([].slice.call(arguments)))
            };

            VWO.event("productFinderSection");
            window.removeEventListener("scroll", checkElement);
        }
    }
    window.addEventListener("scroll", checkElement);
    checkElement();
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    var checkCondition = setInterval(function() {
        if (document.querySelectorAll('body').length > 0) {
            clearInterval(checkCondition);
            loadTestCode();
        }
    }, 500);

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over