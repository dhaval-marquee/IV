// Time difference calculation
let Time1 = new Date().getTime()/1000;
console.log('Time 1 > ' + Time1);

function loadTestCode() {
  // Load jQuery first
  const script = document.createElement('script');
  script.src = "https://code.jquery.com/jquery-3.7.1.min.js";
  script.type = "text/javascript";
  script.onload = function () {

    jQuery(function ($) {
      if (!$('body').hasClass('iv-contact')) {
        $('body').addClass('iv-contact');

        const target = $('.iv-contact form .fields');
        if (target.length) {
          const textEl = $('.iv-contact #lp-pom-text-64');
          const codeEl = $('.iv-contact #lp-code-71');
          if (textEl.length) textEl.insertAfter(target);
          if (codeEl.length) codeEl.insertAfter(target.next());
        }

        $('.iv-contact form #lp-pom-button-31 .label').text('Request More Info!');
      }

      var getHeight = setInterval(() => {
        if ($('.lp-pom-form form').length > 0) {
          clearInterval(getHeight);
          var form_wrapper = $('.lp-pom-form').parent();
          var form_wrap_height = form_wrapper.height();
          var form_top = form_wrapper.position().top;
          var blocks1 = [], form_block;
          $('.lp-positioned-content>.lp-element').each(function (index, element) {
            if (!$(element).is(form_wrapper) && ($(element).position().top > form_top)) {
              blocks1.push(element);
            }
          });
          $('#lp-pom-root>.lp-element').each(function (index, element) {
            var el_top = $(element).position().top;
            if ((el_top < form_top) && (el_top + $(element).height() > form_top)) {
              form_block = $(element);
              return false;
            }
          });
          var currFormHeight = $('.lp-pom-form').height();
          var diff = currFormHeight - form_wrap_height - 220;
          if (form_wrap_height > currFormHeight) {
            form_wrapper.height(currFormHeight);
          }
          form_block.height(form_block.height() + diff);
          form_block.find('div').each(function (index, el_div) {
            $(el_div).height($(el_div).height() + diff);
          });
          $.each(blocks1, function (index, element) {
            var el_top = $(element).position().top;
            var new_top = el_top + diff;
            $(element).css('top', new_top + 'px');
          });




          
          let Time2 = new Date().getTime()/1000;
          console.log('Time 2 > ' + Time2);

          let timeDifference = Time2 - Time1;
          console.log('Time difference > ' + timeDifference + ' seconds');
          // Time difference calculation over


        }

      }, 100);

    });



  };
  document.head.appendChild(script);

}

// Load code just for Desktop
if (window.matchMedia("(min-width: 601px)").matches) {

  loadTestCode();

  window.addEventListener('resize', function (event) {
    if (window.matchMedia("(max-width: 600.98px)").matches) {
      location.reload();
    }
  }, true);
} else {
  window.addEventListener('resize', function (event) {
    if (window.matchMedia("(min-width: 601px)").matches) {
      location.reload();
    }
  }, true);
}
// Load code just for Desktop over

// form SubmitEvent
window.ub.hooks.afterFormSubmit.push(function() {
    window.VWO = window.VWO || [];
    VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
    VWO.event("contactFormSubmitted");
});

//  fire event for contact page
var currentPage = window.location.href.split('?')[0].split('#')[0];
if (currentPage == 'https://go.ignitevisibility.com/contact-us/') {
    // Add the following snippet to trigger this event
    window.VWO = window.VWO || [];
    VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};

    VWO.event("anyContactPageVisits");
}