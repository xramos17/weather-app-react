import React from "react";

export default function WeatherTemperature(props){
    

    function showFarehrenheit(event){
        event.preventDefault();
        props.setUnit("farehrenheit")

    }

    function showCelsius(event){
        event.preventDefault();
        props.setUnit("celsius");

    }

    function farehrenheit(){
        return (props.celsius * 9) /5 + 32;

    }

    if( props.unit === "celsius"){
    return (
       
        
        <div className="float-left">
            <strong className="current-temp">
                  {Math.round(props.celsius)}
                </strong>
                <span className="measures-cf">
                  <span>Cº</span> | <a href="/" onClick={showFarehrenheit}>Fº</a>
                </span>
        </div>



    )}else{
        return(

             <div className="float-left">
            <strong className="current-temp">
                  {Math.round(farehrenheit())}
                </strong>
                <span className="measures-cf">
                  <a href="/" onClick={showCelsius}>Cº</a> | <span>Fº</span>
                </span>
        </div>


            
        )

    }
}