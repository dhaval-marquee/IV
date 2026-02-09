function modal() {
    if(!jQuery('body').hasClass('proPop_iv')) {
        jQuery('body').addClass('proPop_iv');
    
        // Modal content
        jQuery('.proPop_iv').prepend(`<div class="mq_modal">
            <div class="mq_modal_inner">
                <div class="mq_modal_block">
                    <div class="mq_modal_header">
                        <a href="javascript:;" class="mq_close"></a>    
                    </div>
                    <div class="mq_modal_content">
                    </div>
                </div>
            </div>
        </div>`);
            
        jQuery('.mq_modal_content').prepend(`<div class="popUpContents">
            <div class="popUpContent" service-popup="1">
                <div class="service-text">
                    <div class="service-titles">
                        <h2>1Search Plus</h2>
                    </div>
                    <div class="service-content">                         
                        <p><strong>ProDemand</strong>® puts you one click away from all the information you need for an accurate diagnosis and repair with the 1Search™ Plus feature. Its advanced search technology scans the vast database of Mitchell 1 content and returns targeted results in specific categories, leading the technician directly to the information needed and cutting through all the clutter.</p>
                        <p>The graphical card layout ensures all relevant information is always just one click away. And the interface aligns with the way techs think when approaching a diagnosis and repair, so it’s intuitive and easy to use.</p>
                        <h3>The Ultimate Diagnostic Resource</h3>
                        <ul>
                            <li>SureTrack</li>
                            <li>Real Fixes</li>
                            <li>Top Repairs</li>
                            <li>Causes and Fixes (ProView)</li>
                            <li>Guided Component Tests</li>
                            <li>How to Access SureTrack</li>
                        </ul>
                        <button type="button" class="service-btn">Book Your Free Demo</button>
                        <a class="service-link" href="https://mitchell1.com/prodemand/diagnostics/">Learn more about 1Search Plus</a>
                    </div>
                </div>
            </div>
            <div class="popUpContent" service-popup="2">
                <div class="service-text">
                    <div class="service-titles">
                        <h2>Wiring Diagrams</h2>
                    </div>
                    <div class="service-content">                         
                        <p>Do you dread navigating today’s complex wiring diagrams that take you down a seemingly endless, twisting path to the information you need?&nbsp; No More! We’ve eliminated that hassle with the <strong>Advanced Interactive Wiring Diagrams</strong> in ProDemand.</p>
                        <ul>
                            <li>The Best Wiring Diagrams in the Industry. Period.</li>
                            <li>Interactivity connects diagrams to detailed information</li>
                            <li>Quickly find wiring diagrams</li>
                            <li>Component wires highlight automatically</li>
                            <li>Simplified viewing of complex diagrams</li>
                        </ul>
                        <h3>Wiring diagrams have never been so complex — or so easy to navigate!</h3>
                        <ul class="link-wrapper">
                            <li><a href="https://youtu.be/wPfCIqo8B3A">WATCH THE VIDEO</a> to see the Interactive Wiring Diagrams in action.</li>
                            <li><a href="https://mitchell1.com/shopconnection/prodemand-update-brand-new-wiring-diagram-features/">READ THE BLOG POST</a> for the latest details.</li>
                        </ul>
                        <button type="button" class="service-btn">Book Your Free Demo</button>
                        <a class="service-link" href="https://mitchell1.com/prodemand/repair-information/wiring-diagrams/">Learn more about Wiring Diagrams</a>
                    </div>
                </div>
            </div>
            <div class="popUpContent" service-popup="3">
                <div class="service-text">
                    <h2>SureTrack Real Fixes</h2>
                    <div class="service-content">                         
                        <p>The SureTrack Community is an interactive tool inside ProDemand that you can use to collaborate with other professional technicians in order to solve a tricky diagnostic problem.</p>
                        <ul>
                            <li>
                                <strong>Interact with Professional Techs</strong>
                                Search or navigate to community content in order to look for an existing community thread related to the diagnostic problem at hand.
                                Ask a question out to the community in order to receive new ideas about how to approach a diagnostic problem.
                                Share your knowledge by answering open questions or by sharing tips that you know may help others.
                            </li>
                            <li>Ask Questions, Get Answers</li>
                            <li>Who Can Access the SureTrack Community?</li>
                            <li>SureTrack Community Dashboard</li>
                        </ul>
                    </div>
                    <button type="button" class="service-btn">Book Your Free Demo</button>
                    <a class="service-link"  href="https://mitchell1.com/prodemand/community/">Learn more about SureTrack Real Fixes</a>
                </div>
            </div>
            <div class="popUpContent" service-popup="4">
                <div class="service-text">
                    <h2>ADAS Repair Information</h2>
                    <div class="service-content">                         
                        <p>ProDemand® repair information from Mitchell 1 has your back. Simply click the Driver Assist (ADAS) Quick Link button, and you instantly see the full picture of all the ADAS features and components for the selected vehicle. And the information you need to diagnose, repair and calibrate these systems is just a click away.<br>
                        You’ll find all the ADAS information right where you need it, starting with the Quick Link ribbon on the very first screen in the ProDemand software. Depending on the year/make/model, some of the ADAS features you are likely to see in your shop include:
                        </p>
                        <ul>
                            <li>Collision Warning Indicator</li>
                            <li>Automatic Emergency Braking</li>
                            <li>Lane Departure Alert</li>
                            <li>Lane Assist</li>
                            <li>Adaptive Cruise Control</li>
                            <li>Adaptive Headlights</li>
                            <li>Blind Spot Indicator</li>
                            <li>Rear Cross Traffic</li>
                            <li>Automated Parking… and more!</li>
                        </ul>
                        <p>There’s no need to perform multiple lookups to find each piece of information separately. ProDemand also lets you know if the components of an ADAS feature will require calibration, special tools or scan tools in order to complete the job.</p>
                        <button type="button" class="service-btn">Book Your Free Demo</button>
                        <a class="service-link" href="https://mitchell1.com/prodemand/repair-information/advanced-driver-assistance-systems/">Learn more about ADAS Repair Information</a>
                    </div>
                </div>
            </div>   
            <div class="popUpContent" service-popup="5">
                <div class="service-text">
                    <div class="service-titles">
                        <h2>Estimate Guide</h2>
                    </div>
                    <div class="service-content">                         
                        <p> The fastest way to create accurate, professional estimates for auto repair shops. It brings together labor times, OEM parts pricing and parts diagrams viewable on a single page, making it easy to navigate directly to the information you need to pave the way for an efficient, profitable job.</p>
                        <ul>
                            <li>
                                <strong>Mitchell 1 Labor Times</strong>Since Glenn Mitchell created the first Mitchell Manual in his garage in 1946, we’ve been the leader in mechanical labor estimate guides. The comprehensive labor time guides are essential for building accurate estimates.
                            </li>
                            <li>
                                <strong>OEM Parts Coverage</strong>Includes OEM part numbers, manufacturer’s suggested retail pricing (MSRP) and detailed illustrations
                            </li>
                            <li>
                                <strong>Maintenance</strong>OEM schedule maintenance in time and mileage intervals as well as services based on dashboard indicator lights.
                            </li>
                            <li><strong>Fluids</strong>Type, capacity and relevant notes are included for easy reference</li>
                            <li><strong>Customized Quotes</strong>
                            Customize the estimate by editing labor times, adding parts manually, adding or deleting lines, and moving lines in the estimate to group items together. You can also customize the printout you show to the vehicle owner by suppressing selected fields in the estimate (like part numbers and labor hours). Advanced filtering capability makes searching saved estimates quick and easy. You can save and view up to 500 estimates for expanded visibility into your estimate history.</li>
                        </ul>
                            <button type="button" class="service-btn">Book Your Free Demo</button>
                        <a class="service-link" href="https://mitchell1.com/prodemand/estimating/">Learn more about Estimate Guide
                        </a>
                    </div>
                </div>
            </div>
            <div class="popUpContent" service-popup="6">
                <div class="service-text">
                    <div class="service-titles">
                        <h2>Maintenance Tasks</h2>
                    </div>
                    <div class="service-content">                         
                        <p>Scheduled maintenance is a big part of your business and ProDemand makes it easier than ever to make it profitable.</p>
                        <ul>
                            <li>
                                <strong>Mileage/Timed Intervals + Dash Indicators</strong> You choose how maintenance tasks are displayed, ensuring that no tasks are missed and no profit opportunities lost. You can choose to show only maintenance tasks for your vehicle’s entered mileage. By demonstrating complete knowledge of your customer’s vehicle’s unique maintenance needs, you also demonstrate your dedication to customer service.</li>
                            <li>
                                <strong>Fluid Specs</strong> From any location within the Maintenance module, simply use the Quick Links to view all fluid types, including capacities.
                            </li>
                            <li>
                                <strong>Reset Procedures</strong> Common reset procedures all in one place, including Dashboard Indicator and Tire Pressure Monitoring Resets.
                            </li>
                            <li>
                                <strong>Technician-Friendly Maintenance Checklists</strong> A printable checklist of all selected services, including footnotes.</li>
                            <li>
                                <strong>Consumer-Friendly Maintenance Checklists</strong> A professional maintenance checklist for consumers, that includes a customer header and footer for your shop's information.</li>
                            <li>
                                <strong>Quick Links</strong> The most commonly looked up information for the vehicle
                            </li>
                        </ul>
                        <button type="button" class="service-btn">Book Your Free Demo</button>
                        <a class="service-link" href="https://mitchell1.com/prodemand/maintenance/">Learn more about Maintenance Tasks</a>
                    </div>
                </div>
            </div>
        </div>`);
        
        // Modal Open & Close
        jQuery('#g1-section-1 .g1-grid a').on('click', function(){
            jQuery('.proPop_iv .mq_modal').addClass('fade').show();
            jQuery('.proPop_iv').addClass('mq_modal_open');
            setTimeout(() => {
                jQuery('.proPop_iv .mq_modal').addClass('open');
            }, 75);
        });
        jQuery('.proPop_iv .mq_modal_overlay, .proPop_iv .mq_close').on('click', function(){
            jQuery('.proPop_iv').removeClass('mq_modal_open');
            jQuery('.proPop_iv .mq_modal').removeClass('open');
            setTimeout(() => {
                jQuery('.proPop_iv .mq_modal').hide();
            }, 75);
        });
        document.querySelectorAll('#g1-section-1 ul li a').forEach(function(title) {
            if (title.innerText == 'Learn More') {
                title.setAttribute('href', 'javascript:;');
            }
        });

        var buttons = document.querySelectorAll('#g1-section-1 [id^="g1-button-"]');
        var popUps = document.querySelectorAll('.popUpContent');
        buttons.forEach(function(button, index) {
            button.addEventListener('click', function() {
                // Hide all pop-ups
                    popUps.forEach(function(popUp) {
                    popUp.style.display = 'none';
                });
                // Get the corresponding pop-up using the service-popup attribute
                var servicePopup = document.querySelector('[service-popup="' + (index + 1) + '"]');

                // Display the selected pop-up
                if (servicePopup) {
                servicePopup.style.display = 'block';
                }
            });
        });
    }
}
modal();