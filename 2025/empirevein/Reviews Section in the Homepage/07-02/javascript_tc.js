const checkClassLength = setInterval(function() {
    if (document.querySelectorAll(".dv-home-boxes").length > 0) {
        clearInterval(checkClassLength);
        document.querySelector(".dv-home-boxes").nextElementSibling.querySelector('div:first-child').classList.add("fireGoal");

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
}, 100);