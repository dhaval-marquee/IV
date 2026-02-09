function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-LocationPage')) {
        document.querySelector('body').classList.add('iv-LocationPage');

        document.querySelectorAll('.candee .unitButtonsWrapper .action').forEach(function(title) {
            if (title.innerText.trim() === "MOVE-IN") {
                title.innerHTML = 'Select';
            }
        });
    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);