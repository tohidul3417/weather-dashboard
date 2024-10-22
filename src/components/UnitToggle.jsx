import React, { useContext, useEffect } from "react";
import { WeatherContext } from "../context/WeatherContext";

const UnitToggle = () => {
  const { unit, toggleUnit } = useContext(WeatherContext);
  return (
    <div className="flex items-center space-x-2">
      <span>°C</span>
      <label className="flex items-center cursor-pointer" htmlFor="unit-toggle">
        <div className="relative">
          <input
            id="unit-toggle"
            type="checkbox"
            className="sr-only"
            checked={unit === "imperial"}
            onChange={toggleUnit}
          />
          <div className="w-9 h-4 bg-gray-400 rounded-full shadow-inner"></div>
          <div
            className={`dot absolute w-5 h-5 bg-white rounded-full shadow -left-0.5 -top-0.5 transition ${
              unit === "imperial" ? "transform translate-x-full" : ""
            }`}
          ></div>
        </div>
      </label>
      <span>°F</span>
    </div>
  );
};

export default UnitToggle;
