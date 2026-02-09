
// Header Review
if (jQuery('header .g-review').length == 0) {
	jQuery('header .desktop-header .desktop-btn a').parent().addClass('review-wrapper').append('<p class="g-review">Over 3,000 <span><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1706773346/Aireserv/five-star.png" alt="Review Stars"> Google Reviews</span></p>');
}


// Hero Banner Review
if (jQuery('section.primary-hero-banne .g-review').length == 0) {
	jQuery('section.primary-hero-banner .primary-btn').after('<p class="g-review">Over 3,000 <span><img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1706773346/Aireserv/five-star.png" alt="Review Stars"> Google Reviews</span></p>');
}