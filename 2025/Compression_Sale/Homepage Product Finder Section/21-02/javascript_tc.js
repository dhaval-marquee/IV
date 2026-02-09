
const checkClassLength = setInterval(function() {
    if (document.querySelectorAll(".highlights-banners--section + .pxs-image-with-text-section").length > 0) {
        clearInterval(checkClassLength);

        document.querySelector(".highlights-banners--section + .pxs-image-with-text-section").classList.add("fireGoal");

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= 86
            );
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
}, 100);
