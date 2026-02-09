function loadTestCode() {
    if (!document.body.classList.contains('homepage_iv')) {
        document.body.classList.add('homepage_iv');

        document.querySelector('.homepage_iv #content .post-content > div:first-child> div > div:first-child > div').insertAdjacentHTML('beforeend',`<div class="additional-info">
            <div class="additionalInfoInner">
            <span class="score">4.5/5</span> 
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/ClearCaptions/StarsLogo.png" alt="Review Stars" width="95" height="20"/>
            <span class="ratings">Ratings &nbsp;(250+ Ratings)</span>
        </div>`);
    }
}

loadTestCode();