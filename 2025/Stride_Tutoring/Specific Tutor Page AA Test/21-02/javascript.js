document.addEventListener("DOMContentLoaded", () => {
    const buttonText = "Add and Checkout";
    const buttonSelector = "section button[type='submit']";
    let fired = false;

    const observer = new MutationObserver(() => {
        const button = [...document.querySelectorAll(buttonSelector)]
            .find(btn => btn.textContent.trim() === buttonText && !btn.disabled);
        
        if (button && !fired) {
            fired = true;
            console.log("Button enabled. Executing code...");
            // Add the following snippet to trigger this event
            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};

            VWO.event("tutorPageButtonVisible");
            observer.disconnect(); // Stop observing once fired
        }
    });

    observer.observe(document.body, { childList: true, subtree: true, attributes: true });
});