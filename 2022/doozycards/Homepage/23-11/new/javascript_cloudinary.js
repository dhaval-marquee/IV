if (!$('body').hasClass('iv_cards_opt_code')) {
    $('body').addClass('iv_cards_opt_code');
    var script = document.createElement('script');
    script.src = '//res.cloudinary.com/ignite-visibility/raw/upload/v1669213919/Doozy_Cards/javascript.js';
    script.type = 'text/javascript';

    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '//res.cloudinary.com/ignite-visibility/raw/upload/v1669213920/Doozy_Cards/style.css';

    if (!document.querySelector('link[href="//res.cloudinary.com/ignite-visibility/raw/upload/v1669213920/Doozy_Cards/style.css"]')) {
      document.getElementsByTagName('head')[0].appendChild(link)
        ;
    }
    if (!document.querySelector('script[src="//res.cloudinary.com/ignite-visibility/raw/upload/v1669213919/Doozy_Cards/javascript.js"]')) {
      document.getElementsByTagName('head')[0].appendChild(script);
    }

}