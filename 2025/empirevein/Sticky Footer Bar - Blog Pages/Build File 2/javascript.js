window.addEventListener('scroll', function () {
    if (!document.body.classList.contains('single')) return;

    var stickyButton = document.querySelector('.footer-sticky');
    var stickyButtonHeight = stickyButton ? stickyButton.offsetHeight : 0;
    var chatBar = document.getElementById('apexchat_bar_invitation_wrapper');
    var chatBarHeight = chatBar ? chatBar.offsetHeight : 0;
    var prechatWrapper = document.getElementById('apexchat_prechat_invitation_wrapper');
    var barFrame = document.getElementById('apexchat_bar_invitation_frame');

    if (window.scrollY > 15) {
        document.body.classList.add('scrolled');
        if (prechatWrapper) { prechatWrapper.style.marginBottom = (stickyButtonHeight + chatBarHeight) + 'px'; }
        if (chatBar) { chatBar.style.bottom = stickyButtonHeight + 'px'; }
        if (barFrame) { barFrame.style.bottom = stickyButtonHeight + 'px'; }
        document.body.style.paddingBottom = (stickyButtonHeight + chatBarHeight) + 'px';
    } else {
        document.body.classList.remove('scrolled');
        if (prechatWrapper) { prechatWrapper.style.marginBottom = chatBarHeight + 'px'; }
        if (chatBar) { chatBar.style.bottom = '0'; }
        if (barFrame) { barFrame.style.bottom = '0'; }
        document.body.style.paddingBottom = '0';
    }
});