function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-BookingPage')) {
        document.querySelector('body').classList.add('iv-BookingPage');

        document.querySelectorAll('.iv-BookingPage .footer_locations li').forEach(li => {
            // Move phone <a> outside <p>
            if (li.querySelector('p') && li.querySelector('p a')) {
                li.querySelector('p').after(li.querySelector('p a'));
            }
            // Disable title link
            if (li.querySelector('h5 a')) {
                li.querySelector('h5 a').setAttribute('href', 'javascript:void(0)');
            }
        });

    }
}

const checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
