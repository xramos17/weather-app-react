import React from "react";

export default function WeatherSYS(props){

function sunrise(){


 let hours =props.sunrise.getHours();
 let minutes = props.sunrise.getMinutes();
 return `${hours}:${minutes}`
}

function sunset(){
 let hour = props.sunset.getHours();
 let minute = props.sunset.getMinutes();
return `${hour}:${minute}`
}


    return (


<div className="weather-sunset-sunrise ml-3 mt-3 mb-2 ">
  
             <ul>
                <li>Sunrise <strong>{sunrise()}</strong></li>
                <li><span>Sunset</span> <strong>{sunset()}</strong></li>
              </ul>
            
</div>

    )

    
}