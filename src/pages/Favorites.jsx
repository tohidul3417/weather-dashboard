import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites, fetchWeather, removeFavorite } =
    useContext(WeatherContext);
  const navigate = useNavigate();

  if (favorites.length === 0) return <p className="mt-4 text-center text-2xl font-semibold">No favorite added!</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Favorites</h2>
      <div className="mt-4 flex justify-center max-w-5xl mx-auto">
        <div className="flex space-x-4 flex-wrap">
          {favorites.map((city, index) => (
            <div key={index} className="m-4">
              <button className="px-2 py-1 rounded mr-1 ml-2 bg-gray-300 focus:outline-none"
                onClick={async () => {
                  await fetchWeather(city);
                  navigate("/");
                }}
              >
                {city}
              </button>
              <button className="text-red-500 hover:text-red-700" onClick={() => removeFavorite(city)}>&times;</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
