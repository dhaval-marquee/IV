var url = window.location.href;
    url = url.split( '?' )[0];
    url = url.split( '#' )[0];
var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('hero_btn')) {
    bodyEle.classList.add('hero_btn');
    if (url == "https://www.keyence.com/products/marker/laser-marker/md-x1000_1500/"){  
        document.querySelector('.prd-seriesOverviewJumbotron-buttonList').insertAdjacentHTML('beforeend',`<li>
            <a href="https://www.keyence.com/inquiry/requestDemoTest/?groupId=tcm%3A26-2047&typeId=tcm%3A26-1742395&seriesId=WS_114011&modelId=&ad_local=seriesfooter" class="secondary-btn-iv">Request Onsite Demo/Test</a>
        </li>`);
    } else if (url == "https://www.keyence.com/products/marker/laser-marker/md-u/"){  
        document.querySelector('.prd-seriesOverviewJumbotron-buttonList').insertAdjacentHTML('beforeend',`<li>
            <a href="https://www.keyence.com/inquiry/requestDemoTest/?groupId=tcm%3A26-2047&typeId=tcm%3A26-1742395&seriesId=WS_SR57331&modelId=&ad_local=seriesfooter" class="secondary-btn-iv">Request Onsite Demo/Test</a>
        </li>`);
    } else if (url == "https://www.keyence.com/products/marker/laser-marker/md-f3100_5100/"){  
        document.querySelector('.prd-seriesOverviewJumbotron-buttonList').insertAdjacentHTML('beforeend',`<li>
            <a href="https://www.keyence.com/inquiry/requestDemoTest/?groupId=tcm%3A26-2047&typeId=tcm%3A26-1742395&seriesId=WS_SR55630&modelId=&ad_local=seriesfooter" class="secondary-btn-iv">Request Onsite Demo/Test</a>
        </li>`);
    } else if (url == "https://www.keyence.com/products/marker/laser-marker/ml-z9500/"){  
        document.querySelector('.prd-seriesOverviewJumbotron-buttonList').insertAdjacentHTML('beforeend',`<li>
            <a href="https://www.keyence.com/inquiry/requestDemoTest/?groupId=tcm%3A26-2047&typeId=tcm%3A26-1742395&seriesId=WS_SR_ml_z9500&modelId=&ad_local=seriesfooter" class="secondary-btn-iv">Request Onsite Demo/Test</a>
        </li>`);
    } else if (url == "https://www.keyence.com/products/marker/laser-marker/md-t1000/"){  
        document.querySelector('.prd-seriesOverviewJumbotron-buttonList').insertAdjacentHTML('beforeend',`<li>
            <a href="https://www.keyence.com/inquiry/requestDemoTest/?groupId=tcm%3A26-2047&typeId=tcm%3A26-1742395&seriesId=WS_SR52975&modelId=&ad_local=seriesfooter" class="secondary-btn-iv">Request Onsite Demo/Test</a>
        </li>`);
    }     
}