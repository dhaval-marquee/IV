function loadTestCode() {
    if (!document.querySelector('body').classList.contains('iv-virtual')) {
        document.querySelector('body').classList.add('iv-virtual');

        // 1. Improve the hero copy for heading and subheading.
        const hero = document.querySelector('.p-section-hero');
        const heroTitles = hero.querySelector('h1');

        if (heroTitles) {
            heroTitles.closest('.col-span-12').classList.add('hero-right')
        }

        const heroRight = `
            <div class="hero-right-content">
                <h2 class="text-h1-display hero-title">Hassle-Free Online Consultation for Your Perfect Wedding Look</h2>
                <p class="mb-16">Get personalized suit and tuxedo styling advice from the comfort of your home.</p>
                <ul>
                    <li>Expert guidance on selecting the best styles and fits for your wedding.</li>
                    <li>Convenient online sessions tailored to your schedule.</li>
                    <li>Receive styling tips and outfit recommendations for the entire party.</li>
                </ul>
                <i>Book your appointment this month to enjoy an exclusive 20% discount for your entire party as part of our Winter Planning Special.</i>
                <a class="btn btn-info" href="https://cal.com/team/generation-tux/virtual-style-consultation">BOOK YOUR FREE VIRTUAL CONSULTATION</a>
            </div>
        `;
        if (!document.querySelector('.hero-right-content')) {
            document.querySelector('.hero-right').insertAdjacentHTML('afterbegin', heroRight);
        }

        // 2. Change the virtual consultation session style into horizontal layout and add a CTA button for 'BOOK YOUR FREE VIRTUAL CONSULTATION'.
        document.querySelectorAll('p').forEach(function(text) {
            if (text.innerText === "Your One-On-One Styling Session") {
                text.closest('.p-section').classList.add('styling-section');
            }
        });
        const flexSection = document.querySelector('.iv-virtual .styling-section .row > div:first-child > div');
        if (flexSection) {
            if (flexSection.classList.contains('justify-center')) {
                flexSection.classList.remove('justify-center');
                flexSection.classList.add('justify-between', 'flex-row-reverse');
            }

            flexSection.insertAdjacentHTML('beforeend', `<div class="title-section">
                    <h2 class="styling-title text-h2-display">Your One-On-One Styling Session</h2>
                    <p class="styling-sub-title">During your personalized virtual consultation,<br>your stylist will:</p>
                </div>`)
        }

        document.querySelector('.iv-virtual .styling-section .space-y-16 > div').insertAdjacentHTML('beforeend', `<div class="styling-details flex-wrap flex">
                <div class="styling-details-info flex flex-col gap-8">
                    <strong>Inspire</strong>
                    <p>Need help visualizing? Your stylist will work with you to find inspiration, suggest complete outfits, and determine a signature style that’ll set you apart.</p>
                </div>
                <div class="styling-details-info flex flex-col gap-8">
                    <strong>Style</strong>
                    <p>Get ready to look your best..ever. During your consultation, we’ll help you find styles, colors, and fits that complement your look–as well as work perfectly for the occasion you have in mind.</p>
                </div>
                <div class="styling-details-info flex flex-col gap-8">
                    <strong>Elevate</strong>
                    <p>From the right tie, the perfect pocket square, vests, and more, your stylist will provide the attention to detail you need to complete your look and leave a lasting impression.</p>
                </div>
                <div class="styling-details-info flex flex-col gap-8">
                    <strong>Clarify</strong>
                    <p>Our stylist will answer any questions you may have about fashion, our process, how to order, and more.</p>
                </div>
            </div>
            <div class="book-button text-center">
                <a class="btn btn-info" href="https://cal.com/team/generation-tux/virtual-style-consultation">BOOK YOUR FREE VIRTUAL CONSULTATION</a>
            </div>
        `);

        // 3. Move up the reviews section, it should be below the One-on-One Styling Session section.
        if (!document.querySelector('.iv-review-section')) {
            document.querySelector('.m-section-hero').closest('.py-1').classList.add('iv-review-section');
        }
        const reviewSection = document.querySelector('.iv-review-section');
        const OneOnOneSection = document.querySelector('.p-section.bg-gray-lighter');
        OneOnOneSection.after(reviewSection);

        if (!document.querySelector('.iv-review-section-right')) {
            document.querySelector('.iv-review-section .m-section-hero blockquote').closest('.mb-64').classList.add('iv-review-section-right');
        }
    }
}

const checkCondition = setInterval(function() {
    if (document.querySelector('body')) {
        clearInterval(checkCondition);
        loadTestCode();
    }
}, 100);