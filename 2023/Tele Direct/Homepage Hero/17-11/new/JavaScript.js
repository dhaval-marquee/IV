function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('home_hero_iv')) {
        bodyEle.classList.add('home_hero_iv');

        document.querySelector('.home_hero_iv .td_hero_section .textwidget').innerHTML = `<ul>
            <li>Simple pay-as-you-go pricing model</li>
            <li>Experienced in just about every industry</li>
            <li>Custom solutions for businesses of every size</li>
        </ul>`;
        document.querySelector('.home_hero_iv .td_hero_section .widget_sow-button .orange > span').textContent = 'Request Pricing & Learn More';
    }
}
loadTestCode();