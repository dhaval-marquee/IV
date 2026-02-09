function loadTestCode() {
    if (!document.body.classList.contains('homepage_iv')) {
        document.body.classList.add('homepage_iv');

        document.querySelector('.homepage_iv #content .post-content > div:first-child> div > div:first-child > div').insertAdjacentHTML('beforeend',`<div class="iv-review-section">
            <div class="iv-review-wrapper">
                <div class="iv-review-text-part">
                    <h3 class="iv-review-text">4.5/5</h3>
                    <div class="iv-review-star-text">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/ClearCaptions/StarsLogo.png" alt="StarsLogo" class="iv-review-star">
                        <p>(250+)</p>
                    </div>
                </div>
                <div class="iv-rating">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1750326232/ClearCaptions/WhiteBG.png" alt="BBB logo">
                </div>
            </div>
        </div>`);
    }
}

loadTestCode();
