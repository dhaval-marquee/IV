function loadTestCode() {
    // Body class
    const tagClass = 'hero-newfeature';
   
    // Header Featuer
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains(tagClass)) {
        bodyEle.classList.add(tagClass);
        document.querySelector('img[src*="/HomeHero3b.jpg"]').closest('div').classList.add('hero-control');

         // Hero code
        const heroSection = `<div class="wp-block-cover alignfull hero-feature">
            <div class="container">
                <div class="hero-feature-inner">
                    <div class="hero-feature-left">
                        <div class="hero-feature-headding">
                            <h1><b>NEW!</b> SUN Collision Repair Packages</h1>
                            <span>Automate the blueprint process to support insurance claims and estimates</span>
                        </div>
                        <ul class="hero-feature-list">
                            <li>Significantly reduces the time to research and blueprint your repairs</li>
                            <li>Includes OEM procedures + repair information in one package</li>
                            <li>Helps increase accuracy of your estimates and limits liability</li>
                            <li>Provides documented support for insurance claims</li>
                            <li>Improves efficiency, productivity and profitability</li>
                        </ul>
                        <div class="hero-feature-cta">
                            <a class="yellow-btn" href="/demo-request/"><span>Request a Free Demo</span></a>
                            <a  class="whitew-btn" href="/features/"><span>Learn More</span></a>
                        </div>
                    </div>
                    <div class="hero-feature-right">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/Suncollision/Dashboard-img.png" alt="Hero feature image" />
                    </div>
                </div>
            </div>
        </div>`
        if(!document.querySelector('.hero-feature')){
            document.querySelector('.hero-control').insertAdjacentHTML('afterend', heroSection);
        }

        // Header Text (NEW!)
        const headerFeatuerMenu = '<div class="new_featuer_menu">New!</div>'
        document.querySelector('#menu-header-menu li#menu-item-224 > a').insertAdjacentHTML('afterbegin', headerFeatuerMenu);
    }
}
loadTestCode();