function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homepageTest_iv')) {
        bodyEle.classList.add('homepageTest_iv');
        
        // Put your test code here

        document.querySelector('.top-banner-content').innerHTML = `<h1 style="color: white; visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;" class="wow fadeInDown  animated" data-wow-delay="0.2s">Custom Call Answering Solutions For Businesses of Every Size.</h1>
        <ul class="top-banner-list">
                <li>Fully U.S. based with 24/7 agent availability</li>
                <li>Ready to integrate with your existing system</li>
                <li>Intuitive dashboard with actionable reporting</li>
        </ul>
        <div class="hero-content hero-section">
                <div class="hero-btn">
                <a href="https://www.mapcommunications.com/contact-us/request-free-trial/" class="orange-btn">Start a Free
                        Trial</a>
                <div class="hero-required">No Credit Card Required</div>
                </div>
                <a href="https://www.mapcommunications.com/pricing/" class="block-btn">See Plans &amp; Pricing</a>
        </div>`;     
    }
}
loadTestCode();