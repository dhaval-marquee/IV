function loadTestCode() {
    if (!$('body').hasClass('productImage')) {
        $('body').addClass('productImage');
        
        // Put your test code here
        var thumbNailImage = 'https://res.cloudinary.com/ignite-visibility/image/upload/c_fill,h_60,w_60,f_auto/amway/Sweet_Dreams_Sleep_Gummies_-_V1.png';
        var imagePath = 'https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/amway/Sweet_Dreams_Sleep_Gummies_-_V1.png';

        $('.amw-gallery-carousel__inner a img[src*="/medias/124506-en-US-150px-02"]').eq(0).click();
        $('.amw-gallery-carousel__inner .slick-dots li button[aria-label="2 of 6"]').click();

        $('.amw-gallery-carousel__inner a img[src*="/medias/124506-en-US-150px-02"]').attr('src',thumbNailImage);


        $('.amw-gallery-carousel--primary .amw-gallery-carousel__inner img[src*="/medias/124506-en-US-690px-02"]').attr('src',imagePath);

        $('.amw-gallery-carousel--primary .amw-gallery-carousel__img[src*="/medias/124506-en-US-690px-02"]').attr('src',imagePath);

        document.addEventListener('click', function(e) {
            // debugger
            if(e.target && e.target.className.includes('amw-gallery-carousel__img')) {
                if($('img[src*="/medias/124506-en-US-1800px-02"]').length){
                    $('img[src*="/medias/124506-en-US-1800px-02"]').attr('src',imagePath);
                }
            }
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);