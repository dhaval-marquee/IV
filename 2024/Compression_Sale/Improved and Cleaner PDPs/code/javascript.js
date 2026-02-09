function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-products')) {
        document.querySelector('body').classList.add('iv-products');

        // Remove Top section 
        if (document.querySelector('.container-fluid .vc-full')) {
            document.querySelector('.container-fluid .vc-full').classList.add('remove');
        }

        // Remove Left Panel
        if (document.querySelector('.main-column .two-column-left')) {
            document.querySelector('.main-column .two-column-left').classList.add('remove');
        }

        // Remove special offer banner
        if (document.querySelector('.spfabanner.hidden-mobile')) {
            document.querySelector('.spfabanner.hidden-mobile').classList.add('remove');
        }

        // Remove recently-viewed-products
        if (document.querySelector('#recently-viewed-products')) {
            document.querySelector('#recently-viewed-products').classList.add('remove');
        }

        // Remove Footer top section
        if (document.querySelector('.ft_top')) {
            document.querySelector('.ft_top').classList.add('remove');
        }

        // Remove add details
        if (document.querySelector('.add-details')) {
            document.querySelector('.add-details').classList.add('remove');
        }
        if (document.querySelector('.fbs')) {
            document.querySelector('.fbs').classList.add('remove');
        }
        if (document.querySelector('.product__cross-sell')) {
            document.querySelector('.product__cross-sell').classList.add('remove');
        }

        // Related products
        if(document.querySelector('#shopify-section-static-product-recommendations')){
            document.querySelector('#shopify-section-static-product-recommendations').classList.add('remove');
        }

        // Below the product, add this section from the homepage
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(xhttp.responseText.match(/<body[^>]*>((.|[\n\r])*)<\/body>/)[0], 'text/html');
                var sectionHtml = doc.querySelector('.highlights-banners-container .highlights-banners');

                if (!document.querySelector('.highlights-banners')) {
                    document.querySelector('.anu_pform').insertAdjacentElement('afterend', sectionHtml);
                }
            }
        };
        xhttp.open("GET", "https://www.compressionsale.com/", true);
        xhttp.send();

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);