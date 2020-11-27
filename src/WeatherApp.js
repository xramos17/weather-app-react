import React, { useState } from "react";
import axios from 'axios';
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather (props){


 // STATES

const [city, setCity] = useState(props.defaultCity);
const [weather, setWeather] = useState({ loaded: false });




// API INFO GETTER
function showInfo (response){
 
 setWeather({
      loaded: true,
      city: response.data.name,
      country: response.data.sys.country,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      highTemperature: response.data.main.temp_max,
      minTemperature : response.data.main.temp_min,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });

}


//API

function searchCity(){
    let apiKey = "aa9bf928550b2eb28bf9a5399ca95f34";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
    axios.get(url).then(showInfo);
}

function handleSubmit(event){
    event.preventDefault();   
    searchCity()

     } 

//FORM CITY

function updateCity(event){
 setCity(event.target.value);
 
   }



if(weather.loaded){

//WORKING SEARCH ENGINE SETUP

return (   

 <div className="app-wrapper">
         
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
        </form>
     
<WeatherInfo data={weather}/>
        
         
      </div>
     
      )

        
}else{
searchCity()
    return(
      
    <div>Loading...</div>

        )
};


};
