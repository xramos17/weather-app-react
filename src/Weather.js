import React from "react";
import "./Weather.css";
import SearchEngine from "./SearchEngine"; 

export default function Weather() {
 
  return (
    <div className="full-wrapper">
     <SearchEngine />
      <small>
        <a href="https://github.com/xramos17/Vanilla-Weather-app">
          Open-source code
        </a>  by Alex Ramos
      </small>
    </div>
  );
}


