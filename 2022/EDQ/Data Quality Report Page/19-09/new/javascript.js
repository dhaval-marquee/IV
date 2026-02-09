function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('data_report')) {
        bodyEle.classList.add('data_report');
        
        // Put your test code here
        $('h1').text('Experian Data Quality 2022 Data Imperative Report').unwrap();
        $('.resource-page .container').wrapInner('<div class="row"></div>');
        $('.resource-page h2').html('Complete the form to get your free&nbsp;report');
        $('.resource-page .tinymce').eq(0).addClass('text_wrapper').unwrap();
        $('.text_wrapper').html('<h2><span>87%</span> of leaders say that data quality is fundamental to the core of their business operations going forward</h2>\
        <p>Download our free report to learn:</p>\
        <ul>\
            <li>How a growing digital landscape leaves organizations with more data than ever to manage, qualify, and protect</li>\
            <li>How organizations are leveraging automation to stay agile and fill the skills gap they see with data literacy</li>\
            <li>How investments in data maturity is creating positive impact to business growth</li>\
        </ul>');
        $('input[title="Get Started"]').attr('value','Download Report').attr('title','Download Report');


        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}

loadTestCode();