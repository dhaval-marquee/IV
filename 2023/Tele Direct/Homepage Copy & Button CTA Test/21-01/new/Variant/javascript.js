// function initCode() {
//   jQuery(document).ready(function(jQuery){
//       if(!jQuery('body').hasClass('homepageTest')) {
//           jQuery('body').addClass('homepageTest');
          
//           /*hero section*/
//           jQuery('.site-header .widget-area .widget_black_studio_tinymce a[href="#contact-form"]').text(`BOOK A FREE DEMO`);
//           jQuery('.teledirect_test .hero_section .hero_inn_box .btn-box .orange').text(`BOOK A FREE DEMO`);
//           jQuery('#gform_wrapper_1 #gf_1+#gform_1 .gform_footer input.button').attr('value', 'BOOK YOUR FREE DEMO NOW');
          
//       }
//   });
// }

// var jQisLoaded = setInterval(function () {
//   if (typeof jQuery != 'undefined') {
//       clearInterval(jQisLoaded);
//       initCode();
//   }
// }, 100);



function initCode() {
  jQuery(document).ready(function(jQuery){
      if(!jQuery('body').hasClass('teledirect_test')) {
          jQuery('body').addClass('teledirect_test');
          
          /*hero section*/
          jQuery('.teledirect_test.home .site-header').after(`<div class="hero_section">
           <div class="container">
             <div class="hero_inn_box">
               <div class="left_box">
                 <div class="content_box">
                   <h6>A 24/7 U.S. Based Contact Center</h6>
                   <h1>Growing Your Business Starts With a Better Customer Experience</h1>
                   <p>From Fortune 500 companies to Start-Ups, we provide an exceptional customer experience that helps you scale your business and increase&nbsp;revenue.</p>
                   <div class="btn-box"><a class="orange __mPS2id _mPS2id-h" href="#contact-form" rel="m_PageScroll2id" data-ps2id-offset="-10">Get a quote</a></div>
                 </div>
               </div>
             </div>
           </div>
         </div>`);

         jQuery('.site-header .widget-area .widget_black_studio_tinymce a[href="#contact-form"]').text(`BOOK A FREE DEMO`);
         jQuery('.teledirect_test .hero_section .hero_inn_box .btn-box .orange').text(`BOOK A FREE DEMO`);
         jQuery('#gform_wrapper_1 #gf_1+#gform_1 .gform_footer input.button').attr('value', 'BOOK YOUR FREE DEMO NOW');

      }
  });
}

var jQisLoaded = setInterval(function () {
  if (typeof jQuery != 'undefined') {
      clearInterval(jQisLoaded);
      initCode();
  }
}, 100);