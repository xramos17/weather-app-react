import React, { useState } from "react";
import axios from 'axios';
import "./Weather.css";


export default function Weather (){

const [city, setCity] = useState("Lisbon");
const [loaded, setLoaded] = useState(false);
const [weather, setWeather] = useState({});


function showInfo (response){
 setLoaded(true);
 setWeather({
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      highTemperature: response.data.main.temp_max,
      minTemperature : response.data.main.temp_min,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
}

function handleSubmit(event){
    event.preventDefault();   
    let apiKey = "aa9bf928550b2eb28bf9a5399ca95f34";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

     axios.get(url).then(showInfo);

     }

function updateCity(event){
 event.preventDefault();   
 setCity(event.target.value);
 
   }
   
   let form = (  
   <form onSubmit={handleSubmit} >
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                onChange={updateCity}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="search-button" />
              <div className="col-2 geo-button image" title="Current Location">
                <input
                  type="submit"
                  value="📍"
                  className="button-current-geo"
                />
              </div>
            </div>
          </div>
        </form>)

let header =(<div className="weather-header">
          <h1 className="city-name">{city}</h1>
          <span className="w-country">
            (<span>{weather.country}</span>)
          </span>

          <ul>
            <li>
              <span>{"Friday, 16 October"}</span>
              
            </li>
            <li>
              <span>{"18:00"}</span>
              
            </li>
          </ul>
        </div>);

let Description= (

<div className="row">
          <div className="col-6">
            <div className="clearfix current-weather">
                <img className="float-left" src={weather.icon} alt={weather.description} />
            
              <div className="float-left">
                <strong className="current-temp">
                  {Math.round(weather.temperature)}
                </strong>
                <span className="measures-cf">
                  <a href="/" >Cº</a> | <a href="/">Fº</a>
                </span>
              </div>
            </div>
            <div className="weather-minmax-temperature ml-3 mt-3">
              <ul>
                <li>
                  Today <strong>{Math.round(weather.highTemperature)}º</strong>
                  <span>{Math.round(weather.minTemperature)}º</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 weather-info">
            <ul>
              <li className="w-description">{weather.description}</li>
              <li>
                Humidity: <span className="w-humidity"></span>
                {weather.humidity}%
              </li>
              <li>
                wind: <span className="w-wind"></span>
                {Math.round(weather.wind)} km/h
              </li>
            </ul>
          </div>
        </div>);


if(loaded){
return (   
 <div className="app-wrapper">
       {form}
       {header}
       
       {Description}
        <div className="weather-forecast row"></div>
      </div>
        
)}else{
    return( <div className="app-wrapper">
       {form}
       {header}
       
       {Description}
        <div className="weather-forecast row"></div>

      </div>
        )
};






};