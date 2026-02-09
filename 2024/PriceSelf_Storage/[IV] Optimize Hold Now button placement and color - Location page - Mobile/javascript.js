function observerForLoadingBlockDesktop() {
    // Select the target elements
    var target = document.querySelector('#MainContent_LocationRepeater, #locationsTabNavigation');

    // Ensure the target element exists
    if (!target) {
        console.error("Target element not found");
        return;
    }

    // MutationObserver configuration
    const config = {
        childList: true,
        characterData: true,
        subtree: true,
        attributes: true
    };

    let running = false;

    // Callback function to execute when mutations are observed
    const callback = function(mutationsList, observer) {
        if (running) return;

        for (let mutation of mutationsList) {
            if (mutation.type === 'childList' || mutation.type === 'characterData' || mutation.type === 'attributes') {
                console.log('mutation running');

                document.querySelectorAll('.pss-contentbox-terms').forEach(function(item) {
                    item.textContent = item.textContent.replace('By clicking Hold Now', 'By clicking Reserve Unit');
                });

                running = true;
                setTimeout(function() {
                    running = false;
                }, 500);

                break; // Exit the loop after processing the first relevant mutation
            }
        }
    };

    // Create an instance of MutationObserver with the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target element with the configured parameters
    observer.observe(target, config);
}

// Initialize the observer function
observerForLoadingBlockDesktop();