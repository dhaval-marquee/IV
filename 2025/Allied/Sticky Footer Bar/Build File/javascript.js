// Scroll function on click
document.querySelector('.stickyBottomFooterBar').addEventListener('click', function () {
    const formSection = document.querySelector('[name="InstaQuoteForm"]');
    if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

function FooterStickyBar() {
    const Target = document.querySelector('.moving-from-to .slide-footer');
    const StickyBar = document.querySelector('.stickyBottomFooterBar');
    const header = document.querySelector('header');
    if (!Target || !StickyBar) return;

    const headerHeight = header ? header.clientHeight : 0;
    const targetTop = Target.getBoundingClientRect().top;

    if (targetTop <= headerHeight) {
        StickyBar.classList.remove('stickyBottomFooterHidden');
        document.body.classList.add('stickyBottomBar-active');
    } else {
        StickyBar.classList.add('stickyBottomFooterHidden');
        document.body.classList.remove('stickyBottomBar-active');
    }
}

window.addEventListener('scroll', FooterStickyBar);
FooterStickyBar();