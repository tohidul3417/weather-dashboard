import React, { useState, useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const { handleCityName } = useContext(WeatherContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") return;
    handleCityName(city);
    navigate('/');
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="text-black w-full max-w-md px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none"
        aria-label="Search city"
      />
      <button
        type="submit"
        className="px-4 py-2  text-white rounded-r-md bg-gray-600 hover:bg-gray-700"
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;