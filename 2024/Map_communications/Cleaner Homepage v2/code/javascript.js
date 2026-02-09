function loadTestCode() {
    if (!document.querySelector('body').classList.contains('homepageTest_iv')) {
            document.querySelector('body').classList.add('homepageTest_iv');
            
            // Communications Title
            const communicationsTitle = `<div class="communications-title top-section">
                    <h2>MAP Communications, Inc. is 100% Employee-Owned.</h2>
                    <p>With our success hinging on yours, you can be sure we are bringing our A-game to every call!</p>
            </div>`
            document.querySelector('.homepageTest_iv .top-section').insertAdjacentHTML('afterend', communicationsTitle);

            // Company Logos
            const companyLogos = `<div class="company-logos-block">
                <h2 class="company-title">Trusted By America's Finest Brands.</h2>
                <div class="company-logos">
                    <div class="company-logo">
                        <img src="https://www.mapcommunications.com/wp-content/uploads/2015/09/ge.png" alt="General Electric">
                    </div>
                    <div class="company-logo">
                        <img src="https://www.mapcommunications.com/wp-content/uploads/2015/09/Georgia-Pacific.png" alt="Georgia Pacific">
                    </div>
                    <div class="company-logo">
                        <img src="https://www.mapcommunications.com/wp-content/uploads/2015/09/AP-logo-1981.png" alt="AP logo">
                    </div>
                    <div class="company-logo">
                        <img src="https://www.mapcommunications.com/wp-content/uploads/2015/09/Canon_logo.png" alt="Canon logo">
                    </div>
                    <div class="company-logo">
                        <img src="https://www.mapcommunications.com/wp-content/uploads/2015/09/dupont-logo.png" alt="Dupont logo">
                    </div>
                    <div class="company-logo">
                        <img src="https://www.mapcommunications.com/wp-content/uploads/2015/09/webmd.png" alt="Webmd logo">
                    </div>
                </div>
            </div>`;
            document.querySelector('.homepageTest_iv .communications-title').insertAdjacentHTML('afterend', companyLogos);

            // Why choose us
            const whyChooseUs = `<div class="choose-section">
                <div class="wrap">
                    <div class="choose-head">
                        <h2>Why Choose Us?</h2>
                    </div>
                    <div class="choose-items flex-boxes">
                        <div class="choose-item flex-box">
                            <div class="choose-item-inner">
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Avaliable-247.png" alt="Avaliable" data-lazy-src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Avaliable-247.png" data-ll-status="loaded" class="entered lazyloaded"><noscript>
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Avaliable-247.png" alt="Avaliable" /></noscript>
                                <h3>24/7 Availability</h3>
                                <p>Our operators work night and day to ensure there’s always a friendly, helpful voice at the end of line, no matter the hour.</p>
                            </div>
                        </div>
                        <div class="choose-item flex-box">
                            <div class="choose-item-inner">
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Live-Call-Transfer.png" alt="Live Call Transfer" data-lazy-src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Live-Call-Transfer.png" data-ll-status="loaded" class="entered lazyloaded"><noscript>
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Live-Call-Transfer.png" alt="Live Call Transfer" /></noscript>
                                <h3>Live Call Transfer</h3>
                                <p>Routing calls to specific departments has never been easier. Allow us to serve as your office receptionist or support your in-house team.</p>
                            </div>
                        </div>
                        <div class="choose-item flex-box">
                            <div class="choose-item-inner">
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Appointment-Scheduling.png" alt="Appointment Scheduling" data-lazy-src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Appointment-Scheduling.png" data-ll-status="loaded" class="entered lazyloaded"><noscript>
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Appointment-Scheduling.png" alt="Appointment Scheduling" /></noscript>
                                <h3>Appointment Scheduling</h3>
                                <p>Our call answering service can maintain your calendar, schedule appointments, and remind your guests of upcoming services.</p>
                            </div>
                        </div>
                        <div class="choose-item flex-box">
                            <div class="choose-item-inner">
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Hippa-Compliant.png" alt="Hippa Compliant" data-lazy-src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Hippa-Compliant.png" data-ll-status="loaded" class="entered lazyloaded"><noscript>
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Hippa-Compliant.png" alt="Hippa Compliant" /></noscript>
                                <h3>HIPAA Compliant</h3>
                                <p>We know how important it is to handle patient data with care. Each of our virtual receptionists is trained with HIPAA compliance in mind.</p>
                            </div>        
                        </div>
                        <div class="choose-item flex-box">
                            <div class="choose-item-inner">
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/BilingualOperators.png" alt="BilingualOperators" data-lazy-src="https://www.mapcommunications.com/wp-content/uploads/2022/10/BilingualOperators.png" data-ll-status="loaded" class="entered lazyloaded"><noscript>
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/BilingualOperators.png" alt="BilingualOperators" /></noscript>
                                <h3>Bilingual Operators</h3>
                                <p>If you’re hoping to connect with callers of all backgrounds, our bilingual operators can help bridge the communication gap.</p>
                            </div>
                        </div>
                        <div class="choose-item flex-box">
                            <div class="choose-item-inner">
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Lead-Qualifcations.png" alt="Lead Qualifcations" data-lazy-src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Lead-Qualifcations.png" data-ll-status="loaded" class="entered lazyloaded"><noscript>
                                <img src="https://www.mapcommunications.com/wp-content/uploads/2022/10/Lead-Qualifcations.png" alt="Lead Qualifcations" /></noscript>
                                <h3>Lead Qualification</h3>
                                <p>Cut through the noise with our lead qualification services. We’ll vet each lead and forward on the calls that meet your high standards.</p>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>`;
            document.querySelector('.homepageTest_iv .company-logos-block').insertAdjacentHTML('afterend', whyChooseUs);

            // No two businesses are alike section | Hide
            document.querySelectorAll('h2').forEach(function(title){
                if(title.innerText.includes('No two businesses are alike.')) {
                    title.closest('.two-column-section').style.display = 'none';
                }
            });

            // Industries We Serve
            const industriesSection = `<div class="industries-section">
                <div class="wrap">
                    <div class="industries-head">
                        <h2>Industries We Serve</h2>
                        <p>No matter your industry, our live answering service can integrate seamlessly into your organization. Before taking a single call, we become subject matter experts into your policies, procedures, and service offerings.</p>
                    </div>
                    <div class="industries-items flex-boxes">
                        <div class="industries-item flex-box">
                            <a href="https://www.mapcommunications.com/industries/property-management/real-estate-answering-service/">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397165/mapcommunications/cleaner_homepage_v2/1.png" alt="Avaliable" data-lazy-src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397165/mapcommunications/cleaner_homepage_v2/1.png" data-ll-status="loaded" class="entered lazyloaded">
                                <h3>Real Estate &amp; Property Management</h3>
                                <p>Unchain yourself from your desk and trust our receptionists to handle your calls while you’re busy showing off properties, taking clients to lunch, or closing deals.</p>
                            </a>
                        </div>
                        <div class="industries-item flex-box">
                            <a href="https://www.mapcommunications.com/industries/medical-profession/">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397166/mapcommunications/cleaner_homepage_v2/2.png" alt="Avaliable" data-lazy-src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397166/mapcommunications/cleaner_homepage_v2/2.png" data-ll-status="loaded" class="entered lazyloaded">
                                <h3>Healthcare &amp; Medical</h3>
                                <p>Entrust your patient calls with our team. Callers will enjoy prompt, professional support when they need it most, allowing your staff more time to serve patients in person.</p>
                            </a>
                        </div>
                        <div class="industries-item flex-box">
                            <a href="https://www.mapcommunications.com/industries/attorneys/">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397166/mapcommunications/cleaner_homepage_v2/3.png" alt="Avaliable" data-lazy-src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397166/mapcommunications/cleaner_homepage_v2/3.png" data-ll-status="loaded" class="entered lazyloaded">
                                <h3>Legal</h3>
                                <p>Allow MAP to take over client intake services. With your calls handled, you’ll experience fewer interruptions and have more time to dedicate to your clients.</p>
                            </a>
                        </div>
                        <div class="industries-item flex-box">
                            <a href="https://www.mapcommunications.com/industries/financial/">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397166/mapcommunications/cleaner_homepage_v2/4.png" alt="Avaliable" data-lazy-src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397166/mapcommunications/cleaner_homepage_v2/4.png" data-ll-status="loaded" class="entered lazyloaded">
                                <h3>Financial Services</h3>
                                <p>When a missed call means missed opportunities, you can’t afford to let inbound calls roll to voicemail. Allow our phone answering service to stem the tide.</p>
                            </a>
                        </div>
                        <div class="industries-item flex-box">
                            <a href="https://www.mapcommunications.com/industries/information-technology/">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397166/mapcommunications/cleaner_homepage_v2/5.png" alt="Avaliable" data-lazy-src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397166/mapcommunications/cleaner_homepage_v2/5.png" data-ll-status="loaded" class="entered lazyloaded">
                                <h3>IT, Technology &amp; Communications</h3>
                                <p>When callers need help, they want it on their own terms. We can provide Tier One tech support 24 hours a day.</p>
                            </a>
                        </div>
                        <div class="industries-item flex-box">
                            <a href="https://www.mapcommunications.com/industries/contractors/">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397165/mapcommunications/cleaner_homepage_v2/6.png" alt="Avaliable" data-lazy-src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397165/mapcommunications/cleaner_homepage_v2/6.png" data-ll-status="loaded" class="entered lazyloaded">
                                <h3>Home Services, HVAC, Plumbing</h3>
                                <p>Service providers and technicians are often summoned to work late at night, early in the day, and on holidays. Leave the dispatching to MAP.</p>
                            </a>
                        </div>
                        <div class="industries-item flex-box">
                            <a href="https://www.mapcommunications.com/industries/transportation/">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397165/mapcommunications/cleaner_homepage_v2/7.png" alt="Avaliable" data-lazy-src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397165/mapcommunications/cleaner_homepage_v2/7.png" data-ll-status="loaded" class="entered lazyloaded">
                                <h3>Tourism, Travel &amp; Hospitality</h3>
                                <p>You don’t get a second chance at a first impression. Trust our virtual receptionists to represent your business with warmth and hospitality.</p>
                            </a>
                        </div>
                        <div class="industries-item flex-box">
                            <a href="https://www.mapcommunications.com/industries/contractors/construction-answering-service/">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397165/mapcommunications/cleaner_homepage_v2/8.png" alt="Avaliable" data-lazy-src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397165/mapcommunications/cleaner_homepage_v2/8.png" data-ll-status="loaded" class="entered lazyloaded">
                                <h3>Building, Construction &amp; Trades</h3>
                                <p>Focus on the task at hand while minimizing interruptions. Our answering service can provide callers with a personal touch without disrupting your busy work day.</p>
                            </a>
                        </div>
                        <div class="industries-item flex-box">
                            <a href="https://www.mapcommunications.com/services/call-center-services/e-commerce-call-center-services/">
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397166/mapcommunications/cleaner_homepage_v2/9.png" alt="Avaliable" data-lazy-src="https://res.cloudinary.com/ignite-visibility/image/upload/v1719397166/mapcommunications/cleaner_homepage_v2/9.png" data-ll-status="loaded" class="entered lazyloaded">
                                <h3>Retail &amp; Ecommerce</h3>
                                <p>Give your shoppers your full attention while we man the phones. After all, your customers deserve the best, no matter what’s happening in-store.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;
            document.querySelector('.works-section').insertAdjacentHTML('afterend', industriesSection);

            // How Our Professional Answering Services Work | Hide
            document.querySelectorAll('h2').forEach(function(title){
                if(title.innerText.includes('How Our Professional Answering Services Work')) {
                    title.closest('.two-column-section').style.display = 'none';
                }
            });

            // 24/7 Access to your Account Analytics | Hide
            document.querySelectorAll('h2').forEach(function(title){
                if(title.innerText.includes('24/7 Access to your Account Analytics')) {
                    title.closest('.feature-bottom-wrap').style.display = 'none';
                }
            });

    }
}
loadTestCode();