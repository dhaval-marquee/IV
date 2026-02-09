function loadCode() {
    if (!$('body').hasClass('homepage_test')) {
        $('body').addClass('homepage_test');
        $('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
        $('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.13.1/css/OverlayScrollbars.css"/>').appendTo('head');
        
        $('.homepage_test').css('visibility','visible');
        $('.two-column-section#two-column-sections').after($('.top-section .wrap+h2').addClass('text-center'));
        $('.two-column-section#two-column-sections+h2').after($('.top-section .wrap+p').addClass('text-center'));
        $('.homepage_test .top-section+.gray-section+.two-column-section h2').text('No Two Businesses are Alike');
        $('.homepage_test .top-section+.gray-section+.two-column-section h4').text('That is why Map Communications offers custom, flexible solutions to help businesses of all sizes');

        $('.gray-section#two-column-sections').before(`<section class="works_section">
        <div class="section_inner">
        <h2 class="text-center">From Small Business toFortune 500, We Keep You Connected 24/7</h2>
           <div class="elementor-row">
             <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7a13941f">
               <div class="works_item">
                 <img alt="Cell phone" class="panel-main-image" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979939/mapcommunications/%2AHomepage%20Redesign/FeaturesIcon1_2x.png">
                 <span class="works_span">
                   Our U.S. based receptionist centers are staffed 24 hours a day, 365 days providing
                   roll-over continuity and peace of mind against outages and weather events that can significantly impact your business                    
                 </span>
               </div>
             </div>
             <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2bf62370">
               <div class="works_item">
                 <img alt="Cell phone" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1667210753/Persona_Labs/Telemedicine_page/doctor_icon_2x.svg">
                 <span class="works_span">
                   our business runs on data, which is why we provide you with a dynamic suite of
                   online analytical tools and data collection reporting so you can react to calls in real time and with accurate & meaningful data                    
                 </span>
               </div>
             </div>
             <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-182cfb49">
               <div class="works_item">
                 <img alt="Cell phone" class="panel-main-image" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png">
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
          <div class="m-all t-all d-1of3 live-call-box">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png" alt="">
              <p>Map Communications receptionists can use Calendly software to schedule appointments and meetings on your calendar</p>
          </div>
          <div class="m-all t-all d-1of3 live-call-box">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png" alt="">
              <p>No more phone tag or emails back and forth. We will schedule appointments for you with Acuity based on your available time slots.</p>
          </div>
          <div class="m-all t-all d-1of3 live-call-box">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png" alt="">
              <p>One of the most widely used digital calendars, Google Calendar is a simple, familiar integration for the Posh team.</p>
          </div>
          <div class="m-all t-all d-1of3 live-call-box">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png" alt="">
              <p>Keep your calendar centralized, up-to-date, and full of client appointments with Setmore and Map Communications.</p>
          </div>
          <div class="m-all t-all d-1of3 live-call-box">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png" alt="">
              <p>Well help you manage all your leads and client details in one place with Rocket Matter's legal case management platform.</p>
          </div>
          <div class="m-all t-all d-1of3 live-call-box">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png" alt="">
              <p>Whether you use Clio Grow or Clio Manage, well seamlessly Integrate so you can manage your law firm efficiently.</p>
          </div>
          <div class="m-all t-all d-1of3 live-call-box">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png" alt="">
              <p>A favorite CRM for many of our clients, we offer an integration solution that makes it easy to run your business with Map Communications and Zoho.</p>
          </div>
          <div class="m-all t-all d-1of3 live-call-box">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png" alt="">
              <p>Map Communications  will schedule your appointments for you. Your calendar stays full, and you stay productive.</p>
          </div>
          <div class="m-all t-all d-1of3 live-call-box">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png" alt="">
              <p>Perhaps the most well-known CRM in the game, Map Communications provides integration options for Salesforce that will be an ideal fit for you.</p>
          </div>
        </div>
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
      $('.top-section .wrap h2').text('Companies social proof headline: Trusted by Thousands of Businesses');
              // Slider section
              $('.homepage_test.home .top-section .wrap h2').after('<section class="slider_section">\
              <ul class="slider_wrapper">\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos1.jpg" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos2.jpg" alt="Pepsi Logo" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos3.jpg" alt="AT&T Logo" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos1.jpg" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos2.jpg" alt="Pepsi Logo" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos3.jpg" alt="AT&T Logo" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos1.jpg" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos2.jpg" alt="Pepsi Logo" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos3.jpg" alt="AT&T Logo" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos1.jpg" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos2.jpg" alt="Pepsi Logo" ></li>\
                  <li><img width="100" height="100" src="https://www.mapcommunications.com/wp-content/uploads/2021/07/Mobile-logos3.jpg" alt="AT&T Logo" ></li>\
              </ul>\
          </section>');
  
          $.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {
              $('.slider_wrapper').slick({
                  speed: 5000,
                  autoplay: true,
                  autoplaySpeed: 0,
                  centerMode: true,
                  cssEase: 'linear',
                  variableWidth: true,
                  infinite: true,
                  initialSlide: 1,
                  arrows: false,
                  buttons: false
              });
  
              $('.slider_section').css('opacity','1');
          });
          // Slider over

       
    }
}
loadCode();

