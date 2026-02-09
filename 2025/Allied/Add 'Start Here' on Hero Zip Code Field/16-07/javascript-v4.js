function loadTestCode() {
    if (!document.querySelector('body').classList.contains('startHere_iv')) {
        document.querySelector('body').classList.add('startHere_iv');

        document.querySelector('#instaquote-carousel fieldset[data-step="1"] .slide-header').insertAdjacentHTML('afterbegin', `<div class="startHere">
            <h4>Start Here</h4>
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1752652260/Allied/Allied-arrow-icon4.png" alt="yellow-arrow">
        </div>`);

        const button = document.getElementById('insta-quote-step-1');
        const wrapper = document.createElement('div');
        wrapper.className = 'iv-custom-button-wrapper'; 
        button.parentNode.insertBefore(wrapper, button);
        wrapper.appendChild(button);
    }
}

// Ensure the script runs only after the body exists
var checkCondition = setInterval(function () {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 500);