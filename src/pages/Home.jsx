import React, {useContext} from "react";
import WeatherCard from "../components/WeatherCard";
// import ForecastCard from "../components/ForecastCard";
import { WeatherContext } from "../context/WeatherContext";

const Home = () => {

    return (
        <div>
            <WeatherCard />
        </div>
    )
}

export default Home;