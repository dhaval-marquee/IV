function loadTestCode() {
    if (!jQuery('body').hasClass('changeCTAText')) {
        jQuery('body').addClass('changeCTAText');
        
        // Put your test code here
        function getElementByInnerText(searchText = '', tagName = 'a'){
            var Tags = document.querySelectorAll(tagName);
            var elementFound = [];
            for (var i = 0; i < Tags.length; i++) {
                if (Tags[i].innerHTML == searchText) {
                    elementFound.push(Tags[i]);
                }
            }
            return elementFound;
        }

        // var i = 0;
        // var changeText =  setInterval(() => {
        //     if(i == 30){
        //         clearInterval(changeText);
        //     }
        //     i++;

        //     console.log('text changing');
            var btnElements1 = getElementByInnerText('CONNECT WITH US');
            if(btnElements1.length > 0){
                btnElements1.forEach(function(btnElement){
                    if(btnElement.classList.contains('btn') && btnElement.classList.contains('btn-red')){
                        console.log('button number is : ', btnElement.textContent);
                        btnElement.innerHTML = 'Request Information';
                    }
                });
            }

            var btnElements2 = getElementByInnerText('Contact');
            if(btnElements2.length > 0){
                btnElements2.forEach(function(btnElement){
                    if(btnElement.classList.contains('btn') && btnElement.classList.contains('btn-red')){
                        console.log('button number is : ', btnElement.textContent);
                        btnElement.innerHTML = 'Request Information';
                    }
                });
            }
        // }, 100);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);