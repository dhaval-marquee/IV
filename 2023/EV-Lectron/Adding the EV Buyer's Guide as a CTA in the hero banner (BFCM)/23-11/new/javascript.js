function loadTestCode() {
    if (!$('body').hasClass('slider_iv')) {
        $('body').addClass('slider_iv');
        
        // Put your test code here
        $('.slider_iv .slideshow-slide').each(function(i){
            $(this).addClass('slide_'+(i+1));
            $(this).append('<div class="guid_text">\
                <a href="//ev-lectron.com/pages/buyers-guide"><span>Visit Buyer\'s Guide</span></a>\
            </div>');
        });

        $('.slide_1 img').attr('src','//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/BFCM/10_off.png');
        $('.slide_2 img').attr('src','//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/BFCM/15_off.png');
    }
}
loadTestCode();