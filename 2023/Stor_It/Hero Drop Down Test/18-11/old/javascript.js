var bodyEle = document.querySelector('body');
if (!bodyEle.classList.contains('hero_DropDown')) {
    bodyEle.classList.add('hero_DropDown');
    
    // Put your test code here 
    $('.hero_DropDown #home > .banner-loop').addClass('hero_section');
    $('.hero_section h1').html('Keep your Home and Garage <br>Clutter free <br> with Stor-It Self Storage').after(`<div class="left_content" data-aos="fade-right">
        <ul>
            <li><span class="check"></span> Convenient 24/7 Access</li>
            <li><span class="check"></span> Car & Camper Storage</li>
            <li><span class="check"></span> Commercial Storage</li>
        </ul>
    </div>`);;
    $('.hero_section a[href="#location-list"]').prevAll().remove();
    $('.hero_section a[href="#location-list"]').text('Reserve Now');


    $('.hero_section a[href="#location-list"]').parent().parent().addClass('right_content').wrap('<div class="hero_content" data-aos="fade-left"></div>');
    $('.hero_section .right_content').prepend(`<a class="button white bb reserveBtn" href="javascript:void(0);">Reserve Now</a>`);
    
    $('.hero_section .hero_content').prepend(`<div class="dropDownWrapper">
        <div class="form-group">
            <label for="unitSizes">I am looking for a <span>:</span></label>
            <select id="unitSizes">
                <option value="Storage Locker">Storage Locker</option>
                <option value="5x5 Storage Unit">5 x 5 Storage Unit</option>
                <option value="5x10 Storage Unit">5 x 10 Storage Unit</option>
                <option value="10x10 Storage Unit">10 x 10 Storage Unit</option>
                <option value="10x15 Storage Unit">10 x 15 Storage Unit</option>
                <option value="10x20 Storage Unit">10 x 20 Storage Unit</option>
                <option value="10x30 Storage Unit">10 x 30 Storage Unit</option>
            </select>
        </div>
        <div class="form-group">
            <label for="cities">&nbsp;in<span>:</span></label>
            <select id="cities" name="cities">
                <option value="cities">cities</option>
                <option value="Boise">Boise</option>
                <option value="Caldwell">Caldwell</option>
                <option value="Donnelly">Donnelly</option>
                <option value="Eagle">Eagle</option>
                <option value="McCall">McCall</option>
                <option value="Meridian">Meridian</option>
                <option value="Nampa">Nampa</option>
            </select>
            <div class="error-message">
                Please choose a cities
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" viewBox="0 0 8 7" fill="none">
                  <path d="M3.13397 0.500001C3.51887 -0.166666 4.48113 -0.166667 4.86603 0.5L7.4641 5C7.849 5.66667 7.36788 6.5 6.59808 6.5H1.40192C0.632124 6.5 0.150998 5.66667 0.535898 5L3.13397 0.500001Z" fill="#D34343"></path>
                </svg>
              </div>
        </div>
    </div>`);

    document.querySelector(".hero_section .reserveBtn").addEventListener("click", redirectToSelectedLocation);
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
            return false
        } else {
        }
        if (!cities) {
            document.querySelector('.hero_DropDown .hero_section .hero_content #cities').parentElement.classList.remove('error');
        } else {
            document.querySelector('.hero_DropDown .hero_section .hero_content #cities').parentElement.classList.add('error');
        }

        var citiesError = document.querySelectorAll('#cities');
        citiesError.forEach(function (e) {
            e.addEventListener('change', () => {
                if (!cities) {
                    document.querySelector('.hero_DropDown .hero_section .hero_content #cities').parentElement.classList.add('error');
                } else {
                    document.querySelector('.hero_DropDown .hero_section .hero_content #cities').parentElement.classList.remove('error');
                }
            }, true);
        });
    }

}