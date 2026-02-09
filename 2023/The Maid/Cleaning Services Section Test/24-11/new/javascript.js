function loadTestCode() {
    if (!$('body').hasClass('popup_iv')) {
        $('body').addClass('popup_iv');

        document.querySelector('#services-section .container').insertAdjacentHTML('afterend',`<div class="popupItems"></div><div class="popupItemPopup"></div>`);

        $('.popupItemPopup').append(`<div class="mq_modal">
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <div class="mq_modal_header">
                        <a href="javascript:;" class="mq_close"></a>    
                    </div>
                    <div class="mq_modal_content"></div>
                </div>
            </div>
        </div>`);
        fetch('https://www.maids.com/')
            .then(response => response.text())
            .then(data => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(data, 'text/html');

                var newContent = doc.querySelector('#service-item .slider-nav.container');
                document.querySelector('.popupItems').appendChild(newContent.cloneNode(true));

                var newContent = doc.querySelector('#service-copy');
                document.querySelector('.mq_modal_content').appendChild(newContent.cloneNode(true));

                $('.popupItemPopup #service-copy .d-flex').eq(0).unwrap();
                $('.popupItemPopup #service-copy .d-flex').eq(0).unwrap();

                $('.popupItemPopup .mq_modal_content > .d-flex').each(function(i){
                    $(this).attr('service-Popup', (i+1));
                    $(this).attr('class','popUpContent');
                });

                $('.popupItems > div').attr('class','container');
                $('.popupItems .container .service-option').each(function(i){
                    $(this).attr('service-item', (i+1));
                    $(this).attr('class','popUpItem');
                });
                
                $('.popup_iv .popUpContent .service-text .copy a.service-link').before('<div><a href="javascript:;" class="btn" data-toggle="modal" data-target="#quoteModal">Get A Free Quote</a></div>');
            })
            .catch(error => console.error('Error:', error));

        // Modal Open & Close
        $(document).on('click','.popUpItem', function(){
            var currentSelectedItem = $(this).attr('service-item');

            $('.popUpContent').removeClass('active');
            $('.popUpContent').each(function(){
                var popUpNumber = $(this).attr('service-popup');
                if(popUpNumber == currentSelectedItem) {
                    $(this).addClass('active');
                };
                
            });

            $('.popup_iv .mq_modal').addClass('fade').show();
            $('.popup_iv').addClass('mq_modal_open');
            setTimeout(() => {
                $('.popup_iv .mq_modal').addClass('open');
            }, 75);
        });
        $('.popup_iv .mq_modal_overlay, .popup_iv .mq_close').on('click', function(){
            $('.popup_iv').removeClass('mq_modal_open');
            $('.popup_iv .mq_modal').removeClass('open');
            setTimeout(() => {
                $('.popup_iv .mq_modal').hide();
            }, 75);
        });
    }
}
loadTestCode();