var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://embed.typeform.com/next/embed.js';
document.body.appendChild(script);

document.querySelector('body').insertAdjacentHTML('afterend',`
    <button data-tf-popup="FOqhRgLs" data-tf-opacity="100" data-tf-size="100" data-tf-iframe-props="title=Lectron Post-Purchase Survey" data-tf-transitive-search-params data-tf-medium="snippet" style="all:unset;font-family:Helvetica,Arial,sans-serif;display:inline-block;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;background-color:#0445AF;color:#fff;font-size:20px;border-radius:25px;padding:0 33px;font-weight:bold;height:50px;cursor:pointer;line-height:50px;text-align:center;margin:0;text-decoration:none;height: 0;" class="popUpbtn">Try me!</button>
`);

setTimeout(function() {
    var popUpButton = document.querySelector('.popUpbtn');
    if (popUpButton) {
        popUpButton.click();
    }
}, 6000); 