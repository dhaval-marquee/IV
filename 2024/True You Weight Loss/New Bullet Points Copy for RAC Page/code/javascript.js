function loadTestCode() {
    if (!document.querySelector('body').classList.contains('newBulletPointsIV')) {
        document.querySelector('body').classList.add('newBulletPointsIV');
        
        // Put your test code here

        // Variant 1
        document.querySelector('div[data-id="c612025"] li:first-child .elementor-icon-list-text').textContent = 'Find out how much weight you\'ll lose.';

        // Variant 2
        document.querySelector('div[data-id="c612025"] li:first-child .elementor-icon-list-text').textContent = 'What to expect: from prep to recovery.';


        // Variant 3
        document.querySelector('div[data-id="c612025"] li:first-child .elementor-icon-list-text').textContent = 'Benefits of working with obesity certified doctors.';

        // Variant 4
        document.querySelector('div[data-id="c612025"] li:first-child .elementor-icon-list-text').textContent = 'Learn about alternatives to surgery/medication.';

        // Variant 5
        document.querySelector('div[data-id="c612025"] li:first-child .elementor-icon-list-text').textContent = 'Learn about non-surgical, out-patient procedures.';
    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);