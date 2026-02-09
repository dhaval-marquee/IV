function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-homepage')) {
        document.querySelector('body').classList.add('iv-homepage');
        
        // Put your test code here
        document.querySelectorAll('#main-content > div')[2].insertAdjacentHTML('afterend', `<div class="p-section-hero showroomSection">
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
                            <p class="mb-16">Visit your Chicago showroom to get one-on-one expert styling tips, wedding party management, and more. Take advantage of our exclusive showroom discount with a <b>FREE</b> consultation.</p>
                            <a class="btn-info btn customButtons" href="https://generationtux.com/showrooms">Schedule Your Visit</a>
                        </div>
                    </div>
                    <div class="col-span-12 row-start-1 mb-32 xs:col-span-7 xs:row-start-auto xs:mb-0 md:col-start-7 md:col-end-13">
                        <img src="https://cdn.sanity.io/images/ugg4xu47/production/5bcc09dc8acf6abb190baa3cfe93ed570d214568-3868x2876.jpg" alt="Generation Tux Showroom">
                    </div>
                </div>
            </div>
        </div>`);
    }
}


var checkCondition = setInterval(function() {
    if (document.querySelectorAll('#main-content > div').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);