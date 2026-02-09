// Injector
(function () {
	// Include script file
    function addScript(filename) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.src = filename;
        script.type = 'text/javascript';
        head.append(script);
    }
    // Include CSS file
    function addCSS(filename) {
        var head = document.getElementsByTagName('head')[0];
        var style = document.createElement('link');
        style.href = filename;
        style.type = 'text/css';
        style.rel = 'stylesheet';
        head.append(style);
    }
    // Loading files
    addScript('http://127.0.0.1:8080/javascript_v1.js');
	addCSS('http://127.0.0.1:8080/style_v1.css');
})();
// Injector Code Over


// Need node and http-server in computer
//Run below code in terminal
// npx http-server



// Time difference calculation
let Time1 = new Date().getTime()/1000;
console.log('Time 1 > ' + Time1);

let Time2 = new Date().getTime()/1000;
console.log('Time 2 > ' + Time2);

let timeDifference = Time2 - Time1;
console.log('Time difference > ' + timeDifference + ' seconds');
// Time difference calculation over







// hide previous all siblings of an element
function hidePrevAll(selector) {
    const el = document.querySelector(selector);
    if (!el) return;

    let prev = el.previousElementSibling;

    while (prev) {
        prev.style.display = 'none';
        prev = prev.previousElementSibling;
    }

    el.style.display = 'none';
}
hidePrevAll('.logos-wrapper');
// hide previous all siblings of an element over









// Load code just for Desktop 
if (window.matchMedia("(min-width: 1025px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 1024.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 1025px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for Desktop over



// Load code just for mobile 
if (window.matchMedia("(max-width: 767.98px)").matches) {

    loadTestCode();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
} else {
    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code just for mobile over


// Load code for Desktop and Mobile 
if (window.matchMedia("(min-width: 768px)").matches) {
    loadTestCodeDesktop();

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(max-width: 767.98px)").matches) {
            location.reload();
        }
    }, true);
} else {
    if (window.matchMedia("(max-width: 767.98px)").matches) {
        loadTestCodeMobile();
    }

    window.addEventListener('resize', function(event) {
        if (window.matchMedia("(min-width: 768px)").matches) {
            location.reload();
        }
    }, true);
}
// Load code for Desktop and Mobile 





// Just reload page only if the device type changes between desktop and mobile
const isDesktop = window.matchMedia("(min-width: 768px)").matches;

window.addEventListener("resize", () => {
    if (isDesktop !== window.matchMedia("(min-width: 768px)").matches) {
        location.reload();
    }
});

