import React from "react";

const ForecastCard = (day) => {
  const date = new Date(day.dt * 1000).toLocaleDateString(undefined, {
    weekday: "long",
  });

  return (
    <div>
      <p>{date}</p>
      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt={day.weather[0].description}
      />
      <p>
        {day.temp.max}° / {day.temp.min}°
      </p>
    </div>
  );
};

export default ForecastCard;