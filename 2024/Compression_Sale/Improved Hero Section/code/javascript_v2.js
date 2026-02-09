function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-home')) {
        document.querySelector('body').classList.add('iv-home');

				// Hero section 
        const heroContent = `
            <div class="iv-hero">
                <div class="container-fluid"> 
                    <h1>Your Trusted Source for Compression Wear</h1>
                    <div class="iv-hero-left">
                        <p>Premium quality compression socks, stockings, sleeves, and wraps from top brands at <u>unbeatable prices.</u></p>
                        <ul class="iv-hero-list">
                            <li><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Compression_Sale/truck_blue.png"><span>Free U.S. Shipping & Fast Delivery</span></li>
                            <li><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Compression_Sale/recycle_blue.png"><span>100-Day Hassle-Free Returns</span></li>
                            <li><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Compression_Sale/round_dollar_blue.png"><span>Low Price Guarantee</span></li>
                        </ul>
                        <div class="iv-hero-button">
                            <a class="product-Finder blue-button" href="javascript:;">Product Finder</a>
                            <a class="red-button" href="/collections/clearance">Shop Clearance</a>
                        </div>
                    </div>
                    <div class="iv-hero-right">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Compression_Sale/TheraSport-blue-and-pink.jpg" alt="TheraSport blue and pink">
                        <div class="iv-hero-button iv-hero-button-mobile">
                            <a class="product-Finder blue-button" href="javascript:;">Product Finder</a>
                            <a class="red-button" href="/collections/clearance">Shop Clearance</a>
                        </div>
                    </div>
                </div>
            </div>`;

        if(!document.querySelector('.iv-hero')){
            document.querySelector('.iv-home header').insertAdjacentHTML('afterend', heroContent);
        };

        document.querySelector('.iv-home .slider-content .slider-right .brand-title').innerText = 'Our Best Sellers';

        document.querySelectorAll('.iv-hero-button .product-Finder').forEach(button => {
            button.addEventListener('click', function() {
                document.querySelector('[data-src="#productfinder"]').click();
            });
        });
        

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);