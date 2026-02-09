function loadTestCode() {
    if (!document.querySelector('body').classList.contains('hero_cta_iv')) {
        document.querySelector('body').classList.add('hero_cta_iv');
        var getCTA = setInterval(() => {
            if (document.querySelectorAll('.hero_cta_iv .slider--has-video').length > 0) {
                clearInterval(getCTA);

                const translations = {
                    "en": {
                        "resorts": "View Resorts",
                        "experiences": "View Experiences"
                    },
                    "ru": {
                        "resorts": "Просмотреть курорты",
                        "experiences": "Просмотреть впечатления"
                    },
                    "es": {
                        "resorts": "Ver Resorts",
                        "experiences": "Ver Experiencias"
                    },
                    "de": {
                        "resorts": "Resorts anzeigen",
                        "experiences": "Erlebnisse anzeigen"
                    },
                    "fr": {
                        "resorts": "Voir les stations",
                        "experiences": "Voir les expériences"
                    },
                    "zh": {
                        "resorts": "查看度假村",
                        "experiences": "查看体验"
                    },
                    "ar": {
                        "resorts": "عرض المنتجعات",
                        "experiences": "عرض التجارب"
                    }
                };

                const url = window.location.href;
                const langCode = url.split('/')[3];

                const resortText = translations[langCode]?.resorts || translations['en'].resorts;
                const experienceText = translations[langCode]?.experiences || translations['en'].experiences;

                document.querySelector('.hero_cta_iv .slider--has-video').insertAdjacentHTML('beforeend', `<div class="slider__cta">
                    <button type="button" class="cta white-outline resorts_cta">${resortText}</button>
                    <button type="button" class="cta white-outline experiences_cta">${experienceText}</button>
                    <br />
                    <span class="slider__arrow-down"></span>
                </div>`);

                var spacingAtTop = 95;

                function scrollToWrapper(wrapperClass) {
                    return function (e) {
                        e.preventDefault();
                        var offsetTop = $(wrapperClass).first().offset().top - spacingAtTop;
                        $('html, body').animate({
                            scrollTop: offsetTop
                        }, 'smooth');
                    };
                }

                $('.slider__cta .resorts_cta').click(scrollToWrapper('#mainContent > .intro'));
                $('.slider__cta .experiences_cta').click(scrollToWrapper('.experiences-slider__wrapper'));

                if(window.location.pathname == "/" || window.location.pathname == "/ru/" || window.location.pathname == "/es/" || window.location.pathname == "/de/" || window.location.pathname == "/fr/" || window.location.pathname == "/zh/" || window.location.pathname == "/ar/") {
                    document.querySelector('.resorts_cta').style.display = "inline-block";
                } else {
                    document.querySelector('.resorts_cta').style.display = "none";
                }
            }
        }, 100);
    }
}

loadTestCode();