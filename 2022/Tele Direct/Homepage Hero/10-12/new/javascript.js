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
                   <p>From Fortune 500 companies to Start-Ups, we provide an exceptional customer experience that helps you scale your business and increase revenue.</p>
                   <div class="btn-box"><a class="orange __mPS2id _mPS2id-h" href="#contact-form" rel="m_PageScroll2id" data-ps2id-offset="-10">Get a quote</a></div>
                 </div>
               </div>
               <div class="right_box">
                 <div class="img_box">
                   <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1670647329/TeleDirect/Teledirect_Hero_Image.png" alt="Teledirect_Hero_Image" class="hero-img hero-des">
                   <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1670647328/TeleDirect/Teledirect_Mobile_Hero.png" alt="Teledirect_Mobile_Hero" class="hero-img hero-mob">
                  </div>
               </div>
             </div>
           </div>
         </div>`);
      }
  });
}

var jQisLoaded = setInterval(function () {
  if (typeof jQuery != 'undefined') {
      clearInterval(jQisLoaded);
      initCode();
  }
}, 100);