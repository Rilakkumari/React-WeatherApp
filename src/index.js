import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Search from "./Search";
import Cities from "./Cities";
import Hourlyforecast from "./Hourlyforecast";
import Dailyforecast from "./Dailyforecast";

function App() {
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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
