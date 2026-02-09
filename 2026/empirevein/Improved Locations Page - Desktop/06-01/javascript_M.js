function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-locationsPage')) {
        document.querySelector('body').classList.add('iv-locationsPage');
        // Put your test code here

        // Update header links safely
        var navLink = document.querySelector('header#masthead .navaction-tel + .bookfree-link > .nav-link');
        if (navLink) {
            navLink.innerHTML = 'Find a Location';
            navLink.setAttribute('href','https://empirevein.com/en/locations/');
        }

        var freeLink = document.querySelector('#bootscore-navbar li.bookfree-link a');
        if (freeLink) {
            freeLink.innerHTML = 'Get a FREE Consult or Learn More';
        }

        document.querySelectorAll('.iv-locationsPage #maincontainer ul.locations_list li .__btn a.btn-screen')
        .forEach(function(btn) {
            btn.insertAdjacentHTML(
                'afterend',
                '<a href="https://empirevein.com/en/book-online/" class="btn btn-sm btn-LearnMore">Learn More</a>'
            );
        });


        // Move phone link before "Book Free" link safely
        var bookFreeLink = document.querySelectorAll('.iv-locationsPage header .bookfree-link > a')[0];
        var phoneLink = document.querySelector('header .navaction-tel > a');
        if (bookFreeLink && phoneLink) {
            bookFreeLink.insertAdjacentElement('beforebegin', phoneLink);
        }

    }
}

function runCode() {   
    var checkCondition = setInterval(function() {
        if (document.querySelectorAll('header#masthead #nav-main').length > 0) {
            clearInterval(checkCondition);
            loadTestCode();
        }
    }, 100);
}


// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    runCode();

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
