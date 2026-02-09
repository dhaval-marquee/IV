if (!document.body.classList.contains('quote_form_iv')) {
    document.body.classList.add('quote_form_iv');
    // Modal Form changes
    var getForm = setInterval(function() {
        var formModal = document.querySelector('.quote_form_iv #form-modal');
        if (formModal !== null) {
            clearInterval(getForm);
            var formModalTitle = formModal.querySelector('.form-modal-main > span');
            formModalTitle.classList.add('form-modal-title');
            formModalTitle.textContent = 'Get A Free Quote';
            var formModalDesc = formModal.querySelector('.form-modal-main > p');
            formModalDesc.classList.add('form-modal-desc');
            formModalDesc.textContent = 'Fill out your details below and we\'ll contact you with a no-obligation price quote shortly!';
            document.querySelector('label[for="id_zip-code"]').textContent = 'Zip Code';
            zipCodeFiled();
        }
    }, 100);

    // Zipcode to get City name
    function zipCodeFiled() {
        function observerElm(target, callbackFn) {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function (mutationsList, observer) {
                callbackFn(mutationsList, observer);
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        }
        var targetElement = document.querySelector('.form-modal-main');
        observerElm(targetElement, function (mutationsList, observer) {
            console.log('Mutation Observer');
            zipCode()
        });
        var isFetching = false;
        document.querySelector('.sb-formfield--city').style.display = "none";
        document.querySelector('.sb-formfield--email').classList.remove('full-field');

        function zipCode() {
            document.getElementById('id_zip-code').onchange = function () {
                if (this.value && !isFetching) {
                    isFetching = true;

                    var pincode = this.value;
                    var url = `https://nominatim.openstreetmap.org/search?postalcode=${pincode}&format=json&addressdetails=1`;

                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            var cityName = '';
                            if (data.length > 0 && data[0].address) {
                                cityName = data[0].address.city || data[0].address.town || data[0].address.village || '';
                            }
                            console.log('City Name is ' + cityName);
                            document.querySelector('#id_city').value = cityName;
                            document.querySelector('.sb-formfield--city').style.display = cityName != '' ? 'none' : '';
                            var emailFormField = document.querySelector('.sb-formfield--email');
                            if (cityName != '') {
                                emailFormField.classList.remove('full-field');
                            } else {
                                emailFormField.classList.add('full-field');
                            }
                        })
                        .catch(error => {
                            console.error("There was a problem with the fetch operation:", error);
                        })
                        .finally(() => {
                            isFetching = false;
                        });
                }
            };
        }
    }
}
