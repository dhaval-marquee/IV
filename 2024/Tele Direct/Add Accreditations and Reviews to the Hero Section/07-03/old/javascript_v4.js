function loadTestCode() {
    // Body class
    const tag = 'hero-review';
    if (!document.querySelector('body').classList.contains(tag)) {
        document.querySelector('body').classList.add(tag);

        const cloudInary = `//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Add_Accreditations_and_Reviews_to_the_Hero_Section/`;
        const trustPilot = `${cloudInary}TrustPilot.png`;
        const bestCompany = `${cloudInary}Best_Company.png`;
        const google = `${cloudInary}Google.png`;

        var logoHtml = `<div class="${tag}-logo">
            <div class="logo-container">
                <div class="companys-logos">
                    <img src="${trustPilot}" alt="" />
                    <img src="${bestCompany}" alt="Best Company" />
                    <img src="${google}" alt="Google" />
                </div>
            </div>
        </div>`;

        const trustpilotDiv = document.querySelector(`.${tag} .td_hero_section .trustpilot`);
        if(!document.querySelector(`.${tag}-review-logo`) && trustpilotDiv){
            trustpilotDiv.insertAdjacentHTML('afterend', logoHtml);
            trustpilotDiv.parentElement.classList.add(`${tag}-trustpilot-sec`);
        }
    }
}
loadTestCode();