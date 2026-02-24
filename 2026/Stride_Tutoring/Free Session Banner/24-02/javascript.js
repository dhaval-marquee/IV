function loadTestCode() {
    const body = document.body;
    const features = document.querySelector('#features');
    // stop if required elements missing or already injected
    if (!body || !features || body.classList.contains('iv-SessionBanner')) return;
    body.classList.add('iv-SessionBanner');

    features.insertAdjacentHTML('beforebegin', `
       <div id="placement-banners" data-column-margin="default" data-midnight="dark" data-top-percent="2%" data-bottom-percent="2%" class="wpb_row vc_row-fluid vc_row full-width-content vc_row-o-equal-height vc_row-flex vc_row-o-content-top  right_padding_64px left_padding_64px right_padding_phone_20px left_padding_phone_20px" style="padding-top: calc(100vw * 0.02); padding-bottom: calc(100vw * 0.02); "><div class="row-bg-wrap" data-bg-animation="none" data-bg-animation-delay="" data-bg-overlay="false"><div class="inner-wrap row-bg-layer"><div class="row-bg viewport-desktop" style=""></div></div></div><div class="row_col_wrap_12 col span_12 dark left">
        <div class="vc_col-sm-12 wpb_column column_container vc_column_container col no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
            <div class="vc_column-inner">
                <div class="wpb_wrapper">
                    <div id="placement-banner-a" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row" style=""><div class="row-bg-wrap"> <div class="row-bg"></div> </div><div class="row_col_wrap_12_inner col span_12  left">
        <div class="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
            <div class="vc_column-inner">
            <div class="wpb_wrapper">
                
        <div class="wpb_text_column wpb_content_element  vc_custom_1771445751719">
        <div class="wpb_wrapper">
                <style>
            .stride-banner-container {
                background-color: #01308e;
                background-image: url('https://stage.tutoring.k12.com/wp-content/themes/salient-child_2026_02_18/img/bg-gray.png');
                background-repeat: no-repeat;
                background-position: 25% center;
                background-size: auto 100%;
                border-radius: 12px;
                overflow: visible;
                margin: 0 0;
                position: relative;
            }
            
            .stride-banner-inner {
                display: flex;
                align-items: center;
                padding: 26px;
                gap: 30px;
                position: relative;
            }
            
            .stride-banner-images {
                flex-shrink: 0;
                max-width: 223px;
                width: 16%;
                min-width: 16%;
            }
            
            .stride-banner-image {
                width: min(16%, 223px);
                max-height: 200px;
                height: auto;
                display: block;
                border-radius: 8px;
                position: absolute;
                top: -20%;
                left: 1rem;
            }
            
            .stride-banner-content {
                flex: 1;
                padding-left: 1.5rem;
            }
            
            .stride-banner-heading {
                color: #ffffff;
                font-size: 28px;
                font-weight: 700;
                margin: 0 0 12px 0;
                line-height: 1.3;
            }
            
            .stride-banner-description {
                color: #ffffff;
                font-size: 16px;
                margin: 0;
                line-height: 1.5;
                opacity: 0.95;
            }
            
            .stride-banner-cta {
                flex-shrink: 0;
            }
            
            .stride-banner-button {
                display: inline-block;
                background-color: #FFEA2F;
                color: #000000 !important;
                padding: 16px 32px;
                text-decoration: none;
                border-radius: 100px;
                font-size: 16px;
                font-weight: 700;
                transition: all 0.3s ease;
                white-space: nowrap;
                border: none;
                cursor: pointer;
                text-decoration: none !important;
            }
            
            .stride-banner-button:hover {
                background-color: #ffed4e;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            @media (max-width: 1024px) {
                .stride-banner-image {
                    top: -15%;
                    left: unset;
                    right: -5%;
                    width: 191px;
                }
                .stride-banner-inner {
                    flex-direction: column;
                    align-items: flex-start !important;
                }
                .stride-banner-content {
                    padding-left: 0;
                    max-width: calc(100% - 200px);
                }
                .stride-banner-heading {
                    text-align: left;
                }
                .stride-banner-description {
                    text-align: left;
                }
            }
            /* Mobile Styles */
            @media (max-width: 768px) {
                .stride-banner-container {
                    /* background-size: 50% auto; */
                }
                
                .stride-banner-inner {
                    flex-direction: column;
                    text-align: center;
                    padding: 30px 20px;
                    gap: 20px;
                }
                
                .stride-banner-images {
                    max-width: 180px;
                    margin: 0 auto;
                }
                
                .stride-banner-heading {
                    font-size: 24px;
                }
                
                .stride-banner-description {
                    font-size: 15px;
                }
                
                .stride-banner-button {
                    width: 100%;
                    padding: 14px 24px;
                }
                .stride-banner-content {
                    max-width: 75%;
                }
                .stride-banner-heading {
                    max-width: 75%;
                }
            }
            @media (max-width: 576px) {
                .stride-banner-image {
                    max-width: min(191px, 46vw);
                    right: -12%;
                }
                .stride-banner-content {
                    max-width: 100%;
                }
                .stride-banner-heading {
                    min-height: 90px;
                }
                .stride-banner-container {
                    background-size: 290% 100%;
                }
                .stride-banner-cta, .stride-banner-button {
                    width: 100%;
                }
                h2.stride-banner-heading.stride-banner-heading {
                    max-width: 13.5ch;
                    font-size: 24px !important;
                    line-height: 30px !important;
                }
            }
            @media (max-width: 390px) {
                .stride-banner-button {
                    font-size: 15px;
                }
                h2.stride-banner-heading {
                    max-width: 7.5ch !important;
                }
            }
        </style>

        <div class="stride-banner-container">
            <div class="stride-banner-inner">
                <div class="stride-banner-images">
                    <!-- Placeholder for banner image - replace with actual image URL -->
                    <picture><source srcset="https://stage.tutoring.k12.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/salient-child_2026_02_18/img/banner-image.png.webp" type="image/webp"><img decoding="async" src="https://stage.tutoring.k12.com/wp-content/themes/salient-child_2026_02_18/img/banner-image.png" alt="Tutors" class="stride-banner-image webpexpress-processed"></picture>
                </div>
                
                <div class="stride-banner-content">
                    <h2 class="stride-banner-heading">Your First Tutoring Session Is Free</h2>
                    <p class="stride-banner-description">Experience a full tutoring session at no cost and see if it's the right fit for your child.</p>
                </div>
                
                <div class="stride-banner-cta">
                    <a href="https://book.tutoring.k12.com/account/register?freeSession=true" class="stride-banner-button">
                        Book Your Free Session →				</a>
                </div>
            </div>
        </div>

        </div>
        </div>




            </div> 
        </div>
        </div> 
        </div></div><div id="placement-banner-b" data-midnight="" data-column-margin="default" class="wpb_row vc_row-fluid vc_row inner_row" style=""><div class="row-bg-wrap"> <div class="row-bg"></div> </div><div class="row_col_wrap_12_inner col span_12  left">
        <div class="vc_col-sm-12 wpb_column column_container vc_column_container col child_column no-extra-padding inherit_tablet inherit_phone " data-padding-pos="all" data-has-bg-color="false" data-bg-color="" data-bg-opacity="1" data-animation="" data-delay="0">
            <div class="vc_column-inner">
            <div class="wpb_wrapper">
                
        <div class="wpb_text_column wpb_content_element  vc_custom_1771445759411">
        <div class="wpb_wrapper">
                <style>
            .stride-banner-container {
                background-color: #01308e;
                background-image: url('https://stage.tutoring.k12.com/wp-content/themes/salient-child_2026_02_18/img/bg-gray.png');
                background-repeat: no-repeat;
                background-position: 25% center;
                background-size: auto 100%;
                border-radius: 12px;
                overflow: visible;
                margin: 0 0;
                position: relative;
            }
            
            .stride-banner-inner {
                display: flex;
                align-items: center;
                padding: 26px;
                gap: 30px;
                position: relative;
            }
            
            .stride-banner-images {
                flex-shrink: 0;
                max-width: 223px;
                width: 16%;
                min-width: 16%;
            }
            
            .stride-banner-image {
                width: min(16%, 223px);
                max-height: 200px;
                height: auto;
                display: block;
                border-radius: 8px;
                position: absolute;
                top: -20%;
                left: 1rem;
            }
            
            .stride-banner-content {
                flex: 1;
                padding-left: 1.5rem;
            }
            
            .stride-banner-heading {
                color: #ffffff;
                font-size: 28px;
                font-weight: 700;
                margin: 0 0 12px 0;
                line-height: 1.3;
            }
            
            .stride-banner-description {
                color: #ffffff;
                font-size: 16px;
                margin: 0;
                line-height: 1.5;
                opacity: 0.95;
            }
            
            .stride-banner-cta {
                flex-shrink: 0;
            }
            
            .stride-banner-button {
                display: inline-block;
                background-color: #FFEA2F;
                color: #000000 !important;
                padding: 16px 32px;
                text-decoration: none;
                border-radius: 100px;
                font-size: 16px;
                font-weight: 700;
                transition: all 0.3s ease;
                white-space: nowrap;
                border: none;
                cursor: pointer;
                text-decoration: none !important;
            }
            
            .stride-banner-button:hover {
                background-color: #ffed4e;
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            }
            @media (max-width: 1024px) {
                .stride-banner-image {
                    top: -15%;
                    left: unset;
                    right: -5%;
                    width: 191px;
                }
                .stride-banner-inner {
                    flex-direction: column;
                    align-items: flex-start !important;
                }
                .stride-banner-content {
                    padding-left: 0;
                    max-width: calc(100% - 200px);
                }
                .stride-banner-heading {
                    text-align: left;
                }
                .stride-banner-description {
                    text-align: left;
                }
            }
            /* Mobile Styles */
            @media (max-width: 768px) {
                .stride-banner-container {
                    /* background-size: 50% auto; */
                }
                
                .stride-banner-inner {
                    flex-direction: column;
                    text-align: center;
                    padding: 30px 20px;
                    gap: 20px;
                }
                
                .stride-banner-images {
                    max-width: 180px;
                    margin: 0 auto;
                }
                
                .stride-banner-heading {
                    font-size: 24px;
                }
                
                .stride-banner-description {
                    font-size: 15px;
                }
                
                .stride-banner-button {
                    width: 100%;
                    padding: 14px 24px;
                }
                .stride-banner-content {
                    max-width: 75%;
                }
                .stride-banner-heading {
                    max-width: 75%;
                }
            }
            @media (max-width: 576px) {
                .stride-banner-image {
                    max-width: min(191px, 46vw);
                    right: -12%;
                }
                .stride-banner-content {
                    max-width: 100%;
                }
                .stride-banner-heading {
                    min-height: 90px;
                }
                .stride-banner-container {
                    background-size: 290% 100%;
                }
                .stride-banner-cta, .stride-banner-button {
                    width: 100%;
                }
                h2.stride-banner-heading.stride-banner-heading {
                    max-width: 13.5ch;
                    font-size: 24px !important;
                    line-height: 30px !important;
                }
            }
            @media (max-width: 390px) {
                .stride-banner-button {
                    font-size: 15px;
                }
                h2.stride-banner-heading {
                    max-width: 7.5ch !important;
                }
            }
        </style>

        <div class="stride-banner-container">
            <div class="stride-banner-inner">
                <div class="stride-banner-images">
                    <!-- Placeholder for banner image - replace with actual image URL -->
                    <picture><source srcset="https://stage.tutoring.k12.com/wp-content/webp-express/webp-images/doc-root/wp-content/themes/salient-child_2026_02_18/img/banner-image.png.webp" type="image/webp"><img decoding="async" src="https://stage.tutoring.k12.com/wp-content/themes/salient-child_2026_02_18/img/banner-image.png" alt="Tutors" class="stride-banner-image webpexpress-processed"></picture>
                </div>
                
                <div class="stride-banner-content">
                    <h2 class="stride-banner-heading">Not Sure Where To Start?</h2>
                    <p class="stride-banner-description">Experience a full tutoring session at no cost and see if it's the right fit for your child.</p>
                </div>
                
                <div class="stride-banner-cta">
                    <a href="https://book.tutoring.k12.com/account/register?freeSession=true" class="stride-banner-button">
                        Book Your Free Session →				</a>
                </div>
            </div>
        </div>

        </div>
        </div>




            </div> 
        </div>
        </div> 
        </div></div>
                </div> 
            </div>
        </div> 
    </div></div>
    `);
}

function runObserver() {
    const observer = new MutationObserver(() => {
        const features = document.querySelector('#features');
        if (features && !document.body.classList.contains('iv-SessionBanner')) {
            loadTestCode();
            observer.disconnect(); // stop observing once done
        }
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
    loadTestCode();
}
runObserver();