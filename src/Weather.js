import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: "Wednesday 7:00",
      temperature: Math.round(response.data.temperature.current),
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      description: response.data.condition.description,
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      feelslike: Math.round(response.data.temperature.feels_like),
    });
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                autoFocus="on"
                className="form-control"
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              ></input>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description}></img>
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels like: {weatherData.feelslike}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "04bf7320b0acbo6987aef70f64cbdt6d";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
    return "Loading...";
  }
}
