import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview"
import "./Weather.css"

export default function WeatherForecast(props){
 
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast]= useState(null);


    function displayForecast(response){
    setForecast(response.data)
    setLoaded(true)
    }



if(loaded && props.city === forecast.city.name){
    return (

 <div className="weather-forecast row mt-3">
        

            {forecast.list.slice(0, 5).map(function(forecastIteam){
                return  <WeatherForecastPreview data ={forecastIteam} unit={props.unit}  />
            })}

              </div> 

  


            )}else{
                
let apiKey = "08055b42352faa5e0aeff40ba5a95cdb";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayForecast);

                return "Loading"
            }
}

