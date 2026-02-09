function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('iv_home_hero')) {
        bodyEle.classList.add('iv_home_hero');

        document.querySelector('.iv_home_hero .m-bannerhome h1').textContent = 'You can’t manage risks you don’t see.';
        document.querySelector('.iv_home_hero .m-bannerhome p > span').textContent = 'With our TPRM platform, you’ll find your risk needle in your third-party haystack, so you can take action before it becomes a larger concern.';
        if(document.querySelectorAll('.iv_home_hero .m-bannerhome .content .transparent').length == 0) {
            document.querySelector('.iv_home_hero .m-bannerhome .content').insertAdjacentHTML('beforeend','<a href="/get-a-quote" class="btn-capsule transparent">Get a Quote</a>');
        }
    }
}

// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over