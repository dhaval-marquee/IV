var bodyEle = document.querySelector('body');
bodyEle.classList.add('newPage');

$('body').append(`
<main></main>
<div class="cmp-modal aem-GridColumn aem-GridColumn--default--12"><div class="labcorp_popup"></div></div>
<div class="cmp-modal aem-GridColumn aem-GridColumn--default--12"><div class="quest_popup"></div></div>
<div class="cmp-modal aem-GridColumn aem-GridColumn--default--12"><div class="minute_popup"></div></div>`);

$('main').append(`<div class="newPage_content">
    <div class="container">
        <h2>Get answers with a specific IgE blood&nbsp;test</h2>
        <div class="content_left">
            <h3 class="text-center">Purchase a test</h3>
            <p>Directly purchase your specific IgE blood test from a lab. No doctor referral is needed and you can make your purchase with or without Insurance. </p>
            <ul>
                <li>
                    <a href="javascript:;" class="flex-row" popUp-trigger="labcorp">
                        <h4>Purchase from</h4>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/ThermoFisher/ThermoFisher_Modal/Labcorp_1_line.png" alt="Labcorp Logo" width="200">
                    </a>
                </li>
                <li>
                    <a href="javascript:;" class="flex-row" popUp-trigger="quest-direct">
                        <h4>Purchase from</h4>
                        <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/ThermoFisher/ThermoFisher_Modal/Quest-logo.png" alt="Quest Logo Logo" width="100">
                    </a>
                </li>
            </ul>
        </div>
        <div class="content_right">
            <h3 class="text-center">Speak with a medical professional</h3>
            <p>Have questions about a specific IgE blood test? An appointment with a medical professional can provide the answers. Schedule your appointment today.</p>
            <ul>
                <li>
                    <a href="javascript:;" popUp-trigger="minute-clinic">
                        <img class="mb-10" src="https://res.cloudinary.com/ignite-visibility/image/upload/v1684840814/ThermoFisher/ThermoFisher_Modal/CVS-MinuteClinic-Logo.png" alt="Labcorp Logo" width="150px">
                        <p>MinuteClinic at CVS is available in person and virtually 7 days a week and accept most insurance plans.</p>
                        <p><b>Find a MinuteClinic Near You</b></p>
                    </a>
                </li>
                <li>
                    <a href="https://www.thermofisher.com/allergy/us/en/get-tested.html">
                        <h4>Prepare for your appointment</h4>
                        <p>FiII out our symptom tracker, which will generate a comprehensive summary about your symptoms that you can review with your healthcare provider.</p>
                        <p><b>Get Started</b></p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="text-center w-100">
            <button onclick="history.back()" class="goBack">< Go back to site</button>
        </div>
    </div>
</div>`);

var PopupPage = "https://www.thermofisher.com/allergy/us/en/blood-testing-allergies/how-to-get-an-allergy-test.html";

$('.labcorp_popup').load(PopupPage + ' #labcorp');
$('.quest_popup').load(PopupPage + ' #quest-direct');
$('.minute_popup').load(PopupPage + ' #minute-clinic');

var loadPageContent = setInterval(() => {
    if($('#minute-clinic').length > 0) {
        clearInterval(loadPageContent);
        
        setTimeout(() => {
            var jsElm = document.createElement("script");
            jsElm.type = "application/javascript";
            jsElm.src = 'https://www.thermofisher.com/etc.clientlibs/allergy/clientlibs/clientlib-site.min.js';
            document.body.appendChild(jsElm);

            var lazyLoadInstance;
            $(document).ready(function(){
                lazyLoadInstance = new LazyLoad({
                    "class_loaded": "lazy-loaded",
                });
            });
            $('noscript[data-cmp-hook-image="noscript"] img').unwrap();
            $('body button[data-bs-target="#getTestedIntroModal"]').each(function() {
                $(this).replaceWith($('<a class="' +  $(this).attr('class') + ' text-nowrap openModal" href="https://www.thermofisher.com/allergy/us/en/get-started.html">' + this.innerHTML + '</a>'));
            });            
            console.clear();
        }, 500);
    }
}, 100);

// Show Popup
$(document).on('click', 'a[popUp-trigger]', function(){
    var showPopup = $(this).attr('popUp-trigger');
    $('#'+showPopup).modal('show')
});