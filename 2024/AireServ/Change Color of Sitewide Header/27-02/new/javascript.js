if(!$('body').hasClass('header_iv')) {
    $('body').addClass('header_iv');

    $('#site-header a.navbar-brand img').each(function() {
        $(this).attr('src', '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Aireserv/aireservLogo.png');
    });
    $('#navbar-classic a.sm-logo img').each(function() {
        $(this).attr('src', '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Aireserv/aireservLogo.png');
    });
    $('#site-header .col-sec-right  a.call-icon img').each(function() {
        $(this).attr('src', '//res.cloudinary.com/ignite-visibility/image/upload/v1708929552/Aireserv/phone.svg');
    });
    $('#main_mob_zipcode_error').after(`<ul class="list-inline social-icons-list socialMedia_icon">
        <li class="list-inline-item"> 
            <a href="https://www.facebook.com/AireServLLC/" class="icon-secondary" target="_blank" title="Open in New tab">
                <img src="/us/en-us/aire-serv/_assets/images/socialIcons/facebook.svg" width="27" height="27" alt="Facebook logo icon." loading="lazy"></a>
        </li>
        <li class="list-inline-item"> 
            <a href="https://twitter.com/AireServ/" class="icon-secondary" target="_blank" title="Open in New tab">
                <img src="/us/en-us/aire-serv/_assets/images/socialIcons/twitter.svg" width="27" height="27" alt="Twitter logo icon." loading="lazy"></a> 
        </li>
        <li class="list-inline-item"> 
            <a href="https://www.pinterest.com/aireservcorp/" class="icon-secondary" target="_blank" title="Open in New tab">
                <img src="/us/en-us/aire-serv/_assets/images/socialIcons/pinterest.svg" width="27" height="27"
                    alt="Pinterest logo icon." loading="lazy">
            </a>
        </li>
        <li class="list-inline-item"> 
            <a href="https://www.youtube.com/user/AireServDotCom/" class="icon-secondary" target="_blank" title="Open in New tab">
                <img src="/us/en-us/aire-serv/_assets/images/socialIcons/youtube.svg" width="27" height="27" alt="YouTube logo icon." loading="lazy">
            </a> 
        </li>
        <li class="list-inline-item"> 
            <a href="https://www.linkedin.com/company/aire-serv/" class="icon-secondary" target="_blank" title="Open in New tab">
                <img src="/us/en-us/aire-serv/_assets/images/socialIcons/linkedin.svg" width="27" height="27" alt="LinkedIn logo icon." loading="lazy">
            </a>
        </li>
    </ul>`);

    var imgInterval = setInterval(() => {
        if($('.header-classic .location-section a img').length > 0) {
            clearInterval(imgInterval);

            setTimeout(() => {
                $('.header-classic .location-section a img').attr('src','//res.cloudinary.com/ignite-visibility/image/upload/v1709019304/Aireserv/location-white.png');
            }, 100);
        }
    }, 100);


    $('#navbar-classic .close-btn img').attr('src', '//res.cloudinary.com/ignite-visibility/image/upload/v1708938611/Aireserv/close_icon.svg');
}