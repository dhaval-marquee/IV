var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('hero_container_iv')) {
    bodyEle.classList.add('hero_container_iv');

    $('.hero_container_iv .top-banner').wrap('<div class="wrap"></div>');
}