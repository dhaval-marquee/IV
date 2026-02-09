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
        var productsStructure = `<div class="container horizontal-scroll__mobile top-45">
            <div class="horizontal-scroll">
                <h2 class="horizontal-scroll__header">Featured OWC Products</h2>
                <div class="featured-products owc-products horizontal-scroll__flex"></div>
            </div>
        </div>
        <div class="container horizontal-scroll__mobile top-45">
            <div class="horizontal-scroll">
                <h2 class="horizontal-scroll__header">Featured Thunderbolt Products</h2>
                <div class="featured-products thunderbolt-products horizontal-scroll__flex"></div>
            </div>
        </div>`;
        if (!document.querySelector('.featured-products')) {
            document.querySelector('.container.horizontal-scroll__mobile.top-32').insertAdjacentHTML('afterend', productsStructure);
        }

        // API URl 
        const apiURL = `//eshop.macsales.com/api/search/load-more/?view=specials&items=`

        // Featured OWC Products
        const OWCProducts = apiURL + "48320,71290,58137";
        loadFeaturedProducts(OWCProducts, '.featured-products.owc-products', 'OWC');

        // Featured Thunderbolt Products
        const ThunderboltProducts = apiURL + "73880,45703,68570";
        loadFeaturedProducts(ThunderboltProducts, '.featured-products.thunderbolt-products', 'Thunderbolt');

    }
}
loadTestCode();