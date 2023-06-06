const axios = require("axios");

const { WEATHER_API } = process.env;

const getWeathrByCity = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API}&units=metric`;
  return axios.get(url);
};

module.exports = getWeathrByCity;
