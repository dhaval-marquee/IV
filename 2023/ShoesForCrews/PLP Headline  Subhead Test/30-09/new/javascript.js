function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('subheadTest')) {
        bodyEle.classList.add('subheadTest');
		

		
		var getLength = setInterval(() => {
			if(document.querySelectorAll('.subheadTest h1.plpHdr').length > 0) {
				clearInterval(getLength);
				document.querySelector('.subheadTest h1.plpHdr').insertAdjacentHTML('afterend',`<div class="subhead" style="max-width: 860px; width: 100%; margin: 0 auto;"></div>`);


				const jsonData = {
					'/catalog/women-foodservice': {
						Subhead: {
							p1: "Sneakers don't cut it in the kitchen.",
							p2: "Puddles, oil slicks, overactive ice machines. Avoid the most common hazards on the job by wearing the right slip-resistant shoes. Because spills will always happen, but falls don't have to.",
							p3: "Explore the latest colors and styles"
						}
					},
					'/catalog/men-foodservice': {
						Subhead: {
							p1: "Sneakers don't cut it in the kitchen.",
							p2: "Puddles, oil slicks, overactive ice machines. Avoid the most common hazards on the job by wearing the right slip-resistant shoes. Because spills will always happen, but falls don't have to.",
							p3: "Explore the latest colors and styles"
						}
					},
					'/catalog/foodservice': {
						Subhead: {
							p1: "Sneakers don't cut it in the kitchen.",
							p2: "Puddles, oil slicks, overactive ice machines. Avoid the most common hazards on the job by wearing the right slip-resistant shoes. Because spills will always happen, but falls don't have to.",
							p3: "Explore the latest colors and styles"
						}
					},
					'/catalog/women-industrial': {
						Subhead: {
							p1: "Tough and reliable. Like you.",
							p2: "Personal protective equipment starts with your feet. <br>Construction sites put you at serious risk for injuries. Work boots that meet the safety requirements of your job site, including enhanced slip-resistant outsoles, are an essential first step.",
							p3: "Explore footwear that's built to work."
						}
					},
					'/catalog/men-industrial': {
						Subhead: {
							p1: "Tough and reliable. Like you.",
							p2: "Personal protective equipment starts with your feet. <br>Construction sites put you at serious risk for injuries. Work boots that meet the safety requirements of your job site, including enhanced slip-resistant outsoles, are an essential first step.",
							p3: "Explore footwear that's built to work."
						}
					},
					'/catalog/industrial': {
						Subhead: {
							p1: "Tough and reliable. Like you.",
							p2: "Personal protective equipment starts with your feet. <br>Construction sites put you at serious risk for injuries. Work boots that meet the safety requirements of your job site, including enhanced slip-resistant outsoles, are an essential first step.",
							p3: "Explore footwear that's built to work."
						}
					},
					'/catalog/women-healthcare': {
						Subhead: {
							p1: "You take care of patients. Let us take care of you.",
							p2: "Shoes that keep you comfortable as you bring comfort to others. <br>You're not just on your feet for 12 hours straight, you're moving. Sneakers won't cut it. You need slip-resistant shoes that keep you on your feet, not in the hospital.",
							p3: "Explore shoes made for the front lines of health care."
						}
					},
					'/catalog/men-healthcare': {
						Subhead: {
							p1: "You take care of patients. Let us take care of you.",
							p2: "Shoes that keep you comfortable as you bring comfort to others. <br>You're not just on your feet for 12 hours straight, you're moving. Sneakers won't cut it. You need slip-resistant shoes that keep you on your feet, not in the hospital.",
							p3: "Explore shoes made for the front lines of health care."
						}
					},
					'/catalog/healthcare': {
						Subhead: {
							p1: "You take care of patients. Let us take care of you.",
							p2: "Shoes that keep you comfortable as you bring comfort to others. <br>You're not just on your feet for 12 hours straight, you're moving. Sneakers won't cut it. You need slip-resistant shoes that keep you on your feet, not in the hospital.",
							p3: "Explore shoes made for the front lines of health care."
						}
					},
					'/catalog/women-supermarkets': {
						Subhead: {
							p1: "Shoes for the unsung heroes of everyday life.",
							p2: "Our essential workers deserve respect — and happy feet. <br>We know your job isn't easy: on your feet all shift, helping customers, lifting and unloading boxes — you name it, you do it. You deserve shoes that make you feel firmly on your feet and keep you safe.",
							p3: "Explore comfortable, slip-resistant shoes designed for grocery stores."
						}
					},
					'/catalog/men-supermarkets': {
						Subhead: {
							p1: "Shoes for the unsung heroes of everyday life.",
							p2: "Our essential workers deserve respect — and happy feet. <br>We know your job isn't easy: on your feet all shift, helping customers, lifting and unloading boxes — you name it, you do it. You deserve shoes that make you feel firmly on your feet and keep you safe.",
							p3: "Explore comfortable, slip-resistant shoes designed for grocery stores."
						}
					},
					'/catalog/supermarkets': {
						Subhead: {
							p1: "Shoes for the unsung heroes of everyday life.",
							p2: "Our essential workers deserve respect — and happy feet. <br>We know your job isn't easy: on your feet all shift, helping customers, lifting and unloading boxes — you name it, you do it. You deserve shoes that make you feel firmly on your feet and keep you safe.",
							p3: "Explore comfortable, slip-resistant shoes designed for grocery stores."
						}
					},
					'/catalog/women-schools': {
						Subhead: {
							p1: `Teachers, "lunch ladies," janitors — school work is hard work!`,
							p2: "Let us take care of you, while you take care of them. <br>You're taking care of kids all day, so you need a shoe that takes care of you. Shoes that are easy to clean and slip resistant,so you can keep up with whatever the day brings.",
							p3: `Find your next pair of "school shoes." `
						}
					},
					'/catalog/men-schools': {
						Subhead: {
							p1: `Teachers, "lunch ladies," janitors — school work is hard work!`,
							p2: "Let us take care of you, while you take care of them. <br>You're taking care of kids all day, so you need a shoe that takes care of you. Shoes that are easy to clean and slip resistant,so you can keep up with whatever the day brings.",
							p3: `Find your next pair of "school shoes." `
						}
					},
					'/catalog/schools': {
						Subhead: {
							p1: `Teachers, "lunch ladies," janitors — school work is hard work!`,
							p2: "Let us take care of you, while you take care of them. <br>You're taking care of kids all day, so you need a shoe that takes care of you. Shoes that are easy to clean and slip resistant,so you can keep up with whatever the day brings.",
							p3: `Find your next pair of "school shoes." `
						}
					},
					'/catalog/women-hospitality': {
						Subhead: {
							p1: "You support your guests. We'll support your feet.",
							p2: "Because bad shoes are bad for business. <br>Keeping guests happy is a full-time job. Literally. Give your hardworking feet the VIP treatment they deserve with well-cushioned, supportive shoes with slip-resistant outsoles. Because those floors were just waxed!",
							p3: "Smiling is easier when your feet are happy. Find your shoes!"
						}
					},
					'/catalog/men-hospitality': {
						Subhead: {
							p1: "You support your guests. We'll support your feet.",
							p2: "Because bad shoes are bad for business. <br>Keeping guests happy is a full-time job. Literally. Give your hardworking feet the VIP treatment they deserve with well-cushioned, supportive shoes with slip-resistant outsoles. Because those floors were just waxed!",
							p3: "Smiling is easier when your feet are happy. Find your shoes!"
						}
					},
					'/catalog/hospitality': {
						Subhead: {
							p1: "You support your guests. We'll support your feet.",
							p2: "Because bad shoes are bad for business. <br>Keeping guests happy is a full-time job. Literally. Give your hardworking feet the VIP treatment they deserve with well-cushioned, supportive shoes with slip-resistant outsoles. Because those floors were just waxed!",
							p3: "Smiling is easier when your feet are happy. Find your shoes!"
						}
					},
					'/catalog/law-enforcement-all': {
						Subhead: {
							p1: "You make the world a better place.",
							p2: "We make better footwear to make your surroundings a little bit easier. <br>We're committed to building shoes that work as hard as you. Because when you're out changing the world, you need all the support you can get.",
							p3: "Find shoes you can trust to meet your high standards."
						}
					},
					'/catalog/public-education-shoes-all': {
						Subhead: {
							p1: "You make the world a better place.",
							p2: "We make better footwear to make your surroundings a little bit easier. <br>We're committed to building shoes that work as hard as you. Because when you're out changing the world, you need all the support you can get.",
							p3: "Find shoes you can trust to meet your high standards."
						}
					},
					'/catalog/public-works-utilities-shoes-all': {
						Subhead: {
							p1: "You make the world a better place.",
							p2: "We make better footwear to make your surroundings a little bit easier. <br>We're committed to building shoes that work as hard as you. Because when you're out changing the world, you need all the support you can get.",
							p3: "Find shoes you can trust to meet your high standards."
						}
					}
					
				}
		
				var html="";
				var ele = jsonData[window.location.pathname];
				Object.keys(ele).forEach(key => {
					console.log(ele[key] + "&&"+ key)
					html +="<div style='margin:25px 10px; text-align: center'><p style='font-size:20px; font-weight:700;'>"+ele[key].p1+"</p><p style='font-size:14px;'>"+ele[key].p2+"</p><p style='font-size:14px; font-weight:700;'>"+ele[key].p3+"</p></div>";
				});
				document.querySelectorAll('.subhead').forEach(function(listitem){ 
                    listitem.innerHTML = html;
				});

			}
		},500);

	}
}
loadTestCode(); 

