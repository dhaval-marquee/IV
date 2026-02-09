function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-LocationPage')) {
        document.querySelector('body').classList.add('iv-LocationPage');

        document.querySelectorAll('.iv-LocationPage .candee .unitButtonsWrapper .action').forEach(function (element) {
            element.innerHTML = 'Reserve';
        });
        
        
    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);