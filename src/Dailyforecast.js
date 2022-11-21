import React, { useState } from "react";
import axios from "axios";

export default function Dailyforecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function day(){
    let date = new Date(forecast[0].time*1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Sat", "Sun"];

    return days[day];
  }

  if (loaded) {
    return (
      <div className="row dailyforecast">
        <div className="col-2">
          <div>
            {day()}{" "}
            <img
              alt="icon"
              className="currentCityIcon"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              size="10"
            />
            <strong>{Math.round(forecast[0].temperature.maximum)}°</strong>{" "}
            {Math.round(forecast[0].temperature.minimum)}°
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "85eadfabfd41246o03386b0bc2e86tcb";
    let longitude = props.coordinates.longitude;
    let latitude = props.coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
