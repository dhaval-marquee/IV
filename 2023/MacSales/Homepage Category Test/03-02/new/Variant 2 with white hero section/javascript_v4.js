function loadTestCode3() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('owc_Logo_text')) {
        bodyEle.classList.add('owc_Logo_text');

        // Put your test code here

        $('.product-grid__container  h2 a[href="/shop/docks"]').parents('.owc_Logo_text .product-grid__container').addClass('arrivals_New');

        $('.product-grid__container  h2 a[href="/shop/docks"]').after('<p>Dock Deals - Save Now Through February 9th!</p>');

        var pictureInterval = setInterval(function () {
            if ($(".arrivals_New.product-grid__container a .product-grid__img-wrap img").length > 0) {
                clearInterval(pictureInterval);
                $('.arrivals_New.product-grid__container a .product-grid__img-wrap img').before(`<picture>
                <source data-srcset="https://res.cloudinary.com/ignite-visibility/image/upload/v1675407334/macsales/Homepage_Category_Test/owc_logo.png" srcset="https://res.cloudinary.com/ignite-visibility/image/upload/v1675407334/macsales/Homepage_Category_Test/owc_logo.png" media="(max-width: 767px)">
                <img class="owc_Logo" alt="OWC Logo" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1675407334/macsales/Homepage_Category_Test/owc_logo.png">
             </picture>`);
            }
         }, 200);
         var pictureInterval1 = setInterval(function () {
            if ($(".arrivals_New.product-grid__container a .product-grid__img-wrap img").length > 0) {
                clearInterval(pictureInterval1);

            $('.arrivals_New.product-grid__container a:last-child .product-grid__img-wrap img').after(`<picture>
             <source data-srcset="https://res.cloudinary.com/ignite-visibility/image/upload/v1675407334/macsales/Homepage_Category_Test/new_logo.png" srcset="https://res.cloudinary.com/ignite-visibility/image/upload/v1675407334/macsales/Homepage_Category_Test/new_logo.png" media="(max-width: 767px)">
             <img class="new_Logo" alt="OWC Logo" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1675407334/macsales/Homepage_Category_Test/new_logo.png">
            </picture>`);
            }
         }, 200);

        // $(".arrivals_New.product-grid__container a .product-grid__content h3.product-grid__heading").each(function (index) {
        //     $('.arrivals_New.product-grid__container a .product-grid__content h3.product-grid__heading').html($('.arrivals_New.product-grid__container a .product-grid__content h3.product-grid__heading').html().replace('OWC ',''));
        // });
        
        // $('.arrivals_New.product-grid__container a .product-grid__content h3.product-grid__heading').before($('.arrivals_New.product-grid__container a .product-grid__content .product-grid__price'));
                   
         $(".arrivals_New.product-grid__container a .product-grid__content h3.product-grid__heading").each(function (index) {
            $('.arrivals_New.product-grid__container a .product-grid__content h3.product-grid__heading').after($('.arrivals_New.product-grid__container a .product-grid__content .product-grid__price'));
            
        });

   
       
            // $('.arrivals_New.product-grid__container a .product-grid__content .product-grid__price').after('Only $399.00');

        //     $('.arrivals_New.product-grid__container a .product-grid__content').after(`<div class="pdp-floating-cart-toggle">
        //     <a href="https://eshop.macsales.com/shop/add/47213/OWCTCDRVDCK/?afv=pdp" id="pdp-cart__btn-a" style="display: flex;"
        //       class="owc-button-full-width pdp-cart__btn">Shop Now</a>
        //   </div>`);

          var btnInterval = setInterval(function () {
            if ($(".arrivals_New.product-grid__container a .product-grid__content").length > 0) {
                clearInterval(btnInterval);

                $('.arrivals_New.product-grid__container a .product-grid__content').after(`<div class="pdp-floating-cart-toggle">
                <a href="https://eshop.macsales.com/shop/add/47213/OWCTCDRVDCK/?afv=pdp" id="pdp-cart__btn-a" style="display: flex;"
                  class="owc-button-full-width pdp-cart__btn">Shop Now</a>
              </div>`);

            }
         }, 200);

         $('.product-grid__container[data-search-spring-id="home-new-arrivals-2021-10-01"]').addClass('arrivals_New');

      
    }
}
    
loadTestCode3();

