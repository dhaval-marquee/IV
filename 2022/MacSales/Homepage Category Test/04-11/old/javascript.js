 function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('category_test')) {
        bodyEle.classList.add('category_test');

        // Put your test code here
        $('h1.heading-visually-hidden').after(`<div class="hero_section hero-unit_dark memory-hero-unit_dark">
            <picture>
                <source srcset="
                https://media.owcnow.com/image/upload/h_184,c_fill,f_auto,q_auto/used-macs-header-mobile 1x,
                https://media.owcnow.com/image/upload/h_184,c_fill,f_auto,q_auto,dpr_2.0/used-macs-header-mobile 2x,
                https://media.owcnow.com/image/upload/h_184,c_fill,f_auto,q_auto,dpr_2.0/used-macs-header-mobile 3x,
                " media="(max-width: 767px)">
                <img class="hero-unit__img cld-responsive" data-src="https://media.owcnow.com/image/upload/f_auto,q_auto,dpr_auto/used-macs" alt="OWC Memory"
                    src="https://media.owcnow.com/image/upload/f_auto,q_auto,dpr_1.0/used-macs">
            </picture>
        <div class="hero-unit__content">
            <h1 class="hero-unit__title">The Most Trusted Name in Apple Storage and Memory Since 1998</h1>
           <div></div>
        </div>
    </div>  
        <div class="category_section">
        <div class="container">
            <h2>Shop by Category</h2>
            <ul>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667471248/macsales/Homepage_Category_Test/ssd_2x.png" alt="SSD">
                    <h3>SSD</h3>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667475024/macsales/Homepage_Category_Test/docks.png" alt="Docks ">
                        <h3>Memory</h3>
                    </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667475024/macsales/Homepage_Category_Test/docks.png" alt="Docks">
                    <h3>Docks</h3>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667473658/macsales/Homepage_Category_Test/Thunderbolt_2x.png" alt="">
                    <h3>Thunderbolt Drives</h3>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667471250/macsales/Homepage_Category_Test/batteries_2x.png" alt="Batteries">
                    <h3>External Storage</h3>
                </li>
                <li>
                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667475024/macsales/Homepage_Category_Test/docks.png" alt="Docks">
                    <h3>New & Used</h3>
                </li>
            </ul>
        </div>
        </div>`);
        }
    }
    
    loadTestCode();