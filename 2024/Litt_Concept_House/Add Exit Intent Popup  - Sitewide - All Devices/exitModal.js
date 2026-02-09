function set_cookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";secure;" + expires + ";domain=.balar.com;path=/";
}

var get_cookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function exitModal() {
    if(!document.querySelector('body').classList.contains('exitModal')) {
        document.querySelector('body').classList.add('exitModal');

        // Modal content
        document.querySelector('.exitModal').insertAdjacentHTML('afterbegin',`<div class="exitModalBox">
            <div class="exitModal_overlay"></div>
            <div class="exitModalBox_inner">
                <div class="exitModalBox_block">
                    <div class="exitModalBox_header">
                        <a href="javascript:;" class="exitModalClose"></a>    
                    </div>
                    <div class="exitModalBox_content">
                        <p>
                            <b>What is Lorem Ipsum?</b>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>`);

        function showModal() {
            const modalBox = document.querySelector('.exitModal .exitModalBox');
            modalBox.classList.add('fade');
            modalBox.style.display = 'block';
            document.querySelector('.exitModal_overlay').classList.add('fade');
            document.documentElement.classList.add('exitModal_open');
            document.querySelector('.exitModal').classList.add('exitModal_open');

            setTimeout(() => {
                modalBox.classList.add('open');
            }, 75);
        }
        showModal();

        // Modal Close
        document.addEventListener('click', function(e) {
            if(e.target && (e.target.className.includes('exitModalClose') || e.target.className.includes('exitModal_overlay'))) {
                document.documentElement.classList.remove('exitModal_open');
                document.querySelector('.exitModal').classList.remove('exitModal_open');
                const modalBox = document.querySelector('.exitModal .exitModalBox');
                modalBox.classList.remove('open');

                setTimeout(() => {
                    modalBox.remove();
                }, 75);
            }        

            // Set cookie after closing the popup
            if(get_cookie('exitPopupCount') == ''){
                set_cookie('exitPopupCount', 0, 30);
            }
            set_cookie('exitPopup', 'show', 1);
            set_cookie('exitPopupCount', parseInt(get_cookie('exitPopupCount')) + 1, 30);
        });
    }
}

function runCode() {
    if (window.matchMedia("(min-width: 1025px)").matches) {
        var mouseY = 0;
        var mouseX = 0;
        var topValue = 50;
        var leftValue = 50;
        var bottomValue = window.outerHeight - 50;
        var rightValue = window.outerWidth - 50;
        window.addEventListener("mouseout",function(e) {
            mouseY = e.clientY;
            mouseX = e.clientX;
            if(mouseY < topValue || mouseY > bottomValue || mouseX < leftValue || mouseX > rightValue) {
                if(!get_cookie('exitPopup')) { // to check if the popup is already shown and closed on another tab
                    exitModal();
                } else {
                    console.log('Popup appeared on another tab');
                }
            }
        }, false);
    } else {
        setTimeout(function(){
            if(!get_cookie('exitPopup')) { // to check if the popup is already shown and closed on another tab
                exitModal();
            }
        }, 7000)
    }
}

if (!get_cookie('exitPopup') && get_cookie('exitPopupCount') < 3) {
    runCode();
} else {
    console.log('existing user');
}