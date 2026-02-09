function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_demo_iv')) {
        bodyEle.classList.add('hero_demo_iv');
        
        $('.hero_demo_iv h1').closest('section').parent().addClass('hero_section');
        $('.hero_demo_iv .hero_section .col-right-chart').html($('.cta-res-left').html());
        $('.hero_demo_iv .hero_section .col-right-chart .widget-cta img').addClass('b-loaded').attr('src','https://cdn2.hubspot.net/hubfs/2378677/2020-CyberGRX-LP/images/img-cta-resource.png');
        
    }
}
loadTestCode();