import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherCard = () => {
  const { currentWeather, unit, addFavorite, removeFavorite, favorites } =
    useContext(WeatherContext);

  if (!currentWeather) return null;

  const isFavorite = favorites.includes(currentWeather.name);

  return (
    <div>
      <h2>{currentWeather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
        alt={currentWeather.weather[0].description}
      />
      <p>
        {currentWeather.main.temp}° {unit === "metric" ? "C" : "F"}
      </p>
      <p>{currentWeather.weather[0].description}</p>
      <button
        onClick={
          isFavorite
            ? () => removeFavorite(currentWeather.name)
            : () => addFavorite(currentWeather.name)
        }
      >
        {isFavorite ? "Remove Favorite" : "Add to Favorites"}
      </button>
    </div>
  );
};

export default WeatherCard;
