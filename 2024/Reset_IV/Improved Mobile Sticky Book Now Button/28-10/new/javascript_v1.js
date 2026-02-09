function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-sticky-button')) {
        document.querySelector('body').classList.add('iv-sticky-button');

        document.querySelector('.iv-sticky-button .sticky-button.book-now').innerText = 'BOOK THIS NOW & PAY LATER';

        function adjustOffset() {
            const bookNowSticky = document.querySelector('#book-now-sticky');
            const accessWidget = document.querySelector('access-widget-ui.notranslate:nth-child(5)');
            if (bookNowSticky && accessWidget) {
                clearInterval(checkInterval);
                const bookNowStickyHeight = bookNowSticky.offsetHeight;
                const totalOffset = bookNowStickyHeight + 10;
                accessWidget.style.setProperty('--offset-top', `${totalOffset}px`);
            }
        }
        const checkInterval = setInterval(adjustOffset, 5000);
    
        window.addEventListener('DOMContentLoaded', adjustOffset);
        window.addEventListener('resize', adjustOffset);

    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over