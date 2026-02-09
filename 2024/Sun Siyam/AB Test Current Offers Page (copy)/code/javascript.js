function loadTestCode() {
    if (!jQuery('body').hasClass('offerIV')) {
        jQuery('body').addClass('offerIV').removeClass('no-slider');

        jQuery('main').prepend(`<div class="heroSection">
            <div class="container">
                <h1>Title: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                <h2>SubTitle: Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
            </div>
        </div>`);

        if(window.location.pathname == '/offers/') {
            jQuery('.offers h1').text('Seize the deal');
        }

        if(jQuery('.offers .offers__content').length == 0) {
            jQuery('.offers h1').after(`<div class="offers__content text-center">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>`);
        }

        jQuery('.offers .offers__item-wrap').each(function() {
            jQuery(this).prepend('<div class="offers__item-img"></div>');
        });

        jQuery('.offers .offers__item-wrap p').each(function() {
            var lines = jQuery(this).html().split('<br>');
            var $ul = jQuery('<ul class="offerLists"></ul>');

            jQuery.each(lines, function(index, line) {
                $ul.append('<li>' + jQuery.trim(line) + '</li>');
            });

            jQuery(this).replaceWith($ul);
        });

        jQuery('.offers .offers__item-title h4').each(function() {
            var newText = jQuery(this).text().replace('Sun Siyam', '').trim();
            var className = newText.toLowerCase().replace(/\s+/g, '_');
            jQuery(this).text(newText).addClass(className);
        });

        jQuery('.offers__item-cta-inner a.cta.orange-outline').each(function() {
            var button = jQuery(this);
            var contentPage = button.attr('href');

            if (!contentPage.startsWith('http') && !contentPage.startsWith('https')) {
                contentPage = 'https://www.sunsiyam.com' + contentPage;
            }

            jQuery.get(contentPage, function(response) {
                var backgroundImage = jQuery(response).find('main > .slider .slider__image').css('background-image');
                var imageUrl = backgroundImage.replace(/^url\(['"]?(.+?)['"]?\)$/, '$1');
                
                if (!imageUrl.startsWith('http') && !imageUrl.startsWith('https')) {
                    imageUrl = 'https://www.sunsiyam.com' + imageUrl;
                }

                imageUrl = imageUrl.replace(/width=\d+/, 'width=100%').replace(/height=\d+/, 'height=300px');
                button.closest('.filter-me').find('.offers__item-img').css('background-image', 'url(' + imageUrl + ')').css('background-size', 'cover');
            });
        });
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);