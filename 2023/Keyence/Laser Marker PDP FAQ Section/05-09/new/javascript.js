console.log('Rest of all FAQs >>>>>>>>>>>>>>>>>>>>>>1111');
function appendFAQ(questions, answers, startingIndex = 0) {
    console.log('Rest of all FAQs >>>>>>>>>>>>>>>>>>>>>>');

    const faqSection = document.querySelector('#faq-section .faq-list');
    for (let i = 0; i < questions.length; i++) {
        const questionId = `question${startingIndex + i}`;
        const listItem = document.createElement('li');
        const isChecked = startingIndex === 0 && i === 0 ? 'checked' : '';
        listItem.innerHTML = `
            <input id="${questionId}" class="question-check" type="checkbox" ${isChecked}>
            <label class="question-label" for="${questionId}"><span>${questions[i]}</span></label>
            <div class="answer">
                <p class="faq-text">${answers[i]}</p>
            </div>`;
        faqSection.appendChild(listItem);
    }
}

function loadTestCode() {
    const tag = 'faq-section';
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains(tag)) {
        bodyEle.classList.add(tag);
        const faqStyle = `<link href="/css/ss/careers/faq.css" rel="stylesheet" type="text/css">`
        document.querySelector('head').insertAdjacentHTML('beforeend', faqStyle);
        document.querySelector('footer').insertAdjacentHTML('beforebegin', `
        <div class="wrapper">
            <section id="faq-section">
                <div class="contents">
                    <h2 class="section-title link-margin-faq">Frequently Asked Questions</h2>
                    <ul class="faq-list"></ul>
                </div>
            </section>
        </div>`);
        const faqData = {
            questions: [
                "What is laser marking?",
                "What are the advantages of laser marking?",
                "Do laser marks wear off?",
                "How does laser marking system work on metal and other substrates?",
                "How to Choose the Right Laser Marking System for my Business?",
                "What is the difference between the various types and power levels of laser markers and which one is right for my application?",
                "What Materials Can Be Laser Marked?",
                "Do products need to be moving in order to be laser mark",
                "What is the typical preventive maintenance (PM) for the laser marking system?",
                "What safety considerations are involved when using laser marking systems?",
                "How long does a laser marker typically last?",
                "Is a laser marking system capable of operating in humid and dusty environments?"
            ],
            answers: [
                "Simply put, laser markers use high-energy light to mark the surface of a part. Laser markers vary by the wavelength of light, and different wavelengths are optimized for marking and processing different materials. The majority of industrial laser markers are YVO4 lasers, fiber lasers, UV lasers, and CO2 lasers.Laser markers are used to permanently mark text, logos, barcodes, or 2D codes on parts in all industries. Common marking types include oxidizing, annealing, engraving, etching, discoloration, and processing.",
                "Laser Markers create fully permanent marks without the need for costly consumables or downtime for maintenance. Lasers are extremely repeatable and versatile making them optimal for both automated and manual applications.",
                "Practically speaking: no. Laser etchers interact directly with the surface of a part, so the only real way to remove a laser mark is to remove the material it's on.",
                "Laser marking systems emit a highly focused beam which, when aimed at the surface of a material, is able to controllably alter the the chemical bonds in order to create a contrasting mark, engrave away layers of material, or create raised oxidized marking. This process, depending on the intended style and size of mark as well as the material, is extremely efficient and can often be achieved anywhere from a few milliseconds and up.",
                "When choosing the correct laser marking system for your business many factors should be taken into consideration. Throughout this process, you should evaluate all laser marking models to determine the proper wavelength, wattage, marking field of view, and safety requirements. Below are the main factors: <ul class='num-list'><li>1. Materials – this will narrow down laser marking models by wavelength.</li><li>2. Time allowed for marking – with marking time you can determine wattage.</li><li>3. Marking Style/Setup – whether it is a large logo or a matrix of small text this will determine the marking field of view.</li><li>4. Integration style – safety is always a priority so inline vs offline solutions will change the safety requirements.</li></ul>",
                "The main differentiator between the common styles of laser markers comes down to the wavelength of the emitted beam. In general, a shorter wavelength leads to a higher rate of absorption. Along with wavelength, the power of the system will have a massive impact on the marking time. These two levers often work in conjunction with each other in that lasers with a lower wavelength can often utilize a much lower output power to achieve the desired markings.",
                "With a variety of different models and wavelengths, KEYENCE laser markers can mark a wide range of materials. These include materials such as metal, plastic, glass, ceramic, wood, and rubber. There are even more materials than listed that can be marked but some have been shown to emit harmful gases. In this event, proper guarding and fume extraction should be used to provide a safe operating environment.",
                "You have options when working with laser markers. Whether your application calls for a moving line, indexed components, or offline manually loaded components, there is a laser setup suited to handle your needs.",
                "KEYENCE laser markers require very little maintenance due to their robust design and IP rating. Best practices simply include regular checks of the air filters to ensure cleanliness as well as maintaining a clean and clear laser lens. KEYENCE has take steps to automate even the most simplemaintenance tasks including the introduction of automatic output power monitoring and calibration as well as automated lens inspection so users are alerted if any action is needed.",
                "Each of Keyence's laser markers are considered Class IV and are recommended to be operated as Class I systems to ensure operator safety. This is commonly acheived through an enclousure solution. Simply put, an enclousre serves as a beam shield around the point where the laser marks on the material. The design, dimensions, and material used to fabricate the beam shield are determined by the type of laser being used.Safety interlocks are included to prevent emission of any laser beam unless the beam shield, and other safety criteria are in place. Guarding is the responsibility of the buyer, but Keyence laser experts are happy to provide guidance on enclosure solutions and, if necessary, provide a complete Class 1 Solution.<br/> In addition to the enlcousre, Keyence also recommends the use of fume extractors to ensure operator safety. Fume extractors not only prevent the operators from inhaling fumes as a result of laser marking, but also help keep the laser optics clean and ensure marking quality.",
                "Keyence is able to boast industry leading lifetime with our laser marking units. Lasers excell in the manufacturing industry due to their reliability and longevity. Expected lifetime is different for each system and application, but you can contact your local keyence rep today to see how a laser marker could support your operation.",
                "Laser markers can withstand varying degrees of dust and water ingress depending on the IP ratings of the machines. KEYENCE offers standard laser markers with ratings up to IP64 and integrates with 3rd party offerings to create solutions that can withstand nearly any manufacturing environment."
            ]
        };
        appendFAQ(faqData.questions, faqData.answers);

        if (window.location.href.includes('/products/marker/laser-marker/md-x1000_1500/')) {
            console.log('// 3 - Axis Hybrid Laser Marker Specific FAQ >>>>>>>>>>>>>>>>>>');

            const faqDataAxisHybrid = {
                questions: [
                    "How is a Hybrid Laser Marker different from a Fiber Laser Marker?",
                    "What are the advantages of a Hybrid system?",
                    "What materials are best for marking with a Hybrid system?",
                    'What is "Peak Power"?'
                ],
                answers: [
                    'Hybrid laser markers combine the amplification structure of a standard fiber laser with the oscillation structure of a YVO4 laser. This creates a "best of both worlds" system that maintains the high output power of a fiber laser - allowing for extremely fast marking and engraving, along with the high "peak power" which minimizes thermal damage to the workpiece, dramatically increasing marking quality. Additional advantages of a hybrid system include a longer working life than conventional syetems and a more forgiving focal tolerance, minimizing potential marking defects.',
                    "The main advantage of a Hybrid laser marker over a conventional fiber system is the dramatically increased peak power achieved through further amplification of the emitted light within the oscillation structure. Peak power is instrumental in creating contrast when marking, as well as minimizing thermal loss/impact. This creates a much higher clarity mark, minimizes damage to the workpiece, and allows for a more robust solution over a wide range of materials.",
                    "The beauty of a hibrid system is that it is able to produce high quality marks over a wide range of materials. It is commonly purposed for any metal marking application, but also performs exceedingly well on many plastics, resins, and even rubbers.",
                    "Peak power refers to the maximum amount of power a laser marker outputs within a single pulse. It is a main determinant in the amount of energy that will be delivered to the material getting marked. In general, a system with a higher peak power is able to more efficiently purpose its output and direct it more towards absorption/contrast creation and less toward heat effects/thermal stress."
                ]
            };
            appendFAQ(faqDataAxisHybrid.questions, faqDataAxisHybrid.answers, faqData.questions.length);
        } else if (window.location.href.includes('/products/marker/laser-marker/md-u/')) {
            console.log('// 3 - Axis UV Laser Marker Specific FAQ >>>>>>>>>>>>>>>>>>');

            const faqDataAxisUV = {
                questions: [
                    "What is a UV laser marker?",
                    "What industries use UV laser marking?",
                    "What is photolytic degradation?",
                    "Why are UV lasers absorbed better than infrared lasers?",
                    "What is intracavity oscillation?"
                ],
                answers: [
                    "A UV laser marker is a laser markers who's emitted beam features a wavelength that falls in to the ultraviolet spectrum of light - generally 355nm.",
                    "UV laser marking is extremely common in many industries. Worth noting would be the medical industry where devices require very high quality surface finishes in order to withstand immense sterilization requirements, and the semiconductor/electronics industry where products being marked are of high value and any scrap due to marking defects would be impermissible.",
                    'Photolytic degradation, or photolytic processing, refers to the phenomenon of molecular bindings within the material being marked being directly broken by light. This means no thermal impact is required in order to create contrast, making damage free marking feasible. This is the means through which a UV laser creates marks and is why it is the laser of choice for marking difficult materials, leaving near-perfect surface finishes, negating risk of damage to components. This is often referred to as "Cold Marking".',
                    "Most infrared lasers output light of around 1064-1090 nm. UV laser light has a wavelength of 355nm. Since photon energy is inversely proportional to wavelength, this gives UV lasers the edge in absorption over most materials.",
                    'Intracavity oscillation refers to the structure through which lasers are able to break down light to the 355nm wavelength. Conventionally, this is done "extracavity", or outside of a cavity. This leads to irradiating highly power dense light through optical components and severe damage to wavelength conversion crystals. For this reason, UV lasers with extracavity structures require extremely expensive "crystal-shifts" on a regular basis to essentialy find un-damaged portions of the crystals to use. With an intracavity design, this is addressed and crystals are not damaged during oscillation. KEYENCE developed the intracavity design to grossly reduce maintenance costs and increase lifespan of the MD-U UV laser relative to conventional systems.'
                ]
            };
            appendFAQ(faqDataAxisUV.questions, faqDataAxisUV.answers, faqData.questions.length);
        } else if (window.location.href.includes('/products/marker/laser-marker/md-f3100_5100/')) {
            console.log('// 3 - Axis Fiber Laser Marker Specific FAQ >>>>>>>>>>>>>>>>>>');

            const faqDataAxisFiber = {
                questions: [
                    "How Deep can fiber lasers engrave?",
                    "What materials can a Fiber Laser Mark?",
                ],
                answers: [
                    'When looking to achieve a maximum depth fo engraving, the limiting factors are: the amount of time allocated to marking, the material\'s properties, the laser\'s power, and the depth of focus of the laser. In general, a fiber laser will be able to engrave as deep as it can stay in focus if given enough time. KEYENCE\'s 3-axis technology and "Deep-Dig" function allow for the focal point of the laser to iteratively step down with every repetition. This means as the depth of the engraving continues to grow, the laser will e able to maintain focus, dramatically increasing the achievable depth of engraving.',
                    'Fiber lasers are generaly porposed for marking or engraving on metal products. They are the laser of choice for applications with very tight cycle time requirements or where veey deep engravings need to be achieved.',
                ]
            };
            appendFAQ(faqDataAxisFiber.questions, faqDataAxisFiber.answers, faqData.questions.length);
        }
    }
}

var faqDataContent = setInterval(() => {
    if(document.querySelector('footer')){
        clearInterval(faqDataContent);
        loadTestCode();
    }
}, 300);