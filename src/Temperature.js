import React, { useState } from "react";

export default function Temperature(props){
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");

    }
    if(unit === "celsius"){
      return (
        <div className="temperature-wrapper">
          <h4 id="currenttemp">{Math.round(props.celsius)}</h4>
          <a href="." className="celsius-link">
            °C|{" "}
          </a>
          <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
            °F
          </a>
        </div>
      );
    } else {
        let fahrenheit = (props.celsius * 9/5)+ 32;
        return (
          <div className="temperature-wrapper">
            <h4 id="currenttemp">{Math.round(fahrenheit)}</h4>
            <a href="." className="celsius-link" onClick={showCelsius}>
              °C|
            </a>
            <a href="/" className="fahrenheit-link" onClick={showFahrenheit}>
              °F
            </a>
          </div>
        );
    }
}