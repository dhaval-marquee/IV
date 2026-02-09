(function () {
  function latestCode(callback) {
    window.addEventListener("load", callback);
  }

  latestCode(() => {
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;

    // VWO event setup
    window.VWO = window.VWO || [];
    VWO.event = VWO.event || function () {
      VWO.push(["event"].concat([].slice.call(arguments)));
    };

    // Wait for element to exist
    function waitForElement(selector, callback) {
      (function check() {
        const el = document.querySelector(selector);
        if (el) {
          callback(el);
        } else {
          setTimeout(check, 20);
        }
      })();
    }

    // Fully visible viewport tracking
    function trackInViewport(targetSelector, eventName) {
      waitForElement(targetSelector, function (el) {
        const elements = el instanceof NodeList ? el : [el];

        const observer = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio === 1) {
              VWO.event(eventName);
              console.log(eventName);
              obs.unobserve(entry.target);
            }
          });
        }, {
          root: null,
          rootMargin: `-${headerHeight}px 0px 0px 0px`,
          threshold: 1.0
        });

        elements.forEach(el => observer.observe(el));
      });
    }

    // Main Gallery in View Port
    trackInViewport('.yCmsContentSlot .js-image-gallery-wrapper', 'mainGalleryInViewPort');

    // Product Details in View Port
    trackInViewport('#productPageAccordion #details', 'productDetailsInViewPort');

    // Ingredients in View Port
    trackInViewport('#productPageAccordion #ingredients', 'ingredientsInViewPort');

    // FAQs in View Port
    trackInViewport('#productPageAccordion #faqs', 'faQsInViewPort');

    // Use Instructions in View Port
    trackInViewport('#productPageAccordion #instructions', 'useInstructionsInViewPort');

    // Competitive Information in View Port
    trackInViewport('#productPageAccordion #competitiveInfo', 'competitiveInformationInViewPort');

    // Similar Products in View Port
    trackInViewport('.js-recommendation-container-title', 'similarProductsInViewPort');

    // Similar Products - Actual Products in View Port
    trackInViewport('.js-add-to-dropdown-template-wrapper .slick-slide:first-child form', 'similarProductsActualProductsInVp');

    // Customer Reviews in View Port
    trackInViewport('#yotpo-headline-reviews', 'customerReviewsInViewPort');

    // Run the rest only after #yotpo-headline-reviews is loaded
    waitForElement('#yotpo-headline-reviews', function () {
      setTimeout(() => {
        // Customer Reviews in View Port
        trackInViewport('#yotpo-headline-reviews', 'customerReviewsInViewPort');

        // Review with Media in View Port
        trackInViewport('.yotpo-media-gallery .yotpo-media-gallery-headline', 'reviewWithMediaInViewPort');

        // Single Review First to Eight
        trackInViewport('.yotpo-reviews-list .yotpo-review:nth-child(1)', 'firstReviewInViewPort');
        trackInViewport('.yotpo-reviews-list .yotpo-review:nth-child(4)', 'secondReviewInViewPort');
        trackInViewport('.yotpo-reviews-list .yotpo-review:nth-child(7)', 'thirdReviewInViewPort');
        trackInViewport('.yotpo-reviews-list .yotpo-review:nth-child(10)', 'fourthReviewInViewPort');
        trackInViewport('.yotpo-reviews-list .yotpo-review:nth-child(13)', 'fifthReviewInViewPort');
        trackInViewport('.yotpo-reviews-list .yotpo-review:nth-child(16)', 'sixthReviewInViewPort');
        trackInViewport('.yotpo-reviews-list .yotpo-review:nth-child(19)', 'seventhReviewInViewPort');
        trackInViewport('.yotpo-reviews-list .yotpo-review:nth-child(22)', 'eightReviewInViewPort');

        // Review Pagination in ViewPort
        trackInViewport('.yotpo-reviews-pagination-container', 'reviewPaginationInViewPort');

        // Amway Promise in ViewPort
        trackInViewport('[alt="Amway Promise"]', 'amwayPromiseInViewPort');

        // Footer Section in ViewPort
        trackInViewport('.js-mainFooter .amw-footer__section:nth-child(2)', 'footerSectionInViewPort');
      }, 2000);
    });
  });
})();