import TodaysWeather from "./TodaysWeather";
import CountdownTimer from "./CountdownTimer";
import {useTodayWeather} from "./useWeather";
import "./styles/weatherForecast.css";

function WeatherForecast({trip}) {
  const weather = useTodayWeather(trip.city);
  return (
    <div className="weather-forecast-container">
      {weather && <TodaysWeather weather={weather} />}
      <CountdownTimer targetDate={trip.startDate} />
    </div>
  );
}

export default WeatherForecast;
