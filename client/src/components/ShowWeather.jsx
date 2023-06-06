import React from "react";

export default function ShowWeather({ data }) {
  return (
    <div className="my-3 p-5 rounded shadow-lg bg-sky-100">
      <h2>{data.name}</h2>
      <div className="flex justify-center">
        <img
          src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          alt=""
        />
      </div>
      <div>
        <span>{data.weather[0].main}</span>&nbsp;
        <span>{Math.floor(data.main.temp)}&deg;C</span>
      </div>
    </div>
  );
}
