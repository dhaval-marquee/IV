function loadTestCode() {
    if (!document.querySelector('body').classList.contains('startHere_iv')) {
        document.querySelector('body').classList.add('startHere_iv');

        document.querySelector('#instaquote-carousel fieldset[data-step="1"] .slide-header').insertAdjacentHTML('afterbegin', `<div class="startHere">
            <h4>Start Here</h4>
            <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Allied/yellow-arrow.png" alt="yellow-arrow">
        </div>`);
    }
}

// Ensure the script runs only after the body exists
var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);