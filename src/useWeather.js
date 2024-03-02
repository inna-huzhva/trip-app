import { useState, useEffect } from "react";

const key = "8M9GR3C6QF22FZ6UF6ADS4L66";
const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const extraParams = "include=days&elements=tempmax,tempmin,temp,datetime,icon&unitGroup=metric";

export const useWeather = ({city, startDate, endDate}) => {
  const request = `${url}${city}/${startDate}/${endDate}?key=${key}&${extraParams}`;

  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch(request)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
      });
  }, [city, startDate, endDate]);

  return weather;
}

export const useTodayWeather = (city) => {
  const today = new Date().toISOString();
  const request = `${url}${city}/${today}?key=${key}&${extraParams}`;

  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch(request)
      .then(res => res.json())
      .then(data => {
        setWeather(data);
      });
  }, [city]);

  return weather;
};
