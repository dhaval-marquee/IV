function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-footer-bar')) {
        document.querySelector('body').classList.add('iv-footer-bar');

     var ATCButton = document.querySelector('#book + div > div:last-child > button:first-child');

if (ATCButton) {
    // Clone the button element
    const clonedButton = ATCButton.cloneNode(true);

    // Create an <a> wrapper
    const aTag = document.createElement('a');
    aTag.href = 'javascript:;';
    aTag.className = 'iv-sticky-footer-bar';

    // Append the cloned button to the <a>
    aTag.appendChild(clonedButton);

    // Append the <a> to the body
    document.body.appendChild(aTag);
}


        // Scroll function on click
        document.querySelector('.iv-sticky-footer-bar').addEventListener('click', function () {
            const formSection = document.querySelector('[name="InstaQuoteForm"]');
            if (formSection) {
                formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });

        function ivFooterStickyBar() {
            const ivTarget = document.querySelector('.moving-from-to .slide-footer');
            const ivStickyBar = document.querySelector('.iv-sticky-footer-bar');
            const header = document.querySelector('header');
            if (!ivTarget || !ivStickyBar) return;

            const headerHeight = header ? header.clientHeight : 0;
            const targetTop = ivTarget.getBoundingClientRect().top;

            if (targetTop <= headerHeight) {
                ivStickyBar.classList.remove('iv-sticky-footer-hidden');
                document.body.classList.add('iv-stickybar-active');
            } else {
                ivStickyBar.classList.add('iv-sticky-footer-hidden');
                document.body.classList.remove('iv-stickybar-active');
            }
        }

        window.addEventListener('scroll', ivFooterStickyBar);
        ivFooterStickyBar();
    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);