function loadTestCode() {
    if (!jQuery('body').hasClass('optinPage_iv')) {
        jQuery('body').addClass('optinPage_iv');
        // Put your test code here
        jQuery('.optinPage_iv #submit-yellow').attr('value', 'Access Ebook');
		jQuery('.optinPage_iv .form_content2 .wpcf7').before('<h2>Download your copy</h2>');
        jQuery('.optinPage_iv .text_split_form2').before(`<div class="hero-section">
            <div class="container">
                <div class="hero-content row justify-content-between">
                    <div class="hero-text col-md-6 mb-4 mb-md-0">
                        <div class="sub-header">EBOOK</div>
                        <h1><span>Supercharging your quants</span> with real-time analytics</h1>
                        <p>Arm your quants with the rapid insights they need to outmaneuver the competition and dominate the market.</p>
                    </div>
                    <div class="img-wrap col-md-5">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1737010917/KX/New-Ebook-Optin-Layout/Quants_ebook.png" alt="Ebook Cover">
                        <div class="btn-wrap">
                            <a class="wp-block-button__link download-btn" href="javascript:void(0);" id="scrollDown" style="border-radius:0px"  rel="noreferrer noopener">Download eBook</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`); 
        jQuery('.wpcf7 form > div').eq(0).after(jQuery('.wpcf7 form > p').eq(0).addClass('requiredText'));   
        jQuery('span[data-name="telephone"]').closest('.one-half').addClass('telephone-wrap');
        jQuery('span[data-name="email"]').closest('.one-half').addClass('email-wrap');
        jQuery('.email-wrap input').attr('placeholder', 'Email*');
        jQuery('.telephone-wrap input').attr('placeholder', 'Phone Number*');

        var getClassInterval = setInterval(function(){
            if(document.querySelectorAll('.text_split4').length > 0){
                clearInterval(getClassInterval)
                jQuery('.text_split4').after(`<div class="review-section">
                    <div class="container">
                        <h3>4.8/5 Star Rating out of 35+ reviews</h3>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1737025886/KX/New-Ebook-Optin-Layout/five-star.png" alt="five-star">
                    </div>
                </div>`);
                
                jQuery('.text_split4 h2').html(`A Verified G2 Leader for Time-Series Vector Databases`);
                jQuery('.text_split4 h2').after(`<p>Recognized by G2 as a 'Momentum Leader' for time series databases, and stream analytics, as 'Leader' for time series Intelligence, and as 'High Performer' for columnar databases-KX is driving innovation in real-time data analytics.</p>`);
            }
        },500);
        var textChangeInterval = setInterval(function(){
            if(document.querySelectorAll('.text_split_form2').length > 0){
                clearInterval(textChangeInterval);
            
                jQuery('.text_split_form2  h1 + p + p').html(`In today's high-stakes trading environment, quants must navigate exploding data volumes and shrinking decision windows to stay ahead. This eBook is your ultimate guide to transforming your approach with cutting-edge analytics.`);
                jQuery('.text_split_form2 ul.featured-points').html(`<li>
                    <strong>Uncover Real-Time Opportunities:</strong>
                    <p>Leverage high-performance analytics to identify patterns, optimize strategies, and seize fleeting market inefficiencies.</p>
                </li>
                <li>
                    <strong>Supercharge Risk Management:</strong>
                    <p>Gain actionable insights to mitigate exposure, adapt quickly, and ensure regulatory compliance.</p>
                </li>
                <li>
                    <strong>Accelerate Time-to-Value:</strong>
                    <p>Enhance agility with faster, smarter decision-making powered by seamless integration of real-time and historical data.</p>
                </li>`);
                jQuery('.text_split_form2 ul + p').html(`Equip your team with the insights and strategies they need to lead in today's competitive markets. Download the eBook now!`);
            }
        },1000);
        jQuery(document).on('click', '#scrollDown', function(e) {
            e.preventDefault();
            jQuery('html, body').animate({
                scrollTop: jQuery('.text_split_form2 .col-md-5').offset().top - 130
            }, 250);
        });
    }
}
var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
