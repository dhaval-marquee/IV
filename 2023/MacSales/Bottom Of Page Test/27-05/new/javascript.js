function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('checkout_test')) {
        bodyEle.classList.add('checkout_test');

        $('#tab-overview').before($('#tab-includes'));
        $('#tab-includes').after($('#tab-reviews'));

        $(".pdp-overview__container > div").each(function (index) {
            $(this).addClass("pdpOverview" + index);
        });
        $('.pdp-overview__container .pdpOverview12').before($('.pdp-overview__container .pdpOverview0').addClass('video_wrapper'));
        $('.pdpOverview1 .block__text-align-left .block__image-wrap').before($('.pdpOverview2 .block__heading-wrap').addClass('connectivity_heading'));

        $('#tab-content-container').before($('.pdp-overview__container .pdpOverview1'));
        $('.pdpOverview1').after($('.pdp-overview__container .pdpOverview2'));
        $('#overview').before($('#includes'));
        $('#overview').before($('#reviews'));

        $(document).ready(function() {
            $('#btn-review-filter-all,#btn-review-filter-5,#btn-review-filter-4,#btn-review-filter-3,#btn-review-filter-2,#btn-review-filter-1').click(function() {
              $('#reviewWrapper').css("display", "block");
            });
          });

          document.querySelector('#overviewHeading').innerHTML =`<div id="overviewHeading" class="pdp-section-heading pdp-specs__margin">
          <h2 class="pdp-section-heading__title">
              <img src="https://media.owcnow.com/image/upload/icon-eclipse-benefits" data-src="https://media.owcnow.com/image/upload/icon-eclipse-benefits" alt="Specs"
                  class="pdp-section-heading__title-icon ls-is-cached lazyloaded cld-responsive">Overview</h2>
                  <a aria-label="go back to the top section" href="#nav-wrap" class="animate-scroll pdp-section-heading__jump-top" data-ol-has-click-handler="">
                      <img src="https://media.owcnow.com/image/upload/v1621629401/nav-back-to-top-up-arrow.svg" data-src="https://media.owcnow.com/image/upload/v1621629401/nav-back-to-top-up-arrow.svg" class="pdp-section-heading__jump-img ls-is-cached lazyloaded cld-responsive" alt="Back to top">Back to
              top</a>
      </div>`
        
    }
}
loadTestCode();