function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-product-finder')) {
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

        document.querySelector('.iv-product-finder #shopify-section-static-highlights-banners + .animated-modal').classList.add('fireGoal');
        document.querySelector('.iv-product-finder .footer-part input').classList.add('iv-finder-button');
        setTimeout(() => {
            trackingScript();
        }, 2000);

    }
}
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
            console.log('goal fired');
            // Add the following snippet to trigger this event
            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
    
            VWO.event("productFinderSection");
            window.removeEventListener("scroll", checkElement); // Remove event listener after execution
        }
    }
    // Attach scroll event listener
    window.addEventListener("scroll", checkElement);
    
    // Run check initially in case the element is already in view
    checkElement();
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
