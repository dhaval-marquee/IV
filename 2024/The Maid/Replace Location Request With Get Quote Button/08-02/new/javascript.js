function loadTestCode() {
    const tagClass = 'location-forms';
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains(tagClass)) {
        bodyEle.classList.add(tagClass);

        // Observer
        function observerElm(target, callbackFn) {
            var config = {
                childList: true,
                attributes: true,
                subtree: true,
            };
            var callback = function(mutationsList, observer) {
                callbackFn(mutationsList, observer); 
            };
            var observer = new MutationObserver(callback);
            observer.observe(target, config);
        }

        var targetElement = document.querySelector('.location-forms .section-content');
        observerElm(targetElement, function(mutationsList, observer) {
            locationFormsMain();
        });

        // Update input text
        function locationFormsMain(){
            var locationForms = document.querySelector('[data-target="#unknown-getAQuote"]');
            if(locationForms){
                var zipCode = document.querySelector('form#gform_15 input#input_15_3');
                if (zipCode) {
                    if (zipCode.placeholder !== 'Zip code') {
                        zipCode.placeholder = 'Zip code';
                    }
                }
            }
        }
        
    }
}
loadTestCode();