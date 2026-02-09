function observerElm(target, callbackFn) {
    var config = {
        childList: true,
        attributes: true,
        subtree: true,
    };
    var observer = new MutationObserver(function(mutationsList, observer) {
        callbackFn(mutationsList, observer);
    });
    observer.observe(target, config);
}

function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-check-availability')) {
        document.querySelector('body').classList.add('iv-check-availability');

        function updateBookSessionButtons() {
            const imgElements = document.querySelectorAll('.iv-check-availability section div a img');

            imgElements.forEach(function(img) {
                const closestSection = img.closest('section');
                if (closestSection && !closestSection.classList.contains('iv-tutor-box-section')) {
                    closestSection.classList.add('iv-tutor-box-section');
                }
            });
            const bookSessionLinks = document.querySelectorAll('.iv-tutor-box-section div.border-transparent.border div > a');

            bookSessionLinks.forEach((link) => {
                if (link.textContent.trim() === 'Book a Session') {
                    link.textContent = 'Check Availability';
                }
            });
        }

        const targetElement = document.querySelector('body');
        observerElm(targetElement, function(mutationsList, observer) {
            updateBookSessionButtons();
        });

        updateBookSessionButtons();
    }
}

const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        loadTestCode();
        clearInterval(checkCondition);
    }
}, 2000);