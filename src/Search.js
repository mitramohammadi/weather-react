import React, { useState } from "react";
import "./Style.css";
//import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";
import ShowWeather from "./ShowWeather";

export default function Search() {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [icon, setIcon] = useState("");

  function showTemperature(response) {
    setTemp(`Temperature: ${Math.round(response.data.main.temp)}°C`);
    setDesc(`Description: ${response.data.weather[0].description}`);
    setHumidity(`Humidity: ${response.data.main.humidity}%`);
    setWind(`Wind: ${Math.round(response.data.wind.speed)}km/h`);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  return (
    <div className="text-center pt-3">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Type a city" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <ShowWeather
        city={city}
        temp={temp}
        desc={desc}
        humidity={humidity}
        wind={wind}
        icon={icon}
      />
      <a href="https://github.com/mitramohammadi/react-weather" target="_blank">
        Coded By Mitra
      </a>
    </div>
  );
}
