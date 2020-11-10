import React from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner';


export default function Weather (props){
    function handleResponse (response) {
    alert(`The Weather in ${response.data.name}is ${Math.round(response.data.main.temp)}ºC`)}
    let apiKey = "aa9bf928550b2eb28bf9a5399ca95f34";
   
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
  
return ( <div>
  <h2>Hello from Weather! </h2>  
   <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
  </div>
)
};

