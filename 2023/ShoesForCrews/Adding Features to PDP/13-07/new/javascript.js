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
							<ul class="availableProduct"></ul>
						</div>
					</div>
				</div>`);

				document.querySelector('div[class*="AccordionPanel_accordionPanel"]').parentNode.insertAdjacentHTML('beforebegin',`<div class="top_Features mobile_show">
					<div class="container">
						<div class="item_wrap">
							<h2>Top Features</h2>
							<ul class="availableProduct"></ul>	
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
							title: 'Trip Guard',
							alt: "Trip Guard"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688731350/shoesforcrews/Adding_Features_to_PDP/Extra_Cushion.jpg",
							title: 'Extra Cushion',
							alt: "Extra Cushion"
						}
					},
					'/product/22101-tigon-ii' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/TRIPGUARD.png",
							title: 'Trip Guard',
							alt: "Trip Guard"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688731350/shoesforcrews/Adding_Features_to_PDP/Extra_Cushion.jpg",
							title: 'Extra Cushion',
							alt: "Extra Cushion"
						}
					},
					'/product/42160-tigon-ii' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/TRIPGUARD.png",
							title: 'Trip Guard',
							alt: "Trip Guard"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688731350/shoesforcrews/Adding_Features_to_PDP/Extra_Cushion.jpg",
							title: 'Extra Cushion',
							alt: "Extra Cushion"
						}
					},
					'/product/22002-new-balance-arishi-v3' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/TRIPGUARD.png",
							title: 'Trip Guard',
							alt: "Trip Guard"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688731351/shoesforcrews/Adding_Features_to_PDP/Breathable.jpg",
							title: 'Breathable',
							alt: "Breathable"
						}
					},
					'/product/22004-new-balance-arishi-v3' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/TRIPGUARD.png",
							title: 'Trip Guard',
							alt: "Trip Guard"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688731351/shoesforcrews/Adding_Features_to_PDP/Breathable.jpg",
							title: 'Breathable',
							alt: "Breathable"
						}
					},
					'/product/22151-new-balance-arishi-v3' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/TRIPGUARD.png",
							title: 'Trip Guard',
							alt: "Trip Guard"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688731351/shoesforcrews/Adding_Features_to_PDP/Breathable.jpg",
							title: 'Breathable',
							alt: "Breathable"
						}
					},
					'/product/22152-new-balance-arishi-v3' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/TRIPGUARD.png",
							title: 'Trip Guard',
							alt: "Trip Guard"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688731351/shoesforcrews/Adding_Features_to_PDP/Breathable.jpg",
							title: 'Breathable',
							alt: "Breathable"
						}
					},
					'/product/22146-everlight' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688465999/shoesforcrews/Adding_Features_to_PDP/SpillGuard.png",
							title: 'Spill Guard',
							alt: "Spill Guard"
						}
					},
					'/product/22269-everlight' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688465999/shoesforcrews/Adding_Features_to_PDP/SpillGuard.png",
							title: 'Spill Guard',
							alt: "Spill Guard"
						}
					},
					'/product/22253-everlight' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688465999/shoesforcrews/Adding_Features_to_PDP/SpillGuard.png",
							title: 'Spill Guard',
							alt: "Spill Guard"
						}
					},
					'/product/22234-everlight' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688465999/shoesforcrews/Adding_Features_to_PDP/SpillGuard.png",
							title: 'Spill Guard',
							alt: "Spill Guard"
						}
					},
					'/product/22233-everlight' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688465999/shoesforcrews/Adding_Features_to_PDP/SpillGuard.png",
							title: 'Spill Guard',
							alt: "Spill Guard"
						}
					},
					'/product/22235-everlight' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688465999/shoesforcrews/Adding_Features_to_PDP/SpillGuard.png",
							title: 'Spill Guard',
							alt: "Spill Guard"
						}
					},
					'/product/22123-geo' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/TRIPGUARD.png",
							title: 'Trip Guard',
							alt: "Trip Guard"
						}
					},
					'/product/22149-everlight' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688465999/shoesforcrews/Adding_Features_to_PDP/SpillGuard.png",
							title: 'Spill Guard',
							alt: "Spill Guard"
						}
					},
					'/product/22248-everlight' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688465999/shoesforcrews/Adding_Features_to_PDP/SpillGuard.png",
							title: 'Spill Guard',
							alt: "Spill Guard"
						}
					},
					'/product/22228-everlight' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688465999/shoesforcrews/Adding_Features_to_PDP/SpillGuard.png",
							title: 'Spill Guard',
							alt: "Spill Guard"
						}
					},
					'/product/22201-gia' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688468484/shoesforcrews/Adding_Features_to_PDP/Revive.png",
							title: 'Revive',
							alt: "Revive"
						}
					},
					'/product/22202-gia' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688468484/shoesforcrews/Adding_Features_to_PDP/Revive.png",
							title: 'Revive',
							alt: "Revive"
						}
					},
					'/product/22322-gia' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688468484/shoesforcrews/Adding_Features_to_PDP/Revive.png",
							title: 'Revive',
							alt: "Revive"
						}
					},
					'/product/22263-gia' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688468484/shoesforcrews/Adding_Features_to_PDP/Revive.png",
							title: 'Revive',
							alt: "Revive"
						}
					},
					'/product/64133-bullfrog-pro-ii-soft-toe' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688468484/shoesforcrews/Adding_Features_to_PDP/Revive.png",
							title: 'Revive',
							alt: "Revive"
						}
					},
					'/product/62212-bullfrog-pro-ii-soft-toe' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688468484/shoesforcrews/Adding_Features_to_PDP/Revive.png",
							title: 'Revive',
							alt: "Revive"
						}
					},
					'/product/77632-dewalt-plasma-steel-toe' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469511/shoesforcrews/Adding_Features_to_PDP/Electrical_Hazzard.png",
							title: 'Electrical Hazzard',
							alt: "Electrical Hazzard"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/EasyClean.png",
							title: 'Easy Clean',
							alt: "Easy Clean"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469363/shoesforcrews/Adding_Features_to_PDP/Safety_Toe.png",
							title: 'Safety Toe',
							alt: "Safety Toe"
						}
					},
					'/product/77282-redrock-composite-toe' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469511/shoesforcrews/Adding_Features_to_PDP/Electrical_Hazzard.png",
							title: 'Electrical Hazzard',
							alt: "Electrical Hazzard"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469860/shoesforcrews/Adding_Features_to_PDP/Galdiator.png",
							title: 'Galdiator',
							alt: "Galdiator"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469363/shoesforcrews/Adding_Features_to_PDP/Safety_Toe.png",
							title: 'Safety Toe',
							alt: "Safety Toe"
						}
					},
					'/product/72309-redrock-6-inch-composite-toe-waterproof' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469511/shoesforcrews/Adding_Features_to_PDP/Electrical_Hazzard.png",
							title: 'Electrical Hazzard',
							alt: "Electrical Hazzard"
						},
						product3 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469860/shoesforcrews/Adding_Features_to_PDP/Galdiator.png",
							title: 'Galdiator',
							alt: "Galdiator"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469363/shoesforcrews/Adding_Features_to_PDP/Safety_Toe.png",
							title: 'Safety Toe',
							alt: "Safety Toe"
						}
					},
					'/product/72212-puma-safety-airtwist-low-composite-toe' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469511/shoesforcrews/Adding_Features_to_PDP/Electrical_Hazzard.png",
							title: 'Electrical Hazzard',
							alt: "Electrical Hazzard"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469363/shoesforcrews/Adding_Features_to_PDP/Safety_Toe.png",
							title: 'Safety Toe',
							alt: "Safety Toe"
						},
						product5 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						}
					},
					'/product/72214-puma-safety-airtwist-low-composite-toe' : {
						product1 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688193292/shoesforcrews/Adding_Features_to_PDP/Slip-Resistant.png",
							title: 'Slip-Resistant',
							alt: "Slip Resistant"
						},
						product2 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469511/shoesforcrews/Adding_Features_to_PDP/Electrical_Hazzard.png",
							title: 'Electrical Hazzard',
							alt: "Electrical Hazzard"
						},
						product4 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688469363/shoesforcrews/Adding_Features_to_PDP/Safety_Toe.png",
							title: 'Safety Toe',
							alt: "Safety Toe"
						},
						product5 : {
							img: "//res.cloudinary.com/ignite-visibility/image/upload/v1688198778/shoesforcrews/Adding_Features_to_PDP/Water_Resistant.png",
							title: 'Water Resistant',
							alt: "Water Resistant"
						}
					}
					
				}
		
				var html="";
				var ele = jsonData[window.location.pathname];
				Object.keys(ele).forEach(key => {
					console.log(ele[key] + "&&"+ key)
					html +="<li><img src="+ele[key].img+" alt="+ele[key].alt+" ><h3>"+ele[key].title+"</h3></li>";
				});
				document.querySelectorAll('.availableProduct').forEach(function(listitem){ 
                    listitem.innerHTML = html;
				});
				
				if(document.querySelectorAll(".des_tab_show .item_wrap ul li").length == 4) {
					
					document.querySelector(".item_wrap ul").classList.add("no_wrap");
				}

				document.querySelectorAll('div[class*="AccordionPanel_accordionPanel"] div > h4')[0].textContent = "All Features"
				
			}
		},500);
	}
}
loadTestCode(); 