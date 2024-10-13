import React, {useContext} from "react";
import { WeatherContext } from "../context/WeatherContext";

const Favorites = () => {
    const {favorites, fetchWeather, removeFavorite} = useContext(WeatherContext);

    if (favorites.length === 0) return null;

    return (
        <div>
            <h3>Favorites</h3>
            <ul>
                {favorites.map((city, index) => (
                    <li key={index}>
                        <button onClick={() => fetchWeather(city)}>
                            {city}
                        </button>
                        <button onClick={() => removeFavorite(city)}>
                            Remove
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Favorites;