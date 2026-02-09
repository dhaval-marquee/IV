// Fetch data function from API
function loadFeaturedProducts(apiUrl, containerSelector, productClass) {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.status}`);
            }
            return response.text();
        })
        .then(FeaturedProducts => {
            // Append
            document.querySelector(containerSelector).insertAdjacentHTML('beforeend', FeaturedProducts);

            // Create a tag product
            var productWrapElements = document.querySelectorAll(".featured-products .product-specials__wrap");
            productWrapElements.forEach(function(productWrapElement) {
                var existingLink = productWrapElement.querySelector("a.product-link");
                if (!existingLink) {
                    var newLink = document.createElement("a");
                    newLink.classList.add('product-link');
                    newLink.innerHTML = productWrapElement.innerHTML;
                    productWrapElement.innerHTML = "";
                    productWrapElement.appendChild(newLink);
                    var existingLink = productWrapElement.querySelector(".featuredProducts .featured-products .product-specials__wrap > .product-link a");
                    var hrefAttribute = existingLink ? existingLink.getAttribute("href") : "";
                    newLink.setAttribute("href", hrefAttribute);
                }
            });
        })
        .catch(error => {
            console.error(`Fetch error for ${productClass} Products:`, error);
        });
}

function loadTestCode() {
    // Body class
    const tagClass = 'featuredProducts';
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains(tagClass)) {
        bodyEle.classList.add(tagClass);

        // Products Structure
        var productsStructure = `<div class="container"><div class="featuredSpecials"><div class="horizontal-scroll__mobile top-45">
            <h2 class="header__title">Featured Specials</h2>
            <div class="horizontal-scroll">
                <h2 style="display:none" class="header__title">External Drives & Enclosures</h2>
                <div class="featured-products owc-products product-specials product-specials__grid-view"></div>
            </div>
        </div>
        </div></div>`;
        if (!document.querySelector('.featured-products')) {
            document.querySelector('.container.horizontal-scroll__mobile.top-32').insertAdjacentHTML('afterend', productsStructure);
        }

        // API URl 
        const apiURL = `//eshop.macsales.com/api/search/load-more/?view=specials&items=`

        // Featured OWC Products
        const OWCProducts = apiURL + "44217,51598,69713,62734,73880,45703";
        loadFeaturedProducts(OWCProducts, '.featured-products.owc-products', 'OWC');

        // Featured Thunderbolt Products
        // const ThunderboltProducts = apiURL + "62734,73880,45703";
        // loadFeaturedProducts(ThunderboltProducts, '.featured-products.thunderbolt-products', 'Thunderbolt');

    }
}
loadTestCode();