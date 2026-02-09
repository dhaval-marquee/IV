function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('secondNav_iv')) {
        bodyEle.classList.add('secondNav_iv');
        
        // Put your test code here
        document.querySelector('#master header').insertAdjacentHTML('beforeend', `<ul id="secondNav" style="display:none">
            <li>
                <a href="https://www.shirtspace.com/t-shirts">T-Shirts</a>
            </li>
            <li>
                <a href="https://www.shirtspace.com/tank-tops-sleeveless-shirts">Tanktops</a>
            </li>
            <li>
                <a href="https://www.shirtspace.com/sales">Best Sellers</a>
            </li>
        </ul>`);
    }
}

// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over