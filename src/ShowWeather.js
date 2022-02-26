import React, { useState } from "react";
import "./Style.css";
//import ReactAnimatedWeather from "react-animated-weather";
import axios from "axios";

export default function ShowWeather(props) {
  if (props.temp) {
    return (
      <div>
        <ui className="pt-4">
          <li>{props.temp}</li>
          <li>{props.desc}</li>
          <li>{props.humidity}</li>
          <li>{props.wind}</li>
          <li>
            <img src={props.icon} />
          </li>
        </ui>
      </div>
    );
  } else {
    return <div></div>;
  }
}
