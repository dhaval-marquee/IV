function IVTestCode() {
    var jQisLoaded = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQisLoaded);
            loadCode();
        }
    }, 100);
}


var getContent = {
	tuberculosis_quantiferon_tb_blood_test : {
        "fasting" : "No",
        "Time" : "72 hours",
        "Specimen" : "Blood",
        "LocationLink" : "https://www.personalabs.com/find-location/"
    },
    wellness_checkup : {
        "fasting" : "10-12 hours",
        "Time" : "2-10 business days",
        "Specimen" : "Blood",
        "LocationLink" : "https://www.personalabs.com/find-location/"
    },
    healthcare_worker_screening_profile_blood_test : {
        "fasting" : "No",
        "Time" : "2-10 business days",
        "Specimen" : "Blood",
        "LocationLink" : "https://www.personalabs.com/find-location/"
    },
    bodybuilder_profile_blood_test : {
        "fasting" : "12 hours",
        "Time" : "2-10 business days",
        "Specimen" : "Blood",
        "LocationLink" : "https://www.personalabs.com/find-location/"
    },
    healthy_female_checkup_blood_test : {
        "fasting" : "8-12 hours",
        "Time" : "2-10 business days",
        "Specimen" : "Blood",
        "LocationLink" : "https://www.personalabs.com/find-location/"
    },
    testosterone_free_and_total_blood_test : {
        "fasting" : "No",
        "Time" : "2-10 business days",
        "Specimen" : "Blood",
        "LocationLink" : "https://www.personalabs.com/find-location/"
    },
    healthy_male_checkup_blood_test : {
        "fasting" : "10-12 hours",
        "Time" : "2-10 business days",
        "Specimen" : "Blood",
        "LocationLink" : "https://www.personalabs.com/find-location/"
    },
    measles_mumps_rubella_mmr_immunity_profile_blood_test : {
        "fasting" : "No",
        "Time" : "2-10 business days",
        "Specimen" : "Blood",
        "LocationLink" : "https://www.personalabs.com/find-location/"
    },
    comprehensive_std_blood_test : {
        "fasting" : "No",
        "Time" : "2-10 business days",
        "Specimen" : "Blood",
        "LocationLink" : "https://www.personalabs.com/find-location/"
    }
}




function loadCode() {
    if (!jQuery('body').hasClass('test_iv')) {
        jQuery('body').addClass('test_iv');
        
        // Put your test code here
        jQuery('.elementor.product > .elementor-section-wrap').addClass('section_wrapper');
        jQuery('.section_wrapper > section').each(function(n) {
            jQuery(this).addClass('section_'+(n+1));
        });

        jQuery('.section_1 .elementor-column:last-of-type .provider-cart-button').closest('.elementor-element').addClass('price_wrapper');


        var pageURL = window.location.pathname;
        pageURL = pageURL.replaceAll('-','_').split('/')[2];
        // debugger
        jQuery('.price_wrapper').before(`<ul class="pre_caution">
            <li>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258345/Persona_Labs/Product_Page/icon-set-01.png" alt="Dinner Set">
                <p>Fasting Required: <a href="javascript:;">` + getContent[pageURL].fasting + `</a></p>
            </li>
            <li>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258344/Persona_Labs/Product_Page/icon-set-02.png" alt="Clock Icon">
                <p>Turnaround Time: <a href="javascript:;">` + getContent[pageURL].Time + `</a></p>
            </li>
            <li>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258344/Persona_Labs/Product_Page/icon-set-03.png" alt="Blood">
                <p>Specimen Type: <a href="javascript:;">` + getContent[pageURL].Specimen + `</a></p>
            </li>
            <li>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258344/Persona_Labs/Product_Page/icon-set-04.png" alt="Location Icon">
                <p>
                    <a href="` + getContent[pageURL].LocationLink + `">Quest Diagnostic/Labcorp Location</a>
                </p>
            </li>
        </ul>`);
        

        var checkTablinklength = setInterval(function() {
            if (jQuery('.section_2 #tab-title-description.active').length > 0) {
                clearInterval(checkTablinklength);
                jQuery('#tab-title-how_works_tab a').trigger('click');
            }
        }, 50);


        var checktabcontent = setInterval(function() {
            if (jQuery('.section_2 .mpg-city-content.how-it-works').length > 0) {
                clearInterval(checktabcontent);
                
                jQuery('.section_2 .mpg-city-content.how-it-works').html(`<div class="work_section_inner">
                    <div class="step_wrap">
                        <div class="step_wrap_inner">
                            <div class="image">
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258344/Persona_Labs/Product_Page/Arrow.png" alt="Arrow icon">
                            </div>
                            <div class="desc">
                                <h3 class="headline">STEP 1</h3>
                                <p class="sub_Head">Order Your Test</p>
                                <p><a href="/my-account/">Create an account</a>, choose your tests, checkout securely, generate your lab order</p>
                            </div>
                        </div>
                    </div>
                    <div class="step_wrap">
                        <div class="step_wrap_inner">
                            <div class="image">
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258344/Persona_Labs/Product_Page/Document.png" alt="Document">
                            </div>
                            <div class="desc">
                                <h3 class="headline">STEP 2</h3>
                                <p class="sub_Head">Generate & Print Out Lab Order</p>
                                <p>Our physician network will approve your order within 2-4hrs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="step_wrap">
                        <div class="step_wrap_inner">
                            <div class="image">
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258344/Persona_Labs/Product_Page/Location.png" alt="Location">
                            </div>
                            <div class="desc">
                                <h3 class="headline">STEP 3</h3>
                                <p class="sub_Head">Visit the Lab</p>
                                <p>The test price decides which lab you will visit: Quest or Labcorp. <a href="/find-location/">Find a location in your area.</a> </p>
                            </div>
                        </div>
                    </div>
                    <div class="step_wrap">
                        <div class="step_wrap_inner">
                            <div class="image">
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258344/Persona_Labs/Product_Page/Report.png" alt="Report">
                            </div>
                            <div class="desc">
                                <h3 class="headline">STEP 4</h3>
                                <p class="sub_Head">Get Your Results</p>
                                <p>Results can be provided in as little as 24-48 hrs. For more complex tests, please <a href="/contact/">contact us</a> for turn around times.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>`);
            }
        }, 50);


        
        jQuery(window).scroll(function () {
            var buttonTop = jQuery('.test_iv .price_wrapper .pl-cart-buttons').parent().offset().top;
            var buttonHeights = jQuery('.test_iv .price_wrapper .pl-cart-buttons').parent().height();
            jQuery('.test_iv .price_wrapper .pl-cart-buttons').parent().css('min-height',buttonHeights);
            jQuery('.test_iv').css('padding-bottom', buttonHeights);

            if (jQuery(window).scrollTop() > buttonTop + buttonHeights) {

                jQuery('.test_iv .price_wrapper .pl-cart-buttons').addClass('fixed');


            } else if (jQuery(window).scrollTop() <= buttonTop + buttonHeights) {

                jQuery('.test_iv .price_wrapper .pl-cart-buttons').removeClass('fixed');

            }
        });

        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}

function initCode() {
    try {
        // PG Cookies Add
        var cookieName = 'iv_Cookie';
        var cookieValue = '1';
        var myDate = new Date();
        myDate.setDate(myDate.getDate() + 30);
        document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate;
        // END PG Cookies Add
    
        IVTestCode();
    
    } catch(ex) {
    
    } finally {
        setTimeout(() => {
            document.getElementsByTagName("body")[0].style.visibility = "visible";
        }, 3000);
    }
}


// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    initCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over