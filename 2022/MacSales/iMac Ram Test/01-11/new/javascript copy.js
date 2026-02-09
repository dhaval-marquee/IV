var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('iMac_ram_test')) {
    bodyEle.classList.add('iMac_ram_test');


    
    $('.iMac_ram_test .memory-product-items-unit__wrapper').after($('.marketing-icon').eq(0));


    $('.memory-product-items-unit__wrapper').after(`<div class="product_search d-flex align-items-center justify-content-between">
        <div>
            <img src="https://res.cloudinary.com/ignite-visibility/image/upload/v1667307333/macsales/iMac_Ram_Test/image.png" alt="iMac Image" width="300">
        </div>
        <form class="d-flex align-items-center justify-content-between">
            <div id="firstBox" class="form-group d-flex flex-column">
                <label><b>Select Your Model Year</b></label>
                <select id="availableProduct">
                    <option value="">-Select Your Model Year-</option>
                </select>
            </div>
            <div id="secondBox" class="form-group d-flex flex-column">
                <label><b>Select Your Model</b></label>
                <select id="productSubItems">
                    <option value="">-Select Your Model ID below-</option>
                </select>
            </div>
        </form>
    </div>`);

    const jsonData = {
        
        2020_2017 : {
            pname: '2020-2017',
            pInfo: [1,1,1,1,1],
            pLink: [1,2,3,4,5],
        },
        2017_2012 : {
            pname: '2017-2012',
            pInfo: [2,2,2,2,2],
            pLink: [1,2,3,4,5],
        },
        2013_2009 : {
            pname: '2013-2009',
            pInfo: [3,3,3,3,3],
            pLink: [1,2,3,4,5],
        },
        2009_2006 : {
            pname: '2009-2006',
            pInfo: [4,4,4,4,4],
            pLink: [1,2,3,4,5],
        },
        Legacy : {
            pname: 'Legacy',
            pInfo: [5,5,5,5,5],
            pLink: [1,2,3,4,5],
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
                    html2 +="<option value="+jsonData[key].pLink[a]+">"+jsonData[key].pInfo[a]+"</option>";
                }
                document.getElementById('productSubItems').innerHTML = html2;
            }
        });
    }

}