function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('product_USPs')) {
        bodyEle.classList.add('product_USPs');
        
        // Put your test code here

        document.querySelectorAll('h2').forEach(function(title){
            if(title.innerText == 'Features') {
                title.closest('section').classList.add('feature_section');
            }
        });
        
        document.querySelector('.product_USPs .feature_section').insertAdjacentHTML('beforebegin',`<section class="keyence_section">
            <h2>Why Keyence?</h2>
            <div class="ul_wrapper">
                <ul>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_icons_that_help_clearly_demonstrate_your_product%E2%80%99s_USPs./IndustryLeading.png" width="60" alt="Industry Leading 30 year Lifespan">
                        <p>Industry Leading <br>30 year Lifespan</p>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_icons_that_help_clearly_demonstrate_your_product%E2%80%99s_USPs./GlobalNetwork.png" width="70" alt="Global Network">
                        <p>Global Network</p>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_icons_that_help_clearly_demonstrate_your_product%E2%80%99s_USPs./DirectSupport.png" width="50" alt="Direct Support or onsite Support">
                        <p>Direct Support or <br>onsite Support</p>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Keyence/Add_icons_that_help_clearly_demonstrate_your_product%E2%80%99s_USPs./Shipping.png "width="70" alt="Same Day Shipping">
                        <p>Same Day Shipping</p>
                    </li>
                </ul>
            </div>
        </section>`);
    }
}
loadTestCode();

