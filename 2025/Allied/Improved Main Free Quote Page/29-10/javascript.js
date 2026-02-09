function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-QuotePage')) {
        document.querySelector('body').classList.add('iv-QuotePage');

        document.querySelector('form fieldset label[for="MoveDate"]').textContent = "Date of move (an estimate is fine)"

    }
}

// Ensure the script runs only after the body exists
var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);