/* ========= Hero section ======== */
if (!$('body').hasClass('iv_mcc_home')) {
  $('body').addClass('iv_mcc_home');

  $('.iv_mcc_home .top-wrapper .top-banner-content h1').text('Custom Answering Solutions for Businesses of Every Size');
  $('.iv_mcc_home .top-wrapper .top-banner-content a').text('Get a 7-day Free Trial');
  $('.iv_mcc_home .top-wrapper .top-banner-content a').wrap('<div class="btn-wrap"></div>');
  $('.iv_mcc_home .top-wrapper .top-banner-content h3').remove();
  $('.iv_mcc_home .top-wrapper .top-banner-content .cf').remove();
  $('.iv_mcc_home .top-wrapper .top-banner-content h1').after('<ul class="hero-list">'+
      '<li>100% U.S. Based</li>'+
      '<li>Available 24/7</li>'+
      '<li>Custom Scripting</li>'+
      '</ul>');
  $('.iv_mcc_home .top-wrapper .top-banner-content ul').addClass('fadeInDown animated').css({ "animation-delay": "0.2s", "animation-name": "fadeInDown", "margin": "0" });
  
  function updateData() {
    if ($(window).width() < 768) {
          var scroll = $(window).scrollTop();
          var headerhight = $('.header').height();
          var btnheight = $('.iv_mcc_home .top-wrapper .top-banner-content a').innerHeight();
          var btndistance = $(".iv_mcc_home .top-wrapper .top-banner-content a").offset().top
          if (scroll >= btndistance + btnheight - headerhight) {
              $('.iv_mcc_home .header > #inner-header .top-buttons a.orange-btn').show(300);
          } else {
              $('.iv_mcc_home .header > #inner-header .top-buttons a.orange-btn').hide(300);
          }
      };
  }

  var waitForFinalEvent = (function () {
      var timers = {};
      return function (callback, ms, uniqueId) {
          if (!uniqueId) {
              uniqueId = "Don't call this twice without a uniqueId";
          };
          if (timers[uniqueId]) {
              clearTimeout(timers[uniqueId]);
          };
          timers[uniqueId] = setTimeout(callback, ms);
      };
  })();

  $(window).resize(function () {
      waitForFinalEvent(function () {
          updateData();
      }, 500);
  });
  $(window).on('scroll', function () {
      updateData();
  });
  
  $('body.iv_mcc_home').css('visibility', 'visible');
};
/* ========= Hero section Over ======== */


function loadCode() {
  if (!$('body').hasClass('homepage_test')) {
      $('body').addClass('homepage_test');
      $('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
      $('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.13.1/css/OverlayScrollbars.css"/>').appendTo('head');

    // Slider section
    $('.homepage_test.home .top-section .wrap h2').after(`<section class="slider_section">
      <ul class="slider_wrapper">
          <li>
            <div>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/Delta-gs_2x.jpg" alt="Delta gs">
              </div>
          </li>
          <li>
            <div>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/HoltCat-gs_2x.jpg" alt="HoltCat-gs">
              </div>
          </li>
          <li>
            <div>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/Humana-gs_2x.jpg" alt="Humana-gs">
              </div>
          </li>
          <li>
            <div>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/International-Paper-gs_2x.jpg" alt="International-Paper-gs">
              </div>
          </li>
          <li>
            <div>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/MSinaiLogo-gs_2x.jpg" alt="MSinaiLogo-gs">
              </div>
          </li>
          <li>
            <div>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/ServPro-gs_2x.jpg" alt="ServPro-gs">
              </div>
          </li>
      </ul>
    </section>`);
    
  $.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {
    $('.slider_wrapper').slick({
        infinite: true,
        speed: 300,
        autoplay: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                    dots: true,
                    slidesToShow: 3,
                    slidesToScroll: 2
            }
        },
        {
          breakpoint: 768,
          settings: {
                  dots: true,
                  slidesToShow: 2,
                  slidesToScroll: 1
          }
      }]
    });

    $('.slider_section').css('opacity','1');
});

// Slider over
      
      $('.homepage_test').css('visibility','visible');
      $('.two-column-section#two-column-sections').after($('.top-section .wrap+h2').addClass('text-center'));
      $('.two-column-section#two-column-sections+h2').after($('.top-section .wrap+p').addClass('text-center'));
      $('.homepage_test .top-section+.gray-section+.two-column-section h2').text('No Two Businesses are Alike');
      $('.homepage_test .top-section+.gray-section+.two-column-section h4').text('That is why Map Communications offers custom, flexible solutions to help businesses of all sizes');

      $('.gray-section#two-column-sections').before(`<section class="works_section">
      <div class="section_inner">
      <h2 class="text-center">From Small Business to Fortune 500, We Keep You Connected 24/7</h2>
         <div class="elementor-row">
           <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7a13941f">
             <div class="works_item">
               <div> 
                    <img alt="Cell phone" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1667979939/mapcommunications/%2AHomepage%20Redesign/FeaturesIcon1_2x.png">
                </div>
               <span class="works_span">
                 Our U.S. based receptionist centers are staffed 24 hours a day, 365 days providing
                 roll-over continuity and peace of mind against outages and weather events that can significantly impact your business                    
               </span>
             </div>
           </div>
           <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2bf62370">
             <div class="works_item">
               <div>
                  <img alt="headset control" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144523/mapcommunications/%2AHomepage%20Redesign/headset_control_2x.png">
               </div>
               <span class="works_span">
                Your business runs on data, which is why we provide you with a dynamic suite of
                 online analytical tools and data collection reporting so you can react to calls in real time and with accurate & meaningful data                    
               </span>
             </div>
           </div>
           <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-182cfb49">
             <div class="works_item">
                  <div>
                    <img alt="software platform" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png">
                  </div>
               <span class="works_span">Every business is unique, which is why our proprietary 
               guides
              our live agents logically through the call for a personalized and comprehensive customer support solution                 
             </div>
           </div>
         </div>
       </div>
    </section>
    <div class="live-call-section cf integrations_section">
    <div class="live-call-section cf integrations_inner">
      <div class="elementor-row integrations_top">
        <div
          class="elementor-column elementor-col-65 elementor-inner-column elementor-element elementor-element-7a13941f">
          <div class="integrations_item integrations_h2-wrap">
            <h2>Seamlessly Integrate With the Tools and Platforms Your Business Already Uses</h2>
          </div>
        </div>
        <div
          class="elementor-column elementor-col-35 elementor-inner-column elementor-element elementor-element-2bf62370">
          <div class="integrations_item">
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144991/mapcommunications/%2AHomepage%20Redesign/Zapier.png"
              alt="Zapier">
            <p>Map Communications has developed a relationship with Zapier that allows us to provide integrations with
              over 3,000 apps</p>
          </div>
        </div>
      </div>
      <div class="m-all t-all d-1of3 live-call-box">
        <div class="live-call-box_inner">
          <div>
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144994/mapcommunications/%2AHomepage%20Redesign/Calendly.png"
              alt="Calendly">
          </div>
          <p>Map Communications receptionists can use Calendly software to schedule appointments and meetings on your
            calendar</p>
        </div>
      </div>
      <div class="m-all t-all d-1of3 live-call-box">
        <div class="live-call-box_inner">
          <div>
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144999/mapcommunications/%2AHomepage%20Redesign/Acuity.png"
              alt="Acuity">
          </div>
          <p>No more phone tag or emails back and forth. We will schedule appointments for you with Acuity based on your
            available time slots.</p>
        </div>
      </div>
      <div class="m-all t-all d-1of3 live-call-box">
        <div class="live-call-box_inner">
          <div>
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144991/mapcommunications/%2AHomepage%20Redesign/Google_Calendar.png"
              alt="Google Calendar">
          </div>
          <p>One of the most widely used digital calendars, Google Calendar is a simple, familiar integration for the Posh
            team.</p>
        </div>
      </div>
      <div class="m-all t-all d-1of3 live-call-box item">
        <div class="live-call-box_inner">
          <div>
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144992/mapcommunications/%2AHomepage%20Redesign/Setmore.png"
              alt="Setmore">
          </div>
          <p>Keep your calendar centralized, up-to-date, and full of client appointments with Setmore and Map
            Communications.</p>
        </div>
      </div>
      <div class="m-all t-all d-1of3 live-call-box item">
        <div class="live-call-box_inner">
          <div>
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144991/mapcommunications/%2AHomepage%20Redesign/Rocket_Matter.png"
              alt="Rocket Matter">
          </div>
          <p>We'll help you manage all your leads and client details in one place with Rocket Matter's legal case
            management platform.</p>
        </div>
      </div>
      <div class="m-all t-all d-1of3 live-call-box item">
        <div class="live-call-box_inner">
          <div>
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144994/mapcommunications/%2AHomepage%20Redesign/Clio.png"
              alt="Clio">
          </div>
          <p>Whether you use Clio Grow or Clio Manage, we'll seamlessly Integrate so you can manage your law firm
            efficiently.</p>
        </div>
      </div>
      <div class="m-all t-all d-1of3 live-call-box item">
        <div class="live-call-box_inner">
          <div>
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144993/mapcommunications/%2AHomepage%20Redesign/Zoho.png"
              alt="Zoho">
          </div>
          <p>A favorite CRM for many of our clients, we offer an integration solution that makes it easy to run your
            business with Map Communications and Zoho.</p>
        </div>
      </div>
      <div class="m-all t-all d-1of3 live-call-box item">
        <div class="live-call-box_inner">
          <div>
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144991/mapcommunications/%2AHomepage%20Redesign/Hubspot.png"
              alt="Hubspot">
          </div>
          <p>Map Communications will schedule your appointments for you. Your calendar stays full, and you stay
            productive.</p>
        </div>
      </div>
      <div class="m-all t-all d-1of3 live-call-box item">
        <div class="live-call-box_inner">
          <div>
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144991/mapcommunications/%2AHomepage%20Redesign/Salesforce.png"
              alt="Salesforce">
          </div>
          <p>Perhaps the most well-known CRM in the game, Map Communications provides integration options for Salesforce
            that will be an ideal fit for you.</p>
        </div>
      </div>
    </div>
    <p class="integrations_text item">Not seeing your preferred integration? Tell us what you are looking for and we can
      create a custom solution for your&nbsp&nbspbusiness. </p>
    <a href="javascript:;" class="button integrations_btn block-btn">
      <span>SEE ALL INTEGRATIONS</span>
      <span>HIDE ALL INTEGRATIONS</span>
    </a>
  </div>
<div class="how_works flex bg_grey">
  <div class="wrap">
      <h2 class="white">How it Works</h2>
      <div class="how_work_wrapper flex-boxes">
          <div class="how_work_content flex-box">
              <span class="number">1</span>
              <h4>Get Set Up in <br> Minutes</h4>
              <p>Tell us about your business and our talented virtual receptionists will have your calls covered in no time. We’ll craft a customized script to match your preferred language, policies, and procedures.</p>
          </div>
          <div class="how_work_content flex-box">
              <span class="number">2</span>
              <h4>We Answer <br> Your Calls</h4>
              <p>Turn on coverage as needed. You’ll only pay for the time we actually spend chatting with your callers, making our services a fraction of the cost of a full-time, in-house receptionist.</p>
          </div>
          <div class="how_work_content flex-box">
              <span class="number">3</span>
              <h4>We Get the Information to <br> Where It is Needed</h4>
              <p>Our virtual receptionists deliver quality customer experiences every time the phone rings. By meeting your customers where they are, we’ll delight and inspire with every conversation.</p>
          </div>
      </div>
  </div>
</div>`);
    $('.top-section .wrap h2').text('Trusted by Thousands of Businesses');


        $(document).ready(function() {
          $('.integrations_btn').click(function() {
            $(this).toggleClass('active').siblings(".item").toggle();
            $('.homepage_test .integrations_section .integrations_text').addClass('btn').toggle();
            $('.homepage_test .integrations_section .item').addClass('item-list').toggle();
          });
        });
     
  }
}
loadCode();


