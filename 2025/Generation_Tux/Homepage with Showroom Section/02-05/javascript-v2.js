function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-homepage')) {
        document.querySelector('body').classList.add('iv-homepage-v2');
        
        // Put your test code here
        
        (function () {
            function handleShowroomSection() {
                var currentPage = window.location.href.split('?')[0].split('#')[0];

                if (currentPage === 'https://generationtux.com/' && document.querySelectorAll('.showroomSection').length === 0 && document.querySelectorAll('.iv-homepage').length === 0) {
                    document.querySelector('body').classList.add('iv-homepage');
                        var getElement = setInterval(() => {
                            if(document.querySelectorAll('#main-content > div:nth-child(3)').length > 0) {
                                clearInterval(getElement);
                                setTimeout(() => {
                                    document.querySelector('#main-content > div:nth-child(3)').insertAdjacentHTML('afterend', `<div class="p-section-hero showroomSection">
                                        <div class="container">
                                            <h2 class="text-h2-display md:text-h1-display !text-black">Visit Your Chicago Showroom</h2>
                                            <div class="row">
                                                <div class="col-span-12 xs:col-span-5 md:col-start-2">
                                                    <div class="space-y-16">
                                                        <span class="block">
                                                            <div class="grid">
                                                                <h3 class="row-start-2 block">Design the perfect wedding look with personalized style consultation</h3>
                                                            </div>
                                                        </span>
                                                        <hr class="my-16 w-32 text-gray sm:my-32">
                                                        <ul>
                                                            <li>Get expert style and fit advice</li>
                                                            <li>Browse our collection of luxury suits and tuxedos</li>
                                                            <li>Take advantage of our exclusive showroom discount with a <b>FREE</b> consultation</li>
                                                        </ul>
                                                        <a class="btn-info btn customButtons" href="https://generationtux.com/showrooms">Schedule Your Visit</a>
                                                    </div>
                                                </div>
                                                <div class="col-span-12 row-start-1 mb-32 xs:col-span-7 xs:row-start-auto xs:mb-0 md:col-start-7 md:col-end-13">
                                                    <img src="https://cdn.sanity.io/images/ugg4xu47/production/5bcc09dc8acf6abb190baa3cfe93ed570d214568-3868x2876.jpg" alt="Generation Tux Showroom">
                                                </div>
                                            </div>
                                        </div>
                                    </div>`);
                                }, 1000);
                            }
                        }, 100);

                } else if(currentPage !== 'https://generationtux.com/') {
                    document.querySelector('body').classList.remove('iv-homepage');
                    document.querySelector('.showroomSection').remove();
                }
            };

            // Hook into history methods
            const _pushState = history.pushState;
            const _replaceState = history.replaceState;
        
            history.pushState = function (...args) {
            const result = _pushState.apply(this, args);
            window.dispatchEvent(new Event('urlchange'));
            return result;
            };
        
            history.replaceState = function (...args) {
            const result = _replaceState.apply(this, args);
            window.dispatchEvent(new Event('urlchange'));
            return result;
            };
        
            window.addEventListener('popstate', () => window.dispatchEvent(new Event('urlchange')));
            window.addEventListener('urlchange', handleShowroomSection);
        
            // Run once on initial load
            handleShowroomSection();
        })();
    }
}


var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);