function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('adding_Features')) {
        bodyEle.classList.add('adding_Features');
        



		var getLength = setInterval(() => {
			if(document.querySelectorAll('div[class*="paypalSection"]').length && document.querySelectorAll('div[class*="ExpressCheckout_expressCheckout"]').length) {
				clearInterval(getLength);

				document.querySelector('.merce-PDP-product-photo-carousel-container').insertAdjacentHTML('afterend',`<div class="top_Features des_tab_show">
					<div class="container">
						<div class="item_wrap">
							<h2>Top Features</h2>
							<ul id="availableProduct"></ul>
						</div>
					</div>
				</div>`);

				document.querySelector('div[class*="AccordionPanel_accordionPanel"]').parentNode.insertAdjacentHTML('beforebegin',`<div class="top_Features mobile_show">
					<div class="container">
						<div class="item_wrap">
							<h2>Top Features</h2>
							<ul id="availableProduct"></ul>
						</div>
					</div>
				</div>`);

				const jsonData = {
					'/product/22752-tigon' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/TRIPGUARD.png",
							title: 'TRIPGUARD',
							alt: "TRIPGUARD"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/TRIPGUARD.png",
							title: 'Breathable Mesh',
							alt: "Breathable Mesh"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						}
					},
					'/product/22004-new-balance-arishi-v3' : {
						product1 : {
							img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1688188381/shoesforcrews/Adding%20Features%20to%20PDP/Slip-Resistant.png",
							title: '222222222.11111',
							alt: "img"
						},
						product2 : {
							img: "https://res.cloudinary.com/ignite-visibility/image/upload/v1688188381/shoesforcrews/Adding%20Features%20to%20PDP/TRIPGUARD.png",
							title: '2222.222222',
							alt: "img"
						}
					}
				}
		
				var html="";
				var ele = jsonData[window.location.pathname];
				Object.keys(ele).forEach(key => {
					console.log(ele[key] + "&&"+ key)
					html +="<li><img src="+ele[key].img+" alt="+ele[key].alt+" ><h3>"+ele[key].title+"</h3></li>";
				});
				document.getElementById('availableProduct').innerHTML = html;
				
			}
		},500);
	}
}
loadTestCode(); 