function loadTestCode() {
  var bodyEle = document.querySelector('body');
  if (!bodyEle.classList.contains('returning_test')) {
      bodyEle.classList.add('returning_test');

      // Put your test code here
      $('#startCheckoutReturning span input#owcemail').attr('placeholder', 'E-mail Address:');
      $('#startCheckoutReturning span input#owcpassword').attr('placeholder', 'Password:');

      $('#startCheckoutReturning').wrapInner('<div class="form_inner"></div>').after('<span class="or">OR</span>');

      $('.returning_test #startCheckoutReturning span.ncrt_cm_sectcont_w').text('Sign in with your OWC Account');
      $('.returning_test #startCheckoutReturning span.ncrt_cm_s_field_block_22_last').before($('.returning_test #startCheckoutReturning span label span.ncrt_cm_forgot'));

      $('.returning_test #startCheckoutReturning .form_inner').after($('.returning_test .ncrt_cm_contain_line'));

      $('#startCheckoutReturning .ncrt_cm_contain_line .ncrt_cm_login').after($('#startCheckoutGuest .ncrt_box_wrap .ncrt_cm_login_cont'));
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