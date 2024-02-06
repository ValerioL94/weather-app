import dom from './dom';
const forecast = (() => {
  class Forecast {
    constructor(date, condition, temp, humidity, precip, snow, wind, vis) {
      this.date = date;
      this.condition = condition;
      this.temp = temp;
      this.humidity = humidity;
      this.precip = precip;
      this.snow = snow;
      this.wind = wind;
      this.vis = vis;
    }
  }

  function createForecast(data) {
    const systemBtn = document.getElementById('systemUM');
    const forecast3Days = [];
    data.forecast.forecastday.forEach((el) => {
      const forecast = new Forecast(
        el.date,
        {
          icon: el.day.condition.icon,
          text: el.day.condition.text,
        },
        {
          avgSI: `${el.day.avgtemp_c}°C`,
          avgUSC: `${el.day.avgtemp_f}°F`,
          minSI: `${el.day.mintemp_c}°C`,
          minUSC: `${el.day.mintemp_f}°F`,
          maxSI: `${el.day.maxtemp_c}°C`,
          maxUSC: `${el.day.maxtemp_f}°F`,
        },
        `${el.day.avghumidity}%`,
        {
          SI: `${el.day.totalprecip_mm}mm`,
          USC: `${el.day.totalprecip_in}in`,
        },
        `${el.day.totalsnow_cm}cm`,
        {
          SI: `${el.day.maxwind_kph}kph`,
          USC: `${el.day.maxwind_mph}mph`,
        },
        {
          SI: `${el.day.avgvis_km}km`,
          USC: `${el.day.avgvis_miles}miles`,
        }
      );
      forecast3Days.push(forecast);
      //   if (systemBtn.className === 'SI')
      //     dom.displayForecast(forecast3Days, 'SI');
      //   else dom.displayForecast(forecast3Days, 'USC');
    });
    console.log(forecast3Days);
  }
  return {
    createForecast,
  };
})();
export default forecast;
