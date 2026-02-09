function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('shopTest_iv')) {
        bodyEle.classList.add('shopTest_iv');
        document.querySelector('.image-overlay .heading > split-lines').textContent = "The Best Mobile Internet Data Plans Simplified";

        document.querySelectorAll('#facet-main .product-item')[0].insertAdjacentHTML('beforeend', `<div class="plan plan-red">
        <div class="plan-head">
            <h2>The Red Plan</h2>
        </div>
        <div class="plan-content">
            <h3 class="plan-subhead">The Ultimate Coverage</h3>
            <div class="plan-details">
                <div class="plan-left-box"><span>$160</span>/mo</div>
                <div class="plan-right-box">
                    <span>Unlimited GB</span>
                    <p>Unlimited Data</p>
                    <p>Unlimited Downloads</p>
                    <p>No Speed Caps or Throttling</p>
                </div>
            </div>
            <ul>
                <li>No Contract</li>
                <li>Unthrottled Service with No Speed Caps</li>
                <li>Stream your favorite TV and Movies</li>
                <li>Ultra Portable Hotspot goes with you on 10+ hours of battery</li>
                <li>Great for RVs, Camping, Truck Drivers, and more</li>
                <li>Create and Stream Video</li>
                <li>4G LTE Coverage 99% of Americans 5G coverage at 98% of Americans and still growing!</li>
                <li>Static IP for Hardcore Gamers</li>
                <li>Bring Your Own Device or purchase a device from us!</li>
            </ul>
        </div>
    </div>`);

                document.querySelector('.shopTest_iv .shopify-section--main-collection').insertAdjacentHTML('afterend', `<section class="banner-yellow">
                <a href="canadian_blue_plan_page.html">Looking for Canadian Internet Service? Click Here</a>
            </section>
            <section class="plans">
                <div class="plans-container">
                    <div class="plane-wrapper">
                        <div class="plan plan-pink">
                            <div class="plan-head">
                                <h2>The Pink Plan</h2>
                            </div>
                           <div class="plan-content">
                                <h3 class="plan-subhead">The Essential Data Plan</h3>
                                <div class="plan-details">
                                    <div class="plan-left-box">
                                       <span>$120</span>/mo
                                    </div>
                                    <div class="plan-right-box">
                                        <span>800 GB</span>
                                        <p>No Speed Caps or Throttling</p>
                                    </div>
                                </div>
                                <ul>
                                    <li>No Contract</li>
                                    <li>Unthrottled Service with No Speed Caps</li>
                                    <li>Stream your favorite TV and Movies</li>
                                    <li>Ultra Portable Hotspot goes with you on 10+ hours of battery</li>
                                    <li>Great for RVs, Camping, Truck Drivers, and more</li>
                                    <li>Create and Stream Video</li>
                                    <li>4G LTE Coverage 99% of Americans 5G coverage at 98% of Americans and still growing!</li>
                                    <li>Static IP for Hardcore Gamers</li>
                                    <li>Bring Your Own Device or purchase a device from us!</li>
                                </ul>
                                <button id="StickyAddToCart" class="product-form__add-button button button--primary">
                                    <span class="loader-button__text">Add to cart</span>
                                </button>
                           </div>
                        </div>
                        <div class="plan plan-blue">
                            <div class="plan-head">
                                <h2>The Blue Plan</h2>
                            </div>
                            <div class="plan-content">
                                <h3 class="plan-subhead">The Most Popular (Unlimited) Data Plan</h3>
                                <div class="plan-details">
                                    <div class="plan-left-box"><span>$140</span>/mo</div>
                                    <div class="plan-right-box">
                                        <span>Unlimited GB</span>
                                        <p>Unlimited Data</p>
                                        <p>Unlimited Downloads</p>
                                        <p>No Speed Caps or Throttling</p>
                                    </div>
                                </div>
                                <ul>
                                    <li>No Contract</li>
                                    <li>Unthrottled Service with No Speed Caps</li>
                                    <li>Stream your favorite TV and Movies</li>
                                    <li>Ultra Portable Hotspot goes with you on 10+ hours of battery</li>
                                    <li>Great for RVs, Camping, Truck Drivers, and more</li>
                                    <li>Create and Stream Video</li>
                                    <li>4G LTE Coverage 99% of Americans 5G coverage at 98% of Americans and still growing!</li>
                                    <li>Static IP for Hardcore Gamers</li>
                                    <li>Bring Your Own Device or purchase a device from us!</li>
                                </ul>
                            </div>
                        </div>
                        <div class="plan plan-red">
                            <div class="plan-head">
                                <h2>The Red Plan</h2>
                            </div>
                            <div class="plan-content">
                                <h3 class="plan-subhead">The Ultimate Coverage</h3>
                                <div class="plan-details">
                                    <div class="plan-left-box"><span>$160</span>/mo</div>
                                    <div class="plan-right-box">
                                        <span>Unlimited GB</span>
                                        <p>Unlimited Data</p>
                                        <p>Unlimited Downloads</p>
                                        <p>No Speed Caps or Throttling</p>
                                    </div>
                                </div>
                                <ul>
                                    <li>No Contract</li>
                                    <li>Unthrottled Service with No Speed Caps</li>
                                    <li>Stream your favorite TV and Movies</li>
                                    <li>Ultra Portable Hotspot goes with you on 10+ hours of battery</li>
                                    <li>Great for RVs, Camping, Truck Drivers, and more</li>
                                    <li>Create and Stream Video</li>
                                    <li>4G LTE Coverage 99% of Americans 5G coverage at 98% of Americans and still growing!</li>
                                    <li>Static IP for Hardcore Gamers</li>
                                    <li>Bring Your Own Device or purchase a device from us!</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="body">
            </section>
            <section class="trust-bar">
                <p>We offer a 14-day, risk-free, money-back guarantee on our service and devices</p>
            </section>`);

    }
}

loadTestCode();