import React, {useState} from "react";

export default function WeatherTemperatureToday(props){
    const[unit, setUnit] = useState("celsius")

     let maxTemp = Math.round(props.celsiusMax)
     let minTemp = Math.round(props.celsiusMin)


    if(units = "celsius"){

    return (  <div className="weather-minmax-temperature ml-3 mt-3">
              <ul>
                <li>
                  Today <strong>{maxTemp}º</strong>
                  <span>{minTemp}º</span>
                </li>
              </ul>
            </div>)}else{
                <div className="weather-minmax-temperature ml-3 mt-3">
              <ul>
                <li>
                  Today <strong>{(Math.round(maxTemp * 9) /5 + 32)}º</strong>
                  <span>{Math.round((maxTemp * 9) /5 + 32)}º</span>
                </li>
              </ul>
            </div>

            }
}