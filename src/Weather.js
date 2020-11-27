import React from "react";
import "./Weather.css";
import WeatherApp from "./WeatherApp"; 

export default function Weather() {
 
  return (
    <div className="full-wrapper">
     <WeatherApp defaultCity="Lisbon" />
      <small>
        <a href="https://github.com/xramos17/Vanilla-Weather-app">
          Open-source code
        </a>  by Alex Ramos
      </small>
    </div>
  );
}


