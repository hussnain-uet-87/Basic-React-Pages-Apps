import React, { useEffect, useState } from "react";
import "../src/Weather.css";

const Weather = () => {
  const [city, setCity] = useState("Lahore");
  const [weather, setWeather] = useState(null);

  //api key (from openweathermap.org accounts/api key tab)
  const API_KEY = "b7f4c9c573b54a4dc9fda0f19713299a";
  
useEffect(()=>{
    //fetch weather funciton
  const fetchWeather = async () => {
    try {
      const res = await fetch(
        //api from openweathermap.org
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setWeather(data);
    } catch (err) {
      console.log("Error while fetching data : ", err);
    }
  };

  fetchWeather();
},[city]);
  ///return function
  return (
    <>
      <div className="main">
        <div className="container">
          <form action="">
            <h1>Weather App</h1>
            <div className="row">
              <p id="txt">Enter City : </p>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter City Name"
              />
            </div>
            {weather && weather.main && (
              <div>
                <h3 className="underline">{weather.name}</h3>
                <p> <span className="underline">Temperature: </span> {weather.main.temp} °C</p>
                <p><span className="underline">Weather: </span>{weather.weather[0].main}</p>
              </div>
            )}
            {weather && !weather.main && (
                <p>City Not Found</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Weather;
