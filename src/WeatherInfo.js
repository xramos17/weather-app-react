import React from "react";
import FormattedDate from "./FormattedDate"
import WeatherTemperature from "./WeatherTemperature"
import WeatherSYS from "./WeatherSYS";


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
                  
<WeatherTemperature celsius={props.data.temperature} unit={props.unit} setUnit={props.setUnit} />

            </div>
 


             <WeatherSYS sunrise={props.data.sunrise} sunset ={props.data.sunset}  />
              
           

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