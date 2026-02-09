function heroText() {
    if (!jQuery('body').hasClass('iv-LocationPages')) {
        jQuery('body').addClass('iv-LocationPages');

        jQuery('.hero-form .heading').after(`
            <p>Our team ensures a seamless transition to your new home.</p>
        <ul>
            <li>Full-Service or Customizable Moving Options</li>
            <li>24/7 Customer Support Every Step of the Way</li>
            <li>Transparent Pricing with No Hidden Fees</li>
            <div class="startHere">
                <h4>Start Here</h4>
                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1752652260/Allied/Allied-arrow-icon3.png" alt="yellow-arrow" class="lineArrowIcon">
                <img src="/ResourcePackages/Allied/assets/dist/img/icons/yellow-arrow.png" alt="Yellow arrow" class="yellow-arrow">
            </div>
        </ul>`);
        jQuery('.iv-LocationPages .third-paragraph').after(`<h2 class="head2"><span>Allied is proud to drive life\'s biggest moments since 1928.</span></h2>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        heroText();
    }
}, 100);
