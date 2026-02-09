const checkClassLength = setInterval(function() {
    if (document.querySelectorAll(".dv-home-boxes").length > 0) {
        clearInterval(checkClassLength);

        if(window.matchMedia("(min-width: 992px)").matches){
            document.querySelector(".dv-home-boxes").nextElementSibling.nextElementSibling.querySelector('div:first-child').classList.add("fireGoal");
        } else {
            document.querySelector(".dv-home-boxes").querySelector('div:nth-child(2)').classList.add("fireGoal");
        }


        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= 150
            );
        }

        function checkElement() {
            const element = document.querySelector(".fireGoal");
            if (element && isElementInViewport(element)) {
                console.log('goal fired');
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