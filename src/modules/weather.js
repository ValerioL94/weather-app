import dom from './dom';
const weather = (() => {
  const systemBtn = document.getElementById('metricSystem');
  function initPage() {
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
        if (weather === undefined) return;
        dom.displayWeather(weather, 'USC');
      } else {
        systemBtn.className = 'SI';
        systemBtn.title = 'International System of Units';
        systemBtn.textContent = 'SI';
        if (weather === undefined) return;
        dom.displayWeather(weather, 'SI');
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
      createWeather(data);
    } catch (error) {
      alert(error);
    }
  }

  class Weather {
    constructor(
      place,
      time,
      condition,
      temp,
      humidity,
      cloud,
      precip,
      wind,
      vis
    ) {
      this.place = place;
      this.time = time;
      this.condition = condition;
      this.temp = temp;
      this.humidity = humidity;
      this.cloud = cloud;
      this.precip = precip;
      this.wind = wind;
      this.vis = vis;
    }
  }
  let weather;
  function createWeather(data) {
    const currentWeather = new Weather(
      {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
      },
      `${data.current.last_updated}`,
      {
        icon: data.current.condition.icon,
        text: data.current.condition.text,
      },
      {
        SI: `${data.current.temp_c}°C`,
        USC: `${data.current.temp_f}°F`,
      },
      `${data.current.humidity}%`,
      `${data.current.cloud}%`,
      {
        SI: `${data.current.precip_mm}mm`,
        USC: `${data.current.precip_in}in`,
      },
      {
        SI: `${data.current.wind_kph}kph`,
        USC: `${data.current.wind_mph}mph`,
      },
      {
        SI: `${data.current.vis_km}km`,
        USC: `${data.current.vis_miles}miles`,
      }
    );
    if (systemBtn.className === 'SI') dom.displayWeather(currentWeather, 'SI');
    else dom.displayWeather(currentWeather, 'USC');
    dom.checkWeather(data.current.condition.text);
    weather = currentWeather;
  }

  return {
    initPage,
  };
})();

export default weather;
