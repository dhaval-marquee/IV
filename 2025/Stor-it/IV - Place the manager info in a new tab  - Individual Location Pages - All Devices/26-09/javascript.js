function loadTestCode() {
        if (!document.querySelector('body').classList.contains('iv-manager-tab')) {
            document.querySelector('body').classList.add('iv-manager-tab');

            const ivManagerList = [
                {
                    name: 'Conrad',
                    info: 'Conrad enjoys going to work every day at Stor-It to help people get the storage they need to protect their belongings. He loves spending time with friends and family, going to sporting events, and anything outdoors. Conrad always has a smile on his face, and his customer service skills are truly and asset for Stor-It Self Storage.',
                },
                {
                    name: 'Dalton',
                    info: 'Dalton appreciates the family-like feeling at Stor-It, where everyone works as a team. He advises customers to go up a size or stop by to look at different sizes available. Being close to Boise State University, our Federal Way Location is extremely busy each spring; Dalton helps students and parents find the perfect sized storage unit for their dorm room or apartment furnishings to alleviate the stress of leaving for summer break. When he is not busy renting storage units, Dalton enjoys camping, hiking, skiing, and golfing.',
                },
                {
                    name: 'Brandon',
                    info: 'Brandon appreciates the mix of in-office and outside work at Stor-It, where every day is different. He feels valued as an employee, where he is a name, not just a number. He strives to treat his customers in the same way and has been a valued member of our team since 2019. He advises customers to rent one size up for extra room and to download the gate app for ease of access. Brandon enjoys spending time with family and friends, reading, writing, loving on his dogs, eating good food, and watching football.',
                },
                {
                    name: 'Liz & David',
                    info: 'Liz enjoys working in a family and collaborative environment at Stor-It. She enjoys working with her husband. She advises customers to rent when what they need is available and to go up a size for extra room.  She has been a valuable team member for Stor-It for over 5 years. Outside of work, Liz loves spending time with family and friends, enjoying the outdoors, camping, hunting, and fishing.',
                },
                {
                    name: 'Robby',
                    info: 'Robby enjoys meeting people from out of state and helping them make their move less stressful. Having started as a relief manager in 2008, working all our locations, to managing our State Street Site, Robby is the storage expert you can count on! He advises customers to label boxes for easy access. Outside of work, he likes playing cornhole, going to concerts, and attending sporting events.',
                },
                {
                    name: 'Greg',
                    info: 'Greg feels like part of a team at Stor-It, with executives and managers who always have his back. He advises customers to get a larger unit to save time and be able to access items as needed down the road. Greg enjoys spinning and outdoor cycling when he is not assisting customers or keeping an immaculate storage site!',
                },
                {
                    name: 'Danielle & Joseph',
                    info: 'Danielle and Joseph appreciate the family atmosphere at Stor-It, where they are not just another number. We love that we get to raise our family on-site and spend that extra time with them most parents miss being away all day. They advise customers to go bigger if unsure, future you will thank you when you are needing get something specific from your unit! They enjoy fishing and waterfowl hunting.',
                },
                {
                    name: 'Ken',
                    info: 'Ken Ken appreciates the family-run nature of Stor-It, where he does not feel like just a number. He advises customers to cover their furniture, store expensive items in the back, use rubber bins, and label boxes. Ken enjoys spending time with family, golfing, gaming, and playing cards. Ken has been hopping around our Caldwell pad for over a decade!',
                },
                {
                    name: 'Josh & Christie',
                    info: 'Christie and Josh appreciate the work-life balance and family atmosphere at Stor-It and have been with us since 2017. You may see Josh at one of our many locations as he fills in where needed! They advise customers to take a picture of their access code and use it as the contact photo for the office number. They enjoy spending time with family and friends, playing games, eating tasty food, and enjoying each other\'s company.',
                },
                {
                    name: 'Kris',
                    info: 'Kris feels like part of a family at Stor-It, where help is always available. She advises customers to take a picture of access codes and use large boxes for bedding or clothes; while saving heavier items for smaller boxes so they are easier to carry. Kris enjoys spending time with family, especially grandkids, hunting, fishing, and outdoor activities. Kris has been managing all 3 McCall locations and our McCall Car Wash since 2016, and now also managers our new Donnelly Location, talk about multi-tasking!',
                },
                {
                    name: 'Troy & Lisa',
                    info: 'Lisa and Troy enjoy the family atmosphere at Stor-It and enjoy meeting people from all walks of life. They advise customers to overestimate the size they need. They love spending time with family. Troy and Lisa are truly storage experts and have been helping to make Stor-It the #1 Self-Storage company in Idaho since 1991.',
                },
                {
                    name: 'Jayson & Joeleen',
                    info: 'Joeleen and Jayson have worked for Stor-It for nearly 6 years and love working together in a laid-back environment and meeting interesting people from all over. They recommend using Tetris skills for storage and sizing up for extra space. Outside of work, they enjoy hiking, fishing, camping, frisbee golf, and the great outdoors in Idaho.',
                },
                {
                    name: 'Kevin & Lila',
                    info: 'Lila and Kevin Lila and Kevin love the company and people they work with at Stor-It, where everyone is like family. Being at Stor-It for nearly a decade, Kevin and Lila are storage counselors, their customer’s trust. They advise customers to have more space than they think they need and to label and organize everything. They enjoy spending time with friends and family, playing cards, and spending time with their grandkids.',
                },
                {
                    name: 'Geoffrey',
                    info: 'Geoffrey enjoys talking to new people every day and hearing their amazing stories. While a relatively fresh face a Stor-It, Geoffrey has really jumped right into our mantra of teamwork and family environment. He advises customers to check the unit out before renting. Geoffrey loves camping and exploring the beautiful state of Idaho.',
                },
                {
                    name: 'Joe Sr.',
                    info: 'Joe Sr. loves the team atmosphere at Stor-It. Joe loves to interact with his customers and get to know them and their needs so he can provide them the best storage advise possible. He also advises customers to take a picture of their access code, so you always have it when you arrive. Joe enjoys hunting and fishing.',
                },
                {
                    name: 'Lindsy',
                    info: 'Lindsy enjoys getting to know customers at Stor-It, where the family-owned and locally grown nature reflects in the company\'s personality. He advises customers to think of Tetris when storing so you can have room to access your belongings, and to use mattress/furniture covers if storing for more than a month. Lindsy enjoys spending time with family, hiking, photography, reading, and sci-fi films.',
                },
                {
                    name: 'Jazz',
                    info: 'Jazz values work-life balance and the family-oriented nature of Stor-It. He particularly enjoys that he can bring his 3-year-old daughter to work with him and considers that extra time in her life a blessing. He advises customers to keep their unit organized and back up access info on their phone. Jazz enjoys hiking, grilling, watching movies with family, video games, and working on projects.',
                },
            ]
        
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
                                        </div>
                                    </div>
                                </div>`;
            document.querySelector('#pinnacleMainContent #tab5').insertAdjacentHTML('afterend', tabContent);

            // Get the name from the element
            const titleWait = setInterval(() => {
                const titleElement = document.querySelector('#tab6 .manager-title');
                if(titleElement){
                    clearInterval(titleWait)
                    let matchedName = '';
                    if (titleElement) {
                        const text = titleElement.innerText.trim();
                        if (text.includes(':')) {
                            // Get text after colon
                            const afterColon = text.split(':')[1].trim();

                            // Grab just the first name or name(s) before a line break or quote
                            matchedName = afterColon.split(/[\n"“”]+/)[0].trim();
                        }
                    }
                    // Select the container where the manager content should go
                    const managerTabContent = document.querySelector('#pinnacleMainContent #tab6 .iv-manager-tab-content');
                        
                    if (managerTabContent && matchedName) {
                        ivManagerList.forEach(manager => {
                            if (manager.name.toLowerCase() === matchedName.toLowerCase()) {
                                const managerHTML = `
                                    <span class="facility-title">Meet ${manager.name}:</span>
                                    <p>${manager.info}</p>
                                `;
                                managerTabContent.insertAdjacentHTML('beforeend', managerHTML);
                            }
                        });
                    }
                }
            }, 1000);

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
