function loadcode() {
    jQuery('body').addClass('footerTest_iv');
    var getElement = setInterval(() => {
        if(jQuery('.footerTest_iv #div_block-391-89').length > 0) {
            clearInterval(getElement);

            jQuery('.footerTest_iv #div_block-391-89').html(`<h4 class="agencyb-footer-1-title trueyou-footer-title">Services</h4>
            <ul>
                <li><a href="https://trueyouweightloss.com/services/endoscopic-sleeve-gastroplasty/">Endoscopic Sleeve Gastroplasty</a></li>
                <li><a href="https://trueyouweightloss.com/services/revisions/">Bariatric Revisions</a></li>
                <li><a href="https://trueyouweightloss.com/services/gastric-balloons/">Gastric Balloons</a></li>
                <li><a href="https://trueyouweightloss.com/services/true-you-rx/">True You Rx</a></li>
            </ul>`);
        }
    }, 100);
}

loadcode();