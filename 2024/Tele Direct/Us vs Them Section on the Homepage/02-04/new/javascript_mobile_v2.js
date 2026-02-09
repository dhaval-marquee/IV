function loadTestCode() {
    if (!document.querySelector('body').classList.contains('homePage_iv')) {
        document.querySelector('body').classList.add('homePage_iv');

        var getCSS = jQuery('.industry-box-wrap-section').attr('style');
        console.log(getCSS);
        document.querySelector('.homePage_iv #pg-5-3').insertAdjacentHTML('beforebegin',`<div class="chooseSection" style="${getCSS}">
            <div class="container">
                <div class="header">
                    <h3>Why Choose Us?</h3>
                    <p>We understand that you have many options.<br> Take a glance at what makes us different than&nbsp;most.</p>
                </div>  
                <div class="tableWrapper">
                    <table class="table border">
                        <thead>
                            <tr>
                                <td scope="row" class="row-header"></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="col" height="60"></th>
                                <th scope="col" class="blueTop">TeleDirect</th>
                                <th scope="col">Many Other Call&nbsp;Centers</th>
                            </tr>
                            <tbody>
                                <tr>
                                    <th scope="row" class="row-header">Prepaid minute blocks</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">Unused Minutes Rollover</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">U.S. Based</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">Agents Available 24/7 365</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">Experienced in all industries</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">HIPAA compliant</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">PCI Certified</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">ISO Compliant</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">English & Spanish Speaking Agents</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">No Monthly Recurring Fees</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">99.995% system uptime</th>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <th scope="row" class="row-header">Dedicated account support</th>
                                    <td class="blueBottom"><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/check-icon.png" alt="check icon"></td>
                                    <td><img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/TeleDirect/Closeicon.png" alt="Close icon"></td>
                                </tr>
                                <tr>
                                    <td scope="row" class="row-header"></td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </thead>
                    </table>
                </div>
                <a href="/pricing" class="orangeBtn">
                    <span>Request Pricing &amp; Learn More</span>
                </a>
            </div>    
        </div>`);
    }
}
loadTestCode();
