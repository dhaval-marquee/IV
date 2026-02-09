function() {

    var PreviousPath = document.referrer.replace(/^[^:]+:\/\/[^/]+/, '').replace(/#.*/, '');

    var url = window.location.href;
    url = url.split( '?' )[0];
    url = url.split( '#' )[0];
    

    if (url == "https://www.jazzercise.com/"){    // Always run test if it is Homepage

        console.log('Homepage users.');

        return true
        
    } else if (PreviousPath == 'https://www.jazzercise.com/' || PreviousPath == '/') { // Exclude all other users
        return true

    } else {
        return false
    }
}