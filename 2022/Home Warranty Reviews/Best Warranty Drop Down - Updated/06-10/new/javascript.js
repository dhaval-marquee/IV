$('.container-fluid  > .offer_company_list').prev().nextUntil('.company_list_jumplink').next().remove();
if($('.best_awards').length == 0) {
    $('.container-fluid > h2:first-of-type').before(`<div class="best_awards mt-5 mb-5">
        <h2>The Best Home Warranty Picks</h2>
        <p>Here is the list of <b>best home warranty companies for September 2022</b> reviewed by the editors of HomeWarrantyReviews.com. The below home warranty comparisons are based on benefits, pricing, plans, response time, pros & cons, and user reviews.</p>
        <div class="select_wrapper">
            <h3>Jump to BEST:</h3>
            <div class="custom_selectBox">
                <select onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                    <option value=""> Select Award </option>
                    <option value="#choice-home-warranty"> Comprehensive Coverage </option>
                    <option value="#american-home-shield"> Contractor Network </option>
                    <option value="#service-plus-home-warranty"> Customer Service </option>
                    <option value="#select-home-warranty"> Affordable Premium </option>
                    <option value="#Liberty-Home-Guard"> Response Time </option>
                    <option value="#aphw"> Multi-Family Homes </option>
                    <option value="#hsa"> Real Estate Deals </option>
                    <option value="#hwa"> Overall Claims Process </option>
                    <option value="#fahw"> Low Monthly Payments </option>
                    <option value="#cinch-home-service"> Customer Satisfaction </option>
                </select>
            </div>
        </div>
    </div>`);
}