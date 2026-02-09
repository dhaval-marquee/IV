if (!$('body').hasClass('resort_iv')) {
    $('body').addClass('resort_iv');

    if ($('.resort_iv .intro .orange-solid').length > 0) {
        $('.resort_iv .intro .orange-solid').before('<a class="cta orange-outline" href="accommodation/">View Accommodations</a>');
    }
}