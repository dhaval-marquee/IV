function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-Hero')) {
        document.querySelector('body').classList.add('iv-Hero');


        document.querySelector('.iv-Hero #mainTop h1').textContent = 'Insurance Eligibility Verification with Real-Time Accuracy';

        document.querySelector('.iv-Hero #mainTop h1 + p').insertAdjacentHTML('afterend',`
        <ul>
            <li>Streamline workflows by automating eligibility checks.</li>
            <li>Boost cash flow with faster, accurate claims submissions.</li>
            <li>Minimize revenue loss by resolving issues upfront.</li>
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