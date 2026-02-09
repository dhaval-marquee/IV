$(document).ready(function() {
	$("body").addClass("shirtspace-hero");
	function HeroSetion() {
		$(".shirtspace-hero .home-home__container").before(`
			<section class="ss-hero-main">
				<div class="container tl-container">
					<div class="ss-hero-section">
						<div class="ss-hero-left">
							<h1>The Most Trusted Source For  Wholesale Blank Apparel</h1>
							<h2>Providing affordable, high-quality blank apparel for events, businesses, schools, nonprofits and more since 2004</h2>
							<div class="ss-review">
								<div class="ss-review-inner">
									<img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/ShirtSpace/Homepage_Hero/Trustpilot_Stars_4.7.png" alt="Review Img" />
									<span><b>4.7</b>/5</span>
								</div>
								<p>23,726 reviews</p>
							</div>
						</div>
						<div class="ss-hero-right">
						<picture>
						  <source media="(min-width:767.98px)" srcset="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/ShirtSpace/Homepage_Hero/Shutterstock_with_people.png">
						  <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1678181989/ShirtSpace/Homepage_Hero/shutterstock.jpg" alt="Hero Right Images" style="width:auto;">
						</picture>
						</div>
					</div>
				</div>
			</section>
			<section class="ss-our-services-main">
				<div class="container tl-container">	
					<ul class="ss-our-services">
						<li class="free-shipping">
							<img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/ShirtSpace/Homepage_Hero/Free_Shipping.png" alt="Free Shipping" />
							<span>Free Shipping on Orders Over $79*</span>
						</li>
						<li class="order-minimums">
							<img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/ShirtSpace/Homepage_Hero/No_Order_Minimum.png" alt="No Order Minimums" />
							<span>No Order Minimums</span>
						</li>
						<li class="free-returns">
							<img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/ShirtSpace/Homepage_Hero/45_Day_Free_Returns.png" alt="Free Returns" />
							<span>45-Day Free Returns</span>
						</li>
						<li class="customer-service">
							<img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/ShirtSpace/Homepage_Hero/Customer_Service.png" alt="Based Customer Service" />
							<span>100% U.S. Based Customer Service</span>
						</li>
						<li class="school-agency">
							<img src="https://res.cloudinary.com/ignite-visibility/image/upload/f_auto/ShirtSpace/Homepage_Hero/School_and_Agency.png" alt="School and Agency" />
							<span>School and Agency POs Accepted</span>
						</li>
					</ul>
				</div>
			</section>
		`);
	}
	var ShirtsLoad = setInterval(function () {
		if ($('.home-home__container').length > 0) {
			clearInterval(ShirtsLoad);
			HeroSetion();
		}
	});
});