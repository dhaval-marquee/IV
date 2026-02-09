function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homepage_BW_list')) {
        bodyEle.classList.add('homepage_BW_list');
        
        // Put your test code here
        const jsonData = {
            product1 : {
                value: "1",
                listTitle: '<span>Choice Home Warranty</span>',
                lsitTitleItalicText: '<i> Best comprehensive coverage options</i>',
                featuredImage: 'https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/to_rated_icon.png',
                listImage: 'https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/company-logo/choice-home-warranty.png',
                reviewLink: 'https://www.homewarrantyreviews.com/companies/choice-home-warranty/',
                discription: [1,1,1]
            },
            product2 : {
                value: "2",
                listTitle: 'listTitle 2',
                featuredImage: '',
                listImage: 'https://www.homewarrantyreviews.com/wp-content/uploads/American_Home_Shield_logo-1.jpg',
                reviewLink: 'https://www.homewarrantyreviews.com/companies/choice-home-warranty/',
                discription: [2,2,2]
            },
            product3 : {
                value: "3",
                listTitle: 'listTitle 3',
                featuredImage: 'https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/to_rated_icon.png',
                listImage: 'https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/company-logo/choice-home-warranty.png',
                reviewLink: 'https://www.homewarrantyreviews.com/companies/choice-home-warranty/',
                discription: [3,3,3]
            }
        }


        Object.keys(jsonData).forEach(key => {
            var newElement = document.createElement('section');
            newElement.className = "best_company";
            newElement.innerHTML = `<div class="container">
                <div class="company_item">
                    <img src="` + jsonData[key].featuredImage + `" class="featured_icon_img" alt="featured_icon_img">
                    <div class="company_header">
                        <h3 class="mb-0">
                            <a href="` + jsonData[key].reviewLink + `">` + jsonData[key].listTitle + `</a> - ` + jsonData[key].lsitTitleItalicText + ` 
                        </h3>
                        <div class="count_block">#` + jsonData[key].value + `</div>
                    </div>
                    <div class="best_company_content">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="logo_wrapper">
                                    <a href="` + jsonData[key].reviewLink + `">
                                        <img src="` + jsonData[key].listImage + `" class="offer_company_logo h-auto" width="120" height="73" decoding="async" loading="lazy" alt="choice-home-warranty">
                                    </a>
                                </div>
                                <a href="` + jsonData[key].reviewLink + `" class="read_more_link">Read Our Choice Home Warranty Review</a>
                            </div>
                            <div class="col-md-6">
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
                            <div class="col-md-3 align-self-center">
                                <form action="https://www.homewarrantyreviews.com/best-home-warranty-price-quote/" method="POST" class="px-lg-2">
                                    <div class=" text-center  pb-2 ">
                                        <input type="hidden" name="company_name" value="Choice Home Warranty">
                                        <input type="hidden" name="company_id" class="company_id" value="186">
                                        <input type="hidden" name="quote_company_id" class="quote_company_id" value="">
                                        <input type="hidden" name="referer_page" value="https://optimize.google.com/optimize/opt-launch.html?goptedit=ADmvj8yx992JYpqddXMVUVYTKZhNNk_CkRzcmCnUPEwcf5DIRWCZKgJ4puQcYyXarWFqM3GkDw6PMq1bjaHsaepkiBbxlIYI4ixarE_dZIDblVjtTH39svc&amp;location=0&amp;authuser=3">
                                        <input type="hidden" name="btn_location" class="btn_location" value="TOP_10_PAGE_LISTING_V1">
                                        <input type="hidden" name="post_management_id" value="3829511190">
                                        <input type="hidden" name="max_deliveries" value="1">
                                        <input type="hidden" name="domain" value="www.homewarrantyreviews.com">
                                        <input type="hidden" name="path" value="www.homewarrantyreviews.com/best-home-warranty-companies/">
                                        <input type="hidden" name="url" value="/best-home-warranty-companies/">
                                        <button type="submit" class="Cta_btn btn d-inline-flex w-100" onclick=" return validateField('.zip-186','.zip-error-186','Invalid ZIP Code','zip',true,'','')">
                                            Get Free Quote<img src="https://www.homewarrantyreviews.com/wp-content/uploads/HWR-2020-IMG/right-arrow_btn.svg" class="h-auto" width="20" height="20" alt="right arrow" decoding="async" loading="lazy">
                                        </button>
                                    </div>
                                    <div class="text-center phone_icon pt-2 choice_phone_btn px-lg-2">
                                        <a class="hwr_global_phone" href="tel:855-455-6190"><img decoding="async" loading="lazy" src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/phone_new_icon.svg" alt="phoneicon" width="20" height="20" class="h-auto">855-455-6190</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            document.querySelectorAll('.homepage_BW_list .company_list_table')[0].appendChild(newElement);
        });
    }
}

loadTestCode();