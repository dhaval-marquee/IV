function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('machine_ToC_test')) {
        bodyEle.classList.add('machine_ToC_test');

        // Put your test code here

        $(".article_block p").each(function (index) {
            $(this).addClass("article_para" + index);
          });
          
          $('.article_block .article_para5+a+h2').addClass('dhaval');
        $('.article_block h1+.artical_name_block').after(`<div class="company_list_jumplink mb-4">
            <ul>
                <li>
                    <a href="#choice-home-warranty" onclick="user_click_link(186,'JUMP-LINK')">What is the Drum of A Washing Machine</a>            
                </li>
                <li>
                    <a href="#american-home-shield" onclick="user_click_link(29,'JUMP-LINK')">Unbalanced Drums and Other Internal Controls</a> 
                </li>
                <li>
                    <a href="#service-plus-home-warranty" onclick="user_click_link(7830,'JUMP-LINK')">Why is the Washer Off Balance?</a>
                </li>
                <li>
                    <a href="#select-home-warranty" onclick="user_click_link(4295,'JUMP-LINK')">Do Front Load Washers Get Unbalanced?</a>
                </li>
                <li>
                    <a href="#Liberty-Home-Guard" onclick="user_click_link(13258,'JUMP-LINK')">How To Balance A Washing Machine Drum</a>
                </li>
                <li>
                    <a href="#aphw" onclick="user_click_link(2184,'JUMP-LINK')">How To Balance A Top Loading Washing Machine Drum</a>
                    </li>
                <li>
                    <a href="#hsa" onclick="user_click_link(36,'JUMP-LINK')">How A Home Warranty Can Help You</a>
                </li>
            </ul>
         </div>`);

    }
}
loadTestCode();