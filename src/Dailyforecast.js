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
          {forecast[0].time}{" "}
          <img src="pictures/039-sun.png" alt="" className="icons" />
          <strong>{props.data.temperature.maximum}°</strong>{" "}
          {props.data.temperature.minimum}°
        </div>
      </div>
    );
  } else {
    let apiKey = "8402ccd9e55983fce71eeeaa1d2bd1fc";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
