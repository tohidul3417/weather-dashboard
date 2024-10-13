import React, {useContext, useEffect} from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import ForecastCard from "../components/ForecastCard";
import { WeatherContext } from "../context/WeatherContext";

const Home = () => {
    const {forecast, fetchWeather} = useContext(WeatherContext);

    useEffect(() => {
        // Fetch weather for a default location on load
        fetchWeather('Dhaka');

    }, [fetchWeather]);

    return (
        <div>
            <SearchBar />
            <WeatherCard />
            <div>
                {forecast.map(day => (
                    <ForecastCard key={day.dt} day={day} />
                ))}
            </div>
        </div>
    )
}

export default Home;