function loadCode() {
    if (!jQuery('body').hasClass('vinBlog_Test')) {
        jQuery('body').addClass('vinBlog_Test');


        jQuery('.at-below-post.addthis_tool').before(` <div class="ProDemand"> 
            <h2>Plate-to-VIN decoding is just one of the many features of our ProDemand software. Book a demo today, and get 3 months free.</h2>
            <a class="btn btn-yellow vinBlog_btn" href="https://mitchell1.com/prodemand/">Learn More</a>
        </div>`);

        jQuery('#fluid-wrapper-counter-1').nextUntil('.ProDemand').wrapAll('<div class="faq_wrap"></div>');

        jQuery('.faq_wrap p br').each(function(e){
          jQuery(this).prevUntil().wrapAll('<div class="faq_title"></div>');
        });

        jQuery('.faq_title').eq(-1).parent().nextAll().wrapAll('<div class="faq_extra_desc"></div>');
        jQuery('.faq_title').eq(-1).parent().append(jQuery('.faq_extra_desc'))

        jQuery('.faq_wrap p').each(function(e){
            jQuery(this).replaceWith('<div class="faq_item">' + jQuery(this).html() +'</div>');
        });

        jQuery('.faq_wrap .faq_item').wrapInner( '<div class="faq_desc"></div>');
         
        jQuery('.faq_wrap .faq_desc').each(function(e){
            jQuery(this).before(jQuery(this).find('.faq_title'));
            jQuery(this).find('br').remove();
        });


        // var options = jQuery('.faq_desc')
        // for (index = 0; index < options.length; ++index) {
        // options[index].innerHTML = options[index].innerHTML.replace(/\&nbsp;/g, ' ');
        // }
        var options = jQuery('.faq_item')
        for (index = 0; index < options.length; ++index) {
        options[index].innerHTML = options[index].innerHTML.replace(/\&nbsp;/g, ' ');
        }

        jQuery('.faq_title').click(function(){
            var $this = jQuery(this);
            $this.toggleClass('active');
            $this.next().slideToggle();
        });

    }
  }
  loadCode();
  
 





