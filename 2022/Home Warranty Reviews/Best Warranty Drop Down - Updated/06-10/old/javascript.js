if($('.best_awards').length == 0) {
    $('.container-fluid > .offer_company_list').after(`<div class="best_awards mb-5">
        <h2>The Best Home Warranty Awards</h2>
        <p>Here is the list of <b>best home warranty companies for September 2022</b> reviewed by the editors of HomeWarrantyReviews.com. The below home warranty comparisons are based on benefits, pricing, plans, response time, pros & cons, and user reviews. <a href="https://www.homewarrantyreviews.com/reviews-guidelines/">Read more about our review process.</a></p>
        <div class="select_wrapper">
            <h3 class="mb-3">Jump to Award</h3>
            <label><b>Best For:</b></label>
            <div class="custom_selectBox">
                <select onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                    <option value=""> Select Award </option>
                    <option value="https://www.homewarrantyreviews.com/best-home-warranty-companies/#choice-home-warranty"> Comprehensive Coverage </option>
                    <option value="https://www.homewarrantyreviews.com/best-home-warranty-companies/#american-home-shield"> Contractor Network </option>
                    <option value="https://www.homewarrantyreviews.com/best-home-warranty-companies/#service-plus-home-warranty"> Customer Service </option>
                    <option value="https://www.homewarrantyreviews.com/best-home-warranty-companies/#select-home-warranty"> Affordable Premium </option>
                    <option value="https://www.homewarrantyreviews.com/best-home-warranty-companies/#Liberty-Home-Guard"> Response Time </option>
                    <option value="https://www.homewarrantyreviews.com/best-home-warranty-companies/#aphw"> Multi-Family Homes </option>
                    <option value="https://www.homewarrantyreviews.com/best-home-warranty-companies/#hsa"> Real Estate Deals </option>
                    <option value="https://www.homewarrantyreviews.com/best-home-warranty-companies/#hwa"> Overall Claims Process </option>
                    <option value="https://www.homewarrantyreviews.com/best-home-warranty-companies/#fahw"> Low Monthly Payments </option>
                    <option value="https://www.homewarrantyreviews.com/best-home-warranty-companies/#cinch-home-service"> Customer Satisfaction </option>
                </select>
            </div>
        </div>
    </div>`);
}