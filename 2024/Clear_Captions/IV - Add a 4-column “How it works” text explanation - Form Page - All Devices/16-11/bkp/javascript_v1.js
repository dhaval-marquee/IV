function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-how-it-work')) {
        document.querySelector('body').classList.add('iv-how-it-work');

        const howItWork = `
            <div class="iv-container">
                <div class="how-it-work-main">
                    <h2 class="how-it-work-title">How it <em class="title-italic">works</em></h2>
                    <p class="how-it-work-desc">Getting started is simple! In just four easy steps, you'll be on your way to clearer, more confident conversations with the people who matter most.</p>
                    <ul class="how-it-work-items">
                        <li class="how-it-work-box">
                            <img src="https://clearcaptions.com/wp-content/uploads/2023/10/icon-person-wave.svg" alt="Determine your eligibility">
                            <h3 class="fusion-title-heading"><p>1. Determine your <em class="title-italic"><br> eligibility</em></p></h3>
                            <p class="work-box-text">ClearCaptions verifies your eligibility for our service based on hearing loss, U.S. residency, and internet access through a few simple questions.</p>
                        </li>
                        <li class="how-it-work-box">
                            <img src="https://clearcaptions.com/wp-content/uploads/2023/11/Accountability.svg" alt="Determine your eligibility">
                            <h3 class="fusion-title-heading"><p>2. Complete our form <em class="title-italic"><br> or call 1-866-219-3373</em></p></h3>
                            <p class="work-box-text">Choose what works best for you -fill out our simple online form or call to speak with a friendly specialist who will guide you through enrollment.</p>
                        </li>
                        <li class="how-it-work-box">
                            <img src="https://clearcaptions.com/wp-content/uploads/2023/11/Quality.svg" alt="Determine your eligibility">
                            <h3 class="fusion-title-heading"><p>3. Receive training & <em class="title-italic"><br> free installation</em></p></h3>
                            <p class="work-box-text">Relax while an expert installs your new phone at no cost, then receive personalizedtraining until you feel completely confident using the captioning service.</p>
                        </li>
                        <li class="how-it-work-box">
                            <img src="https://clearcaptions.com/wp-content/uploads/2023/10/icon-service.svg" alt="Determine your eligibility">
                            <h3 class="fusion-title-heading"><p>4. Enjoy communicating <em class="title-italic"><br> independently once again</em></p></h3>
                            <p class="work-box-text">Reconnect with confidence- enjoy clear, real-time captions that let you communicate easily and stay connected with loved ones.</p>
                        </li>
                    </ul>
                </div>
            </div>`;

        document.querySelector('#post-29').closest('#content').insertAdjacentHTML('afterend', howItWork);
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
