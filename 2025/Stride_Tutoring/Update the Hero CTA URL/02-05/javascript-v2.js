function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-HeroCTA')) {
        document.querySelector('body').classList.add('iv-HeroCTA');

        document.querySelector('.iv-HeroCTA .first-section .nectar-cta  a.link_text').setAttribute('href','https://book.tutoring.k12.com/quick-find');

        document.querySelector('.iv-HeroCTA .first-section .nectar-cta  a.link_text').innerHTML = `<span class="text"><span class="char" style="animation-delay: 0s;">G</span><span class="char" style="animation-delay: 0.015s;">e</span><span class="char" style="animation-delay: 0.03s;">t</span> <span class="char" style="animation-delay: 0.165s;">S</span><span class="char" style="animation-delay: 0.18s;">t</span><span class="char" style="animation-delay: 0.195s;">a</span><span class="char" style="animation-delay: 0.21s;">r</span><span class="char" style="animation-delay: 0.225s;">t</span><span class="char" style="animation-delay: 0.24s;">e</span><span class="char" style="animation-delay: 0.24s;">d</span></span>`;

    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);