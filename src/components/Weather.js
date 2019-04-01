import React from "react"

const Weather = props => (
    <div>
        { props.city && props.country && <p>Location : {props.city} , {props.country}</p> }
        { props.temperature[1] && <p>Temperature (C) : {props.temperature[1]}</p> }
        { props.precipitation[1] !=null && <p>Precipitation (%) : {props.precipitation[1]}</p> }
        { props.humidity[1] && <p>Humidity : {props.humidity[1]}</p> }
        { props.error && <p>{props.error}</p> }
    </div>
);

export default Weather