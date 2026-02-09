var loadTest = setInterval(() => {
    if(document.querySelectorAll('body').length > 0 && !document.querySelector('body').classList.contains('trustTest_iv')) {
        clearInterval(loadTest);
        document.querySelector('body').classList.add('trustTest_iv');
        document.querySelector('#how-it-works-section').insertAdjacentHTML('beforebegin',`<div class="trustbar">
            <div class="container">
                <ul>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TheMaids/22Icon.png" alt="22 Icon">
                        <p>Step Cleaning Process</p>
                    </li>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TheMaids/shield.png" alt="Shield">
                        <p>Bonded and Insured</p>
                    </li>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TheMaids/Brain.png" alt="Brain">
                        <p>Extensively Trained and Supervised</p>
                    </li>
                    <li>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TheMaids/emblem.png" alt="emblem">
                        <p>24 Hours Satisfaction Grantee</p>
                    </li>
                </ul>
            </div>
        </div>`);
    }
}, 100);