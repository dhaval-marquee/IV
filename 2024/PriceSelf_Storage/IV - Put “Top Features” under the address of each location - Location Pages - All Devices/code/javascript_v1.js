function loadTestCode() {
    if (!document.querySelector('body').classList.contains('featureIV')) {
        document.querySelector('body').classList.add('featureIV');
        
        const featureHTML = `<div class="featureWrapper">
        <p class="featureTitle"><strong>Location Features</strong></p>
        <ul class="featureList"></ul>
    </div>`;
    
    // Insert the featureHTML before and after the specified elements
    document.querySelector('.pss-facility__content-work-hours').insertAdjacentHTML('beforebegin', featureHTML);
    document.querySelector('.pss-facility__content-info').insertAdjacentHTML('beforeend', featureHTML);
    
    const featureData = {
        "/san-diego-self-storage-morena/": ["Drive In Facility", "Drive Up Units", "On-site Manager", "Month-to-month leases" , "Digital Recorded Cameras"],
        "/san-diego-self-storage-murphy-canyon/": ["Extra Wide Driveways & Aisles", "Drive Up Units", "Keypad-controlled access", "Month-to-month leases", "On-site Manager"],
        "/pacific-beach-self-storage/": ["Drive Up Units", "Large Elevators & Courtsey Carts", "Keypad-controlled access", "Month-to-month leases", "On-site Manager"],
        "/santee-self-storage/": ["Drive Up Units", "Large Elevators & Courtsey Carts", "On-site Manager", "Month-to-month leases", "Keypad-controlled access"],
        "/solana-beach-self-storage/": ["Drive Up Units", "Indoor RV/Boat Storage", "On-site Manager", "Month-to-month leases", "Keypad-controlled access"],
        "/west-los-angeles-self-storage/": ["Drive In Facility", "Drive Up Units", "Digital Recorded Cameras", "Month-to-month leases", "Vehicle Storage"],
        "/los-angeles-self-storage-national-blvd/": ["Large Elevators & Courtsey Carts", "Drive Up Units", "Keypad-controlled access", "Month-to-month leases", "On-site Manager"],
        "/rancho-cucamonga-self-storage-arrow/": ["Climate Controlled", "Drive Up Units", "On-site Manager", "Month-to-month leases", "Keypad-controlled access"],
        "/rancho-cucamonga-self-storage-haven/": ["Climate Controlled", "Drive Up Units", "On-site Manager", "Month-to-month leases", "Keypad-controlled access"],
        "/norco-self-storage/": ["All Units Are Drive Up Accessible", "Digital Recorded Cameras", "On-site Manager", "Month-to-month leases", "Keypad-controlled access"],
        "/azusa-self-storage/": ["Drive Up Units", "All Ground Floor Units", "Keypad-controlled access", "Month-to-month leases" , "On-site Manager"],
        "/san-juan-capistrano-self-storage/": ["Drive Up Units", "All Ground Floor Units", "Keypad-controlled access", "Month-to-month leases", "On-site Manager"],
        "/walnut-creek-self-storage/": ["Drive Up Units", "Large Elevators & Courtsey Carts", "On-site Manager", "Month-to-month leases", "Wine Storage"]
    };
    
    // Get the current URL path
    const currentPath = window.location.pathname;
    
    // Use the corresponding feature list or a default list
    const featureList = featureData[currentPath] || ["Drive In Facility", "Drive Up Units", "On-site Manager", "Month-to-month leases" , "Digital Recorded Cameras"];
    
    // Select all featureList elements (there will be two of them)
    const ulElements = document.querySelectorAll(".featureList");
    
    // Clear and populate each .featureList individually
    ulElements.forEach(ulElement => {
        ulElement.innerHTML = ''; // Clear the existing list
    
        // Populate the list with the correct feature list
        featureList.forEach(feature => {
            const li = document.createElement("li");
            li.textContent = feature;
            ulElement.appendChild(li);
        });
    });
    }
}

var checkCondition = setInterval(function() {
    if (document.body) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);