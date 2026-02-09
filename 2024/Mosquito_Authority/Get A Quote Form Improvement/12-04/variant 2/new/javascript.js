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
            zipCode()
        });
        var isFetching = false;
        document.querySelector('.sb-formfield--city').style.display = "none";
        function zipCode() {
            document.getElementById('id_zip-code').onchange = function () {
                if (this.value && !isFetching) {
                    isFetching = true;
                    fetch("https://zip.getziptastic.com/v2/US/" + this.value)
                        .then(response => response.json())
                        .then(returnedData => {
                            var cityName = returnedData.city ? returnedData.city : '';
                            document.querySelector('#id_city').value = cityName;
                            document.querySelector('.sb-formfield--city').style.display = cityName != '' ? 'none' : '';
                        }).catch(error => {
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