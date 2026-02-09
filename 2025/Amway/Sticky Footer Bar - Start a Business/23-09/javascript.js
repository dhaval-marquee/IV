function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-business-sticky')) {
        document.querySelector('body').classList.add('iv-business-sticky');
        var stickyFooter = document.querySelector('.iv-business-sticky');
        if (stickyFooter) {
            stickyFooter.insertAdjacentHTML('beforeend',`<div class="sticky-footer-bar">
                <a href="https://www.amway.com/en_US/register">
                    <span class="d-none d-md-block">Click Here to Start Making Money with Amway</span>
                    <span class="d-md-none">Click Here to Start Your Amway Business</span>
                </a>
            </div>`);
        }
    }
}
loadTestCode();