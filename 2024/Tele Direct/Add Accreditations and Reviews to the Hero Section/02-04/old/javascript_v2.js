function loadTestCode() {
    // Body class
    const tag = 'hero-review';
    if (!document.querySelector('body').classList.contains(tag)) {
        document.querySelector('body').classList.add(tag);
        const cloudInary = `//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Add_Accreditations_and_Reviews_to_the_Hero_Section/`;
        const reviewImg = `${cloudInary}review-img.png`;
        const bestCompany = `${cloudInary}companyImg.png`;
        var logoHtml = `<div class="${tag}-logo">
            <div class="logo-container">
                <div class="companys-logos">
                    <img src="${reviewImg}" alt="review img" />
                </div>
            </div>
        </div>`;
        var companyLogoHtml = `<div class="${tag}-company-logo">
            <div class="company-logo-container">
                <div class="companys-in-logo">
                    <img src="${bestCompany}" alt="company img" />
                </div>
            </div>
        </div>`;
        const trustpilotDiv = document.querySelector(`.${tag} .td_hero_section .trustpilot`);
        if(!document.querySelector(`.${tag}-review-logo`) && trustpilotDiv){
            trustpilotDiv.insertAdjacentHTML('afterend', logoHtml);
            trustpilotDiv.parentElement.classList.add(`${tag}-trustpilot-sec`);
        }
        if(!document.querySelector(`.${tag}-pricing`)){
            document.querySelector(`.${tag} a[href="/pricing"]`).closest('.widget_sow-button').classList.add(`${tag}-pricing`);
            document.querySelector(`.${tag}-pricing`).insertAdjacentHTML('beforebegin', companyLogoHtml)
        }
    }
}
loadTestCode();