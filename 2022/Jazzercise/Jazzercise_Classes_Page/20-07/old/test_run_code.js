// function() {

    var PreviousPath = document.referrer.replace(/^[^:]+:\/\/[^/]+/, '').replace(/#.*/, '');

    var url = $(location).attr('href');
    url = url.split( '?' )[0];
    url = url.split( '#' )[0];
    

    if (url == "https://www.jazzercise.com/"){    // Always run test if it is Homepage
        console.log('Homepage users.');
        return true
    }

    else if (PreviousPath == '/Classes/Class-Formats' || PreviousPath == '/Classes/Bios' || PreviousPath == '/Classes/Music') { // Exclude classes page users
        
        console.log('Non Targeted Users');
        return false;

    } else { // run for all
        console.log('Targeted Users')
        return true
    }
// }