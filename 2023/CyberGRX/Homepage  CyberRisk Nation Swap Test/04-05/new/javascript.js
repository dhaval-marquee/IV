function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('tab_iv')) {
        bodyEle.classList.add('tab_iv');
        
        // Put your test code here
        var IconImage = `<svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.1875 17.5C6.1875 18.0745 6.30066 18.6434 6.52053 19.1742C6.74039 19.705 7.06265 20.1873 7.46891 20.5936C7.87516 20.9998 8.35746 21.3221 8.88826 21.542C9.41906 21.7618 9.98797 21.875 10.5625 21.875C11.137 21.875 11.7059 21.7618 12.2367 21.542C12.7675 21.3221 13.2498 20.9998 13.6561 20.5936C14.0623 20.1873 14.3846 19.705 14.6045 19.1742C14.8243 18.6434 14.9375 18.0745 14.9375 17.5C14.9375 16.9255 14.8243 16.3566 14.6045 15.8258C14.3846 15.295 14.0623 14.8127 13.6561 14.4064C13.2498 14.0002 12.7675 13.6779 12.2367 13.458C11.7059 13.2382 11.137 13.125 10.5625 13.125C9.98797 13.125 9.41906 13.2382 8.88826 13.458C8.35746 13.6779 7.87516 14.0002 7.46891 14.4064C7.06265 14.8127 6.74039 15.295 6.52053 15.8258C6.30066 16.3566 6.1875 16.9255 6.1875 17.5V17.5Z" stroke="#ff602e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.8125 17.5C1.8125 19.8206 2.73437 22.0462 4.37532 23.6872C6.01626 25.3281 8.24186 26.25 10.5625 26.25C12.8831 26.25 15.1087 25.3281 16.7497 23.6872C18.3906 22.0462 19.3125 19.8206 19.3125 17.5C19.3125 15.1794 18.3906 12.9538 16.7497 11.3128C15.1087 9.67187 12.8831 8.75 10.5625 8.75C8.24186 8.75 6.01626 9.67187 4.37532 11.3128C2.73437 12.9538 1.8125 15.1794 1.8125 17.5V17.5Z" stroke="#ff602e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5625 17.5L21.0625 7" stroke="#ff602e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M1.8125 27.125L4.82833 24.1091" stroke="#ff602e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M19.3125 27.125L16.2967 24.1091" stroke="#ff602e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23.4752 9.5375C23.2831 9.72979 23.0489 9.87472 22.7911 9.96078C22.5334 10.0468 22.2591 10.0717 21.99 10.0333L18.525 9.53867L18.0304 6.07367C17.9919 5.8047 18.0165 5.53047 18.1024 5.27269C18.1882 5.01491 18.3329 4.78066 18.525 4.5885L22.2374 0.875L23.2944 4.76817L27.1875 5.82517L23.4752 9.5375Z" stroke="#ff602e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`;
        
        document.querySelector('section.m-textmedia:nth-last-child(2):not(.tab_iv_tabslayer)')?.remove();

        document.querySelector('section.m-textmedia:last-child').insertAdjacentHTML('beforebegin',`<section class="m-textmedia double-pad tab_iv_tabslayer">
                <div class="container">
                    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit Integer odio turpis</h2>
                    <div class="tab_iv_tabs">
                        <div class="tab_iv_tabstitle_wrap">
                            <button class="tab_iv_tabstitle active" data-tab="1">
                                `+IconImage+`
                                <span font-weight="bold" class="tab_iv_tabstitle_text">Verify Vendor Compliance</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                            <button class="tab_iv_tabstitle" data-tab="2">
                                `+IconImage+`
                                <span font-weight="bold" class="tab_iv_tabstitle_text">Vet & Onboard Vendors</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                            <button class="tab_iv_tabstitle" data-tab="3">
                                `+IconImage+`
                                <span font-weight="bold" class="tab_iv_tabstitle_text">Prioritize Third-Party Risks</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                            <button class="tab_iv_tabstitle" data-tab="4">
                                `+IconImage+`
                                <span font-weight="bold" class="tab_iv_tabstitle_text">Manage Your Cyber Reputation</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                            <button class="tab_iv_tabstitle" data-tab="5">
                                `+IconImage+`
                                <span font-weight="bold" class="tab_iv_tabstitle_text">Secure Program Investment</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                            <button class="tab_iv_tabstitle" data-tab="6">
                                `+IconImage+`
                                <span font-weight="bold" class="tab_iv_tabstitle_text">Prepare for a Zero-Day Attack</span>
                                <span class="tab_iv_tabstitle_line"></span>
                            </button>
                        </div>
                        <div class="tab_iv_tabscontent_wrap">
                            <div class="tab_iv_tabscontent_item active" id="tab-1">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img alt="Calendly for Sales" src="https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/1d7cd9d16cc09fffcdea73cb6718479f/Calendly-Sales-Small-new.png?w=1140&amp;h=955&amp;q=85&amp;fm=png">
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/4WGCWkIoXB2NHjHzgCNxYq/8d7905dcc7c57f31a07e2b5433c55392/Property_1_Default.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Drive more revenue</h4>
                                                    <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/7ca46xMCYZeCwUBwo8chR5/a5348e9e292420609388895feeca6808/Theme_Light__33_.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Speed up your sales cycle</h4>
                                                    <p>Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/4hDDf32o6Lz7q8SKL4jpia/762c7012671de1694da8c6a4414ec4c9/Theme_Light__8_.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Close more deals</h4>
                                                    <p>Customize reminder and follow-up workflows to move deals along, integrate with sales tools, and remove logistical tasks to focus on selling.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore-btn">
                                            <a href="#">
                                                <span class="tab_iv_learnmore-text">Learn more</span>
                                                <span class="tab_iv_learnmore-icon" width="28px" height="20px">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab_iv_tabscontent_item" id="tab-2">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img alt="Calendly for Sales" src="https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/1d7cd9d16cc09fffcdea73cb6718479f/Calendly-Sales-Small-new.png?w=1140&amp;h=955&amp;q=85&amp;fm=png">
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/4WGCWkIoXB2NHjHzgCNxYq/8d7905dcc7c57f31a07e2b5433c55392/Property_1_Default.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Drive more revenue</h4>
                                                    <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/7ca46xMCYZeCwUBwo8chR5/a5348e9e292420609388895feeca6808/Theme_Light__33_.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Speed up your sales cycle</h4>
                                                    <p>Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore-btn">
                                            <a href="#">
                                                <span class="tab_iv_learnmore-text">Learn more</span>
                                                <span class="tab_iv_learnmore-icon" width="28px" height="20px">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab_iv_tabscontent_item" id="tab-3">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img alt="Calendly for Sales" src="https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/1d7cd9d16cc09fffcdea73cb6718479f/Calendly-Sales-Small-new.png?w=1140&amp;h=955&amp;q=85&amp;fm=png">
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/4WGCWkIoXB2NHjHzgCNxYq/8d7905dcc7c57f31a07e2b5433c55392/Property_1_Default.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Drive more revenue</h4>
                                                    <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/7ca46xMCYZeCwUBwo8chR5/a5348e9e292420609388895feeca6808/Theme_Light__33_.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Speed up your sales cycle</h4>
                                                    <p>Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/4hDDf32o6Lz7q8SKL4jpia/762c7012671de1694da8c6a4414ec4c9/Theme_Light__8_.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Close more deals</h4>
                                                    <p>Customize reminder and follow-up workflows to move deals along, integrate with sales tools, and remove logistical tasks to focus on selling.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore-btn">
                                            <a href="#">
                                                <span class="tab_iv_learnmore-text">Learn more</span>
                                                <span class="tab_iv_learnmore-icon" width="28px" height="20px">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab_iv_tabscontent_item" id="tab-4">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img alt="Calendly for Sales" src="https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/1d7cd9d16cc09fffcdea73cb6718479f/Calendly-Sales-Small-new.png?w=1140&amp;h=955&amp;q=85&amp;fm=png">
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/4WGCWkIoXB2NHjHzgCNxYq/8d7905dcc7c57f31a07e2b5433c55392/Property_1_Default.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Drive more revenue</h4>
                                                    <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/7ca46xMCYZeCwUBwo8chR5/a5348e9e292420609388895feeca6808/Theme_Light__33_.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Speed up your sales cycle</h4>
                                                    <p>Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore-btn">
                                            <a href="#">
                                                <span class="tab_iv_learnmore-text">Learn more</span>
                                                <span class="tab_iv_learnmore-icon" width="28px" height="20px">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab_iv_tabscontent_item" id="tab-5">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img alt="Calendly for Sales" src="https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/1d7cd9d16cc09fffcdea73cb6718479f/Calendly-Sales-Small-new.png?w=1140&amp;h=955&amp;q=85&amp;fm=png">
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/4WGCWkIoXB2NHjHzgCNxYq/8d7905dcc7c57f31a07e2b5433c55392/Property_1_Default.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Drive more revenue</h4>
                                                    <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/7ca46xMCYZeCwUBwo8chR5/a5348e9e292420609388895feeca6808/Theme_Light__33_.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Speed up your sales cycle</h4>
                                                    <p>Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/4hDDf32o6Lz7q8SKL4jpia/762c7012671de1694da8c6a4414ec4c9/Theme_Light__8_.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Close more deals</h4>
                                                    <p>Customize reminder and follow-up workflows to move deals along, integrate with sales tools, and remove logistical tasks to focus on selling.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore-btn">
                                            <a href="#">
                                                <span class="tab_iv_learnmore-text">Learn more</span>
                                                <span class="tab_iv_learnmore-icon" width="28px" height="20px">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab_iv_tabscontent_item" id="tab-6">
                                <div class="tab_iv_tabscontent_inner">
                                    <div class="tab_iv_tabscontent_itemrhs">
                                        <img alt="Calendly for Sales" src="https://images.ctfassets.net/k0lk9kiuza3o/2rG4thXSvKkcjfy96bmbWa/1d7cd9d16cc09fffcdea73cb6718479f/Calendly-Sales-Small-new.png?w=1140&amp;h=955&amp;q=85&amp;fm=png">
                                    </div>
                                    <div class="tab_iv_tabscontent_itemlhs">
                                        <ul class="tab_iv_tabscontent_list">
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/4WGCWkIoXB2NHjHzgCNxYq/8d7905dcc7c57f31a07e2b5433c55392/Property_1_Default.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Drive more revenue</h4>
                                                    <p>Book high-value meetings in seconds and turn scheduling into a competitive advantage.</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div width="auto" class="tab_iv_tabscontent_listicon">
                                                    <img src="//images.ctfassets.net/k0lk9kiuza3o/7ca46xMCYZeCwUBwo8chR5/a5348e9e292420609388895feeca6808/Theme_Light__33_.svg" alt="" width="24px" height="24px">
                                                </div>
                                                <div class="tab_iv_tabscontent_listtext">
                                                    <h4>Speed up your sales cycle</h4>
                                                    <p>Keep your deal momentum high and remove scheduling friction at every stage of your sales cycle.</p>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="tab_iv_learnmore-btn">
                                            <a href="#">
                                                <span class="tab_iv_learnmore-text">Learn more</span>
                                                <span class="tab_iv_learnmore-icon" width="28px" height="20px">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>`
        );

        document.querySelectorAll(".tab_iv_tabstitle").forEach(function(button){
            button.addEventListener("click", function(){
                var tabID = button.getAttribute('data-tab');
                document.querySelectorAll(".tab_iv_tabstitle").forEach(function(removeClass){
                    removeClass.classList.remove('active');
                });
                document.querySelectorAll(".tab_iv_tabscontent_item").forEach(function(removeClass){
                    removeClass.classList.remove('active');
                });
                button.classList.add('active');
                document.querySelector('#tab-' + tabID).classList.add('active');
            });
        });
    }
}
loadTestCode();