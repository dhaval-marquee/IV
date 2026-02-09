function loadTestCode() {
    // Body class
    const tag = 'hero-review';
    if (!document.querySelector('body').classList.contains(tag)) {
        document.querySelector('body').classList.add(tag);

        const cloudInary = `//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Add_Accreditations_and_Reviews_to_the_Hero_Section/`;
        const trustPilot = `${cloudInary}TrustPilot.png`;
        const bestCompany = `${cloudInary}Best_Company.png`;
        const google = `${cloudInary}Google.png`;
        const PCi_DSS = `${cloudInary}PCI_DSS.png`;
        const HIPAA = `${cloudInary}HIPAA.png`;
        const ISO = `${cloudInary}ISO.png`;


        var logoHtml = `<div class="${tag}-logo">
            <div class="logo-container">
                <div class="companys-logos">
                    <img src="${trustPilot}" alt="TrustPilot" />
                    <img src="${bestCompany}" alt="Best Company" />
                    <img src="${google}" alt="Google" />
                </div>
            </div>
        </div>`;

        var companyLogoHtml = `<div class="${tag}-company-logo">
            <div class="company-logo-container">
                <div class="companys-in-logo">
                    <img src="${PCi_DSS}" alt="PCi DSS" />
                    <img src="${HIPAA}" alt="HIPAA" />
                    <img src="${ISO}" alt="ISO" />
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