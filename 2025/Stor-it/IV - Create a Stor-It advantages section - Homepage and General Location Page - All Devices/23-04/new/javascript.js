// Function to load CSS dynamically
function loadCSS(url) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

// Function to load JS dynamically and execute a callback when it's done
function loadJS(url, callback) {
    const script = document.createElement('script');
    script.src = url;
    script.onload = callback; // Execute callback after the script is loaded
    document.body.appendChild(script);
}

function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-advantage')) {
        document.querySelector('body').classList.add('iv-advantage');

        const advantageSection = `
        <section class="advantage-section">
                <div class="advantage-main">
                    <center>
                        <h3><strong>Stor-It Advantages </strong></h3>
                        <p>Experience hassle-free storage with our secure units, exceptional customer service, and complimentary moving tools designed to meet your needs.</p>
                    </center>
                    <div class="advantage-box-main">
                        <ul class="advantage-slider">
                            <li class="advantage-item">
                                <div class="advantage-box">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/Accessible.png" alt="Accessible 24/7">
                                    <h3>Accessible 24/7</h3>
                                    <p>You can reach your household storage at any hour, even on holidays and weekends.</p>
                                </div>
                            </li>   
                            <li class="advantage-item">
                                <div class="advantage-box">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/cctv.png" alt="100% Protection">
                                    <h3>100% Protection</h3>
                                    <p>With fully fenced properties, night lighting, video surveillance, your items are protected.</p>
                                </div>
                            </li>   
                            <li class="advantage-item">
                                <div class="advantage-box">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/Term-Contract.png" alt="No long term contract ">
                                    <h3>No long term contract </h3>
                                    <p>Flexibility is key! At Storit, you're not locked into long-term commitments. Rent for as long or as short as you need-on your terms.</p>
                                </div>
                            </li>   
                            <li class="advantage-item">
                                <div class="advantage-box">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/Tenant-Insurance.png" alt="Tenant Insurance">
                                    <h3>Tenant Insurance</h3>
                                    <p>We've got you covered! Keep your belongings secure and your peace of mind intact with our comprehensive tenant insurance options.</p>
                                </div>
                            </li>   
                            <li class="advantage-item">
                                <div class="advantage-box">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/LargeSizeSelection.png" alt="Large Size Selection">
                                    <h3>Large Size Selection</h3>
                                    <p>From personal items to business inventory, Storit has a range of unit sizes for both households and businesses. Find the right space for your needs!</p>
                                </div>
                            </li>   
                            <li class="advantage-item">
                                <div class="advantage-box">
                                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/On-site-Team.png" alt="On-site Team">
                                    <h3>On-site Team</h3>
                                    <p>We have an on-site team during operating hours, we prioritize detouring unwanted guests and assisting our beloved customers.</p>
                                </div>
                            </li>   
                        </ul>
                    </div>
                </div>    
                <hr>
           </section>
    `;

        var path = window.location.pathname;

        const homeSelector = document.querySelector('#wysiwyg-block-43');
        if (homeSelector && path.includes('/') && !document.querySelector('.advantage-section')) {
            homeSelector.insertAdjacentHTML('afterend', advantageSection);
            document.querySelector('.advantage-section').classList.add('advantage-home');
        }

        var waitFacilities = setInterval(() => {
            const locationSelector = document.querySelector('#facilities > div:nth-child(2)');
            if (locationSelector && path.includes('/locations/') && !document.querySelector('.advantage-section')) {
                clearInterval(waitFacilities);
                locationSelector.insertAdjacentHTML('afterend', advantageSection);
                document.querySelector('.advantage-section').classList.add('advantage-location');
                setTimeout(() => {
                    cQuery('.advantage-slider').slick({
                        infinite: true,
                        speed: 300,
                        centerMode: false,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        initialSlide: 1,
                        prevArrow: '<button aria-label="Previous Item" tabindex="0" type="button" class="slick-prev slick-arrow"><i class="fa fa-arrow-circle-o-left" aria-hidden="true"></i></button>',
                        nextArrow: '<button aria-label="Next Item" type="button" class="slick-next slick-arrow"><i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></button>',
                        // mobileFirst: true,
                        accessibility: true,
                        centerPadding: 0,
                        useTransform: false,
                        useCSS: false,
                        dots : true,
                        responsive: [
                            {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            }
                            }, {
                            breakpoint: 549,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            }
                            }
                        ]
                    });
                }, 5000);
            }
        }, 2000);

    }
}

// Check for the condition to load the test code
const checkCondition = setInterval(() => {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
