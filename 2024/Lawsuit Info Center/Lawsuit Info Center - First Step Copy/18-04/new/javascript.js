// For indicators
function changeText() {
    if(document.querySelectorAll(".leadforms-step-title-modal-template").length > 0) {
        document.querySelector(".leadforms-step-title-modal-template").innerHTML = document.querySelector(".leadforms-step-title-modal-template").innerHTML.replace('Were you or a loved one injured in a car accident? Before settling with insurance, see how much your claim is worth by answering 6 easy questions.', 'Were you or a loved one injured in a car accident?');

        
    }
}

// Common code
function observerForLoadingBlockDesktop() {
    // observer binding
    var target = document.querySelector('body');
    const config = {
        childList: true,
        characterData: true,
        subtree: true,
        attributes: true,
    };
    var running = false;
    const callback = function (mutationsList, observer) {
        for (let mutation of mutationsList) {
            if (running) return;

            // Put code here
            setTimeout(() => {
                changeText();
            }, 50);

            // code over

            running = true;
            setTimeout(function () {
                running = false;
            }, 100);
        }
    };
    const observer = new MutationObserver(callback);
    observer.observe(target, config);
    // End observer binding
}
observerForLoadingBlockDesktop();