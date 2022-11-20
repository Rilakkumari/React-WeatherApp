import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import FormattedDate from "./FormattedDate";
import Dailyforecast from "./Dailyforecast";
import Temperature from "./Temperature";


export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("tokyo");

  function handleResponse(response) {

    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      coordinates: response.data.coordinates,
      city: response.data.city,
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "85eadfabfd41246o03386b0bc2e86tcb";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weatherapp">
          <div className="row">
            <div className="col-2">
              <form onSubmit={handleSubmit} id="change-city-form">
                <input
                  id="search-text-input"
                  type="text"
                  placeholder="Change city"
                  autocomplete="off"
                  autofocus="on"
                  input="search-text"
                  onChange={handleCityChange}
                />
                <input type="submit" value="Search" class="btn btn-secondary" />
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <h2 className="currentcity">{weatherData.city}</h2>
              <img alt="icon" className="currentCityIcon" src={weatherData.iconUrl} />
            </div>
            <div className="col-4">
              <h3 className="currenttime">
                currently on{" "}
                <span id="weekday">
                  <FormattedDate date={weatherData.date} />
                </span>{" "}
              </h3>
            </div>
            <div className="col-4">
              <Temperature celsius={weatherData.temperature} />
            </div>
          </div>

          <div className="extrainfo">
            <br />
            Wind:{""} <span id="wind">{Math.round(weatherData.wind)}</span>km/h
          </div>
        </div>

        <br />
        <div className="dailyheadline">Daily forecast</div>
        <Dailyforecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "We're loading the weather app for you...";
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
