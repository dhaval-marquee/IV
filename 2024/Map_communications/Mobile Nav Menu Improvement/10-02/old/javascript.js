function loadTestCode() {
    const tagClass = 'mobile-menu';
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains(tagClass)) {
        bodyEle.classList.add(tagClass);

        // Observer
        function observerElm(target, callbackFn) {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function(mutationsList, observer) {
                callbackFn(mutationsList, observer); 
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        }

        var targetElement = document.querySelector('body');
        observerElm(targetElement, function(mutationsList, observer) {
            mobileMenu();
        });

        // Update input text
        function mobileMenu(){
            var mobileHeader = `<div class="mobile-header">
                <div class="mobile-header-main">
                    <div class="mobile-header-left">
                        <a href="#my-menu" class="block-btn-new">Menu</a>
                        <div id="logo" class="m-all t-1of3 d-2of5" itemscope="" itemtype="http://schema.org/Organization">
                            <a href="https://www.mapcommunications.com">
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2023/10/2023-MapLogo-1.svg" alt="MAP Communications" data-lazy-src="https://www.mapcommunications.com/wp-content/uploads/2023/10/2023-MapLogo-1.svg" data-ll-status="loaded" class="entered lazyloaded"><noscript>
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2023/10/2023-MapLogo-1.svg" alt="MAP Communications"></noscript>
                            </a>
                            <span class="logo-tagline">
                                The First 
                                <a href="https://www.mapcommunications.com/hitrust-certified/">HITRUST</a> Certified Answering
                                Service
                            </span>
                        </div>
                    </div>
                    <div class="mobile-header-right">
                        <a href="https://www.mapcommunications.com/contact-us/request-free-trial/" class="orange-btn trial-button">Request a Free Trial</a>
                        <a href="https://secure.mapcommunications.com/portal" class="user-btn-new" target="_blank"></a>
                    </div>
                </div>
            </div>`
            var header = document.querySelector('.mobile-menu header');
            if(header && !document.querySelector('.mobile-header')){
                header.insertAdjacentHTML('beforebegin', mobileHeader);
            }
        }
    }
}

loadTestCode();