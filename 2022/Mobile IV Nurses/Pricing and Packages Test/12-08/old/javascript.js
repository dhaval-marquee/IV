function SPZTestCode() {
    if (!jQuery('body').hasClass('pricing_packages')) {
        jQuery('body').addClass('pricing_packages');
        
        // Put your test code here


        jQuery('.sections_group .section_wrapper.mcb-section-inner').addClass('product_wrapper').before('<div class="hero_wrapper">\
            <div class="container">\
                <h1><b>IV Drip Menu</b></h1>\
                <h3>Increase the effectiveness or target a specific symptom by upgrading your IV with an Add-In or Intramuscular Injection</h3>\
            </div>\
        </div>');

        jQuery('.product_wrapper > div').each(function(n) {
            jQuery(this).removeAttr('class').removeAttr('style');
            jQuery(this).addClass('product_iv product_'+(n+1));
        });





        jQuery('.product_iv .image_frame .image_wrapper').each(function() {
            jQuery(this).closest('.product_iv').prepend(jQuery(this));
        });


        jQuery('.product_iv .mcb-wrap-inner > div:last-child .column_attr').each(function(){
            jQuery(this).parent().parent().before(jQuery(this))
        });

        
        jQuery('.product_iv .column_attr + .mcb-wrap-inner').remove();
        jQuery('.product_iv .column_attr').removeAttr('class').addClass('product_content');

        jQuery('.product_wrapper .product_iv .product_content').each(function(){
            jQuery(this).find('h2').wrap('<div class="content_left"></div>');
        });

        jQuery('.content_left').after('<div class="content_right"></div>');


        jQuery('.product_wrapper .product_iv .product_content ul').each(function(){
            jQuery(this).appendTo(jQuery(this).closest('.product_content').find('.content_right'));
        });

        jQuery('.product_wrapper .product_iv .button').each(function(){
            jQuery(this).appendTo(jQuery(this).closest('.product_content').find('.content_right'));
        });

        jQuery('.content_right').nextAll().remove();



















        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}


try {
    // PG Cookies Add
    var cookieName = 'pricing_packages_Cookie';
    var cookieValue = '1';
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + 30);
    document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
    // END PG Cookies Add

    SPZTestCode();

} catch(ex) {

} finally {
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}