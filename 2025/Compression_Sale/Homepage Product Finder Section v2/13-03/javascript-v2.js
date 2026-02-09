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
    document.querySelectorAll(".step-box").forEach(stepBox => {
        // Create the new wrapper div
        let ivCollection = document.createElement("div");
        ivCollection.classList.add("iv-collection");

        // Select all .gps and .radio-box elements inside this step-box
        let elements = stepBox.querySelectorAll(".gps, .radio-box");

        // Move each selected element into the new wrapper div
        elements.forEach(element => {
            ivCollection.appendChild(element);
        });

        // Append the wrapper div back into the step-box
        stepBox.appendChild(ivCollection);
    });

    const firstBox = document.querySelector(".step-box");
    if (firstBox) {
        firstBox.classList.add("open");
    }

    document.querySelectorAll(".step-box h2").forEach(h2 => {
        h2.addEventListener("click", function() {
            const parent = this.parentElement;
            const isOpen = parent.classList.contains("open");

            document.querySelectorAll(".step-box").forEach(box => box.classList.remove("open"));

            if (!isOpen) {
                parent.classList.add("open");
            }
        });
    });

    // End - Step for finder

    setTimeout(() => {
        trackingScript();
    }, 2000);


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

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);