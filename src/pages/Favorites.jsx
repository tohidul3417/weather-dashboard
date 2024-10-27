import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites, fetchWeather, removeFavorite } =
    useContext(WeatherContext);
  const navigate = useNavigate();

  if (favorites.length === 0) return <p>No favorites added</p>;

  return (
    <div>
      <h2>Favorites</h2>
      <div>
        <div>
          {favorites.map((city, index) => (
            <div key={index}>
              <button
                onClick={async () => {
                  await fetchWeather(city);
                  navigate("/");
                }}
              >
                {city}
              </button>
              <button onClick={() => removeFavorite(city)}>&times;</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
