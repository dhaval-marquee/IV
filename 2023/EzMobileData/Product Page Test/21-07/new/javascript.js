function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('product_iv')) {
        bodyEle.classList.add('product_iv');

        document.querySelector('.product__media').insertAdjacentElement('beforebegin', document.querySelector('.product-meta__title'));
        document.querySelector('.product-meta__price-list-container').insertAdjacentElement('beforebegin', document.querySelector('.product-form .stamped-product-reviews-badge').parentElement);



        var url = window.location.href;
        url = url.split( '?' )[0];
        url = url.split( '#' )[0];

        if (url == "https://ezmobiledata.com/products/red-plan-unlimited"){  
            document.querySelectorAll('.product_iv .product-meta__title')[0].innerHTML = "RED PLAN (UNLIMITED)"

        } else if (url == "https://ezmobiledata.com/products/pink-plan-800-gb"){  
            document.querySelectorAll('.product_iv .product-meta__title')[0].innerHTML = "PINK PLAN 800GB"

        } else if (url == "https://ezmobiledata.com/products/blue-plan-unlimited"){  
            document.querySelectorAll('.product_iv .product-meta__title')[0].innerHTML = "BLUE PLAN (UNLIMITED)"
        }
        else if (url == "https://ezmobiledata.com/products/blue-plan-canada"){  
            document.querySelectorAll('.product_iv .product-meta__title')[0].innerHTML = "BLUE PLAN UNLIMITED <br> (Candian Customers)"
        }
    }
}

if (window.matchMedia("(max-width: 740.98px)").matches) {
    loadTestCode();
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 741px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 740.98px)").matches) {
            location.reload();
        }
    }, true);
}