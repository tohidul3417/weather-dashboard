import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

const UnitToggle = () => {
  const { unit, toggleUnit } = useContext(WeatherContext);

  return (
    <div>
      <span>°C</span>
        <label htmlFor="unit-toggle">
          <div>
          <input id="unit-toggle" type="checkbox" checked={unit === 'imperial'} onChange={toggleUnit}  />
          <div></div>
          <div></div>
          </div>
            
        </label>
        <span>°F</span>
    </div>
  )
};

export default UnitToggle;