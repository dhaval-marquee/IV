function loadTestCode() {
    const tag = 'sticky-header';
    if (!document.querySelector('body').classList.contains(tag)) {
        document.querySelector('body').classList.add(tag);
        // Top bar
        var mobileGetToKnow = `<div class="get-to-main"><a class="get-to-know-top" href="https://www.mosquito-authority.com/your-source-for-tick-control/">Your source for tick control</a></div>`
        var getToKnow = document.querySelector('header.ast-custom-header');
        if(getToKnow){
            getToKnow.insertAdjacentHTML('afterbegin', mobileGetToKnow);
        }
        // Phone number and CTA
        const headPhone = `<div class="header-right">
            <a href="tel:8884576630" class="phone">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M497.4 361.8l-112-48a24 24 0 0 0 -28 6.9l-49.6 60.6A370.7 370.7 0 0 1 130.6 204.1l60.6-49.6a23.9 23.9 0 0 0 6.9-28l-48-112A24.2 24.2 0 0 0 122.6 .6l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.3 24.3 0 0 0 -14-27.6z"></path></svg>
            </a>
            <a class="quote-cta" href="https://www.mosquitofranchise.com/">Get a Quote</a>
        </div>`;
        var ctaRight= document.querySelector('.sticky-header header.ast-custom-header [data-elementor-post-type=astra-advanced-hook] section section > div > div:last-child');
        if(ctaRight){
            ctaRight.insertAdjacentHTML('afterbegin', headPhone);
        }
        // For locations only
        var ctaRightL= document.querySelector('.sticky-header header.ast-custom-header section section > .elementor-container .elementor-row > div:last-child');
        if(ctaRightL){
            ctaRightL.insertAdjacentHTML('afterbegin', headPhone);
        }
        document.querySelectorAll('nav ul a[href="https://www.mosquito-authority.com/services/"]')[1].parentNode.parentNode.classList.add('mobilemanu');
        document.querySelector('nav ul.mobilemanu').insertAdjacentHTML('beforeend', `<li class="elementor-icon-list-item menu-item menu-franchise"> 
            <a href="https://www.mosquitofranchise.com/" target="_blank"> 
                <span class="elementor-icon-list-icon"> 
                    <i aria-hidden="true" class="fas fa-globe-americas"></i> 
                </span> 
                <span class="elementor-icon-list-text">Own a Franchise</span> 
            </a> 
        </li>`);
        
        
    }
}
// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {
    var waitForHeader= setInterval(() => {
        if(document.querySelector('header')){
            clearInterval(waitForHeader);
            loadTestCode();
        }
    }, 200);
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
