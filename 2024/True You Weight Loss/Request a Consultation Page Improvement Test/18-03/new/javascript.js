function loadcode() {
    jQuery('body').addClass('consultation_iv');
    var replaceElement = setInterval(() => {
        if(jQuery('.consultation_iv #div_block-391-89').length > 0) {
            clearInterval(replaceElement);

            jQuery('.consultation_iv #div_block-391-89').html(`<h4 class="agencyb-footer-1-title trueyou-footer-title">Services</h4>
            <ul>
                <li><a href="https://trueyouweightloss.com/services/endoscopic-sleeve-gastroplasty/">Endoscopic Sleeve Gastroplasty</a></li>
                <li><a href="https://trueyouweightloss.com/services/revisions/">Bariatric Revisions</a></li>
                <li><a href="https://trueyouweightloss.com/services/gastric-balloons/">Gastric Balloons</a></li>
                <li><a href="https://trueyouweightloss.com/services/true-you-rx/">True You Rx</a></li>
            </ul>`);

        }
    }, 100);
}
// Load code just for Desktop 
if (window.matchMedia("(min-width: 992px)").matches) {

    loadcode();

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