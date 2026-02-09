		if (!$('body').hasClass('iv_cards')) {
			$('body').addClass('iv_cards');

			$('<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>').appendTo('head');
			$('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/overlayscrollbars/1.13.1/css/OverlayScrollbars.css"/>').appendTo('head');

			// Plugin Style
			$('link[rel="shortcut icon"]').after('<link href="/css/plugin.min.css?9" rel="stylesheet">');

			// Header Desktop
			$('.iv_cards header.page .row').addClass('items-center');
			$('.iv_cards header.page .row .col-md-6').addClass('col-md-3').removeClass('col-md-6');
			$('.iv_cards header.page .row .col-md-4').addClass('col-md-2').removeClass('col-md-4');
			$('.iv_cards section.secondnav+section .row .col-md-4').addClass('col-md-3').removeClass('col-md-4');
			$('.iv_cards section.secondnav+section .row .col-md-8').addClass('col-md-9').removeClass('col-md-8');
			$('.iv_cards header.page .row .col-md-3').after('<div class="col-md-5"></div>');
			$('.iv_cards header.page #ctlHeader_aLogin').closest('.pull-right').addClass('login-block');
			$('.iv_cards header.page .login-block > div').addClass('login-group').removeAttr('style');
			$('.iv_cards header.page .login-block .login-group').append('<span class="orange">or</span><span id="ctlHeader_aRegister"> <a href="/site/login">Register</a></span>');
			$('.iv_cards header.page .login-block .login-group a').removeClass('orange');
			$('.iv_cards header.page .slogan, .iv_cards header.page #ctlHeader_aPickup, .iv_cards .login-group br').remove();
			$('.iv_cards #ctlHeader_aSignUp').prev().remove();
			$('.iv_cards #ctlHeader_aSignUp span').css('font-size', '13px');
			var ulNavBar = $('.iv_cards #ctlHeader_ulNavBar');
			ulNavBar.parent().addClass('dt_header');
			ulNavBar.find('li').last().remove();

			// Header Mobile
			$('.iv_cards .logo').closest('header').addClass('hidden-sm hidden-xs');
			$('.iv_cards .navbar').parent().addClass('main-menu hidden-sm hidden-xs');
			$('.iv_cards .main-menu').after('<div class="site-mobile-menu">\
				<div class="mobile-header visible-sm visible-xs">\
					<div class="container">\
						<div class="row items-center mobile-header-row">\
							<div class="col-sm-3 col-xs-3 mobile-header-left">\
								<div class="mobile-logo"><a href="/" class="logolink"><img src="/img/logo-d.png" alt="doozycards" class="img-responsive"></a></div>\
							</div>\
							<div class="col-sm-5 col-xs-5 mobile-header-center">\
								<a class="btn btn-outlined--blue-dark w-100 mr-n3" href="/site/login"><span class="lead text-capitalize">Join &amp; Send</span></a>\
							</div>\
							<div class="col-sm-3 col-xs-4 mobile-header-right">\
								<div class="mobile-header-btns header-top-widget">\
									<ul class="header-links unstyled">\
										<li class="sin-link"><a href="javascript:;" class="cart-link link-icon text-blue-dark off-canvas-btn"><i class="ion-ios-search-strong"></i></a></li>\
										<li class="sin-link"><a href="javascript:;" class="link-icon hamburger-icon off-canvas-btn  text-blue-dark"><i class="ion-navicon"></i></a></li>\
									</ul>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>\
				<aside class="off-canvas-wrapper">\
					<div class="btn-close-off-canvas"><i class="ion-android-close"></i></div>\
					<div class="off-canvas-inner">\
						<div class="mobile-login-block"></div>\
						<div class="mobile-search-box"></div>\
						<div class="mobile-navigation"><nav class="off-canvas-nav"><ul class="mobile-menu main-mobile-menu unstyled"><li><a href="/">Home</a></li></ul></nav></div>\
					</div>\
				</aside>\
			</div>\
			<div class="sticky-init fixed-header">\
				<div class="container">\
					<div class="row items-center">\
						<div class="col-lg-2"><a href="/" class="site-brand"><img src="/img/logo-d.png" height="50" alt="doozycards"></a></div>\
						<div class="col-lg-10">\
							<nav class="navbar navbar-orange">\
								<ul class="nav navbar-nav"><li><a href="#" class="link-icon"><i class="ion-ios-search-strong font-weight-xbold large"></i></a></li></ul>\
							</nav>\
						</div>\
					</div>\
				</div>\
			</div>\
			<div class="send_card_mobile text-center"><h2 class="category">Birthday eCards</h2></div>\
			<div class="send_card-img text-center"><img src="/images/banners/3.jpg" class="img-responsive"></div>');
			$('.iv_cards .mobile-menu').append($('.navbar-nav').html());
			$('.iv_cards .sticky-init .navbar-nav').prepend($('.navbar-nav').html());
			ulNavBar.prepend('<li id="home" class="menu-item"><a href="/"><span class="fa fa-home"></span></a></li>');

			// Off Canvas Open close
			$('.iv_cards .off-canvas-btn').on('click', function() {
				$('.iv_cards .off-canvas-wrapper').addClass('open');
			});
			$('.iv_cards .btn-close-off-canvas').on('click', function() {
				$('.iv_cards .off-canvas-wrapper').removeClass('open');
			});

			// Cookie Section
			// $('.iv_cards .cookie-message').append($('.iv_cards .cookie-message span')).append($('.iv_cards .cookie-message button'));
			// $('.iv_cards .cookie-message .row').remove();
			// $('.iv_cards #btnAcceptCookies').text('I Accept');

			// Content Section
			$('.iv_cards #divBreadCrumb').closest('.col-md-4').addClass('col-md-3').removeClass('col-md-4');
			$('.iv_cards #h2SimilarTitle').after($('.iv_cards #divBlueBox'));
			$('.iv_cards #divBlueBox #aSignUp').html('<b>Send eCards for FREE</b><br />10 days free');
			$('.iv_cards #divFilters').nextAll().remove();
            $('.iv_cards h1').text('Trending eCards');
			$('.iv_cards #h1Title').closest('.col-md-8').addClass('col-md-9').removeClass('col-md-8');
			$('.iv_cards #h1Title').parent('div').removeAttr('style');
			$('.iv_cards #h2Title + div').remove();
			$('.iv_cards #divCardList').prevAll('br').remove();
			$('.iv_cards #divCardList').before('<div class="with-sidebar visible-sm visible-xs">\
				<div class="row">\
					<div class="col-xs-6 col-xs-offset-6">\
						<div class="sorting-selection shop-toolbar">\
							<div class="dropdown">\
								<a class="filterbtn">Style Filters</a>\
								<div class="dropdown-content"></div>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>');
			var filterContent = $('.iv_cards .sorting-selection .dropdown-content');
			filterContent.append($('.iv_cards #divSelected').html());
			filterContent.append($('.iv_cards #divFilters').html());
			$('.iv_cards .cardthumb113 .slidehover').addClass('hiddex-sm hidden-xs').html('<div class="play-card"><i class="fas fa-play-circle"></i>Play Card</div>');
			$('.iv_cards .cardthumb113 .cardlink').addClass('hiddex-sm hidden-xs');
			$('.iv_cards #ulPager2').removeClass('pull-right').after($('.iv_cards #divHeaderText').removeAttr('style').addClass('row'));
			$('.iv_cards .pagination').prepend('<li><a href="/ecards/birthday/page-1" class="single-btn prev-btn"><i class="fa fa-chevron-left"></i></a></li>').append('<li><a href="/ecards/birthday/page1" class="single-btn next-btn"><i class="fa fa-chevron-right"></i></a></li>');
			$('.iv_cards .pagination > li').removeClass('active');
			$('.iv_cards #ulPager1').remove();
			$('.iv_cards #ctlHeader_ulNavBar > li:nth-child(4) .kolumny3').addClass('three-mega-col');
			$('.iv_cards section > .space20').remove()

			// Footer
			$('.iv_cards #Footer1_divFooterText').remove();
			$('.iv_cards .footerlinks .col-sm-4').addClass('col-md-3 col-xs-4').removeClass('col-sm-4');
			$('.iv_cards .footerlinks.row').prepend('<div class="col-md-3 col-md-offset-0 col-sm-8 col-sm-offset-2 col-xs-12 footer-form">\
				<div class="footer-title">\
					<h3>Newsletter Subscribe</h3>\
				</div>\
				<div class="newsletter-form">\
					<form action="#">\
						<input id="txtHelloEmail" type="email" class="form-control" placeholder="Enter Your Email Address Here...">\
						<button id="btnSubmitHello" class="btn btn--primary w-100">Subscribe</button>\
					</form>\
				</div>\
				<div class="social-block">\
					<h3 class="title text-blue">STAY CONNECTED</h3>\
					<ul class="social-list list-inline">\
						<li class="single-social facebook"><a href="https://www.facebook.com/Doozycards"><i class="ion ion-social-facebook"></i></a></li>\
						<li class="single-social twitter"><a href="https://twitter.com/doozycards"><i class="ion ion-social-twitter"></i></a></li>\
						<li class="single-social youtube"><a href="https://youtube.com/user/doozycards"><i class="ion ion-social-youtube"></i></a></li>\
						<li class="single-social pinterest"><a href="https://www.pinterest.com/doozycards1"><i class="ion ion-social-pinterest"></i></a></li>\
					</ul>\
				</div>\
			</div>');

			// BreadCrumb
			// var breadCrumbBlock = $('.iv_cards #divBreadCrumb').html();
			// breadCrumbBlock = breadCrumbBlock.split('»').join(' ');
			// $('.iv_cards #divBreadCrumb').html(breadCrumbBlock);

			// Block Function
			function resizeBlock() {
				var SearchBar = $('.iv_cards input[name="_txtSearch"]').closest('.form-group').clone('.form-group').addClass('header-search-block');
				
				var checkButton = setInterval(() => {
					if($('.iv_cards .header-search-block button[type="button"]').length > 0) {
						clearInterval(checkButton)
						$('.iv_cards .header-search-block button[type="button"]').addClass('ion-ios-search-strong').text('');
					}
				}, 100);
				
				var loginWrap = $('.iv_cards .login-group');
				var freeTrialBtn = $('.iv_cards a#ctlHeader_aSignUp');
				console.log('working')
				if ($(window).width() > 991) {
					$('.form-group .input-group').addClass('header-search-block my-4').removeClass('col-md-10')
					$('.iv_cards header.page .row .col-md-5').append(SearchBar);
					$('.iv_cards .header-search-block input[name="_txtSearch"]').attr('placeholder', 'Search Hear');
					$('.iv_cards header.page .row .col-md-5 + .col-md-2 > div').append(loginWrap);
					$('.iv_cards .items-center .col-md-2:last-child .pull-right').append(freeTrialBtn);
				} else {
					$('.iv_cards .site-mobile-menu .mobile-search-box').append(SearchBar);
					$('.iv_cards .header-search-block input[name="_txtSearch"]').attr('placeholder', 'Search Hear');
					$('.iv_cards .site-mobile-menu .mobile-login-block').append(loginWrap);
					$('.iv_cards .off-canvas-inner').append(freeTrialBtn);
				}
			};
			resizeBlock();
			var waitForFinalEvent = (function () {
				var timers = {};
				return function (callback, ms, uniqueId) {
					if (!uniqueId) {
						uniqueId = "Don't call this twice without a uniqueId";
					}
					if (timers[uniqueId]) {
						clearTimeout (timers[uniqueId]);
					}
					timers[uniqueId] = setTimeout(callback, ms);
				};
			})();
			
			// $(window).resize(function () {
			// 	waitForFinalEvent(function(){
			// 		resizeBlock();
			// 	}, 500);
			// });

			// Navbar Hover
			$(".iv_cards .navbar .nav > .dropdown").on("mouseover", function() {
				$('.navbar .nav > .dropdown').removeClass('open')
				$(this).addClass('open');
			});
			$(".iv_cards .navbar .nav > .dropdown").on("mouseout", function() {
				$(this).removeClass('open');
			});

			// Sticky Header
			var ctlHeader = $('.iv_cards #ctlHeader_ctlHeader')[0].getBoundingClientRect().height;
			var mainMenu = $('.iv_cards .main-menu')[0].getBoundingClientRect().height;
			var headerHeight = ctlHeader + mainMenu;
			$(window).on({
				resize: function () {
					var width = $(window).width();
					if ((width <= 991)) {
						$('.iv_cards .sticky-init').removeClass('fixed-header');
						if ($('.iv_cards .sticky-init').hasClass('sticky-header')) {
							$('.iv_cards .sticky-init').removeClass('sticky-header');
						}
					} else {
						$('.iv_cards .sticky-init').addClass('fixed-header');
					}
				},
				load: function () {
					var width = $(window).width();
					if ((width <= 991)) {
						$('.iv_cards .sticky-init').removeClass('fixed-header');
						if ($('.iv_cards .sticky-init').hasClass('sticky-header')) {
							$('.iv_cards .sticky-init').removeClass('sticky-header');
						}
					} else {
						$('.iv_cards .sticky-init').addClass('fixed-header');
					}
				}
			});
			$(window).on('scroll', function () {
				if ($(window).scrollTop() >= headerHeight) {
					$('.iv_cards .fixed-header').addClass('sticky-header');
				} else {
					$('.iv_cards .fixed-header').removeClass('sticky-header');
				}
			});
	$('#divBirthdayThumbs').addClass('tab-content clearfix').wrap('<div class="Thumbs_wrap" id="exTab1"></div>').wrapInner('<div class="Thumbs_wrap1 tab-pane" id="1a"></div>').before(`<ul class="nav nav-pills">
		<li class="nav-item active">
			<a href="#1a" class="nav-link" data-toggle="tab">Birthday</a>
			<span class="arrow-icon"></span>
		</li>
		<li class="nav-item">
			<a href="#2a" data-toggle="tab">Funny</a>
			<span class="arrow-icon"></span>
		</li>
		<li class="nav-item"> 
			<a href="#3a" data-toggle="tab">Anniversary </a>
			<span class="arrow-icon"></span>
		</li>
	</ul>`);
	$('.Thumbs_wrap1').addClass('active').after(`<div class="Thumbs_wrap2 tab-pane" id="2a">
		<section class="slider_section">
			<div class="slider_wrapper">
				<div>
					<div class="cardthumb113">
						<a href="james-greens-happy-birthday-funk"><img class="cardthumb"
								src="https://www.doozycards.com/images/t/113/3780.jpg"
								data-src="https://www.doozycards.com/images/t/113/3780.jpg" alt="James Green's Happy Birthday Funk"
								width="113" height="146"></a>
						<div class="cardlink hiddex-sm hidden-xs">
							<a href="james-greens-happy-birthday-funk">James Green's Happy Birthday Funk</a>
						</div>
					</div>
				</div>
				<div>
					<div class="cardthumb113">
						<a href="sparkling-birthday-unicorn-toot"><img class="cardthumb"
								src="https://www.doozycards.com/images/t/113/5962.jpg"
								data-src="https://www.doozycards.com/images/t/113/5962.jpg" alt="Farting Unicorn" width="113"
								height="146"></a>
						<div class="cardlink hiddex-sm hidden-xs">
							<a href="sparkling-birthday-unicorn-toot">Farting Unicorn</a>
						</div>
					</div>	
				</div>
				<div>
					<div class="cardthumb113">
						<a href="dionnes-birthday-song"><img class="cardthumb" src="https://www.doozycards.com/images/t/113/5053.jpg"
								data-src="https://www.doozycards.com/images/t/113/5053.jpg" alt="Dionne's Birthday Song" width="113"
								height="146"></a>
						<div class="cardlink hiddex-sm hidden-xs">
							<a href="dionnes-birthday-song">Dionne's Birthday Song</a>
						</div>
					</div>
				</div>
				<div>
					<div class="cardthumb113">
						<a href="singing-birthday-malties"><img class="cardthumb" src="https://www.doozycards.com/images/t/113/5389.jpg"
								data-src="https://www.doozycards.com/images/t/113/5389.jpg" alt="Singing Birthday Malties" width="113"
								height="146"></a>
						<div class="cardlink hiddex-sm hidden-xs">
							<a href="singing-birthday-malties">Singing Birthday Malties</a>
						</div>
					</div>
				</div>
							
			</div>
		</section>
	</div>
	<div class="Thumbs_wrap3 tab-pane" id="3a">
		<section class="slider_section">
			<ul class="slider_wrapper">
				<div class="cardthumb113">
					<a href="singing-birthday-malties"><img class="cardthumb" src="https://www.doozycards.com/images/t/113/5389.jpg"
							data-src="https://www.doozycards.com/images/t/113/5389.jpg" alt="Singing Birthday Malties" width="113"
							height="146"></a>
					<div class="cardlink hiddex-sm hidden-xs">
						<a href="singing-birthday-malties">Singing Birthday Malties</a>
					</div>
				</div>
				<div class="cardthumb113">
					<a href="james-greens-happy-birthday-funk"><img class="cardthumb"
							src="https://www.doozycards.com/images/t/113/3780.jpg"
							data-src="https://www.doozycards.com/images/t/113/3780.jpg" alt="James Green's Happy Birthday Funk"
							width="113" height="146"></a>
					<div class="cardlink hiddex-sm hidden-xs">
						<a href="james-greens-happy-birthday-funk">James Green's Happy Birthday Funk</a>
					</div>
				</div>
				<div class="cardthumb113">
					<a href="dionnes-birthday-song"><img class="cardthumb" src="https://www.doozycards.com/images/t/113/5053.jpg"
							data-src="https://www.doozycards.com/images/t/113/5053.jpg" alt="Dionne's Birthday Song" width="113"
							height="146"></a>
					<div class="cardlink hiddex-sm hidden-xs">
						<a href="dionnes-birthday-song">Dionne's Birthday Song</a>
					</div>
				</div>
				<div class="cardthumb113">
					<a href="sparkling-birthday-unicorn-toot"><img class="cardthumb"
							src="https://www.doozycards.com/images/t/113/5962.jpg"
							data-src="https://www.doozycards.com/images/t/113/5962.jpg" alt="Farting Unicorn" width="113"
							height="146"></a>
					<div class="cardlink hiddex-sm hidden-xs">
						<a href="sparkling-birthday-unicorn-toot">Farting Unicorn</a>
					</div>
				</div>
			</div>
	</section>
	</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>`);
	
	$.getScript("//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js", function () {
		$('.slider_wrapper').slick({
			autoplay: true,
			arrows: false,
			buttons: false,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1
		});

		$('.slider_section').css('opacity','1');
	});
	// Slider over

	// ===============
	$('#divNewThumbs').addClass('tab-content clearfix').wrap('<div class="Thumbs_wrap" id="exTab1"></div>').wrapInner('<div class="Thumbs_wrap1 tab-pane" id="1a"></div>').before(`<ul class="nav nav-pills">
		<li class="nav-item active">
			<a href="#1a" class="nav-link" data-toggle="tab">New</a>
			<span class="arrow-icon"></span>
		</li>
    </ul>`);
	$('#divNewThumbs').addClass('active').wrapInner('<div class="divNewThumbsInner"></div>');
	// ===============
	$('.iv_cards .logo').closest('header').addClass('hidden-sm hidden-xs');

	$('#ulAlwaysThere').after(`<div class="single-block mt-4 pl--20">
		<a class="btn btn-md flex-column text-center btn--blue btn-preview py-2" href="#">
			<span class="font-weight-bold">Start A Free Trial</span><br>
			<span>10 Days free</span>
		</a>
    </div>`)
		$('section.secondnav+section .row:nth-child(3)').after('<div class="row"><div class="col-md-4 visible-md visible-lg"></div><div class="col-md-8"></div></div>');
		$('section.secondnav+section .container .row:nth-child(3) div.visible-lg').wrapInner('<div class="DionneWarwick_wrap"></div>');	
		$('section.secondnav+section .container .row:nth-child(4) div.col-md-8').append($('section.secondnav+section .container .row:nth-child(3) div.visible-lg .DionneWarwick_wrap'));

		$('section.secondnav+section .dots').before($('.iv_cards #ctl00_divFooterText'));
		
		// footer
		$('div.footertext').wrap('<div class="container"></div>')
		$("div.footertext p").each(function (index) {
			$(this).addClass("footertext_p" + index);
		});
        $('.iv_cards a.aReadMore').html($('a.aReadMore').html().replace('...',''));
		// $('div.footertext .footertext_p2 span +a').html($('div.footertext .footertext_p2 span +a').html().replace('http://www.doozycards.com/ecards/new','#'));


//         $('#divPopThumbs .cardthumb113 >a[href="happy-thanksgiving-from-me-to-you"]').after(`<div class="card-image">
// 			<a href="happy-thanksgiving-from-me-to-you"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6277.jpg" alt="Happy Thanksgiving From Me To You"></a>
// 			<div class="hover-contents">
// 				<a href="happy-thanksgiving-from-me-to-you" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6277.jpg" alt="Happy Thanksgiving From Me To You"> </a>
// 				<div class="btn-group hover-btns d-none d-md-flex"> <a href="happy-thanksgiving-from-me-to-you" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="happy-thanksgiving-from-me-to-you" class="single-btn"> Play Card </a> 
// 	     	</div>
// 		</div>
// 	  </div>`);
// 	  $('#divPopThumbs .cardthumb113 >a[href="the-turkey-horror-picture-show"]').after(`<div class="card-image">
// 		<a href="happy-thanksgiving-from-me-to-you"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6285.jpg" alt="The Turkey Horror Picture Show Thanksgiving eCard"></a>
// 		<div class="hover-contents">
// 			<a href="happy-thanksgiving-from-me-to-you" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6285.jpg" alt="Happy Thanksgiving From Me To You"> </a>
// 			<div class="btn-group hover-btns d-none d-md-flex"> <a href="happy-thanksgiving-from-me-to-you" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="happy-thanksgiving-from-me-to-you" class="single-btn"> Play Card </a> 
// 		</div>
//       </div>
//     </div>`);
// 	$('#divPopThumbs .cardthumb113 >a[href="old-tyme-thanksgiving"]').after(`<div class="card-image">
// 	<a href="happy-thanksgiving-from-me-to-you"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6220.jpg" alt="Old Tyme Thanksgiving"></a>
// 	<div class="hover-contents">
// 		<a href="happy-thanksgiving-from-me-to-you" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6220.jpg" alt="Happy Thanksgiving From Me To You"> </a>
// 		<div class="btn-group hover-btns d-none d-md-flex"> <a href="happy-thanksgiving-from-me-to-you" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="happy-thanksgiving-from-me-to-you" class="single-btn"> Play Card </a> 
// 	</div>
//   </div>
// </div>`);
// $('#divPopThumbs .cardthumb113 >a[href="turkey-staying-alive"]').after(`<div class="card-image">
// <a href="happy-thanksgiving-from-me-to-you"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5929.jpg" alt="Turkey Staying Alive"></a>
// <div class="hover-contents">
// 	<a href="happy-thanksgiving-from-me-to-you" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5929.jpg" alt="Happy Thanksgiving From Me To You"> </a>
// 	<div class="btn-group hover-btns d-none d-md-flex"> <a href="happy-thanksgiving-from-me-to-you" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="happy-thanksgiving-from-me-to-you" class="single-btn"> Play Card </a> 
// </div>
// </div>
// </div>`);

$('#divPopThumbs').html(`<div class="row mx-lg-1">
<!-- single eCard -->
  <div class="w-25">
	<div class="product-card">
	  <div class="product-card--body">
		<div class="card-image">
		  <a href="happy-thanksgiving-from-me-to-you"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6277.jpg" alt="Happy Thanksgiving From Me To You"></a>
		  <div class="hover-contents">
			<a href="happy-thanksgiving-from-me-to-you" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6277.jpg" alt="Happy Thanksgiving From Me To You"> </a>
			<div class="btn-group hover-btns d-none d-md-flex"> <a href="happy-thanksgiving-from-me-to-you" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="happy-thanksgiving-from-me-to-you" class="single-btn"> Play Card </a> </div>
		  </div>
		</div>
		<div class="product-header d-none d-md-block">
		  <h3><a href="happy-thanksgiving-from-me-to-you">Happy Thanksgiving From Me To You</a></h3>
		</div>
	  </div>
	</div>
  </div>
  <div class="w-25">
	<div class="product-card">
	  <div class="product-card--body">
		<div class="card-image">
		  <a href="the-turkey-horror-picture-show"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6285.jpg" alt="The Turkey Horror Picture Show Thanksgiving eCard"></a>
		  <div class="hover-contents">
			<a href="the-turkey-horror-picture-show" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6285.jpg" alt="The Turkey Horror Picture Show Thanksgiving eCard"> </a>
			<div class="btn-group hover-btns d-none d-md-flex"> <a href="the-turkey-horror-picture-show" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="the-turkey-horror-picture-show" class="single-btn"> Play Card </a> </div>
		  </div>
		</div>
		<div class="product-header d-none d-md-block">
		  <h3><a href="the-turkey-horror-picture-show">The Turkey Horror Picture Show</a></h3>
		</div>
	  </div>
	</div>
  </div>
  <div class="w-25">
	<div class="product-card">
	  <div class="product-card--body">
		<div class="card-image">
		  <a href="old-tyme-thanksgiving"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6220.jpg" alt="Old Tyme Thanksgiving"></a>
		  <div class="hover-contents">
			<a href="old-tyme-thanksgiving" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/6220.jpg" alt="Old Tyme Thanksgiving"> </a>
			<div class="btn-group hover-btns d-none d-md-flex"> <a href="old-tyme-thanksgiving" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="old-tyme-thanksgiving" class="single-btn"> Play Card </a> </div>
		  </div>
		</div>
		<div class="product-header d-none d-md-block">
		  <h3><a href="old-tyme-thanksgiving">Old Tyme Thanksgiving</a></h3>
		</div>
	  </div>
	</div>
  </div>
  <div class="w-25">
	<div class="product-card">
	  <div class="product-card--body">
		<div class="card-image">
		  <a href="turkey-staying-alive"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5929.jpg" alt="Turkey Staying Alive"></a>
		  <div class="hover-contents">
			<a href="turkey-staying-alive" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5929.jpg" alt="Turkey Staying Alive"> </a>
			<div class="btn-group hover-btns d-none d-md-flex"> <a href="turkey-staying-alive" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="turkey-staying-alive" class="single-btn"> Play Card </a> </div>
		  </div>
		</div>
		<div class="product-header d-none d-md-block">
		  <h3><a href="turkey-staying-alive">Turkey Staying Alive</a></h3>
		</div>
	  </div>
	</div>
  </div>
</div>`);

// $('section.secondnav+section .row:nth-child(4) .col-md-8').html(`<div class="row mx-lg-1">
// <div class="w-25">
//   <div class="product-card">
// 	<div class="product-card--body">
// 	  <div class="card-image">
// 		<a href="dionnes-birthday-song"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5053.jpg" alt="Dionne's Birthday Song"></a>
// 		<div class="hover-contents">
// 		  <a href="dionnes-birthday-song" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5053.jpg" alt="Dionne's Birthday Song"> </a>
// 		  <div class="btn-group hover-btns d-none d-md-flex"> <a href="dionnes-birthday-song" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="dionnes-birthday-song" class="single-btn"> Play Card </a> </div>
// 		</div>
// 	  </div>
// 	  <div class="product-header d-none d-md-block">
// 		<h3><a href="dionnes-birthday-song">Dionne's Birthday Song</a></h3>
// 	  </div>
// 	</div>
//   </div>
// </div>
// <div class="w-25">
//   <div class="product-card">
// 	<div class="product-card--body">
// 	  <div class="card-image">
// 		<a href="birthday-wishes-by-dionne-warwick"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5091.jpg" alt="Birthday Wishes by Dionne Warwick"></a>
// 		<div class="hover-contents">
// 		  <a href="birthday-wishes-by-dionne-warwick" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5091.jpg" alt="Birthday Wishes by Dionne Warwick"> </a>
// 		  <div class="btn-group hover-btns d-none d-md-flex"> <a href="birthday-wishes-by-dionne-warwick" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="birthday-wishes-by-dionne-warwick" class="single-btn"> Play Card </a> </div>
// 		</div>
// 	  </div>
// 	  <div class="product-header d-none d-md-block">
// 		<h3><a href="birthday-wishes-by-dionne-warwick">Birthday Wishes by Dionne Warwick</a></h3>
// 	  </div>
// 	</div>
//   </div>
// </div>
// <div class="w-25">
//   <div class="product-card">
// 	<div class="product-card--body">
// 	  <div class="card-image">
// 		<a href="chester-chipmunk-birthday"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5110.jpg" alt="Chester Chipmunk Birthday by Dionne Warwick"></a>
// 		<div class="hover-contents">
// 		  <a href="chester-chipmunk-birthday" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5110.jpg" alt="Chester Chipmunk Birthday by Dionne Warwick"> </a>
// 		  <div class="btn-group hover-btns d-none d-md-flex"> <a href="chester-chipmunk-birthday" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="chester-chipmunk-birthday" class="single-btn"> Play Card </a> </div>
// 		</div>
// 	  </div>
// 	  <div class="product-header d-none d-md-block">
// 		<h3><a href="chester-chipmunk-birthday">Chester Chipmunk Birthday by Dionne Warwick</a></h3>
// 	  </div>
// 	</div>
//   </div>
// </div>
// <div class="w-25">
//   <div class="product-card">
// 	<div class="product-card--body">
// 	  <div class="card-image">
// 		<a href="happy-anniversary-by-dionne-warwick"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5111.jpg" alt="Happy Anniversary by Dionne Warwick"></a>
// 		<div class="hover-contents">
// 		  <a href="happy-anniversary-by-dionne-warwick" class="hover-image"> <img height="270" width="180" src="https://www.doozycards.com/images/t/400/5111.jpg" alt="Happy Anniversary by Dionne Warwick"> </a>
// 		  <div class="btn-group hover-btns d-none d-md-flex"> <a href="happy-anniversary-by-dionne-warwick" class="single-btn"> <i class="fas fa-play-circle"></i></a> <a href="happy-anniversary-by-dionne-warwick" class="single-btn"> Play Card </a> </div>
// 		</div>
// 	  </div>
// 	  <div class="product-header d-none d-md-block">
// 		<h3><a href="happy-anniversary-by-dionne-warwick">Happy Anniversary by Dionne Warwick</a></h3>
// 	  </div>
// 	</div>
//   </div>
// </div>
// </div>`);


			$('body').css('visibility','visible');
	}
