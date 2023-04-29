const inputBox = document.querySelector('.input-box');
const searchBtn = document.querySelector('#searchBtn');
const weather_img = document.querySelector('.weather-img');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const humidity = document.querySelector('#humidity');
const wind_speed = document.querySelector('#wind-speed');


async function checkWeather(city) {
    const api_key = "6321967eff7da6fdac5b5877ae9895ef";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    temp.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}\xB0C`
    desc.innerHTML = `${weather_data.weather[0].description}`
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    console.log(weather_data);


    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "img/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "img/clear.png";
            break;
        case 'Rain':
            weather_img.src = "img/rain.png";
            break;
        case 'Mist':
            weather_img.src = "img/mist.png";
            break;
        case 'Snow':
            weather_img.src = "img/snow.png";
            break;
    }
}

    searchBtn.addEventListener('click', () => {
        checkWeather(inputBox.value);
    });