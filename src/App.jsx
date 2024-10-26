import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import WeatherProvider from "./context/WeatherContext";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;
