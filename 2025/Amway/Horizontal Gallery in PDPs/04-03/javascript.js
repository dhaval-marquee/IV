function changeFunctionNameToTestName() {
    if (!document.querySelector('body').classList.contains('hero_iv')) {
        document.querySelector('body').classList.add('hero_iv');
        
        // Put your test code here
        window.dispatchEvent(new Event('resize'));
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        changeFunctionNameToTestName();
    }
}, 100);


// // Unslick both slider
// jQuery('.amw-gallery-carousel__inner.js-secondary-carousel.slick-initialized.slick-slider.slick-vertical').slick('unslick');

// jQuery('.amw-gallery-carousel__inner.js-primary-carousel.slick-initialized.slick-slider').slick('unslick');
// // Unslick both slider


// // change position for first slider
// jQuery('.js-secondary-carousel .js-carousel-item').each(function() {
//     var $this = jQuery(this);
    
//     if ($this.attr('data-video-id')) {  // Check if the attribute exists
//         var currentVideoID = $this.attr('data-video-id');
//         var currentVideoProvider = $this.attr('data-video-provider');
//         var videoHTML = $this.find('a.amw-gallery-carousel__img-wrapper');
//         var $carousel = $this.closest('.js-secondary-carousel');
//         var $firstProduct = $carousel.find('div[data-index="1"]');
//         var firstProductHTML = $firstProduct.find('a.amw-gallery-carousel__img-wrapper');

//         // Set attributes on the first product
//         $firstProduct.attr('data-video-id', currentVideoID);
//         $firstProduct.attr('data-video-provider', currentVideoProvider);

//         // Move elements instead of cloning
//         $this.append(firstProductHTML);
//         $firstProduct.append(videoHTML);
//     }
// });

// // for product image slider
// jQuery('.js-primary-carousel .js-carousel-item').each(function() {
//     var $this = jQuery(this);
    
//     if ($this.attr('data-video-id')) {  // Check if the attribute exists
//         var currentVideoID = $this.attr('data-video-id');
//         var currentVideoProvider = $this.attr('data-video-provider');
//         // var videoHTML = $this.find('a.amw-gallery-carousel__img-wrapper');

//         var parent = $this.closest('.js-primary-carousel');        
//         var secondProduct = parent.find('.amw-gallery-carousel__img-container').eq(2);
//         var secondProductHTML = secondProduct.find('a.amw-gallery-carousel__img-wrapper');
//         var secondProduct = parent.find('.amw-gallery-carousel__img-container').eq(2);

//         // Set attributes on the first product
//         secondProduct.attr('data-video-id', currentVideoID);
//         secondProduct.attr('data-video-provider', currentVideoProvider);

//         // Move elements instead of cloning
//         $this.append(secondProduct);
//         $this.append(secondProductHTML);
//     }
// });