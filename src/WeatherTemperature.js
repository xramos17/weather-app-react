import React, {useState} from "react";

export default function WeatherTemperature(props){
    const[unit, setUnit] = useState("celsius")

    function showFarehrenheit(event){
        event.preventDefault();
        setUnit("farehrenheit")

    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");

    }

    function farehrenheit(){
        return (props.celsius * 9) /5 + 32;

    }

    if( unit === "celsius"){
    return (
       
        <span>
            <strong className="current-temp">
                  {Math.round(props.celsius)}
                </strong>
                <span className="measures-cf">
                  <a href="/">Cº</a> | <a href="/" onClick={showFarehrenheit}>Fº</a>
                </span>
        </span>
    )}else{
        return(

             <span>
            <strong className="current-temp">
                  {Math.round(farehrenheit())}
                </strong>
                <span className="measures-cf">
                  <a href="/" onClick={showCelsius}>Cº</a> | <a href="/">Fº</a>
                </span>
        </span>


            
        )

    }
}