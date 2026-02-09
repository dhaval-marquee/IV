function loadTestCode() {
    if (!document.querySelector('body').classList.contains('stickyBottom_iv')) {
        document.querySelector('body').classList.add('stickyBottom_iv');

        document.querySelector('body').insertAdjacentHTML('beforeend',`<div class="stickyBottomBar" id="scrollDown">
    <div class="col-lg-3 col-12" data-sticky="btn">
        <a href="javascript:;" class="btn btn-exp-outline-white">Click Here to Learn More About Our Services</a>
    </div>
</div>`);

        jQuery(document).on('click', '#scrollDown', function(e) {
            e.preventDefault();
            jQuery('html, body').animate({
                scrollTop: jQuery('#contact').offset().top - 60
            }, 250);
        });
        
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