function loadTestCode() {
    if (!jQuery('body').hasClass('optinPage_iv')) {
        jQuery('body').addClass('optinPage_iv');
        
        // Put your test code here
        jQuery('.optinPage_iv #submit-yellow').attr('value', 'Access Ebook');
		jQuery('.optinPage_iv .form_content2 .wpcf7').before('<h2>Download your copy</h2>');


        jQuery('.optinPage_iv .text_split_form2').before(`<div class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text">
                        <div class="sub-header">EBOOK</div>
                        <h1>Supercharging your quants with real-time analytics</h1>
                        <p>Arm your quants with the rapid insights they need to outmaneuver the competition and dominate the market.</p>
                    </div>
                    <div class="img-wrap">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1737010917/KX/New-Ebook-Optin-Layout/Quants_ebook.png" alt="Ebook Cover">
                        <div class="btn-wrap">
                            <a class="wp-block-button__link download-btn" href="https://go.marketing.kx.com/supercharging-quants-gt.pdf?_gl=1*14w7qsh*_gcl_au*MTYzMDMxOTMxNS4xNzM2OTI0MTUy*_ga*MjEyOTQ4NDY0MC4xNzM2OTI0MTUx*_ga_96WX6WQP6Y*MTczNzAxODEzMy44LjEuMTczNzAxODc5MS41Ny4wLjEzNDUzNDY2NzU." style="border-radius:0px" target="_blank" rel="noreferrer noopener">Download eBook</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`); 
        jQuery('.wpcf7 form > div').eq(0).after(jQuery('.wpcf7 form .form-footer-dark').eq(1).addClass('requiredText'));   

        jQuery('span[data-name="last-name"]').closest('.one-half').addClass('last-name-wrap');
        jQuery('span[data-name="company"]').closest('.one-half').addClass('company-wrap');
        jQuery('span[data-name="job-title"]').closest('.one-half').addClass('job-title-wrap');
        jQuery('span[data-name="telephone"]').closest('.one-half').addClass('telephone-wrap');
        jQuery('span[data-name="email"]').closest('.one-half').addClass('email-wrap');
        jQuery('span[data-name="industry"]').closest('div').addClass('industry-wrap');
        jQuery('span[data-name="country"]').closest('div').addClass('country-wrap');

        jQuery('.wpcf7 form .last-name-wrap').after(jQuery('.wpcf7 form .email-wrap')); 
        jQuery('.wpcf7 form .email-wrap').after(jQuery('.wpcf7 form .telephone-wrap')); 
        jQuery('.wpcf7 form .telephone-wrap').after(jQuery('.wpcf7 form .job-title-wrap')); 
        jQuery('.wpcf7 form .company-wrap').before(jQuery('.wpcf7 form .country-wrap')); 

        jQuery('.email-wrap input').attr('placeholder', 'Email*');
        jQuery('.telephone-wrap input').attr('placeholder', 'Phone Number*');


        jQuery('.text_split_form2 ul.featured-points').html(`<li>Businesses lose performance due to slow analytics, spend more because of high infrastructure costs, and forego efficiency because of increasing data volumes.</li>
        <li>kdb Insights helps you make intelligent decisions no matter how much data you have or how quickly it changes.</li>
        <li>The kdb Insights portfolio is a cloud-native, high-performance, and scalable analytics platform for real-time analysis of streaming and historical data.</li>`);


        var getClassInterval = setInterval(function(){
            if(document.querySelectorAll('.text_split4').length > 0){
                clearInterval(getClassInterval)
                jQuery('.text_split4').after(`<div class="review-section">
                    <div class="container">
                        <h3>4.8/5 Star Rating out of 35+ reviews</h3>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1737025886/KX/New-Ebook-Optin-Layout/five-star.png" alt="five-star">
                    </div>
                </div>`);
            }
        },500);
    
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);


