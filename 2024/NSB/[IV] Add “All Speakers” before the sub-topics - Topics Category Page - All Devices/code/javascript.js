function loadTestCode() {
    if (!document.querySelector('body').classList.contains('topicsCategory_iv')) {
        document.querySelector('body').classList.add('topicsCategory_iv');

        document.querySelector('#subtopic-list ul').insertAdjacentHTML('beforeend',`<li class="allSpeakers">
            <a href="https://www.nsb.com/topics/bestselling-authors-celebrity/">All Speakers</a>
        </li>`);

        if (document.querySelectorAll('#subtopic-list ul li.active').length == 0) {
            document.querySelector('#subtopic-list ul li.allSpeakers').classList.add('active');
        }

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);