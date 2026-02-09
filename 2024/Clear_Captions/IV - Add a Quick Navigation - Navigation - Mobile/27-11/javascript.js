function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-quick-navigation')) {
        document.querySelector('body').classList.add('iv-quick-navigation');

        const header = document.querySelector('header');
        const callIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                            <mask id="mask0_5040_4293" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">
                                <rect width="56" height="56" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_5040_4293)">
                                <path d="M46.55 49C41.6889 49 36.8861 47.9403 32.1417 45.8208C27.3972 43.7014 23.0806 40.6972 19.1917 36.8083C15.3028 32.9194 12.2986 28.6028 10.1792 23.8583C8.05972 19.1139 7 14.3111 7 9.45C7 8.75 7.23333 8.16667 7.7 7.7C8.16667 7.23333 8.75 7 9.45 7H18.9C19.4444 7 19.9306 7.18472 20.3583 7.55417C20.7861 7.92361 21.0389 8.36111 21.1167 8.86667L22.6333 17.0333C22.7111 17.6556 22.6917 18.1806 22.575 18.6083C22.4583 19.0361 22.2444 19.4056 21.9333 19.7167L16.275 25.4333C17.0528 26.8722 17.9764 28.2625 19.0458 29.6042C20.1153 30.9458 21.2917 32.2389 22.575 33.4833C23.7806 34.6889 25.0444 35.8069 26.3667 36.8375C27.6889 37.8681 29.0889 38.8111 30.5667 39.6667L36.05 34.1833C36.4 33.8333 36.8569 33.5708 37.4208 33.3958C37.9847 33.2208 38.5389 33.1722 39.0833 33.25L47.1333 34.8833C47.6778 35.0389 48.125 35.3208 48.475 35.7292C48.825 36.1375 49 36.5944 49 37.1V46.55C49 47.25 48.7667 47.8333 48.3 48.3C47.8333 48.7667 47.25 49 46.55 49ZM14.0583 21L17.9083 17.15L16.9167 11.6667H11.725C11.9194 13.2611 12.1917 14.8361 12.5417 16.3917C12.8917 17.9472 13.3972 19.4833 14.0583 21ZM34.9417 41.8833C36.4583 42.5444 38.0042 43.0694 39.5792 43.4583C41.1542 43.8472 42.7389 44.1 44.3333 44.2167V39.0833L38.85 37.975L34.9417 41.8833Z" fill="#141F61" style="&#10;    fill: #ff4a00;&#10;"/>
                            </g>
                        </svg>`
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