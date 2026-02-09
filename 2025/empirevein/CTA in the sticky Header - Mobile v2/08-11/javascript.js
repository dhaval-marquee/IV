function loadTestCode() {
    if (!document.querySelector('body').classList.contains('stickyHeader_iv')) {
        document.querySelector('body').classList.add('stickyHeader_iv');
        // Put your test code here
        // document.querySelector('header#masthead .navaction-tel + .bookfree-link > .nav-link').innerHTML = 'Book a Free Consult';
        // document.querySelector('#bootscore-navbar li.bookfree-link a')?.innerHTML = 'Get a FREE Consult or Learn More';

        // document.querySelectorAll('.stickyHeader_iv header .bookfree-link > a')[0].insertAdjacentElement('beforebegin', document.querySelector('header .navaction-tel > a'));


        // Update header links safely
        var navLink = document.querySelector('header#masthead .navaction-tel + .bookfree-link > .nav-link');
        if (navLink) {
            navLink.innerHTML = 'Book a Free Consult';
        }

        var freeLink = document.querySelector('#bootscore-navbar li.bookfree-link a');
        if (freeLink) {
            freeLink.innerHTML = 'Get a FREE Consult or Learn More';
        }

        // Move phone link before "Book Free" link safely
        var bookFreeLink = document.querySelectorAll('.stickyHeader_iv header .bookfree-link > a')[0];
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