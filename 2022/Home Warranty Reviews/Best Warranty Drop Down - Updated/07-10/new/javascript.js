$('.container-fluid  > .offer_company_list').prev().nextUntil('.company_list_jumplink').next().remove();
if($('.best_awards').length == 0) {
    $('.container-fluid > h2:first-of-type').before(`<div class="best_awards mt-5 mb-5">
        <h2>The Best Home Warranty Picks</h2>
        <p>Here is the list of <b>best home warranty companies for September 2022</b> reviewed by the editors of HomeWarrantyReviews.com. The below home warranty comparisons are based on benefits, pricing, plans, response time, pros & cons, and user reviews.</p>
        <div class="select_wrapper">
            <h3>Jump to BEST:</h3>
            <div class="custom_selectBox">
                <a href="javascript:;" class="select_label">Select Award</a>
                <ul class="select_option">
                    <li><a onclick="user_click_link(186,'DROPDOWN')" href="#choice-home-warranty" > Comprehensive Coverage </a></li>
                    <li><a onclick="user_click_link(29,'DROPDOWN')" href="#american-home-shield" > Contractor Network </a></li>
                    <li><a onclick="user_click_link(7830,'DROPDOWN')" href="#service-plus-home-warranty" > Customer Service </a></li>
                    <li><a onclick="user_click_link(4295,'DROPDOWN')" href="#select-home-warranty" > Affordable Premium </a></li>
                    <li><a onclick="user_click_link(13258,'DROPDOWN')" href="#Liberty-Home-Guard" > Response Time </a></li>
                    <li><a onclick="user_click_link(2184,'DROPDOWN')" href="#aphw" > Multi-Family Homes </a></li>
                    <li><a onclick="user_click_link(36,'DROPDOWN')" href="#hsa" > Real Estate Deals </a></li>
                    <li><a onclick="user_click_link(35,'DROPDOWN')" href="#hwa" > Overall Claims Process </a></li>
                    <li><a onclick="user_click_link(32,'DROPDOWN')" href="#fahw" > Low Monthly Payments </a></li>
                    <li><a onclick="user_click_link(16708,'DROPDOWN')" href="#cinch-home-service" > Customer Satisfaction </a></li>
                </ul>
            </div>
        </div>
    </div>`);

    $(function () {
        var list = $('.select_option');
        var link = $('.select_label');
        link.click(function () {
            list.slideToggle(200);
        });
        list.find('li a').click(function () {
            var text = $(this).html();
            link.html(text);
            list.slideToggle(200);
        });
        
        $(document).mouseup(function(e){
			var container = $(".custom_selectBox");
			if (!container.is(e.target) && container.has(e.target).length === 0) 
			{
				list.slideUp(200);
			}
		});
    });
}