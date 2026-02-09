function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('amPerksPageTest')) {
        bodyEle.classList.add('amPerksPageTest');
        
        // Put your test code here 
        document.querySelector('.amw-sticky-add-to-cart__info').insertAdjacentHTML('afterend' , `<div class="stickyText"><div class="amperkpoints"></div></div>`);
        
        $('.stickyText .amperkpoints').each(function() {
            var clonedTitle = $('h1.amw-page-pdp__product-title')[0].cloneNode(true);
            $(this).before(clonedTitle);
        });
        $('.stickyText h1').after($('.yCmsContentSlot div[data-bv-show="rating_summary"]').clone());
        
        $('.stickyText .amperkpoints').each(function() {
            var clonedElement = $('.amw-list-key-value--tertiary .amw-list-key-value__value .amw-text + .amw-list-key-value__value')[0].cloneNode(true);
            $(this).append(clonedElement);
        });
    
        $('.stickyText .amperkpoints > div').after($('.amw-page-pdp__availability').clone());
       
    }
}
loadTestCode();