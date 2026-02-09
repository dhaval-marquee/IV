function loadTestCode() {
    const tagClass = 'mobile-menu';
    if (!document.querySelector('body').classList.contains(tagClass)) {
        document.querySelector('body').classList.add(tagClass);
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
            var mobileHeader = `<div class="subHeader">
                <span>The First <a href="https://www.mapcommunications.com/hitrust-certified/">HITRUST</a> Certified Answering Service</span>
            </div>
            <div class="mobile-header">
                <div class="mobile-header-main">
                    <div class="mobile-header-left">
                        <a href="#my-menu" class="block-btn-new">Menu</a>
                        <svg class="modal-close" id="modalClose" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
							<path d="M1 13L13 1M1 1L13 13" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
						</svg>
                        <div id="logo" class="m-all t-1of3 d-2of5" itemscope="" itemtype="http://schema.org/Organization">
                            <a href="https://www.mapcommunications.com">
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2023/10/2023-MapLogo-1.svg" alt="MAP Communications" data-lazy-src="https://www.mapcommunications.com/wp-content/uploads/2023/10/2023-MapLogo-1.svg" data-ll-status="loaded" class="entered lazyloaded"><noscript>
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2023/10/2023-MapLogo-1.svg" alt="MAP Communications"></noscript>
                            </a>
                        </div>
                    </div>
                    <div class="mobile-header-right">
                        ${freeRequest}
                        <a href="https://secure.mapcommunications.com/portal" class="user-btn-new" target="_blank"></a>
                    </div>
                </div>
            </div>`
            var header = document.querySelector(`.${tagClass} header`);
            if(header && !document.querySelector('.mobile-header') && document.querySelector('#menu-main-menu .mm-navbar > a')){
                header.insertAdjacentHTML('beforebegin', mobileHeader);
                document.querySelector('#menu-main-menu .mm-navbar > a').insertAdjacentHTML('afterend', `<svg class="modal-close" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="#fff">
                <path d="M1 13L13 1M1 1L13 13" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>`);
            }
            var menuLeftBar = document.querySelector(`.${tagClass} .mm-menu .mm-navbar`);
            if(menuLeftBar && !document.querySelector('.mm-navbar-button')){
                menuLeftBar.classList.add('mm-navbar-button')
                menuLeftBar.insertAdjacentHTML('afterend', freeRequest)
            }
        }
        
        // $(document).ready(function() {
        //     $('#modalClose').click(function(){
        //         jQuery('#my-menu').removeClass('mm-opened');
        //         jQuery('#my-menu').removeClass('mm-current');
        //         jQuery('#html').removeClass('mm-opened');
        //         jQuery('#html').removeClass('mm-opening');
        //     })
        //  });
        
        
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


