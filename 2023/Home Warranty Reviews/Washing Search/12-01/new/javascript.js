function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('washingSearch_text')) {
        bodyEle.classList.add('washingSearch_text');

        document.querySelectorAll('.article_block div p img:first-child')[0].parentNode.classList.add('alignnone_wrapper');

        $('.blog-detail p.alignnone_wrapper').before(`<div class="col-md-12 search_wrapper">
            <div class="">
            <form action="https://www.homewarrantyreviews.com/search-result/" method="GET" id='searchDesk'>
                <input type="hidden" name="search_by" value="all" class="search_by key_by">
                <div class="row">
                <div class="d-flex aling-item-center searchDeskInner">
                    <input class="form-control search-input" name="search_term" autofocus="autofocus" type="search"
                    placeholder="Search topics or keywords">
                </div>
                <div class="cLEAR_wrapper">
                    <div class="search-clear-block d-flex aling-item-center">
                    <button class="btn btn-sm  btn-clear" type="button" onclick="setValue('.search-input','')">CLEAR</button>
                    </div>
                    <div class="search-close-block text-center">
                    <img onclick="submitForm('searchDesk');" style="width: 18px;" width="18" height="18"
                        class=" h-auto search_icon_new"
                        src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/search_icon.svg"
                        loading="lazy" alt="X">
                    </div>
                </div>
                </div>
            </form>
            </div>
            <!--end of col-->
        </div>
        <div class="col-12 only_mob pl-0">
            <form action="https://www.homewarrantyreviews.com/search-result" method="GET" id="searchMob">
            <input type="hidden" name="search_by" value="all" class="search_by">
            <div class="row">
                <div class=" col-lg-6 col-9 col-xl-9 mt-auto mb-auto d-flex p-0">
                <input class="form-control search-input " name="search_term" autofocus="autofocus" type="search"
                    placeholder="Search">
                </div>
                <div class="col-2 mt-auto mb-auto search-close-block text-right p-0" onclick="submitForm('searchMob');">
                <img width="16" height="16" class="h-auto search_icon_new"
                    src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/search_icon.svg"
                    loading="lazy" alt="X">
                </div>
            </div>
            </form>
        </div>`);   


        setTimeout(() => {
			document.querySelectorAll('.washingSearch_text form input[name="btn_location"]').forEach(function(inputValue){
				var getVal = inputValue.getAttribute('value');
				inputValue.setAttribute('value',getVal+'_V1');
			});
		}, 2000);
    }
}

loadTestCode();
