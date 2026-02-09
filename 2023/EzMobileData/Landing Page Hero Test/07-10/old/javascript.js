var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('hero_iv')) {
    bodyEle.classList.add('hero_iv');
    
    // Put your test code here
    $('.hero_iv #home > .banner-loop').addClass('hero_section');
    $('.hero_section h1').html('Keep your Home and Garage <br> Family Owned Storage Solution <br>Clutter Free <br> with Stor-It Self Storage').after(`<div class="left_content" data-aos="fade-right">
        <ul>
            <li><span class="check"></span> Convenient 24/7 Access</li>
            <li><span class="check"></span> Car & Camper Storage</li>
            <li><span class="check"></span> Commercial Storage</li>
        </ul>
    </div>`);;
    $('.hero_section a[href="#location-list"]').prevAll().remove();
    $('.hero_section a[href="#location-list"]').text('Reserve Now');

    document.querySelector('.hero_section a[href="#location-list"]').setAttribute('onclick','redirectToSelectedLocation()');

    $('.hero_section a[href="#location-list"]').parent().parent().addClass('right_content').wrap('<div class="hero_content"></div>');
    $('.hero_section .right_content').prepend(`<a class="button white bb reserveBtn" href="javascript:void(0);" onclick="redirectToSelectedLocation()">Reserve Now</a>`);
    
    $('.hero_section .hero_content').prepend(`<div class="dropDownWrapper">
        <label for="unitSizes">I am looking for a:</label>
        <select id="unitSizes">
            <option value="Storage Locker">Storage Locker</option>
            <option value="5x5 Storage Unit">5 x 5 Storage Unit</option>
            <option value="5x10 Storage Unit">5 x 10 Storage Unit</option>
            <option value="10x10 Storage Unit">10 x 10 Storage Unit</option>
            <option value="10x15 Storage Unit">10 x 15 Storage Unit</option>
            <option value="10x20 Storage Unit">10 x 20 Storage Unit</option>
            <option value="10x30 Storage Unit">10 x 30 Storage Unit</option>
        </select>
        <label for="cities">&nbsp;in:</label>
        <select id="cities">
            <option value="cities">cities</option>
            <option value="Boise">Boise</option>
            <option value="Caldwell">Caldwell</option>
            <option value="Donnelly">Donnelly</option>
            <option value="Eagle">Eagle</option>
            <option value="McCall">McCall</option>
            <option value="Meridian">Meridian</option>
            <option value="Nampa">Nampa</option>
        </select></div>`);


    function redirectToSelectedLocation() {
        const unitSizes = document.getElementById("unitSizes").value;
        const cities = document.getElementById("cities").value;

        // Define the URL directions for each city
        const urlDirections = {
            Boise: "https://www.stor-it.com/location-assignment/boise/",
            Caldwell: "https://www.stor-it.com/location-assignment/caldwell/",
            Donnelly: "https://www.stor-it.com/location-assignment/donnelly/",
            Eagle: "https://www.stor-it.com/location-assignment/eagle/",
            McCall: "https://www.stor-it.com/location-assignment/mccall/",
            Meridian: "https://www.stor-it.com/location-assignment/meridian/",
            Nampa: "https://www.stor-it.com/location-assignment/nampa/"
        };

        // Check if the selected city exists in the URL directions
        if (urlDirections[cities]) {
            const selectedURL = urlDirections[cities];
            window.location.href = selectedURL;
        } else {
            alert("Invalid selection.");
        }
    }
}

