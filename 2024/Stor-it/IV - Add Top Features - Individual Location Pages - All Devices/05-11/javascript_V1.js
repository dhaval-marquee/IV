function loadTestCode() {
    if (!jQuery('body').hasClass('location_iv')) {
        jQuery('body').addClass('location_iv');
        
        // Put your test code here
        var i = 0;
        var getNumberInterval = setInterval(function() {
            var locationFacilityInfo = document.querySelector('.filterWrapInner .locationFacilityInfo');
            
            if (locationFacilityInfo) {
                locationFacilityInfo.insertAdjacentHTML('afterend', `<div class="filterHeader features_title">Top Features:</div>`);
                const jsonData = {
                    product1: {
                        URL: '/location/USA/ID/Boise/stor-it-maple-grove/',
                        pname: ['24/7 Gated Access', 'Commercial Units and Offices to Rent', 'Drive Up Units','Packing and Moving Supply Store','Near Boise Towne Square, I-84, I-184'],
                    },
                    product2: {
                        URL: '/location/USA/ID/Boise/stor-it-mitchell/',
                        pname: ['Drive Up Units', 'Angled, Paved Outdoor Parking', '24/7 Gated Access'],
                    },
                    product3: {
                        URL: '/location/USA/ID/Boise/stor-it-gowen/',
                        pname: ['Large, Commericial, Heated, Power Units', 'Large Insulated Doors, Great for RVs', 'Warehouse Space','24/7 Gated Access','Near I-84'],
                    },
                    product4: {
                        URL: '/location/USA/ID/Caldwell/stor-it-caldwell/',
                        pname: ['Drive Up Units', 'Oversized Covered Parking', 'Indoor Units Available','24/7 Gated Access','Packing and Moving Supply Store'],
                    },
                    product5: {
                        URL: '/location/USA/ID/Meridian/stor-it-ten-mile/',
                        pname: ['Oversized, Angled Covered Parking', 'Heated Indoor Units', 'Drive Up Units','Paved, Angled Outdoor Parking','24/7 Gated Access'],
                    },
                    product6: {
                        URL: '/location/USA/ID/Meridian/stor-it-locust-grove/',
                        pname: ['Covered Parking', 'Drive Up Units', 'Paved Outdoor Parking','24/7 Gated Access','Near Eagle Road'],
                    },
                    product7: {
                        URL: '/location/USA/ID/Boise/stor-it-state-street/',
                        pname: ['Drive Up Units', 'Covered Parking', 'Outdoor Parking','Serving Eagle and Northwest Boise','24/7 Gated Access'],
                    },
                    product8: {
                        URL: '/location/USA/ID/Boise/stor-it-federal-way/',
                        pname: ['Drive Up Units', 'Close to Boise State University', '24/7 Gated Access','Moving and Packing Supply Store','Outdoor Parking'],
                    },
                    product9: {
                        URL: '/location/USA/ID/Boise/stor-it-parkcenter/',
                        pname: ['Drive Up Units', 'Serving Southest Boise', 'Close to Boise State University ','Moving and Packing Supply Store'],
                    },
                    product10: {
                        URL: '/location/USA/ID/McCall/stor-it-mccall/',
                        pname: ['3 Facilities Serving McCall', 'Drive Up Units and Indoor Units', 'Office Suites Available','Commercial Flex Space Available','24/7 Access'],
                    },
                    product11: {
                        URL: '/location/USA/ID/Meridian/stor-it-ten-mile-2/',
                        pname: ['Oversized, Angled Covered Parking', 'Drive Up Units', 'Indoor Units Available','24/7 Access','On-Site Managers'],
                    },
                    product12: {
                        URL: '/location/USA/ID/Boise/stor-it-cloverdale/',
                        pname: ['Oversized Covered Parking', 'On-Site Manager', '24/7 Gated Access','Drive Up Units','Moving and Packing Supply Store'],
                    },
                    product13: {
                        URL: '/location/USA/ID/Caldwell/stor-it-chicago-st/',
                        pname: ['Drive Up Units', 'Uncovered Parking', 'Right next to College of Idaho','Near Franklin/I-84 Exit','Packing and Moving Supply Store'],
                    },
                    product14: {
                        URL: '/location/USA/ID/Nampa/stor-it-hunt/',
                        pname: ['Drive Up Units', '24/7 Gated Access', 'Right Across the Street from the Idaho Center','Near Garrity/I-84 Exit','Packing and Moving Supply Store'],
                    },
                    product15: {
                        URL: '/location/USA/ID/Nampa/stor-it-lake-lowell/',
                        pname: ['Oversized Covered Parking', 'Drive Up Units', 'Indoor Units Available','24/7 Accessible','Moving and Packing Supply Store'],
                    },
                    product16: {
                        URL: '/location/USA/ID/Boise/stor-it-allumbaugh/',
                        pname: ['Fully Climate Controlled and Conventional Drive Up Units Available', 'Freight Elevators for ease of loading into Climate Controlled Units', '24/7 Accessible ','Near Boise Towne Square, I-84, I-184','Large Commerical Sized Units'],
                    },
                    product17: {
                        URL: '/location/USA/ID/Nampa/stor-it-lake-shore/',
                        pname: ['Oversized,  Covered Parking', 'Drive Up Units', '24/7 Accessible ','Uncovered Parking ','Right off Highway 45'],
                    },
                    product18: {
                        URL: '/location/USA/ID/Nampa/stor-it-kings-road/',
                        pname: ['Oversized, Angled Covered Parking', 'Fully Climate Controlled and Conventional Drive Up Units Available', 'Right Next to Nampa Airport','Packing and Moving Supply Store','Indoor Units Available'],
                    },
                    product19: {
                        URL: '/location/USA/ID/Donnelly/stor-it-donnelly/',
                        pname: ['Large units with Oversized Doors for RVs/Boats/Trailers', 'Indoor Heated Units Available for Cold Snowy Winters', 'Covered Parking','24/7 Accessible'],
                    },
                    product20: {
                        URL: '/location/USA/ID/Boise/stor-it-yamhill/',
                        pname: ['Oversized, Angled Covered Parking', 'Fully Climate Controlled and Conventional Drive Up Units Available', 'Office and Commercial Warehouse with Power','RV Wash and Dump Station','Near Highway 21 and I-84'],
                    }
                };
                
                const currentPath = window.location.pathname;
                const filterContainerWrap = document.querySelector('.features_title');
                if (filterContainerWrap) {
                    for (const product in jsonData) {
                        if (jsonData.hasOwnProperty(product)) {
                            if (jsonData[product].URL === currentPath) {
                                const ul = document.createElement('ul');
                                ul.classList.add('features_item');
                                jsonData[product].pname.forEach(name => {
                                    const li = document.createElement('li');
                                    li.textContent = name;
                                    ul.appendChild(li);
                                });
                                filterContainerWrap.insertAdjacentElement('afterend', ul);
                            }
                        }
                    }
                }
                clearInterval(getNumberInterval); // Stop the interval once the element is found and added
            }
            if (i === 5) { // Stop the interval after 5 attempts if not found
                clearInterval(getNumberInterval);
            }
            i++;
        }, 1000);
    }
}

var checkCondition = setInterval(function() {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);