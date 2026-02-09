function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-quote')) {
        document.querySelector('body').classList.add('iv-quote');
        
        const barQuote = `
        <div class="iv-quote-sec">
            <div class="iv-wrapper">
                <div class="iv-quote-wrapper">
                    <div class="iv-quote-item">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1761914444/empirevein/StickyBenefitTopBar/DoctorDarkblue.png" alt="Board-Certified Vein Specialists" class="iv-icon">
                        <p>Board-Certified Vein Specialists</p>
                    </div>
                    <div class="iv-quote-item">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1761914444/empirevein/StickyBenefitTopBar/hospitalDarkblue.png" alt="Most Insurance Plans Accepted" class="iv-icon">
                        <p>Most Insurance Plans Accepted</p>
                    </div>
                    <div class="iv-quote-item">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1761915384/empirevein/StickyBenefitTopBar/BoardCertifiedVeinDarkblue.png" alt="Relief Without Surgery" class="iv-icon">
                        <p>Relief Without Surgery</p>
                    </div>
                </div>
            </div>
        </div>`;

        document.querySelector('header#masthead').insertAdjacentHTML("beforeend", barQuote);

        var getNumber = document.querySelector('header #nav-main .evvs-mininav .navaction-tel').innerHTML;

        var getlanguage = document.querySelector('header #nav-main .evvs-mininav .trp_language_switcher_shortcode').innerHTML;

        document.querySelector('#desktop-mainnav .menu-insurance').insertAdjacentHTML("afterend", `<li class="navactiontel menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-88598">
            ${getNumber}
        </li>
        <li class="navactionlanguage menu-item menu-item-type-post_type menu-item-object-page nav-item nav-item-88598">
            ${getlanguage}
        </li>`);
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 1000);
