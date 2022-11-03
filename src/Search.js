import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [weather, setWeather] = useState("");
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "d90030fd4ae1d9b5acef0acdf5d1acc9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      icon: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul className="details">
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <p>
            <img src={weather.icon} alt={weather.description} />
          </p>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
