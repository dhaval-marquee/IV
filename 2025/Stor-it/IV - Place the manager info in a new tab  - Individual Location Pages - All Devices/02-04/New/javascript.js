function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-manager-tab')) {
        document.querySelector('body').classList.add('iv-manager-tab');
     
        // FAQ Tab
        const managertabBtn = `<button class="tablinks" onclick="openTab(event, 'tab6')">Manager</button><br/>`;
        const tabsDiv = document.querySelector("#pinnacleMainContent .tabs");
        const managerTab = tabsDiv.querySelectorAll(".tablinks ")[3];

        if (managerTab) {   
            managerTab.insertAdjacentHTML('afterend', managertabBtn);
        }
        
        const tabContent = `<div id='tab6' class="tabcontent">
                                <div class="row">
                                    <div class="six columns iv-manager-tab-img"></div>
                                    <div class="six columns iv-manager-tab-content">
                                        <h2><strong>Stor-It Caldwell Managers</strong></h2>
                                        <span class="facility-title">Meet Josh:</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                        <span class="facility-title">Meet Christie:</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                    </div>
                                </div>
                            </div>`;
        document.querySelector('#pinnacleMainContent #tab5').insertAdjacentHTML('afterend', tabContent);

        const tabUserImage = document.querySelector('#tab1 .row > .six.columns').innerHTML;
        document.querySelector('#pinnacleMainContent .iv-manager-tab-img').insertAdjacentHTML('beforeend', tabUserImage);
        document.querySelector('.facility-hours-title').parentElement.classList.add('iv-address');
        document.querySelector('.pageLink').parentElement.classList.add('iv-phone');
        document.querySelector('.iv-address .iv-phone + p').classList.add('iv-office-hour');
        document.querySelector('.iv-address .iv-phone + p + p').classList.add('iv-gate-hours');

        let ivAddress = document.querySelector(".iv-address");
        if (ivAddress) {
            let newDiv = document.createElement("div");
            newDiv.className = "iv-new-container";
            while (ivAddress.firstChild) {
                newDiv.appendChild(ivAddress.firstChild);
            }
            ivAddress.appendChild(newDiv);
        }
        document.querySelector('.iv-new-container').insertAdjacentHTML('afterend', `
            <div class="iv-all-content-two"></div>
            <div class="iv-all-content-three"></div>`
        );

        // Move inside 
        let ivPhone = document.querySelector(".iv-phone");
        let ivOfficeHour = document.querySelector(".iv-office-hour");
        let ivGateHours = document.querySelector(".iv-gate-hours");
        let allContentOne = document.querySelector(".iv-new-container");
        let allContentTwo = document.querySelector(".iv-all-content-two");
        let allContentThree = document.querySelector(".iv-all-content-three");
        if (ivPhone && allContentOne) {
            allContentOne.appendChild(ivPhone);
        }
        if (ivOfficeHour && allContentTwo) {
            allContentTwo.appendChild(ivOfficeHour);
        }
        if (ivGateHours && allContentThree) {
            allContentThree.appendChild(ivGateHours);
        }
        let ivAddressTitle = document.querySelector(".iv-address");
        let facilityHoursTitle = document.querySelector(".facility-hours-title");
        if (ivAddressTitle && facilityHoursTitle) {
            ivAddressTitle.prepend(facilityHoursTitle);
        }
        let firstParagraph = document.querySelector(".iv-new-container p:first-child");
        if (ivAddressTitle && facilityHoursTitle) {
            ivAddressTitle.prepend(facilityHoursTitle);
        }
        if (facilityHoursTitle && firstParagraph) {
            facilityHoursTitle.after(firstParagraph);
        }
        let facilityInfoRating = document.querySelector(".facility_info_rating");
        if (firstParagraph && facilityInfoRating) {
            firstParagraph.after(facilityInfoRating);
        }

        // Select the elements to wrap
        let ivNewContainer = document.querySelector(".iv-new-container");
        let ivAllContentTwo = document.querySelector(".iv-all-content-two");
        let ivAllContentThree = document.querySelector(".iv-all-content-three");
        if (ivNewContainer && ivAllContentTwo && ivAllContentThree) {
            let wrapperDiv = document.createElement("div");
            wrapperDiv.className = "iv-wrapper";
            let parent = ivNewContainer.parentNode;
            parent.insertBefore(wrapperDiv, ivNewContainer);
            wrapperDiv.appendChild(ivNewContainer);
            wrapperDiv.appendChild(ivAllContentTwo);
            wrapperDiv.appendChild(ivAllContentThree);
        }
    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 300);