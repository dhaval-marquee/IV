function loadTestCode() {
    if (!jQuery('body').hasClass('iv_cta')) {
      jQuery('body').addClass('iv_cta');
  
      jQuery('#inner-header .m-buttons').append(`
        <a href="/about-us/careers/" class="iv-btn orange-btn">
          Looking for a Job?
        </a>
      `);
    }
  }
  
  var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('#inner-header').length > 0) {
      clearInterval(checkCondition);
      loadTestCode();
    }
  }, 100);
  