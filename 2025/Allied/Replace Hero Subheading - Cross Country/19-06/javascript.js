function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-hero-subheading')) {
        document.querySelector('body').classList.add('iv-hero-subheading');

        const ivSubHeading = document.querySelector('form #instaquote-carousel .slide-header .textcontent h3');
        if (ivSubHeading) {
            ivSubHeading.innerText = 'Request a moving quote from Allied Van Lines.';
        }

        // Form button button
        const button = document.getElementById('insta-quote-step-1');
        const wrapper = document.createElement('div');
        wrapper.className = 'iv-custom-button-wrapper'; 
        button.parentNode.insertBefore(wrapper, button);
        wrapper.appendChild(button);


    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);