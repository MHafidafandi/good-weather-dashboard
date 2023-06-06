import "./App.css";
import AddCity from "./components/AddCity.jsx";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Weather from "./components/Weather.jsx";
import ShowWeather from "./components/ShowWeather";

function App() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);
  const [weather, setWeather] = useState(undefined);

  const handleSubmit = (e) => {
    e.preventDefault();
    addCity(city);
  };

  const addCity = async (city) => {
    await axios.post("http://localhost:8080/api/cities", { city });
    getCities();
    setCity("");
  };

  const getCities = async () => {
    const { data } = await axios.get("http://localhost:8080/api/cities");
    const cities = data.cities.map((city) => city.city_name);
    setCities(cities);
  };

  const getWeather = async (city) => {
    const { data } = await axios.get(
      `http://localhost:8080/api/weathers/${city}`
    );
    setWeather(data);
  };

  useEffect(() => {
    getCities();
  }, []);

  return (
    <div className="container text-center mx-auto my-20 text-gray-darkset ">
      <h1 className="my-3 text-sky-700 text-4xl font-semibold">
        Good Weather Dashboard
      </h1>
      <p className="text-sky-500">
        The current weather for your favorite cities!
      </p>
      <AddCity
        handleSubmit={handleSubmit}
        handleInputChange={(e) => setCity(e.target.value)}
        newCity={city}
      />

      <Weather
        cities={cities}
        handleSelect={(e) => getWeather(e.target.value)}
      />
      <div className="flex flex-col items-center">
        {weather && <ShowWeather data={weather} />}
      </div>
    </div>
  );
}

export default App;
