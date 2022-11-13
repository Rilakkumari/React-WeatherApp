import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";
import FormattedDate from "./FormattedDate";
import Cities from "./Cities";
import Hourlyforecast from "./Hourlyforecast";
import Dailyforecast from "./Dailyforecast";
import Temperature from "./Temperature";


export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("Paris");
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "4ea8e5dff1b6d9441049f23868b12760";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
                currently on{" "}
                <span id="weekday">
                  <FormattedDate date={weatherData.date} />
                </span>{" "}
              </h3>
            </div>
            <div className="col-4">
           <Temperature celsius={props.data.temperature}/>   
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
    search();
    return "Loading...";
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
