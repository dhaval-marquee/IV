window.addEventListener('scroll', function () {
    if (window.scrollY > 15) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});