function loadTestCode() {
    if (!document.querySelector('body').classList.contains('banner_iv')) {
        document.querySelector('body').classList.add('banner_iv');

        document.querySelector('#MainContent_PromoBannerControl_pnlPromo').insertAdjacentHTML('beforeend', `<div class="solidarityBanner hidden">
            <p>Our hearts are with the resilient community of Los Angeles during this challenging time, and we extend our deepest gratitude to the brave first responders who are tirelessly working to protect lives and&nbsp;property.</p>
                <a href="javascript:;" class="readMore" id="readMore">[Read more] <span class="arrowIcon"></span></a>
                <a href="javascript:;" class="readLess" id="readLess">[Read Less] <span class="arrowIcon"></span></a>
        </div>`);

        document.addEventListener("click", function (e) {
            if (e.target.id == "readMore" || e.target.id == "readLess") {
                const banner = document.querySelector('.solidarityBanner');
                banner.classList.toggle('hidden');
            }
        });
        

    }
}

// Check condition and initialize the code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);