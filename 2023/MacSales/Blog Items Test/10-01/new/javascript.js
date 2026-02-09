var selector = jQuery('.yarpp-related');

function clamshellCode() {
    jQuery('body').addClass('clamshellCode_iv');

    // Put your test code here
    selector.before(`<div class="products_Mentioned">
    <h2>Products Mentioned in Article</h2>
        <ul>
            <li>
                <div class="img_wrapper">
                    <img src="//eshop.macsales.com/images/_gallery_/bin/APLMD506LLA-pimid42510-lg.jpg" alt="85W Apple MagSafe">
                </div>
                <h3>85W Apple MagSafe 2</h3>
                <a href="https://eshop.macsales.com/item/Apple/MD506LLA/">Learn More</a>
            </li>
            <li>
                <div class="img_wrapper">
                    <img src="//eshop.macsales.com/images/_gallery_/bin/OWCCBLTB4C1_0M-pimid57378-lg.jpg" alt="Thunderbolt Cable<">
                </div>
                <h3>Thunderbolt Cable</h3>
                <a href="https://eshop.macsales.com/item/OWC/CBLTB4C1.0M/">Learn More</a>
            </li>
            <li>
                <div class="img_wrapper">
                    <img src="//eshop.macsales.com/images/_gallery_/bin/OWCTCCADPU3-pimid2387-lg.jpg" alt="USB-A to USB-C Adapter">
                </div>
                <h3>USB-A to USB-C Adapter</h3>
                <a href="https://eshop.macsales.com/item/OWC/TCCADPU3/">Learn More</a>
            </li>
            <li>
                <div class="img_wrapper">
                    <img src="//eshop.macsales.com/images/_gallery_/bin/RAI10038-pimid56046-lg.jpg" alt="Rain Design mTower Stand9">
                </div>
                <h3>Rain Design mTower Stand</h3>
                <a href="https://eshop.macsales.com/item/Rain%20Design/10038/">Learn More</a>
            </li>
        </ul>
    </div>`);
}
function oldipadCode() {
    jQuery('body').addClass('oldipadCode_iv');

    // Put your test code here
    selector.before(`<div class="products_Mentioned">
    <h2>Products Mentioned in Article</h2>
        <ul>
            <li>
                <div class="img_wrapper">
                    <img src="/images/_inventory_/300x300/APLMD818ZMA.jpeg" alt="Apple Lightning to USB Cable">
                </div>
                <h3>Apple Lightning to USB Cable</h3>
                <a href="https://eshop.macsales.com/item/Apple/MD818ZMA/">Learn More</a>
            </li>
            <li>
                <div class="img_wrapper">
                    <img src="//eshop.macsales.com/images/_gallery_/bin/NWTNUSTALYPAD-pimid46298-lg.jpg" alt="Tablet Stand for Apple iPad">
                </div>
                <h3>Tablet Stand for Apple iPad</h3>
                <a href="https://eshop.macsales.com/item/NewerTech/NUSTALYPAD/">Learn More</a>
            </li>
            <li>
                <div class="img_wrapper">
                    <img src="/images/_inventory_/300x300/UIGE1J02XXXXXXA.jpg" alt="New & Used iPads">
                </div>
                <h3>New & Used iPads</h3>
                <a href="https://eshop.macsales.com/search/?q=New+%26+Used+iPads">Learn More</a>
            </li>
            <li>
                <div class="img_wrapper">
                    <img src="/images/_inventory_/300x300/BLLBLUUSIB01GR.jpg" alt="iPad Accessories">
                </div>
                <h3>iPad Accessories</h3>
                <a href="https://eshop.macsales.com/search/?filter.catidpath=3776">Learn More</a>
            </li>
        </ul>
    </div>`);
}



// Load code just for Desktop 
var url = window.location.href;
    url = url.split( '?' )[0];
    url = url.split( '#' )[0];

    if (!jQuery('body').hasClass('blogItems_test')) {
        jQuery('body').addClass('blogItems_test');
    
        if (url == "https://eshop.macsales.com/blog/64640-how-to-use-your-mac-laptop-in-closed-display-clamshell-mode/"){  
            clamshellCode()

        } else if (url == "https://eshop.macsales.com/blog/63303-10-ways-to-reuse-an-old-ipad/"){  
            oldipadCode()
        }
    }
// Load code just for Desktop over