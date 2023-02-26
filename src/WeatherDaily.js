import React from "react";

import "./WeatherDaily.css" 
import WeatherIcon from "./WeatherIcon";

export default function WeatherDaily() {
    return (
        <div className="WeatherDaily">
            <div className="row">
                <div className="col">
                    <div className="WeatherDaily-day">Sun</div>
                    <WeatherIcon code="clear-sky-day" size="36" />
                    <div className="WeatherDaily-temperatures">
                        <span className="WeatherDaily-temperature-max">19°</span>
                        <span className="WeatherDaily-temperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}