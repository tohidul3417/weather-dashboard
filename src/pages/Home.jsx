import React, {useContext, useEffect} from "react";
import WeatherCard from "../components/WeatherCard";
// import ForecastCard from "../components/ForecastCard";
import { WeatherContext } from "../context/WeatherContext";

const Home = () => {
    const {fetchWeather} = useContext(WeatherContext);

    return (
        <div>
            <WeatherCard />
        </div>
    )
}

export default Home;