function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-gym-access')) {
        document.querySelector('body').classList.add('iv-gym-access');

        // section 1
        const arraySection1 = [{
                'number': '1',
                'upTitle': 'Take advantage of our private',
                'mainTitle': '24-7 GYM ACCESS!',
                'mainInfo': 'Hit your fitness goals on your own schedule at Jack City Fitness, Boise’s number one spot for 24/7 access, gym perks, and outstanding amenities. Our partners can access weightlifting and other fitness gym equipment whenever they need it—and it’ll be in great shape. Learn more by getting started today!',
                'button': '<a href="javascript:;" class="try-free-btn button orange-background cabin">TRY FOR FREE</a>'
            },
            {
                'number': '2',
                'upTitle': 'Looking for',
                'mainTitle': 'Gyms Open 24/7?',
                'mainInfo': 'If you’re on the lookout for a fitness center that works with your schedule and busy lifestyle, you’ve come to the right place. Jack City Fitness is  Boise’s leading private training gym—and it’s open 24 hours a day, 7 days a week. These flexible operating hours allow athletes to unlock their greatest potential as they have the freedom to hit the gym when their schedules and bodies allow, rather than work around someone else’s timetable.<br><br> 24/7 gym access isn’t the only benefit of signing up with Jack City Fitness. While our nighttime hours are known for quiet personal workouts, our daytime hours allow for partners to work with a fitness coach or take a class.',
                'button': ''
            },
        ]
        

        // section 3

        const arraySection3 = [
            {
                'icon': '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/GymAccess.png',
                'title': '24/7 Gym Access',
                'info': 'Hit the gym whenever you want, and stay for as long as you need: Jack City Fitness is always open.'
            },
            {
                'icon': '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/WeightGymEquipment.png',
                'title': 'Weight Gym Equipment',
                'info': 'We offer more free weights than any other gym in the area!'
            },
            {
                'icon': '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/AmazingClasses.png',
                'title': 'Amazing Classes',
                'info': 'Our teachers are passionate about fitness and always have new ideas to explore with their classes. Don’t miss out!'
            },
            {
                'icon': '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/OurUniqueFitnessApp.png',
                'title': 'Our Unique Fitness App',
                'info': 'Your own customized routine is just a tap away with the Jack City Fitness app.'
            },
            {
                'icon': '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/LockerSpace.png',
                'title': 'Your Own Private Locker Space',
                'info': 'Your own storage space makes it easier for you to comfortably use our facilities and bring whatever you need for the rest of your day.'
            },
            {
                'icon': '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/PrivateSportsCages.png',
                'title': 'Private Sports Cages',
                'info': 'Batters up! Practice your sporting skills by pre-booking your own private sports cage.'
            },
            {
                'icon': '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/DedicatedCoaching.png',
                'title': 'Dedicated Coaching Programs',
                'info': 'Our partners love the extra attention and care they receive from our incredible fleet of personal fitness coaches and nutritional counselors.'
            },
            {
                'icon': '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/CustomSessions.png',
                'title': 'Options for Custom Sessions',
                'info': 'Your needs are important to us! At Jack City, we work with our partners to create custom sessions that suit their own lives.'
            },
            {
                'icon': '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/WorkoutMachines.png',
                'title': 'Workout Machines',
                'info': 'Our facility houses the latest workout equipment, and we are always adding more to the mix. Our latest additions are several Woodway Treadmills and Rogue Airbikes—our partners love them!'
            },
        ]

        const benefit24Hourgym = `
                <div class="iv-gym-services-container-section-1">
                    <div class="iv-gym-section1"></div>
                </div>
                <div class="iv-gym-services-container section-margin">
                    <div class="iv-benefit">
                        <div class="iv-left-brnefit cabin">
                            <h2>The Benefits of 24-Hour Gyms</h2>
                            <p>Boise is a bustling city, and its citizens are busy people! As city dwellers ourselves, we know how quickly our schedules can fill up. If you’re weighed down by work, studies, and personal obligations, that doesn’t mean that your fitness routine needs to fall to the wayside. Unlike the old days, where gyms were only open during business hours, Boise residents can now enjoy 24/7 fitness by joining up with Jack City.</p>
                            <p>Some of the perks of a small, 24/7 fitness gym include:</p>

                            <ul class="iv-gym-include">
                                <li>
                                    <div>
                                        <span>Privacy</span>
                                        <p>While some of us love working out with a buddy or in a class, other athletes prefer solo gym time. Enjoy more privacy by working out during “off-hours” at our 24/7 access gym.</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Flexibility</span>
                                        <p>You may only have a small sliver of time each day to hit the gym. By staying open 24/7, we allow you to utilize those slivers!</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span>Quiet</span>
                                        <p>24/7 access allows for quieter gym sessions with less waiting around for machines.</p>
                                    </div>
                                </li>
                            </ul>
                            <a href="javascript:;" class="try-free-btn button orange-background cabin">TRY FOR FREE</a>
                        </div>
                        <div class="iv-right-brnefit">       
                            <img src="//res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/Gym-image.png" class="right-first-img" alt="24 hour service">
                        </div>
                    </div>
                </div>  
                <div class="iv-gym-services-container section-margin">
                    <div class="iv-gym-section3">
                        <div class="iv-gym-services-grid"></div>
                    </div>
                </div>
                <div class="iv-gym-services-container section-margin">
                    <div class="iv-gyms-near-me center">
                        <h2>Weight Training Gyms Near Me</h2>
                        <p>Jack City Fitness is the best private training gym in Boise! But don’t just take our word for it. Come and see for yourself by calling (208) 999-1111 or filling out our <strong><a href="https://jackcityfitness.com/contact/">digital form</a></strong>. We’ll invite you to visit our private training gym in Boise for a FREE tour and fitness consultation. If you like what you see, we can sign you up to be a partner straight away, and you can immediately enjoy the many benefits of our fitness center, including 24/7 access and all of our amenities.</p>
                        <a href="javascript:;" class="try-free-btn button orange-background cabin">TRY FOR FREE</a>
                        <p>We can’t wait to meet you and help you reach your goals!</p>
                    </div>
                </div>
        `;

        const mainSection = document.querySelector('.iv-gym-access #section-1 .fourteen-hundred');
        mainSection.classList.remove('center');
        mainSection.innerHTML = '';
        
        mainSection.insertAdjacentHTML('beforebegin', benefit24Hourgym);
        // section 1
        for (let i = 0; i < arraySection1.length; i++) {
            const additionalClass = i === 1 ? ' iv-gym-inner-background' : '';
            document.querySelector('.iv-gym-section1').insertAdjacentHTML('beforeend', `<div class="iv-gym-inner${additionalClass}">
                <div class="iv-gym-inner-bg">
                    <div class="iv-gym-inner-heading">
                        <h2 class="iv-gym-inner-heading-number">${arraySection1[i].number}</h2>
                        <div class="iv-gym-inner-heading-flex">
                            <p>${arraySection1[i].upTitle}</p>
                            <h3>${arraySection1[i].mainTitle}</h3>
                        </div>
                    </div>
                    <p class="iv-gym-inner-info">${arraySection1[i].mainInfo}</p>
                    ${arraySection1[i].button}
                </div>
            </div>`)
        }

        // section 3
        for (let i = 0; i < arraySection3.length; i++) {
            document.querySelector('.iv-gym-section3 .iv-gym-services-grid').insertAdjacentHTML('beforeend', `<div class="iv-gym-services">
                <div class="iv-gym-services-logo">
                <img src="${arraySection3[i].icon}" alt="" />
                </div>
                <h2 class="iv-gym-services-title">${arraySection3[i].title}</h2>
                <p class="iv-gym-services-info">${arraySection3[i].info}</p>
                </div>`)
            }
            
            const trigerbtn = document.querySelectorAll('.iv-gym-access .try-free-btn');
            trigerbtn.forEach(trigerbtn => {
                trigerbtn.addEventListener('click', function() {
                    document.querySelector('[rel="noopener noreferrer"]').click();
                })
            })

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
