function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('supportTest')) {
        bodyEle.classList.add('supportTest');
        
        // Put your test code here
        document.querySelector('.supportTest .of-narrow aside').insertAdjacentHTML('afterend',`<div class="supportSection">
            <div class="SectionInner">
                <h2>Have any questions about the<span class="testName"></span>?</h2>
                <div class="navItemWrapper"></div>
            </div>
        </div>`);

        // Set seriesHeaderTitleText as the test name
        const seriesHeaderTitleText = document.getElementById('series-header-title').textContent;
        document.querySelectorAll('.supportSection h2 span.testName').forEach(testNameElement => {
            testNameElement.textContent = seriesHeaderTitleText;
        });

        // Clone and insert ul elements
        const supportTest = document.querySelectorAll('.supportTest .prd-seriesFooter-navList')[1];
        const navItemWrappers = document.querySelectorAll('.supportSection .navItemWrapper');
        navItemWrappers.forEach(navItemWrapper => {
            navItemWrapper.appendChild(supportTest.cloneNode(true));
        });

    }
}
loadTestCode();