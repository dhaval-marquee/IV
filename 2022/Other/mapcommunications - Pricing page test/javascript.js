if (!$('body').hasClass('iv_pricing_page')) {
    $('body').addClass('iv_pricing_page');

    $('.iv_pricing_page .pricing-table').wrapInner('<div class="row"></div>');
    $('.iv_pricing_page .pricing-table').prepend('<h1 class="strong text-center">Simple Pricing. Exceptional Customer Experience.</h1>');

    $('.iv_pricing_page .pricing-table .pricing-chart:nth-of-type(1) h2').text('Pay-As-You-Go');
    $('.iv_pricing_page .pricing-table .pricing-chart:nth-of-type(2) h2').text('Business').prepend('<span class="mostPopular">MOST POPULAR</span>');
    $('.iv_pricing_page .pricing-table .pricing-chart:nth-of-type(3) h2').text('Enterprise');

    $('.iv_pricing_page .pricing-table .pricing-chart:nth-of-type(1) h3').after('<p>$1.27 <span>per minute</span></p>');
    $('.iv_pricing_page .pricing-table .pricing-chart:nth-of-type(2) h3').after('<p>125 minutes</p>');
    $('.iv_pricing_page .pricing-table .pricing-chart:nth-of-type(3) h3').after('<p>225 minutes</p>');

    $('.iv_pricing_page .pricing-table .pricing-chart .h1 span').text('/mo');
    $('.iv_pricing_page .pricing-table .pricing-chart a.pricing-btn').text('Get Started For Free');

    $('.iv_pricing_page .pricing-table .pricing-chart a.pricing-btn').attr('href','https://www.mapcommunications.com/contact-us/request-free-trial/');

    $('.iv_pricing_page .bottom-content .entry-content').html('<p class="text-center"><a class="strong" href="https://mapcommunications.com/contact-us/request-information/">Need more minutes? Click here to get a custom quote</a></p>');

    $('.iv_pricing_page .feature-pricing h2').addClass('text-center').text('Every Plan Includes:');

    $('.iv_pricing_page').css('visibility', 'visible');

} else {
    setTimeout(function() {
        $('body').css('visibility', 'visible');
    }, 3000);
}