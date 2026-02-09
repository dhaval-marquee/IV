function loadTestCode() {
    document.querySelector('body').classList.add('iv-modal');

    document.querySelector('.iv-modal .site-logo').insertAdjacentHTML('afterbegin', '<img src="//www.compressionsale.com/cdn/shop/files/Favicon-192x-New-CS-Icon.png" alt="CompressionSale" class="site-logo-image mobile-only">');
    document.querySelector('.iv-modal .live-search').insertAdjacentHTML('beforebegin', '<a data-fancybox data-animation-duration="700" data-src="#productfinder" href="javascript:void(0);" class="blue-button">Product Finder</a>');

    const ivProgressBar = `
    <div class="progress-container">
        <div class="progress-line"></div>
        <div class="progress-indicator"></div>

        <div class="step-wrapper">
            <div class="step active" data-step="1"></div>
            <span class="step-label">GENDER</span>
        </div>
        <div class="step-wrapper">
            <div class="step" data-step="2"></div>
            <span class="step-label">COMPRESSION</span>
        </div>
        <div class="step-wrapper">
            <div class="step" data-step="3"></div>
            <span class="step-label">STYLE</span>
        </div>
        <div class="step-wrapper">
            <div class="step" data-step="4"></div>
            <span class="step-label">TYPE</span>
        </div>
    </div>
    `;

    const ivButtons = `<input type="button" value="BACK" class="back"><input type="button" value="NEXT" class="next">`;

    const ivCheckBlock = setInterval(() => {
        if (document.querySelector('.iv-modal #finderForm2 .footer-part') && document.querySelector('.iv-modal #finderForm2 .holder')) {
            clearInterval(ivCheckBlock);
            document.querySelector('.iv-modal #finderForm2 .holder').insertAdjacentHTML('afterbegin', ivProgressBar);
            document.querySelector('.iv-modal #finderForm2 .footer-part').insertAdjacentHTML('afterbegin', ivButtons);

            const ivSteps = document.querySelectorAll('.iv-modal #finderForm2 .step-box');
            const ivProgressSteps = document.querySelectorAll('.iv-modal #finderForm2 .step');
            const ivProgressIndicator = document.querySelector('.iv-modal #finderForm2 .progress-indicator');
            const ivNextBtn = document.querySelector('.iv-modal #finderForm2 .next');
            const ivBackBtn = document.querySelector('.iv-modal #finderForm2 .back');
            const ivSubmitBtn = document.querySelector('.iv-modal #finderForm2 input[type=submit]');

            let currentStep = 0;

            function ivUpdateSteps() {
                ivSteps.forEach((step, index) => {
                    step.classList.toggle('active', index === currentStep);
                });

                ivProgressSteps.forEach((step, index) => {
                    step.classList.toggle('active', index <= currentStep);
                });

                const progressWidth = (currentStep / (ivSteps.length - 1)) * 100;
                ivProgressIndicator.style.width = `${progressWidth}%`;

                ivBackBtn.style.display = currentStep > 0 ? 'inline-block' : 'none';
                ivNextBtn.style.display = currentStep < ivSteps.length - 1 ? 'inline-block' : 'none';
                ivSubmitBtn.style.display = currentStep === ivSteps.length - 1 ? 'inline-block' : 'none';
            }

            ivNextBtn.addEventListener('click', () => {
                if (currentStep < ivSteps.length - 1) {
                    currentStep++;
                    ivUpdateSteps();
                }
            });

            ivBackBtn.addEventListener('click', () => {
                if (currentStep > 0) {
                    currentStep--;
                    ivUpdateSteps();
                }
            });
            ivUpdateSteps();
        }
    }, 500);
}

loadTestCode();