function loadCode() {
    if (!$('body').hasClass('homepage_test')) {
        $('body').addClass('homepage_test');
        $('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');

        $('.top-section .wrap h2').text('Trusted by Thousands of Businesses');

        // Slider section
        $('.homepage_test .top-section .wrap h2').after(`<section class="slider_section">
        <ul class="slider_wrapper">
            <li>
                <div>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/Delta-gs_2x.jpg" alt="Delta gs">
                </div>
            </li>
            <li>
                <div>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/HoltCat-gs_2x.jpg" alt="HoltCat-gs">
                </div>
            </li>
            <li>
                <div>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/Humana-gs_2x.jpg" alt="Humana-gs">
                </div>
            </li>
            <li>
                <div>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/International-Paper-gs_2x.jpg" alt="International-Paper-gs">
                </div>
            </li>
            <li>
                <div>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/MSinaiLogo-gs_2x.jpg" alt="MSinaiLogo-gs">
                </div>
            </li>
            <li>
                <div>
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1668166618/mapcommunications/%2AHomepage%20Redesign/ServPro-gs_2x.jpg" alt="ServPro-gs">
                </div>
            </li>
        </ul>
        </section>`);
        
        $.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {
            $('.slider_wrapper').slick({
                infinite: true,
                speed: 300,
                autoplay: true,
                arrows: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [{
                    breakpoint: 1200,
                    settings: {
                            dots: true,
                            slidesToShow: 3,
                            slidesToScroll: 2
                    }
                },
                {
                breakpoint: 768,
                settings: {
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }]
            });
            $('.slider_section').css('opacity','1');
        });
        // Slider over
        
        $('.two-column-section#two-column-sections').after($('.top-section .wrap+h2').addClass('text-center'));
        $('.two-column-section#two-column-sections+h2').after($('.top-section .wrap+p').addClass('text-center'));
        $('.homepage_test .top-section+.gray-section+.two-column-section h2').text('No Two Businesses are Alike');
        $('.homepage_test .top-section+.gray-section+.two-column-section h4').text('That is why Map Communications offers custom, flexible solutions to help businesses of all sizes');

        $('.gray-section#two-column-sections').before(`<section class="works_section">
            <div class="section_inner">
                <h2 class="text-center">From Small Business to Fortune 500, We Keep You Connected&nbsp;24/7</h2>
                <div class="works_item_wrapper">
                    <div class="works_item">
                        <div>
                            <img alt="Cell phone" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1667979939/mapcommunications/%2AHomepage%20Redesign/FeaturesIcon1_2x.png">
                        </div>
                        <span class="works_span"> Our U.S. based receptionist centers are staffed 24 hours a day, 365 days providing roll-over continuity and peace of mind against outages and weather events that can significantly impact your business </span>
                    </div>
                    <div class="works_item">
                        <div>
                            <img alt="headset control" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1668144523/mapcommunications/%2AHomepage%20Redesign/headset_control_2x.png">
                        </div>
                        <span class="works_span"> Your business runs on data, which is why we provide you with a dynamic suite of online analytical tools and data collection reporting so you can react to calls in real time and with accurate & meaningful data </span>
                    </div>
                    <div class="works_item">
                        <div>
                            <img alt="software platform" class="panel-main-image" src="//res.cloudinary.com/ignite-visibility/image/upload/v1667979952/mapcommunications/%2AHomepage%20Redesign/software_platform_2x.png">
                        </div>
                        <span class="works_span">Every business is unique, which is why our proprietary guides our live agents logically through the call for a personalized and comprehensive customer support solution
                    </div>
                </div>
            </div>
        </section>`);
    }
}
loadCode();