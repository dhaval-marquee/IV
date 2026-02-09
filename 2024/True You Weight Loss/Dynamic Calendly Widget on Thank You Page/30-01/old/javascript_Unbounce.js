function set_cookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";secure;" + expires + ";domain=.trueyouweightloss.com;path=/";
}
function delete_cookie(name) {
    document.cookie = name +'=; domain=.trueyouweightloss.com; path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

window.ub.hooks.afterFormSubmit.push(function () {
    if(document.querySelector('select[name="select_a_preferred_location"]').value == 'Cary, NC') {
        set_cookie('locationCary', 'true', 30);
    } else {
        delete_cookie('locationCary');
    }
});