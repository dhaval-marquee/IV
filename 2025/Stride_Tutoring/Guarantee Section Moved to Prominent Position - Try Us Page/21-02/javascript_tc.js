const sectionClass = [
    {
        keywords: ["See Why Parents and Students ", "Why Families "],
        titleClass: 'iv-review-title'
    }
];

sectionClass.forEach(({
    keywords,
    titleClass
    }) => {
        
    document.querySelectorAll('h2').forEach(h2 => {
        if (keywords.some(keyword => h2.textContent.trim().includes(keyword))) {
            const closestRow = h2.closest('.wpb_row');
            if (closestRow) {
                closestRow.classList.add(titleClass);
            }
        }
    });
});

const checkClassLength = setInterval(function() {
    if (document.querySelectorAll(".iv-review-title").length > 0) {
        clearInterval(checkClassLength);

        document.querySelector(".iv-review-title").classList.add("fireGoal");

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top <= 56
            );
        }
        function checkElement() {
            const element = document.querySelector(".fireGoal");
            if (element && isElementInViewport(element)) {
                console.log('goal fired');
                // Add the following snippet to trigger this event
                window.VWO = window.VWO || [];
                VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
        
                VWO.event("guaranteeSectionMoved");
                window.removeEventListener("scroll", checkElement); // Remove event listener after execution
            }
        }
        
        // Attach scroll event listener
        window.addEventListener("scroll", checkElement);
        
        // Run check initially in case the element is already in view
        checkElement();
    }
}, 100);