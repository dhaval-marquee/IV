function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-review')) {
        document.querySelector('body').classList.add('iv-review');

        const reviewSection = `<div class="iv-review-section">
            <div class="iv-review-wrapper">
                <div class="iv-review-text-part">
                    <h3 class="iv-review-text">4.5/5</h3>
                    <div class="iv-review-star-text">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1750327730/ClearCaptions/StarsLogo.png" alt="StarsLogo" class="iv-review-star" />
                        <p>(250+)</p>
                    </div>
                </div>
                <div class="iv-rating">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1750495040/ClearCaptions/WhiteBBB.png" alt="WhiteBG" />
                </div>
            </div>
        </div>`
        document.querySelector('.fusion-container-anchor .fusion-builder-column-3 .fusion-column-wrapper').insertAdjacentHTML('beforeend', reviewSection);
    }
}

// Wait for body then load form
const checkConditionBody = setInterval(() => {
    if (document.querySelector('body')) {
        clearInterval(checkConditionBody);
        loadTestCode();
    }
}, 100);