var loadTest = setInterval(() => {
    var bodyEle = document.querySelector('body');
    if(bodyEle.length > 0 || !bodyEle.classList.contains('locations_iv')) {
        clearInterval(loadTest);

        bodyEle.classList.add('locations_iv');
        document.querySelector('.locations_iv #dropdownMenuButton1').textContent = 'Select Your State';
        document.querySelector('.locations_iv form.location-unknown input#input_4_3').setAttribute('placeholder', 'Enter Your Zip Code');

        var submitButton = document.querySelector('.locations_iv form.location-unknown input#gform_submit_button_4');
        submitButton.addEventListener('click', function () {
            var formError = setInterval(() => {
                if (document.querySelectorAll('.locations_iv .gform_validation_error form.location-unknown').length > 0) {
                    clearInterval(formError);
                    document.querySelector('.locations_iv form.location-unknown input#input_4_3').setAttribute('placeholder', 'Enter Your Zip Code');
                }
            }, 100);
        });

        var cardElements = document.querySelectorAll('.location-accordion .card');
        cardElements.forEach(function(cardItem) {
            var cardHeaderButton = cardItem.querySelector('.card-header button');
            var cardTitle = cardHeaderButton.textContent;
            var collapseElement = cardItem.querySelector('.collapse');
            var titleElement = document.createElement('h2');
            titleElement.className = 'location-title';
            titleElement.textContent = cardTitle;
            collapseElement.insertBefore(titleElement, collapseElement.firstChild);
        });
    }
}, 100);