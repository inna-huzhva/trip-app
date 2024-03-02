import { useWeather } from './useWeather';
import "./styles/weekForecast.css";

function WeekForecast({trip}) {
  const weather = useWeather(trip);

  return (
    <div>
      <div className="week-forecast-header">Week</div>
      <div className="week-forecast-container">
        {weather && weather.days.map(d => (
          <div className="week-forecast-card" key={d.datetime}>
            <div className="day-of-week">{d.datetime}</div>
            <div className="weather-icon">
              <img src={`./weather-icons/${d.icon}.svg`} alt="weather-icon" />
            </div>
            <div className="day-temp">{ d.tempmax }&#176;/{ d.tempmin }&#176;</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeekForecast;
