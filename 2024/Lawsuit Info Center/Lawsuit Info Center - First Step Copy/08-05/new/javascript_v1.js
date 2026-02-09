function changeText() {
    var modalTemplate = document.querySelector(".leadforms-step-title-modal-template");
    if (modalTemplate && document.querySelectorAll('.IVstep1').length == 0) {
        var originalText = modalTemplate.innerHTML;
        var updatedText = originalText.replace('Were you or a loved one injured in a car accident? Before settling with insurance, see how much your claim is worth by answering 6 easy questions.', 'Were you or a loved one injured in a car accident?');
        modalTemplate.innerHTML = updatedText;
        if (originalText !== updatedText) {
            modalTemplate.parentNode.parentNode.classList.add('IVstep1');
        } else {
            document.querySelector('.IVstep1')?.classList.remove('IVstep1');
        }
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
