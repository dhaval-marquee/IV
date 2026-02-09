function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_iv')) {
        bodyEle.classList.add('hero_iv');
        document.querySelector('.hero.hero__overlay').innerHTML = `<div class="hero__inner">
        <div class="page-width text-center">
            <div class="hero__inner__content">
                <h3 class="h3 mega-title">Get Recharged With Our On-Demand Mobile IV Therapy</h3>
                <div class="rte-setting mega-subtitle">
                    <ul>
                        <li>We're Available For Service 24/7</li>
                        <li>We Don't Charge Any Travel Fees</li>
                        <li>Book Your Service Now & Pay Later</li>
                    </ul>
                </div>
                <div class="reset-btn-group">
                    <!-- <a href="/pages/hangover" class="btn hero__btn"> -->
                    <a href="/pages/hangover" class="reset-btn btn-dark btn-large">
                        <span>
                            Hangover treatments
                        </span>
                    </a>
                    <!-- <a href="/pages/packages" class="btn hero__btn hero__btn-2"> -->
                    <a href="/pages/packages" class="reset-btn btn-dark btn-large">
                        <span>
                            All Packages
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>`;
    }
}
loadTestCode();