import React from "react";
import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function forecastIcon() {
    let icon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return `${icon}`;
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div className="WeatherForecastPreview">
      <div className="forecast-time">{day()}</div>

      <div className="forecast-icon">
        <img className="forecast-icon-img" src={forecastIcon()} />
      </div>

      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemperature()} </span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
