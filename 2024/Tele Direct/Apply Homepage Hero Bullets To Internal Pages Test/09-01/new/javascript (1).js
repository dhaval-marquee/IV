function loadTestCode() {
    if (!document.querySelector('body').classList.contains('home_hero_iv')) {
        document.querySelector('body').classList.add('home_hero_iv');

        var pageList = [
            "https://www.teledirect.com/usa-call-centers/indiana-call-centers/"
        ];
        
        
        var page = window.location.href.split("?")[0].split("#")[0];
        if (pageList.indexOf(page)>-1) {
            document.querySelector('body').classList.add('callServices');
        }

        document.querySelector('.callServices #acc-hero .elementor-container a[href="/pricing/"]').parentElement.parentElement.insertAdjacentHTML('beforebegin',`<ul class="heroList">
            <li>Simple pay-as-you-go pricing model</li>
            <li>Experienced in just about every industry</li>
            <li>Custom solutions for businesses of every size</li>
        </ul>`);
        document.querySelector('.callServices #acc-hero .trustpilot-widget').parentElement.parentElement.after(document.querySelector('.callServices #acc-hero .elementor-container a[href="/pricing/"]').parentElement.parentElement);
        document.querySelector('.callServices #acc-hero a[href="/pricing/"]').textContent = 'Request Pricing & Learn More';
        document.querySelector('.callServices #acc-hero .trustpilot-verificationIcon').innerHTML = `<svg viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px">
        <path d="M1 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7.989a2 2 0 0 1-1.298 1.873l-5 1.875c-.453.17-.951.17-1.404 0l-5-1.875A2 2 0 0 1 1 10.989V3Z"></path>
        <path d="M11.618 6.12a.875.875 0 1 0-1.236-1.24L7.03 8.22 5.66 6.647a.875.875 0 0 0-1.32 1.15l1.768 2.03c.041.047.086.089.135.125a.875.875 0 0 0 1.364.163l4.01-3.995Z"></path>
    </svg>
    VERIFIED COMPANY'`;
        
    }
}
loadTestCode();