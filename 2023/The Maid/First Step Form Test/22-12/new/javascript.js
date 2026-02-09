/* CUSTOM CODE */
console.log('changed');
var loadTest = setInterval(() => {
    if(document.querySelectorAll('body').length > 0 && !document.querySelector('body').classList.contains('formTest_iv')) {
        clearInterval(loadTest);
        // Check mark placement

        $('body').addClass('formTest_iv');
        
        function runCode() {
            $('.gform_page_footer #gform_next_button_14_8').closest('.gform_page_footer').after($('#choice_14_22_1').closest('fieldset'));
            $('.gform_page_footer #gform_next_button_14_8').closest('.gform_page_footer').after($('#choice_14_24_1').closest('fieldset'));
            $('#quoteModal .gfield_radio .gform-field-label')?.eq('0').html($('#quoteModal .gfield_radio .gform-field-label')?.eq('0').html().replace('One-Time Clean','One-Time Cleaning Service'));
            $('#quoteModal .gfield_radio .gform-field-label')?.eq('1').html($('#quoteModal .gfield_radio .gform-field-label')?.eq('1').html().replace('Recurring Clean','Recurring Cleaning Plan'));
            $('#quoteModal .gfield_radio .gform-field-label')?.eq('1').after('<br><span>(Weekly, Bi-Weekly, Monthly)</span>');
            $('#quoteModal #gf_page_steps_14').after('<h3 class="modal_title">Choose Your Preferred Cleaning Option</h3>');
            $('#quoteModal #gf_page_steps_14').after(`<picture class="overlay-icon-image"><source type="image/webp" srcset="/wp-content/uploads/2022/07/unknown-icon.png.webp"><img src="/wp-content/uploads/2022/07/unknown-icon.png" alt="Yellow Maids car"></picture>`)
            var checkmark = setInterval(() => {
                if(!document.getElementById('choice_14_22_1').checked && !document.getElementById('choice_14_24_1').checked) {
                    clearInterval(checkmark);
                    setTimeout(function() {
                        $('#choice_14_22_1').prop('checked', true);
                        $('#choice_14_24_1').prop('checked', true);
                    }, 2000);
                }
            }, 100);
        }
        runCode();
        document.addEventListener('click', function(e){
            
            var i = 0;
                var runCodeOnceAgain = setInterval(() => {
                    if(e.target && document.querySelectorAll('.modal_title').length == 0) {
                        runCode();
                    }

                    if(i === 500) {
                        clearInterval(runCodeOnceAgain);
                    }
                    i++
                }, 10);
        });
    }
}, 100);
