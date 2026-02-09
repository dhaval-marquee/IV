var pageURL = [
	'https://www.shoesforcrews.com/catalog/foodservice',
	'https://www.shoesforcrews.com/catalog/industrial-women-all-work-boots',
	'https://www.shoesforcrews.com/catalog/industrial-men-all-work-boots',
	'https://www.shoesforcrews.com/catalog/healthcare',
	'https://www.shoesforcrews.com/catalog/supermarkets'
];

var bannerImg;
var pageTitle;
var pageContent;
var page = window.location.href.split('?')[0].split('#')[0];

if(pageURL.indexOf('https://www.shoesforcrews.com/catalog/foodservice') > -1) {

    bannerImg = '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/shoesforcrews/Industry_Category_Page_Hero_Test/Restaurant.png';
    pageTitle = 'Move With Confidence, Serve With Comfort';
    pageContent = 'Slip-resistant shoes for busy kitchens and floors';

} else if (pageURL.indexOf('https://www.shoesforcrews.com/catalog/industrial-women-all-work-boots') > -1 ||
            pageURL.indexOf('https://www.shoesforcrews.com/catalog/industrial-men-all-work-boots') > -1) {

    bannerImg = '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/shoesforcrews/Industry_Category_Page_Hero_Test/Industrial.png';
    pageTitle = 'Work Boots Built for Your Toughest Days';
    pageContent = 'Experience protection and comfort like never before';

} else if (pageURL.indexOf('https://www.shoesforcrews.com/catalog/healthcare') > -1) {

    bannerImg = '//res.cloudinary.com/ignite-visibility/image/upload/f_auto/shoesforcrews/Industry_Category_Page_Hero_Test/Healthcare.png';
    pageTitle = 'Comfort You Can Count On, Protection You Can Trust';
    pageContent = 'Slip-Resistant shoes for healthcare professionals';

} else if (pageURL.indexOf('https://www.shoesforcrews.com/catalog/supermarkets') > -1) {

    bannerImg = '//www.shoesforcrews.com/sfc3/images/rwd/dtc/home/homev3/shop-women.jpg';
    pageTitle = 'Conquer Your Shift With Confidence';
    pageContent = 'Slip-resistant shoes that keep you steady on your feet, all shift long';

}

function loadTestCode() {
	if(pageURL.indexOf(page) > -1) {
        var getTitle = setInterval(() => {
            if (document.querySelectorAll('h1')[0].closest('.merce-column') && 
                document.querySelectorAll('.hero_section').length == 0) {
                clearInterval(getTitle);
    
                document.querySelector('body').classList.add('hero_banner_iv');
                document.querySelectorAll('h1')[0].closest('.merce-column').classList.add('hero_section');
                document.querySelector('.hero_section').innerHTML = `<div class="hero_container">
                    <div class="hero_img">
                        <img src="`+bannerImg+`" alt="Hero Banner">
                    </div>
                    <div class="hero_content">
                        <h1>`+pageTitle+`</h1>
                        <p>`+pageContent+`</p>
                    </div>
                </div>`;
            }
        }, 100);
    }
}

// Set Initial URL
var initialURL = window.location.href;
window.addEventListener('click', function(e){
	if(initialURL !== window.location.href){
		initialURL = window.location.href;
		loadTestCode();
	}
});
window.addEventListener('popstate', loadTestCode);
loadTestCode();