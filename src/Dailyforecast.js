import React, { useState } from "react";
import axios from "axios";

export default function Dailyforecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="row dailyforecast">
        <div className="col-2">
          {forecast[0].dt} <img src="pictures/039-sun.png" alt="" className="icons" />
          <strong>{forecast[0].temp.max}°</strong> {forecast[0].temp.min}°
        </div>
        <div className="col-2">
          Wed <img src="pictures/038-cloudy-3.png" alt="" className="icons" />
          <strong>12°</strong> 14°
        </div>
        <div className="col-2">
          Thu <img src="pictures/011-cloudy.png" alt="" className="icons" />
          <strong>21°</strong> 17°
        </div>
        <div className="col-2">
          Fri <img src="pictures/034-cloudy-1.png" alt="" className="icons" />
          <strong>24°</strong> 19°
        </div>
        <div className="col-2">
          Sat <img src="pictures/039-sun.png" alt="" className="icons" />
          <strong>26°</strong> 21°
        </div>
        <div className="col-2">
          Sun <img src="pictures/043-warm.png" alt="" className="icons" />
          <strong>30°</strong> 21°
        </div>
      </div>
    );
  } else {
    let apiKey = "88724523008dc9e1be18f6eb6a959b67";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
