import dom from './dom';
const weather = (() => {
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

  function createWeather(data) {
    const systemBtn = document.getElementById('systemUM');
    const currentWeather = new Weather(
      {
        name: data.location.name,
        region: data.location.region,
        country: data.location.country,
      },
      data.current.last_updated,
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
  }

  return {
    createWeather,
  };
})();

export default weather;
