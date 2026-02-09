function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('productPage')) {
        bodyEle.classList.add('productPage');

        const ProductDetails = [
            {
                color: "#52277a",
                pname: 'Blue Razz Ice'
            },
            {
                color: "#894e92",
                pname: 'Grape Ice'
            },
            {
                color: "#399a30",
                pname: 'Guava Ice'
            },
            {
                color: "#154494",
                pname: 'Mixed Berries'
            },
            {
                color: "#e4a39b",
                pname: 'Peach Ice'
            },
            {
                color: "#db955a",
                pname: 'Peach Mango Watermelon'
            },
            {
                color: "#b9ae32",
                pname: 'Pineapple Peach Lemonade'
            },
            {
                color: "#d6899a",
                pname: 'Strawberry Banana'
            },
            {
                color: "#be1429",
                pname: 'Strawberry Watermelon'
            },
            {
                color: "#ae135c",
                pname: 'Watermelon Ice'
            }
        ]

        var getClass = setInterval(() => {
            if($('.productPage .selector-wrapper + select').length > 0) {
                clearInterval(getClass);
                initializeCode();
            }
        }, 100);
        
        function initializeCode() {

        $.getScript('https://unpkg.com/flickity@2.3.0/dist/flickity.pkgd.min.js', function() {
            var $carousel1 = $('.product_gallery_nav').flickity({});
            var $carousel2 = $('.product_gallery').flickity({});
            $carousel1.flickity('destroy');
            $carousel2.flickity('destroy');

            $('.productPage .product_gallery .gallery-cell img[data-index="0"]').closest('.gallery-cell').remove()
            $('.product_gallery').flickity({
                wrapAround: true,
            });

            $('.productPage .flickity-page-dots .dot').each(function(index, data) {
                // debugger
                $(this).attr('style','color:'+ProductDetails[index].color);
                $(this).attr('data-pname',ProductDetails[index].pname);
            });
        });

        $('#pagecontent + div >.sixteen.columns').after($('.ig-custom--template h1.product_name'));
        $('.productPage .selector-wrapper + select').addClass('new_selectBox');

        var selectBox=  $('.swatch_options').prev();
        $('.purchase-details').prepend(selectBox);

        $(document).on('change', '.new_selectBox', function() {
            var currentItem = $(this).prop('selectedIndex');
            $('.productPage .flickity-page-dots li').eq(currentItem).trigger('click');
            
        });

        function checkIndex() {
            var indexNumber = $('.productPage .flickity-page-dots .dot.is-selected').index();
            $('.new_selectBox option').eq(indexNumber).prop('selected', true);
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