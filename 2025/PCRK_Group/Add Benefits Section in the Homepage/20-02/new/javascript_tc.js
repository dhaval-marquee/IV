document.querySelectorAll('h2').forEach(function(allH2) {
    if (allH2.innerText.trim() === "Who Is PCRK Group?") {
        console.log('Found the right h2');

        // Find the closest section or the next section sibling
        let section = allH2.closest('section') || allH2.nextElementSibling;

        if (section && section.tagName.toLowerCase() === 'section') {
            section.classList.add('aboutPCRKGroup');
        }

        const checkClassLength = setInterval(function() {
            if (document.querySelectorAll(".aboutPCRKGroup").length > 0) {
                clearInterval(checkClassLength);
        
                document.querySelector(".aboutPCRKGroup").classList.add("fireGoal");

                function isElementInViewport(el) {
                    const rect = el.getBoundingClientRect();
                    return (
                        rect.top <= 0
                    );
                }
                function checkElement() {
                    const element = document.querySelector(".fireGoal");
                    if (element && isElementInViewport(element)) {
                        console.log('goal fired');
                        // Add the following snippet to trigger this event
                        window.VWO = window.VWO || [];
                        VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
                
                        VWO.event("benefitsSectionInHomepage");
                        window.removeEventListener("scroll", checkElement); // Remove event listener after execution
                    }
                }
                
                // Attach scroll event listener
                window.addEventListener("scroll", checkElement);
                
                // Run check initially in case the element is already in view
                checkElement();
            }
        }, 100);
    }
});
