function loadcode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('iv_desktop')) {
        bodyEle.classList.add('iv_desktop');
        
        // Put your test code here
        var selector = document.querySelectorAll('.iv_desktop .main-product__heading')[0];
        var div = selector.appendChild(document.createElement("span"));
        while(selector.firstChild !== div)
        div.appendChild(selector.firstChild);
        
        // Move code
        var addBeforeThis1 = document.querySelector('.iv_desktop .main-product__heading');
        var newItem1 = document.querySelector('.iv_desktop .main-product__overview .product__block .trustpilot-widget');
        addBeforeThis1.parentNode.insertBefore(newItem1,addBeforeThis1);

        document.querySelector('.iv_desktop h3.product__block').textContent = 'Removes up to 99% of airborne allergens, dust, pollen, mold, and odors';

        var addBeforeThis2 = document.querySelector('.iv_desktop .main-product__variants fieldset');
        var newItem2 = document.createElement('ul');
        newItem2.innerHTML = ' <li></li>\
            <li>5 layers of protection -  HEPA filter, carbon filter, silver ion filter, UV light, and Bi-Polar ionization</li>\
            <li>Lightweight and easy to move</li>\
            <li>Includes pre-installed filter</li>\
            <li>Limited stock - order now!</li>';
        addBeforeThis2.appendChild(newItem2);


        var addBeforeThis3 = document.querySelector('.main-product__product-description');
        var newItem3 = document.createElement('ul');
        newItem3.className = "return_policies";
        newItem3.innerHTML = '<li>\
            <span class="img_wrapper">\
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659943695/Air_Oasis/Free_Shipping.png" alt="Shipping Truck Icon" width="120">\
            </span>\
            <span>Free Shipping</span>\
        </li>\
        <li>\
            <span class="img_wrapper">\
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659943694/Air_Oasis/Easy_Returns.png" alt="Return Item Image" width="75" >\
            </span>\
            <span>Easy 60-Day Returns</span>\
        </li>\
        <li>\
            <span class="img_wrapper">\
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1659943695/Air_Oasis/Lifetime_Warranty.png" alt="Warranty badge" width="70" >\
            </span>\
            <span>Lifetime Warranty</span>\
        </li>';
        
        addBeforeThis3.parentNode.insertBefore(newItem3,addBeforeThis3);

        function changeListText() {
            document.querySelectorAll('.iv_desktop .main-product__variants ul li:first-child')[0].innerHTML = document.querySelectorAll('.main-product__richtext > div')[0].innerHTML;
        }
        
        function trackSmallSelect() {
            console.log('text changed')
            if(document.querySelector('.main-product__select').value == 'Small') {
                document.querySelector('.iv_desktop .main-product__variants ul > li:first-child').innerHTML = '<strong>Small</strong> - Up to 250 sq ft. - perfect for bedroom, small offices, and small basements';
            }
        }


        function observerForLoadingBlockDesktop(){
            // observer binding
            var target = document.querySelectorAll('.main-product__price')[0];
            const config = {
                childList: true, characterData: true, subtree: true, attributes: true,
            };
            var running = false; 
            var t;
            const callback = function(mutationsList, observer) {
                for (let mutation of mutationsList) {
                    if(running) return;
                    console.log('checkPrice');
                   
                    changeListText();
                    trackSmallSelect();

                    running = true;
                    setTimeout(function(){running = false;}, 100);
                }
            };
            const observer = new MutationObserver(callback);
            observer.observe(target, config);
            // End observer binding
        }

        observerForLoadingBlockDesktop();

        setTimeout(() => {
            document.querySelector('.main-product__price').classList.add('working');
        }, 1000);

        var addBeforeThis4 = document.querySelector('.main-product__price').nextElementSibling;
        var newItem4 = document.querySelector('.product-form__installments');
        addBeforeThis4.parentNode.insertBefore(newItem4,addBeforeThis4);

        var getSection = setInterval(() => {
            if(document.querySelectorAll('.richtext').length > 1) {
                clearInterval(getSection);

                var addBeforeThis5 = document.querySelectorAll('.richtext')[1];
                var newItem5 = document.querySelectorAll('.richtext')[0].parentNode.nextElementSibling.nextElementSibling;
                addBeforeThis5.parentNode.insertBefore(newItem5,addBeforeThis5);
            }
        }, 100);

        var addBeforeThis6 = document.querySelectorAll('#MainContent')[0];
        var newItem6 = document.querySelectorAll('.shopify-section.review')[0];
        addBeforeThis6.appendChild(newItem6);

        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}


try {
    // Load code just for Desktop 
    if (window.matchMedia("(min-width: 1025px)").matches) {

        loadcode();

        window.addEventListener('resize', function(event) {
            if (window.matchMedia("(max-width: 1024.98px)").matches) {
                location.reload();
            }
        }, true);
    } else {
        window.addEventListener('resize', function(event) {
            if (window.matchMedia("(min-width: 1025px)").matches) {
                location.reload();
            }
        }, true);
    }
    // Load code just for Desktop over


} catch(ex) {

} finally {
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}