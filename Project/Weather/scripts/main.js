// async function loadWeater() {
//     const res = await fetch('https://get.geojs.io/v1/ip/geo.json');
//     const data = await res.json();
//     console.log(data);
//     const { city, latitude, longitude } = data //деструктуризация получить  данные по широте, долготе и городу. с ссылки фетч
//     console.log(city, latitude, longitude);
//     const weatherRes = await fetch
//         (`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//         ); // заменили координаты в строке на данные выше
//     const weatherData = await weatherRes.json()
//     console.log(weatherData);

//     const { current_weather_units, current_weather } = weatherData;
//     const { temperature, windspeed, weathercode } = current_weather; //получите данные погоды: температуру, скорость ветра и. т.д
//     console.log(temperature, windspeed, weathercode);

// }
//loadWeater()

const time = document.querySelector('.main-date');
const cityInput = document.querySelector('input');

const searchButton = document.querySelector('button');
const bulk = document.querySelector('.bulk-info');
const actualInfo = document.querySelector('.acc-info')

const actualDate = document.querySelector('#date');
const img = document.querySelector('img');
const locations = document.querySelector('.location');
const weatherDescription = document.querySelector('.weather-description');
const tempInfo = document.querySelector('.temperature');
const forecast = document.querySelector('.future-info')
const nextDays = document.querySelector('.future-weather');
const glowBox = document.querySelector('.glow-box');
const main = document.querySelector('main');
const glow = Object.assign(document.createElement('div'), { className: 'glow' });

let cityID;
let revealDetailsHandler;

const inputField = (event) => {
    cityID = event.target.value;
}
const searchButtonHandler = (event) => {
    event.preventDefault();
    if(!cityID || cityID === '') {
        alertSound.play();
        alert("Лооооох!");
    }else{
    cityInput.textContent = cityID;
    serverWork();
    forecast.innerHTML = '';
    actualInfo.removeEventListener('click', revealDetailsHandler);
    }
}

const serverWork = async () => {
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=35850dacb6a54f5c8db102528240603&q=' + cityID + '&days=6&aqi=no&alerts=no');
    const body = await response.json();

    timeAndDate(body);
    city(body);
    weather(body);
    temp(body);
    icon(body);
    date();
    // console.log(body);

    let actualTime = new Date(body.location.localtime).getHours();
    // console.log(actualTime);

    if (actualTime >= 18 || actualTime < 6) {
        main.style.backgroundImage = 'linear-gradient(#10054b, #099981)';
        glow.style.boxShadow = 'rgb(145, 158, 185) 0 0 90px 50px';
    } else {
        main.style.backgroundImage = 'linear-gradient(#1a70c0, #099981 60%)';
        glow.style.boxShadow = 'rgb(255, 255, 255) 0 0 90px 50px';
    }

    const checkingWeather = await body;
    const weatherData = checkingWeather.forecast.forecastday;
    const actualDetails = checkingWeather.current;

    blah(weatherData);

    revealDetailsHandler = () => {
        detailedBlah(actualDetails);
        actualInfo.removeEventListener('click',revealDetailsHandler);
    }

    actualInfo.addEventListener('click', revealDetailsHandler);
};

function blah(arr) {
    const days = [
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
        'Sun'
    ];
    arr.map(element => {
        const futureDay = (new Date(element.date)).getDay();
        const nextDaysDay = Object.assign(document.createElement('p'), {className : 'day'});
        const nextDaysTempNight = Object.assign(document.createElement('p'), {className: 'temp-night'});
        const nextDaysTempDay = Object.assign(document.createElement('p'), { className: 'temp-day' });
        const nextDaysImgs = Object.assign(document.createElement('img'), {className :'mini-imgs'});
        const nextDays = Object.assign(document.createElement('div'), {className :'future-weather'});


        nextDaysTempDay.textContent = element.day.maxtemp_c + '°C';
        nextDaysTempNight.textContent = element.day.mintemp_c + '°C';
        nextDaysDay.textContent = days[futureDay];
        nextDaysImgs.src = element.day.condition.icon;
        nextDays.append(nextDaysImgs, nextDaysDay, nextDaysTempDay, nextDaysTempNight);
        forecast.append(nextDays);

    });
}
let additionalInfo;

function detailedBlah (arr){

    additionalInfo = Object.assign(document.createElement('div'), {className : 'add-info'});
    const feelsLike = Object.assign(document.createElement('div'), {className : 'feels-like'});
    const clouds = Object.assign(document.createElement('div'), {className : 'clouds'});
    const wind = Object.assign(document.createElement('div'), {className : 'wind'});
    const pressure = Object.assign(document.createElement('div'), {className : 'pressure'});
    const humidity = Object.assign(document.createElement('div'), {className : 'humidity'});
    const precipitation = Object.assign(document.createElement('div'), {className : 'precipitation'});
    const uv = Object.assign(document.createElement('div'), {className : 'uv'});

    feelsLike.textContent = 'Feels like: ' + arr.feelslike_c;
    clouds.textContent = 'Cloud: ' + arr.cloud;
    wind.textContent = 'Wind speed: ' + arr.wind_kph;
    pressure.textContent = 'Pressure: ' + arr.pressure_in;
    humidity.textContent = 'Humidity: ' + arr.humidity;
    precipitation.textContent = 'Precipitation: ' + arr.precip_in;
    uv.textContent = 'UV level: ' + arr.uv;
    
    additionalInfo.append(feelsLike, clouds, wind, pressure, humidity, precipitation, uv);
    additionalInfo.addEventListener('click', function() {
        this.remove();
        actualInfo.addEventListener('click', revealDetailsHandler);
    });
    bulk.append(additionalInfo);
}

const timeAndDate = (locationTime) => {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    const date = new Date(locationTime.location.localtime).getDay();
    time.textContent = days[date];
    console.log(date);
}

const city = (city) => {
    locations.textContent = city.location.name;
}

const weather = (weather) => {
    weatherDescription.textContent = weather.current.condition.text;
}

const temp = (temp) => {
    tempInfo.textContent = temp.current.temp_c + '°C';
}
const icon = (icon) => {
    let currentUrl = String(icon.current.condition.icon);
    let newUrl = currentUrl.replace(/64/g, '128');
    img.src = newUrl;
    glowBox.append(glow);
}

const date = () => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'November',
        'December',
    ];

    const dayDate = new Date().getDate();
    const monthDate = new Date().getMonth();
    // console.log(dayDate);

    actualDate.textContent = dayDate + ', ' + months[monthDate];
}

cityInput.addEventListener('input', inputField);
searchButton.addEventListener("click", searchButtonHandler);
cityInput.addEventListener('focus', () => {
    cityInput.value = '';
    cityID = '';
    forecast.innerHTML = '';
    
    const existingAdditionalInfo = document.querySelector('.add-info');
    if (existingAdditionalInfo) {
        existingAdditionalInfo.remove();
    }
    actualInfo.addEventListener('click', revealDetailsHandler);
});