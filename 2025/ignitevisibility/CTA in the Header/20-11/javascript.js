function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-cta-header')) {
        document.querySelector('body').classList.add('iv-cta-header');

        const el = document.querySelector(".logo__mobile");
        if (!el) return;

        // Create button element
        const btn = document.createElement("a");
        btn.className = "c-hero__button";
        btn.href = "https://go.ignitevisibility.com/contact-us/";
        btn.tabIndex = 0;
        btn.textContent = "Get Started";

        // Insert button after .logo__mobile
        el.insertAdjacentElement("afterend", btn);

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);




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