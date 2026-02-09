    var loadTest = setInterval(() => {
        if(document.querySelectorAll('body').length > 0 && !document.querySelector('body').classList.contains('formTest_iv')) {
            clearInterval(loadTest);

            document.querySelector('body').classList.add('formTest_iv');
            // document.querySelectorAll('div.archive-wrapper')[1].append(document.querySelector('.single-wrapper .rec-wrapper'));
            // document.querySelector('.single-wrapper .request-insert').before(document.querySelector('.tips-form-wrapper')); 
            $('#quoteModal #gform_page_14_1 .gform_page_fields').unwrap();
            $('#quoteModal #gform_page_14_2 .gform_page_fields').unwrap();

            $('#quoteModal .header-right').append('<h2>Choose Your Preferred Cleaning Option</h2>');
            

            $('#quoteModal .gfield_radio .gform-field-label').eq('0').html($('#quoteModal .gfield_radio .gform-field-label').eq('0').html().replace('One-Time Clean','One-Time Cleaning Service'));
            $('#quoteModal .gfield_radio .gform-field-label').eq('1').html($('#quoteModal .gfield_radio .gform-field-label').eq('1').html().replace('Recurring Clean','Recurring Cleaning Plan'));
            $('#quoteModal .gform_body fieldset').eq(0).after($('#quoteModal #field_14_30'));
            $('#quoteModal #field_14_1 #input_14_1').append($('#quoteModal #field_14_3'));

            $('#field_14_1').after( '<fieldset class="addressWrapper"></fieldset>');


            $('#quoteModal .addressWrapper').append($('#quoteModal #field_14_31'));
            $('#quoteModal .addressWrapper').append($('#quoteModal #field_14_32'));

            // $('#quoteModal .addressWrapper').append($('#quoteModal #field_14_31'));
            $('#quoteModal .addressWrapper').after($('#quoteModal #field_14_9'));
            $('#quoteModal #input_14_9').append($('#quoteModal #field_14_35'));
            $('#quoteModal #input_14_9').append($('#quoteModal #field_14_4'));
            

            $('.gform_page_footer input[name="gform_field_values"]').after($('#quoteModal #field_14_22'));
            $('#field_14_22').after($('#quoteModal #field_14_24'));

            
        }
    }, 100);