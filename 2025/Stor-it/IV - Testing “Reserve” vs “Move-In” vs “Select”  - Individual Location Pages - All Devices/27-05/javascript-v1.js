function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-LocationPage')) {
        document.querySelector('body').classList.add('iv-LocationPage');


        var getClassInterval = setInterval(function(){
            if(document.querySelectorAll('.candee .unitButtonsWrapper .action').length > 0){
                clearInterval(getClassInterval);

                document.querySelectorAll('.candee .unitButtonsWrapper .action').forEach(el => {
                    const text = el?.innerText?.trim();
                    if (text && text !== "Call") el.textContent = "Reserve";
                });
            }
        },500);

    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);