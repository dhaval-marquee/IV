function loadTestCode() {
  if (!document.querySelector('body').classList.contains('iv-sticky-product')) {
    document.querySelector('body').classList.add('iv-sticky-product');

    // Move the reviews section above Similar Products
    const similarProductSection = document.querySelector('.iv-sticky-product .productDetailsPageRightBottomSlot .amw-product-recomendation')?.closest('.productDetailsPageRightBottomSlot-component');
    const reviewSection = document.querySelector('.iv-sticky-product .productDetailsPageRightBottomSlot div[data-bv-show="reviews"]')?.closest('.productDetailsPageRightBottomSlot-component');

    if (similarProductSection && reviewSection) {
      reviewSection.after(similarProductSection);
    }

    const productDetailImage = document.querySelector('.iv-sticky-product .productDetailsPageLeftPanelSlot');
    const faqSection = document.querySelector('.iv-sticky-product #productPageAccordion');

    if (productDetailImage && faqSection) {
      productDetailImage.after(faqSection);
    }

    const productDetail = document.querySelector('.iv-sticky-product .main-container .row .js-addto-product-component');
    productDetailImage?.parentElement?.classList.add('iv-product-detail-image');

    if (productDetail) {
      function checkStickyClass() {
        if (window.scrollY > 0) {
          productDetail.classList.add('iv-sticky-product-detail');
        } else {
          productDetail.classList.remove('iv-sticky-product-detail');
        }
      }

      window.addEventListener('scroll', checkStickyClass);
      window.addEventListener('resize', checkStickyClass);
      checkStickyClass();
    }

    // === Custom Scroll-Based DOM Repositioning (no observer) ===
    (function () {
      const leftPanelComponent = document.querySelector('.productDetailsPageLeftPanelSlot-component');
      const leftPanelSlot = document.querySelector('.productDetailsPageLeftPanelSlot');
      const rightPanel = document.querySelector('.productDetailsPageRightPanelSlot');
      const titleSlot = document.querySelector('.productDetailsPageTitleSlot');

      if (!leftPanelComponent || !leftPanelSlot || !rightPanel || !titleSlot) return;

      const originalLeftParent = leftPanelComponent.parentElement;
      const leftPlaceholder = document.createElement('div');
      originalLeftParent.insertBefore(leftPlaceholder, leftPanelComponent);

      const originalTitleParent = titleSlot.parentElement;

      const rightComponents = [...rightPanel.querySelectorAll('.productDetailsPageRightPanelSlot-component')];
      const originalRightParent = rightComponents[0]?.parentElement;
      const rightPlaceholders = rightComponents.slice(0, 3).map(comp => {
        const placeholder = document.createElement('div');
        comp.parentElement.insertBefore(placeholder, comp);
        return placeholder;
      });

      let moved = false;
      let leftSide, rightSide, wrapper;

      function onScrollCheck() {
        var headerHeight = document.querySelector('header.amw-header.print-hide.amw-header--brand').clientHeight;
        const rect = leftPanelSlot.getBoundingClientRect();
        const shouldMove = rect.bottom < headerHeight + 50;

        if (shouldMove && !moved) {
          // Create wrapper and sides
          wrapper = document.createElement('div');
          wrapper.className = 'iv-side-wrapper';

          leftSide = document.createElement('div');
          rightSide = document.createElement('div');
          leftSide.className = 'iv-left-side';
          rightSide.className = 'iv-right-side';

          wrapper.appendChild(leftSide);
          wrapper.appendChild(rightSide);

          rightPanel.insertBefore(wrapper, rightPanel.firstChild);

          rightSide.appendChild(leftPanelComponent);
          leftSide.appendChild(titleSlot);

          rightComponents.slice(0, 3).forEach(comp => {
            if (comp && comp.parentElement === rightPanel) {
              leftSide.appendChild(comp);
            }
          });
          document.querySelector('.js-addto-product-component div > .productDetailsPageTitleSlot').style.setProperty('display', 'none', 'important');

          moved = true;

          setTimeout(() => {
            $('.amw-gallery-carousel .amw-gallery-carousel__inner').slick('setPosition');
          }, 100);

        } else if (!shouldMove && moved) {
          originalLeftParent.insertBefore(leftPanelComponent, leftPlaceholder);
          originalTitleParent.appendChild(titleSlot);

          rightComponents.slice(0, 3).forEach((comp, i) => {
            const placeholder = rightPlaceholders[i];
            if (placeholder && comp && comp.parentElement === leftSide) {
              originalRightParent.insertBefore(comp, placeholder);
            }
          });

          document.querySelector('.js-addto-product-component div > .productDetailsPageTitleSlot').style.setProperty('display', 'block', 'important');

          wrapper.remove();
          moved = false;

          setTimeout(() => {
            $('.amw-gallery-carousel .amw-gallery-carousel__inner').slick('setPosition');
          }, 100);

        }
      }

      window.addEventListener('scroll', onScrollCheck);
      window.addEventListener('resize', onScrollCheck);
      onScrollCheck();
    })();
  }
}

if (window.matchMedia("(min-width: 1025px)").matches) {
  var checkCondition = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(checkCondition);
      loadTestCode();
    }
  }, 100);

  window.addEventListener('resize', function () {
    if (window.matchMedia("(max-width: 1024.98px)").matches) {
      location.reload();
    }
  }, true);
} else {
  window.addEventListener('resize', function () {
    if (window.matchMedia("(min-width: 1025px)").matches) {
      location.reload();
    }
  }, true);
}