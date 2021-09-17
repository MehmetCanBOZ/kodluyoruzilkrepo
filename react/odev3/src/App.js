import logo from './logo.svg';
import './App.css';
import { WeatherContectProvider } from "./Context/Context"; 
import  Header  from "./Components/Header/Header";
import WeatherCard from './Components/WeatherCard/WeatherCard';

function App() {
  
 // getWeatherData("Istanbul");
  return (  
    <WeatherContectProvider>
       <Header/>
       <WeatherCard/>
    </WeatherContectProvider>
  );
}

export default App;
