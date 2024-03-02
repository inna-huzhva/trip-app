function TodaysWeather({weather}) {
  const city = weather.address;
  const forecast = weather.days[0];
  const date = forecast.datetime;
  const temperature = forecast.temp;
  const icon = `./weather-icons/${forecast.icon}.svg`;

  return (
    <div className="todays-weather-container">
      <div className="current-day">{ date }</div>
      <div className="icon-with-temp">
        <img src={ icon } alt="weather-icone"/>
        <span className="temperature">{ temperature }</span>
        <span className="degree-symbol">&#8451;</span>
      </div>
      <div className="city">{ city }</div>
    </div>
  );
}

export default TodaysWeather;
