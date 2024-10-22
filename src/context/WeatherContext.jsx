import React, { createContext, useEffect, useState } from "react";
import { getCurrentWeather } from "../services/weatherService";
export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  // const [forecast, setForecast] = useState([]);
  // const [alerts, setAlerts] = useState([]);
  const [unit, setUnit] = useState("metric");
  const [favorites, setFavorites] = useState([]);
  const [currentCity, setCurrentCity] = useState("");

  const fetchWeather = async (city) => {
    try {
      const weatherData = await getCurrentWeather(city, unit);
      setCurrentWeather(weatherData);
      // const forecastData = await getForecast(city, unit);
      // setForecast(forecastData);
      // setAlerts(weatherData.alerts || []);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch weather data. Please try again.");
    }
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  const handleCityName = (name) => {
    setCurrentCity(name);
  };

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  const removeFavorite = (city) => {
    setFavorites(favorites.filter((fav) => fav !== city));
  };

  useEffect(() => {
    fetchWeather(currentCity, unit);
  }, [currentCity, unit])

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        // forecast,
        // alerts,
        currentCity,
        unit,
        favorites,
        fetchWeather,
        toggleUnit,
        addFavorite,
        removeFavorite,
        handleCityName,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
