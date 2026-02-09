function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homewarrantyreviews_test')) {
        bodyEle.classList.add('homewarrantyreviews_test');

        $('.article_para1').after(`<div class="col-md-12 search-bar-block search_icon_block">
        <div class="">
            <form  action="https://www.homewarrantyreviews.com/search-result/" method="GET"  id='searchDesk' >
            <input type="hidden" name="search_by" value="all" class="search_by">
            <div class=" row">
    
                <!--end of col-->
                <div class="col-sm-9  col-xl-9 col-lg-8 col-md-8  col-xl-10 mt-auto mb-auto d-flex  pl-1"  >
                <img onclick="submitForm('searchDesk');" style="width: 18px;"  width="18" height="18" class=" h-auto search_icon_new" src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/search_icon.svg"  loading="lazy"  alt="X">
                <!-- <svg onclick="submitForm('searchDesk');" style="width: 18px;" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="124.524px" viewBox="0 0 124.524 124.524" xml:space="preserve">
                    <g>
                    <path d="M51,102.05c10.5,0,20.2-3.2,28.3-8.6l29.3,29.3c2.301,2.3,6.101,2.3,8.5,0l5.7-5.7c2.3-2.3,2.3-6.1,0-8.5L93.4,79.35
                    c5.399-8.1,8.6-17.8,8.6-28.3c0-28.1-22.9-51-51-51c-28.1,0-51,22.9-51,51C0,79.149,22.8,102.05,51,102.05z M51,20.05
                    c17.1,0,31,13.9,31,31c0,17.1-13.9,31-31,31c-17.1,0-31-13.9-31-31C20,33.95,33.9,20.05,51,20.05z"></path>
                    </g>
                </svg> -->
                <input class="form-control search-input " name="search_term"  autofocus="autofocus" type="search" placeholder="Search topics or keywords">
                </div>
                <!--end of col-->
                <div class="col-xl-1 col-lg-2 col-md-2 mt-auto mb-auto search-clear-block">
                <button class="btn btn-sm  btn-clear" type="button" onclick="setValue('.search-input','')" >CLEAR</button>
                </div>
                <div class="col-auto mt-auto mb-auto search-close-block text-center"  onclick="closeBar()">
                <img class="w-70 close_btn search_close_icon" src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/search-x-icon.png"  loading="lazy"  alt="X">
                </div>
                <!--end of col-->
            </div>
            </form>
        </div>
        <!--end of col-->
        </div>`);

    

	

    }
}

loadTestCode();
