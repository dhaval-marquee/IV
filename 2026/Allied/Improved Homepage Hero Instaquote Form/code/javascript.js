function heroText() {
    if (!jQuery('body').hasClass('iv-homepage')) {
        jQuery('body').addClass('iv-homepage');

        jQuery('fieldset[data-step="1"] .slide-overlay .slide-header').wrap( '<div class="slideContent"></div>');
        jQuery('.slideContent').append(jQuery('fieldset[data-step="1"] .slide-overlay .slide-footer'));

        function runCodeMobile() {
            jQuery('.iv-homepage fieldset[data-step="1"] .slide-overlay .slide-header ul').before(jQuery('.iv-homepage fieldset[data-step="1"] .slide-overlay .inner-container'));
        }

        // Load code just for mobile 
        if (window.matchMedia("(max-width: 991.98px)").matches) {
            runCodeMobile();
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(min-width: 992px)").matches) {
                    location.reload();
                }
            }, true);
        } else {
            window.addEventListener('resize', function(event) {
                if (window.matchMedia("(max-width: 991.98px)").matches) {
                    location.reload();
                }
            }, true);
        }
        // Load code just for mobile over
    
        jQuery(`#start-here`).before(`
            <div class="iv-ratings-sec">
            <div class="stars" bis_skin_checked="1">
                <span class="star-image">
                    <img alt="star" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png" data-sf-ec-immutable="">
                    <img alt="star" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png" data-sf-ec-immutable="">
                    <img alt="star" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png" data-sf-ec-immutable="">
                    <img alt="star" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png" data-sf-ec-immutable="">
                    <img alt="star" src="/ResourcePackages/Allied/assets/house-hold_dist/img/star.png" data-sf-ec-immutable="">
                </span>
                <span class="star-text">Average Rating: 4.6/5&nbsp;based on 5,000 customer reviews</span>
            </div>
        </div>`);

        jQuery('fieldset[data-step="1"] .slide-overlay .inner-container > button').append(`<img class="arrowRight" alt="Arrow Right" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1770374237/Allied/arrowRight.png">`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        heroText();
    }
}, 100);
