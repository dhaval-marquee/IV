function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-Homepage')) {
        document.querySelector('body').classList.add('iv-Homepage');
        
        document.querySelector('.iv-Homepage section#section-1 .button-margin').insertAdjacentHTML('beforebegin',`<div class="boxWrapper">
            <div class="leftBox">
                <div class="imgWrapper">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1754977784/jackcityfitness/handPreview.png" alt="SAFETY AND CLEANLINESS AT JACK CITY FITNESS">
                </div>
                <h2>SAFETY AND CLEANLINESS <br>AT JACK CITY FITNESS</h2>
                <span class="orange-line"></span>
                <h3><strong>What safety and cleanliness measures are in place at gyms in Boise, Idaho?</strong></h3>
                <p>Looking for clean and safe health clubs? Boise, Idaho, is home to many-but nothing beats Jack City. As a small, local business, we take extra pride and care in ensuring the safety of all our beloved Partners. </br></br>
                That means keeping our site sparkling clean and only employing the most qualified fitness coaches in Boise. Excellence is our standard, and we work hard to maintain that level.</p>
                <p>After all, our Partners deserve only the best.</p>
            </div>
            <div class="rightBox">
                <div class="imgWrapper">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1754977630/jackcityfitness/car-p.png" alt="ON-SITE PARKING AT JACK CITY FITNESS">
                </div>
                <h2>ON-SITE PARKING <br>AT JACK CITY FITNESS</h2>
                <span class="orange-line"></span>
                <h3><strong>Is there on-site parking available at Jack City Fitness in Boise?</strong></h3>
                <p>Yes, there is! Unlike some other gyms in Boise, Jack City Fitness has a private car lot for Partners. That gives you plenty of space to park your car (or bike!)— even during busier hours. Just one more reason we have been consistently rated the best gym in Boise- and all of Idaho!</p>
            </div>
        </div>`);
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
