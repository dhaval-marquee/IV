function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-Homepage')) {
        document.querySelector('body').classList.add('iv-Homepage');
        
        document.querySelector('.press-loop-module').after(document.querySelector('.testimonial-module-1')) 
        document.querySelector('.testimonial-module-1').insertAdjacentHTML('beforebegin',`<section class="homepageTestimonials">
    <div class="container">
        <div class="boxes">
            <div class="boxOne">
                <div class="boxTopContent">
                    <p>My trainer is my favorite part of my training. Rachel is creative with the workouts she gives me and challenges me in ways I would not do for myself. She is supportive and encouraging with a great smile. I am so darn lucky to live where I live and have the means to go to this gym, to pedal over to the nearby trails, and ski from the top of the mountains.</p>
                </div>
                <div class="boxBottomContent">
                    <div class="weighingScale">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1756901790/jackcityfitness/BeforeandAfterHomepage/WeighingScale_Icon.png" alt="Weighing Scale Icon">
                        <div class="highlight">Total Weight Loss: <span>45lbs</span></div>
                    </div>
                    <div class="card">
                        <div class="images">
                            <div>
                                <p class="label">Before</p>
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1756901791/jackcityfitness/BeforeandAfterHomepage/JCF_image2.png" alt="Before Male">
                            </div>
                            <div>
                                <p class="label">After</p>
                                <img src="https://via.placeholder.com/200x250" alt="After Male">
                            </div>
                        </div>
                        <p><strong>Samantha T.</strong> successful strength training</p>
                    </div>
                </div>
            </div>
            <div class="boxTwo">
                <div class="boxTopContent">
                    <p>Walking into Jack City Fitness was like rediscovering a part of myself I thought I had lost. The partnership approach gave me more than just workouts—it gave me structure, accountability, and a team that saw potential in me before I saw it myself. In just a few months, I noticed changes: my clothes fit differently, my energy carried me through long workdays, and my old confidence began to creep back. The coaches reminded me that I wasn’t starting over at zero—I was building on the foundation I’d had all along.</p>
                </div>
                <div class="boxBottomContent">
                    <div class="weighingScale">
                        <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1756901790/jackcityfitness/BeforeandAfterHomepage/WeighingScale_Icon.png" alt="Weighing Scale Icon">
                        <div class="highlight">Total Weight Loss: <span>45lbs</span></div>
                    </div>
                    <div class="card">
                        <div class="images">
                            <div>
                                <p class="label">Before</p>
                                <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1756901791/jackcityfitness/BeforeandAfterHomepage/JCF_image1.png" alt="Before Male">
                            </div>
                            <div>
                                <p class="label">After</p>
                                <img src="https://via.placeholder.com/200x250" alt="After Male">
                            </div>
                        </div>
                        <p><strong>Kyle C.</strong> successful strength training</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`);

    }
}

var checkCondition = setInterval(function() {
    if (document.querySelectorAll('body').length > 0) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);
