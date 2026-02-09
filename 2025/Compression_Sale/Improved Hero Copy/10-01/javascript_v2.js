function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-home-hero')) {
        document.querySelector('body').classList.add('iv-home-hero');

		// Hero section 
        const heroContent = `
            <div class="iv-hero">
                <div class="container-fluid"> 
                    <h1>Your Trusted Source for Compression Wear</h1>
                    <p>Premium quality compression socks, stockings, sleeves, and wraps from top brands at <u>unbeatable prices.</u></p>
                    <ul class="iv-hero-list">
                        <li><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Compression_Sale/truckWhite.png"><span>Free U.S. Shipping & Fast Delivery</span></li>
                        <li><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Compression_Sale/recycleWhite.png"><span>100-Day Hassle-Free Returns</span></li>
                        <li><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Compression_Sale/roundDollar.png"><span>Low Price Guarantee</span></li>
                    </ul>
                    <div class="iv-hero-button">
                        <a class="product-Finder blue-button" href="javascript:;">Product Finder</a>
                        <a class="red-button" href="/collections/clearance">Shop Clearance</a>
                    </div>
                </div>
            </div>`;

        if(!document.querySelector('.iv-hero')){
            document.querySelector('.slider-content .slider-middle').insertAdjacentHTML('afterbegin', heroContent);
        };

        document.querySelector('.iv-home-hero .product-Finder').addEventListener('click', function() {
            document.querySelector('[data-src="#productfinder"]').click();
        })

        document.querySelector('.sonar-wrapper').style.display = 'none';

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
