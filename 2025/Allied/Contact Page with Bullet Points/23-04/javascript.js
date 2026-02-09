function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-points-form')) {
        document.querySelector('body').classList.add('iv-points-form');

        const newDiv = `<div class="iv-main-free-quote">
            <div class="iv-main-left"></div>
            <div class="iv-main-right"></div>
        </div>`;

        if(!document.querySelector('.iv-main-free-quote')){
            document.querySelector ('.iv-points-form .free-quote').insertAdjacentHTML('afterbegin', newDiv);
        }

        const formDiv = document.querySelector('.iv-points-form .free-quote-inner');
        if (formDiv) {
            const target = document.querySelector('.iv-points-form .iv-main-right');
            if (target) {
                target.insertBefore(formDiv, target.firstChild);
            }
        }
        

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(xhttp.responseText.match(/<body[^>]*>((.|[\n\r])*)<\/body>/)[0],'text/html');
                var reviewCode = doc.querySelector('.showmore-reviews__average');

                if (reviewCode) {
                    const pointsHtml = `<div class="iv-points-list">
                        <h1>Experience a Hassle-Free Move with Allied</h1>
                        <ul>
                            <li><span class="iv-bullet-check">&#10004;</span> Full-Service or Customizable Moving Options</>
                            <li><span class="iv-bullet-check">&#10004;</span> 24/7 Customer Support Every Step of the Way</li>
                            <li><span class="iv-bullet-check">&#10004;</span> Transparent Pricing with No Hidden Fees</li>
                        </ul>
                        <div class="winner-review">
                            <div class="iv-winner-part">
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1744800351/Allied/wca-seal-cr-2015-2025.png" alt="Winner Img" />
                            </div>
                            <div class="showmore-reviews iv-review-part">
                                <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                                    <symbol id="average-star">
                                        <defs>
                                            <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="98%" style="stop-color:#fbbc05;stop-opacity:1"></stop>
                                                <stop offset="98%" style="stop-color:#6F6E6E;stop-opacity:1"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path fill="url(#star-gradient)" d="M168,24.558,158.111,32l3.676-12.189L152,12.223l12.16-.091L168,0l3.839,12.132,12.16.091-9.787,7.589L177.889,32Zm-38,0L120.111,32l3.676-12.189L114,12.223l12.16-.091L130,0l3.84,12.132,12.16.091-9.787,7.589L139.889,32Zm-38,0L82.112,32l3.676-12.189L76,12.223l12.161-.091L92,0l3.84,12.132,12.16.091-9.787,7.589L101.888,32Zm-38,0L44.112,32l3.675-12.189L38,12.223l12.16-.091L54,0l3.84,12.132L70,12.223l-9.787,7.589L63.888,32Zm-38,0L6.112,32,9.787,19.812,0,12.223l12.16-.091L16,0,19.84,12.132,32,12.223l-9.788,7.589L25.889,32Z"></path>
                                    </symbol>
                                </svg>
                                ${reviewCode.innerHTML}
                            </div>
                        </div>
                    </div>`;

                    document.querySelector('.iv-main-left').innerHTML += pointsHtml;
                }
            }
        };
        xhttp.open("GET", "https://www.allied.com/moving-companies-reviews", true);
        xhttp.send();

        
        

    }
}

// Ensure the script runs only after the body exists
var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0 && document.querySelectorAll('.free-quote').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);
