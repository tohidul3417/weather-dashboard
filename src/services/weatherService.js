const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
console.log('API Key', API_KEY);

const getLatLon = async (city) => {
  const apiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    if (data.length > 0) {
      const lat = data[0]["lat"];
      const lon = data[0]["lon"];
      console.log("City found");
      return { lat, lon };
    } else {
      console.log("City not found");
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

const getCurrentWeather = async (city, unit) => {
  const location = await getLatLon(city);
  if (location) {
    const { lat, lon } = location;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`;
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } else {
    return null;
  }
};

export {getCurrentWeather};