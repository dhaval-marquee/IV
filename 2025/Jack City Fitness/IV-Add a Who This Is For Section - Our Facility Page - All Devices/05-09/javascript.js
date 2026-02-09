function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-tabs')) {
        document.querySelector('body').classList.add('iv-tabs');
        
        // JSON Array for Tabs
        const programs = [
        {
            title: "Weight Loss",
            details: `Have you ever tried to lose weight, only to hit a plateau—or worse, regain everything you worked so hard to lose? Research from the National Weight Control Registry shows that fewer than 20% of people are able to maintain weight loss for over a year without professional guidance. That’s why structured programs, accountability, and expert coaching matter.
            <br>
            <br>
            At Jack City Fitness here in Boise, we’ve guided countless partners to sustainable weight loss. Sarah D. came to us constantly fatigued, waking up every morning exhausted.`,
            moreDetails: `With consistent training and nutrition support, she dropped nearly 50 pounds. She says: “No more achy joints or sluggish mornings—the energy I feel makes me regret not joining sooner.”
            <br>
            <br>
            Clay M. once struggled to catch his breath on a short hill. After working with us, he proudly shared: “I can breathe easily after exertion—and I even got off my cholesterol meds. It’s been life-changing.
            <br>
            <br>
            ”For couples like Brad & Kelly L., accountability was the game-changer. Kelly shared: “I lost 30 pounds and built muscle definition I never thought possible,” while Brad explained: “I dropped body fat and gained lean muscle, transforming how I look and feel.”
            <br>
            <br>
            We could share hundreds more stories like these from across the Treasure Valley—but talking about results isn’t as powerful as helping you experience your own.
            <br>
            <br>
            If you knew you had a proven system—and a team by your side—to help you keep the weight off this time, how would that change your life?
            <br>
            <br>
            👉 Stop waiting. Click the link and get started today.`,
            testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
            testimonial: `“I can breathe easily after exertion—and I even got off my cholesterol meds. It’s been life-changing.” Clay M.`,
            image: "https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/jackcityfitness/OurFacilityPageSection/fat.png"
        },
        {
            title: "Build Muscle",
            details: "Do you ever feel like no matter how much you work out, you just aren’t building the strength or definition you want?...",
            moreDetails: ``,
            testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
            testimonial: "“I needed a facility where I could train anytime without waiting for gear, and JCF delivered an athlete-friendly space.” – Matt D.",
            image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066091/jackcityfitness/OurFacilityPageSection/Build_Muscle.jpg"
        },
        {
            title: "Enhance Sports Performance",
            details: "Are you frustrated that your skills in practice don’t translate to performance on the field or court?...",
            moreDetails: ``,
            testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
            testimonial: "“I’m skiing stronger than ever and kayaking with greater endurance—all thanks to this coaching.” – Eileen S.",
            image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066091/jackcityfitness/OurFacilityPageSection/Enhance_Sports_Performance.jpg"
        },
        {
            title: "Flexibility & Mobility",
            details: "Do you feel stiff, achy, or limited in how your body moves—like you’re aging faster than you should?...",
            moreDetails: ``,
            testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
            testimonial: "“Working with Tim has made me stronger, more flexible—and more present each day.” – Gretchen G.",
            image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066091/jackcityfitness/OurFacilityPageSection/Flexibility_Mobility.jpg"
        },
        {
            title: "Nutrition & Accountability",
            details: "Have you ever felt like you know what to do for your health, but struggle to follow through consistently?...",
            moreDetails: ``,
            testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
            testimonial: "“The structured, supportive approach pushed us within our limits and helped us change our bodies and our minds.” – Brad & Kelly L.",
            image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066091/jackcityfitness/OurFacilityPageSection/Nutrition_Accountability.jpg"
        },
        {
            title: "Community & Atmosphere",
            details: "When you imagine the perfect gym, what matters most—equipment, coaching, or the community around you?...",
            moreDetails: ``,
            testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
            testimonial: "“Excellent gym! Very clean, great equipment and staff. Members are dedicated, and it’s never crowded.” – Rich B.",
            image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066091/jackcityfitness/OurFacilityPageSection/Community_Atmosphere.jpg"
        }
        ];

        const section = document.createElement("div");
        section.className = "who-section";
        section.innerHTML = `
            <div class="container">
                <h1 class="center cabin uppercase extra-bold">Who are we for?</h1>
                <div class="tab-main">
                    <div class="tab-buttons" id="tabButtons"></div>
                </div>
                <div id="tabContents"></div>
            </div>
        `;
        if(document.querySelector('#section-1')){
            document.querySelector('#section-1').appendChild(section);
        }

        const tabButtons = section.querySelector("#tabButtons");
        const tabContents = section.querySelector("#tabContents");

        // Build tabs dynamically
        programs.forEach((prog, index) => {
            // Tab button
            const btn = document.createElement("button");
            btn.textContent = prog.title;
            if (index === 0) btn.classList.add("active");
            btn.addEventListener("click", () => showTab(index));
            tabButtons.appendChild(btn);

            // Tab content
            const content = document.createElement("div");
            content.classList.add("tab-content");
            if (index === 0) content.classList.add("active");
            content.innerHTML = `
                <div class="tab-data">
                    <div class="tab-box tab-details hidden"><p>${prog.details}</p><br>
                    <div class="buttonWrapper">
                        <a href="javascript:;" class="readMore" id="readMore">[Read more] <span class="arrowIcon"></span></a>
                        <a href="javascript:;" class="readLess" id="readLess" style="display: none;">[Read Less] <span class="arrowIcon"></span></a></div><br><p class="moreDetails">${prog.moreDetails}</p>
                    </div>
                    <div class="tab-box tab-testimonial">
                        <div class="leftPart"><img src="${prog.testimonialImg}" alt="Testimonial Placeholder"></div>
                        <div class="rightPart">${prog.testimonial}</div>
                    </div>
                </div>
                <div class="tab-image">
                    <img src="${prog.image}" alt="${prog.title}">
                    <a href="#try-for-free" class="cta-btn">Try For Free</a>
                </div>
            `;
            tabContents.appendChild(content);
        });
        document.addEventListener("click", function (e) {
            if (e.target.id == "readMore" || e.target.id == "readLess") {
                const banner = document.querySelector('.tab-details');
                banner.classList.toggle('hidden');
                if (e.target.id == "readMore") {
                    document.getElementById("readMore").style.display = "none";
                    document.getElementById("readLess").style.display = "inline-block";
                } else {
                    document.getElementById("readLess").style.display = "none";
                    document.getElementById("readMore").style.display = "inline-block";
                }
            }
        });
        // Tab switcher
        function showTab(i) {
            section.querySelectorAll(".tab-buttons button").forEach((b, idx) => {
                b.classList.toggle("active", idx === i);
            });
            section.querySelectorAll(".tab-content").forEach((c, idx) => {
                c.classList.toggle("active", idx === i);
            });
        }

        // CTA try for free
        document.querySelectorAll(".cta-btn").forEach(btn => {
            btn.addEventListener("click", e => {
                e.preventDefault();
                const globalCTA = document.querySelector("header .custom-try-for-free a");
                if (globalCTA) {
                    globalCTA.click();
                }
            });
        });
    }
}

loadTestCode();