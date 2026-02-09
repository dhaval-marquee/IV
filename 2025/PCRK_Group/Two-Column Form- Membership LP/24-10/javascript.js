function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-form-membership')) {
        document.querySelector('body').classList.add('iv-form-membership');

        const formCta = document.querySelector('.iv-form-membership .hero-container .zpelem-lpform input.zpbutton');
        if(formCta){
            formCta.value = 'Claim My Free Session';
        }

        const heroContainerLeft = document.querySelector('.iv-form-membership .hero-container .zpelem-col:nth-child(2)');
        if (heroContainerLeft) {
            heroContainerLeft.classList.replace('zpcol-md-7', 'zpcol-md-6');
        }
        const heroContainerRight = document.querySelector('.iv-form-membership .hero-container .zpelem-col:nth-child(3)');
        if (heroContainerRight) {
            heroContainerRight.classList.replace('zpcol-md-5', 'zpcol-md-6');
        }


    }
}

loadTestCode();