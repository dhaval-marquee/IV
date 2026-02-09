function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-Hero')) {
        document.querySelector('body').classList.add('iv-Hero');


        document.querySelector('.iv-Hero #mainTop h1').textContent = 'Insurance Eligibility Verification with Real-Time Accuracy';

        document.querySelector('.iv-Hero #mainTop h1 + p').insertAdjacentHTML('afterend',`
        <ul>
            <li>Reduce claim denials with real-time insurance verification.</li>
            <li>Improve patient experience with upfront coverage details.</li>
            <li>Optimize operations by reducing manual insurance checks.</li>
        </ul>`);

    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 992px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 991.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over