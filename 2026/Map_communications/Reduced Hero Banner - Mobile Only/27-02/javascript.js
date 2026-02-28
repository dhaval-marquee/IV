// Time difference calculation
let Time1 = new Date().getTime()/1000;
console.log('Time 1 > ' + Time1);

function loadTestCode() {
    if (!document.querySelector('body').classList.contains('ivHeroBanner')) {
        document.querySelector('body').classList.add('ivHeroBanner');
        document.querySelectorAll('body main .home-banner picture > source')[0].setAttribute('srcset','https://www.mapcommunications.com/wp-content/uploads/2025/07/home-banner.webp');

        let Time2 = new Date().getTime()/1000;
console.log('Time 2 > ' + Time2);

let timeDifference = Time2 - Time1;
console.log('Time difference > ' + timeDifference + ' seconds');
// Time difference calculation over

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);