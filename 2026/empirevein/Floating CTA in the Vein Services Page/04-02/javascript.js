function loadTestCode() {
    if (document.querySelector('body').classList.contains('iv-floating-cta')) return;

    document.querySelector('body').classList.add('iv-floating-cta');

    const floatingCta = `
        <div class="iv-floating-warp" style="display:none;">
            <a class="iv-close-cta" href="javascript:void(0);">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"
                        fill="#0F1729"></path>
                </svg>
            </a>
            <h5>Which Treatment Is Right For Me?</h5>
            <p>Unsure what treatment you need?<br>Get a free customized plan in one consult.</p>
            <a class="iv-floating-cta" href="https://empirevein.com/en/book-online/">Book a Free Consult</a>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', floatingCta);

    const floatingWrap = document.querySelector('.iv-floating-warp');
    const heroSection = document.querySelector('.subpage-img');

    if (!heroSection) return;

    function handleScroll() {
        const heroBottom = heroSection.getBoundingClientRect().bottom;

        if (heroBottom <= 0) {
            floatingWrap.style.display = 'block';
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);

    document.querySelector('.iv-close-cta').addEventListener('click', function () {
        floatingWrap.remove();
    });
}

// Wait for body
const checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
