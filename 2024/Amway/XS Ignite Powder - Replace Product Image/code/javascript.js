function loadTestCode() {
    if (!$('body').hasClass('productImage')) {
        $('body').addClass('productImage');
        
        // Put your test code here
        var thumbNailImage = 'https://res.cloudinary.com/ignite-visibility/image/upload/c_fill,h_60,w_60,f_auto/amway/ignite-powder.png';
        var imagePath = 'https://res.cloudinary.com/ignite-visibility/image/upload/v1722407860/amway/ignite-powder-hd.png';

        $('.amw-gallery-carousel__inner a img').eq(0).attr('src',thumbNailImage);


        $('.amw-gallery-carousel--primary .amw-gallery-carousel__inner img').eq(0).attr('src',imagePath);

        $('.amw-gallery-carousel--primary .amw-gallery-carousel__img[src*="/medias/127811-en-US-690px-01"]').attr('src',imagePath);

        document.addEventListener('click', function(e) {
            // debugger
            if(e.target && e.target.className.includes('amw-gallery-carousel__img')) {
                if($('img[src*="/medias/127811-en-US-1800px-01"]').length){
                    $('img[src*="/medias/127811-en-US-1800px-01"]').attr('src',imagePath);
                }
            }
        });

        $(window).resize();
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);