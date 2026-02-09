function loadTestCode() {
    if (!jQuery('body').hasClass('blogPage_iv')) {
        jQuery('body').addClass('blogPage_iv');

        // Your test code here
        var text = jQuery('#content-area .post-content > *').length;
        var textByTwo = Math.round(text / 2);

        const newSection = jQuery(`<section class="storage-section">
            <h2>What storage solution are you looking&nbsp;for?</h2>
            <ul class="storage-options">
                <li class="storage-card">
                    <a href="/self-storage/" title="Self Storage Solution">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1732102701/PriceSelfStorage/strorage_solutions.png" alt="Self Storage Solutions" />
                        <p>Self Storage Solutions</p>
                    </a>
                </li>
                <li class="storage-card">
                    <a href="https://www.priceselfstorage.com/self-storage/business-storage/" title="Business Storage Solutions">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1732102701/PriceSelfStorage/business-strorage_solutions.png" alt="Business Storage Solutions" />
                        <p>Business Storage Solutions</p>
                    </a>
                </li>
                <li class="storage-card">
                    <a href="/vehicle-storage/" title="Vehicle, RV &amp; Boat Storage">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1732102700/PriceSelfStorage/Boat-strorage.png" alt="Vehicle, RV & Boat Storage" />
                        <p>Vehicle, RV & Boat Storage</p>
                    </a>
                </li>
            </ul>
            <a href="/locations/" class="storage-btn">Next</a>
        </section>`);
        
        jQuery('#content-area .post-content > *').eq(textByTwo).before(newSection);

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && $('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
