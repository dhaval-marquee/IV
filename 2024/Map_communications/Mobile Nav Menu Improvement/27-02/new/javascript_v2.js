function loadTestCode() {
    const tagClass = 'mobile-menu';
    if (!document.querySelector('body').classList.contains(tagClass)) {
        document.querySelector('body').classList.add(tagClass);
        document.querySelector('body').classList.add('variant-2');

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
            var freeRequest = `<a href="https://www.mapcommunications.com/contact-us/request-free-trial/" class="orange-btn trial-button">Request a Free Trial</a>`;
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
                                The First  <a href="https://www.mapcommunications.com/hitrust-certified/">HITRUST</a> Certified Answering Service
                            </span>
                        </div>
                    </div>
                    <div class="mobile-header-right">
                        ${freeRequest}
                        <a href="https://secure.mapcommunications.com/portal" class="user-btn-new" target="_blank"></a>
                    </div>
                </div>
            </div>`
            var header = document.querySelector(`.${tagClass} header`);
            if(header && !document.querySelector('.mobile-header')){
                header.insertAdjacentHTML('beforebegin', mobileHeader);
            }
            var menuLeftBar = document.querySelector(`.${tagClass} .mm-menu .mm-navbar`);
            if(menuLeftBar && !document.querySelector('.mm-navbar-button')){
                menuLeftBar.classList.add('mm-navbar-button')
                menuLeftBar.insertAdjacentHTML('afterend', freeRequest)
            }
        }
    }
}
// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {
    loadTestCode();
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over
