import { createContext, useContext, useEffect, useState} from "react";
import {getWeatherData} from "../Api/Api";
import { cityData } from "../data";

const WeatherContext = createContext();
   
const WeatherContectProvider = ({children}) =>{
     
    const [cityId,SetCityId] = useState(1);

    const [cityInfo,SetCityInfo] = useState({});

    const getData = async (cityData,cityId) => {
          const data = await getWeatherData(cityData[cityId-1].latitude,cityData[cityId-1].longitude);

          SetCityInfo(data);
    }

    useEffect(() => {
        getData(cityData,cityId)
    }, [cityId])

   
    const data = {
        cityId,SetCityId,cityInfo
    }
    return <WeatherContext.Provider value = {data}>
               {children}
           </WeatherContext.Provider>
}

export {
    WeatherContectProvider,
    useContext,
    WeatherContext
}