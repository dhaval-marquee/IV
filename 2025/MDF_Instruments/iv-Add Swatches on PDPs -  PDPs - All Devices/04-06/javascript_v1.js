var script1 = document.createElement('script');
script1.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/js/splide.min.js';
document.querySelector("body").appendChild(script1);

var styles = document.createElement('link');
styles.setAttribute('rel', 'stylesheet');
styles.setAttribute('href', 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide.min.css');
document.getElementsByTagName("head")[0].appendChild(styles);

var styles1 = document.createElement('link');
styles1.setAttribute('rel', 'stylesheet');
styles1.setAttribute('href', 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/themes/splide-default.min.css');
document.getElementsByTagName("head")[0].appendChild(styles1);

var styles2 = document.createElement('link');
styles2.setAttribute('rel', 'stylesheet');
styles2.setAttribute('href', 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.0.1/dist/css/splide-core.min.css');
document.getElementsByTagName("head")[0].appendChild(styles2);

function loadSwatches() {
    const currentPath = window.location.pathname;

    // Define all swatches grouped by slug/category
    const allSwatches = {
        silver: {
            match: [
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-black",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-pink",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-pastel-purple",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-navy-blue",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-fuchsia",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-orange",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-purple",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-white",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-aqua-green",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-bright-blue",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-royal-blue",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-raspberry",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-burgundy",
                "/products/mdf-md-one-stainless-steel-stethoscope-blackout-black"
            ],
            swatches: [
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-black-main.jpg?v=1737626613&width=600",
                        "alt": "Stethoscope MDF Instruments MD One NoirNoir Black"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-pink",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-pink-main.jpg?v=1737739224&width=600",
                        "alt": "Adult Stethoscope MDF Instruments MD One Cosmo Light Pink"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-pastel-purple",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-pastel-purple-main.jpg?v=1737628237&width=600",
                        "alt": "Adult Stethoscope MDF Instruments MD One Cher Light Purple"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-navy-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-navy-blue-main.jpg?v=1737628051&width=600",
                        "alt": "Adult Stethoscope MDF Instruments MD One Abyss Navy Blue"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-fuchsia",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-bright-pink-main.jpg?v=1737627806&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One ThinkPink Bright Pink"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-orange",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-orange-main.jpg?v=1737628159&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One Vitamin Orange"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-purple",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-purple-main.jpg?v=1737628659&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One Purple Rain"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-white-main.jpg?v=1737628899&width=800",
                        "alt": "MD One® Adult Stethoscope - White - MDF Instruments Official Store - No - Stethoscope"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-aqua-green",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-green-main.jpg?v=1737627942&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One Ribbit Green"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-bright-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-pastel-blue-main.jpg?v=1737627707&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One S.Swell Bright Blue"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-royal-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-royal-blue-main.jpg?v=1737628814&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One Maliblu Royal Blue"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-raspberry",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-raspberry-main.jpg?v=1737628752&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One RedEnv Raspberry Pink"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-burgundy",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-burgundy-main.jpg?v=1737627874&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One Napa Burgundy"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-blackout-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-black-blackout-main.jpg?v=1737627166&width=800",
                        "alt": "Stethoscope MDF Instruments MD One BlackOut All Black"
                    }
                }
            ]
        },
        roseGold: {
            match: [
                "/products/mdf-md-one-stainless-steel-stethoscope-rose-gold-white",
                "/products/mdf-md-one-stainless-steel-stethoscope-rose-gold-black"
            ],
            swatches: [
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-rose-gold-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-white-rose-gold-main.jpg?v=1737629115&width=800",
                        "alt": "Rose Gold Stethoscope MDF Instruments MD One BlaBlanc White"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-rose-gold-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-black-rose-gold-main.jpg?v=1737627505&width=800",
                        "alt": "Rose Gold Stethoscope MDF Instruments MD One NoirNoir Black"
                    }
                }
            ]
        },
        whiteOut: {
            match: [
                "/products/md-one-stainless-steel-adult-whiteout-white",
                "/products/md-one-stainless-steel-adult-whiteout-black"
            ],
            swatches: [
                {
                    "url": "/products/md-one-stainless-steel-adult-whiteout-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-white-whiteout-main.jpg?v=1737629180&width=800",
                        "alt": "Stethoscope MDF Instruments MD One® Adult Stainless Steel White WhiteOut"
                    }
                },
                {
                    "url": "/products/md-one-stainless-steel-adult-whiteout-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-black-whiteout-main.jpg?v=1737627576&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One WhiteOut NoirNoir Black"
                    }
                }
            ]
        },
        stillGold: {
            match: [
                "/products/mdf-md-one-stainless-steel-stethoscope-k-gold-black",
                "/products/mdf-md-one-stainless-steel-stethoscope-k-gold-white"
            ],
            swatches: [
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-k-gold-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-black-k-gold-main.jpg?v=1737627364&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One NoirNoir Black and Gold"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-k-gold-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-white-k-gold-main.jpg?v=1737628974&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Stainless Steel Gold and White"
                    }
                }
            ]
        },
        pediatricSilver: {
            match: [
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-pink-pediatric",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-purple-pediatric",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-pastel-blue-pediatric",
                "/products/md-one-pediatric-stethoscope-black",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-navy-blue-infant",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-green-pediatric",
                "/products/mdf-md-one-stainless-steel-stethoscope-blackout-black-pediatric",
            ],
            swatches: [
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-pink-pediatric",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-pediatric-stethoscope-light-pink-main.jpg?v=1737632378&width=800",
                        "alt": "MD One® Pediatric Stethoscope - Light Pink"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-purple-pediatric",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-pediatric-stethoscope-purple-main.jpg?v=1737632378&width=800",
                        "alt": "MD One® Pediatric Stethoscope - Purple"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-pastel-blue-pediatric",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-pediatric-stethoscope-pastel-blue-main.jpg?v=1740590404&width=800",
                        "alt": "MD One® Pediatric Stethoscope - Pastel Blue"
                    }
                },
                {
                    "url": "/products/md-one-pediatric-stethoscope-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-pediatric-stethoscope-black-main.jpg?v=1740590404&width=800",
                        "alt": "MD One® Pediatric Stethoscope - Black"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-navy-blue-infant",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-pediatric-stethoscope-navy-blue-main.jpg?v=1741187956&width=800",
                        "alt": "MD One® Pediatric Stethoscope - Navy Blue"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-green-pediatric",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-md-one-r-pediatric-stethoscope-green.jpg?v=1645560105&width=800",
                        "alt": "MD One® Pediatric Stethoscope - Green - MDF Instruments Official Store - Stethoscope"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-blackout-black-pediatric",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-pediatric-stethoscope-black-blackout-main.jpg?v=1737632378&width=800",
                        "alt": "MD One® Pediatric Stethoscope - Black/BlackOut"
                    }
                }
            ]
        },
        pediatricRoseGold: {
            match: [
                "/products/mdf-md-one-stainless-steel-stethoscope-rose-gold-white-pediatric",
                "/products/mdf-md-one-stainless-steel-stethoscope-rose-gold-black-pediatric",
            ],
            swatches: [
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-rose-gold-white-pediatric",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-pediatric-stethoscope-white-rose-gold-main.jpg?v=1737632379&width=600",
                        "alt": "MD One® Pediatric Stethoscope - White/Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-rose-gold-black-pediatric",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-pediatric-stethoscope-black-rose-gold-main.jpg?v=1737632378&width=800",
                        "alt": "MD One® Pediatric Stethoscope - Black/Rose Gold"
                    }
                },
            ]
        },
        steelInfantSilver: {
            match: [
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-pastel-blue-infant",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-purple-infant",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-pink-infant",
                "/products/mdf-md-one-stainless-steel-green-infant-stethoscope",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-black-infant",
                "/products/mdf-md-one-stainless-steel-stethoscope-blackout-black-infant",
            ],
            swatches: [
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-pastel-blue-infant",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-infant-stethoscope-pastel-blue-main.jpg?v=1737632999&width=800",
                        "alt": "MD One® Infant Stethoscope - Pastel Blue"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-purple-infant",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-infant-stethoscope-purple-main.jpg?v=1737632999&width=800",
                        "alt": "MD One® Infant Stethoscope - Purple"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-pink-infant",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-infant-stethoscope-light-pink-main.jpg?v=1737632998&width=800",
                        "alt": "MD One® Infant Stethoscope - Light Pink"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-green-infant-stethoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-infant-stethoscope-green-main.jpg?v=1740642931&width=800",
                        "alt": "MD One® Infant Stethoscope - Green"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-black-infant",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-infant-stethoscope-black-main.jpg?v=1741187956&width=800",
                        "alt": "MD One® Infant Stethoscope - Black"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-blackout-black-infant",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-infant-stethoscope-black-blackout-main.jpg?v=1737632998&width=800",
                        "alt": "MD One® Infant Stethoscope - Black/Blackout"
                    }
                },
            ]
        },
        epochSilver: {
            match: [
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-sunflower",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-paws",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-tie-dye",
                "/products/mdf-md-one-stainless-steel-stethoscope-silver-navy-blue",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-black",
                "/products/md-one-epoch-titanium-adult-purple-pastel-stethoscope",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-purple",
                "/products/md-one-epoch-titanium-adult-stethoscope-pink",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-orange",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-raspberry",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-emerald-green",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silverr-fuchsia",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-white",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-bright-blue",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silverr-burgundy",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-royal-blue",
                "/products/md-one-epoch-titanium-adult-stethoscope-usa",
            ],
            swatches: [
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-sunflower",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-sunflower-main.jpg?v=1737547034&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Flower Print Sunflower"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-paws",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-paw-print-main.jpg?v=1737546723&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Paw Print"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-tie-dye",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-tie-dye-main.jpg?v=1737547116&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Tie Dye Print"
                    }
                },
                {
                    "url": "/products/mdf-md-one-stainless-steel-stethoscope-silver-navy-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-adult-stethoscope-navy-blue-main.jpg?v=1737628051&width=800",
                        "alt": "Adult Stethoscope MDF Instruments MD One Abyss Navy Blue"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-black-main.jpg?v=1737546173&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium NoirNoir Black"
                    }
                },
                {
                    "url": "/products/md-one-epoch-titanium-adult-purple-pastel-stethoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-pastel-purple-main.jpg?v=1737546646&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Cher Pastel Purple"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-purple",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-purple-main.jpg?v=1737546859&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium Purple Rain"
                    }
                },
                {
                    "url": "/products/md-one-epoch-titanium-adult-stethoscope-pink",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-pink-main.jpg?v=1737546787&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Cosmo Light Pink"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-orange",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-orange-main.jpg?v=1737546588&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium Vitamin Orange"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-raspberry",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-raspberry-main.jpg?v=1737546917&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch RedEnv Raspberry"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-emerald-green",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-green-main.jpg?v=1737546463&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium Green"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silverr-fuchsia",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-bright-pink-main.jpg?v=1737546336&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium ThinkPink Bright Pink"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-white-main.jpg?v=1737547164&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium BlaBlanc White"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-bright-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-bright-blue-main.jpg?v=1737546274&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium S.Swell Bright Blue"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silverr-burgundy",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-burgundy-main.jpg?v=1737546407&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium Napa Burgundy"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-silver-royal-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-royal-blue-main.jpg?v=1737546989&width=1000",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium Maliblu Royal Blue"
                    }
                },
                {
                    "url": "/products/md-one-epoch-titanium-adult-stethoscope-usa",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-epoch-titanium-adult-stethoscope-usa-main.jpg?v=1737712519&width=800",
                        "alt": "MD One® Epoch® Titanium Adult Stethoscope - USA"
                    }
                },
            ]
        },
        epochRoseGold: {
            match: [
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-rose-gold-monet",
                "/products/md-one-epoch-titanium-adult-stethoscope-white-rose-gold",
                "/products/md-one-epoch-titanium-adult-stethoscope-black-rose-gold",
            ],
            swatches: [
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-rose-gold-monet",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-monet-rose-gold-main.jpg?v=1737457071&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium Mprint Flower Print Monet and Rose Gold"
                    }
                },
                {
                    "url": "/products/md-one-epoch-titanium-adult-stethoscope-white-rose-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-white-rose-gold-main.jpg?v=1737457157&width=800",
                        "alt": "Rose Gold Stethoscope MDF Instruments MD One Epoch Titanium BlaBlanc White"
                    }
                },
                {
                    "url": "/products/md-one-epoch-titanium-adult-stethoscope-black-rose-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-black-rose-gold-main.jpg?v=1737456974&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium NoirNoir Black and Rose Gold"
                    }
                },
            ]
        },
        epochMetalika: {
            match: [
                "/products/mdf-stethoscope-md-one-epoch-titanium-adult-stethoscope-white-metalika",
                "/products/md-one-epoch-titanium-adult-stethoscope-usa-metalika",
                "/products/mdf-stethoscope-md-one-epoch-titanium-adult-stethoscope-black-metalika",
            ],
            swatches: [
                {
                    "url": "/products/mdf-stethoscope-md-one-epoch-titanium-adult-stethoscope-white-metalika",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-white-metalika-main.jpg?v=1737456661&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium BlaBlanc White and Metalika"
                    }
                },
                {
                    "url": "/products/md-one-epoch-titanium-adult-stethoscope-usa-metalika",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-md-one-epoch-titanium-adult-stethoscope-usa-metalika-main.jpg?v=1737712787&width=800",
                        "alt": "MD One® Epoch® Titanium Adult Stethoscope - USA/Metalika"
                    }
                },
                {
                    "url": "/products/mdf-stethoscope-md-one-epoch-titanium-adult-stethoscope-black-metalika",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-md-one-r-epoch-r-titanium-adult-stethoscope-blackmetalika-1.jpg?v=1645559844&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium NoirNoir Black and Metalika"
                    }
                },
            ]
        },
        epochCyprium: {
            match: [
                "/products/md-one-epoch-titanium-adult-stethoscope-black-cyprium",
                "/products/md-one-epoch-titanium-adult-stethoscope-white-cyprium",
            ],
            swatches: [
                {
                    "url": "/products/md-one-epoch-titanium-adult-stethoscope-black-cyprium",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-black-cyprium-main.jpg?v=1737455326&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium NoirNoir Black and Cyprium"
                    }
                },
                {
                    "url": "/products/md-one-epoch-titanium-adult-stethoscope-white-cyprium",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-white-cyprium-main.jpg?v=1737455380&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium BlaBlanc White and Cyprium"
                    }
                }
            ]
        },
        epochBlackOut: {
            match: [
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-blackout-black",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-blackout-graffiti",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-blackout-vulcan",
                "/products/mdf-stethoscope-md-one-epoch-titanium-adult-stethoscope-white-blackout",
            ],
            swatches: [
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-blackout-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-black-blackout-main.jpg?v=1737453965&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium All Black BlackOut"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-blackout-graffiti",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/stethoscope-mdf-instruments-md-one-epoch-titanium-mprint-graffiti-blackout-1.jpg?v=1721224996&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium Mprint Comic Print Graffiti BlackOut"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-blackout-vulcan",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-md-one-r-epoch-r-titanium-adult-stethoscope-vulcan-carbon-fiberblackout-1.jpg?v=1645560017&width=800",
                        "alt": "MD One® Epoch® Titanium Adult Stethoscope - Vulcan - Carbon Fiber/BlackOut - MDF Instruments Official Store - No - Stethoscope"
                    }
                },
                {
                    "url": "/products/mdf-stethoscope-md-one-epoch-titanium-adult-stethoscope-white-blackout",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-white-blackout-main.jpg?v=1737453830&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium White and BlackOut"
                    }
                },
            ]
        },
        epochKaleidoscope: {
            match: [
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-monet",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-black",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-paws",
                "/collections/the-mprints-collection/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-purpaisely",
                "/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-white",
                "/products/epoch-titanium-stethoscope-inclusion-kaleidoscope",
            ],
            swatches: [
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-monet",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-monet-kaleidoscope-main.jpg?v=1737456120&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium Flower Print Monet and Kaleidoscope"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-black-kaleidoscope-main.jpg?v=1737455900&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium NoirNoir Black and Kaleidoscope"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-paws",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-paws-print-kaleidoscope-main.jpg?v=1737456234&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Paw Print and Kaleidoscope"
                    }
                },
                {
                    "url": "/collections/the-mprints-collection/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-purpaisely",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-purpaisley-kaleidoscope-main.jpg?v=1737456365&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium Pink and Purple Paisley Print Purpaisley and Kaleidoscope"
                    }
                },
                {
                    "url": "/products/mdf-md-one-epoch-titanium-stethoscope-adult-kaleidoscope-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-white-kaleidoscope-main.jpg?v=1737456429&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium BlaBlanc White and Kaleidoscope"
                    }
                },
                {
                    "url": "/products/epoch-titanium-stethoscope-inclusion-kaleidoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-inclusion-kaleidoscope-main.jpg?v=1737456000&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium Mprint Inclusion"
                    }
                },
            ]
        },
        epochCapridium: {
            match: [
                "/products/md-blue-black-titanium-adult-stethoscope",
                "/products/md-one-blue-stethoscope-tie-dye",
                "/products/md-one-mdf-titanium-stethoscope-paw-print-capridium",
                "/products/mdf-blue-white-stethoscope",
            ],
            swatches: [
                {
                    "url": "/products/md-blue-black-titanium-adult-stethoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-black-capridium-main.jpg?v=1737454505&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium NoirNoir Black and Capridium Blue"
                    }
                },
                {
                    "url": "/products/md-one-blue-stethoscope-tie-dye",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-tie-dye-capridium-main.jpg?v=1737454676&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Tie Dye Print and Capridium Blue"
                    }
                },
                {
                    "url": "/products/md-one-mdf-titanium-stethoscope-paw-print-capridium",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-paws-capridium-main.jpg?v=1737454599&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Paw Print and Capridium Blue"
                    }
                },
                {
                    "url": "/products/mdf-blue-white-stethoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-epoch-titanium-adult-stethoscope-white-capridium-main.jpg?v=1737454731&width=800",
                        "alt": "Stethoscope MDF Instruments MD One Epoch Titanium BlaBlanc White and Capridium Blue"
                    }
                }
            ]
        },
        stainlessSteelSilver: {
            match: [
                "/products/mdf-procardial-stethoscope-797-silver-black",
                "/products/mdf-procardial-stethoscope-797-silver-navy-blue",
                "/products/mdf-procardial-stethoscope-797-silver-purple",
                "/products/mdf-procardial-stethoscope-797-silver-burgundy",
                "/products/mdf-procardial-stethoscope-797-silver-green",
                "/products/mdf-procardial-stethoscope-797-silver-royal-blue",
                "/products/mdf-procardial-stethoscope-797-blackout-black",
                "/products/mdf-procardial-stethoscope-797-whiteout-white",
                "/products/mdf-procardial-stethoscope-797-perla-noire-white",
                "/products/mdf-procardial-stethoscope-797-k-gold-black",
            ],
            swatches: [
                {
                    "url": "/products/mdf-procardial-stethoscope-797-silver-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-black-main.jpg?v=1744030781&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - Black"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797-silver-navy-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-navy-blue-main.jpg?v=1744030885&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - Navy Blue"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797-silver-purple",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-purple-main.jpg?v=1744030898&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - Purple"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797-silver-burgundy",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-burgundy-main.jpg?v=1744030859&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - Burgundy"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797-silver-green",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-green-main.jpg?v=1744030872&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - Green"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797-silver-royal-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-royal-blue-silver-main.jpg?v=1744031640&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Royal Blue"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797-blackout-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-black-blackout-main.jpg?v=1744030795&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - Black/BlackOut"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797-whiteout-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-white-whiteout-main.jpg?v=1744030950&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - White/WhiteOut"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797-perla-noire-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-white-perla-noire-main.jpg?v=1744030920&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - White/Perla Noire"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797-k-gold-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-black-k-gold-main.jpg?v=1744030810&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - Black/Gold"
                    }
                },
            ]
        },
        stainlessSteelRoseGold: {
            match: [
                "/products/mdf-procardial-stethoscope-797-rose-gold-white",
                "/products/mdf-procardial-stethoscope-797-rose-gold-black",
                "/products/mdf-procardial-stethoscope-797dd-rose-gold-white",
                "/products/mdf-procardial-stethoscope-797dd-rose-gold-black",
            ],
            swatches: [
                {
                    "url": "/products/mdf-procardial-stethoscope-797-rose-gold-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-white-rose-gold-main.jpg?v=1744030932&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - White/Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797-rose-gold-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-stainless-steel-cardiology-stethoscope-black-rose-gold-main.jpg?v=1744030846&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - Black/Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797dd-rose-gold-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-stainless-steel-adult-and-pediatric-stethoscope-whiterose-gold-1.jpg?v=1744030765&width=800",
                        "alt": "ProCardial® Stainless Steel Adult & Pediatric Stethoscope - White/Rose Gold - MDF Instruments Official Store - Stethoscope"
                    }
                },
                {
                    "url": "/products/mdf-procardial-stethoscope-797dd-rose-gold-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-stainless-steel-adult-and-pediatric-stethoscope-blackrose-gold-1.jpg?v=1645560283&width=800",
                        "alt": "ProCardial® Stainless Steel Adult & Pediatric Stethoscope - Black/Rose Gold - MDF Instruments Official Store - Stethoscope"
                    }
                },
            ]
        },
        titaniumSilverMetal: {
            match: [
                "/products/cat-print-mdf-cardiology-stethoscope-tivali",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-black",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-navy-blue",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-purple",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-burgundy",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-royal-blue",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-green",
            ],
            swatches: [
                {
                    "url": "/products/cat-print-mdf-cardiology-stethoscope-tivali",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-purrfect-silver-main.jpg?v=1737387990&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cat Print Mprint Purrfect"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-black-silver-main.jpg?v=1744030998&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - Black - MDF Instruments"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-navy-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-navy-blue-silver-main.jpg?v=1744031449&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Navy Blue"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-purple",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-purple-silver-main.jpg?v=1744031523&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Purple"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-burgundy",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-burgundy-silver-main.jpg?v=1744031141&width=800",
                        "alt": "ProCardial® Stainless Steel Cardiology Stethoscope - Burgundy"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-royal-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-royal-blue-silver-main.jpg?v=1744031640&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Royal Blue"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-silver-green",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-green-silver-main.jpg?v=1744031278&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Green"
                    }
                },
            ]
        },
        titaniumRoseGold: {
            match: [
                "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-snow-leopard-uncaged",
                "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-turquoise-rock",
                "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-white-glitter-diva",
                "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-carrera-rock",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-white-rose-gold",
                "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-pink-glitter-diva",
                "/products/procardial-titanium-cardiology-stethoscope-true-timber-conceal-pink-rose-gold",
                "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-black-glitter-diva",
                "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-peacock-uncaged",
                "/products/cardiology-stethoscope-titanium-adult-pink-rose-gold",
                "/products/mdf-procardial-titanium-stethoscope-797t-pink-rose-gold",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-black-rose-gold",
                "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-mermaid-unreal",
                "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-green-glitter-diva",
                "/products/procardial-titanium-cardiology-stethoscope-georgia-pink-marble-rose-gold",
                "/products/procardial-titanium-cardiology-stethoscope-orion-nebula-rose-gold",
                "/products/procardial-titanium-cardiology-stethoscope-baby-mermaid-rose-gold",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-rose-gold-green",
            ],
            swatches: [
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-snow-leopard-uncaged",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-snow-leopardrose-gold-1.jpg?v=1744031661&width=800",
                        "alt": "Rose Gold Stethoscope MDF Instruments ProCardial Titanium Cardiology Snow Leopard"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-turquoise-rock",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-turquoiserose-gold-1.jpg?v=1645560618&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Cardiology Turquoise and Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-white-glitter-diva",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-white-glitterrose-gold-1.jpg?v=1645560638&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Cardiology White Glitter and Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-carrera-rock",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-carrera-marble-rose-gold-main.jpg?v=1744031153&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Carrera Marble/Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-white-rose-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-whiterose-gold-1.jpg?v=1645560658&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology Rose Gold and BlaBlanc White"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-pink-glitter-diva",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-pink-glitterrose-gold-1.jpg?v=1744031482&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology Bright Pink Glitter Rose Gold"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-true-timber-conceal-pink-rose-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/stethoscope-mdf-instruments-procardial-titanium-mprint-true-timber-conceal-pink-rose-gold-1.jpg?v=1730817339&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Mprint True Timber Conceal Pink and Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-black-glitter-diva",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-black-glitter-rose-gold-main.jpg?v=1744031025&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Black Glitter/Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-peacock-uncaged",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-peacockrose-gold-1.jpg?v=1744031472&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology Peacock Rose Gold"
                    }
                },
                {
                    "url": "/products/cardiology-stethoscope-titanium-adult-pink-rose-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-light-pink-glitter-rose-gold-main.jpg?v=1744031375&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Light Pink Glitter/Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-pink-rose-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-light-pink-rose-gold-main.jpg?v=1744031405&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Light Pink/Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-black-rose-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-black-rose-gold-main.jpg?v=1744031099&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Black/Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-mermaid-unreal",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-instruments-procardial-stethoscope-mermaid-rose-gold.jpg?v=1744031428&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology Mermaid Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-rose-gold-green-glitter-diva",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-green-glitter-rose-gold-main.jpg?v=1744031287&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Green Glitter/Rose Gold"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-georgia-pink-marble-rose-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-georgia-pink-marble-rose-gold-main.jpg?v=1744031196&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Georgia Pink Marble/Rose Gold"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-orion-nebula-rose-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/rose-gold-stethoscope-pink-galaxy-print-mdf-instruments-orion-nebula.jpg?v=1744031462&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology Pink Galaxy Print Orion Nebula Rose Gold Pink Stethoscopes"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-baby-mermaid-rose-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-baby-mermaid-rose-gold-main.jpg?v=1744030984&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Baby Mermaid/Rose Gold"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-rose-gold-green",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-green-rose-gold-main.jpg?v=1744031338&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Green/Rose Gold"
                    }
                },
            ]
        },
        titaniumKaleidoscope: {
            match: [
                "/products/mdf-procardial-titanium-stethoscope-797t-kaleidoscope-mermaid-unreal",
                "/products/procardial-titanium-cardiology-stethoscope-rainbow-leopard-kaleidoscope",
                "/products/purple-glitter-rainbow-cardiology-stethoscope",
                "/products/pink-glitter-rainbow-cardiology-stethoscope",
                "/products/haight-ash-mdf-cardiology-stethoscope",
                "/products/mdf-procardial-titanium-stethoscope-797t-kaleidoscope-white",
                "/products/mdf-procardial-titanium-stethoscope-797t-kaleidoscope-pink",
                "/products/procardial-titanium-cardiology-stethoscope-baby-mermaid-kaleidoscope",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-kaleidoscope-black",
                "/products/mdf-procardial-titanium-stethoscope-797t-kaleidoscope-fuchsia",
                "/products/procardial-titanium-cardiology-stethoscope-royal-dutch-paisley-kaleidoscope",
            ],
            swatches: [
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-kaleidoscope-mermaid-unreal",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-mermaid-kaleidoscope-main.jpg?v=1744031418&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology Mermaid Kaleidoscope"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-rainbow-leopard-kaleidoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-rainbow-leopard-kaleidoscope-main.jpg?v=1744031605&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology Rainbow Leopard Kaleidoscope"
                    }
                },
                {
                    "url": "/products/purple-glitter-rainbow-cardiology-stethoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-purple-glitter-kaleidoscope-main.jpg?v=1744031581&width=800",
                        "alt": "ProCardial Titanium Stethoscope MDF Instruments Purple Glitter Kaleidoscope"
                    }
                },
                {
                    "url": "/products/pink-glitter-rainbow-cardiology-stethoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-bright-pink-glitter-kaleidoscope-main.jpg?v=1744031117&width=800",
                        "alt": "ProCardial Titanium Stethoscope MDF Instruments Bright Pink Glitter  Kaleidoscope"
                    }
                },
                {
                    "url": "/products/haight-ash-mdf-cardiology-stethoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-haight-ash-kaleidoscope-main.jpg?v=1744031363&width=800",
                        "alt": "ProCardial Titanium Stethoscope MDF Instruments Haight Ash Kaleidoscope Tie Dye Print"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-kaleidoscope-white",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-white-kaleidoscope-main.jpg?v=1737383603&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology BlaBlanc White and Kaleidoscope"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-kaleidoscope-pink",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-light-pink-kaleidoscope-main.jpg?v=1744031390&width=800",
                        "alt": "ProCardial Titanium Stethoscope MDF Instruments Cosmo Light Pink Kaleidoscope"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-baby-mermaid-kaleidoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-titanium-cardiology-stethoscope-baby-mermaid-kaleidoscope-main.jpg?v=1744030967&width=800",
                        "alt": "ProCardial Titanium Stethoscope MDF Instruments Baby Mermaid Kaleidoscope"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-kaleidoscope-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/black-stethoscope-mdf-instruments-procardial-titanium-noirnoir-kaleidoscope.jpg?v=1744031075&width=800",
                        "alt": "ProCardial Titanium Stethoscope MDF Instruments NoirNoir Black Kaleidoscope"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-kaleidoscope-fuchsia",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/pink-stethoscope-mdf-instruments-procardial-titanium-thinkpink-kaleidoscope.jpg?v=1744031130&width=800",
                        "alt": "ProCardial Titanium Stethoscope MDF Instruments Bright Pink Kaleidoscope"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-royal-dutch-paisley-kaleidoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-procardial-titanium-cardiology-stethoscope-royal-dutch-kaleidoscope-main.jpg?v=1744031650&width=800",
                        "alt": "Stethoscope MDF Instruments Royal Dutch Paisley Kaleidoscope ProCardial Titanium Cardiology"
                    }
                },
            ]
        },
        titaniumBlackOut: {
            match: [
                "/products/procardial-titanium-adult-black-glitter-blackout-stethoscope",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-blackout-black",
                "/products/mdf-procardial-titanium-stethoscope-797t-blackout-cheetah",
                "/products/procardial-titanium-stethoscope-adult-blackout-galaxy",
                "/products/mdf-procardial-titanium-stethoscope-797t-blackout-sugar-skull-streetsmarts",
                "/products/mdf-procardial-titanium-stethoscope-797t-blackout-realtree-edge-warrior",
                "/products/procardial-titanium-cardiology-stethoscope-realtree-trace-blue-blackout",
                "/products/blue-cheetah-mdf-cardiology-stethoscope",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-white-blackout",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-green-blackout",
                "/products/procardial-titanium-cardiology-stethoscope-puppy-paw-blackout",
            ],
            swatches: [
                {
                    "url": "/products/procardial-titanium-adult-black-glitter-blackout-stethoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-black-glitter-blackout-main.jpg?v=1744031012&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Black Glitter/BlackOut - MDF Instruments"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-blackout-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-black-blackout-main.jpg?v=1744031039&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Black/BlackOut - MDF Instruments"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-blackout-cheetah",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-cheetah-blackout-main.jpg?v=1744031174&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Cheetah/BlackOut - MDF Instruments"
                    }
                },
                {
                    "url": "/products/procardial-titanium-stethoscope-adult-blackout-galaxy",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-galaxy-glitter-blackout-main.jpg?v=1744031186&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Galaxy/BlackOut - MDF Instruments"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-blackout-sugar-skull-streetsmarts",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-sugar-skull-blackout-main.jpg?v=1744031689&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Sugar Skull/BlackOut - MDF Instruments"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-blackout-realtree-edge-warrior",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-realtree-camo-blackout-main.jpg?v=1744031614&width=800",
                        "alt": "Camo Stethoscope MDF Instruments ProCardial Titanium Mprint Realtree Edge Woods Camouflage BlackOut"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-realtree-trace-blue-blackout",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/stethoscope-mdf-instruments-procardial-titanium-mprint-realtree-trace-blue-blackout-1.png?v=1744031629&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Mprint Realtree Trace Blue and BlackOut"
                    }
                },
                {
                    "url": "/products/blue-cheetah-mdf-cardiology-stethoscope",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-tiberius-panther-blackout-main.jpg?v=1744031700&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Tiberius Panther/BlackOut - MDF Instruments"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-white-blackout",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-white-blackout-main.jpg?v=1736950452&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - White/BlackOut - MDF Instruments"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-green-blackout",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-green-blackout-main.jpg?v=1744031319&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Green/BlackOut - MDF Instruments"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-puppy-paw-blackout",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-puppy-paw-blackout-main.jpg?v=1744031506&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Puppy Paw/BlackOut -  MDF Instruments"
                    }
                },
            ]
        },
        titaniumBCapridium: {
            match: [
                "/products/procardial-titanium-cardiology-stethoscope-starry-night-capridium",
                "/products/procardial-titanium-cardiology-stethoscope-tiberius-panther-capridium",
                "/products/mdf-cardiology-stethoscope-black-blue",
                "/products/procardial-titanium-cardiology-stethoscope-woodstock-capridium",
                "/products/mdf-cardiology-stethoscope-white-blue",
                "/products/procardial-titanium-cardiology-stethoscope-go-van-gogh-capridium",
            ],
            swatches: [
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-starry-night-capridium",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-starry-night-capridium-main.jpg?v=1744031674&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Starry Night/Capridium - MDF Instruments"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-tiberius-panther-capridium",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-tiberius-panther-capridium-main.jpg?v=1744031710&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Tiberius Panther/Capridium - MDF Instruments"
                    }
                },
                {
                    "url": "/products/mdf-cardiology-stethoscope-black-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-black-capridium-main.jpg?v=1744031051&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Black/Capridium - MDF Instruments"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-woodstock-capridium",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-woodstock-capridium-main.jpg?v=1736951605&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Woodstock/Capridium"
                    }
                },
                {
                    "url": "/products/mdf-cardiology-stethoscope-white-blue",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-white-capridium-main.jpg?v=1736951425&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - White/Capridium - MDF Instruments"
                    }
                },
                {
                    "url": "/products/procardial-titanium-cardiology-stethoscope-go-van-gogh-capridium",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/blue-stethoscope-mdf-instruments-procardial-titanium-mprint-vincent-van-gogh-starry-night-print-go-van-gogh-capridium.jpg?v=1744031267&width=800",
                        "alt": "Blue Stethoscope MDF Instruments ProCardial Titanium Mprint Vincent Van Gogh Starry Night Print Go Van Gogh and Capridium"
                    }
                },
            ]
        },
        titaniumGold: {
            match: [
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-white-gold",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-gold-black",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-green-gold",
            ],
            swatches: [
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-white-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-white-gold-main.jpg?v=1736953600&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - White/Gold - MDF Instruments"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-gold-black",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-blackgold-1.jpg?v=1645560397&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Black/Gold - MDF Instruments Official Store - No - Stethoscope"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-green-gold",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-green-gold-main.jpg?v=1736953532&width=800",
                        "alt": "ProCardial® Titanium Cardiology Stethoscope - Green/Gold - MDF Instruments"
                    }
                }
            ]
        },
        titaniumMetalika: {
            match: [
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-black-metalika",
                "/products/mdf-procardial-titanium-stethoscope-797t-metalika-grey",
                "/products/mdf-procardial-titanium-stethoscope-mdf797t-white-metalika",
            ],
            swatches: [
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-black-metalika",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-blackmetalika-1.jpg?v=1744031086&width=600",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology NoirNoir Black and Metalika"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-797t-metalika-grey",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/products/mdf-stethoscope-procardial-r-titanium-cardiology-stethoscope-greymetalika-1.jpg?v=1744031348&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology Sleek Grey Metalika"
                    }
                },
                {
                    "url": "/products/mdf-procardial-titanium-stethoscope-mdf797t-white-metalika",
                    "img": {
                        "src": "https://mdfinstruments.com/cdn/shop/files/mdf-stethoscope-procardial-titanium-cardiology-stethoscope-white-metalika-main.jpg?v=1737386114&width=800",
                        "alt": "Stethoscope MDF Instruments ProCardial Titanium Cardiology BlaBlanc White and Metalika"
                    }
                }
            ]
        },
    };

    let matchedSwatches = null;
    for (const key in allSwatches) {
        if (allSwatches[key].match.includes(currentPath)) {
            matchedSwatches = allSwatches[key].swatches;
            break;
        }
    }

    if (!matchedSwatches) {
        matchedSwatches = allSwatches.silver.swatches;
    }

    if (!jQuery('body').hasClass('swatches_iv')) {
        jQuery('body').addClass('swatches_iv');

        // Create Splide slider container
        const swatchesWrapper = jQuery(`
            <div class="product-swatches splide">
                <div class="splide__track">
                    <ul class="imagesWrapper splide__list"></ul>
                </div>
                <div class="my-slider-progress">
                    <div class="my-slider-progress-bar"></div>
                </div>
            </div>
        `);

        // Append swatches as <li class="splide__slide"> elements
        matchedSwatches.forEach(swatch => {
            const anchor = `<a href="${swatch.url}"><img src="${swatch.img.src}" alt="${swatch.img.alt}"></a>`;
            const slide = `<li class="splide__slide">${anchor}</li>`;
            swatchesWrapper.find('.imagesWrapper').append(slide);
        });

        jQuery('div[data-block-id="variant_picker"]').before(swatchesWrapper);

        // Highlight current page swatch
        jQuery(".product-swatches .imagesWrapper a").each(function () {
            if (window.location.pathname === new URL(this.href).pathname) {
                jQuery(this).addClass("active");
            }
        });

        const sliderElement = document.querySelector('.product-swatches.splide');
        if (!sliderElement) return;

        var SplideInterval = setInterval(function () {
            if (typeof (Splide) != 'undefined' && Splide != null) {
                clearInterval(SplideInterval);
                const splide = new Splide(sliderElement, {
                    type: 'slide',
                    perPage: 6,
                    gap: '1rem',
                    arrows: true,
                    pagination: false,
                });

                splide.on('mounted', function () {
                    const bar = sliderElement.querySelector('.my-slider-progress-bar');
                    if (!bar) {
                        console.error('Progress bar not found');
                        return;
                    }

                    const updateBar = () => {
                        const end = splide.Components.Controller.getEnd() + 1;
                        const rate = Math.min((splide.index + 1) / end, 1);
                        bar.style.width = `${100 * rate}%`;
                    };

                    updateBar(); // Initial update
                    splide.on('move', updateBar); // Update on slide
                });

                splide.mount();
                splide.refresh();
            }
        });
    }

    document.querySelectorAll('.product-swatches .imagesWrapper a').forEach(function(el) {
        el.addEventListener('click', function() {
            window._conv_q = window._conv_q || [];
            _conv_q.push(["triggerConversion", "100499871"]);
            console.log('Swatch Interaction PDPs');
        });
    });

}

var checkInterval = setInterval(function () {
    if (typeof jQuery !== 'undefined' && jQuery('body').length > 0 && jQuery('div[data-block-id="variant_picker"]').length > 0) {
        clearInterval(checkInterval);
        loadSwatches();
    }
}, 1000);
