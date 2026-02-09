document.addEventListener('click', function(e) {
    if (document.querySelectorAll('#cart-discount-input').length > 0) {
        setTimeout(() => {
            console.log('popup opened');
            // Add the following snippet to trigger this event
            window.VWO = window.VWO || [];
            VWO.event = VWO.event || function () {VWO.push(["event"].concat([].slice.call(arguments)))};

            VWO.event("cartFlyoutShown");
        }, 100);
    }
});