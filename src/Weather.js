import React, { useState } from "react";
import "./Weather.css";
//import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState(props.city);
  let [flag, setFlag] = useState(false);

  function showWeatherInfo(response) {
    setWeather({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    setFlag(true);
  }

  function getWeatherInfo() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showWeatherInfo);
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showWeatherInfo);
  }

  if (flag) {
    return (
      <div className="weather-app text-center pt-3">
        <form className="input-form text-center pt-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter a city"
            onChange={updateCity}
            className="search-city"
          />
          <input type="submit" value="Search" className="search-button " />
        </form>
        <div className="row">
          <div className="col-6">
            <img src={weather.icon} />
            <span id="current-temp"> {weather.temperature} °C</span>
          </div>
          <div className="col-6">
            <br />
            <ul>
              <li>
                <span>{weather.city}</span>
              </li>
              <li>
                <span>
                  <FormattedDate date={weather.date} />
                </span>
              </li>
              <li>
                <span>{weather.description}</span>
              </li>
              <li>
                <span>humidity: {weather.humidity}%</span>
                <span> Wind :{weather.wind} km/h</span>
              </li>
            </ul>
          </div>
        </div>
        <WeatherForecast coordinates={weather.coordinates} />
        <a
          href="https://github.com/mitramohammadi/weather-react"
          rel="noreferrer"
          target="_blank"
        >
          Coded By Mitra
        </a>
      </div>
    );
  } else {
    getWeatherInfo();
    return <div className="weather-app text-center pt-3">Loading...</div>;
  }
}
