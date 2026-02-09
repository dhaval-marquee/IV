function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-home-text')) {
        document.querySelector('body').classList.add('iv-home-text');

        document.querySelector('.iv-home-text .evvs-homepage-wrapper + section .kt-inside-inner-col > .kb-row-layout-wrap').classList.add('iv-text-block');

        const targetParagraph = document.querySelector('.iv-home-text .iv-text-block .wp-block-kadence-column:nth-child(2) p:nth-child(2)');
        targetParagraph.innerHTML = `<strong>Covered by most insurance plans!</strong>`;
        targetParagraph.insertAdjacentHTML('beforebegin', `
            <ul>
                <li><strong>4 out of 5 patients:</strong> Experience relief for 2+ years!</li>
                <li><strong>Skip the Scalpel:</strong> No major surgery!</li>
                <li><strong>Lower Risk:</strong> Safer than surgery.</li>
            </ul>
        `);
    }
}

const checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);