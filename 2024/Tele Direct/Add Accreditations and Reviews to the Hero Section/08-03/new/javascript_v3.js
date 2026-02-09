function loadTestCode() {
    // Body class
    const tag = 'hero-review';
    if (!document.querySelector('body').classList.contains(tag)) {
        document.querySelector('body').classList.add(tag);

        const cloudInary = `//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Add_Accreditations_and_Reviews_to_the_Hero_Section/`;
        const reviewImg = `${cloudInary}review-img.png`;
        const bestCompany = `${cloudInary}company-img.png`;

        var logoHtml = `<div class="${tag}-logo">
            <div class="logo-container">
                <div class="companys-logos">
                    <img src="${reviewImg}" alt="review img" />
                </div>
            </div>
        </div>`;

        var companyLogoHtml = `<div class="${tag}-company-logo">
            <div class="company-logo-container">
                <div class="trustpilot-verificationIcon">
                    <svg viewBox="0 0 16 16" fill="inherit" xmlns="http://www.w3.org/2000/svg" width="12px" height="12px">
                        <path d="M1 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7.989a2 2 0 0 1-1.298 1.873l-5 1.875c-.453.17-.951.17-1.404 0l-5-1.875A2 2 0 0 1 1 10.989V3Z"></path>
                        <path d="M11.618 6.12a.875.875 0 1 0-1.236-1.24L7.03 8.22 5.66 6.647a.875.875 0 0 0-1.32 1.15l1.768 2.03c.041.047.086.089.135.125a.875.875 0 0 0 1.364.163l4.01-3.995Z"></path>
                    </svg>
                    VERIFIED COMPANY
                </div>
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
            document.querySelector(`.${tag}-pricing`).insertAdjacentHTML('afterend', companyLogoHtml)
        }
    }
}
loadTestCode();