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


    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);