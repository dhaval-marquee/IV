function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-header-cta')) {
        document.querySelector('body').classList.add('iv-header-cta');

        const ivHeaderBtn = `<a href="https://venturex.com/locations/" class="iv-header-btn">Get Started</a>`;
     
        const ivHeaderContainer = document.querySelector('header .oxy-header-container');
        
        if (ivHeaderContainer) {            
            ivHeaderContainer.insertAdjacentHTML('beforeend', ivHeaderBtn);
        }

        const header = document.querySelector("header");
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                header.classList.add("oxy-sticky-header-active");
            } else {
                header.classList.remove("oxy-sticky-header-active");
            }
        });
        
    }
}

const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        loadTestCode();
    }
}, 2500);