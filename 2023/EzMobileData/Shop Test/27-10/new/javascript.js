function loadTestCode() {
    const tagClass = 'shopTest_iv';
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains(tagClass)) {
        bodyEle.classList.add(tagClass);

        // Hero section
        document.querySelector(`.${tagClass} .image-overlay .heading > split-lines`).textContent = 'The Best Mobile Internet Data Plans Simplified';

        // Banner section
        document.querySelector(`.${tagClass} .shopify-section--collection-banner`).insertAdjacentHTML('afterend', `
        <div class="yellow-banner">
            <div class="container">
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EZMobileData/Landing%20Page%20Test/Canada_flag.png" alt="Canada flag">
                <a href="/products/canada-plan">Looking for Canadian Internet Service? Click Here</a>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EZMobileData/Landing%20Page%20Test/Canada_flag.png" alt="Canada flag">
            </div>
        </div>
        `);

        // Product section
        function loadProductItems() {
            var productItems = document.querySelectorAll(`.${tagClass} .product-item`);
            productItems.forEach(function(productItem) {
                // Product Class
                var titleLink = productItem.querySelector('.product-item-meta__title');
                var link = titleLink.getAttribute('href').split('/')[2].split('plan')[0];
                productItem.classList.add('product-' + link + 'plan');

                // Product Price
                var price = productItem.querySelector('.price');
                var priceText = price.textContent.split('$')[1].split('.')[0];
                var productPlanPrice = productItem.querySelector('.product-plan-price > strong');
                if (productPlanPrice) {
                    productPlanPrice.textContent = priceText;
                }

                // Product Button Link
                var buttonLink = titleLink.getAttribute('href');
                var addButton = productItem.querySelector('.product-form__add-button');
                if (addButton) {
                    addButton.setAttribute('href', buttonLink);
                }
            });

            // Product List & Button
            var productPlanContent = `
            <ul class="product-plan-list">
                <li>
                    <div class="plan-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z"/></svg></div>
                    <div class="plan-text">No Contract</div>
                </li>
                <li>
                    <div class="plan-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M494.9 96.01c-38.78 0-75.22 15.09-102.6 42.5L320 210.8L247.8 138.5c-27.41-27.41-63.84-42.5-102.6-42.5C65.11 96.01 0 161.1 0 241.1v29.75c0 80.03 65.11 145.1 145.1 145.1c38.78 0 75.22-15.09 102.6-42.5L320 301.3l72.23 72.25c27.41 27.41 63.84 42.5 102.6 42.5C574.9 416 640 350.9 640 270.9v-29.75C640 161.1 574.9 96.01 494.9 96.01zM202.5 328.3c-15.31 15.31-35.69 23.75-57.38 23.75C100.4 352 64 315.6 64 270.9v-29.75c0-44.72 36.41-81.13 81.14-81.13c21.69 0 42.06 8.438 57.38 23.75l72.23 72.25L202.5 328.3zM576 270.9c0 44.72-36.41 81.13-81.14 81.13c-21.69 0-42.06-8.438-57.38-23.75l-72.23-72.25l72.23-72.25c15.31-15.31 35.69-23.75 57.38-23.75C539.6 160 576 196.4 576 241.1V270.9z"/></svg></div>
                    <div class="plan-text">Unthrottled Service with No Speed Caps</div>
                </li>
                <li>
                    <div class="plan-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M463.1 32h-416C21.49 32-.0001 53.49-.0001 80v352c0 26.51 21.49 48 47.1 48h416c26.51 0 48-21.49 48-48v-352C511.1 53.49 490.5 32 463.1 32zM111.1 408c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 408zM111.1 280c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM111.1 152c0 4.418-3.582 8-8 8H55.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8L111.1 152zM351.1 400c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V400zM351.1 208c0 8.836-7.164 16-16 16H175.1c-8.836 0-16-7.164-16-16v-96c0-8.838 7.164-16 16-16h160c8.836 0 16 7.162 16 16V208zM463.1 408c0 4.418-3.582 8-8 8h-47.1c-4.418 0-7.1-3.582-7.1-8l0-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V408zM463.1 280c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8v-48c0-4.418 3.582-8 8-8h47.1c4.418 0 8 3.582 8 8V280zM463.1 152c0 4.418-3.582 8-8 8h-47.1c-4.418 0-8-3.582-8-8l0-48c0-4.418 3.582-8 7.1-8h47.1c4.418 0 8 3.582 8 8V152z"/></svg></div>
                    <div class="plan-text">Stream your favorite TV and Movies</div>
                </li>
                <li>
                    <div class="plan-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M246.7 0c5.125 0 11.34 3.609 13.9 8.062L365.7 192h114.3C515.3 192 576 220.7 576 256s-60.66 64-96 64h-114.3l-105.1 183.9C257.7 508.9 252.4 512 246.7 512H181.2c-10.63 0-18.31-10.19-15.37-20.41L214.9 320H111.1l-43.19 57.59C65.77 381.6 61.02 384 55.99 384h-40c-10.41 0-18.03-9.781-15.5-19.88L31.99 256L.4885 147.9C-2.043 137.8 5.582 128 15.99 128h40c5.031 0 9.781 2.375 12.81 6.406L111.1 192h102.9L165.8 20.39C162.9 10.17 170.6 0 181.2 0H246.7z"/></svg></div>
                    <div class="plan-text">Ultra Portable Hotspot goes with you on 10+ hours of battery</div>
                </li>
                <li>
                    <div class="plan-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M520 224l-108.7-135.9C399.1 72.85 380.7 64 361.3 64H155.4c-26.25 0-49.75 15.88-59.5 40.25L48 226.3C20.5 233.4 0 258.3 0 288v112c0 17.67 14.33 32 32 32h33.61C73.27 477.3 112.5 512 160 512s86.73-34.65 94.39-80h131.2C393.3 477.3 432.5 512 480 512s86.73-34.65 94.39-80H608c17.67 0 32-14.33 32-32v-56C640 277.7 586.3 224 520 224zM160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48c26.5 0 48 21.5 48 48S186.5 464 160 464zM224 224H116.9l38.5-96H224V224zM272 224V128h89.25l76.75 96H272zM480 464c-26.5 0-48-21.5-48-48s21.5-48 48-48c26.5 0 48 21.5 48 48S506.5 464 480 464z"/></svg></div>
                    <div class="plan-text">Great for RVs, Camping, Truck Drivers, and more</div>
                </li>
                <li>
                    <div class="plan-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 352c53.03 0 96-42.97 96-96h-80C199.2 256 192 248.8 192 240S199.2 224 208 224H288V192h-80C199.2 192 192 184.8 192 176S199.2 160 208 160H288V127.1h-80c-8.836 0-16-7.164-16-16s7.164-16 16-16L288 96c0-53.03-42.97-96-96-96s-96 42.97-96 96v160C96 309 138.1 352 192 352zM344 192C330.7 192 320 202.7 320 215.1V256c0 73.33-61.97 132.4-136.3 127.7c-66.08-4.169-119.7-66.59-119.7-132.8L64 215.1C64 202.7 53.25 192 40 192S16 202.7 16 215.1v32.15c0 89.66 63.97 169.6 152 181.7V464H128c-18.19 0-32.84 15.18-31.96 33.57C96.43 505.8 103.8 512 112 512h160c8.222 0 15.57-6.216 15.96-14.43C288.8 479.2 274.2 464 256 464h-40v-33.77C301.7 418.5 368 344.9 368 256V215.1C368 202.7 357.3 192 344 192z"/></svg></div>
                    <div class="plan-text">Create and Stream Video</div>
                </li>
                <li>
                    <div class="plan-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M62.6 2.3C46.2-4.3 27.6 3.6 20.9 20C7.4 53.4 0 89.9 0 128s7.4 74.6 20.9 108c6.6 16.4 25.3 24.3 41.7 17.7S86.9 228.4 80.3 212C69.8 186.1 64 157.8 64 128s5.8-58.1 16.3-84C86.9 27.6 79 9 62.6 2.3zm450.8 0C497 9 489.1 27.6 495.7 44C506.2 69.9 512 98.2 512 128s-5.8 58.1-16.3 84c-6.6 16.4 1.3 35 17.7 41.7s35-1.3 41.7-17.7c13.5-33.4 20.9-69.9 20.9-108s-7.4-74.6-20.9-108C548.4 3.6 529.8-4.3 513.4 2.3zM340.1 165.2c7.5-10.5 11.9-23.3 11.9-37.2c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 13.9 4.4 26.7 11.9 37.2L98.9 466.8c-7.3 16.1-.2 35.1 15.9 42.4s35.1 .2 42.4-15.9L177.7 448H398.3l20.6 45.2c7.3 16.1 26.3 23.2 42.4 15.9s23.2-26.3 15.9-42.4L340.1 165.2zM369.2 384H206.8l14.5-32H354.7l14.5 32zM288 205.3L325.6 288H250.4L288 205.3zM163.3 73.6c5.3-12.1-.2-26.3-12.4-31.6s-26.3 .2-31.6 12.4C109.5 77 104 101.9 104 128s5.5 51 15.3 73.6c5.3 12.1 19.5 17.7 31.6 12.4s17.7-19.5 12.4-31.6C156 165.8 152 147.4 152 128s4-37.8 11.3-54.4zM456.7 54.4c-5.3-12.1-19.5-17.7-31.6-12.4s-17.7 19.5-12.4 31.6C420 90.2 424 108.6 424 128s-4 37.8-11.3 54.4c-5.3 12.1 .2 26.3 12.4 31.6s26.3-.2 31.6-12.4C466.5 179 472 154.1 472 128s-5.5-51-15.3-73.6z"/></svg></div>
                    <div class="plan-text">4G LTE Coverage 99% of Americans 5G coverage at 98% of Americans and still growing!</div>
                </li>
                <li>
                    <div class="plan-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" style="transform: scaleX(-1);"><path d="M0 64v384c0 35.25 28.75 64 64 64h256c35.25 0 64-28.75 64-64V128l-128-128H64C28.75 0 0 28.75 0 64zM224 256H160V192h64V256zM320 256h-64V192h32c17.75 0 32 14.25 32 32V256zM256 384h64v32c0 17.75-14.25 32-32 32h-32V384zM160 384h64v64H160V384zM64 384h64v64H96c-17.75 0-32-14.25-32-32V384zM64 288h256v64H64V288zM64 224c0-17.75 14.25-32 32-32h32v64H64V224z"/></svg></div>
                    <div class="plan-text">Static IP for Hardcore Gamers</div>
                </li>
                <li>
                    <div class="plan-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.6 181.9c-10.28-8.344-25.41-6.875-33.75 3.406C242.4 195.6 243.9 210.7 254.2 219.1c11.31 9.25 17.81 22.69 17.81 36.87c0 14.19-6.5 27.62-17.81 36.87c-10.28 8.406-11.78 23.53-3.375 33.78c4.719 5.812 11.62 8.812 18.56 8.812c5.344 0 10.75-1.781 15.19-5.406c22.53-18.44 35.44-45.4 35.44-74.05S307.1 200.4 284.6 181.9zM345.1 107.1c-10.22-8.344-25.34-6.907-33.78 3.343c-8.406 10.25-6.906 25.37 3.344 33.78c33.88 27.78 53.31 68.18 53.31 110.9s-19.44 83.09-53.31 110.9c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.438C390.2 367.1 416 313.1 416 255.1S390.2 144.9 345.1 107.1zM406.4 33.15c-10.22-8.344-25.34-6.875-33.78 3.344c-8.406 10.25-6.906 25.37 3.344 33.78C431.9 116.1 464 183.8 464 255.1s-32.09 139.9-88.06 185.7c-10.25 8.406-11.75 23.53-3.344 33.78c4.75 5.781 11.62 8.781 18.56 8.781c5.375 0 10.75-1.781 15.22-5.438C473.5 423.8 512 342.6 512 255.1S473.5 88.15 406.4 33.15zM151.3 174.6C161.1 175.6 172.1 169.5 176 159.6l33.75-84.38C214 64.35 209.1 51.1 200.2 45.86l-67.47-42.17C123.2-2.289 110.9-.8945 102.9 7.08C-34.32 144.3-34.31 367.7 102.9 504.9c7.982 7.984 20.22 9.379 29.75 3.402l67.48-42.19c9.775-6.104 13.9-18.47 9.598-29.3L176 352.5c-3.945-9.963-14.14-16.11-24.73-14.97l-53.24 5.314C78.89 286.7 78.89 225.4 98.06 169.3L151.3 174.6z"/></svg></div>
                    <div class="plan-text">Bring Your Own Device or purchase a device from us!</div>
                </li>
            </ul>
            <a href="#" class="product-form__add-button button button--primary button--full">Add to cart</a>
            `;

            var planRed = document.querySelector('.product-red-plan');
            if (planRed && document.querySelectorAll('.product-red-plan .product-plan-content').length == 0) {
                planRed.querySelector('.product-item-meta__title').innerHTML = 'The Ultimate Coverage';
                planRed.insertAdjacentHTML('beforeend', `
                <div class="product-plan-content">
                    <div class="product-plan-details">
                        <div class="product-plan-left-box">
                            <div class="product-plan-price"><strong>160</strong>/mo</div>
                            <div class="product-plan-tax">+ tax</div>
                        </div>
                        <div class="product-plan-right-box">
                            <strong>Unlimited GB</strong>
                            <p>Unlimited Data</p>
                            <p>Unlimited Downloads</p>
                            <p>No Speed Caps or Throttling</p>
                        </div>
                    </div>
                    ` + productPlanContent + `
                </div>
                `);
            }

            var planBlue = document.querySelector('.product-blue-plan');
            if (planBlue && document.querySelectorAll('.product-blue-plan .product-plan-content').length == 0) {
                planBlue.querySelector('.product-item-meta__title').innerHTML = 'The Most Popular <u>Unlimited</u> Data Plan';
                planBlue.insertAdjacentHTML('beforeend', `
                <div class="product-plan-content">
                    <div class="product-plan-details">
                        <div class="product-plan-left-box">
                            <div class="product-plan-price"><strong>140</strong>/mo</div>
                            <div class="product-plan-tax">+ tax</div>
                        </div>
                        <div class="product-plan-right-box">
                            <strong>Unlimited GB</strong>
                            <p>Unlimited Data</p>
                            <p>Unlimited Downloads</p>
                            <p>No Speed Caps or Throttling</p>
                        </div>
                    </div>
                    ` + productPlanContent + `
                </div>
                `);
            }

            var planPink = document.querySelector('.product-pink-plan');
            if (planPink && document.querySelectorAll('.product-pink-plan .product-plan-content').length == 0) {
                planPink.querySelector('.product-item-meta__title').innerHTML = 'The Essential Data Plan';
                planPink.insertAdjacentHTML('beforeend', `
                <div class="product-plan-content">
                    <div class="product-plan-details">
                        <div class="product-plan-left-box">
                            <div class="product-plan-price"><strong>120</strong>/mo</div>
                            <div class="product-plan-tax">+ tax</div>
                        </div>
                        <div class="product-plan-right-box">
                            <strong>800 GB</strong>
                            <p>compare to 512 GB average household user per month</p>
                            <p>No Speed Caps or Throttling</p>
                        </div>
                    </div>
                    ` + productPlanContent + `
                </div>
                `);
            }
        }

        function productObserver(){
            var target = document.querySelector('#facet-main');
            const config = {
                childList: true, characterData: true, subtree: true, attributes: true,
            };
            var running = false; 
            const callback = function(mutationsList, observer) {
                for (let mutation of mutationsList) {

                    if(running) return;

                    loadProductItems();

                    running = true;
                    setTimeout(function(){running = false;}, 100);
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(target, config);
        }
        productObserver();

        // Trust Bar
        var trustBar = document.querySelector(`.${tagClass} .text-with-icons__item:last-child`);
        trustBar.querySelector('.text-with-icons__icon-wrapper').innerHTML = '<svg class="icon icon--picto-chat" width="256" height="256" viewBox="0 0 256 256"><g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" ><path d="M 36.812 70.298 c -0.829 0 -1.5 -0.672 -1.5 -1.5 V 48.611 l -4.522 2.901 c -0.698 0.447 -1.625 0.245 -2.073 -0.452 s -0.245 -1.626 0.453 -2.073 l 6.832 -4.384 c 0.461 -0.296 1.049 -0.316 1.529 -0.054 c 0.481 0.263 0.781 0.768 0.781 1.316 v 22.932 C 38.312 69.626 37.64 70.298 36.812 70.298 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 56.26 55.832 c -0.828 0 -1.5 0.672 -1.5 1.5 v 3.335 h -7.621 l 7.155 -14.123 c 0.375 -0.739 0.079 -1.641 -0.66 -2.016 c -0.734 -0.374 -1.641 -0.08 -2.016 0.66 l -8.259 16.301 c -0.236 0.465 -0.213 1.019 0.06 1.463 c 0.272 0.444 0.756 0.715 1.278 0.715 H 54.76 v 6.272 c 0 0.828 0.672 1.5 1.5 1.5 s 1.5 -0.672 1.5 -1.5 V 57.332 C 57.76 56.504 57.088 55.832 56.26 55.832 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /><path d="M 88.5 17.182 H 68.8 v -4.698 c 0 -2.695 -2.193 -4.888 -4.889 -4.888 s -4.888 2.193 -4.888 4.888 v 4.698 H 30.977 v -4.698 c 0 -2.695 -2.193 -4.888 -4.889 -4.888 c -2.695 0 -4.888 2.193 -4.888 4.888 v 4.698 H 1.5 c -0.829 0 -1.5 0.671 -1.5 1.5 v 62.222 c 0 0.828 0.671 1.5 1.5 1.5 h 87 c 0.828 0 1.5 -0.672 1.5 -1.5 V 18.682 C 90 17.854 89.328 17.182 88.5 17.182 z M 62.023 12.484 c 0 -1.041 0.847 -1.888 1.888 -1.888 s 1.889 0.847 1.889 1.888 v 9.751 c 0 1.042 -0.848 1.889 -1.889 1.889 s -1.888 -0.847 -1.888 -1.889 V 12.484 z M 24.2 12.484 c 0 -1.041 0.847 -1.888 1.888 -1.888 c 1.042 0 1.889 0.847 1.889 1.888 v 9.751 c 0 1.042 -0.847 1.889 -1.889 1.889 c -1.041 0 -1.888 -0.847 -1.888 -1.889 V 12.484 z M 21.2 20.182 v 2.054 c 0 2.696 2.193 4.889 4.888 4.889 c 2.696 0 4.889 -2.193 4.889 -4.889 v -2.054 h 28.046 v 2.054 c 0 2.696 2.192 4.889 4.888 4.889 s 4.889 -2.193 4.889 -4.889 v -2.054 H 87 v 12.837 H 3 V 20.182 H 21.2 z M 3 79.404 V 36.019 h 84 v 43.385 H 3 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: currentColor; fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" /></g></svg>';
        trustBar.querySelector('.text-with-icons__content-wrapper .heading').textContent = '14 Day Trial';
        var trustBarContent = trustBar.querySelectorAll('.text-with-icons__content-wrapper p:not(.heading)');
        trustBarContent.forEach(function(content) {
            content.textContent = 'We offer a 14 day, risk free, money-back guarantee on our service and devices.';
        });
    }
}
loadTestCode();