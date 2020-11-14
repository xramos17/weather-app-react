import React, { useState } from "react";
import axios from 'axios';
import "./Weather.css";


export default function Weather (){


 // STATES

const [city, setCity] = useState("Lisbon");
const [loaded, setLoaded] = useState(false);
const [weather, setWeather] = useState({});
const [temperature, setTemperature] = useState(weather.temperature);



// API INFO GETTER
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


//API

function handleSubmit(event){
    event.preventDefault();   

   
    let apiKey = "aa9bf928550b2eb28bf9a5399ca95f34";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
    axios.get(url).then(showInfo);


     }

//FORM CITY

function updateCity(event){
 event.preventDefault();   
 setCity(event.target.value);
 
   }

 // IMPERIAL  
     function showFarehrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((weather.temperature * 9) / 5 + 32));
  }

  //METRIC

function showCelsius(event) {
    event.preventDefault();
   temperature();
  }


// FORM
   
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

// HEADER

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

// DESCRIPTION


let Description = (

<div className="row">
          <div className="col-6">
            <div className="clearfix current-weather">
                <img className="float-left" src={weather.icon} alt={weather.description} />
            
              <div className="float-left">
                <strong className="current-temp">
                  {Math.round(weather.temperature)}
                </strong>
                <span className="measures-cf">
                  <a href="/" onClick={showCelsius}>Cº</a> | <a href="/" onClick={showFarehrenheit}>Fº</a>
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

//___________________________________________________//    

// FORECAST ZONE SOON TO ERASE ⬇︎
let Forecast = (

<div class ="col-2 ml-2">
    <h5>{`06:00`}</h5>
      <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="cloudy" />
          <div className ="weather-forecast-temperature">
            <strong><span className="forecast-convert"> 12 </span>º</strong><span className="forecast-convert">10</span>º
           </div>
            </div>
            )

  let Forecast1 = (

<div class ="col-2 ml-2">
    <h5>{`09:00`}</h5>
      <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="cloudy" />
          <div className ="weather-forecast-temperature">
            <strong><span className="forecast-convert"> 14 </span>º</strong><span className="forecast-convert">10</span>º
           </div>
            </div>
            )          

      let Forecast2 = (

<div class ="col-2 ml-2">
    <h5>{`12:00`}</h5>
      <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="cloudy" />
          <div className ="weather-forecast-temperature">
            <strong><span className="forecast-convert"> 12 </span>º</strong><span className="forecast-convert">8</span>º
           </div>
            </div>
            )

  let Forecast3 = (

<div class ="col-2 ml-2">
    <h5>{`15:00`}</h5>
      <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="cloudy" />
          <div className ="weather-forecast-temperature">
            <strong><span className="forecast-convert"> 13 </span>º</strong><span className="forecast-convert">9</span>º
           </div>
            </div>
            )


// FORECAST ZONE SOON TO ERASE ⬆︎

//___________________________________________________//    


if(loaded){

//WORKING SEARCH ENGINE SETUP

return (   
 <div className="app-wrapper">
       {form}
       {header}
       {Description}
        <div className="weather-forecast row"></div>
         
      </div>
        
)}else{

  //FAKE DATA ZONE 

  //___________________________________________________//    

    return( <div className="app-wrapper">
       {form}
       
       <div className="weather-header">
<h1 className="city-name"  >{"Lisbon"}</h1>
          <span className="w-country">
            (<span>PT</span>)
          </span>

          <ul>
            <li>
              <span>{"Friday, 16 October"}</span>
              
            </li>
            <li>
              <span>{"18:00"}</span>
              
            </li>
          </ul>
        </div>
       
      <div className="row">
          <div className="col-6">
            <div className="clearfix current-weather">
                <img className="float-left" src="http://openweathermap.org/img/wn/04n@2x.png" alt="cloudy" />
            
              <div className="float-left">
                <strong className="current-temp">
                  12 
                </strong>
                <span className="measures-cf">
                  <a href="/" >Cº</a> | <a href="/">Fº</a>
                </span>
              </div>
            </div>
            <div className="weather-minmax-temperature ml-3 mt-3">
              <ul>
                <li>
                  Today <strong>14º</strong>
                  <span>11º</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-6 weather-info">
            <ul>
              <li className="w-description">Cloudy</li>
              <li>
                Humidity: <span className="w-humidity"></span>
                98 %
              </li>
              <li>
                wind: <span className="w-wind"></span>
                20 km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast row mt-3">
          {Forecast}{Forecast1}{Forecast2}{Forecast3}{Forecast}
          </div>
      </div>

  
        )
};


};
