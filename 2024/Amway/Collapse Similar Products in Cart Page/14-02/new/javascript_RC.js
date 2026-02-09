/* CUSTOM CODE */
function loadTestCode() {
    if (!$('body').hasClass('product_dropdown')) {
        $('body').addClass('product_dropdown');
        var getTitle = setInterval(() => {
            if($('.amer-suggestion-tiles__title').length) {
                clearInterval(getTitle);

                $(document).on('click', '.amer-suggestion-tiles__title', function(){
                    $(this).toggleClass('active');
                    $('.amer-suggestion-tiles__window').slideToggle();
                });
            }
        }, 100);
    }
}

var jQisLoaded = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jQisLoaded);
        loadTestCode();
    } 
}, 100);