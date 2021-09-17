import axios from "axios";

export const getWeatherData = async (lat,lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=803a8e08a6a329e3f5dd8be7cfd6d2f8#`)
    .then((response)=>{
        return response.data;
    })
    .catch((err => err))
   
    return response;
}

