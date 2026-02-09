var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('hero_section_iv')) {
  bodyEle.classList.add('hero_section_iv');

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
    document.querySelector(".home_page_banner .form_top_block p:nth-child(1)").remove();
    document.querySelector(".home_page_banner .appliances_list_block").remove();
    document.querySelector(".home_page_banner .banner_content").classList.remove("mt-3");
    var heading = document.querySelector(".home_page_banner h1");
    heading.parentElement.classList.add("pr-md-4");
    heading.classList.remove("text-left");
    heading.innerHTML = "Get The Best Home Warranty Offers In Texas for 2023";
    var content_block = document.querySelector(".home_page_banner .content_block");
    content_block.classList.remove("text-left");
    content_block.classList.remove("pr-lg-0");
    content_block.innerHTML = content_block.innerText.replaceAll("Based on","As reviewed by");
    content_block.innerHTML = content_block.innerText.replaceAll("reviews by ","");
    var banner_form = document.querySelector(".home_page_banner #banner_form > div > div:last-child");
    banner_form.classList.remove("pr-md-5");
    var load_block = document.querySelector(".home_page_banner .load_block");
    load_block.classList.remove("py-4");
    document.querySelector(".home_page_banner .review_genuine_block").remove();
    var existing = document.querySelector('.existing_block').parentElement;
    existing.className = "col-md-12 mt-3 mt-md-0 existing_block_wrap";
    var reviewBtn = document.querySelector('.write_a_review_btn').parentElement;
    reviewBtn.classList.remove("w-100");
    document.querySelector(".state_page").classList ="state_page";
    var customScript = document.createElement('script');
    customScript.type = 'text/javascript';
    customScript.async = true;
    customScript.src = "https://res.cloudinary.com/ignite-visibility/raw/upload/v1672997005/HomeWarrantyReviews/State_Page_Test/customTexas.js";
    (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(customScript);
  
  
    var getHeroButton = setInterval(() => {
        if(document.querySelectorAll('.home_page_banner .Cta_btn').length > 0) {
          clearInterval(getHeroButton);
          document.querySelectorAll('input[value="HOME_PAGE_ABOVE_FOLD"]')[0].setAttribute('value','TEXAS_PAGE_HERO_FORM_V1');
          document.querySelectorAll('input[value="TEXAS_PAGE_HERO_FORM_V1"]')[0].parentNode.classList.add('hero_form_button');

          // document.querySelector('.hero_form_button input[name="domain"]').setAttribute('value','https://www.homewarrantyreviews.com/');
          document.querySelector('.hero_form_button input[name="path"]').setAttribute('value','/us/texas/');
          document.querySelector('.hero_form_button input[name="url"]').setAttribute('value','https://www.homewarrantyreviews.com/us/texas/');
        }
    }, 100);
  }
  getData(pageUrl);
}