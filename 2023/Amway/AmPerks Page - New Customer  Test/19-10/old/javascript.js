function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('amPerksPageTest')) {
        bodyEle.classList.add('amPerksPageTest');
        
        // Put your test code here
        document.querySelectorAll('.amw-content-component--extended')[0].style.display="none";
        document.querySelectorAll('.amw-content-component--extended')[0].insertAdjacentHTML('beforebegin' , `<div class="heroSection">
            <div class="heroInner">
                <div class="left_part">
                    <div class="textWrapper">
                        <h1>Get Exclusive Deals and Discounts
                            with AmPerks Customer Rewards!</h1>
                        <ul>
                            <li>Earn points on every purchase.</li>
                            <li>Get FREE shipping* on qualifying orders.</li>
                            <li>Redeem rewards for discounts.</li>
                        </ul>
                        <a role="button" class="btn" href="https://register.amway.com/simplified/create-account">Join AmPerks!</a>
                    </div>
                </div>
                <div class="right_part">
                    <div class="imgWrapper">
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/amway/AmPerksHeroImg.png" alt="AmPerks Hero Img">
                    </div>
                </div>
            </div>
        </div>
        <div class="amPerksJoinng">
        <h2>Joining AmPerks Is Easy Free!</h2>
        <ul>
            <li>
                <div class="imgWrapper">
                    <img src="/medias/amp-00-icon-cart-V2-m.png?context=bWFzdGVyfHJvb3R8MzQ5MjN8aW1hZ2UvcG5nfGg1NS9oZDMvOTQzNzQyNjc0NTM3NC5wbmd8ZDhhNTQ5ODEyOThmOTkyOTY2NDc5NzY0MzhiMDg3NGFiMGU2ZmM0NDViYjdkMjlhNGQ3ZWQzYmVlODY5NjQzOQ" alt="Click the Join AmPerks button.">
                    <h3 class="title-medium-style">Click the "Join AmPerks" button.</h3>
                    <a role="button" class="btn" href="https://register.amway.com/simplified/create-account">Join AmPerks!</a>
                </div>
            </li>
            <li>
                <div class="imgWrapper">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/amway/Box-img.png" alt="Fill out the quick 3-step customer registration form.">
                    <h3 class="title-medium-style">Fill out the quick 3-step customer registration form.</h3>
                </div>
            </li>
            <li>
                <div class="imgWrapper">
                    <img src="/medias/amp-00-icon-gift-m.png?context=bWFzdGVyfHJvb3R8NDI5OTN8aW1hZ2UvcG5nfGhiMy9oNmYvOTQzNzQyNzA3MzA1NC5wbmd8MjU2OWNlOWU1ODczMjIzOGYyMGIzMjcxYzA0YThjMzBmYTdiOTU3MjhmNjI4M2Y1NzU4ZjNmNTY4ZGEzN2Q3OQ" alt="Start earning AmPerks">
                    <h3 class="title-medium-style">Start earning AmPerks!</h3>
                </div>
            </li>
        </ul>
    </div>
    <h5 class="videoTitle">Watch The Short 40-Second Video Below To Learn More About AmPerks</h5>`);

    document.querySelectorAll('.amw-content-component--extended')[3].after(document.querySelectorAll('.amw-content-component--extended')[1]); 
    document.querySelector('.videoTitle ~ .js-rich-text-alert-container').insertAdjacentHTML('beforebegin' , `<div class="redeemRewardSection">
        <div class="content">
            <h2 class="amw-content-component__title">Earn Points. Enjoy Perks. Redeem Rewards. </h2>
            <p>Get $5 off a future order for every 500 points earned. Apply the discount to your favorite items or use it to try something new!</p>
        </div>
        <a role="button" class="btn" href="https://register.amway.com/simplified/create-account">Join AmPerks!</a>
        <p>*These AmPerks benefits are limited time promotional offers.</p>
    </div>`); 

    document.querySelector('.amw-content-component--extended .amw-content-component__title-wrapper +.amw-content-component__tiles-container .amw-button').innerHTML = document.querySelector('.amw-content-component--extended .amw-content-component__title-wrapper +.amw-content-component__tiles-container .amw-button').innerHTML.replace('Create Customer Account', 'Join AmPerks!');
    document.querySelectorAll('.amw-content-component--extended .amw-content-component__title-wrapper +.amw-content-component__tiles-container .amw-content-component__tile-actions  div+div')[0].style.display="none";

    }
}
loadTestCode();