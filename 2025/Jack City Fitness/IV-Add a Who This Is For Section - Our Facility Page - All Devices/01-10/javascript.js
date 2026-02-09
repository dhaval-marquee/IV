function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-tabs')) {
        document.querySelector('body').classList.add('iv-tabs');

        const programs = [{
                title: "Weight Loss",
                details: `<p>Have you ever tried to lose weight, only to hit a plateau—or worse, regain everything you worked so hard to lose? Research from the National Weight Control Registry shows that fewer than 20% of people are able to maintain weight loss for over a year without professional guidance. That’s why structured programs, accountability, and expert coaching matter.</p>
            <p>At Jack City Fitness here in Boise, we’ve guided countless partners to sustainable weight loss. Sarah D. came to us constantly fatigued, waking up every morning exhausted.</p>
            <p>With consistent training and nutrition support, she dropped nearly 50 pounds. She says: “No more achy joints or sluggish mornings—the energy I feel makes me regret not joining sooner.”</p>
            <p>Clay M. once struggled to catch his breath on a short hill. After working with us, he proudly shared: “I can breathe easily after exertion—and I even got off my cholesterol meds. It’s been life-changing.</p>
            <p>”For couples like Brad & Kelly L., accountability was the game-changer. Kelly shared: “I lost 30 pounds and built muscle definition I never thought possible,” while Brad explained: “I dropped body fat and gained lean muscle, transforming how I look and feel.”</p>
            <p>We could share hundreds more stories like these from across the Treasure Valley—but talking about results isn’t as powerful as helping you experience your own.</p>
            <p>If you knew you had a proven system—and a team by your side—to help you keep the weight off this time, how would that change your life?</p>
            <p>👉 Stop waiting. Click the link and get started today.</p>
            `,
                testimonial: `<p>“I can breathe easily after exertion—and I even got off my cholesterol meds. It’s been life-changing.”</p>`,
                image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1756890470/jackcityfitness/OurFacilityPageSection/fat.png",
                testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
                testimonialName: "Clay M.",
            },
            {
                title: "Build Muscle",
                details: `
            <p>Do you ever feel like no matter how much you work out, you just aren’t building the strength or definition you want? Studies published in the Journal of Strength and Conditioning Research confirm that progressive overload and properly periodized training programs are critical for muscle growth—but most people fail to implement them consistently on their own.</p>
            <p>That’s where we step in. Patty O. calls JCF “a weightlifter’s paradise—top-quality, well–maintained equipment, ample space, and never crowded.”</p>
            <p>Athletes like Matt D. depend on us during their off-season: “I needed a facility where I could train anytime without waiting for gear, and JCF delivered an athlete-friendly space to grow bigger, stronger, and ready for peak season.”</p>
            <p>Shannon S. said: “My trainer built a phased plan uniquely tailored to me. His expertise—and the 24/7 access—has made JCF the best gym experience I’ve ever had.”</p>
            <p>And Cassie O., once intimidated by gyms, explained: “I used to be scared to go alone—now I train solo and feel empowered. I feel better than ever, and I owe it to Sierra and the team.”</p>
            <p>These are just a handful of the transformations we’ve seen. We could show you dozens more—but instead of reading about them, we’d rather help you start building your own strength.</p>
            <p>If you finally saw your body responding the way you hoped—stronger, leaner, and more capable—how would that affect your confidence in and out of the gym?</p>
            <p>👉 Don’t just imagine it. Click the link and start building muscle with us today.</p>`,
                testimonial: "<p>“I needed a facility where I could train anytime without waiting for gear, and JCF delivered an athlete-friendly space to grow bigger, stronger, and ready for peak season.”</p>",
                image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066091/jackcityfitness/OurFacilityPageSection/Build_Muscle.jpg",
                testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
                testimonialName: "Matt D.",
            },
            {
                title: "Enhance Sports Performance",
                details: `
        <p>Are you frustrated that your skills in practice don’t translate to performance on the field or court? Research in Sports Medicine shows that tailored strength and conditioning improves performance by up to 20%—especially in speed, agility, and power—when compared to general training alone.</p>
        <p>That’s why athletes from across the Treasure Valley trust Jack City Fitness. Eric G. noticed his soccer game change completely: “My strength, endurance, and confidence against bigger opponents have all improved dramatically.”</p>
        <p>Isabelle C. elevated her volleyball skills: “My strength and agility on the court skyrocketed—without Jack City, I wouldn’t be the player I am today.”</p>
        <p>Matt D. shared: “JCF gave me the environment I needed to push through my off-season and return stronger.”</p>
        <p>And Eileen S., an active adult athlete, explained: “I’m skiing stronger than ever and kayaking with greater endurance—all thanks to this coaching.”</p>
        <p>We have pages of stories like these from athletes all over Boise—but the truth is, the only performance that really matters is yours.</p>
        <p>What would your life look like if every time you played, you knew you had the edge—faster, stronger, and more confident than ever?</p>
        <p>👉 Click the link now and start training like the athlete you were meant to be.</p>`,
                testimonial: "<p>“I’m skiing stronger than ever and kayaking with greater endurance—all thanks to this coaching.”</p>",
                image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066091/jackcityfitness/OurFacilityPageSection/Enhance_Sports_Performance.jpg",
                testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
                testimonialName: "Eileen S. </br> Partner Since 2016",
            },
            {
                title: "Flexibility & Mobility",
                details: `
        <p>Do you feel stiff, achy, or limited in how your body moves—like you’re aging faster than you should? Studies in the Journal of Physical Therapy Science show that consistent mobility and stretching programs improve functional movement by 30–40% and reduce injury risk significantly.</p>
        <p>That’s why we’ve made mobility and flexibility a cornerstone of our training. Gretchen G., who faces fibromyalgia and autoimmune conditions, told us: “Working with Tim has made me stronger, more flexible—and more present each day. I even walked up stadium stairs with no pain or breathlessness!”</p>
        <p>Morgan’s client, recovering from a knee injury, said: “Rehab felt so slow and frustrating, but the modifications and encouragement made all the difference. Now I move more freely, with better flexibility and confidence.”</p>
        <p>Others rave about our Complete Recovery class: “Between the stretching flows and breathwork, I’ve shed the stiffness that used to shadow my workouts. I feel lighter, steadier, and like my body finally listens again.”</p>
        <p>And for desk-bound professionals: “After a few flexibility sessions, my back loosens, my posture improves, and I can bend and stretch with ease again.”</p>
        <p>These are only a few examples of how our flexibility and mobility programs change lives—we could keep going, but what matters most is helping your body move the way it was designed to.</p>
        <p>If your body could move freely again—without stiffness or pain—how much more would you enjoy daily life, from workouts to simply playing with your kids?</p>
        <p>👉 Don’t wait another day. Click the link and reclaim your mobility now.</p>
    `,
                testimonial: "<p>“Working with Tim has made me stronger, more flexible—and more present each day. I even walked up stadium stairs with no pain or breathlessness!”</p>",
                image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066091/jackcityfitness/OurFacilityPageSection/Flexibility_Mobility.jpg",
                testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
                testimonialName: "Gretchen G."
            },
            {
                title: "Nutrition & Accountability",
                details: `
        <p>Have you ever felt like you know what to do for your health, but struggle to follow through consistently? Research in Obesity Reviews shows that people who combine exercise with nutrition counseling and accountability are twice as likely to sustain results long-term compared to those who exercise alone.</p>
        <p>At JCF, that’s exactly the system we provide. Sarah D. explained: “I’ve become so much more disciplined with food, and my sleep and energy reflect that.”</p>
        <p>Brad & Kelly L. said: “The structured, supportive approach pushed us within our limits and helped us change our bodies and our minds—making fitness part of our lifestyle.”</p>
        <p>Shannon S. praised her coach: “My trainer’s investment in my success goes far beyond typical training—he holds me accountable in the best ways imaginable.”</p>
        <p>And Cassie O. found confidence in consistency: “I was scared to go to the gym alone, but the accountability and support changed that. Now I train solo with confidence.”</p>
        <p>We’ve seen these same breakthroughs happen again and again for our partners, and we could list them all—but your story is the only one we’re interested in creating now.</p>
        <p>If you had a team checking in daily on your progress—not just workouts, but food, sleep, and habits—how much further could you go toward your goals?</p>
        <p>👉 Take control. Click the link and let’s hold you accountable starting today.</p>
    `,
                testimonial: "<p>“The structured, supportive approach pushed us within our limits and helped us change our bodies and our minds—making fitness part of our lifestyle.”</p>",
                image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066091/jackcityfitness/OurFacilityPageSection/Nutrition_Accountability.jpg",
                testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
                testimonialName: "Brad & Kelly L."
            },
            {
                title: "Community & Atmosphere",
                details: `
        <p>When you imagine the perfect gym, what matters most—equipment, coaching, or the community around you? A Gallup study found that people who exercise with social support are 45% more likely to stick with their fitness goals.</p>
        <p>At Jack City Fitness, community is at the heart of what we do. Doug M., a weekend visitor, said: “I was blown away by how welcoming and enthusiastic the team was—the positivity made me feel instantly at home.”</p>
        <p>Ian C. remembers onboarding: “Matt was so helpful guiding me through the process—I left excited to start my partnership here.”</p>
        <p>Rich B. highlighted: “Excellent gym! Very clean, great equipment and staff. Members are dedicated, and it’s never crowded.”</p>
        <p>And Kyle D., who has trained across the globe, concluded: “I’ve been to gyms in 12 countries—and Jack City Fitness blows them all away.”</p>
        <p>We could fill pages with the words of partners who have found their home here—but instead of reading their stories, we want you to start writing your own.</p>
        <p>If you knew your gym wasn’t just a place to work out, but a family that supported you—how much easier would it be to stay committed and thrive?</p>
        <p>👉 Join the family. Click the link and become part of Jack City Fitness today.</p>
    `,
                testimonial: "<p>“Excellent gym! Very clean, great equipment and staff. Members are dedicated, and it’s never crowded.”</p>",
                image: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066091/jackcityfitness/OurFacilityPageSection/Community_Atmosphere.jpg",
                testimonialImg: "https://res.cloudinary.com/ignite-visibility/image/upload/v1757066622/jackcityfitness/OurFacilityPageSection/Testimonial_Placeholder.webp",
                testimonialName: "Rich B."
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
        if (document.querySelector('#section-1')) {
            document.querySelector('#section-1').insertAdjacentElement('afterend', section);
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
                    <div class="tab-box tab-details">
                        <div class="details-text">${prog.details}</div>
                        <button class="read-toggle">READ MORE</button>
                    </div>
                    <div class="tab-box tab-testimonial">
                        <div class="testimonial-box">
                            <div class="testimonial-img"><img src="${prog.testimonialImg}" alt="Testimonial Img"></div>
                            <div class="testimonial-data">
                                ${prog.testimonial}
                                <div class="testimonial-name">
                                    <span>${prog.testimonialName}</span>
                                </div>
                            </div>
                        </div>    
                    </div>
                </div>
                <div class="tab-image">
                    <img src="${prog.image}" alt="${prog.title}">
                    <a href="#try-for-free" class="cta-btn">Try For Free</a>
                </div>
            `;
            tabContents.appendChild(content);

            // Handle read more / less
            const paragraphs = content.querySelectorAll(".details-text p");
            const toggleBtn = content.querySelector(".read-toggle");

            if (paragraphs.length > 2) {
                for (let i = 2; i < paragraphs.length; i++) {
                    paragraphs[i].classList.add("hidden");
                }
            } else {
                toggleBtn.style.display = "none"; // hide button if not needed
            }

            toggleBtn.addEventListener("click", () => {
                const isExpanded = toggleBtn.textContent === "READ LESS";
                paragraphs.forEach((p, idx) => {
                    if (idx >= 2) {
                        p.classList.toggle("hidden", isExpanded ? true : false);
                    }
                });
                toggleBtn.textContent = isExpanded ? "READ MORE" : "READ LESS";
            });
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
