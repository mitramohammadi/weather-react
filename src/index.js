import React from "react";
import ReactDOM from "react-dom";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

function index() {
  return (
    <div className="App">
      <div className="container">
        <Weather city="london" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<index />, rootElement);
