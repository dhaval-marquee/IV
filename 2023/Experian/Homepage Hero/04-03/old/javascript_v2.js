// Varinat 2
var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        console.log('dhaval code working v2');
        if (!$('body').hasClass('iv_healthcare')) {
            $('body').addClass('iv_healthcare');
            $('.iv_healthcare #smart-hero').carousel({
                interval: false,
                wrap: true,
                ride: true
            });
            $(".iv_healthcare .hoverBoxes .par-comp-meta .h2").text("Simplifying Healthcare For All");
            $(".iv_healthcare .hoverBoxes .par-comp-meta .experian-description").text("For over 25 years Experian Health has worked closely with over 500,000 providers, helping them make smarter business decisions and improve patient experiences");
        };

        function initCode() {
            jQuery(document).ready(function (jQuery) {
                if (!jQuery('body').hasClass('healthcare_test')) {
                    jQuery('body').addClass('healthcare_test');

                    $(".healthcare_test .root > div > div").each(function (index) {
                        $(this).addClass("section-" + index);
                    });
                    $(".healthcare_test .section-9 section.hover-boxes .container").each(function (index) {
                        $(this).addClass("container-" + index);
                    });

                    $('.healthcare_test .section-9 .par-comp-meta div > h2.h2').text('Solutions for every stage of the patient journey - powered by Experian Health');
                    $('.healthcare_test .section-9 .par-comp-meta div > p.experian-description').remove();
                    $('.container.container-1').after(`<div class="container container-2">
                    <div class="text-center">
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
                                    <div class="lern-more-btn"><a class="btn btn-exp-outline-dark-blue" href="https://www.experian.com/healthcare/solutions/revenue-cycle-management-solution" target="_self">Learn More</a></div> 
                                  </div>  
                                    </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div class="hover-boxes h-100 d-block">
                                <div class="box-wrap">
                                   <div class="hover-boxes--box-top">
                                      <span><i class="dark-blue md exp-i-mobile-pri-i"><span class="path1"></span><span class="path2"></span></i></span>
                                       <h3 class="mt-15 hover-boxes--box-title">Patient Engagement</h3>
                                    </div>
                                    <div class="hover-boxes--box-body p-15">
                                      <p class="pt-0">Improve patient experience with leading digital solutions</p>
                                     </div>
                                    <div class="lern-more-btn"><a class="btn btn-exp-outline-dark-blue" href="https://www.experian.com/healthcare/solutions/patient-engagement-solutions" target="_self">Learn More</a></div> 
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div class="hover-boxes h-100 d-block">
                                <div class="box-wrap">
                                   <div class="hover-boxes--box-top">
                                      <span><i class="dark-blue md exp-i-authenticate-pri-i"><span class="path1"></span><span class="path2"></span><span class="path3"></span></i></span>
                                      <h3 class="mt-15 hover-boxes--box-title">Identity Management</h3>
                                    </div>
                                    <div class="hover-boxes--box-body p-15">
                                      <p class="pt-0">Solve for duplicate medical records and healthcare fraud</p>
                                    </div>
                                    <div class="lern-more-btn"><a class="btn btn-exp-outline-dark-blue" href="https://www.experian.com/healthcare/solutions/patient-identity" target="_self">Learn More</a></div> 
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div class="hover-boxes h-100 d-block">
                                <div class="box-wrap">
                                     <div class="hover-boxes--box-top">
                                        <span><i class="dark-blue md exp-i-health-pri-i"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></i></span>
                                        <h3 class="mt-15 hover-boxes--box-title">Care Management</h3>
                                    </div>
                                    <div class="hover-boxes--box-body p-15">
                                      <p class="pt-0">Improve population health and reduce healthcare costs </p>
                                    </div>
                                    <div class="lern-more-btn"><a class="btn btn-exp-outline-dark-blue" href="https://www.experian.com/healthcare/solutions/patient-care-management-solutions" target="_self">Learn More</a></div> 
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

        initCode()


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
    }
}, 100);