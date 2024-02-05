const weather = (() => {
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
    constructor(place, condition, temp, humidity, cloud, precip, wind, vis) {
      this.place = place;
      this.condition = condition;
      this.temp = temp;
      this.humidity = humidity;
      this.cloud = cloud;
      this.precip = precip;
      this.wind = wind;
      this.vis = vis;
    }
  }
  let currentWeather;

  function createWeather(data) {
    const weather = new Weather(
      {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
      },
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
    currentWeather = weather;
  }

  return {
    initPage,
    currentWeather,
  };
})();

export default weather;
