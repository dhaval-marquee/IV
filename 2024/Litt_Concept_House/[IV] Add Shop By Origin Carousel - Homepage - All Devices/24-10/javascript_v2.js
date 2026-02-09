function loadTestCode() {
    jQuery('<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>').appendTo('head');
    jQuery('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');

    if (!jQuery('body').hasClass('OriginSliderIV')) {
        jQuery('body').addClass('OriginSliderIV');
        
        jQuery('.dynamic-sections > div').eq(0).after(`
            <div class="dynamicContentWrapper">
                <div class="containerIV">
                    <h2 class="featured-collection__title title">Shop By Origin</h2>
                    <table class="tabContent"><tbody><tr></tr></tbody></table>
                    <div class="sliderWrapper"></div>
                </div>
            </div>
        `);

        var pages = {
            'France': { 
                selector: '.frenchContent', 
                url: "https://www.littconcepthouse.com/collections/french-antiques/?sort_by=manual" 
            },
            'England': { 
                selector: '.englandContent', 
                url: "https://www.littconcepthouse.com/collections/english/?sort_by=manual" 
            },
            'Holland & Belgium': { 
                selector: '.hollandContent', 
                url: "https://www.littconcepthouse.com/collections/dutch-flemish-antiques/?sort_by=manual" 
            },
            'Denmark': { 
                selector: '.denmarkContent', 
                url: "https://www.littconcepthouse.com/collections/danish-antiques-vintage/?sort_by=manual" 
            },
            'Spain': { 
                selector: '.spainContent', 
                url: "https://www.littconcepthouse.com/collections/spanish-antiques/?sort_by=manual" 
            },
            'Italy': { 
                selector: '.italyContent', 
                url: "https://www.littconcepthouse.com/collections/italian-antiques/?sort_by=manual" 
            }
        };

        jQuery.each(pages, function(countryName, data) {
            jQuery('.tabContent tr').append(`
                <td class="tabItem" data-id="${countryName.replace(/&/g, 'and').replace(/\s+/g, '')}">${countryName}</td>
            `);
            jQuery('.sliderWrapper').append(`
                <div class="${data.selector.substring(1)}" data-for="${countryName.replace(/&/g, 'and').replace(/\s+/g, '')}">
                <div class="slider_iv"></div>
                <a class="featured-collection__button button button--primary" href="${data.url.split('?')[0]}"> View All From ${countryName}</a></div>
            `);
        });

        jQuery.each(pages, function(countryName, data) {
            jQuery(data.selector).find('.slider_iv').load(data.url + ' .collection-matrix__wrapper .collection-matrix', function (response, status) {
                if (status === "success") {
                    var items = jQuery(data.selector).find('.product__grid-item');
                    jQuery('.dynamicContentWrapper .collection-matrix > style').remove();
                    if (items.length > 6) {
                        items.slice(6).remove();
                    }
                    items.eq(0).unwrap();
                    items.removeClass('column one-third has-padding-bottom');
                    items.wrap('<div></div>');
                } else {
                    console.error('Failed to load ' + data.selector);
                }
            });
        });

        // Add tab click event to show the corresponding slider
        jQuery('.tabItem').on('click', function() {
            jQuery('.tabItem').removeClass('active');
            jQuery(this).addClass('active');
            var id = jQuery(this).data('id');
            jQuery('.slider_iv').parent().hide(); // Hide all sliders
            jQuery('div[data-for="' + id + '"]').show(); // Show the selected slider

            if(jQuery('.slider_iv.slick-initialized').length > 0) {
                jQuery('.slider_iv.slick-initialized').each(function() {
                    jQuery(this).slick("unslick");
                });
            }
            jQuery('.slider_iv').each(function() {
                jQuery(this).slick({
                    autoplay: false,
                    arrows: true,
                    buttons: false,
                    infinite: true,
                    dots: false,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            });
        });

        // Show the first tab's content by default
        var showFirstItem = setInterval(() => {
            if(jQuery.fn.slick && jQuery('.frenchContent').length > 0) {
                clearInterval(showFirstItem);
                setTimeout(() => {
                    jQuery('.tabItem:first').click();
                }, 500);
            }
        }, 100);

    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
