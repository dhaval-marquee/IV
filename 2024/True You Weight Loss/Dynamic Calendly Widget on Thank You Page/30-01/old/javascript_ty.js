var get_cookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

if(get_cookie('locationCary') == 'true') {
    Calendly.initInlineWidget({
        url: 'https://calendly.com/cary-consultation-schedule/true-you-weight-loss-consultation?hide_gdpr_banner=1',
        parentElement: document.getElementById('calendly-embed')
    });
} else {
    Calendly.initInlineWidget({
        url: 'https://calendly.com/atlanta-consultation/true-you-weight-loss-consultation?hide_gdpr_banner=1',
        parentElement: document.getElementById('calendly-embed')
    });
}