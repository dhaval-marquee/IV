function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-ContactInformation')) {
        document.querySelector('body').classList.add('iv-ContactInformation');

        document.querySelector('#MainContent_upRentalData > div').insertAdjacentHTML('afterend',`<div class="rentalButton blue-button">
            Click Here To Complete Your Rental
        </div>`);

        document.querySelector('#spanLockDescription').innerHTML = document.querySelector('#spanLockDescription').innerHTML.replace("LOCK ", 'LOCK ($19.99 + Tax) ');

        // scroll to the top of the page when the sticky footer is clicked
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("blue-button")) {
                e.preventDefault();
                
                const formContainer = document.querySelector("#MainContent_ContactInformationControl_divAddressContactInfo");
                if (formContainer) {
                    const offset = formContainer.getBoundingClientRect().top + window.pageYOffset - 20;
                    window.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over