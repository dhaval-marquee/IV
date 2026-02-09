var loadTest = setInterval(() => {
    if(document.querySelectorAll('body').length > 0 && !document.querySelector('body').classList.contains('trustTest_iv')) {
        clearInterval(loadTest);

        document.querySelector('body').classList.add('trustTest_iv','trustTest_v2');
        document.querySelector('#how-it-works-section').insertAdjacentHTML('afterend',`<div class="trustbar">
            <div class="container">
                <ul>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1705725392/TheMaids/TrustTest/22-step-cleaning-process.svg" alt="22 Icon">
                        <p>22-Step Cleaning Process</p>
                    </li>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1705725392/TheMaids/TrustTest/bonded-insured.svg" alt="Bonded insured">
                        <p>Bonded and Insured</p>
                    </li>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1705725392/TheMaids/TrustTest/trained-supervised.svg" alt="Trained supervised">
                        <p>Trained and Supervised&nbsp;Teams</p>
                    </li>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1705725392/TheMaids/TrustTest/100-percent-satisfaction.svg" alt="100% Satisfaction Guarantee">
                        <p>100% Satisfaction Guarantee</p>
                    </li>
                </ul>
            </div>
        </div>`);
    }
}, 100);