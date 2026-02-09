function loadCode() {

    if (!$('body').hasClass('hero_redesign')) {
        $('body').addClass('hero_redesign');

        $('.container_fluid_double').addClass('container').removeClass('container_fluid_double').parent().removeAttr('class');
        $('.banner_form_block').parent().addClass('hero_wrapper').wrapInner('<div class="container"></div>').parent();

        $('.zip_block').parent().addClass('form_wrapper');
        $('.fomr_banner_left .heading').html('Grab Your Free <br>Home Warranty Estimate');

        $('.zip_block').prev().prev().addClass('field_wrapper');
        $('.zip_block').prev().prev().find('#banner_email').closest('.form-block').before($('.zip_block').addClass('col-md-12'));
        $('.zip_block').append($('.state_city_block').parent());
        $('#banner_submit_btn').text('Get A Free Quote');
        $('#banner_submit_btn').before($('.form_wrapper .thp_tcpa:last-of-type').addClass('T_C_text'));
        $('.privacy_policy > div:first-child p').text('Secured by SSL Certificate');

        $('.hero_redesign .form_wrapper input[name="pe_btn_location"]').attr('value','BEST-PRICE-ESTIMATE_v1');

        // $('.form_wrapper input[name="pe_priceestimate_type"]').attr('value','AB-TESTING-VARIANT1');

        $('.form_banner_right').removeAttr('class').addClass('col-lg-6 generic-popupleft-bnner').html(`
            <div class="logo_wrapper">
                <div class="default-logo d-block">
                    <img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/logo.png" alt="homewarrantyreviews.com">
                </div>
                <div class="service-plus-home-warranty-logo d-none">
                    <img src="https://www.homewarrantyreviews.com/wp-content/uploads/new_service_plus_logo.png" alt="Service">
                </div>
                <div class="choice-home-warranty-logo d-none">
                    <img src="https://www.homewarrantyreviews.com/wp-content/uploads/Choice_Home_Warranty-2-1.png" alt="Choice Home Warranty">
                </div>
                <div class="select-home-warranty-logo d-none">
                    <img src="https://www.homewarrantyreviews.com/wp-content/uploads/Select_Home_Warranty-3.png" alt="Select Home Warranty">
                </div>
            </div>
            <p class="heading_popup mb-2 mt-3">You're almost there!</p>
            <p class="generic-popup_content mb-0">Fill out and submit the form to get: <br>a comprehensive breakdown of the best quotes in your area, based off of thousands of reviews from home-owners just like you!</p>
            <div class="mt-5 review_width" style="position: relative;">
                <div class="review_section review_display" id="review_section_1">
                    <div class="d-flex mb-2">
                        <div class="review_popup_peron_icon">
                            <span>EE</span>
                        </div>
                        <div class="align-self-center ">
                            <div class="mb-1 review_popup_name">Edward Ellis Kelsey</div>
                            <div class="">
                                <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star">
                            </div>
                        </div>
                    </div>
                    <p class="review_popup_content">The plumber did a fantastic job. He went above and beyond to fix the problem and ensure everything was fixed to standard. He was very professional and represented the company very well.</p>
                </div>
                <div class="review_section" id="review_section_2">
                    <div class="d-flex mb-2">
                        <div class="review_popup_peron_icon">
                            <span>SJ</span>
                        </div>
                        <div class="align-self-center ">
                            <div class="mb-1 review_popup_name">Sara J Tanner</div>
                            <div class="">
                                <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star">
                            </div>
                        </div>
                    </div>
                    <p class="review_popup_content"> Presti** plumbing was great. Explained everything and answered my questions. He was the 3rd repair man to be given my job, so it was a 2weeks before the problem was resolved</p>
                </div>
                <div class="review_section" id="review_section_3">
                    <div class="d-flex mb-2">
                        <div class="review_popup_peron_icon">
                            <span>TL</span>
                        </div>
                        <div class="align-self-center ">
                            <div class="mb-1 review_popup_name">Teri Lopez</div>
                            <div class="">
                                <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star">
                            </div>
                        </div>
                    </div>
                    <p class="review_popup_content">I called in a claim late in the afternoon and had my appliance serviced by next morning! Awesome ! Thank you Home warranty for y quick, diligent service. </p>
                </div>
                <div class="review_section" id="review_section_4">
                    <div class="d-flex mb-2">
                        <div class="review_popup_peron_icon">
                            <span>AG</span>
                        </div>
                        <div class="align-self-center ">
                            <div class="mb-1 review_popup_name">Arun Gopinath</div>
                            <div class="">
                                <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star">
                            </div>
                        </div>
                    </div>
                    <p class="review_popup_content">I had a great experience recently with a broken garbage disposal. The service was quick and easy. The technician did a great job. Overall it went really well. I would definitely recommend choice. </p>
                </div>
                <div class="review_section" id="review_section_5">
                    <div class="d-flex mb-2">
                        <div class="review_popup_peron_icon">
                            <span>KS</span>
                        </div>
                        <div class="align-self-center ">
                            <div class="mb-1 review_popup_name">Keith Smith</div>
                            <div class="">
                                <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/full-star.webp" loading="lazy" class="optimizeStar" alt="Rating star">
                            </div>
                        </div>
                    </div>
                    <p class="review_popup_content"> Mr. L**n Holbr**k of A &amp; E Factory Service was a fast, knowledgeable and courteous technician. Would like for Choice to use this company for all of our appliances if needed in the future.</p>
                </div>
                <div class="arrow-carousel">
                    <input type="hidden" id="current" value="1">
                    <div onclick="prev_slide()" id="left_arrow" class="left-arrow" style="display: none;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                        </svg>
                    </div>
                    <div onclick="next_slide()" id="right_arrow" class="right-arrow" style="display: block;">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">
                            <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>`);

        if($('.hero_redesign .form_wrapper input[name=pe_company_name]').val() == 'Service Plus Home Warranty') {
            $('.logo_wrapper > div').removeClass('d-block').addClass('d-none');
            $('.logo_wrapper .service-plus-home-warranty-logo').addClass('d-block');
        } else if($('.hero_redesign .form_wrapper input[name=pe_company_name]').val() == 'Choice Home Warranty') {
            $('.logo_wrapper > div').removeClass('d-block').addClass('d-none');
            $('.logo_wrapper .choice-home-warranty-logo').addClass('d-block');
        } else if($('.hero_redesign .form_wrapper input[name=pe_company_name]').val() == 'Select Home Warranty') {
            $('.logo_wrapper > div').removeClass('d-block').addClass('d-none');
            $('.logo_wrapper .select-home-warranty-logo').addClass('d-block');
        } else if($('.hero_redesign .form_wrapper input[name=pe_company_name]').val() == '') {
            $('.logo_wrapper > div').removeClass('d-block').addClass('d-none');
            $('.logo_wrapper .default-logo').addClass('d-block');
        }

        $(document).on('blur', 'input', function() {
            setTimeout(() => {
                if($(this).parent().siblings('.error_msg').is(":hidden")) {
                console.log('success');
                $(this).parent().addClass('validated');
            } else {
                console.log('error');
                $(this).parent().removeClass('validated');
            }
            }, 500);
        });

        $('body').css('visibility','visible');
    }
}

var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        loadCode();
    } else {
        // DOM: Create the script element
        var jsElm = document.createElement("script");
        // set the type attribute
        jsElm.type = "application/javascript";
        // make the script element load file
        jsElm.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
        // finally insert the element to the body element in order to load the script
        document.body.appendChild(jsElm);
        clearInterval(jQisLoaded);
        var jqueryInterval = setInterval(function () {
            if (typeof jQuery != 'undefined') {
                clearInterval(jqueryInterval);
                loadCode();
            }
        }, 100);
    }

    setTimeout(() => {
        document.querySelector('body').style.visibility = 'visible';
    }, 3000);

}, 100);