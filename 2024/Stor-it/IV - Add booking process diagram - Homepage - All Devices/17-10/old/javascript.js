function loadTestCode() {
    if (!jQuery('body').hasClass('homepage_iv')) {
        jQuery('body').addClass('homepage_iv');
        
        // Put your test code here
        jQuery('#pitchThemeContainer').after(`<section class="advantage-section">
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
                                <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/Security.png" alt="100% Security">
                                <h3>100% Security</h3>
                                <p>With fully fenced properties, night lighting, video surveillance, your items are fully secure.</p>
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
        </section>`);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);








// Function to load CSS dynamically
// function loadCSS(url) {
//     const link = document.createElement('link');
//     link.rel = 'stylesheet';
//     link.href = url;
//     document.head.appendChild(link);
// }

// // Function to load JS dynamically and execute a callback when it's done
// function loadJS(url, callback) {
//     const script = document.createElement('script');
//     script.src = url;
//     script.onload = callback; // Execute callback after the script is loaded
//     document.body.appendChild(script);
// }

// function loadTestCode() {
//     if (!document.querySelector('body').classList.contains('iv-advantage')) {
//         document.querySelector('body').classList.add('iv-advantage');

//     jQuery('#pitchThemeContainer').after(`<section class="advantage-section">
//                 <div class="advantage-main">
//                     <center>
//                         <h3><strong>Stor-It Advantages </strong></h3>
//                         <p>Experience hassle-free storage with our secure units, exceptional customer service, and complimentary moving tools designed to meet your needs.</p>
//                     </center>
//                     <div class="advantage-box-main">
//                         <ul class="advantage-slider">
//                             <li class="advantage-item">
//                                 <div class="advantage-box">
//                                     <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/Accessible.png" alt="Accessible 24/7">
//                                     <h3>Accessible 24/7</h3>
//                                     <p>You can reach your household storage at any hour, even on holidays and weekends.</p>
//                                 </div>
//                             </li>   
//                             <li class="advantage-item">
//                                 <div class="advantage-box">
//                                     <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/Security.png" alt="100% Security">
//                                     <h3>100% Security</h3>
//                                     <p>With fully fenced properties, night lighting, video surveillance, your items are fully secure.</p>
//                                 </div>
//                             </li>   
//                             <li class="advantage-item">
//                                 <div class="advantage-box">
//                                     <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/Term-Contract.png" alt="No long term contract ">
//                                     <h3>No long term contract </h3>
//                                     <p>Flexibility is key! At Storit, you're not locked into long-term commitments. Rent for as long or as short as you need-on your terms.</p>
//                                 </div>
//                             </li>   
//                             <li class="advantage-item">
//                                 <div class="advantage-box">
//                                     <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/Tenant-Insurance.png" alt="Tenant Insurance">
//                                     <h3>Tenant Insurance</h3>
//                                     <p>We've got you covered! Keep your belongings secure and your peace of mind intact with our comprehensive tenant insurance options.</p>
//                                 </div>
//                             </li>   
//                             <li class="advantage-item">
//                                 <div class="advantage-box">
//                                     <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/LargeSizeSelection.png" alt="Large Size Selection">
//                                     <h3>Large Size Selection</h3>
//                                     <p>From personal items to business inventory, Storit has a range of unit sizes for both households and businesses. Find the right space for your needs!</p>
//                                 </div>
//                             </li>   
//                             <li class="advantage-item">
//                                 <div class="advantage-box">
//                                     <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/Store-IT/On-site-Team.png" alt="On-site Team">
//                                     <h3>On-site Team</h3>
//                                     <p>We have an on-site team during operating hours, we prioritize detouring unwanted guests and assisting our beloved customers.</p>
//                                 </div>
//                             </li>   
//                         </ul>
//                     </div>
//                 </div>    
//                 <hr>
//     </section>`);
//     }
// }

// // Check for the condition to load the test code
// const checkCondition = setInterval(() => {
//     if (document.querySelectorAll('body').length > 0) {
//         clearInterval(checkCondition);
//         loadTestCode();
//     }
// }, 100);
