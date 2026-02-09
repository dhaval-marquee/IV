function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        // Put your test code
        
        jQuery('.homepage_iv #new_columns-64-103').before('<div class="featured_section"></div>');
        jQuery('.homepage_iv .featured_section').append(jQuery('#div_block-65-103').contents());
        jQuery('#div_block-65-103').remove();
        jQuery('#text_block-123-103 > div').removeAttr('style');

        jQuery('h2#headline-604-103 > div').text('Meet the Team');
        jQuery('h2#headline-604-103').next().html(`<p style="text-align: center">True You Weight Loss was founded by physicians specifically to serve people just like you. Some doctors may offer one of our procedures as an add-on to the main services they provide. At True You, weight loss is all we do. Our focus on weight loss solutions means you know you’re getting our very best efforts.</p>
            <p style="text-align: center">Each of our medical professionals is dedicated to your care; meet them here.</p>
            <h2 id="headline-604-103"><div style="text-align: center;">Our Physicians</div></h2>
            <div class="physician-item-wrapper">
                <div class="physician-item">
                    <a href="/about/meet-the-team/dr-christopher-mcgowan/">
                        <img src="/wp-content/uploads/chris-mcgowan.jpg" alt="Dr. Christopher McGowan">
                    </a>
                    <a href="/about/meet-the-team/dr-christopher-mcgowan/">Dr. Christopher McGowan, MD, ABOM, MSCR, AGAF, FASGE</a>
                    <p>Founder/CEO</p>
                </div>
                <div class="physician-item">
                    <a href="/about/meet-the-team/dr-daniel-maselli/">
                        <img src="/wp-content/uploads/maselli-1.jpg" alt="Dr. Daniel B. Maselli">
                    </a>
                    <a href="/about/meet-the-team/dr-daniel-maselli/">Dr. Daniel B. Maselli, MD, ABOM</a>
                    <p>Endobariatric Physician, Associate Research Director</p>
                </div>
                <div class="physician-item">
                    <a href="/about/meet-the-team/dr-lauren-l-donnangelo-md-d-abom/">
                        <img src="/wp-content/uploads/Donnangelo.jpg" alt="Dr. Lauren L. Donnangelo">
                    </a>
                    <a href="/about/meet-the-team/dr-lauren-l-donnangelo-md-d-abom/">Dr. Lauren L. Donnangelo, MD, ABOM</a>
                    <p>Endobariatric Physician</p>
                </div>
            </div>`);

            // add Scroll down class
            jQuery('section a[href="https://trueyouweightloss.com/request-a-consultation/"]').eq(0).attr('href','javascript:;').addClass('scrollToForm');
            jQuery('#link_button-793-103').attr('href','javascript:;').addClass('scrollToForm');

            // Scroll down click events
            jQuery(document).on('click', '.scrollToForm', function(e){
                e.preventDefault();
                console.log('scroll to form');
                jQuery('html, body').animate({
                    scrollTop: jQuery("section form.hs-form").closest('section').offset().top - jQuery('header').height()
                }, 200);
            });


        // For Variant 2 only
        jQuery('#link_button-793-103').before('<img style="margin-bottom:35px;max-width: 100%;" src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TrueYouWeightLoss/TYWL_ClinicComparison_Chart_Rev.jpg">');
        jQuery('#link_button-793-103').text('Request a Consultation or Just Learn More');
    }
}
loadTestCode();