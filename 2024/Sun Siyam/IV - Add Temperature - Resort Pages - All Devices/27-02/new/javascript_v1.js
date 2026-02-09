const apiKey = '6f69952d8b4d78e746b8a5666c9b080d';

var pageURL = window.location.href.split('?')[0].split('#')[0]

function updateLongLat() {
    if (pageURL == 'https://www.sunsiyam.com/siyam-world/') {

        $('.local-info').attr('data-lat','5.7304699').attr('data-long','73.3592298');

    } else if (pageURL == 'https://www.sunsiyam.com/sun-siyam-iru-fushi/') {

        $('.local-info').attr('data-lat','5.7417281').attr('data-long','73.3250813');

    } else if (pageURL == 'https://www.sunsiyam.com/sun-siyam-iru-veli/') {

        $('.local-info').attr('data-lat','2.9344391').attr('data-long','72.9608917');
        
    } else if (pageURL == 'https://www.sunsiyam.com/sun-siyam-vilu-reef/') {

        $('.local-info').attr('data-lat','3.0033368').attr('data-long','73.0006248');
        
    } else if (pageURL == 'https://www.sunsiyam.com/sun-siyam-olhuveli/') {

        $('.local-info').attr('data-lat','3.849435').attr('data-long','73.4546966');

    } else if (pageURL == 'https://www.sunsiyam.com/sun-siyam-pasikudah/') {

        $('.local-info').attr('data-lat','7.9256619').attr('data-long','81.5726379');

    }
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

async function fetchWeather() {

    const latitude = $('.local-info').attr('data-lat');
    const longitude = $('.local-info').attr('data-long');

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        
        const temperatureCelsius = Math.floor(data.main.temp);
        const temperatureFahrenheit = Math.floor(celsiusToFahrenheit(temperatureCelsius));;
        
        document.getElementById('temperature').innerHTML = temperatureCelsius + "°C &nbsp " + temperatureFahrenheit + "°F";
    } catch (error) {
        console.error('Error fetching weather:', error);
    }
}

// Function to display current local time in HH:MM format
function displayLocalTime() {
    if (pageURL == 'https://www.sunsiyam.com/sun-siyam-pasikudah/') {
        const now = new Date();
        const options = {
            timeZone: 'Asia/Colombo',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric'
        };
        const localTimeString = now.toLocaleTimeString('en-US', options);
        document.getElementById('local-time').textContent = localTimeString;
    } else {
        const now = new Date();
        const options = {
            timeZone: 'Indian/Maldives',
            hour12: true,
            hour: 'numeric',
            minute: 'numeric'
        };
        const localTimeString = now.toLocaleTimeString('en-US', options);
        document.getElementById('local-time').textContent = localTimeString;
    }
}

// Function to update local time when the minute changes
function updateLocalTime() {
    const now = new Date();
    displayLocalTime();
    setTimeout(updateLocalTime, (60 - now.getSeconds()) * 1000 + (1000 - now.getMilliseconds()));
}

if(!$('body').hasClass('locationTime')) {
	$('body').addClass('locationTime');

	$('.intro h1').after(`<div class="local-info">
        <span>LOCAL TIME &nbsp <span id="local-time">Not Available</span></span> 
        &nbsp &nbsp | &nbsp &nbsp
        <span> WEATHER &nbsp <span id="temperature">Not Available</span></span>
    </div>`);

    updateLongLat();
    displayLocalTime();
    fetchWeather();
    updateLocalTime();
}