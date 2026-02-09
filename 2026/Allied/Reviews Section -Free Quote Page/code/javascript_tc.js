function reviewIV() {
    if (!jQuery('body').hasClass('review_iv')) {
        jQuery('body').addClass('review_iv');

        jQuery('footer.main-footer').addClass('fireGoal');

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 200
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

                VWO.event("reviewsSectionViewport");
                window.removeEventListener("scroll", checkElement); // Remove event listener after execution
            }
        }

        // Attach scroll event listener
        window.addEventListener("scroll", checkElement);
        // Run check initially in case the element is already in view
        checkElement();
    }
}

reviewIV();