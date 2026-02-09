var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('hero_iv')) {
    bodyEle.classList.add('hero_iv');
    
    // Put your test code here
    $('.hero_iv #home > .banner-loop').addClass('hero_section');
    $('.hero_section h1').html('Keep your Home and Garage <br> Family Owned Storage Solution <br>Clutter Free <br> with Stor-It Self Storage');
    $('.hero_section a[href="#location-list"]').prevAll().remove();
    $('.hero_section a[href="#location-list"]').text('Choose Location');
    $('.hero_section a[href="#location-list"]').parent().parent().addClass('right_content').wrap('<div class="hero_content"></div>');
    $('.hero_section .hero_content').prepend(`<div class="left_content" data-aos="fade-right">
        <ul>
            <li><span class="check"></span> Convenient 24/7 Access</li>
            <li><span class="check"></span> Car & Camper Storage</li>
            <li><span class="check"></span> Commercial Storage</li>
        </ul>
    </div>`);
}