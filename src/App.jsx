import Header from "./components/Header";
import WeatherProvider from "./context/WeatherContext";
import Home from "./pages/Home";

function App() {
  return (
    <WeatherProvider>
      <Header />
      <Home />
    </WeatherProvider>
  );
}

export default App;
