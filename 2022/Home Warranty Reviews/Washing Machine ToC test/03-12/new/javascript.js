function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('machine_ToC_test')) {
        bodyEle.classList.add('machine_ToC_test');

        // Put your test code here

        $(".article_block p").each(function (index) {
            $(this).addClass("article_para" + index);
          });

          $(".article_block h2").each(function (index) {
            $(this).addClass("article_title" + index);
          });
           
          
          $('.article_block h2.article_title0').before('<div id="What_is_the_Drum"></div>');
          $('.article_block h2.article_title1').before('<div id="Unbalanced_Drums"></div>');
          $('.article_block h2.article_title2').before('<div id="Why_is_Washer"></div>');
          $('.article_block h2.article_title3').before('<div id="Do_Front_Load"></div>');
          $('.article_block h2.article_title4').before('<div id="How_To_Balance"></div>');
          $('.article_block h2.article_title5').before('<div id="Top_Loading_Washing"></div>');
          $('.article_block h2.article_title6').before('<div id="Warranty_Help_You"></div>');
        $('.article_block h1+.artical_name_block').after(`<div class="company_list_jumplink mb-4">
            <ul>
                <li>
                    <a href="#What_is_the_Drum">What is the Drum of A Washing Machine</a>            
                </li>
                <li>
                    <a href="#Unbalanced_Drums">Unbalanced Drums and Other Internal Controls</a> 
                </li>
                <li>
                    <a href="#Why_is_Washer">Why is the Washer Off Balance?</a>
                </li>
                <li>
                    <a href="#Do_Front_Load">Do Front Load Washers Get Unbalanced?</a>
                </li>
                <li>
                    <a href="#How_To_Balance">How To Balance A Washing Machine Drum</a>
                </li>
                <li>
                    <a href="#Top_Loading_Washing">How To Balance A Top Loading Washing Machine Drum</a>
                </li>
                <li>
                    <a href="#Warranty_Help_You">How A Home Warranty Can Help You</a>
                </li>
            </ul>
         </div>`);

        $(".top_companies .top_5_companies+p+.article_sidebar .article_sidebar_block ").each(function (index) {
            $(this).addClass("article_" + index);
        });

        $('.sidebar_new_block .sidebar_paragragh').text("Don't let your washing machine fail when you need it most!");
        $('.sidebar_new_block .sidebar_paragragh+ul li:nth-child(1)').text("Protect Your Appliances");
        $('.sidebar_new_block .sidebar_paragragh+ul li:nth-child(2)').text("Protect Your Home");
        $('.sidebar_new_block .sidebar_paragragh+ul li:nth-child(3)').text("Free Instant Quotes");
        $('.sidebar_new_block .Cta_btn').text("Get Estimate");
           

    }
}
loadTestCode();