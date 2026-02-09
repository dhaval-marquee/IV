function loadTestCode() {
    if (!document.body.classList.contains('hero_iv')) {
        document.body.classList.add('hero_iv');
        document.body.classList.add('mobileTest') // Remove this line for Desktop code
        const heroSection = `<div class="hero-section">
            <div class="hero-container">

                <div class="hero-title">
                    <span>FEATURED SPEAKERS & TOPICS</span>
                    <h1>Elevate Your Next Event</h1>
                    <p>With These Top Voices</p>
                </div>

                <h3>Empowering perspectives for every audience.</h3>

                <div class="hero-buttons">
                    <div class="cta-getStarted">
                        <span>Recommend best speaker</span>
                        <button class="button">Get Started Here</button>
                    </div>
                    <div class="cta-search">
                        <span>Or start your search here...</span>
                        <form action="/search" class="ng-pristine ng-valid">
                            <input name="keyword" type="text" placeholder="Enter a topic, idea or keyword">
                            <input name="dialogue" type="hidden" value="keyword">
                        </form>
                    </div>
                </div>

                <p class="submitting-line">*Let us search for you by submitting a form</p>
                
            </div>
        </div>`;
        
        document.querySelector('#hero').insertAdjacentHTML('beforebegin', heroSection);

        document.querySelector('.cta-getStarted button').addEventListener('click', function(){
            document.querySelector('#subhero .left .cta button').click();
        });
    }
}
loadTestCode();