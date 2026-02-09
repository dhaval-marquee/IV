function loadTestCode() {
    if (!document.querySelector('body').classList.contains('guaranteeLogo')) {
        document.querySelector('body').classList.add('guaranteeLogo');


        document.querySelector('.first-section .nectar-cta').insertAdjacentHTML('afterend',`<div class="logoWrapper">
        <a href="/our-guarantees/" target="_self" class="center img-loaded">
            <img decoding="async" class="img-with-animation skip-lazy st--enlarge-image-1 nectar-lazy loaded" data-animation="none" src="https://tutoring.k12.com/wp-content/uploads/2023/07/Grade-Guarantee-FINAL.png" alt="Grade lift guarantee badge logo" sizes="(max-width: 641px) 100vw, 641px" style="" srcset="https://tutoring.k12.com/wp-content/uploads/2023/07/Grade-Guarantee-FINAL.png 641w, https://tutoring.k12.com/wp-content/uploads/2023/07/Grade-Guarantee-FINAL-300x146.png 300w">
        </a>
        <a href="/our-guarantees/" target="_self" class="center img-loaded">
            <img decoding="async" class="img-with-animation skip-lazy st--enlarge-image-1 nectar-lazy loaded" data-animation="none" src="https://tutoring.k12.com/wp-content/uploads/2023/07/SEAL-APPROVED_TUTOR-5.png" alt="tutor satisfaction guarantee logo" sizes="(max-width: 738px) 100vw, 738px" style="" srcset="https://tutoring.k12.com/wp-content/uploads/2023/07/SEAL-APPROVED_TUTOR-5.png 738w, https://tutoring.k12.com/wp-content/uploads/2023/07/SEAL-APPROVED_TUTOR-5-300x109.png 300w">
        </a>
        </div>`);
    }
}

var waitForElement = setInterval(() => {
    if(document.querySelectorAll('.nectar-cta').length > 0) {
        clearInterval(waitForElement);
        loadTestCode();
    }
    
}, 100);