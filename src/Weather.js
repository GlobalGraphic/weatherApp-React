import React from 'react';

const Weather = ({ temp, feelsLike, pressure, wind, src, date }) => {

    return (
        <div className="flex-wrap mb-4" id="main">
         <div className="w-5/5 h-19 m:my-2 sm:px-2 md:my-1 md:px-1 lg:my-1 lg:px-1 xl:my-2 xl:px-2">
            <img src={`http://openweathermap.org/img/wn/${src}@2x.png`} alt=""/>
            <p>Temperature: {temp}  °C</p>
            <p>Feels like: {feelsLike}  °C</p>
            <p>Wind speed: {wind} km/h</p>
            <p>Pressure: {pressure} hPa</p>
            <p>Date & Time:<br/> {date}</p>
         </div>
        </div>
    );
}

export default Weather;