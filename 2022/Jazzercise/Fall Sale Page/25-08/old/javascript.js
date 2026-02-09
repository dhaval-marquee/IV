// Variant 1 code
if (!$('body').hasClass('backonthebeat_hero_v1')) {
    $('body').addClass('backonthebeat_hero_v1');
    $('.header-container-wrapper .row-fluid-wrapper h1').addClass('hero_subtitle');
    $('.header-container-wrapper .row-fluid-wrapper p').addClass('hero_description');
    $('.header-container-wrapper .row-fluid-wrapper img[alt="Start For $0"]').closest('.row-fluid-wrapper').html('<h1 class="hero_main_title">Finally, A Workout You’ll <b><i>Actually</i></b> Love&nbsp;Doing</h1>');
    $('h1.hero_subtitle span').text('Get unlimited workouts through September!');
}



// Variant 2 code
if (!$('body').hasClass('backonthebeat_hero_v2')) {
    $('body').addClass('backonthebeat_hero_v2');
    $('.header-container-wrapper .row-fluid-wrapper h1').addClass('hero_subtitle');
    $('.header-container-wrapper .row-fluid-wrapper p').addClass('hero_description');
    $('.header-container-wrapper .row-fluid-wrapper img[alt="Start For $0"]').closest('.row-fluid-wrapper').html('<h1 class="hero_main_title">Start for <sup>$</sup>0</h1>');
    $('h1.hero_subtitle span').text('Get back on the beat with unlimited workouts through September and save up to $130!');
}