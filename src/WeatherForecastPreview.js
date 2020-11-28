import React from "react";



export default function WeatherForecastPreview(props){

    function hoursTime(){
       let date = new Date(props.data.dt * 1000)
       let hours = date.getHours()
        return `${hours}:00`
    }
    return (

<span>
<h5>{hoursTime()}:00</h5>

      <img src= {`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt ={props.data.weather[0].description} />


          <div className ="weather-forecast-temperature">
    <strong><span className="forecast-convert"> {Math.round(props.data.main.temp_max)}</span>º</strong><span className="forecast-convert">{Math.round(props.data.main.temp_min)}</span>º
           </div>

</span>

    )
}