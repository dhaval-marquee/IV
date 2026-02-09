function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-cart')) {
        document.querySelector('body').classList.add('iv-cart');

        // 1. Please remove the sections that are highlighted in the screenshot below.
        document.querySelector('.vc-1').closest('.container-fluid').remove();
        document.querySelector('.two-column-left').remove();
        document.querySelector('.ft_top').remove();
        document.querySelector('#recently-viewed-products').remove();


        // 2. Below the product, add this section from the homepage
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(xhttp.responseText.match(/<body[^>]*>((.|[\n\r])*)<\/body>/)[0], 'text/html');
                var sectionHtml = doc.querySelector('.highlights-banners-container');

                if(!document.querySelector('.highlights-banners-container')){
                    document.querySelector('.cartitems .cartitems--list').insertAdjacentElement('afterend', sectionHtml);
                }
            }
        };
        xhttp.open("GET", "https://www.compressionsale.com/", true);
        xhttp.send();

        function updateULClass() {
            var ulElement = document.querySelector('.iv-cart .shopify-cleanslate > div ul');
            
            if (!ulElement) return;
            var liCount = ulElement.querySelectorAll('li').length;
            ulElement.classList.remove('one-box', 'two-box', 'three-box');

            if (liCount === 1) {
                ulElement.classList.add('one-box');
            } else if (liCount === 2) {
                ulElement.classList.add('two-box');
            } else if (liCount === 3) {
                ulElement.classList.add('three-box');
            }
        }

        var checkElement = setInterval(function() {
            var targetElement = document.querySelector('.iv-cart .shopify-cleanslate > div ul');
            
            if (targetElement) {
                clearInterval(checkElement); 
                updateULClass();
            }
        }, 2000);



    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);