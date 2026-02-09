// Page 1 (https://www.airoasis.com/products/ionicair-uv-purifier) code
const queryParameters = window.location.href.split('?')[1]
if (queryParameters != undefined) {
    window.location.replace("https://www.airoasis.com/products/ionicair-uv-purifier?view=ionicair-v2&"+queryParameters);
} else {
    window.location.replace("https://www.airoasis.com/products/ionicair-uv-purifier?view=ionicair-v2");
}




// Page 2 (https://www.airoasis.com/products/iadaptair) code
const queryParameters = window.location.href.split('?')[1]
if (queryParameters != undefined) {
    window.location.replace("https://www.airoasis.com/products/iadaptair?view=iadaptair-v2&"+queryParameters);
} else {
    window.location.replace("https://www.airoasis.com/products/iadaptair?view=iadaptair-v2");
}