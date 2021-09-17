import "./WeatherCard.scss"
import { WeatherContext, useContext } from '../../Context/Context'
import Card from "../Card/Card";
const WeatherCard = () => {
    const {cityInfo} = useContext(WeatherContext);
      
    return (
        <div className="wrapper">
          { 
              cityInfo?.daily?.map((item,index) =>{
                  return <Card
                      key = {index}
                      icon = {item.weather[0].icon}
                      high = {item.temp.max}
                      low = {item.temp.min}
                      timeStamp = {item.dt}
                  />
              })
          }
          {
            console.log("c",cityInfo)
          }
        </div>
    )
}

export default WeatherCard;
