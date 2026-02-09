function loadTestCode() {
    if (!$('body').hasClass('cybergrx_test')) {
        $('body').addClass('cybergrx_test');
      
        // Put your test code here
         
        $('.mod-breadcrumbs+.module div >p:last-child').after(`<p>CyberGRX excels at third-party risk management. Whether this is your first experience with a third-party risk management program, or you are looking to increase your risk management capabilities, CyberGRX has options designed to help.
        </p>
        <ul class="blogEngagement_text">
            <li>
                <a href='https://info.cybergrx.com/tpcrm-for-dummies'>Download a free copy of our new eBook, Third-Party Cyber Risk Management For Dummies </a> and learn what is needed to have a successful (and effective) TPCRM program.
            </li>
            <li>
                <a href='https://get.cybergrx.com/get-a-demo-a-single-step'>Book a Demo</a> with one of our cyber-risk management experts to get a  custom built, interactive demo, that provides rapid insights into cyber risk exposure across your ecosystem.
            </li>
            <li>
                <a href='https://www.cybergrx.com/contact'>Contact us today</a> to find out how we can help you establish a supply chain risk management program designed with your business in mind. 

            </li>
        </ul>`);

        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
}


















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
 


 