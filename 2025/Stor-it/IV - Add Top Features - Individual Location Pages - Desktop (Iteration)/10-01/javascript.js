function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-top-features')) {
        document.querySelector('body').classList.add('iv-top-features');
    
        const locations = [
            {
                keyword: 'maple-grove',
                features: [
                    "24/7 Gated Access",
                    "Commercial Units and Offices to Rent",
                    "Drive Up Units",
                    "Packing and Moving Supply Store",
                    "Near Boise Towne Square, I-84, I-184",
                ]
            },
            {
                keyword: 'mitchell',
                features: [
                    "Drive Up Units",
                    "Angled, Paved Outdoor Parking",
                    "24/7 Gated Access",
                ]
            },
            {
                keyword: 'gowen',
                features: [
                    "Large, Commericial, Heated, Power Units",
                    "Large Insulated Doors, Great for RVs",
                    "Warehouse Space",
                    "24/7 Gated Access",
                    "Near I-84",
                ]
            },
            {
                keyword: 'caldwell',
                features: [
                    "Drive Up Units",
                    "Oversized Covered Parking",
                    "Indoor Units Available",
                    "24/7 Gated Access",
                    "Packing and Moving Supply Store",
                ]
            },
            {
                keyword: 'ten-mile',
                features: [
                    "Oversized, Angled Covered Parking",
                    "Heated Indoor Units",
                    "Drive Up Units",
                    "Paved, Angled Outdoor Parking",
                    "24/7 Gated Access",
                ]
            },
            {
                keyword: 'locust-grove',
                features: [
                    "Covered Parking",
                    "Drive Up Units",
                    "Paved Outdoor Parking",
                    "24/7 Gated Access",
                    "Near Eagle Road",
                ]
            },
            {
                keyword: 'state-street',
                features: [
                    "Drive Up Units",
                    "Covered Parking",
                    "Outdoor Parking",
                    "Serving Eagle and Northwest Boise",
                    "24/7 Gated Access",
                ]
            },
            {
                keyword: 'federal-way',
                features: [
                    "Drive Up Units",
                    "Close to Boise State University ",
                    "24/7 Gated Access",
                    "Moving and Packing Supply Store",
                    "Outdoor Parking",
                ]
            },
            {
                keyword: 'parkcenter',
                features: [
                    "Drive Up Units",
                    "Serving Southest Boise",
                    "Close to Boise State University ",
                    "Moving and Packing Supply Store",
                ]
            },
            {
                keyword: 'mccall',
                features: [
                    "3 Facilities Serving McCall",
                    "Drive Up Units and Indoor Units",
                    "Office Suites Available",
                    "Commercial Flex Space Available",
                    "24/7 Access",
                ]
            },
            {
                keyword: 'ten-mile-2',
                features: [
                    "Oversized, Angled Covered Parking",
                    "Drive Up Units",
                    "Indoor Units Available",
                    "24/7 Gated Access",
                    "On-Site Managers",
                ]
            },
            {
                keyword: 'cloverdale',
                features: [
                    "Oversized Covered Parking",
                    "On-Site Manager",
                    "24/7 Gated Access",
                    "Drive Up Units",
                    "Moving and Packing Supply Store",
                ]
            },
            {
                keyword: 'stor-it-chicago-st',
                features: [
                    "Drive Up Units",
                    "Uncovered Parking ",
                    "Right next to College of Idaho",
                    "Near Franklin/I-84 Exit",
                    "Packing and Moving Supply Store",
                ]
            },
            {
                keyword: 'hunt',
                features: [
                    "Drive Up Units",
                    "24/7 Gated Access",
                    "Right Across the Street from the Idaho Center",
                    "Near Garrity/I-84 Exit",
                    "Packing and Moving Supply Store",
                ]
            },
            {
                keyword: 'lake-lowel',
                features: [
                    "Oversized Covered Parking",
                    "Drive Up Units",
                    "Indoor Units Available",
                    "24/7 Accessible ",
                    "Moving and Packing Supply Store",
                ]
            },
            {
                keyword: 'allumbaugh',
                features: [
                    "Fully Climate Controlled and Conventional Drive Up Units Available",
                    "Freight Elevators for ease of loading into Climate Controlled Units",
                    "24/7 Accessible ",
                    "Near Boise Towne Square, I-84, I-184",
                    "Large Commerical Sized Units",
                ]
            },
            {
                keyword: 'lake-shore',
                features: [
                    "Oversized,  Covered Parking",
                    "Drive Up Units",
                    "24/7 Accessible ",
                    "Uncovered Parking ",
                    "Right off Highway 45",
                ]
            },
            {
                keyword: 'kings-road',
                features: [
                    "Oversized, Angled Covered Parking",
                    "Fully Climate Controlled and Conventional Drive Up Units Available",
                    "Right Next to Nampa Airport",
                    "Packing and Moving Supply Store",
                    "Indoor Units Available",
                ]
            },
            {
                keyword: 'donnelly',
                features: [
                    "Large units with Oversized Doors for RVs/Boats/Trailers",
                    "Indoor Heated Units Available for Cold Snowy Winters",
                    "Covered Parking",
                    "24/7 Accessible ",
                ]
            },
            {
                keyword: 'yamhill',
                features: [
                    "Oversized, Angled Covered Parking",
                    "Fully Climate Controlled and Conventional Drive Up Units Available",
                    "Office and Commercial Warehouse with Power",
                    "RV Wash and Dump Station",
                    "Near Highway 21 and I-84",
                ]
            },
        ];
        
        const pageUrl = (window.location.href.split('/')[7] || '').toLowerCase();

        const matchingLocation = locations.find(location => pageUrl.includes(location.keyword));
        
        if (matchingLocation) {
            const featuresList = matchingLocation.features.map(features => `<li>${features}</li>`)
            .join("");
        
            const container = document.querySelector("#tab1 .six.columns:last-child");
            
            if (container) {
                container.insertAdjacentHTML('beforeend', `
                    <span class="facility-title iv-top-features-title">Top Features:</span>
                    <ul class="iv-top-features">
                        ${featuresList}
                    </ul>`);
            }

            const checkFilters = setInterval(() => {
                const filters = document.querySelector('.filtersTheme1 > .locationFacilityInfo');
                if (filters) {
                    clearInterval(checkFilters);    
                    filters.insertAdjacentHTML('afterend', `
                        <div class="locationFacilityInfo">
                            <div class="filterHeader">Top Features:</div>
                            <ul class="iv-top-features">
                                ${featuresList}
                            </ul>
                        </div>`);
                }
              }, 100);
              
        }
    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);