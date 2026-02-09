function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-location-header')) {
  
      document.querySelector('body').classList.add('iv-location-header');
  
      // sticky header
      const hfeed = document.querySelector(".hfeed");
      const stickyOffset = hfeed.offsetTop;
      window.addEventListener("scroll", function() {
        if (window.pageYOffset > stickyOffset) {
          hfeed.classList.add("sticky");
        } else {
          hfeed.classList.remove("sticky");
        }
      });
  
      // Blog menu remove and added Own a Franchise
      document.querySelectorAll('[role="navigation"] a[href="/blog/"]').forEach(function(blog) {
        blog.innerText = 'Own a Franchise';
        blog.setAttribute('href', 'https://www.mosquitofranchise.com/');
      });
  
      // Get Quote CTA
      const getQuote = `<a class="quote-cta" href="javascript:;">GET A QUOTE</a>`;
      document.querySelector('header.ast-custom-header section.elementor-section .elementor-row > div:last-child  a[href="https://www.mosquitofranchise.com/"] span.elementor-icon-list-text').closest('.elementor-element').innerHTML = getQuote;
  
      const quoteCta = document.querySelector('.quote-cta');
      quoteCta.parentElement.classList.add('header-cta')
      quoteCta.addEventListener('click', function() {
        document.querySelector('.hero-phone-cta .cta-loc').click();
      })
  
      // Phone number
      const headPhone = `<div class="header-right">
              <a href="tel:(919) 355-4965" class="phone">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z"></path></svg>
              </a>
          </div>`;
      var ctaRight = document.querySelector('.header-cta');
      if (ctaRight) {
        ctaRight.insertAdjacentHTML('afterbegin', headPhone);
      }
  
      // For mobile top bar
      const topBarMobile = `<div class="top-bar"><a class="get-to-know-top" href="https://www.mosquito-authority.com/your-source-for-tick-control/">Your source for tick control</a></div>`;
      document.querySelector('header.ast-custom-header').insertAdjacentHTML('beforebegin', topBarMobile);
  
    }
  }
  
  var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
      clearInterval(checkCondition);
      loadTestCode();
    }
  }, 100);