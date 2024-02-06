import weather from './weather';
import forecast from './forecast';
const dom = (() => {
  function initPage() {
    const systemBtn = document.getElementById('systemUM');
    const userInput = document.getElementById('location');
    const searchBtn = document.getElementById('search');
    userInput.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        searchBtn.click();
      }
    });
    searchBtn.addEventListener('click', () => {
      const location = userInput.value;
      if (location === '') return;
      getWeather(location);
      userInput.value = '';
    });
    systemBtn.addEventListener('click', () => {
      if (systemBtn.className === 'SI') {
        systemBtn.className = 'USC';
        systemBtn.title = 'United States Customary System';
        systemBtn.textContent = 'USC';
        if (weatherData === undefined) return;
        displayWeather(weatherData, 'USC');
        // displayForecast(forecastData, 'USC');
      } else {
        systemBtn.className = 'SI';
        systemBtn.title = 'International System of Units';
        systemBtn.textContent = 'SI';
        if (weatherData === undefined) return;
        displayWeather(weatherData, 'SI');
        // displayForecast(forecastData, 'SI');
      }
    });
  }
  async function getWeather(location) {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=d0477b1da8904502b5293956240302&q=${location}&days=3`,
        { mode: 'cors' }
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message);
      }
      weather.createWeather(data);
      forecast.createForecast(data);
    } catch (error) {
      alert(error);
    }
  }
  const pageBg = document.getElementById('content');
  function checkWeather(data) {
    const iData = data.toLowerCase();
    let weather;
    if (iData.includes('sunny') || iData.includes('clear')) weather = 'sunny';
    if (iData.includes('cloudy') || iData.includes('overcast'))
      weather = 'cloudy';
    if (iData.includes('rain')) weather = 'rainy';
    if (iData.includes('snow')) weather = 'snowy';
    if (iData.includes('fog') || iData.includes('mist')) weather = 'foggy';
    setBg(weather);
  }
  function setBg(weather) {
    switch (weather) {
      case 'sunny':
        pageBg.className = 'sunny';
        break;
      case 'cloudy':
        pageBg.className = 'cloudy';
        break;
      case 'rainy':
        pageBg.className = 'rainy';
        break;
      case 'snowy':
        pageBg.className = 'snowy';
        break;
      case 'foggy':
        pageBg.className = 'foggy';
        break;
      default:
        pageBg.className = 'sunny';
    }
  }
  let weatherData;
  function displayWeather(data, system) {
    const currentWeather = document.getElementById('currentWeather');
    const location = document.getElementById('currentLocation');
    const time = document.getElementById('time');
    const icon = document.getElementById('weatherIcon');
    const condition = document.getElementById('currentCondition');
    const cloud = document.getElementById('cloud');
    const temp = document.getElementById('currentTemp');
    const humidity = document.getElementById('currentHumidity');
    const precip = document.getElementById('currentPrecip');
    const wind = document.getElementById('currentWind');
    const vis = document.getElementById('currentVis');

    currentWeather.className = '';
    location.textContent = `${data.place.name}, ${data.place.region}, ${data.place.country}`;
    time.textContent = data.time;
    icon.src = data.condition.icon;
    icon.alt = data.condition.text;
    condition.textContent = data.condition.text;
    cloud.textContent = data.cloud;
    humidity.textContent = data.humidity;
    if (system === 'SI') {
      temp.textContent = data.temp.SI;
      precip.textContent = data.precip.SI;
      wind.textContent = data.wind.SI;
      vis.textContent = data.vis.SI;
    }
    if (system === 'USC') {
      temp.textContent = data.temp.USC;
      precip.textContent = data.precip.USC;
      wind.textContent = data.wind.USC;
      vis.textContent = data.vis.USC;
    }
    weatherData = data;
  }

  // let forecastData;
  // function displayForecast(data, system) {
  // const forecastWrapper = document.getElementById('#forecast');
  //   data.forEach(el => {

  //   });
  // }
  return {
    setBg,
    initPage,
    displayWeather,
    checkWeather,
    // displayForecast,
  };
})();

export default dom;
