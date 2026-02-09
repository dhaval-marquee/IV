function loadTestCode() {
    if (!document.body.classList.contains('location_form_iv')) {
        document.body.classList.add('location_form_iv');
        var locationSearch = document.querySelector('.location_form_iv #location-search');
        if (locationSearch !== null) {
            var input = locationSearch.querySelector('input');
            input.setAttribute('type', 'tel');
            input.setAttribute('placeholder', 'Enter Your Zip Code Here');
            var button = locationSearch.querySelector('button');
            button.textContent = 'Find a Location Near Me & Get a Quote';
        }
    }
}
var waitForSearch= setInterval(() => {
    if(document.querySelector('#location-search')){
        clearInterval(waitForSearch);
        loadTestCode();
    }
}, 200);