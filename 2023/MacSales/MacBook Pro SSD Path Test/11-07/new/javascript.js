$('.product-items-unit__grid .product-items-unit__container').each(function () {
    var currentItemLink = $(this).attr('href');
    var links;
    $.get('https://eshop.macsales.com' + currentItemLink, function (data) {
        links = $(data).find('a[href*="/item/OWC"]').attr('href');
        $(this).attr('href', 'https://eshop.macsales.com' + links);
    }.bind(this));
});





// Product page

// $('#pdp-options-container').after(`<div class="additional_info">
//     <h3 id="pdp-options-title" class="pdp-options__title" style="margin-bottom: 0px;">PageTitle</h3>
//     <form>Options</form>
// </div>`);




// if(window.location.href == 'https://eshop.macsales.com/item/OWC/S3D7E3G120/') {
//     console.log('Working');

//     $.get('https://eshop.macsales.com/item/OWC/YSSDMP120/', function (data) {
//         options = $(data).find('#pdp-explore').text();
//         console.log('Options : ' + options)
//     });
// }

