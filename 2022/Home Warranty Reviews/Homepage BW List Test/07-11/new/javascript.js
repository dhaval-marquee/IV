function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homepage_BW_list')) {
        bodyEle.classList.add('homepage_BW_list');
        
        // Put your test code here
        var newElement = document.createElement('section');
        newElement.className = "best_company";
        newElement.innerHTML = `<h2> Best Home Warranty Companies Reviewed By <br>Homewarrantyreviews.com Editorial Team</h2><p class="mx-lg-5 px-lg-5 mb-4 pb-md-2">Here are the best warranty companies reviewed by Homewarrantyreviews.com’s editorial team:
        </p><div class="container">
            <div class="company_item has_feature_img">
                <img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/to_rated_icon.png" class="featured_icon_img" alt="featured_icon_img">
                <div class="company_header">
                    <h3 class="mb-0">
                        <a href="https://www.homewarrantyreviews.com/companies/choice-home-warranty/">
                            <span>Choice Home Warranty</span>
                        </a> - <i> Best comprehensive coverage options</i>
                    </h3>
                    <div class="count_block">#1</div>
                </div>
                <div class="best_company_content">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="logo_wrapper">
                                <a href="https://www.homewarrantyreviews.com/companies/choice-home-warranty/">
                                    <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/company-logo/choice-home-warranty.png" class="offer_company_logo h-auto" width="120" height="73" decoding="async" loading="lazy" alt="choice-home-warranty">
                                </a>
                            </div>
                            <a href="https://www.homewarrantyreviews.com/companies/choice-home-warranty/" class="read_more_link">Read Our Choice Home Warranty Review</a>
                        </div>
                        <div class="col-lg-6 col-md-5 align-self-center">
                            <ul>
                                <li>Offers free roof leak coverage</li>
                                <li>90-Day parts guarantee and 30-day labor guarantee</li>
                                <li>Coverage without extra fee for homes up to 5000 sq. ft.</li>
                                <li>Free cancellation up to 30 days</li>
                            </ul>
                        </div>
                        <div class="col-md-3 align-self-center">
                            <button type="submit" class="Cta_btn btn d-inline-flex w-100" onclick="validateform('186','HOME_PAGE_LISTING','5695790018',' Choice Home Warranty')"> Get Free Quote <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow"></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 2nd product -->
            <div class="company_item">
                <div class="company_header">
                    <h3 class="mb-0">
                        <a href="https://www.homewarrantyreviews.com/companies/american-home-shield-ahs/">
                            <span>American Home Shield</span>
                        </a> -  <i>Best for contractor network</i>
                    </h3>
                    <div class="count_block">#2</div>
                </div>
                <div class="best_company_content">
                    <div class="row">
                        <div class="col-lg-3 col-md-4">
                            <div class="logo_wrapper">
                                <a href="https://www.homewarrantyreviews.com/companies/american-home-shield-ahs/">
                                    <img src="https://www.homewarrantyreviews.com/wp-content/uploads/American_Home_Shield_logo-1.jpg" class="offer_company_logo h-auto" width="120" height="73" decoding="async" loading="lazy" alt="choice-home-warranty">
                                </a>
                            </div>
                            <a class="read_more_link" href="https://www.homewarrantyreviews.com/companies/american-home-shield-ahs/">Read Our American Home Shield Review</a>
                        </div>
                        <div class="col-lg-6 col-md-5 align-self-center">
                            <ul>
                                <li>Offers generous coverage caps</li>
                                <li>Provides customizable options on deductibles</li>
                                <li>Covers undetectable pre-existing conditions</li>
                                <li>In the business for over 5 decades</li>
                            </ul>
                        </div>
                        <div class="col-md-3 align-self-center">
                            <a class="Cta_btn btn d-inline-flex w-100" rel="sponsored" target="_blank" onclick="affiliate_fun('https://secure.money.com/pr/bd8d81502cd1')" href="https://secure.money.com/pr/bd8d81502cd1"> Get Free Quote <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow"></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 3rd product -->
            <div class="company_item has_feature_img">
                <img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/best-in-service.png" class="featured_icon_img" alt="featured_icon_img">
                <div class="company_header">
                    <h3 class="mb-0">
                        <a href="https://www.homewarrantyreviews.com/companies/service-plus-home-warranty/"><span>ServicePlus Home Warranty </span></a> - <i>Best for customer service
                        </i>
                    </h3>
                    <div class="count_block">#3</div>
                </div>
                    <div class="best_company_content">
                        <div class="row">
                            <div class="col-lg-3 col-md-4">
                                <div class="logo_wrapper">
                                    <a href="https://www.homewarrantyreviews.com/companies/service-plus-home-warranty/">
                                        <img src="https://www.homewarrantyreviews.com/wp-content/uploads/new_service_plus_logo.png" class="offer_company_logo h-auto" width="120" height="73" decoding="async" loading="lazy" alt="choice-home-warranty">
                                    </a>
                                </div>
                                <a class="read_more_link" href="https://www.homewarrantyreviews.com/companies/service-plus-home-warranty/">Read Our Service Plus Review</a>
                            </div>
                            <div class="col-lg-6 col-md-5 align-self-center">
                                <ul>
                                    <li>Service guarantee of 90 days</li>
                                    <li>24-7 Online customer portal</li>
                                    <li>No limitations on claims</li>
                                    <li>Reputation for customer service</li>
                                </ul>
                            </div>
                            <div class="col-md-3 align-self-center">
                                <button type="submit" class="Cta_btn btn d-inline-flex w-100" onclick="validateform('7830','HOME_PAGE_LISTING','3474036231',' ServicePlus Home Warranty')"> Get Free Quote <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 4th Items -->
            <div class="company_item has_feature_img">
                <img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/editor_choice.png" class="featured_icon_img" alt="Editor Choice">
                <div class="company_header">
                    <h3 class="mb-0">
                        <a href="https://www.homewarrantyreviews.com/companies/select-home-warranty/">
                            <span>ServicePlus Home Warranty </span>
                        </a> - <i>Best for customer service</i>
                    </h3>
                    <div class="count_block">#4</div>
                </div>
                    <div class="best_company_content">
                        <div class="row">
                            <div class="col-lg-3 col-md-4">
                                <div class="logo_wrapper">
                                    <a href="https://www.homewarrantyreviews.com/companies/select-home-warranty/">
                                        <img src="https://www.homewarrantyreviews.com/wp-content/uploads/Select_Home_Warranty-3.png" class="offer_company_logo h-auto" width="120" height="73" decoding="async" loading="lazy" alt="choice-home-warranty">
                                    </a>
                                </div>
                                <a class="read_more_link" href="https://www.homewarrantyreviews.com/companies/select-home-warranty/">Read Our Select Home Warranty Review</a>
                            </div>
                            <div class="col-lg-6 col-md-5 align-self-center">
                                <ul>
                                    <li>Offers coverage for mobile homes</li>
                                    <li>Same-day response on service requests</li>
                                    <li>Discounts for multi-year plans</li>
                                    <li>24-7 customer support</li>
                                </ul>
                            </div>
                            <div class="col-md-3 align-self-center">
                                <button type="submit" class="Cta_btn btn d-inline-flex w-100" onclick="validateform('4295','HOME_PAGE_LISTING','8187411405','Select Home Warranty')"> Get Free Quote <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 5th Items -->
            <div class="company_item">
                <div class="company_header">
                    <h3 class="mb-0">
                        <a href="https://www.homewarrantyreviews.com/companies/aphw/">
                            <span>America’s Preferred Home Warranty</span>
                        </a> - <i>Best for multi-family homes</i>
                    </h3>
                    <div class="count_block">#5</div>
                </div>
                    <div class="best_company_content">
                        <div class="row">
                            <div class="col-lg-3 col-md-4">
                                <div class="logo_wrapper">
                                    <a href="https://www.homewarrantyreviews.com/companies/aphw/">
                                        <img src="https://www.homewarrantyreviews.com/wp-content/uploads/aphw_logo_new.jpg" class="offer_company_logo h-auto" width="120" height="73" decoding="async" loading="lazy" alt="choice-home-warranty">
                                    </a>
                                </div>
                                <a class="read_more_link" href="https://www.homewarrantyreviews.com/companies/aphw/">Read Our America’s Preferred Home Warranty Review</a>
                            </div>
                            <div class="col-lg-6 col-md-5 align-self-center">
                                <ul>
                                    <li>Pick your contractor</li>
                                    <li>Perfect for Apartments or rental homes</li>
                                    <li>Offers roof leak coverage</li>
                                    <li>Multiple deductible options</li>
                                </ul>
                            </div>
                            <div class="col-md-3 align-self-center">
                                <a class="Cta_btn btn d-inline-flex w-100" rel="sponsored" target="_blank" onclick="affiliate_fun('https://secure.money.com/pr/bd8d81502cd1')" href="https://secure.money.com/pr/bd8d81502cd1">
                                    Get Free Quote <img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        
        var addBeforeThis = document.querySelectorAll('.company_banner_block .container-fluid')[0];
        addBeforeThis.innerHTML = '';
        addBeforeThis.appendChild(newElement);


    }
}

loadTestCode();