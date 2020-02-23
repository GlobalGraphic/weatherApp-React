import React, { useState, useEffect } from 'react';
import './App.css';
import Weather from './Weather';
import City from './City';

const App = () => {

    const [weather, setWeather] = useState([]);
    const [name, setName] = useState([]);
    const [country, setCountry] = useState([]);
    const [date, getDate] = useState([]);

    useEffect(() => {
      getWeather();
    }, []);

    let lat;
    let lon;

        const getWeather = () => {
          if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
              lon = position.coords.longitude;
              lat = position.coords.latitude;

              const APP_KEY = "e802333933a66ec7a7588d658785ad09";
              const API = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=5&units=metric&APPID=${APP_KEY}`;

              fetch(API)
              .then(response => {
                return response.json();
              })
              .then(data => {
                setWeather(data.list);
                setName(data.city.name);
                setCountry(data.city.country);
                getDate(data.list);
              })

            });
          }
        }


  return (
    <div className="App">
      <City nameCity={name} country={country}/>
      <div className="flex mb-4">
        {
            weather.map((w, id) => {
              console.log(w);
            return (
                <Weather key={id} temp={Math.floor(w.main.temp)} feelsLike={Math.floor(w.main.feels_like)} wind={w.wind.speed} pressure={w.main.pressure} date={w.dt_txt}/>
            );
          })
        }
      </div>
    </div>
  );

}


export default App;
