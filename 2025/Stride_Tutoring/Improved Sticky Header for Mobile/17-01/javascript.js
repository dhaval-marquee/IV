function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-try-us')) {
        document.querySelector('body').classList.add('iv-try-us');

        const targetElement = document.querySelector('.iv-try-us #top .col.span_3');
        if (targetElement) {
            const newDiv = document.createElement('div');
            newDiv.className = 'nectar-mobile-only';

            const newLink = document.createElement('a');
            newLink.href = 'https://book.tutoring.k12.com/?_gl=1*18ra53b*_gcl_au*NTU3MjEyMTA2LjE3MzY0MTM1ODM.*_ga*MTQ1OTcwODI1OS4xNzM2NDEzNTg0*_ga_1ME1S0PRBE*MTczNjkzNTEzNS43LjEuMTczNjk0NDUxNC41OS4wLjA';
            newLink.className = 'get-started-button';
            newLink.textContent = 'Get Started';

            newDiv.appendChild(newLink);

            targetElement.parentNode.insertBefore(newDiv, targetElement);
        }
    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);