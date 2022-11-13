import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import Search from "./Search";
import FormattedDate from "./FormattedDate";
import Cities from "./Cities";
import Hourlyforecast from "./Hourlyforecast";
import Dailyforecast from "./Dailyforecast";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
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
              <h2 className="currentcity">{weatherData.city}</h2>
            </div>
            <div className="col-4">
              <h3 className="currenttime">
                currently on <span id="weekday"><FormattedDate date={weatherData.date} />
                </span>{" "}
              </h3>
            </div>
            <div className="col-4">
              <div className="temperature-wrapper">
                <h4 id="currenttemp">{Math.round(weatherData.temperature)}</h4>
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
            Wind:<span id="wind">{Math.round(weatherData.wind)}</span>km/h
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
    const apiKey = "4ea8e5dff1b6d9441049f23868b12760";
    let city = "Tokyo";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
