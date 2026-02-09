// add Homepage Hero Banner Variant code first - Black hero code in Variant 1
// add Homepage Hero Banner Variant code first - white hero code in Variant 2

// and then add below code in both variant

function loadTestCode1() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('category_test')) {
        bodyEle.classList.add('category_test');

        // Put your test code here
        $('.homepage_test .hero_section').after(`
        <div class="category_section">
            <div class="container">
                <h2>Shop by Category</h2>
                <ul>
                    <li>
                        <a href="https://eshop.macsales.com/shop/ssd/owc">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667471248/macsales/Homepage_Category_Test/ssd_2x.png" alt="SSD">
                            <h3>SSD</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://eshop.macsales.com/shop/apple/memory/">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667898998/macsales/Homepage_Category_Test/owc-memory-generic-2.jpg" alt="Memory">
                            <h3>Memory</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://eshop.macsales.com/shop/docks">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667475024/macsales/Homepage_Category_Test/docks.png" alt="Docks">
                            <h3>Docks</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://eshop.macsales.com/shop/thunderbolt/thunderbolt-external-drives">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667473658/macsales/Homepage_Category_Test/Thunderbolt_2x.png" alt="Thunderbolt">
                            <h3>Thunderbolt Drives</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://eshop.macsales.com/shop/external-storage">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667471250/macsales/Homepage_Category_Test/batteries_2x.png" alt="External Storage Image">
                            <h3>External Storage</h3>
                        </a>
                    </li>
                    <li>
                        <a href="https://eshop.macsales.com/shop/Apple_Systems/Used/Macs_and_Tablets">
                            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667553378/macsales/Homepage_Category_Test/devices_2x.png" alt="Computer and devices">
                            <h3>New & Used</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </div>`);
    }
}
    
loadTestCode1();