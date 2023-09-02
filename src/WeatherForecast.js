import react from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
