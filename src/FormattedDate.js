import React from "react";


export default function FormattedDate(props){

 let days = ["Sunday","Monday","Tueday","Wednesday","Thrusday","Friday","Sarturday",]
 let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];   
 let dayNum = props.date.getDate()
 let day = days[props.date.getDay()];
 let month = months[props.date.getMonth()];
 let hours =props.date.getHours();
 let minutes = props.date.getMinutes();

 if (minutes < 10){
     minutes =`0${minutes}`
 }
if (hours < 10){
     hours =`0${hours}`
 }

    return(
 <ul>
            <li>
    <span>{day}, {dayNum} {month}</span>
              
            </li>
            <li>
    <span>{hours}:{minutes}</span>
              
            </li>
          </ul>


    );
}