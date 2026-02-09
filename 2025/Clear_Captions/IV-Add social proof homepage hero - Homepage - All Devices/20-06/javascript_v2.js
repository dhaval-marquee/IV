function loadTestCode() {
    if (!document.body.classList.contains('homepage_iv')) {
        document.body.classList.add('homepage_iv');

        document.querySelector('.homepage_iv #content .post-content > div:first-child> div > div:first-child > div').insertAdjacentHTML('beforeend',`<div class="additional-info">
            <div class="additionalInfoInner">
                <div class="additionalScoreWrapper">
                    <span class="score">4.5/5</span> 
                    <div class="reviewStarsWrapper">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/ClearCaptions/StarsLogo.png" alt="Review Stars" width="95" height="20"/>
                        <span class="ratings">(250)</span>
                    </div>
                </div>
                <div class="line"></div>
                <div class="imageWrapper">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1750326232/ClearCaptions/WhiteBG.png" alt="Review Stars" width="95" height="20"/>
                </div>
            </div>
        </div>`);
    }
}

loadTestCode();
