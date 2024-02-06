import weather from './weather';
import forecast from './forecast';
const dom = (() => {
  const forecastWrapper = document.getElementById('forecast');
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
      forecastWrapper.innerHTML = '';
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
        forecastWrapper.innerHTML = '';
        displayForecast(forecastData, 'USC');
      } else {
        systemBtn.className = 'SI';
        systemBtn.title = 'International System of Units';
        systemBtn.textContent = 'SI';
        if (weatherData === undefined) return;
        displayWeather(weatherData, 'SI');
        forecastWrapper.innerHTML = '';
        displayForecast(forecastData, 'SI');
      }
    });
  }
  async function getWeather(location) {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=d0477b1da8904502b5293956240302&q=${location}&days=3`,
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
  let forecastData;
  function displayForecast(data, system) {
    data.forEach((el) => {
      const day = document.createElement('div');
      day.className = 'day faded-out';
      const condWrapper = document.createElement('div');
      condWrapper.className = 'condWrapper';
      const time = document.createElement('p');
      time.className = 'time';
      time.textContent = el.date;
      const innerWrapper = document.createElement('div');
      const icon = document.createElement('img');
      icon.src = el.condition.icon;
      icon.alt = el.condition.text;
      const condText = document.createElement('p');
      condText.className = 'condition';
      condText.textContent = el.condition.text;
      const cardsWrapper = document.createElement('div');
      cardsWrapper.className = 'cardsWrapper';
      const card1 = document.createElement('div');
      card1.className = 'card temp';
      const card1H3 = document.createElement('h3');
      card1H3.textContent = 'Temperature';
      const tempWrapper = document.createElement('div');
      tempWrapper.className = 'tempWrapper';
      const avgTemp = document.createElement('p');
      avgTemp.className = 'avgTemp';
      const minTemp = document.createElement('p');
      minTemp.className = 'minTemp';
      const maxTemp = document.createElement('p');
      maxTemp.className = 'maxTemp';
      const card2 = document.createElement('div');
      card2.className = 'card';
      const card2H3 = document.createElement('h3');
      card2H3.textContent = 'Humidity';
      const humidity = document.createElement('p');
      humidity.className = 'humidity';
      humidity.textContent = el.humidity;
      const card3 = document.createElement('div');
      card3.className = 'card';
      const card3H3 = document.createElement('h3');
      card3H3.textContent = 'Precipitations';
      const precip = document.createElement('p');
      precip.className = 'precip';
      const card4 = document.createElement('div');
      card4.className = 'card';
      const card4H3 = document.createElement('h3');
      card4H3.textContent = 'Snow';
      const snow = document.createElement('p');
      snow.className = 'snow';
      snow.textContent = el.snow;
      const card5 = document.createElement('div');
      card5.className = 'card';
      const card5H3 = document.createElement('h3');
      card5H3.textContent = 'Wind speed';
      const wind = document.createElement('p');
      wind.className = 'wind';
      const card6 = document.createElement('div');
      card6.className = 'card';
      const card6H3 = document.createElement('h3');
      card6H3.textContent = 'Visibility';
      const vis = document.createElement('p');
      vis.className = 'vis';
      if (system === 'SI') {
        avgTemp.textContent = el.temp.avgSI;
        minTemp.textContent = el.temp.minSI;
        maxTemp.textContent = el.temp.maxSI;
        precip.textContent = el.precip.SI;
        wind.textContent = el.wind.SI;
        vis.textContent = el.wind.SI;
      }
      if (system === 'USC') {
        avgTemp.textContent = el.temp.avgUSC;
        minTemp.textContent = el.temp.minUSC;
        maxTemp.textContent = el.temp.maxUSC;
        precip.textContent = el.precip.USC;
        wind.textContent = el.wind.USC;
        vis.textContent = el.wind.USC;
      }
      forecastWrapper.appendChild(day);
      day.append(condWrapper, cardsWrapper);
      condWrapper.append(time, innerWrapper);
      innerWrapper.append(icon, condText);
      cardsWrapper.append(card1, card2, card3, card4, card5, card6);
      card1.append(card1H3, tempWrapper);
      tempWrapper.append(avgTemp, minTemp, maxTemp);
      card2.append(card2H3, humidity);
      card3.append(card3H3, precip);
      card4.append(card4H3, snow);
      card5.append(card5H3, wind);
      card6.append(card6H3, vis);
    });
    forecastData = data;
  }
  return {
    setBg,
    initPage,
    displayWeather,
    checkWeather,
    displayForecast,
  };
})();

export default dom;
