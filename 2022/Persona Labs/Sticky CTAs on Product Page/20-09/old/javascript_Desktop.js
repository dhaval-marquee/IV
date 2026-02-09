console.log('test code loaded');
function IVTestCode() {
    var jQisLoaded = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQisLoaded);
            loadCode();

        } else {
            var jsElm = document.createElement("script");
            jsElm.type = "application/javascript";
            jsElm.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
            document.body.appendChild(jsElm);
            clearInterval(jQisLoaded);

            var jqueryInterval = setInterval(function () {
                if (typeof jQuery != 'undefined') {
                    clearInterval(jqueryInterval);
                    loadCode();
                }
            }, 100);
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
    if (!jQuery('body').hasClass('product_iv')) {
        jQuery('body').addClass('product_iv');

        // Put your test code here
        jQuery('.elementor.product > .elementor-section-wrap').addClass('section_wrapper');
        jQuery('.section_wrapper > section').each(function(n) {
            jQuery(this).addClass('section_'+(n+1));
        });

        var pageURL = window.location.pathname;
        pageURL = pageURL.replaceAll('-','_').split('/')[2];
        jQuery('.section_wrapper .section_1 .elementor-image').html(`<h6><strong>Quick Facts</strong></h6>
        <ul class="pre_caution">
            <li>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258344/Persona_Labs/Product_Page/icon-set-03.png" alt="Blood" width="50">
                <p>Specimen Type: <a href="javascript:;"><strong>` + getContent[pageURL].Specimen + `</strong></a></p>
            </li>
            <li>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258345/Persona_Labs/Product_Page/icon-set-01.png" alt="Dinner Set" width="50">
                <p>Fasting Required: <a href="javascript:;"><strong>` + getContent[pageURL].fasting + `</strong></a></p>
            </li>
            <li>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258344/Persona_Labs/Product_Page/icon-set-02.png" alt="Clock Icon" width="50">
                <p>Turnaround Time: <a href="javascript:;"><strong>` + getContent[pageURL].Time + `</strong></a></p>
            </li>
            <li>
                <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1661258344/Persona_Labs/Product_Page/icon-set-04.png" alt="Location Icon" width="50">
                <p>
                    <a href="` + getContent[pageURL].LocationLink + `">Quest Diagnostic/Labcorp Location</a>
                </p>
            </li>
        </ul>`);

        jQuery('.product_iv .elementor-widget-woocommerce-product-price').parent().addClass('right_content');
        jQuery('.product_iv .elementor-widget-woocommerce-product-price').remove();
        jQuery('.product_iv .right_content > div').each(function(n) {
            jQuery(this).addClass('element_'+(n+1));
        });

        // reorder children function
        jQuery.fn.orderChildren = function (order) {
            this.each(function () {
                var el = jQuery(this);
                for (var i = order.length - 1; i >= 0; i--) {
                    el.prepend(el.children(order[i]));
                }
            });
            return this;
        };
        // reorder children function call

        jQuery('.product_iv .right_content').orderChildren([
            '.element_1',
            '.element_2',
            '.element_4',
            '.element_3'
        ]);

        jQuery('.product_iv.woocommerce .section_1').after(`<div class="how_it_work">
            <div class="container">
                <h3>How it Works</h3>
                <div class="content_block">
                    <div class="content_box">
                        <h5 class="title"><strong>1. Order Your Test</strong></h5>
                        <p class="desc">Order online. No referral or Doctors visit required</p>
                    </div>
                    <div class="content_box">
                        <h5 class="title"><strong>2. Visit a Lab Near You</strong></h5>
                        <p class="desc">Get tested at one of our 5,000 labs nationwide</p>
                    </div>
                    <div class="content_box">
                        <h5 class="title"><strong>3. Get Your Results Fast</strong></h5>
                        <p class="desc">Get your accurate results within 1-3 business days</p>
                    </div>
                </div>
            </div>
        </div>`);



        if(jQuery('#tab-description').length > 0) {
            if(jQuery('#tab-description h3:first-of-type:first-child').length > 0) {
                var smallTitle =  jQuery('#tab-description h3:first-of-type:first-child').text();
                var smallTitleDisc = jQuery('#tab-description h3:first-of-type:first-child').next('p').text();
                jQuery('.section_1 .right_content .element_2').after('<p id="text1_iv"><b>' + smallTitle + ':</b> ' + smallTitleDisc +'</p>');
            }

            if(jQuery('#tab-description h2:first-of-type + p').length > 0) {
                var descriptionText =  jQuery('#tab-description h2:first-of-type + p').text();
                jQuery('.section_1 .right_content .element_4').before('<p id="text2_iv">' + descriptionText + '</p>');
            }

            var selectedPages = ['https://www.personalabs.com/product/healthcare-worker-screening-profile-blood-test/','https://www.personalabs.com/product/healthy-female-checkup-blood-test/','https://www.personalabs.com/product/measles-mumps-rubella-mmr-immunity-profile-blood-test/','https://www.personalabs.com/product/comprehensive-std-blood-test/']

            var currentPage = window.location.href.split('?')[0];

            if(selectedPages.indexOf(currentPage) > -1) {
                console.log('manual selector');
                if(jQuery('#tab-description > p:nth-child(2)').length > 0) {
                    var descriptionText =  jQuery('#tab-description > p:nth-child(2)').text();
                    jQuery('.section_1 .right_content .element_4').before('<p id="text2_iv">' + descriptionText + '</p>');
                }
            }
        }


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

// Load code just for desktop 
if (window.matchMedia("(min-width: 768px)").matches) {
    initCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for desktop over