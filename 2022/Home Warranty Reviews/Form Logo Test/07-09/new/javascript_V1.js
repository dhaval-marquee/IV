// DOM: Create the script element
var jsElm = document.createElement("script");
// set the type attribute
jsElm.type = "application/javascript";
// make the script element load file
jsElm.src = '//cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js';
// finally insert the element to the body element in order to load the script
document.body.appendChild(jsElm);

var jqueryInterval = setInterval(function () {
    if (typeof jQuery != 'undefined') {
        clearInterval(jqueryInterval);
        
        $('.company_list_table td').each(function() {

            var LogoAlt = $(this).find('a img').attr('alt');
            console.log(LogoAlt);
            $(this).find('button').addClass('targated_user').attr('data-user',LogoAlt);
            
        });


        $(document).on('click', '.targated_user', function() {
            var useris = $(this).attr('data-user');
            localStorage.setItem('userIs',useris);
        });
    }
}, 100);