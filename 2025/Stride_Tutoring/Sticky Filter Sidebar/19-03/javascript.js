function loadTestCode() {
    if (!document.body.classList.contains('sticky_bar_iv')) {
        document.body.classList.add('sticky_bar_iv');

        let buttons = document.querySelectorAll(".filter-accordion button");
        if(buttons){
            buttons.forEach((button, index) => {
                if (index !== 0) {
                    button.click();
                }
            });
        }

        document.querySelectorAll('section header').forEach((head) => {
            if (head.innerText === 'Filters' && !document.querySelector('.iv-sidebar-filtter')) {
                head.closest('section').classList.add('iv-sidebar-filtter');
            }
        });
        
        let styleTag = document.createElement("style");
        styleTag.innerHTML = `
            .iv-sidebar-filtter {
                position: sticky;
                top: 100px;
                height: 100%;
            }
        `;
        document.head.appendChild(styleTag);

    }
}

var checkCondition = setInterval(function() {
    if (document.body && document.querySelector('.filter-accordion button')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 2300);
