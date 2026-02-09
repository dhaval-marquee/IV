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