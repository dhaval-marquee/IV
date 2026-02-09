function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-quote')) {
        document.querySelector('body').classList.add('iv-quote');
        
        const barQuote = `
        <div class="iv-quote-sec iv-bottom-fixed">
            <div class="iv-wrapper">
                <div class="iv-quote-wrapper">
                    <div class="iv-quote-item">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Allied/BenefitsBarFreeQuotePage/FullServiceMoving.png" alt="Full-Service Moving" class="iv-icon">
                        <p>Full-Service Moving</p>
                    </div>
                    <div class="iv-quote-item">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Allied/BenefitsBarFreeQuotePage/247CustomerSupport.png" alt="24/7 Customer Support" class="iv-icon">
                        <p>24/7 Customer Support</p>
                    </div>
                    <div class="iv-quote-item">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Allied/BenefitsBarFreeQuotePage/TransparentPricing.png" alt="Transparent Pricing" class="iv-icon">
                        <p>Transparent Pricing</p>
                    </div>
                </div>
            </div>
        </div>`;

        document.querySelector('.free-quote').insertAdjacentHTML("afterend", barQuote);

        function updateRevokePosition() {
            const quoteSec = document.querySelector('.iv-quote-sec');
            const revokeBtn = document.querySelector('.cc-revoke.cc-bottom');

            if (quoteSec && revokeBtn) {
                const height = quoteSec.offsetHeight;
                revokeBtn.style.bottom = `${height}px`;
            }
        }
        window.addEventListener('load', updateRevokePosition);
        window.addEventListener('resize', updateRevokePosition);

    }
}

loadTestCode();
