function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('hero_demo_iv')) {
        bodyEle.classList.add('hero_demo_iv');
        
        $('.hero_demo_iv h1').closest('section').parent().addClass('hero_section');
        $('.hero_demo_iv .hero_section .col-right-chart').html($('.cta-res-left').html());
        $('.hero_demo_iv .hero_section .col-right-chart .widget-cta img').addClass('b-loaded').attr('src','https://cdn2.hubspot.net/hubfs/2378677/2020-CyberGRX-LP/images/img-cta-resource.png');
        $('.hero_demo_iv .hero_section .col-right-chart h2').text('Ready to be Confident in Your TPRM Program?');
        $('.hero_demo_iv .hero_section .col-right-chart h4').text('Find out how CyberGRX transforms TPRM for enterprises and third parties.');
        
    }
}
loadTestCode();