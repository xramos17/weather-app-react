import React from "react";



export default function WeatherForecastPreview(props){

    let maxTemp = Math.round(props.data.main.temp_max)
    let minTemp = Math.round(props.data.main.temp_min)

    function hoursTime(){
       let date = new Date(props.data.dt * 1000)
       let hours = date.getHours()
        return `${hours}:00`
    }

    
if (props.unit === "celsius"){

    return (

<div className ="col-2 m-2">
<h5>{hoursTime()}</h5>

      <img src= {`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt ={props.data.weather[0].description} />


          <div className ="weather-forecast-temperature">
    <strong><span className="forecast-convert"> {maxTemp}</span>º</strong><span className="forecast-convert">{minTemp}</span>º
           </div>

</div>

    )}else{
        return (
<div className ="col-2 m-2">
<h5>{hoursTime()}</h5>

      <img src= {`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt ={props.data.weather[0].description} />


          <div className ="weather-forecast-temperature">
    <strong><span className="forecast-convert"> {Math.round(((maxTemp * 9) / 5 ) + 32)}</span>º</strong><span className="forecast-convert">{Math.round(((minTemp * 9) / 5 ) + 32)}</span>º
           </div>

</div>)
    }
}