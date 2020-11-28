import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview"

export default function WeatherForecast(props){
 
const[loaded, setLoaded] = useState(false);
const [forecast, setForecast]= useState(null);


    function displayForecast(response){
    setForecast(response.data)
    setLoaded(true)
    }



if(loaded){
    return (
        <div class ="col-2 ml-2">

            {forecast.list.slice(0, 5).map(function(forecastIteam){
                return  <WeatherForecastPreview data ={forecastIteam}/>
            })}

         
              </div> 

            )}else{
                
let apiKey = "1adcec3e50018a8b64c974c018ae3653";
let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayForecast);

                return "Loading"
            }
}