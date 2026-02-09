$('.product-items-unit__grid .product-items-unit__container').each(function () {
    var currentItemLink = $(this).attr('href');
    var links;
    $.get('https://eshop.macsales.com' + currentItemLink, function (data) {
        links = $(data).find('a[href*="/item/OWC"]').attr('href');
        $(this).attr('href', 'https://eshop.macsales.com' + links);
    }.bind(this));
});