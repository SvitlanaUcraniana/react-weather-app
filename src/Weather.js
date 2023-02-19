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
              placeholder="Enter a city..."
              className="form-control" autoFocus="on"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            ></input>
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Sunday 20:00</li>
        <li>Clear Sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Weather Icon"
          ></img>

          <span className="degrees">9</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6 mt-3">
          <ul>
            <li>Humidity: 60%</li>
            <li>Wind: 5.66 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
