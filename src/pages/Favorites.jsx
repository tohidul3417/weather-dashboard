import React, {useContext} from "react";
import { WeatherContext } from "../context/WeatherContext";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
    const {favorites, fetchWeather, removeFavorite} = useContext(WeatherContext);
    const navigate = useNavigate();

    if (favorites.length === 0) return null;

    return (
        <div>
            <h3>Favorites</h3>
            <ul>
                {favorites.map((city, index) => (
                    <li key={index}>
                        <button onClick={ async () => {
                            await(fetchWeather(city));
                            navigate('/')
                        }}>
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