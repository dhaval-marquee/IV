function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-ContactInformation')) {
        document.querySelector('body').classList.add('iv-ContactInformation');

        document.querySelector('#spanLockDescription').innerHTML = document.querySelector('#spanLockDescription').innerHTML.replace("LOCK ", 'LOCK ($19.99 + Tax)');

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