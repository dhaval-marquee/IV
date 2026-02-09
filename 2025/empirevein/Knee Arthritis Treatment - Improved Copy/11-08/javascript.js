function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-home-text')) {
        document.querySelector('body').classList.add('iv-home-text');

        document.querySelector('.iv-home-text .evvs-homepage-wrapper + section .kt-inside-inner-col > .kb-row-layout-wrap').classList.add('iv-text-block');

        const targetParagraph = document.querySelector('.iv-home-text .iv-text-block .wp-block-kadence-column:nth-child(2) p:nth-child(2)');
        targetParagraph.innerHTML = `<strong>Covered by most insurance plans!</strong>`;
        targetParagraph.insertAdjacentHTML('beforebegin', `
            <ul>
                <li><strong>Non-Surgical:</strong> No scalpels, no incisions!</li>
                <li><strong>Quick Recovery:</strong> No lengthy downtime!</li>
                <li><strong>Safer Alternative:</strong> Avoid surgical trauma!</li>
            </ul>
        `);

        document.querySelector('.iv-home-text .iv-text-block .gspb_heading').textContent = 'Knee Arthritis Pain Relief';
    }
}

const checkCondition = setInterval(function () {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
