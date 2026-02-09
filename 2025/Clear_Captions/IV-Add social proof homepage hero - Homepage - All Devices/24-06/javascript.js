function loadTestCode() {
    if (!document.body.classList.contains('iv-review')) {
        document.body.classList.add('iv-review');
        
        document.querySelector('#content .post-content > div:first-child> div > div:first-child > div').insertAdjacentHTML('beforeend',`<div class="iv-review-section">
            <div class="iv-review-wrapper">
                <div class="iv-review-text-part">
                    <h3 class="iv-review-text">4.5/5</h3>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/ClearCaptions/StarsLogo.png" alt="StarsLogo" class="iv-review-star" />
                </div>
                <div class="iv-rating">
                    <p>Rating&nbsp (250+ Reviews)</p>
                </div>
            </div>
        </div>`);
    }
}

loadTestCode();