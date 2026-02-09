window.onload = function () {
    if(document.querySelectorAll('.sticky-button').length == 0) {
        var button = document.createElement('button');
        button.className = 'sticky-button btn';
        button.innerHTML = 'Book this now';
        document.body.appendChild(button);
    
        window.onscroll = function () {
            var heroSection = document.querySelector('#book-now-top');
            var stickyButton = document.querySelector('.sticky-button');
    
            if (heroSection.getBoundingClientRect().bottom <= 0) {
                stickyButton.style.display = 'block';
            } else {
                stickyButton.style.display = 'none';
            }
        };
    }
};

document.body.addEventListener('click', function (e) {
    if (e.target.classList.contains('sticky-button')) {
        var bookNowTop = document.getElementById('book-now-top');
        if (bookNowTop) {
            bookNowTop.click();
        }
    }
});