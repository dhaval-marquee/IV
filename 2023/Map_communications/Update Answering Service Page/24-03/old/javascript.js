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
                <ul>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570317/mapcommunications/ASP_redesign/Watch_icon.svg">
                        <h5>24/7 Availability</h5>
                        <p>Our operators work night and day to ensure there’s always a friendly, helpful voice at the end of line, no matter the hour.</p>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570317/mapcommunications/ASP_redesign/Call_icon.svg">
                        <h5>Live Call Transfer</h5>
                        <p>Routing calls to specific departments has never been easier. Allow us to serve as your office receptionist or support your in-house team.</p>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570316/mapcommunications/ASP_redesign/calendar_icon.svg">
                        <h5>Appointment Scheduling</h5>
                        <p>Our call answering service can maintain your calendar, schedule appointments, and remind your guests of upcoming services.</p>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570316/mapcommunications/ASP_redesign/Lock_with_Plus_icon.svg">
                        <h5>HIPAA Compliant</h5>
                        <p>We know how important it is to handle patient data with care. Each of our virtual receptionists is trained with HIPAA compliance in mind.</p>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570316/mapcommunications/ASP_redesign/Message_icon.svg">
                        <h5>Bilingual Operators</h5>
                        <p>If you’re hoping to connect with callers of all backgrounds, our bilingual operators can help bridge the communication gap.</p>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1679570316/mapcommunications/ASP_redesign/Note_file_icon.svg">
                        <h5>Lead Qualification</h5>
                        <p>Cut through the noise with our lead qualification services. We’ll vet each lead and forward on the calls that meet your high standards.</p>
                    </li>
                </ul>
            </div>
        </section>
        <section class="how_works">
            <div class="wrap cf">
                <h2>How it Works</h2>
                <div class="how_work_wrapper">
                    <div class="how_work_content">
                        <span class="number">1</span>
                        <h4>Get Set Up in <br> Minutes</h4>
                        <p>Tell us about your business and our talented virtual receptionists will have your calls covered in no time. We’ll craft a customized script to match your preferred language, policies, and procedures.</p>
                    </div>
                    <div class="how_work_content">
                        <span class="number">2</span>
                        <h4>We Answer <br> Your Calls</h4>
                        <p>Turn on coverage as needed. You’ll only pay for the time we actually spend chatting with your callers, making our services a fraction of the cost of a full-time, in-house receptionist.</p>
                    </div>
                    <div class="how_work_content">
                        <span class="number">3</span>
                        <h4>We Get the Information to <br> Where It is Needed</h4>
                        <p>Our virtual receptionists deliver quality customer experiences every time the phone rings. By meeting your customers where they are, we’ll delight and inspire with every conversation.</p>
                    </div>
                </div>
            </div>
        </section>`);

























        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }
    setTimeout(() => {
        document.getElementsByTagName("body")[0].style.visibility = "visible";
    }, 3000);
}
loadTestCode();