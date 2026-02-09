function loadTestCode() {
    if(!jQuery('body').hasClass('location_iv')) {
        jQuery('body').addClass('location_iv');

        jQuery(".location_iv .reset-btn-group a").each(function (index) {
            jQuery(this).addClass('btn-dark btn-large').removeClass('btn-light');
        });

        var geturl = window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split('?')[0].split('#')[0].replace(/-/g, ' ');
        console.log(geturl);
        var getBtn = jQuery('.reset-btn-group').html();
        jQuery('.hero.hero__overlay').html(`<div class="hero__inner">
            <div class="page-width text-center">
                <div class="hero__inner__content">
                    <div class="heroTextWrapper"> 
                        <h1 style="padding: 0px 10px 0px 10px" class="h1 mega-title">Get On-Demand Mobile IV in <span>${geturl}</span></h1>
                        <div class="rte-setting mega-subtitle">
                            <ul>
                                <li>We're Available For Service 24/7</li>
                                <li>We Don't Charge Any Travel Fees</li>
                                <li>Book Your Service Now & Pay Later</li>
                            </ul>
                        </div>
                    </div>
                    <div class="reset-btn-group">${getBtn}</div>
                </div>
            </div>
        </div>`);

        var getTextInterval = setInterval(function () {
            if (jQuery('.location_iv h1.mega-title span').length > 0) {
                clearInterval(getTextInterval);
                var currentPage = window.location.pathname;
                if (currentPage == '/pages/fort-lauderdale-and-hollywood') {
                    jQuery('.location_iv h1.mega-title span').html(`Fort Lauderdale and Hollywood, Florida`);
                }
            }
        }, 100);
    }
}
loadTestCode();