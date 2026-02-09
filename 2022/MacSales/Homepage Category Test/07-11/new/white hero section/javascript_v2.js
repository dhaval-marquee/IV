function loadTestCode1() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('category_test')) {
        bodyEle.classList.add('category_test');

        // Put your test code here
        $('.homepage_test .hero_section').after(`<div class="category_section">
        <div class="container">
            <h2>Shop by Category</h2>
            <ul>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667471248/macsales/Homepage_Category_Test/ssd_2x.png"
                        alt="SSD">
                    <h3>SSD</h3>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667475024/macsales/Homepage_Category_Test/docks.png"
                        alt="Docks">
                    <h3>Memory</h3>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667475024/macsales/Homepage_Category_Test/docks.png"
                        alt="Docks">
                    <h3>Docks</h3>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667473658/macsales/Homepage_Category_Test/Thunderbolt_2x.png"
                        alt="Thunderbolt">
                    <h3>Thunderbolt Drives</h3>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667471250/macsales/Homepage_Category_Test/batteries_2x.png"
                        alt="Batteries">
                    <h3>External Storage</h3>
                </li>
                <li>
                    <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667475024/macsales/Homepage_Category_Test/docks.png"
                        alt="Docks">
                    <h3>New & Used</h3>
                </li>
            </ul>
        </div>
    </div>`);
        }
    }
    
    loadTestCode1();