const dom = (() => {
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
  }
  return {
    checkWeather,
    setBg,
    displayWeather,
  };
})();

export default dom;
