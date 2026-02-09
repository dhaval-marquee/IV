function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homepage_BW_list')) {
        bodyEle.classList.add('homepage_BW_list');
        
        // Put your test code here

        var newElement = document.createElement('section');
        newElement.className = "best_company";
        newElement.innerHTML = `<div class="container">
            <div class="company_item">
                <div class="company_header">
                    <h3 class="mb-0">
                        <a href="https://www.homewarrantyreviews.com/companies/choice-home-warranty/">
                            <span>Choice Home Warranty</span>
                        </a> -  <i> Best comprehensive coverage options</i>
                    </h3>
                    <div class="count_block">#1</div>
                </div>
                <div class="best_company_content">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="logo_wrapper">
                                <a href="https://www.homewarrantyreviews.com/companies/choice-home-warranty/"><img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/company-logo/choice-home-warranty.png" class="offer_company_logo h-auto" width="120" height="73" decoding="async" loading="lazy" alt="choice-home-warranty"></a>
                            </div>
                            <div>
                                <a href="#########" class="read_more_link">Read Our Choice Home Warranty Review</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <ul>
                                <li>Offers free roof leak coverage</li>
                                <li>90-Day parts guarantee and 30-day labor guarantee</li>
                                <li>Coverage without extra fee for homes up to 5000 sq. ft.</li>
                                <li>Free cancellation up 30 days</li>
                            </ul>
                            <form action="https://www.homewarrantyreviews.com/best-home-warranty-price-quote/" method="POST">
                                <input type="hidden" name="company_name" value="Choice Home Warranty">
                                <input type="hidden" name="company_id" class="company_id" value="186">
                                <input type="hidden" name="quote_company_id" class="quote_company_id" value="">
                                <input type="hidden" name="referer_page" value="">
                                <input type="hidden" name="btn_location" class="btn_location" value="TOP_10_PAGE_LISTING_V1">
                                <input type="hidden" name="post_management_id" value="3829511190">
                                <input type="hidden" name="max_deliveries" value="1">
                                <input type="hidden" name="domain" value="www.homewarrantyreviews.com">
                                <input type="hidden" name="path" value="www.homewarrantyreviews.com/best-home-warranty-companies/">
                                <input type="hidden" name="url" value="/best-home-warranty-companies/">
                                <button type="submit" class="btn_block">
                                    <div class="offer_state_block">
                                        <span>Offer(s) available:</span> 1<sup>st</sup>  month free + Free roof coverage
                                    </div>
                                </button>
                            </form>
                        </div>
                        <div class="col-md-4">
                            <button type="submit" class="Cta_btn btn d-inline-flex w-100" onclick="validateform('186','HOME_PAGE_LISTING','5695790018',' Choice Home Warranty')">Get a Quote</button>
                            <a class="hwr_global_phone" href="tel:855-455-6190"><img decoding="async" loading="lazy" src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/phone_new_icon.svg" alt="phoneicon" width="20" height="20" class="h-auto">855-455-6190</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        document.querySelectorAll('.homepage_BW_list .company_list_table')[0].appendChild(newElement);



    }
}

loadTestCode();