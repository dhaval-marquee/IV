function loadTestCode() {
    if (!$('body').hasClass('productImage')) {
        $('body').addClass('productImage');
        
        // Put your test code here
        var thumbNailImageSelector = '/medias/127725-en-US-150px-01';
        var imagePathSelector = '/medias/127725-en-US-690px-01';
        var zoomImagePathSelector = '/medias/127725-en-US-1800px-01';

        var thumbNailImage = 'https://res.cloudinary.com/ignite-visibility/image/upload/c_fill,h_60,w_60,f_auto/amway/Nutrilite_Begin_Daily_GI_Primer_v1.png';
        var imagePath = 'https://res.cloudinary.com/ignite-visibility/image/upload/amway/Nutrilite_Begin_Daily_GI_Primer_v1.png';


        // Replace the images at all locations
        $(`.amw-gallery-carousel__inner a img[src*="${thumbNailImageSelector}"]`).attr('src',thumbNailImage);
        $(`.amw-gallery-carousel--primary .amw-gallery-carousel__inner img[src*="${imagePathSelector}"]`).attr('src',imagePath);

        document.addEventListener('click', function(e) {
            // debugger
            if(e.target && e.target.className.includes('amw-gallery-carousel__img')) {
                if($(`img[src*="${zoomImagePathSelector}`).length){
                    $(`img[src*="${zoomImagePathSelector}`).attr('src',imagePath);
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