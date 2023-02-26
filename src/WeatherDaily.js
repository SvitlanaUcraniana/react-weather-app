import React from "react";
import axios from "axios";

import "./WeatherDaily.css" 
import WeatherIcon from "./WeatherIcon";

export default function WeatherDaily(props) {
function handleResponse(response) {
     console.log(response.data);

}

let apiKey = "124ftfab6b55c54beo58d91354585001";
let longitude = props.coordinates.longitude;
let latitude = props.coordinates.latitude;
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}`

axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherDaily">
            <div className="row">
                <div className="col">
                    <div className="WeatherDaily-day">Sun</div>
                    <WeatherIcon code="clear-sky-day" size={36} />
                    <div className="WeatherDaily-temperatures">
                        <span className="WeatherDaily-temperature-max">19°</span>
                        <span className="WeatherDaily-temperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}