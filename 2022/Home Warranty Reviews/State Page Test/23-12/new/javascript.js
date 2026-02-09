var pageUrl = "https://www.homewarrantyreviews.com/";
async function getData(url){
  const html = await (await fetch(url)).text();
  const doc = new DOMParser().parseFromString(html, 'text/html');
  var newElement = document.createElement('div');
  newElement.className = "custom_data d-none";
  document.body.appendChild(newElement);
  document.querySelector(".custom_data").innerHTML = doc.body.innerHTML;

  var newElement1 = document.createElement('div');
  newElement1.className = "home_page_banner my-md-5 mb-4 pt-2 pt-md-0";
  newElement1.innerHTML = document.querySelector(".home_page_banner").innerHTML;
  document.querySelector(".state_page").before(newElement1);
  document.querySelector(".custom_data").remove();
  document.querySelector(".state_page").classList ="state_page";
  document.querySelector(".home_page_banner h1").innerHTML = document.querySelector(".home_page_banner h1").innerText.replaceAll("Your Area","<span class='state'>Texas</span>");
  var customScript = document.createElement('script');
  customScript.type = 'text/javascript';
  customScript.async = true;
  customScript.src = "https://res.cloudinary.com/ignite-visibility/raw/upload/v1671717303/HomeWarrantyReviews/State_Page_Test/customTexas.js";
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(customScript);
}
getData(pageUrl);