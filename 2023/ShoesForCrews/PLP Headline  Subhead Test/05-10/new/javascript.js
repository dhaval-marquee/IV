function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('subheadTest')) {
        bodyEle.classList.add('subheadTest');
		
		var getLength = setInterval(() => {
			if(document.querySelectorAll('.subheadTest h1.plpHdr').length > 0) {
				clearInterval(getLength);
				document.querySelector('.subheadTest h1.plpHdr').insertAdjacentHTML('afterend',`<div class="subhead"></div>`);

				const jsonData = {
					'/catalog/women-foodservice': {
						Subhead: {
							h4: "Sneakers don't cut it in the kitchen.",
							p: "Puddles, oil slicks, overactive ice machines. Avoid the most common hazards on the job by wearing the right slip-resistant shoes. Because spills will always happen, but falls don't have to.",
							h6: "Explore the latest colors and styles"
						}
					},
					'/catalog/men-foodservice': {
						Subhead: {
							h4: "Sneakers don't cut it in the kitchen.",
							p: "Puddles, oil slicks, overactive ice machines. Avoid the most common hazards on the job by wearing the right slip-resistant shoes. Because spills will always happen, but falls don't have to.",
							h6: "Explore the latest colors and styles"
						}
					},
					'/catalog/foodservice': {
						Subhead: {
							h4: "Sneakers don't cut it in the kitchen.",
							p: "Puddles, oil slicks, overactive ice machines. Avoid the most common hazards on the job by wearing the right slip-resistant shoes. Because spills will always happen, but falls don't have to.",
							h6: "Explore the latest colors and styles"
						}
					},
					'/catalog/women-industrial': {
						Subhead: {
							h4: "Tough and reliable. Like you.",
							p: "Personal protective equipment starts with your feet. <br>Construction sites put you at serious risk for injuries. Work boots that meet the safety requirements of your job site, including enhanced slip-resistant outsoles, are an essential first step.",
							h6: "Explore footwear that's built to work."
						}
					},
					'/catalog/men-industrial': {
						Subhead: {
							h4: "Tough and reliable. Like you.",
							p: "Personal protective equipment starts with your feet. <br>Construction sites put you at serious risk for injuries. Work boots that meet the safety requirements of your job site, including enhanced slip-resistant outsoles, are an essential first step.",
							h6: "Explore footwear that's built to work."
						}
					},
					'/catalog/industrial': {
						Subhead: {
							h4: "Tough and reliable. Like you.",
							p: "Personal protective equipment starts with your feet. <br>Construction sites put you at serious risk for injuries. Work boots that meet the safety requirements of your job site, including enhanced slip-resistant outsoles, are an essential first step.",
							h6: "Explore footwear that's built to work."
						}
					},
					'/catalog/women-healthcare': {
						Subhead: {
							h4: "You take care of patients. Let us take care of you.",
							p: "Shoes that keep you comfortable as you bring comfort to others. <br>You're not just on your feet for 12 hours straight, you're moving. Sneakers won't cut it. You need slip-resistant shoes that keep you on your feet, not in the hospital.",
							h6: "Explore shoes made for the front lines of health care."
						}
					},
					'/catalog/men-healthcare': {
						Subhead: {
							h4: "You take care of patients. Let us take care of you.",
							p: "Shoes that keep you comfortable as you bring comfort to others. <br>You're not just on your feet for 12 hours straight, you're moving. Sneakers won't cut it. You need slip-resistant shoes that keep you on your feet, not in the hospital.",
							h6: "Explore shoes made for the front lines of health care."
						}
					},
					'/catalog/healthcare': {
						Subhead: {
							h4: "You take care of patients. Let us take care of you.",
							p: "Shoes that keep you comfortable as you bring comfort to others. <br>You're not just on your feet for 12 hours straight, you're moving. Sneakers won't cut it. You need slip-resistant shoes that keep you on your feet, not in the hospital.",
							h6: "Explore shoes made for the front lines of health care."
						}
					},
					'/catalog/women-supermarkets': {
						Subhead: {
							h4: "Shoes for the unsung heroes of everyday life.",
							p: "Our essential workers deserve respect — and happy feet. <br>We know your job isn't easy: on your feet all shift, helping customers, lifting and unloading boxes — you name it, you do it. You deserve shoes that make you feel firmly on your feet and keep you safe.",
							h6: "Explore comfortable, slip-resistant shoes designed for grocery stores."
						}
					},
					'/catalog/men-supermarkets': {
						Subhead: {
							h4: "Shoes for the unsung heroes of everyday life.",
							p: "Our essential workers deserve respect — and happy feet. <br>We know your job isn't easy: on your feet all shift, helping customers, lifting and unloading boxes — you name it, you do it. You deserve shoes that make you feel firmly on your feet and keep you safe.",
							h6: "Explore comfortable, slip-resistant shoes designed for grocery stores."
						}
					},
					'/catalog/supermarkets': {
						Subhead: {
							h4: "Shoes for the unsung heroes of everyday life.",
							p: "Our essential workers deserve respect — and happy feet. <br>We know your job isn't easy: on your feet all shift, helping customers, lifting and unloading boxes — you name it, you do it. You deserve shoes that make you feel firmly on your feet and keep you safe.",
							h6: "Explore comfortable, slip-resistant shoes designed for grocery stores."
						}
					},
					'/catalog/women-schools': {
						Subhead: {
							h4: `Teachers, "lunch ladies," janitors — school work is hard work!`,
							p: "Let us take care of you, while you take care of them. <br>You're taking care of kids all day, so you need a shoe that takes care of you. Shoes that are easy to clean and slip resistant,so you can keep up with whatever the day brings.",
							h6: `Find your next pair of "school shoes." `
						}
					},
					'/catalog/men-schools': {
						Subhead: {
							h4: `Teachers, "lunch ladies," janitors — school work is hard work!`,
							p: "Let us take care of you, while you take care of them. <br>You're taking care of kids all day, so you need a shoe that takes care of you. Shoes that are easy to clean and slip resistant,so you can keep up with whatever the day brings.",
							h6: `Find your next pair of "school shoes." `
						}
					},
					'/catalog/schools': {
						Subhead: {
							h4: `Teachers, "lunch ladies," janitors — school work is hard work!`,
							p: "Let us take care of you, while you take care of them. <br>You're taking care of kids all day, so you need a shoe that takes care of you. Shoes that are easy to clean and slip resistant,so you can keep up with whatever the day brings.",
							h6: `Find your next pair of "school shoes." `
						}
					},
					'/catalog/women-hospitality': {
						Subhead: {
							h4: "You support your guests. We'll support your feet.",
							p: "Because bad shoes are bad for business. <br>Keeping guests happy is a full-time job. Literally. Give your hardworking feet the VIP treatment they deserve with well-cushioned, supportive shoes with slip-resistant outsoles. Because those floors were just waxed!",
							h6: "Smiling is easier when your feet are happy. Find your shoes!"
						}
					},
					'/catalog/men-hospitality': {
						Subhead: {
							h4: "You support your guests. We'll support your feet.",
							p: "Because bad shoes are bad for business. <br>Keeping guests happy is a full-time job. Literally. Give your hardworking feet the VIP treatment they deserve with well-cushioned, supportive shoes with slip-resistant outsoles. Because those floors were just waxed!",
							h6: "Smiling is easier when your feet are happy. Find your shoes!"
						}
					},
					'/catalog/hospitality': {
						Subhead: {
							h4: "You support your guests. We'll support your feet.",
							p: "Because bad shoes are bad for business. <br>Keeping guests happy is a full-time job. Literally. Give your hardworking feet the VIP treatment they deserve with well-cushioned, supportive shoes with slip-resistant outsoles. Because those floors were just waxed!",
							h6: "Smiling is easier when your feet are happy. Find your shoes!"
						}
					},
					'/catalog/law-enforcement-all': {
						Subhead: {
							h4: "You make the world a better place.",
							p: "We make better footwear to make your surroundings a little bit easier. <br>We're committed to building shoes that work as hard as you. Because when you're out changing the world, you need all the support you can get.",
							h6: "Find shoes you can trust to meet your high standards."
						}
					},
					'/catalog/public-education-shoes-all': {
						Subhead: {
							h4: "You make the world a better place.",
							p: "We make better footwear to make your surroundings a little bit easier. <br>We're committed to building shoes that work as hard as you. Because when you're out changing the world, you need all the support you can get.",
							h6: "Find shoes you can trust to meet your high standards."
						}
					},
					'/catalog/public-works-utilities-shoes-all': {
						Subhead: {
							h4: "You make the world a better place.",
							p: "We make better footwear to make your surroundings a little bit easier. <br>We're committed to building shoes that work as hard as you. Because when you're out changing the world, you need all the support you can get.",
							h6: "Find shoes you can trust to meet your high standards."
						}
					}
					
				}
		
				var html="";
				var ele = jsonData[window.location.pathname];
				Object.keys(ele).forEach(key => {
					console.log(ele[key] + "&&"+ key)
					html +="<div class='catalog'><h4>"+ele[key].h4+"</h4><p>"+ele[key].p+"</p><h6>"+ele[key].h6+"</h6></div>";
				});
				document.querySelectorAll('.subhead').forEach(function(listitem){ 
                    listitem.innerHTML = html;
				});

			}
		},500);

	}
}
loadTestCode(); 

