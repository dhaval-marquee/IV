function loadTestCode() {
    if (!document.querySelector('body').classList.contains('requestInfoBtn')) {
        document.querySelector('body').classList.add('requestInfoBtn');
        
        // For all pages
        document.querySelectorAll('header #requestinfo').length > 0 ? document.querySelector('header #requestinfo').insertAdjacentHTML('beforebegin','<a href="https://www.nsb.com/request-information/" id="requestinfo" class="requestInfoPageBtn">Request Info</a>') : null;

        // For homepage
        if(window.location.href.split('?')[0].split('#')[0] == 'https://www.nsb.com/') {
            var getButtonHomepage = setInterval(() => {
                if (document.querySelectorAll('#homepage #subhero .left .cta button').length > 0) {
                    clearInterval(getButtonHomepage);
                    document.querySelector('#homepage #subhero .left .cta button').insertAdjacentHTML('beforebegin','<a href="https://www.nsb.com/request-information/" class="requestInfoPageBtn">Get Started Here</a>');
                }
            }, 100);
        }

        // For speakers page
        if (window.location.href.indexOf('/speakers/') > -1) {
            var getButtonSpeakerPage = setInterval(() => {
                if (document.querySelectorAll('#addspeaker.request').length > 0) {
                    clearInterval(getButtonSpeakerPage);
                    document.querySelector('#addspeaker.request').insertAdjacentHTML('beforebegin','<a href="https://www.nsb.com/request-information/" class="requestInfoPageBtn speakerBtn">Request Availability</a>');
                }
            }, 100);
        }

        // for information page
        if(window.location.href.split('?')[0].split('#')[0] == 'https://www.nsb.com/request-information/') {
            document.addEventListener('click', function(e) {
                if(e.target.id == 'requestinfo') {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $("#requestPage").offset().top - $('header').height()
                    }, 400);
                }
            });
        }
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);