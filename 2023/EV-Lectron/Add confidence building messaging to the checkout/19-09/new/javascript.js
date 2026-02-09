function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('checkout_iv')) {
        bodyEle.classList.add('checkout_iv');

        document.querySelector('.checkout_iv .main__content').insertAdjacentHTML('beforeend', `<div class="grid-wrapper">
            <div class="grid-item">
                <div class="grid-icon">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/checkout_badge_1.png" alt="Shield icon" />
                </div>
                <div class="grid-text">Certified for Safety & Excellence</div>
            </div>
            <div class="grid-item">
                <div class="grid-icon">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/checkout_badge_2.png" alt="100% Guarantee icon" />
                </div>
                <div class="grid-text">Secure 2-Year Warranty</div>
            </div>
            <div class="grid-item">
                <div class="grid-icon">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/checkout_badge_3.png" alt="Trusted star icon" />
                </div>
                <div class="grid-text">Trusted by 250,000+ Customers</div>
            </div>
            <div class="grid-item">
                <div class="grid-icon">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/EV_Lectron/checkout_badge_4.png" alt="Hassle-Free returns icon" />
                </div>
                <div class="grid-text">Hassle-Free 30-Day Returns</div>
            </div>
        </div>`);
    }
}
loadTestCode();