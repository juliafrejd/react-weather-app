import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }
  return (
    <div>
      <div className="WeatherForecast-day">{props.data.time}</div>
      <div className="WeatherForecast-icon">
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        ></img>
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}° /{" "}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°{" "}
        </span>
      </div>
    </div>
  );
}
