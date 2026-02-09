document.querySelectorAll('.viewAll').forEach(function(item) {
    item.setAttribute('href', item.closest('.pss-card-list').querySelector('.pss-card-list__contentbox .pss-card-list__titlebox a').getAttribute('href'));
    item.removeAttribute('onclick');
    item.removeAttribute('id');
})
