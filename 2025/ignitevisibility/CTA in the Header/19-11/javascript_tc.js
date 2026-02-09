// form SubmitEvent
window.ub.hooks.afterFormSubmit.push(function() {
    window.VWO = window.VWO || [];
    VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};
    VWO.event("contactFormSubmitted");
});

//  fire event for contact page
var currentPage = window.location.href.split('?')[0].split('#')[0];
if (currentPage == 'https://go.ignitevisibility.com/contact-us/') {
    // Add the following snippet to trigger this event
    window.VWO = window.VWO || [];
    VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};

    VWO.event("anyContactPageVisits");
}