import SearchBar from './components/SearchBar';
import WeatherProvider from './context/WeatherContext';
import WeatherCard from './components/WeatherCard';

function App() {
  return (
    <WeatherProvider>
 <SearchBar />
 <WeatherCard />
    </WeatherProvider>
     
  );
}

export default App;
