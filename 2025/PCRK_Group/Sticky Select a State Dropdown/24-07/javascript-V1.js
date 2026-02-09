function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-select')) {
        document.querySelector('body').classList.add('iv-sticky-select');

        const stateSelector = document.querySelector('#state-selector');

        if (stateSelector) {
            const wrapperDiv = document.createElement('div');
            wrapperDiv.className = 'iv-sticky-top-section'

            const labelSpan = document.createElement('span');
            labelSpan.textContent = 'Select this state';
            labelSpan.style.display = 'block';

            stateSelector.parentNode.insertBefore(wrapperDiv, stateSelector);

            wrapperDiv.appendChild(labelSpan);
            wrapperDiv.appendChild(stateSelector);
            stateSelector.closest('section').classList.add('iv-inner-box')
        }
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);