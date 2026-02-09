function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-quick-navigation')) {
        document.querySelector('body').classList.add('iv-quick-navigation');

        const header = document.querySelector('header');
        const callIcon = `<img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1733218175/ClearCaptions/phone-orange-icon.png" alt="Call us">`;
        if (header) {
            const callNumber = header.querySelector('.iv-quick-navigation .header-nav-mobile-menu-phone a').href;
            if(!document.querySelector('.iv-nav-call')){
                header.querySelector('.header-cc-logo').insertAdjacentHTML('beforeend' , `<a href="${callNumber}" class="iv-nav-call">${callIcon}<span class="iv-call-text">Call us</span></a>`);
            }
            if(!document.querySelector('.iv-sub-header')){
                header.insertAdjacentHTML('beforeend', `<div class="iv-sub-header">
                        <nav class="iv-sub-header-nav">
                            <ul class="iv-sub-header-list">
                                <li class="iv-sub-header-item">
                                    <a href="/how-it-works/" class="iv-sub-header-item-inner">How It Works</a>
                                </li>
                                <li class="iv-sub-header-item">
                                    <a href="/how-it-works/home-phone/" class="iv-sub-header-item-inner">Home Phone</a>
                                </li>
                                <li class="iv-sub-header-item">
                                    <a href="/support/faq/" class="iv-sub-header-item-inner">FAQs</a>
                                </li>
                            </ul>
                        </nav>
                    </div>`)
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