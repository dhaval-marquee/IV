var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('iMac_ram_test')) {
    bodyEle.classList.add('iMac_ram_test');


    
    $('.iMac_ram_test .memory-product-items-unit__wrapper').after($('.marketing-icon').eq(0));


    $('.memory-product-items-unit__wrapper').after(`<div class="product_search d-md-flex align-items-center justify-content-between">
        <div class="d-block text-center">
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667548113/macsales/iMac_Ram_Test/mac_image.png" alt="iMac Image" width="300">
        </div>
        <form class="d-lg-flex align-items-center justify-content-between">
            <div id="firstBox" class="form-group d-flex flex-column">
                <label><b>Select Your Model Year</b></label>
                <select id="availableProduct">
                    <option value="">-Select Your Model Year-</option>
                </select>
            </div>
            <div id="secondBox" class="form-group d-flex flex-column">
                <label><b>Select Your Model</b></label>
                <select id="productSubItems" onchange="this.options[this.selectedIndex].value && (window.location = this.options[this.selectedIndex].value);">
                    <option value="">-Select Your Model ID below-</option>
                </select>
            </div>
        </form>
    </div>`);

    const jsonData = {
        
        0 : {
            pname: '2017-2020',
            pInfo: [
                {
                    pText: 'iMac 20.2',
                    pLink: 'https://eshop.macsales.com/shop/memory/imac-2019-27-inch'
                },
                {
                    pText: 'iMac 20.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/imac-2019-27-inch'
                },
                {
                    pText: 'iMac 19.2',
                    pLink: 'https://eshop.macsales.com/shop/memory/imac-2019-21.5-inch'
                },
                {
                    pText: 'iMac 19.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/imac-2019-27-inch'
                },
                {
                    pText: 'iMac 18.3',
                    pLink: 'https://eshop.macsales.com/shop/memory/imac-2017-27-inch'
                },
                {
                    pText: 'iMac Pro 1.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/imac-pro-2017'
                }
            ],
        },
        1 : {
            pname: '2012-2017',
            pInfo: [
                {
                    pText: 'iMac 18.2',
                    pLink: 'https://eshop.macsales.com/shop/memory/imac-2017-21.5-inch'
                },
                {
                    pText: 'iMac 18.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/imac-2017-21.5-inch'
                },
                {
                    pText: 'iMac 17.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/Retina-5K2015/DDR3L'
                },
                {
                    pText: 'iMac 15.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/Retina-5K/DDR3L'
                },
                {
                    pText: 'iMac 14.2',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/2012_27/DDR3L'
                },
                {
                    pText: 'iMac 13.2',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/2012_27/DDR3L'
                }
            ],
        },
        2 : {
            pname: '2009-2013',
            pInfo: [
                {
                    pText: 'iMac 14.3',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/2012_21.5/DDR3L'
                },
                {
                    pText: 'iMac 14.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/2012_21.5/DDR3L'
                },
                {
                    pText: 'iMac 13.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/2012_21.5/DDR3L'
                },
                {
                    pText: 'iMac 12.2',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/2011/DDR3_21.5_27'
                },
                {
                    pText: 'iMac 12.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/2011/DDR3_21.5_27'
                },
                {
                    pText: 'iMac 11.3',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/2010/DDR3_21.5_27'
                },
                {
                    pText: 'iMac 11.2',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/2010/DDR3_21.5_27'
                },
                {
                    pText: 'iMac 11.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/DDR3_21.5_27'
                },
                {
                    pText: 'iMac 10.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/DDR3_21.5_27'
                }
            ],
        },
        3 : {
            pname: '2006-2009',
            pInfo: [
                {
                    pText: 'iMac 9.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/DDR3_2009'
                },
                {
                    pText: 'iMac 8.1',
                    pLink: 'https://eshop.macsales.com/shop/memory/iMac/Intel_Core_2_Duo_PC2-6400'
                },
                {
                    pText: 'iMac 7.1',
                    pLink: 'https://eshop.macsales.com/shop/apple/memory/iMac/Intel_Core_2_Duo'
                },
                {
                    pText: 'iMac 6.1 (2.33 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-24-inch-late-2006-2.33-ghz/memory'
                },
                {
                    pText: 'iMac 6.1 (2.16 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-24-inch-late-2006-2.16-ghz/memory'
                },
                {
                    pText: 'iMac 5.2',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-17-inch-late-2006-1.83-ghz/memory'
                },
                {
                    pText: 'iMac 5.1 (2.33 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-20-inch-late-2006-2.33-ghz/memory'
                },
                {
                    pText: 'iMac 5.1 (2.16 GHz / 20in)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-20-inch-late-2006-2.16-ghz/memory'
                },
                {
                    pText: 'iMac 5.1 (2.16 GHz / 17in)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-17-inch-late-2006-2.16-ghz/memory'
                },
                {
                    pText: 'iMac 5.1 (2.00 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-17-inch-late-2006-2.0-ghz/memory'
                },
                {
                    pText: 'iMac 4.2',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-17-inch-mid-2006-1.83-ghz/memory'
                },
                {
                    pText: 'iMac 4.1 (2.00 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-20-inch-early-2006-2.0-ghz/memory'
                },
                {
                    pText: 'iMac 4.1 (1.83 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-17-inch-early-2006-1.83-ghz/memory'
                }
            ],
        },
        4 : {
            pname: 'Legacy',
            pInfo: [
                {
                    pText: 'Power Mac 12.1 (2.10 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g5-20-inch-late-2005-2.1-ghz/memory'
                },
                {
                    pText: 'Power Mac 12.1 (1.90 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g5-17-inch-late-2005-1.9-ghz/memory'
                },
                {
                    pText: 'Power Mac 8.2 (2.00 GHz 20in)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g5-20-inch-mid-2005-2.0-ghz/memory'
                },
                {
                    pText: 'Power Mac 8.2 (2.00 GHz 17in)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g5-17-inch-mid-2005-2.0-ghz/memory'
                },
                {
                    pText: 'Power Mac 8.2 (1.80 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g5-17-inch-mid-2005-1.8-ghz/memory'
                },
                {
                    pText: 'Power Mac 8.1 (1.8 GHz, 20in)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g5-20-inch-mid-2004-1.8-ghz/memory'
                },
                {
                    pText: 'Power Mac 8.1 (1.8 GHz, 17in)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g5-17-inch-mid-2004-1.8-ghz/memory'
                },
                {
                    pText: 'Power Mac 8.1 (1.6 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g5-17-inch-mid-2004-1.6-ghz/memory'
                },
                {
                    pText: 'Power Mac 6.3',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g4-20-inch-late-2003-1.25-ghz/memory'
                },
                {
                    pText: 'Power Mac 6.1 (1.25 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g4-17-inch-late-2003-1.25-ghz/memory'
                },
                {
                    pText: 'Power Mac 6.1 (1.00 GHz, 17in)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g4-17-inch-early-2003-1.0-ghz/memory'
                },
                {
                    pText: 'Power Mac 6.1 (1.00 GHz, 15in)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g4-15-inch-late-2003-1.0-ghz/memory'
                },
                {
                    pText: 'Power Mac 4.5',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g4-17-inch-mid-2002-0.8-ghz/memory'
                },
                {
                    pText: 'Power Mac 4.2 (15in)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g4-15-inch-early-2003-0.8-ghz/memory'
                },
                {
                    pText: 'Power Mac 4.2 (.80 GHz, Flat Panel)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g4-15-inch-early-2002-0.8-ghz/memory'
                },
                {
                    pText: 'Power Mac 4.2 (.70 GHz, Flat Panel)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g4-15-inch-early-2002-0.7-ghz/memory'
                },
                {
                    pText: 'Power Mac 4.1 (.70 GHz Summer)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-mid-2001-0.7-ghz/memory'
                },
                {
                    pText: 'Power Mac 4.1 (.60 GHz Summer)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-mid-2001-0.6-ghz/memory'
                },
                {
                    pText: 'Power Mac 4.1 (.50 GHz Summer)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-mid-2001-0.5-ghz/memory'
                },
                {
                    pText: 'Power Mac 4.1 (.60 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-early-2001-0.6-ghz/memory'
                },
                {
                    pText: 'Power Mac 4.1 (.50 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-early-2001-0.5-ghz/memory'
                },
                {
                    pText: 'Power Mac 4.1 (.40 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-early-2001-0.4-ghz/memory'
                },
                {
                    pText: 'Power Mac 2.2 (.50 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-mid-2000-0.5-ghz/memory'
                },
                {
                    pText: 'Power Mac 2.2 (.45 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-mid-2000-0.45-ghz/memory'
                },
                {
                    pText: 'Power Mac 2.2 (.40 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-mid-2000-0.4-ghz/memory'
                },
                {
                    pText: 'Power Mac 2.2 (.35 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-mid-2000-0.35-ghz'
                },
                {
                    pText: 'Power Mac 2.1 (.4 GHz Summer)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-dv-se-late-1999-0.4-ghz/memory'
                },
                {
                    pText: 'Power Mac 2.1 (.4 GHz )',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-dv-late-1999-0.4-ghz/memory'
                },
                {
                    pText: 'Power Mac 2.1 (.35 GHz)',
                    pLink: 'https://eshop.macsales.com/upgrades/imac-g3-late-1999-0.35-ghz/memory'
                },
                {
                    pText: 'iMac 1 (.33 GHz)',
                    pLink: '#'
                },
                {
                    pText: 'iMac 1 (.26 GHz)',
                    pLink: '#'
                },
                {
                    pText: 'iMac 1 (.23 GHz)',
                    pLink: '#'
                }
            ],
        }
    }

    document.getElementById("availableProduct").addEventListener("change", myFunction1);

    function myFunction1() {

        if(document.getElementById("availableProduct").value != '') {
            showSecondSelectBox();
            addSubItems();

        } else {
            hideSecondSelectBox();
        }

    }

    // Generate Option for Box 1
    function showSecondSelectBox() {
        document.getElementById('secondBox').classList.add('active')
    }

    function hideSecondSelectBox() {
        document.getElementById('secondBox').classList.remove('active')
    }

    var html="<option value=''>-Select Your Model Year-</option>";
    Object.keys(jsonData).forEach(key => {
        html +="<option value="+ key +">"+jsonData[key].pname+"</option>";
    });
    document.getElementById('availableProduct').innerHTML = html;

    
    // Generate Option for Box 2
    function addSubItems() {
        var html2="<option value=''>-Select Your Model ID below-</option>";
        Object.keys(jsonData).forEach(key => {
            if(document.getElementById("availableProduct").value == key) {
                for (var a=0; a < jsonData[key].pInfo.length; a++) {
                    html2 +="<option value="+jsonData[key].pInfo[a].pLink+">"+jsonData[key].pInfo[a].pText+"</option>";
                }
                document.getElementById('productSubItems').innerHTML = html2;
            }
        });
    }

}