function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-works')) {
        document.querySelector('body').classList.add('iv-works');

        document.querySelectorAll('#how-it-works-section p.how-title').forEach(function(title) {
            
            if(title.innerText === "FIND YOUR LOCAL OFFICE") {
                title.innerText = 'PICK A NEARBY LOCATION';
            } 
            if(title.innerText === "PICK YOUR PLAN") {
                title.innerText = 'GET A QUICK QUOTE';
            }
            
        });

        document.querySelector('#how-it-works-section a[ref="#quoteModal"]').innerText = 'GET A QUICK QUOTE!';

    }
}

var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);