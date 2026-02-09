function loadTestCode() {
    if (!jQuery('body').hasClass('formIV')) {
        jQuery('body').addClass('formIV');

        var getForm = setInterval(function() {
            var formModal = document.querySelector('form.contact-form');
            if (formModal !== null) {
                clearInterval(getForm);
                jQuery('#lp-1 .form-inner input.button').removeAttr('disabled');
                jQuery('#lp-1 .form-inner #id_zip-code').attr('type', 'tel').attr('onkeypress','return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57');
                jQuery('#lp-1 .form-inner #id_phone-number').attr('type', 'tel');
                
                var cityField = jQuery("#id_city"); 
                cityField.removeAttr("required");
                zipCodeFiled();
            }
        }, 100);
        
        
        function zipCodeFiled() {
            function observerElm(target, callbackFn) {
                new MutationObserver(callbackFn).observe(target, { childList: true, attributes: true, subtree: true });
            }
        
            var targetElement = $('.form.sb-form-inner-pages-form');
            observerElm(targetElement[0], function () {
                console.log('Mutation Observer');
                setTimeout(zipCode, 1000);
            });
        
            var isFetching = false;
            $('.sb-formfield--email').removeClass('full-field');
        
            function zipCode() {
                var lp1 = $('#lp-1');
                if (lp1.length) {
                    $('#id_zip-code').off('change').on('change', function () {
                        var zipCodeVal = this.value;
                        if (zipCodeVal && !isFetching) {
                            isFetching = true;
                            $.getJSON(`https://zip.getziptastic.com/v2/US/${zipCodeVal}`)
                                .done(function (returnedData) {
                                    var cityName = returnedData.city || '';
                                    $('#id_city').val(cityName);
                                    $('.sb-formfield--city').toggle(!cityName);
                                    lp1.find('#id_email-address').closest('p').toggleClass('full-field', !cityName);
                                })
                                .fail(function () {
                                    console.log('Error fetching city name');
                                    $('#id_city').val('');  // Clear city field on error
                                    $('.sb-formfield--city').show();
                                    lp1.find('#id_email-address').closest('p').addClass('full-field');
                                })
                                .always(function () {
                                    isFetching = false; // Reset state after fetch completion
                                });
                        }
                    });
                }
            }
            zipCode;
        }
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined') {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);