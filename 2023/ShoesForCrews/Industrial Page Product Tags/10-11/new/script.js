const products = [
    { id: "2015", feature1: "Lightweight PU", feature2: "Waterproof" },
    { id: "22126", feature1: "Dynamic stretch fit", feature2: "Dual-density midsole" },
    { id: "60002", feature1: "Oil & gas resistant outsole", feature2: "GLADIATOR™ outsole" },
    { id: "60435", feature1: "Premium pu/gel insole", feature2: "GLADIATOR™ outsole" },
    { id: "60654", feature1: "Women's", feature2: "GLADIATOR™ outsole" },
    { id: "60970", feature1: "EVA Upper", feature2: "10\" Shaft"},
    { id: "61182", feature1: "Waterproof", feature2: "Rugged TPU shell" },
    { id: "62107", feature1: "Waterproof", feature2: "600g Thinsulate™ insulation" },
    { id: "62108", feature1: "Durable PVC", feature2: "16\" Shaft" },
    { id: "62116", feature1: "Waterproof", feature2: "Rugged TPU shell" },
    { id: "62212", feature1: "EVA Upper", feature2: "10\" Shaft" },
    { id: "62551", feature1: "EVA Upper", feature2: "Adjustable gaiter" },
    { id: "63206", feature1: "Non-metallic", feature2: "Lightweight" },
    { id: "63521", feature1: "PVC/Nitrile", feature2: "16\" Shaft:" },
    { id: "63723", feature1: "Oil & gas resistant outsole", feature2: "Waterproof" },
    { id: "64024", feature1: "Non-metallic", feature2: "Lightweight" },
    { id: "64133", feature1: "EVA Upper", feature2: "10\" Shaft" },
    { id: "64811", feature1: "Leather", feature2: "GLADIATOR™ outsole" },
    { id: "67301", feature1: "Oil & gas resistant outsole", feature2: "GLADIATOR™ outsole" },
    { id: "67718", feature1: "Steel Shank", feature2: "GLADIATOR™ outsole" },
    { id: "67730", feature1: "Women's", feature2: "GLADIATOR™ outsole" },
    { id: "68357", feature1: "Easy on/off", feature2: "Non-metallic" },
    { id: "69202", feature1: "Oil & gas resistant outsole", feature2: "GLADIATOR™ outsole" },
    { id: "69238", feature1: "Leather/mesh", feature2: "GLADIATOR™ outsole" },
    { id: "69496", feature1: "Nubuck leather", feature2: "GLADIATOR™ outsole" },
    { id: "70482", feature1: "ESD", feature2: "Puncture Resistant" },
    { id: "70927", feature1: "Leather/mesh", feature2: "GLADIATOR™ outsole" },
    { id: "71056", feature1: "ESD", feature2: "Puncture Resistant" },
    { id: "71063", feature1: "Oil & gas resistant outsole", feature2: "GLADIATOR™ outsole" },
    { id: "71183", feature1: "Waterproof", feature2: "Non-metallic" },
    { id: "71210", feature1: "Oil & gas resistant outsole", feature2: "Puncture Resistant" },
    { id: "71614", feature1: "Water- resistant", feature2: "PU/gel insole" },
    { id: "71845", feature1: "EVA Upper", feature2: "Adjustable gaiter" },
    { id: "72002", feature1: "Waterproof", feature2: "GLADIATOR™ outsole" },
    { id: "72104", feature1: "Waterproof", feature2: "GLADIATOR™ outsole" },
    { id: "72105", feature1: "Waterproof", feature2: "Insulated" },
    { id: "72116", feature1: "Waterproof", feature2: "Rugged TPU shell" },
    { id: "72117", feature1: "Waterproof", feature2: "Rugged TPU shell" },
    { id: "72126", feature1: "PVC Upper", feature2: "16\" Shaft" },
    { id: "72127", feature1: "PVC Upper", feature2: "16\" Shaft" },
    { id: "72132", feature1: "Full grain leather", feature2: "Non-metallic" },
    { id: "72135", feature1: "PVC Upper", feature2: "16\" Shaft" },
    { id: "72200", feature1: "GLADIATOR™ outsole", feature2: "REVIVE™ foam cushioning" },
    { id: "72203", feature1: "Waterproof", feature2: "Welt construction" },
    { id: "72205", feature1: "Water- resistant", feature2: "Lightweight" },
    { id: "72206", feature1: "REVIVE™ foam cushioning", feature2: "Lightweight" },
    { id: "72209", feature1: "Water- resistant", feature2: "Lightweight" },
    { id: "72212", feature1: "Full grain leather", feature2: "Non-metallic" },
    { id: "72213", feature1: "Full grain leather", feature2: "Non-metallic" },
    { id: "72214", feature1: "Water-resistant", feature2: "Non-metallic" },
    { id: "72215", feature1: "Water-resistant", feature2: "Non-metallic" },
    { id: "72217", feature1: "Water-resistant", feature2: "Non-metallic" },
    { id: "72220", feature1: "Waterproof", feature2: "GLADIATOR™ outsole" },
    { id: "72221", feature1: "400g Thinsulate™ insulation", feature2: "GLADIATOR™ outsole" },
    { id: "72224", feature1: "REVIVE™ foam cushioning", feature2: "Non-metallic" },
    { id: "72227", feature1: "Women's", feature2: "REVIVE™ foam cushioning" },
    { id: "72229", feature1: "Full grain leather", feature2: "GLADIATOR™ outsole" },
    { id: "72231", feature1: "Full grain leather", feature2: "GLADIATOR™ outsole" },
    { id: "72233", feature1: "Women's", feature2: "REVIVE™ foam cushioning" },
    { id: "72235", feature1: "REVIVE™ foam cushioning", feature2: "GLADIATOR™ outsole" },
    { id: "72236", feature1: "REVIVE™ foam cushioning", feature2: "GLADIATOR™ outsole" },
    { id: "72239", feature1: "REVIVE™ foam cushioning", feature2: "Comfort rich" },
    { id: "72240", feature1: "REVIVE™ foam cushioning", feature2: "Comfort rich" },
    { id: "72241", feature1: "Water- resistant", feature2: "Lightweight" },
    { id: "72242", feature1: "Water- resistant", feature2: "Lightweight" },
    { id: "72243", feature1: "Water- resistant", feature2: "Lightweight" },
    { id: "72245", feature1: "Water- resistant", feature2: "Lightweight" },
    { id: "72248", feature1: "Waterproof", feature2: "Full-grain leather" },
    { id: "72260", feature1: "REVIVE™ foam cushioning", feature2: "GLADIATOR™ outsole" },
    { id: "72287", feature1: "REVIVE™ foam cushioning", feature2: "Puncture Resistant" },
    { id: "72300", feature1: "3/4-length air cushioning", feature2: "Non-metallic" },
    { id: "72307", feature1: "Neoprene/rubber", feature2: "GLADIATOR™ outsole" },
    { id: "72308", feature1: "Full grain leather", feature2: "GLADIATOR™ outsole" },
    { id: "72309", feature1: "Full grain leather", feature2: "Neoprene/rubber" },
    { id: "72312", feature1: "Full grain leather", feature2: "Puncture Resistant" },
    { id: "72313", feature1: "Full grain leather", feature2: "Puncture Resistant" },
    { id: "72314", feature1: "Waterproof", feature2: "Puncture Resistant" },
    { id: "72315", feature1: "Waterproof", feature2: "Puncture Resistant" },
    { id: "72316", feature1: "Waterproof", feature2: "Puncture Resistant" },
    { id: "72317", feature1: "Non-metallic", feature2: "Puncture Resistant" },
    { id: "72321", feature1: "REVIVE™ foam cushioning", feature2: "Puncture Resistant" },
    { id: "72322", feature1: "REVIVE™ foam cushioning", feature2: "Puncture Resistant" },
    { id: "72323", feature1: "GLADIATOR™ outsole", feature2: "REVIVE™ foam cushioningt" },
    { id: "72324", feature1: "Puncture Resistant", feature2: "GLADIATOR™ outsole" },
    { id: "72333", feature1: "800g insulation", feature2: "Waterproof" },
    { id: "72334", feature1: "Water- resistant", feature2: "REVIVE™ foam cushioning" },
    { id: "72348", feature1: "Air cushioning", feature2: "REVIVE™ foam cushioning" },
    { id: "72349", feature1: "Air cushioning", feature2: "REVIVE™ foam cushioning" },
    { id: "72355", feature1: "3/4 length air cushioning", feature2: "Non-metallic" },
    { id: "72387", feature1: "Wedge sole", feature2: "Full-grain leather" },
    { id: "72388", feature1: "8000g insulation", feature2: "Puncture Resistant" },
    { id: "72390", feature1: "WP side-zip", feature2: "Waterproof" },
    { id: "72391", feature1: "Waterproof", feature2: "Side-zip" },
    { id: "72397", feature1: "Women's", feature2: "REVIVE™ foam cushioning" },
    { id: "72409", feature1: "ESD", feature2: "REVIVE™ foam cushioning" },
    { id: "72410", feature1: "ESD", feature2: "REVIVE™ foam cushioning" },
    { id: "72455", feature1: "Oil & gas resistant outsole", feature2: "GLADIATOR™ outsole" },
    { id: "72469", feature1: "insulated", feature2: "Full-grain leather" },
    { id: "72515", feature1: "Waterproof", feature2: "Insulated" },
    { id: "72649", feature1: "Waterproof", feature2: "Insulated" },
    { id: "73361", feature1: "Easy on/off", feature2: "Non-metallic" },
    { id: "73710", feature1: "Leather/mesh", feature2: "Puncture Resistant" },
    { id: "73809", feature1: "PVC/Nitrile", feature2: "16\" Shaft" },
    { id: "74063", feature1: "Water-resistant", feature2: "GLADIATOR™ outsole" },
    { id: "75075", feature1: "Water-resistant", feature2: "Lightweight" },
    { id: "75738", feature1: "EVA Upper", feature2: "10\" Shaft" },
    { id: "76236", feature1: "ESD", feature2: "Puncture Resistant" },
    { id: "76362", feature1: "Water-resistant", feature2: "GLADIATOR™ outsole" },
    { id: "76525", feature1: "Reinforced toe", feature2: "GLADIATOR™ outsole" },
    { id: "76528", feature1: "Water-resistant", feature2: "Easy clean outsole" },
    { id: "76745", feature1: "Welt construction", feature2: "PU/gel insole" },
    { id: "76747", feature1: "Water-resistant", feature2: "GLADIATOR™ outsole" },
    { id: "76797", feature1: "Leather upper", feature2: "Easy clean outsole" },
    { id: "77001", feature1: "Oil & gas resistant outsole", feature2: "GLADIATOR™ outsole" },
    { id: "77280", feature1: "Premium pu/gel insole", feature2: "GLADIATOR™ outsole" },
    { id: "77282", feature1: "Waterproof", feature2: "GLADIATOR™ outsole" },
    { id: "77319", feature1: "Women's", feature2: "GLADIATOR™ outsole" },
    { id: "77365", feature1: "Lightweight", feature2: "GLADIATOR™ outsole" },
    { id: "77366", feature1: "Met Guard", feature2: "GLADIATOR™ outsole" },
    { id: "77610", feature1: "Waterproof", feature2: "GLADIATOR™ outsole" },
    { id: "77632", feature1: "Tumbled leather", feature2: "Easy clean outsole" },
    { id: "77633", feature1: "Tumbled leather", feature2: "Easy clean outsole" },
    { id: "78079", feature1: "Leather", feature2: "Non-metallic" },
    { id: "78329", feature1: "Non-metallic", feature2: "Lightweight" },
    { id: "78506", feature1: "Waterproof", feature2: "Rugged TPU shell" },
    { id: "78606", feature1: "Leather", feature2: "Easy clean outsole" },
    { id: "78890", feature1: "Oil & gas resistant outsole", feature2: "Waterproof" },
    { id: "79333", feature1: "Steel Shank", feature2: "GLADIATOR™ outsole" }
];
function productListID() {
    const anchorTagsfocus = document.querySelectorAll('.infinite-scroll-component div[class*="ProductList_grid_"] div[class*="ProductThumbnailContainer_productThumbnailContainer_"] a[href*="/product/"]');
    console.log(anchorTagsfocus, 'data')
    anchorTagsfocus.forEach((anchorTag) => {
        const href = anchorTag.getAttribute('href');
        const productIdMatch = href.match(/\/product\/(\d+)/);
        if (productIdMatch) {
            const productId = productIdMatch[1];
                const productData = products.find(product => product.id === productId);
                if (productData) {
                    const productTitle = anchorTag.querySelector('div[class*="ProductThumbnail_thumbnailTitle__"]');
                    if(!productTitle.querySelector('.feature-wrap')){
                        let featureWrap = document.createElement('div');
                        featureWrap.classList.add('feature-wrap');
    
                        const featureSpan1 = document.createElement('span');
                        featureSpan1.textContent = productData.feature1;
                        featureWrap.appendChild(featureSpan1);
    
                        const featureSpan2 = document.createElement('span');
                        featureSpan2.textContent = productData.feature2;
                        featureWrap.appendChild(featureSpan2);
    
                        productTitle.appendChild(featureWrap);
                    }
                }
        }
    });
}
function setupMutationObserver() {
    const targetNode = document.querySelector('.infinite-scroll-component__outerdiv > .infinite-scroll-component');
    if (targetNode) {
        productListID();
        const config = {
            childList: true,
            subtree: true
        };
        const callback = function (mutationsList, observer) {
            productListID();
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
    } else {
        console.error("Target node not found.");
    }
}
window.onload = function () {
    setupMutationObserver();
}
