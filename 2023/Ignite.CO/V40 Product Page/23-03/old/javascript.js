function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('productPage')) {
        bodyEle.classList.add('productPage');


        var getClass = setInterval(() => {
            if($('.productPage .selector-wrapper + select').length > 0) {
                clearInterval(getClass);
                initializeCode();
            }
        }, 100);
        
        function initializeCode() {
            $('#pagecontent + div >.sixteen.columns').after($('.ig-custom--template h1.product_name'));
            $('.productPage .selector-wrapper + select').addClass('new_selectBox');

            var selectBox=  $('.swatch_options').prev();
            $('.purchase-details').prepend(selectBox);

            $('.gallery-wrap').after(`<ul class="product_title">
                <li slide-index="0" style="color: #fff">Family Pack</li>
                <li slide-index="1" style="color: #52277a">Blue Razz Ice</li>
                <li slide-index="2" style="color: #894e92">Grape Ice</li>
                <li slide-index="3" style="color: #399a30">Guava Ice</li>
                <li slide-index="4" style="color: #154494">Mixed Berries</li>
                <li slide-index="5" style="color: #e4a39b">Peach Ice</li>
                <li slide-index="6" style="color: #db955a">Peach Mango Watermelon</li>
                <li slide-index="7" style="color: #b9ae32">Pineapple Peach Lemonade</li>
                <li slide-index="8" style="color: #d6899a">Strawberry Banana</li>
                <li slide-index="9" style="color: #be1429">Strawberry Watermelon</li>
                <li slide-index="10" style="color: #ae135c">Watermelon Ice</li>
            </ul>`);

            $(document).on('change', '.productPage .selector-wrapper + select', function() {
                var currentItem = $(this).prop('selectedIndex');
                // console.log(currentItem);
                // console.log($('.productPage .product_gallery_nav .gallery-cell img[data-index="'+currentItem+'"]').attr('src'));
                $('.productPage .product_gallery_nav .gallery-cell img[data-index="'+currentItem+'"]').parent().trigger('click');
                
            });

            function checkIndex() {
                if($('.new_selectBox option').eq(0).attr('data-check') != 'available') {
                    $('.new_selectBox').prepend('<option data-check="available" value="Family Pack">Family Pack</option>');
                }

                var indexNumber = parseInt($('.productPage .product_gallery_nav .gallery-cell.is-nav-selected').find('img').attr('data-index'));
                $('.product_title li').each(function() {
                    var checkListNumber = parseInt($(this).attr('slide-index'));
                    if(checkListNumber === indexNumber) {
                        $('.product_title li').removeClass('active');
                        $(this).addClass('active');
                        $('.new_selectBox option').eq(indexNumber).prop('selected', true);
                    }
                });
            }
            
            function observerForLoadingBlock(){
                // observer binding
                var target = document.querySelector('.gallery-wrap');
                const config = {
                    childList: true, characterData: true, subtree: true, attributes: true,
                };
            
                var running = false; 
            
                const callback = function(mutationsList, observer) {
                    for (let mutation of mutationsList) {
                        if(running) return;
                        setTimeout(() => {
                            checkIndex();
                        }, 200);
                        running = true;
                        setTimeout(function(){running = false;}, 50);
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(target, config);
                // End observer binding
            }
            observerForLoadingBlock();
        }
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over