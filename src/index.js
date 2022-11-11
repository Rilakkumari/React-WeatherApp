import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";
import Search from "./Search";
import Cities from "./Cities";
import Hourlyforecast from "./Hourlyforecast";
import Dailyforecast from "./Dailyforecast";

export default function App() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState (null);
function handleResponse(response){
  console.log(response.data);
  setTemperature(response.data.main.temp);
  setReady(true);
}

if (ready){
return (
  <div className="container">
    <div className="weatherapp">
      <div className="row">
        <div className="col-2">
          <Search />
        </div>
        <div className="col-2 location">
          <form>
            <input
              type="submit"
              value="📍"
              className="btn btn-secondary location"
            />
          </form>
        </div>
      </div>
      <Cities />
      <div className="row">
        <div className="col-4">
          <h2 className="currentcity">Tokyo</h2>
        </div>
        <div className="col-4">
          <h3 className="currenttime">
            currently on <span id="weekday"></span> <br />
            at <span id="time"></span>
          </h3>
        </div>
        <div className="col-4">
          <div className="temperature-wrapper">
            <h4 id="currenttemp">20</h4>
            <a href="." className="celsius-link">
              °C|
            </a>
            <a href="." className="fahrenheit-link">
              °F
            </a>
          </div>
        </div>
      </div>

      <div className="extrainfo">
        <br />
        Wind:<span id="wind"> 3 </span>km/h
      </div>
      <br />
      <div className="dailyheadline">Hourly forecast</div>
    </div>
    <Hourlyforecast />

    <br />
    <div className="dailyheadline">Daily forecast</div>
    <Dailyforecast />
  </div>
); 

} else {
  const apiKey = "5006c8b73e1b739b2c4f5817cb519343";
let city = "Tokyo";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;  
  axios.get(apiUrl).then(handleResponse);

  return "Loading...";
}






}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
