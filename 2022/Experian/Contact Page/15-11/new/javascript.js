function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('contact_page')) {
        bodyEle.classList.add('contact_page');
        
        // Put your test code here
        $('.cmp-text').eq(0).parent().prepend(`<div class="phone_details">
            <h2 class="text-dark-blue text-underline">By Phone</h2>
            <p class="font-weight-medium text-light-blue mb-30">Toll Free: <a href="tel:+18886615657"> 1 888 661 5657</a></p>
            <h2 class="text-dark-blue text-underline">By Location</h2>
        </div>`);
        $('.tel-info').prev().text('By Email').addClass('text-underline').next().hide()


    }
}
loadTestCode();