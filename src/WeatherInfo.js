import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature"

export default function WeatherInfo(props){


    return(

<div>
    
        <div className="weather-header">
          <h1 className="city-name">{props.data.city}</h1>
          <span className="w-country">
            (<span>{props.data.country}</span>)
          </span>
         
         <FormattedDate date={props.data.date} />

        </div>

<div className="row">
          <div className="col-6">
            <div className="clearfix current-weather">
                <img className="float-left" src={props.data.icon} alt={props.data.description} />
            
              <div className="float-left">
                
<WeatherTemperature celsius={props.data.temperature} unit={props.unit}setUnit={props.setUnit} />
              </div>

            </div>

            <div className="weather-minmax-temperature ml-3 mt-3">
              <ul>
                <li>
                  Today <strong>{Math.round(props.data.highTemperature)}º</strong>
                  <span>{Math.round(props.data.minTemperature)}º</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 weather-info">
            <ul>
              <li className="w-description">{props.data.description}</li>
              <li>
                Humidity: <span className="w-humidity"></span>
                {props.data.humidity}%
              </li>
              <li>
                wind: <span className="w-wind"></span>
                {Math.round(props.data.wind)} km/h
              </li>
            </ul>
          </div>
        </div>
        </div>

    )

}