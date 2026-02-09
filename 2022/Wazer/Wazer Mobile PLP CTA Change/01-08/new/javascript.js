var isMobile = window.matchMedia("(max-width: 767.98px)").matches;
if (isMobile) {
	mobilecode();
}

function mobilecode() {
if(!$('body').hasClass('iv_wazer_lp')) {
	$('body').addClass('iv_wazer_lp');

	// Font Add
	$.getScript('//use.typekit.net/ik/k5I58jRUcwzf1RlA4tsedgwWKjrRLroc-xVXUm_pkgtfeCwIfFHN4UJLFRbh52jhWDmyZ2qDjR4qjRb3jR8qZRMawRJhZQZ8jynLMKG0jAFu-WsoShFGZAsude80ZkoRdhXCHKoyjamTiY8Djhy8ZYmC-Ao1Oco8if37OcBDOcu8OfG0SaBujW48SagyjhmDjhy8ZYmC-Ao1OcFzdP37O1iypcmkO1FUiABkZWF3jAF8OcFzdPUyjamTiY8Djhy8ZYmC-Ao1OcFzdPUyjamTiY8Djhy8ZYmC-Ao1Oco8ifUySkolZPUCdhFydeyzSabCSaBujW48SagyjhmDjhy8ZYmC-Ao1OcFzdPUajWT8SKoRdhXCihBEZWJ0SaBujW48Sagyjh90jhNlOYiaikoyjamTiY8Djhy8ZYmC-Ao1OcFzdPUaiaS0jAFu-WsoShFGZAsude80Zko0ZWbCiaiaOcBDOcu8OYiaikoDSWmyScmDSeBRZWFR-emqiAUTdcS0jhNlOYiaikoajWT8SKoRdhXCiaiaO1iypcmkO1FUiABkZWF3jAF8OcFzdPJ5dYsROA4zZeN0-PXUFD9KfWFzZc8yOWgkdkG4fVvnIMMjgfMfH6qJxKCbMg65JMJ7f6Rcz3IbMs6gJMJ7f6Riz3IbMs6fJMJ7f6RLz3IbMs62JMJ7f6RRz3IbMs6IJMJ7f6Ryz3IbMs6BJMJ7f6R8z3IbMs6eJMJ7f6Rdz3IbMs6YJMJ7f6R6z3IbMs6FJMJ7f6RZz3IbMs64JMJ7f6RKz3IbMs6VJMJ7f6RSz3IbMs6sJMHbMLaXUz3B.js', function() {
		try{Typekit.load();}catch(e){}
	});

	// Key Features
	var urlStart = '//res.cloudinary.com/ignite-visibility/image/upload/v1652168262/wazer/waterjet/';
	var featureLists = [
		{
			icon: 'Cutting-Area',
			text: '<strong>12" x 18" Cutting Area</strong> for materials up to 1" thick'
		},
		{
			icon: '4600PSI',
			text: '<strong>4600PSI at OS gal/min</strong> makes Wazer the most powerful waterjet of its size'
		},
		{
			icon: 'Precision',
			text: '<strong>Precision cutting to .08mm</strong> gives you the ability to make even the most detailed cuts'
		},
		{
			icon: 'Traverse-Speed',
			text: '<strong>Traverse speed of 1,905 mm/min</strong> lets you finish cuts in minutes,not hours'
		},
		{
			icon: 'Easy-Software',
			text: '<strong>Easy to install & Use Software</strong> gets you setup and cutting in no time at all'
		}
	];
	var featureHtml = '';
	for (var i = 0; i < featureLists.length; i++) {
		featureHtml += '<div class="feature-item"><div class="feature-icon"><img src="'+urlStart + featureLists[i].icon+'.gif" alt="'+featureLists[i].icon+'" /></div><div class="feature-text">'+featureLists[i].text+'</div></div>';
	}

	// Technical Specs
	var accordion = [
		{
			title: 'Size and Weight',
			accordionBody: [
				{
					left: 'WAZER Main Unit Size',
					right: '34” x 25.5”” x 22” (856mm x 648mm x 551mm)'
				},
				{
					left: 'WAZER Main Unit Size with Stand Leg Accessory',
					right: '34” x 25.5”” x 48” (856mm x 648mm x 1220mm)'
				},
				{
					left: 'WAZER Main Unit Empty Weight',
					right: '110 lbs. (50 kg)'
				},
				{
					left: 'WAZER Main Unit Loaded Weight',
					right: '400 lbs. (180 kg)'
				},
				{
					left: 'Pump Box Size',
					right: '21” x 15” x 11” (533 mm x 355 mm x 280 mm)'
				},
				{
					left: 'Pump Box Weight',
					right: '92 lbs. (42 kg.)'
				}
			]
		},
		{
			title: 'Cutting',
			accordionBody: [
				{
					left: 'Cutting Area',
					right: '12” x 18” (305 mm x 460 mm)'
				},
				{
					left: 'Cut Bed Size',
					right: '13” x 19” (330 mm x 485 mm)'
				},
				{
					left: 'Kerf (width of cut)',
					right: '.044 (1.2 mm)'
				},
				{
					left: 'Noise Emission',
					right: '74 + / - 3dB'
				},
				{
					left: 'Noise Pressure Level',
					right: '7 + / - 3dB'
				}
			]
		},
		{
			title: 'Water',
			accordionBody: [
				{
					left: 'Maximum Working Pressure & Flow Rate',
					right: '4600PSI (32MPa) at 0.5 gal/min (1.9L/min)'
				},
				{
					left: 'Water Source',
					right: 'Filtered tap water'
				},
				{
					left: 'Input Water Filter',
					right: '~300 mesh'
				},
				{
					left: 'Input water requirement',
					right: '>1gal(3.8L)/min; > 35Psi(2.4Bar) ; TDS<'
				},
				{
					left: 'Water Draining',
					right: '180mg/L; >130F/54°C'
				},
				{
					left: 'Draining Hose requirement',
					right: '(1.9L) /min • <30 feet (9m) length; < 4 feet (1.2m) elevation'
				},
				{
					left: 'Water Recirculation',
					right: 'Not Recommended'
				}
			]
		},
		{
			title: 'Abrasive',
			accordionBody: [
				{
					left: 'Abrasive Flow Rate',
					right: '140g~150g/min'
				},
				{
					left: 'Abrasive Capacity',
					right: '30lbs (13.5 kg)'
				},
				{
					left: 'Abrasive Type',
					right: 'Garnet 80 mesh (If Barton Alltech HPA 80 is not available, please contact WAZER customer support for more information before using alternative brand)'
				}
			]
		},
		{
			title: 'Gantry',
			accordionBody: [
				{
					left: 'Maximum Linear Speed',
					right: '75 IPM (1905 mm/min)'
				},
				{
					left: 'Gantry Positional Precision',
					right: '0.003” (0.08 mm)'
				}
			]
		},
		{
			title: 'Power',
			accordionBody: [
				{
					left: 'Main Unit V1.5 (110 VAC and 220 VAC)',
					right: '100-240 VAC, 50/60Hz, 2.5A'
				},
				{
					left: 'Pump Box V1.5A VAC',
					right: '110-120 VAC; 60Hz; 15A; 1700W'
				},
				{
					left: 'Pump Box V1.5B VAC',
					right: '220-240 VAC; 50Hz; 10A; 2200W'
				}
			]
		},
		{
			title: 'Wam Software',
			accordionBody: [
				{
					left: 'Compatible File Types',
					right: '.dxf, .svg'
				},
				{
					left: 'Connectivity',
					right: 'SD Card'
				},
				{
					left: 'Browser Compatibility',
					right: 'Chrome, Internet Explorer, Safari, Firefox'
				}
			]
		}
	];
	var accordionHtml = '';
	for (var i = 0; i < accordion.length; i++) {
		var accordionBodyHtml = '';
		if(accordion[i].accordionBody!=undefined) {
			for(var j=0; j<accordion[i].accordionBody.length; j++) {
				var accordionBodyObj = accordion[i].accordionBody[j];
				accordionBodyHtml += '<table><tr><td>'+accordionBodyObj.left+'</td><td>'+accordionBodyObj.right+'</td></tr></table>';
			}
		}
		accordionHtml += '<div class="shogun-accordion">\
			<div class="shogun-accordion-heading"><div class="shogun-accordion-header"><h4 class="shogun-accordion-title">'+accordion[i].title+'</h4><div class="shogun-accordion-icon shogun-icon-plus"><span></span></div></div></div>\
			<div class="shogun-accordion-body">'+accordionBodyHtml+'</div>\
		</div>';
	}

	// FAQ
	var faqLists = [
		{
			title: 'What infrastructure do I need to operate WAZER?',
			content: '<h3>Electrical: </h3><p> The WAZER Main Unit only comes as one model and can be plugged into 110-220VAC power.  However, the Pump Unit comes as different models for the specific voltage region they are intended for. This setup guide is for both the 110 VAC 60hz WAZER (pump unit designated as V1.5A) and the 220 VAC 50hz WAZER (pump unit designated as V1.5B).  Please ensure you follow the appropriate electrical hookup instructions below given your model of WAZER.  You can verify your model by looking at the serial number tags on your Pump Unit.</p><ul><li><p> 110 VAC 60hz (V1.5A):  This version of WAZER has its Main Unit consume up to 2amps and its Pump Unit consume up to 15 amps.  Given traditional 110 VAC 60hz household and shop circuits you will be required to have one of the following for your machine:</p><ul><ul><li><p> 2x 15amp circuits (common household shop application) </p></li><li><p>1x 20amp circuit (common industrial and shop application)</p></li></ul></ul></li><li><p> 220 VAC 50hz (V1.5B):  This version of WAZER has its Main Unit consume up to 1 amp and its Pump Unit consume up to 10 amps.  Any circuit &gt;11amps will be sufficient. </p></li><li><p>  As is usually the case with high load motors, there is an inherent “in-rush current” that will momentarily exceed the stated steady-state run currents above for a fraction of a second.  The time associated with this “in-rush current” is very short and almost all household and commercial AC breakers are designed to handle this safely without tripping.  However, in the rare case that you run into trouble with your breaker tripping you may need to consult an electrician to have your system checked to handle on the order of 60amps for 150 milliseconds.</p></li></ul><h3> Water Supply: </h3><p>  Some areas are susceptible to dirty water or water main breaks. Please be sure to include a mechanical prefilter before the inlet to the pump to ensure water supply contaminants don’t go into the pump. We cannot be held accountable for damage caused to pump as a result of contaminated water supply.</p><ul><li><p>Flow Rate: Greater than 1gpm (3.8L/min). Most household and commercial water plumbing will meet this requirement. Typical bathroom faucets 1-3 gpm, kitchen faucets 2-4 gpm, and outdoor/shop hoses 3-6 gpm.</p></li><li><p>  Pressure: 35-125psi (0.24MPa – 0.8MPa). Most household and commercial water plumbing systems fall in this range. The higher in that range, the better for the Pump Box in terms of its longevity.</p></li><li><p> Temperature: 130°F (54°C). DO NOT use a hot water line for WAZER. Water Hardness: Less than 180 mg/L (10.5 gpg). </p></li><li><p>Water hardness is the biggest factor that affects the longevity of the components. Most municipal water in North America is below this figure, however we suggest you give your region a search if this is a concern. </p></li><li><p>WAZER should not be used in noisy electromagnetic environments.  Some appropriate environments include laboratories, household workshops, and most machine shops.  Heavy industrial environments that contain machinery or devices that induce electromagnetic interference on other adjacent devices (either on the same circuit or in the general proximtiy) should be avoided. </p></li></ul><h3>Water Drainage:</h3><p> Make sure that it does not take more than 30 feet (9m) of your Water Drain Hose to go from WAZER to the drain. Additionally, the drain location should be less than 4 feet (12mm) above WAZER. </p><h3>Desktop: </h3><ul><li><p> Sturdy and capable of holding over 400 lbs. (160kg) </p></li><li><p> Flat and level under load. The levelness is key for correct operation of WAZER. Maximum 1.5mm of height difference across entire cutting bed.</p></li><li><p>A clear area of 46” by 27” (1.2m by 0.7m) to allow for access. </p></li><li><p> Does not deteriorate when exposed to water. Because under some unforeseen scenarios, water may stream out from abrasive hopper and other places. </p><ul><ul><ul><li><p>Good choices: quartz, stainless steel, treated solid wood</p></li><li><p> Poor choices: plywood, unfinished MDF or particle board</p></li></ul></ul></ul></li><li><p><strong> NOTE:</strong> No desktop is necessary if you plan on using WAZER with the Stand Leg Accessory. However, please keep a  62” area above the floor footprint that you intend to place your WAZER on in order to allow access to it.</p></li><li><p><strong> Floorspace:</strong> The Pump Box is intended to be placed on the floor and requires 30” x 26” (0.8m x 0.7m) of space to allow for adequate airflow, cables, and hoses.</p></li></ul><p><strong><br></strong></p><h3>Ambient Air Temperature:&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</h3><p>40 - 100 F / 5 - 40 C  WAZER should never be operated outside of this range.</p><h3><strong>Space Around WAZER:</strong>&nbsp;</h3><p>Make sure to leave at least 12” (0.4m) of free space on the right and left sides of WAZER. On the left side of WAZER, you will need room to refill the Abrasive Hopper. On the right side, you may need access to the Control Panel.</p><h3><strong>Wet Area:</strong></h3><p>WAZER operates with abrasive and water. Though WAZER is enclosed, it is not a sealed system, and water and abrasive will inevitably leak on occasion. The floor surface should be water- resistant, slip proof and smooth enough for easy cleanup of spills. A nearby floor drain is also recommended. Water may stream out from under your abrasive hopper as an example of why this machine needs to be in a water tolerant area.</p><h3><strong>Proximity to Abrasive Storage:</strong></h3><p>Abrasive is heavy. If you will be cutting often make sure that the WAZER location is close to a storage area for Abrasive and Used Abrasive. Moving abrasive long distances can quickly become cumbersome. </p><h3><strong>Noise:</strong></h3><p>WAZER emits noise that would be disruptive in settings such as classrooms and offices. Make sure to place WAZER in a location where the noise level of traditional shop tools like drills and saws is acceptable.&nbsp;</p><p><br></p>'
		},
		{
			title: 'What is WAZER’s operating cost?',
			content: '<ul><li><p>Approx. $0.16 / min (When purchasing WAZER’s&nbsp;<a href="https://shop.wazer.com/products/abrasive">2,200 lb Abrasive Pallet</a>,&nbsp;<a href="http://shop.wazer.com/products/nozzle">Nozzle</a>&nbsp;and the<a href="https://shop.wazer.com/products/cut-bed/?variant=487021150225">&nbsp;Cut Bed 3-Pack</a>)</p></li><li><p>Approx. $0.51 / min of Abrasive consumed (When purchasing WAZER’s&nbsp;<a href="https://shop.wazer.com/products/abrasive">55 lb Abrasive Bucket</a>,&nbsp;<a href="http://shop.wazer.com/products/nozzle">Nozzle</a>&nbsp;and the&nbsp;<a href="https://shop.wazer.com/products/cut-bed/?variant=487021117457">Cut Bed 1-Pack</a>)</p></li></ul><p>These operating costs include Abrasive, Nozzle and Cut Bed replacement costs, which are the primary consumables associated with operating WAZER. They do not include the cost of water or electricity, which will be relatively minor in most North American municipalities.</p><p><br></p>'
		},
		{
			title: 'What are WAZER’s consumables?',
			content: '<p>Primarily the abrasive, the Cut Bed and the Nozzle.</p>'
		},
		{
			title: 'How loud is WAZER?',
			content: '<p>It is easy to hold a conversation next to WAZER while it is cutting. For example, we ran a&nbsp;<a href="https://www.youtube.com/watch?v=zQk-y98cjJY&amp;t=367s" target="_blank">live on-stage demo</a>&nbsp;while giving a presentation next to WAZER at the Techcrunch Disrupt SF event. We also did interview sessions with various publications while WAZER was running. We do not have a final decibel reading available for release, but we can compare it to some appliances you may be familiar with. For example, it is louder than a dishwasher but significantly quieter than a vacuum. It is also quieter than a grinder or bandsaw.</p>'
		},
		{
			title: 'Is WAZER safe?',
			content: '<p>WAZER is an industrial machine tool that can cut any material and therefore can cause injury. We have taken great measures and implemented extensive design features to eliminate hazards.&nbsp; A prime example, is a fault resistant door that will immediately shut off the waterjet cutting when opened. We have included extensive warnings, illustrations, and reminders to make sure you are aware of the associated hazards.&nbsp; For more details on WAZER’s safety features, please reference the<a href="https://wazer.squarespace.com/resources/user-manual/safety-and-compliance"> Safety and Compliance</a> section of the User Manual for details.</p>'
		},
		{
			title: 'What is the maximum material thickness that WAZER can cut through?',
			content: '<p>This depends on what material you’re cutting. The list in the&nbsp;<a href="/specs#materials-chart">Materials and Cut Rate</a>&nbsp;table shows the cut-able thicknesses for various materials. If you don’t see the material and thickness listed that you want to cut, email us at&nbsp;&nbsp;and we will test it.</p><p><br></p>'
		},
		{
			title: 'What is the accuracy of WAZER?',
			content: '<p>When determining accuracy, there are several factors to keep in mind, such as material type, material thickness, fixturing, cut rate and desired geometry. Overall, the cut produced by the water stream is roughly 0.047” (1.2mm) in width, which is also the smallest width you can cut. The Gantry is accurate when lining up hole patterns from part to part, but those holes may require post drilling to get sub 0.004” (0.1mm) accuracy.</p><p>A few expectations to keep in mind while using your WAZER is that:</p><ul><li><p>The thicker the material, the more likelihood of an increased tapered cut. This means the top of the cut width will be slightly smaller than the bottom of the cut.</p></li><li><p>If you cut a different material at the same cut quality and material thickness, you can expect to have different results.</p></li><li><p>The accuracy of the cutting stream at any given point in time will be dependent on the water shape and direction it is headed. Therefore you may have a different accuracy across different features of the same part.</p></li><li><p>Keep in mind, there are natural internal stresses that reside within most materials that causes them to flex and move during the cut process.How well you mount your material to the cut bed will determine the cut quality and accuracy.&nbsp;</p></li><li><p> If the material isn’t firmly fastened it will vibrate or shift position during the cut.&nbsp;&nbsp;</p></li></ul><p>The above instances are not unique to WAZER or waterjet cutting in general, which is why most tools and manufacturers can’t claim a consistent user specification.</p>'
		},
		{
			title: 'Does WAZER consume a lot of water?',
			content: '<p>No, WAZER uses less than 10-20% of the water than that used in a conventional shower head.</p><p></p>'
		}
	];
	var faqHtml = '';
	for (var i = 0; i < faqLists.length; i++) {
		faqHtml += '<div class="faq-item"><div class="faq-header"><h5 class="faq-title">'+faqLists[i].title+'</h5></div><div class="faq-content">'+faqLists[i].content+'</div></div>';
	}

	var demoBtn = '<a class="orange-btn" href="https://shop.wazer.com/pages/quote">Get A Quote</a>';

	$('.iv_wazer_lp .shogun-root').append('<div class="hero-section">\
		<div class="hero-content-top">\
			<h2 class="h1">Precise. Powerful. Compact.</h2>\
			<p>Wazer gives you the cutting power and precision you need in a size you have to see to believe.</p>'+demoBtn+'\
		</div>\
		<div class="shg-box shg-c shogun-lazyload" data-bgset="https://i.shgcdn.com/e0ad0a96-b6e0-47f4-94ad-025b0ccb8859/-/format/auto/-/preview/3000x3000/-/quality/lighter/" id="s-acd7d196-e0b4-4310-8dee-7d77b83a97f5"></div>\
		<div class="hero-content-bottom">\
			<h3>The World’s First Desktop Waterjet</h3>\
			<p>The Wazer waterjet cuts any hard or soft material with digital precision, bringing advanced cutting into any size shop and the fraction of the size and the price!</p>\
		</div>\
	</div>\
	<div class="features-section"><h3>Key Features</h3>'+featureHtml+'</div>\
	<div class="technical-section"><h2 class="h1">Technical Specs</h2><div class="shogun-accordion-wrapper">'+accordionHtml+'</div></div>\
	<div class="faq-section"><h2 class="h1">FAQ</h2><div class="faq-wrapper">'+faqHtml+'</div></div>');

	var wazerSection = $('.iv_wazer_lp .shogun-image-container ~ .shg-c > .shg-theme-text-content > h3').closest('.shg-row').parent();
	$('.iv_wazer_lp .faq-section').before(wazerSection);

	if($('.faq-item .faq-header').hasClass('active')){
		$('.faq-item .faq-header.active').closest('.faq-item').find('.faq-content').show();
	}
	$('.faq-item .faq-header').click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active').closest('.faq-item').find('.faq-content').slideUp(200);
		}else{
			$(this).addClass('active').closest('.faq-item').find('.faq-content').slideDown(200);
		}
	});

	// Bottom Fixed Button Hide-Show
	$('.iv_wazer_lp #PageContainer').append('<div class="sticky-bottom">'+demoBtn+'</div>');
	var ctaButton = $('.iv_wazer_lp .hero-content-top .orange-btn');
	var ctaButtonHeight = parseFloat(ctaButton.offset().top) + parseFloat(ctaButton.outerHeight());
	$(window).scroll(function(){
		if($(window).scrollTop() > ctaButtonHeight){
			$('.sticky-bottom').addClass('show');
		}else{
			$('.sticky-bottom').removeClass('show');
		}
	});
	$('.iv_wazer_lp').css('visibility','visible');
}
}