// Modal Add
jQuery('body #page').after(`<div class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-content">
        <div class="demoform">
            <h1 style="font-family: Arial, Helvetica, sans-serif;text-align: center;font-size: 35px;font-weight: bold;color:#33475b;margin: 25px auto;">BOOK A FREE DEMO TODAY!</h1>
            <p style="text-align: center;font-family: Arial, Helvetica, sans-serif;font-size: 30px;color:#33475b;">Find out if our Vehicle Repair Information is right for you and get 3 MONTHS FREE!*</p>
            <div id="loadhsform"></div>
            <span class="smallprint">* Limited time offer. Applies to most Mitchell 1 products with a 27-month subscription. Mitchell1 will never rent or sell your personal information.</span>
        </div>
    </div>
</div>`);

// hsforms
jQuery.getScript('//js.hsforms.net/forms/v2.js', function(){
    hbspt.forms.create({
        region: "na1",
        portalId: "7934115",
        formId: "bfbd6a3e-4113-46a8-950a-fbd5aa6e4452",
        version: "V2_PRERELEASE",
        target: "#loadhsform",
    });
});

jQuery(document).on('click', 'body .iv-free-demo', function(){
    jQuery('body .modal').addClass('open');
});

jQuery(document).on('click', 'body .modal-overlay', function(){
    jQuery('body .modal').removeClass('open');
});