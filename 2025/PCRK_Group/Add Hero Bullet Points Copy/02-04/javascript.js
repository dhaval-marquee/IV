function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-HeroBullet')) {
        document.querySelector('body').classList.add('iv-HeroBullet');

        document.querySelector('.iv-HeroBullet #section-hero a.gb-button').classList.add('iv-hero-btn');

        document.querySelector('.iv-HeroBullet #section-hero a.gb-button').insertAdjacentHTML('beforebegin',`<ul>
            <li>Flexible hours for work-life balance</li>
            <li>Job security in a growing industry</li>
            <li>Love your Job and thrive every day</li>
        </ul>`);
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
