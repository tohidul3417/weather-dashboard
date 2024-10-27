import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const WeatherCard = () => {
  const { currentWeather, unit, addFavorite, removeFavorite, favorites } =
    useContext(WeatherContext);
  

  if (!currentWeather) {
    return (
      <div className="flex justify-center">
        <h2 className="text-gray-500 text-2xl font-semibold">Location not found!</h2>
      </div>
    );
  }
  const isFavorite = favorites.includes(currentWeather.name);
  return (
    <div className="bg-white shadow rounded p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold">{currentWeather.name}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
        alt={currentWeather.weather[0].description}
        className="w-20 h-20"
      />
      <p className="text-xl">
        {Math.round(currentWeather.main.temp)}° {unit === "metric" ? "C" : "F"}
      </p>
      <p className="capitalize">{currentWeather.weather[0].description}</p>
      <button
        className={`mt-4 px-4 py-2 rounded text-white ${
          isFavorite
            ? "bg-red-500 hover:bg-red-600"
            : "bg-green-500 hover:bg-green-600"
        }`}
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
