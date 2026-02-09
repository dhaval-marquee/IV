if (!$('body').hasClass('modal_iv')) {
    $('body').addClass('modal_iv');

    var checkclass = setInterval(function() {
        if($('.modal_iv #lets-do-this').length > 0) {
            clearInterval(checkclass);
            $('.modal_iv #lets-do-this').closest('.fancybox-wrap').addClass('form_wrapper');
            $('.modal_iv #lets-do-this h1').text('No Membership. Just Results.');
            $('.modal_iv #lets-do-this h1 + p').text('Book your FREE visit to our World Class, Family Owned Gym today!');
            
            function changeFooter() {
                var changeText = setInterval(() => {
                    if($('#no_cc').length == 0) {
                        $('.modal_iv #lets-do-this input[type="submit"]').attr('value','TRY FOR FREE');
                        $('.modal_iv #lets-do-this input[type="submit"]').after('<span id="no_cc"><sup>*</sup>No Credit Card Required<sup>*</sup></span>');
                    } else if($('#no_cc').length == 0) {
                        clearInterval(changeText);
                    }
                }, 50);
            }
            changeFooter();

            $(document).on('click', 'a[href="#lets-do-this"]', function() {
                $('.modal_iv #lets-do-this').closest('.fancybox-wrap').addClass('form_wrapper');
            });

            function observerForLoadingBlockDesktop(){
                // observer binding
                var target = document.querySelector('.modal_iv #lets-do-this form .gform_footer');
                const config = {
                    childList: true, characterData: true, subtree: true, attributes: true,
                };
                var running = false; 
                var t;
                const callback = function(mutationsList, observer) {
                    for (let mutation of mutationsList) {
                        if(running) return;
        
                        console.log('text changed')
                        changeFooter();
        
                        running = true;
                        setTimeout(function(){running = false;}, 100);
                    }
                };
                const observer = new MutationObserver(callback);
                observer.observe(target, config);
                // End observer binding
            }
            observerForLoadingBlockDesktop();
        }
    }, 100);
}