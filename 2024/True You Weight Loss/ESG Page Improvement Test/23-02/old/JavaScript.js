var $ = jQuery;
if (!$('body').hasClass('esg_iv')) {
    $('body').addClass('esg_iv');
    var refreshInterval = setInterval(function () {
        if ($('.esg_iv #section-1312-540').length > 0) {
            $('.esg_iv #headline-1143-540').text('ESG (Endoscopic Sleeve Gastroplasty) - What is it?');
            $('.esg_iv #text_block-1144-540').removeClass('true-intro').text('Endoscopic Sleeve Gastroplasty, is a non-surgical, incisionless, minimally invasive procedure that allows your gastroenterologist to reduce the overall size of the stomach to promote weight loss.');
            $('.esg_iv #headline-1325-540').text('ESG by True You Weight Loss');
            $('.esg_iv #headline-1327-540').text('Surgical Sleeve');
            clearInterval(refreshInterval);
        }
    }, 200);
}