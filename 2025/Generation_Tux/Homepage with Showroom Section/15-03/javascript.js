function loadTestCode() {
    if (!jQuery('body').hasClass('iv-homepage')) {
        jQuery('body').addClass('iv-homepage');
        
        // Put your test code here

        jQuery('#main-content > div').eq().addClass('trendingSection');

        jQuery('.iv-homepage .trendingSection').after(`<div class="p-section-hero">
            <div class="container">
                <div class="row">
                    <div class="col-span-12 xs:col-span-5 md:col-start-2 md:col-end-6 ">
                        <div class="space-y-16">
                            <span class="block">
                                <div class="grid">
                                    <h1 class="text-h1-display row-start-2 block">Generation Tux Showrooms</h1>
                                </div>
                            </span>
                            <hr class="my-16 w-32 text-gray sm:my-32">
                            <p class="mb-16">Visit one of our showrooms located across the country to get one-on-one expert
                                styling tips, wedding party management, and more. Take advantage of our special showroom
                                discount with a free style consultation.
                            </p>
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
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);