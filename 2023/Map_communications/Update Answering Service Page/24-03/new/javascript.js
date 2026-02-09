function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('asp_iv')) {
        bodyEle.classList.add('asp_iv');
        
        // Put your test code here
        $('.asp_iv #content').prepend(`
            <section class="hero_section">    
                <div class="wrap cf">
                    <div class="hero_inner">
                        <h1>Live Telephone Answering Service</h1>
                        <p>Never miss another call with help from MAP Communications. Quality customer experiences, round-the-clock availability, and flexible rates make us the go-to telephone answering service.</p>
                        <a href="https://www.mapcommunications.com/contact-us/request-free-trial/" class="orange-btn">Get Started for Free</a>
                    </div>
                </div>
            </section>
        `);
        $('.hero_section').after(`<section class="complementary_section">
            <div class="wrap cf">
                <h2>Why Choose Us?</h2>
                <ul class="three_column_card">
                    <li>
                        <div class="icon_wrapper">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570317/mapcommunications/ASP_redesign/Watch_icon.svg">
                        </div>
                        <h5>24/7 Availability</h5>
                        <p>Our operators work night and day to ensure there’s always a friendly, helpful voice at the end of line, no matter the hour.</p>
                    </li>
                    <li>
                        <div class="icon_wrapper">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570317/mapcommunications/ASP_redesign/Call_icon.svg">
                        </div>
                        <h5>Live Call Transfer</h5>
                        <p>Routing calls to specific departments has never been easier. Allow us to serve as your office receptionist or support your in-house team.</p>
                    </li>
                    <li>
                        <div class="icon_wrapper">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570316/mapcommunications/ASP_redesign/calendar_icon.svg">
                        </div>
                        <h5>Appointment Scheduling</h5>
                        <p>Our call answering service can maintain your calendar, schedule appointments, and remind your guests of upcoming services.</p>
                    </li>
                    <li>
                        <div class="icon_wrapper">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570316/mapcommunications/ASP_redesign/Lock_with_Plus_icon.svg">
                        </div>
                        <h5>HIPAA Compliant</h5>
                        <p>We know how important it is to handle patient data with care. Each of our virtual receptionists is trained with HIPAA compliance in mind.</p>
                    </li>
                    <li>
                        <div class="icon_wrapper">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570316/mapcommunications/ASP_redesign/Message_icon.svg">
                        </div>
                        <h5>Bilingual Operators</h5>
                        <p>If you’re hoping to connect with callers of all backgrounds, our bilingual operators can help bridge the communication gap.</p>
                    </li>
                    <li>
                        <div class="icon_wrapper">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679637723/mapcommunications/ASP_redesign/Note_file_icon_2x.jpg" width="58">
                        </div>
                        <h5>Lead Qualification</h5>
                        <p>Cut through the noise with our lead qualification services. We’ll vet each lead and forward on the calls that meet your high standards.</p>
                    </li>
                </ul>
            </div>
        </section>
        <section class="how_works">
            <div class="wrap cf">
                <h2>How It Works</h2>
                <div class="how_work_wrapper">
                    <div class="how_work_content">
                        <span class="number">1</span>
                        <h3>Get Set Up in <br> Minutes</h3>
                        <p>Signing up with our telephone answering service is easy. After asking a few questions about your needs, we’ll help craft a customized script and begin answering your calls.</p>
                    </div>
                    <div class="how_work_content">
                        <span class="number">2</span>
                        <h3>We Answer Your <br> Calls</h3>
                        <p>Our receptionists mirror the same greetings you use to answer the phone, ensuring a seamless transition from your staff to ours. Many callers never realize they’re speaking with a third-party.</p>
                    </div>
                    <div class="how_work_content">
                        <span class="number">3</span>
                        <h3>We Get the Information <br> to Where It is Needed</h3>
                        <p>Quickly and easily track the conversations we have with your callers right from our mobile app. CogniSent allows you to keep tabs on caller requests right from your personal device.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="industries_section">
            <div class="wrap cf">
                <h2>Industries We Serve</h2>
                <p>No matter your industry, our live answering service can integrate seamlessly into your organization. Before taking a single call, we become subject matter experts into your policies, procedures, and service offerings.</p>
                <ul class="three_column_card">
                    <li>
                        <h3>Real Estate & Property Management</h3>
                        <p>Unchain yourself from your desk and trust our receptionists to handle your calls while you’re busy showing off properties, taking clients to lunch, or closing deals.
                        </p>
                    </li>
                    <li>
                        <h3>Healthcare & Medical</h3>
                        <p>Entrust your patient calls with our team. Callers will enjoy prompt, professional support when they need it most, allowing your staff more time to serve patients in person.
                        </p>
                    </li>
                    <li>
                        <h3>Legal</h3>
                        <p>Allow MAP to take over client intake services. With your calls handled, you’ll experience fewer interruptions and have more time to dedicate to your clients.</p>
                    </li>
                    <li>
                        <h3>Financial Services</h3>
                        <p>When a missed call means missed opportunities, you can’t afford to let inbound calls roll to voicemail. Allow our phone answering service to stem the tide.
                        </p>
                    </li>
                    <li>
                        <h3>IT, Technology & Communications</h3>
                        <p>When callers need help, they want it on their own terms. We can provide Tier One tech support 24 hours a day.</p>
                    </li>
                    <li>
                        <h3>Home Services, HVAC & Plumbing</h3>
                        <p>Service providers and technicians are often summoned to work late at night, early in the day, and on holidays. Leave the dispatching to MAP.</p>
                    </li>
                    <li>
                        <h3>Tourism, Travel & Hospitality</h3>
                        <p>You don’t get a second chance at a first impression. Trust our virtual receptionists to represent your business with warmth and hospitality.</p>
                    </li>
                    <li>
                        <h3>Building, Construction & Trades</h3>
                        <p>Focus on the task at hand while minimizing interruptions. Our answering service can provide callers with a personal touch without disrupting your busy work day.</p>
                    </li>
                    <li>
                        <h3>Retail & Ecommerce</h3>
                        <p>Give your shoppers your full attention while we man the phones. After all, your customers deserve the best, no matter what’s happening in-store.</p>
                    </li>
                </ul>
            </div>
        </section>
        <section class="faq_section">
            <div class="wrap cf">
                <h2>Answering Service FAQs</h2>
                <ul></ul>
            </div>
        </section>`);

        const FAQItems = {
            1 : {
                title: 'What Does an Answering Service Cost?',
                description: 'At MAP Communications, you only pay for the time we actively spend on the phone with your callers. Flexible pricing allows you to buy as many or as few minutes as you might need. Feel free to adjust coverage up or down based on demand. <u>Get more information on pricing.</u>'
            },
            2 : {
                title: 'What Does an Answering Service Do?',
                description: 'Add Content here'
            },
            3 : {
                title: 'Do People Still Use Answering Services?',
                description: 'Add Content here'
            },
            4 : {
                title: 'What is the Difference Between a Call Center and an Answering Service?',
                description: 'Add Content here'
            },
            5 : {
                title: 'Who Needs an Answering Service?',
                description: 'Add Content here'
            },
            6 : {
                title: 'What are Two Advantages of an Answering Service?',
                description: 'Add Content here'
            },
            7 : {
                title: 'Do Answering Services Take Messages?',
                description: 'Add Content here'
            },
            8 : {
                title: 'What is an Answering Service?',
                description: 'Add Content here'
            }
        }

        var html="";
        Object.keys(FAQItems).forEach(key => {
            html += '<li>\
                <div class="faq_title">\
                    <h5>'+FAQItems[key].title+'</h5>\
                    <span class="faq_icon"></span>\
                </div>\
                <h5 class="faq_content">'+FAQItems[key].description+'</h5>\
            </li>';
            document.querySelector('.asp_iv .faq_section ul').innerHTML = html;
        });

        $(document).on('click', '.faq_title', function(){
            var $this = $(this);
            $this.toggleClass('active');
            $this.next().slideToggle();
            $this.parent().toggleClass('active');
        });

        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}
loadTestCode();