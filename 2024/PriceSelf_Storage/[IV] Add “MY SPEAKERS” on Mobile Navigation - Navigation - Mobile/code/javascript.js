function loadTestCode() {
    if (!$('.mm-listitem').hasClass('my-speakers')) {
        $('.mm-menu .mm-panel:first-child .mm-listview').append('<li class="mm-listitem my-speakers"><a href="/my-speakers/" class="mm-listitem__text"><b>MY SPEAKERS</b></a></li>')
    }
}
loadTestCode();