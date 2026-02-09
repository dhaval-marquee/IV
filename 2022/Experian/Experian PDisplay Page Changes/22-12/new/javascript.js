function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('pdisplay_test')) {
        bodyEle.classList.add('pdisplay_test');

        // Put your test code here
        $('.pdisplay_test #mainTop .container').wrapInner('<div class="content_left"></div>');
        $('.pdisplay_test #mainTop .container .marquee-text-content').append('<a href="javascript:;" id="scrollToForm">Connect With Us</a>');

        $('.pdisplay_test #main .columnBoxes .container').prepend("<h2>Best-in-class Hospital & Health System solutions that can be used across your entire organization</h2>");
        $('.pdisplay_test #main .columnBoxes .container .row').html(`<div class="col-12 col-md-6 col-lg-3 column-content">
            <div class="column-content-box h-100 d-flex flex-column column-content-box--dark content-bg-box">
                <div class="box-top px-3 pt-2">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1668510217/Experian/PDisplay_Landing_Page/_sign.png" alt="Revenue Cycle">
                    <h3 class="h4 text-dark-blue mt-2 mb-1">Revenue Cycle</h3>
                </div>
                <div class="box-body flex-grow-1 px-md-10 px-xl-20 px-xxl-35 pt-3 pb-20">
                    <ul class="bullet-dots">
                        <li>Patient access solutions</li>
                        <li>Collections optimization</li>
                        <li>Claims management</li>
                        <li>Audit payers</li>
                        <li>RCM analytics</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 column-content">
            <div class="column-content-box h-100 d-flex flex-column column-content-box--dark content-bg-box">
                <div class="box-top px-3 pt-2">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1668510217/Experian/PDisplay_Landing_Page/Group.png" alt="Patient Engagement">
                    <h3 class="h4 text-dark-blue mt-2 mb-1">Patient Engagement</h3>
                </div>
                <div class="box-body flex-grow-1 px-md-10 px-xl-20 px-xxl-35 pt-3 pb-20">
                    <ul class="bullet-dots">
                        <li>Automated scheduling</li>
                        <li>Patient intake</li>
                        <li>Patient estimates</li>
                        <li>Payment solutions</li>
                        <li>Marketing data</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 column-content">
            <div class="column-content-box h-100 d-flex flex-column column-content-box--dark content-bg-box">
                <div class="box-top px-3 pt-2">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1668510217/Experian/PDisplay_Landing_Page/Shield.png" alt="Identity Management">
                    <h3 class="h4 text-dark-blue mt-2 mb-1">Identity Management</h3>
                </div>
                <div class="box-body flex-grow-1 px-md-10 px-xl-20 px-xxl-35 pt-3 pb-20">
                    <ul class="bullet-dots">
                        <li>Unique patient identifiers</li>
                        <li>Patient portal security</li>
                        <li>Data verification</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 column-content">
            <div class="column-content-box h-100 d-flex flex-column column-content-box--dark content-bg-box">
                <div class="box-top px-3 pt-2">
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1668510217/Experian/PDisplay_Landing_Page/Stethoscope.png" alt="Care Management">
                <h3 class="h4 text-dark-blue mt-2 mb-1">Care Management</h3>
                </div>
                <div class="box-body flex-grow-1 px-md-10 px-xl-20 px-xxl-35 pt-3 pb-20">
                    <ul class="bullet-dots">
                        <li>Care coordination</li>
                        <li>Member utilization management</li>
                        <li>Social determinants of health</li>
                    </ul>
                </div>
            </div>
        </div>`);



        $("#scrollToForm").click(function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(".form-renderer").offset().top
            }, 100);
        });
    }

    function initCode() {
        jQuery(document).ready(function (jQuery) {
            if (!jQuery('body').hasClass('healthcare_test')) {
                jQuery('body').addClass('healthcare_test');

                $(".healthcare_test .root > div > div").each(function (index) {
                    $(this).addClass("section-" + index);
                });
                $(".healthcare_test .section-4 section.hover-boxes .container").each(function (index) {
                    $(this).addClass("container-" + index);
                });

                $('section.column-boxes > .container').after(`<div class="container container-2">
                    <div class="text-center">
                        <h2>Best-in-class Hospital & Health System solutions that can be used across your entire organization</h2>
                        <div class="row d-flex flex-row">
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div class="hover-boxes h-100 d-block">
                                    <div class="box-wrap">
                                        <div class="hover-boxes--box-top">
                                            <span><i class="dark-blue md exp-i-dollar-sign-pri-i"></i></span>
                                            <h3 class="mt-15 hover-boxes--box-title">Revenue Cycle Management</h3>
                                        </div>
                                        <div class="hover-boxes--box-body p-15">
                                            <p class="pt-0">Increase cash flow and streamline RCM processes</p>
                                        </div>
                                        <div class="lern-more-btn">
                                            <a class="btn btn-exp-outline-dark-blue" href="https://www.experian.com/healthcare/solutions/revenue-cycle-management-solution" target="_self">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div class="hover-boxes h-100 d-block">
                                    <div class="box-wrap">
                                        <div class="hover-boxes--box-top">
                                            <span>
                                                <i class="dark-blue md exp-i-mobile-pri-i"><span class="path1"></span><span class="path2"></span></i>
                                            </span>
                                            <h3 class="mt-15 hover-boxes--box-title">Patient Engagement</h3>
                                        </div>
                                        <div class="hover-boxes--box-body p-15">
                                            <p class="pt-0">Improve patient experience with leading digital solutions</p>
                                        </div>
                                        <div class="lern-more-btn">
                                            <a class="btn btn-exp-outline-dark-blue" href="https://www.experian.com/healthcare/solutions/patient-engagement-solutions" target="_self">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div class="hover-boxes h-100 d-block">
                                    <div class="box-wrap">
                                        <div class="hover-boxes--box-top">
                                            <span>
                                                <i class="dark-blue md exp-i-authenticate-pri-i"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i>
                                            </span>
                                            <h3 class="mt-15 hover-boxes--box-title">Identity Management</h3>
                                        </div>
                                        <div class="hover-boxes--box-body p-15">
                                            <p class="pt-0">Solve for duplicate medical records and healthcare fraud</p>
                                        </div>
                                        <div class="lern-more-btn">
                                            <a class="btn btn-exp-outline-dark-blue" href="https://www.experian.com/healthcare/solutions/patient-identity" target="_self">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div class="hover-boxes h-100 d-block">
                                    <div class="box-wrap">
                                        <div class="hover-boxes--box-top">
                                            <span>
                                                <i class="dark-blue md exp-i-health-pri-i"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></i>
                                            </span>
                                            <h3 class="mt-15 hover-boxes--box-title">Care Management</h3>
                                        </div>
                                        <div class="hover-boxes--box-body p-15">
                                            <p class="pt-0">Improve population health and reduce healthcare costs </p>
                                        </div>
                                        <div class="lern-more-btn">
                                            <a class="btn btn-exp-outline-dark-blue" href="https://www.experian.com/healthcare/solutions/patient-care-management-solutions" target="_self">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`);

                titleheight();

                // resize
                $(window).on("resize", function () {
                    titleheight();
                }).resize();

                // load
                $(window).load(function () {
                    titleheight();
                });
            }

        });
    }

    function titleheight() {
        var maxHeight = 0;
        $(".healthcare_test .container-2 .hover-boxes--box-title").height('auto');
        $(".healthcare_test .container-2 .hover-boxes--box-title").each(function () {
            if ($(this).height() > maxHeight) {
                maxHeight = $(this).height();
            }
        });
        $(".healthcare_test .container-2 .hover-boxes--box-title").height(maxHeight);
    }

    initCode();
}

if (window.matchMedia("(min-width: 992px)").matches) {

    var jQisLoaded = setInterval(function () {
        if (typeof jQuery != 'undefined') {
            clearInterval(jQisLoaded);
            loadTestCode();
        }
    }, 100);

    window.addEventListener('resize', function (event) {
        if (window.matchMedia("(max-width: 991.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function (event) {
        if (window.matchMedia("(min-width: 992px)").matches) {
            location.reload();
        }
    }, true);
}