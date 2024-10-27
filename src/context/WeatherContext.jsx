import React, { createContext, useEffect, useCallback, useState } from "react";
import { getCurrentWeather } from "../services/weatherService";

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [favorites, setFavorites] = useState([]);
  const [currentCity, setCurrentCity] = useState("");

  const fetchWeather = useCallback(async (city) => {
    try {
      const weatherData = await getCurrentWeather(city, unit);
      setCurrentWeather(weatherData);
    } catch (error) {
      console.error(error);
      alert("Failed to fetch weather data. Please try again.");
    }
  }, [unit]);

  // Log currentWeather when it updates
  useEffect(() => {
    if (currentWeather) {
      console.log(currentWeather.name);
    }
  }, [currentWeather]);

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
    if (currentCity) {
      fetchWeather(currentCity);
    }
  }, [currentCity, fetchWeather]);

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
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
