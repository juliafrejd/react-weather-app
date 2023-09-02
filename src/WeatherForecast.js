import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = `04bf7320b0acbo6987aef70f64cbdt6d`;
  let longitude = 38.7;
  let latitude = 9.1;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Sun</div>
          <div className="WeatherForecast-icon">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Sol"
            ></img>
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">18° / </span>
            <span className="WeatherForecast-temperature-min">10° </span>
          </div>
        </div>
      </div>
    </div>
  );
}
