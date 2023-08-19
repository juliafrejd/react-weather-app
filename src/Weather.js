import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Lisbon, Portugal</h1>
      <ul>
        <li>Wednesday 7:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly cloudy-icon"
          ></img>
          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 79%</li>
            <li>Wind: 6 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
