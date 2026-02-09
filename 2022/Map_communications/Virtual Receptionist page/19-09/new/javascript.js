function loadCode() {
    if (!$('body').hasClass('iv_virtual')) {
        $('body').addClass('iv_virtual');
        
        $('.iv_virtual .top-wrapper').css('background-image','url("//res.cloudinary.com/ignite-visibility/image/upload/v1663068813/mapcommunications/virtual-services/hero_bg.png")')
        $('.iv_virtual #content, .iv_virtual .start-trial-section, .iv_virtual .testimonial-section').remove();
        
        $('.iv_virtual .top-wrapper .top-banner-content').html(`<h2>Live Virtual Receptionist Services</h2>
    <p>Call answering services to suit your unique business</p>
    <a href="https://www.mapcommunications.com/contact-us/request-free-trial/" class="orange-btn">Get Started for Free</a>`);
    
    $('.iv_virtual .top-wrapper').after(`<div class="why_choose flex">
        <div class="wrap">
            <h2>Why Choose Us?</h2>
            <div class="why_choose_wraper flex-boxes">
                <div class="why_choose_content flex-box">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663139768/mapcommunications/virtual-services/Avaliable-24-7.png" alt="Avaliable-24/7" width="100">
                    <h4>24/7 Availability</h4>
                    <p>The days of a traditional nine-to-five are long gone. That’s why we work around the clock to answer your calls all day, every day. </p>
                </div>
                <div class="why_choose_content flex-box">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663139768/mapcommunications/virtual-services/Bilingual-Operators.png" alt="Bilingual-Operators" width="100">
                    <h4>Bilingual Operators</h4>
                    <p>America is growing increasingly diverse, which is why our answering service is staffed by bilingual agents who provide knowledgeable responses about your products and services.</p>
                </div>
                <div class="why_choose_content flex-box">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663068812/mapcommunications/virtual-services/Appointment-Scheduling.png" alt="Appointment-Scheduling" width="100">
                    <h4>Appointment Scheduling</h4>
                    <p> Virtual receptionists can schedule appointments and handle calendar management, including cancellations and waitlists. We can also remind your customers of upcoming appointments.</p>
                </div>
                <div class="why_choose_content flex-box">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663068813/mapcommunications/virtual-services/Live-Call-Transfer.png" alt="Live-Call-Transfer" width="100">
                    <h4>Live Call Transfer</h4>
                    <p>Never miss a customer call with our live call transfer services. We’ll screen your calls and forward only the most important ones to you directly.</p>
                </div>
                <div class="why_choose_content flex-box">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663068812/mapcommunications/virtual-services/Hippa-Compliant.png" alt="Hippa-Compliant" width="100">
                    <h4>HIPAA Compliant</h4>
                    <p> By taking a solution-first approach to each call we take, we protect patient privacy and your reputation. Our answering service was designed with HIPAA compliance in mind.</p>
                </div>
                <div class="why_choose_content flex-box">
                    <img src="//res.cloudinary.com/ignite-visibility/image/upload/v1663068813/mapcommunications/virtual-services/Lead-Qualifcations.png" alt="Lead-Qualifcations" width="100">
                    <h4>Lead Qualification</h4>
                    <p>Allow our team to wade through the time-wasters and find only the most valuable opportunities to forward onto you. Lead qualification saves everyone time!</p>
                </div>
            </div>
        </div>
    </div>
    <div class="how_works flex bg_grey">
        <div class="wrap">
            <h2 class="white">How it Works</h2>
            <div class="how_work_wrapper flex-boxes">
                <div class="how_work_content flex-box">
                    <span class="number">1</span>
                    <h4>Get Set Up in <br> Minutes</h4>
                    <p>Tell us about your business and our talented virtual receptionists will have your calls covered in no time. We’ll craft a customized script to match your preferred language, policies, and procedures.</p>
                </div>
                <div class="how_work_content flex-box">
                    <span class="number">2</span>
                    <h4>We Answer <br> Your Calls</h4>
                    <p>Turn on coverage as needed. You’ll only pay for the time we actually spend chatting with your callers, making our services a fraction of the cost of a full-time, in-house receptionist.</p>
                </div>
                <div class="how_work_content flex-box">
                    <span class="number">3</span>
                    <h4>We Get the Information to <br> Where It is Needed</h4>
                    <p>Our virtual receptionists deliver quality customer experiences every time the phone rings. By meeting your customers where they are, we’ll delight and inspire with every conversation.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="we_serve flex">
        <div class="wrap">
            <h2>Industries We Serve</h2>
            <div class="sub-text-wrap">
                <p>No two businesses are alike, which is why we take a bespoke approach to each of our partnerships. Allow us to tailor our service to your precise policies and procedures.</p>
            </div>
            <div class="we_serve_wrapper flex-boxes">
                <a href="https://www.mapcommunications.com/industries/property-management/real-estate-answering-service/" class="we_serve_content flex-box">
                    <h4>Real Estate & Property Management</h4>
                    <p>The world of real estate is truly 24/7. Teaming with our answering service means you’ll have full administrative support standing by at all times.</p>
                </a>
                <a href="https://www.mapcommunications.com/industries/medical-profession/" class="we_serve_content flex-box">
                    <h4>Healthcare & Medical</h4>
                    <p>Our HIPAA compliant answering service was designed with confidentiality in mind. Give your medical practice the administrative advantage you need to deliver on patient expectations.</p>
                </a>
                <a href="https://www.mapcommunications.com/industries/attorneys/" class="we_serve_content flex-box">
                    <h4>Legal</h4>
                    <p>Keep overhead low while maintaining a consistent, high-quality telephone presence for your clients. We have a proven track record with law firms of all practice areas.</p>
                </a>
                <a href="https://www.mapcommunications.com/industries/financial/" class="we_serve_content flex-box">
                    <h4>Financial Services</h4>
                    <p>Help clients stay on track for success long after the closing bell has rung. Our team can improve customer service and your bottom line.</p>
                </a>
                <a href="https://www.mapcommunications.com/industries/information-technology/" class="we_serve_content flex-box">
                    <h4>IT, Technology & Communications</h4>
                    <p>Optimized support for callers comes easy with our IT answering service. Allow our team to log tickets, escalate callers, and schedule follow up appointments.</p>
                </a>
                <a href="https://www.mapcommunications.com/industries/contractors/" class="we_serve_content flex-box">
                    <h4>Home Services, HVAC, Plumbing</h4>
                    <p> No matter your area of expertise, our highly-trained agents work around the clock to help your customers in their hour of need.</p>
                </a>
                <a href="https://www.mapcommunications.com/industries/transportation/" class="we_serve_content flex-box">
                    <h4>Tourism,Travel & Hospitality</h4>
                    <p>Deliver consistent, high-quality customer experiences to callers around the world. One great phone call can make all the difference in the hospitality industry.</p>
                </a>
                <a href="https://www.mapcommunications.com/industries/contractors/construction-answering-service/" class="we_serve_content flex-box">
                    <h4>Building, Construction & Trades</h4>
                    <p>Whether your callers are experiencing an emergency or you just want to provide excellent service with every ring of the telephone, we’re a hit across the trades.</p>
                </a>
                <a href="https://www.mapcommunications.com/services/call-center-services/e-commerce-call-center-services/" class="we_serve_content flex-box">
                    <h4>Retail & Ecommerce</h4>
                    <p>Feeling pulled in a million different directions? Fully customized administrative solutions help free you and your team up for other important customer service projects.</p>
                </a>
            </div>
        </div>
    </div>
    <div class="testimonials flex bg_grey">
        <div class="wrap">
            <h2 class="white">Customer Testimonials</h2>
            <div class="testimonials_wrapper flex-boxes">
                <div class="testimonials_content flex-box">
                    <p>"Using your receptionist service has made a significant impact on our office and our technicaians. Having your professional receptionists manage the phones after hours has been a huge benefit for us. We no longer worry about missing important phone calls and job opportunities."</p>
                    <span class="author">- john c., map customer</span>
                </div>
                <div class="testimonials_content flex-box">
                    <p>"I would tell any business owner that does not have the need or budget for a full time person to answer the phone to use MAP Communications virtual receptionist services without"</p>
                    <span class="author">- the sunset house, map customer</span>
                </div>
                <div class="testimonials_content flex-box">
                    <p>"As a small business owner, I gladly pay for services that reduce stress and take a load off my shoulders. MAP Communications does that for me and as a small business owner, that's worth its weight in gold."</p>
                    <span class="author">- scott m., map customer</span>
                </div>
            </div>
        </div>
    </div>
    <div class="faq_section">
        <div class="wrap">
            <h2>Virtual Receptionist FAQs</h2>
            <div class="faq_wrapper">
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>What is a Virtual Receptionist?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>A virtual receptionist receives inbound calls, answers caller questions, provides administrative support, and forwards conversations onto the right department. These professionals wear a lot of hats; from Tier 1 tech support to HIPAA-compliant appointment scheduling, virtual receptionists make a positive first impression with every ring of the telephone.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>What Does a Virtual Receptionist Do?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>Quality virtual receptionists serve as the voice of your business. In many cases, callers never realize they’re speaking with a third-party organization. Instead, virtual receptionists act as an extension of your team, providing quality customer experiences that are seamlessly integrated into your sales funnel.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>How Much Does a Virtual Receptionist Cost?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>When you decide to partner with MAP Communications, you’ll be privy to all the benefits of a 24/7 virtual receptionist. Pricing depends greatly upon how much you plan to use our services. You only pay for the time we actively spend on the phone chatting with customers.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>Does MAP Offer Flexible Pricing Plans for Virtual Receptionist Services?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>Yes! Our flexible plans are completely customizable. Whether you need coverage every night after you head home from the office or just during a particularly busy season at work, our virtual receptionists are ready to leap into action whenever you need us.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>Will All My Calls Be Answered by a Live Receptionist?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>Our live phone answering services ensure that every single call is quickly and professionally answered by a real person. This commitment helps maintain high levels of quality customer experiences. If your organization is simply too busy to answer every inbound call, count on MAP professionals to stem the tide.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>What Happens If My Team is Unavailable For Call Transfers?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>We’re passionate about helping you maintain a healthy work/life balance. If your team is unavailable, we’ll work to address caller questions and concerns while taking detailed messages and assuring callers that you’ll get back to them as soon as you can.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>Are all MAP Receptionists Based in the US?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>We’re a U.S.-based answering service with headquarters in Chesapeake, Virginia. While our receptionists are located throughout the country, they’re all stateside. There’s no need to bounce callers to centers around the world – when you trust MAP with your inbound calls, count on them to be handled here in the United States.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>How Can MAP's Virtual Receptionists Help My Business?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>Transform your customer experience by providing bilingual support for callers 24/7. No matter your industry, our virtual receptionists provide stellar first impressions and deliver consistent, high-quality calls that leave customers satisfied, every time. Whether you’re looking to save money on staffing, extend your availability, or minimize distractions, MAP Communications is the solution.</p>
                    </div>
                </div>
                <div class="faq-item">
                    <div class="faq-item-heading">
                        <h3>Can I Customize How MAP's Virtual Receptionist Answers My Calls?</h3>
                        <div class="faq-icon"></div>
                    </div>
                    <div class="faq-item-desc">
                        <p>Customized call scripts help ensure that every call is handled the way you would if you had the time. Our virtual receptionists aim to match your organization’s preferred language, policies, and procedures. While you might expect scripted conversations to feel forced, customized scripts provide the framework receptionists use to connect with each caller individually.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `)
    
    $('.faq-item-heading').on('click',function(){   
        $(this).parent('.faq-item').toggleClass('active').find('.faq-item-desc').slideToggle(); 
    });
        
        $('.iv_virtual').css('visibility','visible');
    }
}

// Load code just for mobile 
if (window.matchMedia("(min-width: 768px)").matches) {

loadCode();

window.addEventListener('resize', function(event) {
    if (window.matchMedia("(max-width: 767.98px)").matches) {
        location.reload();
    }
}, true);
} else {
window.addEventListener('resize', function(event) {
    if (window.matchMedia("(min-width: 768px)").matches) {
        location.reload();
    }
}, true);
}
// Load code just for mobile over