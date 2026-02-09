function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-form')) {
        document.querySelector('body').classList.add('iv-form');

        const formDiv = document.querySelector('.iv-form #contact .aos-init .container .row .exp-pseudo-grad-top-lg');
        if (formDiv) {
            formDiv.className = '';
            formDiv.classList.add('exp-pseudo-grad-top-lg', 'col-12', 'col-lg-5', 'form-container', 'exp-solid-bg--white', 'p-0', 'rounded', 'shadow', 'overflow-hidden');
        }
    }
}

const checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);