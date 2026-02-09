function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('work_iv')) {
        bodyEle.classList.add('work_iv');

        document.querySelector('.work_iv .shopify-section--featured-collections .vertical-breather').insertAdjacentHTML('beforebegin',
            `<div class="container vertical-breather">
                <header class="section__header section__header--tight">
                    <h3 class="heading h2">How It Works</h3>
                    <p>EZ Mobile Data simplifies your internet</p>
                </header>
                <div class="work-items">
                    <div class="work-item">
                        <span class="work-count">1</span>
                        <p>Choose your plan, regardless of your current provider.</p>
                    </div>
                    <div class="work-item">
                        <span class="work-count">2</span>
                        <p>Connect to our Network</p>
                    </div>
                    <div class="work-item">
                        <span class="work-count">3</span>
                        <p>Start enjoying your untethered Internet access.</p>
                    </div>
                </div>
            </div>
            <hr class="border-light">`
        );
    }
}
loadTestCode();