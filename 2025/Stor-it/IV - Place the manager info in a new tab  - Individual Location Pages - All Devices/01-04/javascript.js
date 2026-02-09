function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-LocationPage')) {
        document.querySelector('body').classList.add('iv-LocationPage');

        document.querySelector('.locationContent .tabs button + p').insertAdjacentHTML('afterend',`<button class="tablinks" onclick="openTab(event, 'tab6')">Manager</button>`);

    

    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);